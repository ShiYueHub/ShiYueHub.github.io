"""Export only the website's public files for GitHub Pages."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "dist"
OUT.mkdir(exist_ok=True)
for name in ("index.html", "styles.css", "app.js"):
    shutil.copy2(ROOT / name, OUT / name)
assets = OUT / "assets"
assets.mkdir(exist_ok=True)
for name in ("studio-icon.png", "favicon.png", "slime-post.jpg", "slime-post-detail.jpg", "island-guard.jpg", "last-stop-island.jpg"):
    shutil.copy2(ROOT / "assets" / name, assets / name)
(OUT / ".nojekyll").touch()
print(f"Built public website: {OUT}")
