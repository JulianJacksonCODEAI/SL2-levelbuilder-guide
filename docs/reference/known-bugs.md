# Known bugs and changes

## Known bugs and limits

| Issue | Status |
|---|---|
| Initialization blocks don't exist. Blocks added at `/edit_blocks/initialization_blocks` never save or run. Use a [locked function](../setup-tricks.md) instead. | <span class="status tested">Tested</span> |
| When an AI call fails, the variable isn't set and **when answered** never runs. See [AI blocks](ai-blocks.md). | <span class="status tested">Tested</span> |
| **ask AI** sometimes shows its answer twice in one speech bubble. | <span class="status untested">Not yet tested</span> |
| There is no AI Tutor in Sprite Lab 2. Use an AI Chat level next to the project. | <span class="status untested">Not yet tested</span> |
| **when all prompts answered** didn't fire, and **when [key] pressed** didn't fire, in earlier tests. | <span class="status untested">Not yet tested</span> |
| **remove** removes every sprite that matches. The touched and clicked sprite blocks may change. | <span class="status untested">Not yet tested</span> |
| There are only three behaviors: moving left, moving with arrow keys, and patrolling left and right. | <span class="status untested">Not yet tested</span> |
| Speech bubbles last 6 seconds. | <span class="status untested">Not yet tested</span> |
| Level settings are still being redesigned, so JSON keys may be renamed. | <span class="status untested">Not yet tested</span> |

## What changed from old Sprite Lab

The [Level Builder wiki](https://github.com/code-dot-org/code-dot-org/wiki/For-Levelbuilders) describes old Sprite Lab (2019 to 2024).

| Old Sprite Lab | Sprite Lab 2 |
|---|---|
| Sprite Lab level type | Sprite Lab level with **Enable Lab 2** ticked |
| JavaScript Validation box, `zCriterionValidationLibrary`, feedback strings | The `objectives` [checklist](../checklists.md) |
| Initialization blocks run hidden setup code | Not supported. Use a locked, collapsed function. |
| Start and toolbox XML in the Admin Box; press Run to save | Start mode and toolbox mode pages with a **Save** button |
| Block pools add blocks | Pools are still listed, but unsupported blocks are left out |
| Animation library | Images tab with the AI image generator |
| 22 behaviors | 3 behaviors |

## Sources

- The lab's code: `apps/src/p5lab/spritelab/lab2/` (`objectives.ts`, `types.ts`, `levelMode.ts`) in the [code-dot-org repository](https://github.com/code-dot-org/code-dot-org).
- Pull requests in that repository: 76798 (level mode editor), 75833 (objectives), 76944 (re-checking), 75906 (block catalog), 76727 and 76746 (start and toolbox modes), 77029 (auto-populated categories), 76874, 76916 and 76943 (image limits), 76985 (upload), 77041 (image moderation), 76756 (AI access), 76722 (ask AI with choices).
