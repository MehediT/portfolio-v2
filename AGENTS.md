<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Git Workflow

Read `.github/CONTRIBUTING.md` before making any code changes.
The short version:

1. **Branch first** — `git checkout -b feat/your-feature` before touching any file.
2. **Stage selectively** — `git add <specific files>`, never `git add .`.
3. **Commit with co-authors** — every commit must include:
   ```
   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   Co-Authored-By: MehediT <mehedi.toure@gmail.com>
   ```
4. **Merge with `--no-ff`** — always, no exceptions.
