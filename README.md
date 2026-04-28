# AI Game Lab

AI Game Lab is a polished browser hub that showcases multiple playable game projects in one place.  
It is designed as a public-facing launchpad for experiments, prototypes, and production-ready game systems created with AI-assisted workflows.

## What Viewers See

- A modern single-page game showcase experience
- Embedded play area for supported games
- Quick launch commands for local development
- Story/context section explaining the project vision

## Included Projects

- **CraftVerse Engine** (`voxel`) - Minecraft-style voxel sandbox systems
- **DeadTakeover** (`zombie`) - Open-world zombie survival FPS
- **Mindcraft Control Deck** (`mindcraft`) - Local launcher/orchestration tool (runs separately on localhost)

## Local Run

Serve the hub locally:

```bash
chmod +x serve.sh sync-games.sh
./serve.sh
```

Then open: `http://127.0.0.1:8080/`

### Useful Options

- Skip rebuild/sync before serving:
  ```bash
  SKIP_SYNC=1 ./serve.sh
  ```
- Do not auto-open browser:
  ```bash
  NO_OPEN=1 ./serve.sh
  ```

## How Build Sync Works

`sync-games.sh` rebuilds and embeds game outputs into:

- `games/voxel`
- `games/zombie`

This keeps the hub synchronized with your latest local builds from sibling project folders.

## Project Structure

```text
.
├── index.html           # Main landing/showcase page
├── script.js            # Theme, player controls, session logic
├── styles.css           # Site styling and visual identity
├── serve.sh             # Local server + optional auto-start/sync
├── sync-games.sh        # Rebuilds and copies game dist outputs
├── games/               # Embedded build outputs
├── play/                # Play route assets/content
├── showcase/            # Showcase route assets/content
└── story/               # Narrative/about route assets/content
```

## Publishing Notes

- This repository currently stores built/static assets directly for fast deploys.
- Mindcraft is a local app (`127.0.0.1:43110`) and cannot be universally embedded on hosted HTTPS pages.

## Roadmap Ideas

- Add screenshots/GIF previews in the README
- Add release notes/changelog for major gameplay updates
- Add automated checks for broken local links and embed health

## License

No open-source license file is currently defined.  
If you plan to open-source this repo, add a license (for example MIT) and clarify third-party asset usage.
