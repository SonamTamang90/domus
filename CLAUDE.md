# Domus

Read [docs/PROJECT.md](docs/PROJECT.md) before any design or code work. It is the source of truth for concept, palette, typography, motion, page structure and phase status. Update its "Status" section when a phase is completed or a decision changes.

- Work phase by phase, and section by section within a phase; get the user's review before starting the next one.
- Static layout and design first. No animation or smooth scroll until the Motion phase.
- Build reusable UI only when a second section needs it.
- **Old vs new files:** when redesigning a component, rename the old file to `<Name>2.tsx` (export `<Name>2`) and write the new design as `<Name>.tsx` in the same folder. Keep both; pages use the new `<Name>`, and `/legacy` uses the `<Name>2` versions. Example: `components/sections/Hero.tsx` (new) + `Hero2.tsx` (old).
- Quote Higgsfield credits before every generation batch.
