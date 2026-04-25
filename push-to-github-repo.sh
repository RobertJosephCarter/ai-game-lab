#!/usr/bin/env bash
# Copy this website (hub + games/*) into a clone of your GitHub repo with the
# folder layout GitHub Pages expects. Flat uploads (everything at repo root) break
# embeds because each game’s index.html uses paths like ./assets/ and ./textures/
# relative to its own directory — they must live under games/voxel and games/zombie.
#
# Usage:
#   bash sync-games.sh                    # optional: rebuild games into Website/games/
#   git clone https://github.com/YOU/ai-game-lab.git /tmp/ai-game-lab
#   bash push-to-github-repo.sh /tmp/ai-game-lab
#   cd /tmp/ai-game-lab && git add -A && git commit -m "Layout hub + games for Pages" && git push
#
# GitHub web UI: "Add file" → name it games/zombie/index.html (slashes create folders).
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="${1:-}"

if [[ -z "$REPO_DIR" || "$REPO_DIR" == "-h" || "$REPO_DIR" == "--help" ]]; then
  sed -n '2,20p' "$0" | sed 's/^# \{0,1\}//'
  exit 0
fi

if [[ ! -d "$REPO_DIR/.git" ]]; then
  echo "error: not a git clone (missing .git): $REPO_DIR" >&2
  exit 1
fi

for f in index.html styles.css script.js mindcraft-info.html; do
  test -f "$ROOT_DIR/$f" || { echo "error: missing $ROOT_DIR/$f" >&2; exit 1; }
done
test -f "$ROOT_DIR/games/voxel/index.html" || { echo "error: run sync-games.sh first (missing games/voxel)" >&2; exit 1; }
test -f "$ROOT_DIR/games/zombie/index.html" || { echo "error: run sync-games.sh first (missing games/zombie)" >&2; exit 1; }

REPO_DIR="$(cd "$REPO_DIR" && pwd)"

echo "Copying hub files → $REPO_DIR"
cp -a "$ROOT_DIR/index.html" "$ROOT_DIR/styles.css" "$ROOT_DIR/script.js" "$ROOT_DIR/mindcraft-info.html" "$REPO_DIR/"

echo "Copying section paths (GitHub Pages has no SPA router; /play → #play) → $REPO_DIR"
for d in play showcase story; do
  if [[ -d "$ROOT_DIR/$d" ]]; then
    mkdir -p "$REPO_DIR/$d"
    cp -a "$ROOT_DIR/$d/." "$REPO_DIR/$d/"
  fi
done

echo "Copying games/voxel and games/zombie → $REPO_DIR/games/"
mkdir -p "$REPO_DIR/games/voxel" "$REPO_DIR/games/zombie"
rm -rf "${REPO_DIR:?}/games/voxel"/* "${REPO_DIR:?}/games/zombie"/*
cp -a "$ROOT_DIR/games/voxel/." "$REPO_DIR/games/voxel/"
cp -a "$ROOT_DIR/games/zombie/." "$REPO_DIR/games/zombie/"

echo
echo "Done. Commit and push from the clone:"
echo "  cd \"$REPO_DIR\""
echo "  git config user.name \"Your GitHub username\""
echo "  git config user.email \"your-email@example.com\"   # or YOU@users.noreply.github.com"
echo "  git status"
echo "  git add -A"
echo "  git commit -m \"Pages: hub at root, games under games/\"   # skip if already committed"
echo
echo "GitHub no longer accepts account passwords for git push. Use one of:"
echo "  • HTTPS + Personal Access Token: https://github.com/settings/tokens (scopes: Contents: Read/Write)"
echo "    When git asks for Password, paste the token (not your GitHub password)."
echo "  • Or SSH: add an SSH key in GitHub settings, then:"
echo "    git remote set-url origin git@github.com:YOU/REPO.git && git push"
echo
