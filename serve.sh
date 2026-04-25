#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

ROOT_DIR="$(pwd)"
PROJECTS_DIR="$(cd "$ROOT_DIR/.." && pwd)"
MINDCRAFT_DIR="$ROOT_DIR/games/Kimi k2.6 mindcraft"
MINDCRAFT_URL="http://127.0.0.1:43110/"
MINDCRAFT_PID=""

cleanup() {
  if [ -n "${MINDCRAFT_PID:-}" ] && kill -0 "$MINDCRAFT_PID" >/dev/null 2>&1; then
    echo "[serve] stopping auto-started Mindcraft (pid $MINDCRAFT_PID)"
    kill "$MINDCRAFT_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT INT TERM

# Ensure Mindcraft embed endpoint exists (autostart if missing)
if ! curl -fsS --max-time 2 "$MINDCRAFT_URL" >/dev/null 2>&1; then
  if [ -d "$MINDCRAFT_DIR" ] && command -v npm >/dev/null 2>&1; then
    echo "[serve] Mindcraft offline; starting local launcher server..."
    (
      cd "$MINDCRAFT_DIR"
      if [ ! -d node_modules ]; then
        npm install --silent
      fi
      MINDCRAFT_LAUNCHER_NO_OPEN=1 npm start
    ) >/tmp/mindcraft-website.log 2>&1 &
    MINDCRAFT_PID=$!

    # wait briefly for startup
    for _ in $(seq 1 20); do
      if curl -fsS --max-time 2 "$MINDCRAFT_URL" >/dev/null 2>&1; then
        echo "[serve] Mindcraft embed ready at $MINDCRAFT_URL"
        break
      fi
      sleep 0.5
    done
  else
    echo "[serve] Mindcraft directory or npm missing; embed may be unavailable" >&2
  fi
fi

# Boot behavior: rebuild + re-embed games automatically before serving.
# Set SKIP_SYNC=1 to skip rebuilding.
if [ "${SKIP_SYNC:-0}" != "1" ]; then
  if command -v npm >/dev/null 2>&1; then
    bash "./sync-games.sh"
  else
    echo "[serve] npm not found; skipping embedded game sync" >&2
  fi
fi

# Auto-open the site (set NO_OPEN=1 to disable)
if [ "${NO_OPEN:-0}" != "1" ] && command -v xdg-open >/dev/null 2>&1; then
  (xdg-open "http://127.0.0.1:8080/" >/dev/null 2>&1 || true) &
fi

python3 -m http.server 8080 --bind 127.0.0.1
