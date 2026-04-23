#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECTS_DIR="$(cd "$ROOT_DIR/.." && pwd)"

echo "Building voxel game…"
echo "Preparing voxel assets…"
cd "$PROJECTS_DIR/Cursor Minecraft Clone Game"
bash scripts/fetch_assets.sh
test -f "$PROJECTS_DIR/Cursor Minecraft Clone Game/game/public/textures/minecraft-atlas.png"

cd "$PROJECTS_DIR/Cursor Minecraft Clone Game/game"
if [ ! -d node_modules ]; then
  npm install --silent
fi
npm run -s build
test -f "$PROJECTS_DIR/Cursor Minecraft Clone Game/game/dist/textures/minecraft-atlas.png"

echo "Building zombie game…"
cd "$PROJECTS_DIR/Zombie Open World Game/Zombie Open World Game"
if [ ! -d node_modules ]; then
  npm install --silent
fi
npm run -s build

echo "Copying builds into Website/games/…"
cd "$ROOT_DIR"
rm -rf games
mkdir -p games/voxel games/zombie
cp -a "$PROJECTS_DIR/Cursor Minecraft Clone Game/game/dist/." "$ROOT_DIR/games/voxel/"
cp -a "$PROJECTS_DIR/Zombie Open World Game/Zombie Open World Game/dist/." "$ROOT_DIR/games/zombie/"

test -f "$ROOT_DIR/games/voxel/index.html"
test -f "$ROOT_DIR/games/zombie/index.html"

echo "Done. Start the site with: ./serve.sh"
