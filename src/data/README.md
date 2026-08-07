# Data foundation (`src/data`)

The whole dataset lives in plain TypeScript files inside the project. No
database, no external account — copying or transferring the project carries
the data with it.

## Files

| File | Holds |
|---|---|
| `types.ts` | All entity shapes. Change a shape here first. |
| `universities.ts` | One record per university: approvals, pros/cons, verdict, admission process. |
| `programmes.ts` | Degree programmes and their specialisations. |
| `offerings.ts` | University × programme rows: fee, duration, placement, session. |
| `index.ts` | The only import path pages should use — getters, filters, formatters. |

```ts
import { getUniversity, listOfferingsByProgramme, formatINR } from "@/data";
```

## Adding data

1. **New university** — append to `universities.ts`, then add its programme
   rows to `offerings.ts`.
2. **New programme** — append to `programmes.ts` and add its specialisations
   in the same file.
3. **New specialisation** — append to `specialisations` with the parent
   `programme` slug.

## The `verified` flag

Every record ships with `verified: false` and `fee.total: null`. That is
deliberate: no fee, placement figure or ranking is published until you paste in
the official number and flip the flag. `unverifiedCount()` reports what is
still outstanding.

## Moving to a database later

Only `index.ts` touches storage. Swapping these files for an API or database
means rewriting the getters in that one file — pages stay unchanged.
