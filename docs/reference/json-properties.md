# JSON properties

The **Additional properties (JSON)** box on the edit page holds the Sprite Lab 2 settings that don't have their own field yet. It lists 16 keys. A new level has `hide_custom_blocks: true`, and every other key starts as `null`.

!!! info "How saving works"
    - Each key you paste replaces that whole value. To change part of a value, copy the whole value, edit it and paste it back.
    - `null`, an empty value or `false` removes the key.
    - **Save additional properties** saves the box on its own.

| Key | What it does | Status |
|---|---|---|
| `objectives` | The student checklist. See [Checklists](../checklists.md). | <span class="status tested">Tested</span> |
| `block_catalog` | Blocks that no earlier level required start outside the toolbox; students add them from a catalog. | <span class="status untested">Not yet tested</span> |
| `blocks_always_in_toolbox` | Block types that stay in the toolbox when the catalog is on. | <span class="status untested">Not yet tested</span> |
| `lock_earlier_blocks` | Blocks built on earlier levels can't be deleted (they can still be moved). | <span class="status untested">Not yet tested</span> |
| `freeplay_intro` | Turns the free-play intro on or off. | <span class="status untested">Not yet tested</span> |
| `hide_custom_blocks` | `true` on a new level. Its effect isn't confirmed. | <span class="status untested">Not yet tested</span> |
| `image_role_defaults` | Which image role each block dropdown starts on, for example `{"sprite": "hero", "gamelab_checkTouching": ["hero", "treasure"]}`. | <span class="status untested">Not yet tested</span> |
| `pinned_scene` | `{id, name, source?}` | <span class="status untested">Not yet tested</span> |
| `extra_scene` | `{id, name, source?, worldStartPattern?, worldStartRoles?, editable?}` | <span class="status untested">Not yet tested</span> |
| `add_blocks` | Blocks placed in the pinned scene when the student arrives. | <span class="status untested">Not yet tested</span> |
| `world_start_pattern` | One string per grid row. `B` is the newest block image; `S` is the `image_role_defaults` sprite. | <span class="status untested">Not yet tested</span> |
| `world_start_roles` | `{character: role}` for the pattern. | <span class="status untested">Not yet tested</span> |
| `world_keeps_roles` | Roles the world keeps. | <span class="status untested">Not yet tested</span> |
| `starter_images` | `[{name, imageType, role?, src, frameSize: {x, y}, pixelGridSize?}]` | <span class="status untested">Not yet tested</span> |
| `callouts` | Callouts. The format isn't confirmed. | <span class="status untested">Not yet tested</span> |
| `no_project` | Not confirmed. | <span class="status untested">Not yet tested</span> |

The meanings come from the lab's code: `apps/src/p5lab/spritelab/lab2/types.ts` in the [code-dot-org repository](https://github.com/code-dot-org/code-dot-org).
