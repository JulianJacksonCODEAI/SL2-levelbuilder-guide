"""Fail if the repo contains private CodeAI information.

Checks every file tracked by git (text files only) for:
  - internal links (Google Docs/Drive, Slack, Notion, Figma, Level Builder edit URLs with real IDs)
  - @code.org email addresses
  - private names and terms listed in the PRIVATE_TERMS environment variable
    (one per line; stored as a GitHub secret, never in this repo)

Private terms are never printed: a match is reported as "private term #N".
Lines can be excused with regular expressions in .privacy-allow.txt (one per line).

Usage: python scripts/privacy_scan.py
Exit code 1 when anything is found.
"""
import os
import re
import subprocess
import sys

BUILTIN = [
    ("Google Docs/Drive link", r"https?://(docs|drive|sheets|slides)\.google\.com/\S+"),
    ("Slack link", r"https?://[a-z0-9-]+\.slack\.com/\S*"),
    ("Slack channel", r"(?<![\w&/])#(student-learning|project-[a-z0-9-]+|contributors)\b"),
    ("Notion link", r"https?://(www\.)?notion\.(so|site)/\S+"),
    ("Figma link", r"https?://(www\.)?figma\.com/\S+"),
    ("Level Builder level ID", r"levelbuilder[\w.-]*\.code\.org/levels/\d+"),
    ("code.org email", r"[\w.+-]+@code\.org\b"),
]
SKIP_EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".woff", ".woff2", ".ttf", ".pdf", ".zip"}
SKIP_FILES = {".privacy-allow.txt"}


def tracked_files():
    out = subprocess.run(["git", "ls-files", "-z"], capture_output=True, check=True).stdout
    return [f for f in out.decode().split("\0") if f]


def load_allow():
    try:
        with open(".privacy-allow.txt", encoding="utf-8") as fh:
            return [re.compile(l.strip()) for l in fh if l.strip() and not l.startswith("#")]
    except FileNotFoundError:
        return []


def load_private_terms():
    raw = os.environ.get("PRIVATE_TERMS", "")
    terms = [t.strip() for t in raw.splitlines() if t.strip() and not t.strip().startswith("#")]
    return [re.compile(r"(?<!\w)" + re.escape(t) + r"(?!\w)", re.IGNORECASE) for t in terms]


def main():
    allow = load_allow()
    builtin = [(label, re.compile(p, re.IGNORECASE)) for label, p in BUILTIN]
    private = load_private_terms()
    if not private:
        print("Note: PRIVATE_TERMS is empty, so only built-in patterns are checked.")
    findings = 0
    for path in tracked_files():
        if os.path.splitext(path)[1].lower() in SKIP_EXT or os.path.basename(path) in SKIP_FILES:
            continue
        try:
            with open(path, encoding="utf-8") as fh:
                lines = fh.readlines()
        except (UnicodeDecodeError, FileNotFoundError):
            continue
        for n, line in enumerate(lines, 1):
            if any(a.search(line) for a in allow):
                continue
            for label, rx in builtin:
                if rx.search(line):
                    findings += 1
                    print(f"::error file={path},line={n}::{label} found")
            for i, rx in enumerate(private, 1):
                if rx.search(line):
                    findings += 1
                    print(f"::error file={path},line={n}::private term #{i} found")
    if findings:
        print(f"\n{findings} problem(s) found. Remove them, or add a pattern to .privacy-allow.txt if a match is safe to publish.")
        return 1
    print("No private information found.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
