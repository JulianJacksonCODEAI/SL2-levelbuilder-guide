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

## Checks on every pull request

| Workflow | Job | Fails when |
|---|---|---|
| Privacy check | Secrets (Gitleaks) | A key, token or password is in any commit. |
| Privacy check | Private CodeAI information | A file has an internal link (Google Docs or Drive, Slack, Notion, Figma), a Level Builder URL with a real level ID, a `@code.org` email, or a private name. |
| CI | Build (strict) | The site build has any warning, such as a broken internal link or missing image. |
| CI | Markdown lint | A page has broken Markdown. Rules are in `.markdownlint.yaml`. |
| CI | Link check | An outside link is dead. |

Private names live in the repository secret `PRIVATE_TERMS` (one per line), never in the repo. The check reports them as "private term #N", so the log doesn't reveal them. To excuse a safe match, add a regular expression to `.privacy-allow.txt`.

Run the privacy check locally with `python scripts/privacy_scan.py`.

## Block pictures

`docs/images/blocks/` holds each block in the lab's Modern Light (`-light.png`) and Modern Dark (`-dark.png`) themes, captured from the real lab. Pages show the one that matches the reader's light or dark mode.
