# Create new blocks <span class="status untested">Not yet tested</span>

Can a levelbuilder make a brand-new block for Sprite Lab 2? Partly. This page records what was checked on 2026-11-25 and the steps for a full test. No new block has been created yet.

## Where blocks come from

Sprite Lab 2 gets blocks from two places:

| Source | Who can add one | In the toolbox? |
|---|---|---|
| Lab-owned blocks (names start `spritelab2_`), written in the lab's code | Engineers only | Yes |
| **Shared block pools** (names like `gamelab_…`), edited in Level Builder | Levelbuilders | **Only the 25 on the lab's allowlist** |

The allowlist is `SUPPORTED_SHARED_BLOCK_TYPES` in the lab's code (`apps/src/p5lab/spritelab/lab2/blockly/toolbox/supportedSharedBlocks.ts`). A new pool block isn't on it, so students won't see it in the toolbox until an engineer adds it.

## What was tested

- A level's pool blocks are all **loaded**, including ones not on the allowlist (checked: `gamelab_changePropBy`, `gamelab_bounceOff`, `gamelab_setPromptWith2Choices`).
- A non-allowlisted pool block **runs** when it is in the code. `gamelab_changePropBy` added to starter code with the console made the sprite bigger. The test wasn't saved.

So a new pool block would probably work in **starter code** (placed with the console), but not in the toolbox.

## The block editor

Pools are listed at `/pools`. Each pool's blocks are at `/pools/{pool}/blocks`, and **Create a New Block** opens `/pools/{pool}/blocks/new`. The form has:

| Field | What goes in it |
|---|---|
| Pool name | The pool. Sprite Lab levels use **GamelabJr** (see the level's **Block Pools** setting). |
| Category | The toolbox category, for example `Sprites`. |
| Name | The block type, for example `gamelab_myBlock`. |
| Config | JSON describing the block (example below). |
| Helper code | JavaScript that defines the function the block calls. |

The page shows a live **Block Preview** and the **Generated Code**. An existing block's edit page has **Update Block**, **Save as Clone** and **Delete Block**.

Example config, from the existing `gamelab_spriteSayTime` block:

```json title="Config"
{
  "func": "spriteSayTime",
  "blockText": "{SPRITE}say{TEXT1}for{NUM}seconds",
  "args": [
    {"name": "SPRITE", "type": "Sprite"},
    {"name": "TEXT1", "field": false},
    {"name": "NUM", "type": "Number", "field": false}
  ],
  "style": "default"
}
```

`blockText` places each `{ARG}` slot in the sentence. `func` is the function the block calls; for a new block, define it in **Helper code**.

!!! warning "Pools are shared"
    A block pool is shared by every level that uses it, across all courses, so a new block in **GamelabJr** shows up for everyone who edits Sprite Lab levels. Agree on a name and pool with the Student Learning team before creating one. Never edit or delete an existing pool block.

## Steps for the full test (not done yet)

1. Agree on a pool and a block name with the Student Learning team.
2. Open `/pools/GamelabJr/blocks/new`.
3. Fill in Category, Name, Config and Helper code. Check the Block Preview.
4. Save the block with the form's save button (or use **Save as Clone** on a similar block).
5. On a test level that uses the GamelabJr pool, open start mode and add the block with the console:

    ```js title="Console"
    Blockly.serialization.blocks.append({type: 'gamelab_myBlock', x: 300, y: 40},
      Blockly.getMainWorkspace())
    ```

6. Snap it into **when run**, press **Run**, and check it works.
7. Check the toolbox: it shouldn't be there (allowlist).
8. Record the result here, then delete the test block if it isn't needed.
