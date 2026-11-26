# JSON properties

The **Additional properties (JSON)** box on the edit page holds the Sprite Lab 2 settings that don't have their own field yet. It lists 16 keys. A new level has `hide_custom_blocks: true`, and every other key starts as `null`.

!!! info "How saving works"
    - Each key you paste replaces that whole value. To change part of a value, copy the whole value, edit it and paste it back.
    - `null`, an empty value or `false` removes the key.
    - **Save additional properties** saves the box on its own.

Only `objectives` has been tested <span class="status tested">Tested</span>. Every other key is <span class="status untested">Not yet tested</span>: its meaning comes from the lab's code, so try it on your own test level first. To link to a key, add `#` and the key to this page's address, for example `json-properties/#block_catalog`.

## Checklist

<div class="key-table" markdown>

| Key | What it does |
|---|---|
| <code id="objectives">objectives</code> | The student checklist. See [Checklists](../checklists.md). <span class="status tested">Tested</span> |

</div>

## Toolbox and catalog

<div class="key-table" markdown>

| Key | What it does |
|---|---|
| <code id="block_catalog">block_catalog</code> | Blocks that no earlier level required start outside the toolbox; students add them from a catalog. |
| <code id="blocks_always_in_toolbox">blocks_always_in_toolbox</code> | Block types that stay in the toolbox when the catalog is on. |
| <code id="lock_earlier_blocks">lock_earlier_blocks</code> | Blocks built on earlier levels can't be deleted (they can still be moved). |
| <code id="hide_custom_blocks">hide_custom_blocks</code> | `true` on a new level. Its effect isn't confirmed. |

</div>

## Scenes and world

<div class="key-table" markdown>

| Key | What it does |
|---|---|
| <code id="pinned_scene">pinned_scene</code> | `{id, name, source?}` |
| <code id="extra_scene">extra_scene</code> | `{id, name, source?, worldStartPattern?, worldStartRoles?, editable?}` |
| <code id="add_blocks">add_blocks</code> | Blocks placed in the pinned scene when the student arrives. |
| <code id="world_start_pattern">world_start_pattern</code> | One string per grid row. `B` is the newest block image; `S` is the `image_role_defaults` sprite. |
| <code id="world_start_roles">world_start_roles</code> | `{character: role}` for the pattern. |
| <code id="world_keeps_roles">world_keeps_roles</code> | Roles the world keeps. |

</div>

## Images

<div class="key-table" markdown>

| Key | What it does |
|---|---|
| <code id="image_role_defaults">image_role_defaults</code> | Which image role each block dropdown starts on. |
| <code id="starter_images">starter_images</code> | `[{name, imageType, role?, src, frameSize: {x, y}, pixelGridSize?}]` |

</div>

Example `image_role_defaults` value:

```json
{"sprite": "hero", "gamelab_checkTouching": ["hero", "treasure"]}
```

## Other

<div class="key-table" markdown>

| Key | What it does |
|---|---|
| <code id="freeplay_intro">freeplay_intro</code> | Turns the free-play intro on or off. |
| <code id="callouts">callouts</code> | Callouts. The format isn't confirmed. |
| <code id="no_project">no_project</code> | Not confirmed. |

</div>

The meanings come from the lab's code: `apps/src/p5lab/spritelab/lab2/types.ts` in the [code-dot-org repository](https://github.com/code-dot-org/code-dot-org).
