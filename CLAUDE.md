# Project: RH00000.github.io (practice branch)

Vite + React 19 + TypeScript. Right now this is a practice ground for a small todo app.

## Commands
- `npm run dev` starts the dev server at http://localhost:5173
- `npm run build` runs the type check and production build. Must pass before you say you're done.
- `npm run lint` must pass before you say you're done.

## Layout
- `src/App.tsx` is the top-level component. Keep it thin and just compose other components.
- `src/components/` holds one component per file.
- `src/hooks/` holds custom hooks (state logic lives here, not in components).
- `src/types.ts` holds shared types. Changing a type here affects everyone, so say so in your summary.

## How to work
1. Think before coding. State your assumptions. If the request is ambiguous, ask instead of guessing. If there's a simpler way, say so.
2. Simplicity first. Write the minimum code that does the job. No extra features, no abstractions for one-time use, no config options nobody asked for.
3. Surgical changes. Only touch what the task needs. Don't reformat, rename or "clean up" code you weren't asked to touch. If you notice something unrelated that's broken, mention it and leave it alone.
4. Goal-driven. Before you start, write a short plan with a check for each step. You aren't done until build and lint pass.

## Parallel work rules (other agents may be working in this repo at the same time)
- Stay inside the files your task needs. If you have to edit a shared file (`App.tsx`, `types.ts`, `package.json`, `index.css`), keep the edit small and call it out in your summary.
- Don't install new dependencies without asking first.
- Don't commit unless I ask. When I ask, use clear messages (`feat: ...`, `fix: ...`).
- Never push. Never switch branches or touch `main`. The human merges.
- End every task with: files changed, what you didn't do or check, and any risk.
