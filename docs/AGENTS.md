# WeCaHan Auto — Cursor Agent Rules

## Project Context
This repo is a single Next.js application for a hostname-aware site family setup.

### Stack
- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Vercel deploy

### Site Families
- `auto.wecahan.com` → `center`
- `tr.auto.wecahan.com` → `tr`
- `global.auto.wecahan.com` → `global`

---

## Critical Architecture Rules

### 1) Single app entry for `/`
Do **not** create separate route-group home routes like:
- `(center)/page.tsx`
- `(tr)/page.tsx`
- `(global)/page.tsx`

That causes route conflict for `/`.

Correct approach:
- keep a single `app/page.tsx`
- detect hostname
- resolve site family
- select the correct site config
- dispatch rendering from there

### 2) Foundation first
Do **not** generate hero sections, navbars, pricing blocks, page compositions, or marketing components until the site-family detection layer is explicitly completed and approved.

### 3) One task at a time
For this project:
- one prompt = one task
- one task = one file or one very small scoped change

Do not make broad multi-file rewrites unless explicitly requested.

### 4) Preserve existing architecture
Do not invent alternative routing systems, multi-app splits, or parallel site structures.
Do not replace the hostname-aware dispatcher approach.

### 5) Docs are support, not authority by default
Docs inside `docs/` are useful context, but do not assume everything should be inferred automatically.
When a prompt references specific markdown files, use those files as the primary implementation context.

---

## Current Phase
We are in **Foundation**.

### Foundation scope
Only these layers belong here:
1. `types/site.ts`
2. `config/sites/center.ts`
3. `config/sites/tr.ts`
4. `config/sites/global.ts`
5. `config/routing/site-family-map.ts`
6. `lib/site/get-hostname.ts`
7. `lib/site/detect-site-family.ts`
8. `lib/site/get-site-config.ts`

### Important note
`app/page.tsx` dispatcher conversion is currently **paused** until explicitly requested.

---

## Implementation Style Rules

### Keep code:
- small
- explicit
- typed
- easy to review
- free of unnecessary abstraction

### Avoid:
- premature generalization
- speculative helper layers
- over-engineered factories
- adding CMS, database, admin, analytics expansion, or test frameworks unless explicitly requested

### Prefer:
- predictable naming
- thin helpers
- deterministic config objects
- direct imports over clever indirection

---

## Cursor Working Rules

When asked to implement a task:
1. inspect only the relevant files
2. inspect explicitly referenced docs if provided
3. change only the requested file unless the task explicitly requires otherwise
4. do not continue into the next task automatically
5. stop after the requested file is done

When generating code, always respect the existing hostname-aware site family architecture.

---

## Output Expectations
When asked for implementation:
- produce only the requested file/change
- do not bundle unrelated steps
- do not “helpfully” generate extra components
- do not refactor nearby files unless explicitly requested