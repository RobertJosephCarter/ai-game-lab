const body = document.body;
body.classList.add("js");

const themeBtn = document.getElementById("themeBtn");
const toast = document.getElementById("toast");

const THEME_KEY = "website-theme";

function systemPreferredTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  const isLight = theme === "light";
  body.classList.toggle("light", isLight);
  themeBtn.textContent = isLight ? "Dark" : "Light";
  localStorage.setItem(THEME_KEY, theme);
}

applyTheme(localStorage.getItem(THEME_KEY) || systemPreferredTheme());

themeBtn.addEventListener("click", () => {
  applyTheme(body.classList.contains("light") ? "dark" : "light");
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTop");
if (scrollTopBtn) {
  let stTicking = false;
  window.addEventListener("scroll", () => {
    if (!stTicking) {
      window.requestAnimationFrame(() => {
        scrollTopBtn.hidden = window.scrollY < 300;
        stTicking = false;
      });
      stTicking = true;
    }
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => toast.classList.remove("show"), 1400);
}

// Reveal on scroll (with no-JS fallback in CSS)
const revealItems = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("in");
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
  );
  revealItems.forEach((el) => io.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add("in"));
}

// Active nav section highlighting
const navLinks$$ = document.querySelectorAll(".nav a");
const navSections = [...document.querySelectorAll("section[id]")];
if ("IntersectionObserver" in window && navLinks$$.length) {
  const navIo = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          navLinks$$.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      }
    },
    { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" }
  );
  navSections.forEach((s) => navIo.observe(s));
}

// Copy buttons
for (const btn of document.querySelectorAll("[data-copy]")) {
  btn.addEventListener("click", async () => {
    const selector = btn.getAttribute("data-copy");
    const pre = selector ? document.querySelector(selector) : null;
    const text = pre?.innerText?.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand && document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(ok ? "Copied" : "Copy failed");
    }
  });
}

// Embedded player
const GAME_URLS = {
  voxel: "./games/voxel/index.html",
  zombie: "./games/zombie/index.html",
  mindcraft: "http://127.0.0.1:43110/"
};
const EMBED_CACHE_KEY = "_v";
const IS_LOCAL_RUNTIME = ["127.0.0.1", "localhost"].includes(window.location.hostname);

const playerFrame = document.getElementById("playerFrame");
const playerTitle = document.getElementById("playerTitle");
const playerHint = document.getElementById("playerHint");
const playerLoader = document.getElementById("playerLoader");
const stopBtn = document.getElementById("stopBtn");
const fullBtn = document.getElementById("fullBtn");
const focusBtn = document.getElementById("focusBtn");
const openHere = document.getElementById("openHere");
const openTab = document.getElementById("openTab");

let activeGame = null;
let loadRequestId = 0;
let loadTimeoutId = null;
let captureHandler = null;
let autoStartTimer = null;
let isSwitchingGame = false;

function setPlayerEnabled(enabled) {
  stopBtn.disabled = !enabled;
  fullBtn.disabled = !enabled;
  if (focusBtn) focusBtn.disabled = !enabled;
  if (openHere) openHere.disabled = !enabled;
  openTab.setAttribute("aria-disabled", String(!enabled));
  if (!enabled) openTab.setAttribute("href", "#");

  if (playerHint) playerHint.hidden = !enabled;
}

function teardownCaptureModes() {
  if (document.fullscreenElement && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
  if (document.pointerLockElement && document.exitPointerLock) {
    document.exitPointerLock();
  }
}

function setLoadingState(isLoading, key) {
  if (playerLoader) {
    playerLoader.classList.toggle("is-hidden", !isLoading);
  }
  if (isLoading) {
    stopBtn.disabled = false;
    fullBtn.disabled = true;
    if (focusBtn) focusBtn.disabled = true;
    if (openHere) openHere.disabled = true;
    openTab.setAttribute("aria-disabled", "true");
    playerTitle.textContent =
      key === "voxel" ? "Loading voxel game..." : key === "zombie" ? "Loading zombie game..." : "Loading Mindcraft...";
    return;
  }
  setPlayerEnabled(true);
  // Hosted hub: Mindcraft “session” is an explainer iframe, not the real launcher.
  if (key === "mindcraft" && !IS_LOCAL_RUNTIME) {
    fullBtn.disabled = true;
    if (focusBtn) focusBtn.disabled = true;
    if (openHere) openHere.disabled = true;
    openTab.setAttribute("aria-disabled", "false");
    openTab.setAttribute("href", "http://127.0.0.1:43110/");
  }
}

async function canReach(url) {
  try {
    await fetch(url, { mode: "no-cors", cache: "no-store" });
    return true;
  } catch {
    return false;
  }
}

function withCacheBust(url) {
  try {
    const resolved = new URL(url, window.location.href);
    resolved.searchParams.set(EMBED_CACHE_KEY, String(Date.now()));
    if (resolved.origin === window.location.origin) {
      return `${resolved.pathname}${resolved.search}${resolved.hash}`;
    }
    return resolved.toString();
  } catch {
    return url;
  }
}

async function loadGame(key) {
  const baseUrl = GAME_URLS[key];
  if (!baseUrl || !playerFrame || isSwitchingGame) return;
  const sessionUrl = key === "mindcraft" ? baseUrl : withCacheBust(baseUrl);
  if (key === "mindcraft" && !IS_LOCAL_RUNTIME) {
    isSwitchingGame = true;
    const requestId = ++loadRequestId;
    if (autoStartTimer) {
      window.clearInterval(autoStartTimer);
      autoStartTimer = null;
    }
    window.clearTimeout(loadTimeoutId);
    setLoadingState(true, key);

    const wasSwitching = !!activeGame && activeGame !== key;
    if (wasSwitching) {
      teardownCaptureModes();
      playerFrame.src = "about:blank";
      await new Promise((resolve) => window.setTimeout(resolve, 60));
      if (requestId !== loadRequestId) {
        isSwitchingGame = false;
        return;
      }
    }

    activeGame = key;
    playerFrame.src = "./mindcraft-info.html";
    playerTitle.textContent = "Mindcraft (local launcher)";
    if (playerHint) {
      playerHint.hidden = false;
      playerHint.textContent =
        "Mindcraft runs as a Node server on your PC (127.0.0.1:43110). It cannot load inside this HTTPS page; use Open tab if the server is running locally.";
    }
    openTab.setAttribute("href", "http://127.0.0.1:43110/");
    openTab.setAttribute("title", "Opens your machine’s localhost — only works if Mindcraft is already running.");
    openTab.setAttribute("aria-disabled", "false");
    setLoadingState(false, key);
    showToast("Mindcraft: local-only — see panel.");
    isSwitchingGame = false;
    return;
  }
  isSwitchingGame = true;
  const requestId = ++loadRequestId;
  const wasSwitching = !!activeGame && activeGame !== key;

  if (autoStartTimer) {
    window.clearInterval(autoStartTimer);
    autoStartTimer = null;
  }
  window.clearTimeout(loadTimeoutId);
  setLoadingState(true, key);

  if (key === "mindcraft") {
    showToast("Opening Mindcraft…");
    const ok = await canReach(baseUrl);
    if (requestId !== loadRequestId) {
      isSwitchingGame = false;
      return;
    }
    if (!ok) {
      activeGame = null;
      playerFrame.src = "about:blank";
      playerTitle.textContent = "Mindcraft launcher is offline";
      if (playerHint) {
        playerHint.hidden = false;
        playerHint.textContent = "Start Mindcraft with npm start, then press Mindcraft again. You can also use Open tab.";
      }
      openTab.setAttribute("href", baseUrl);
      stopBtn.disabled = true;
      fullBtn.disabled = true;
      if (focusBtn) focusBtn.disabled = true;
      if (openHere) openHere.disabled = true;
      openTab.setAttribute("aria-disabled", "false");
      showToast("Mindcraft isn't running on 127.0.0.1:43110");
      isSwitchingGame = false;
      return;
    }
  } else {
    showToast("Loading…");
  }

  if (requestId !== loadRequestId) {
    isSwitchingGame = false;
    return;
  }

  if (wasSwitching) {
    teardownCaptureModes();
    playerFrame.src = "about:blank";
    await new Promise((resolve) => window.setTimeout(resolve, 60));
    if (requestId !== loadRequestId) {
      isSwitchingGame = false;
      return;
    }
  }

  activeGame = key;
  playerFrame.src = sessionUrl;
  playerTitle.textContent =
    key === "voxel" ? "Voxel game (embedded)" : key === "zombie" ? "Zombie FPS (embedded)" : "Mindcraft launcher (local)";

  if (playerHint) {
    playerHint.textContent =
      key === "mindcraft"
        ? "Mindcraft runs as a separate local server. Start it, then this embed will load."
        : key === "zombie"
          ? "Zombie starts manually for stability. Pick a map, then click Start Game."
        : "Booting… the website will auto-start the game. If controls feel stuck, click once anywhere.";
  }

  openTab.setAttribute("href", sessionUrl);
  armCaptureForSession();
  loadTimeoutId = window.setTimeout(() => {
    if (requestId !== loadRequestId || activeGame !== key) return;
    showToast("Still loading. If it stalls, press Stop and try again.");
  }, 10000);

  // Best-effort focus so keyboard input reaches the iframe.
  if (key !== "mindcraft") pumpFocus(1400);
  isSwitchingGame = false;
}

function stopGame() {
  if (!playerFrame) return;
  ++loadRequestId;
  window.clearTimeout(loadTimeoutId);
  if (autoStartTimer) {
    window.clearInterval(autoStartTimer);
    autoStartTimer = null;
  }
  if (playerLoader) playerLoader.classList.add("is-hidden");
  teardownCaptureModes();
  activeGame = null;
  isSwitchingGame = false;
  playerFrame.src = "about:blank";
  playerTitle.textContent = "Choose a game to play";
  if (playerHint) playerHint.hidden = true;
  setPlayerEnabled(false);
  showToast("Stopped");
}

function pumpFocus(durationMs = 1200) {
  const end = performance.now() + durationMs;

  const tick = () => {
    if (!activeGame) return;
    try {
      playerFrame.focus();
      playerFrame.contentWindow?.focus();
    } catch {
      // ignore
    }
    if (performance.now() < end) window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);
}

function focusPlayer() {
  if (!activeGame) return;
  try {
    playerFrame.focus();
    playerFrame.contentWindow?.focus();
    showToast("Focused");
  } catch {
    showToast("Click once anywhere");
  }
}

function goFullscreen() {
  if (!activeGame) return;
  const el = playerFrame;
  if (el.requestFullscreen) el.requestFullscreen();
}

setPlayerEnabled(false);
if (playerHint) playerHint.hidden = true;

// Best-effort input capture: re-armed each game load so each session
// gets one assisted click-to-focus/pointer-lock attempt.
function armCaptureForSession() {
  if (captureHandler) {
    document.removeEventListener("pointerdown", captureHandler, true);
  }
  captureHandler = () => {
    if (!activeGame || activeGame === "mindcraft") return;
    focusPlayer();

    try {
      const doc = playerFrame?.contentDocument;
      const el = doc?.querySelector("canvas") || doc?.getElementById("app") || doc?.body;
      el?.requestPointerLock?.();
    } catch {
      // ignore
    }
  };
  document.addEventListener("pointerdown", captureHandler, { once: true, capture: true });
}

// Autostart is opt-in only: use ?autostart=1
const AUTO_START = new URLSearchParams(window.location.search).get("autostart") === "1";

function isVisible(el) {
  return !!(el && el.offsetParent !== null);
}

function clickVisible(doc, selector) {
  const el = doc.querySelector(selector);
  if (!isVisible(el) || el.disabled) return false;
  el.click();
  return true;
}

function driveVoxelBoot(doc) {
  const title = doc.getElementById("title-screen");
  if (title?.classList.contains("hidden")) return true;

  if (clickVisible(doc, "#btn-creative")) return true;
  if (clickVisible(doc, "#btn-singleplayer")) return true;

  const world = doc.querySelector(".world-item");
  if (isVisible(world)) {
    world.click();
    return true;
  }

  if (clickVisible(doc, "#btn-create-world")) return true;

  const startNew = doc.getElementById("btn-start-new");
  const name = doc.getElementById("new-world-name");
  if (isVisible(startNew) && name) {
    if (!name.value) name.value = "Auto World";
    name.dispatchEvent(new Event("input", { bubbles: true }));
    startNew.click();
    return true;
  }

  return false;
}

function driveZombieBoot(doc) {
  const overlay = doc.getElementById("menu-overlay");
  if (overlay && (overlay.classList.contains("is-hidden") || overlay.style.display === "none")) return true;

  const grid = doc.getElementById("map-grid");
  const hasSelectedMap = !!grid?.querySelector(".is-active-map");
  const firstMap = grid?.firstElementChild;
  if (!hasSelectedMap && firstMap && isVisible(firstMap)) {
    firstMap.click();
  }

  if (clickVisible(doc, "#btn-start")) return true;
  return false;
}

function autoStartLoop(key) {
  if (!AUTO_START) return;
  if (!playerFrame || !key || key === "mindcraft") return;
  // Zombie auto-driving causes unstable menu/start loops in some browsers.
  if (key === "zombie") return;
  if (autoStartTimer) {
    window.clearInterval(autoStartTimer);
    autoStartTimer = null;
  }

  let tries = 0;
  const maxTries = key === "zombie" ? 1 : 28;
  autoStartTimer = window.setInterval(() => {
    tries++;
    if (activeGame !== key) {
      window.clearInterval(autoStartTimer);
      autoStartTimer = null;
      return;
    }

    try {
      const doc = playerFrame.contentDocument;
      if (!doc) return;

      const done = key === "voxel" ? driveVoxelBoot(doc) : key === "zombie" ? driveZombieBoot(doc) : true;
      if (done || tries >= maxTries) {
        window.clearInterval(autoStartTimer);
        autoStartTimer = null;
      }
    } catch {
      if (tries >= maxTries) {
        window.clearInterval(autoStartTimer);
        autoStartTimer = null;
      }
    }
  }, 250);
}

playerFrame?.addEventListener("load", () => {
  window.clearTimeout(loadTimeoutId);
  if (activeGame) setLoadingState(false, activeGame);

  // Re-focus after navigation; helps with iframe keyboard input.
  pumpFocus(1200);

  // Auto-drive the embedded game's own menus so it starts by itself.
  autoStartLoop(activeGame);
});

// If the page has focus while a game is loaded, prevent common scroll keys
// so it still *feels* like input is going to the player.
window.addEventListener("keydown", (e) => {
  if (!activeGame || activeGame === "mindcraft") return;
  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
    e.preventDefault();
  }
});

stopBtn.addEventListener("click", stopGame);
fullBtn.addEventListener("click", goFullscreen);
focusBtn?.addEventListener("click", focusPlayer);
openHere?.addEventListener("click", () => {
  const url = openTab.getAttribute("href");
  if (!url || url === "#") return;
  teardownCaptureModes();
  showToast("Opening full-page…");
  window.location.href = url;
});

for (const btn of document.querySelectorAll("[data-play]")) {
  btn.addEventListener("click", async () => {
    const key = btn.getAttribute("data-play");
    const scrollTo = btn.getAttribute("data-scroll");

    await loadGame(key);

    if (scrollTo) {
      document.querySelector(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Optional auto-boot: only when explicitly requested via ?game=...&autostart=1
const params = new URLSearchParams(window.location.search);
const bootGame = params.get("game");
if (AUTO_START && bootGame && GAME_URLS[bootGame]) {
  loadGame(bootGame);
}
