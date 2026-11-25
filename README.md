# Sprite Lab 2 Level Builder Guide

How to build Sprite Lab 2 (Lab2) levels in Code.org Level Builder.

Live site: https://julianjacksoncodeai.github.io/SL2-levelbuilder-guide/

## Edit a page

Pages are Markdown files in `docs/`. The sidebar order is set in `zensical.toml` (`nav`).

## Preview locally

```
pip install zensical
zensical serve
```

## Publish

Every push to `main` builds the site with GitHub Actions (`.github/workflows/docs.yml`) and deploys it to GitHub Pages.

## Block pictures

`docs/images/blocks/` holds each block in the lab's Modern Light (`-light.png`) and Modern Dark (`-dark.png`) themes, captured from the real lab. Pages show the one that matches the reader's light or dark mode.
