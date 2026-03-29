# Contributing — Git Workflow

Every change to this repository follows the same ritual, no exceptions.

---

## The Rule

**No work happens on `main` directly.**
Every feature, fix, or update lives on its own branch and is merged back
with a no-fast-forward commit that keeps the history readable.

---

## Step-by-Step

### 1. Branch first

Before touching a single file, create a branch from `main`:

```bash
git checkout main
git pull
git checkout -b feat/your-feature
```

Branch naming:

| Prefix     | When to use                          |
|------------|--------------------------------------|
| `feat/`    | New section, component, or feature   |
| `fix/`     | Bug fix or visual correction         |
| `chore/`   | Config, deps, tooling, CI            |
| `refactor/`| Restructure without behaviour change |

### 2. Stage what changed

Only stage the files that belong to this branch:

```bash
git add app/components/MyComponent.tsx
# — never blindly: git add .
```

If you're touching multiple unrelated things, split them into separate branches.

### 3. Commit with context

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(section): short imperative summary

Optional body explaining *why*, not what.
Wrap at 72 characters.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Co-Authored-By: MehediT <mehedi.toure@gmail.com>
```

Rules:
- Subject line ≤ 72 chars, no period at the end
- Use `feat`, `fix`, `chore`, `refactor`, `style`, `docs`
- Co-author both contributors on every commit

### 4. Merge into main — no fast-forward

```bash
git checkout main
git merge --no-ff feat/your-feature -m "Merge branch 'feat/your-feature'

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Co-Authored-By: MehediT <mehedi.toure@gmail.com>"
```

The `--no-ff` flag preserves the branch bubble in the graph.
Never `git merge` without it.

### 5. Push

```bash
git push --all
```

---

## What the graph should look like

```
*   Merge branch 'feat/contact'
|\
| * feat(contact): contact section with email CTA
|/
*   Merge branch 'feat/pricing'
|\
| * feat(pricing): work-with-me section, 3 plans
|/
* a087279 Initial commit
```

Every feature is a visible bubble. The graph reads like a changelog.

---

## Quick Reference

```bash
# Start work
git checkout main && git pull
git checkout -b feat/my-thing

# ... make changes ...

git add <specific files>
git commit -m "feat(scope): summary

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Co-Authored-By: MehediT <mehedi.toure@gmail.com>"

# Merge back
git checkout main
git merge --no-ff feat/my-thing -m "Merge branch 'feat/my-thing'

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Co-Authored-By: MehediT <mehedi.toure@gmail.com>"

git push --all
```
