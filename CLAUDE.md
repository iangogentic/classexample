# SessionHouse — Claude Code Instructions

## Core Rules
1. **Read first**: Always read `/docs/PRD.md` and `/docs/tasks.yaml` before making any changes
2. **Tests first**: Write missing tests before implementing features
3. **One task at a time**: Complete tasks sequentially from tasks.yaml
4. **After each task**:
   - Run `npm run ci` to verify all tests pass
   - Update task status in `/docs/tasks.yaml` to `done`
   - Commit with message format: `task(<id>): <title> — tests passing`
5. **PRD changes**: Propose changes in `/docs/PRD_CHANGE_PROPOSALS.md` — never edit PRD.md directly

## Workflow
```
Read task → Write test → Implement → Run npm run ci → Update status → Commit → Next task
```

## Project Context
- **Framework**: Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui
- **Database**: Prisma + Neon PostgreSQL
- **Auth**: Clerk (email + OAuth)
- **Payments**: Stripe Connect Express + Stripe Identity
- **Testing**: Playwright (E2E)
- **Deploy**: Vercel

## Key Directories
- `/src/app` — Next.js routes (pages + API)
- `/src/components` — React components (shadcn/ui based)
- `/src/lib` — Utilities, Prisma client, business logic
- `/prisma` — Schema, migrations, seed
- `/e2e` — Playwright tests
- `/docs` — PRD, tasks, proposals

## Commit Message Format
```
task(T-1): Scaffold Next.js app — tests passing
task(T-2): Setup Prisma + Neon database — tests passing
```

## When You're Stuck
1. Check if PRD needs clarification → propose in PRD_CHANGE_PROPOSALS.md
2. Check if task is blocked → update task status to `blocked` with reason
3. Check if you need new dependencies → add to package.json and document

## Quality Gates
- All tests must pass (`npm run ci`)
- TypeScript must compile without errors
- ESLint must pass
- Build must succeed (`npm run build`)

## Don't Do This
- ❌ Edit PRD.md directly
- ❌ Skip tests
- ❌ Commit failing code
- ❌ Work on multiple tasks simultaneously
- ❌ Push to main without passing CI

## Do This
- ✅ Follow the tasks.yaml order
- ✅ Write tests that match acceptance criteria
- ✅ Keep commits atomic (one task = one commit)
- ✅ Update task status after completion
- ✅ Document breaking changes in PRD_CHANGE_PROPOSALS.md
