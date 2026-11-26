# Console recipes <span class="status tested">Tested</span>

These snippets change the starter code through the browser's developer console. Sprite Lab 2 runs on [Google's Blockly](https://docs.blockly.com/guides/configure/serialization/).

## Before you run one

1. Open start mode: `/levels/{level ID}/edit_blocks/start_sources`.
2. Click the **Code** tab.
3. Press ++f12++ and open **Console**.

## After you run one

1. Click **Save** at the top of the page.
2. Reload the page.
3. Open the level and click **Start Over** to check the result.

## List the blocks in the workspace

```js title="Console"
Blockly.getMainWorkspace().getTopBlocks().map(b =>
  b.type + (b.getFieldValue('NAME') ? ': ' + b.getFieldValue('NAME') : ''))
```

## Lock and collapse a function

Change `count_question` to your function's name.

```js title="Console"
{
  const ws = Blockly.getMainWorkspace();
  const d = ws.getTopBlocks().find(b =>
    b.type === 'procedures_defnoreturn' && b.getFieldValue('NAME') === 'count_question');
  const st = d.saveExtraState(true);
  d.loadExtraState({...st, invisible: false,
    initialEditConfig: false, initialDeleteConfig: false, initialMoveConfig: false});
  d.setEditable(false); d.setDeletable(false); d.setMovable(false);
  d.setCollapsed(true);
  console.log('locked: ' + d.getFieldValue('NAME'));
}
```

After Save, a reload and Start Over, the function stays collapsed and locked. The three `initial...Config` settings are what make the lock save. Step-by-step instructions, including why you must nudge a block before saving: [Lock a function](../lock-a-function.md).

![collapsed, locked function](../images/blocks/function-locked-light.png#only-light){ .block loading=lazy }
![collapsed, locked function](../images/blocks/function-locked-dark.png#only-dark){ .block loading=lazy }

## Check a block's lock state

```js title="Console"
Blockly.getMainWorkspace().getTopBlocks().map(b => ({type: b.type,
  name: b.getFieldValue('NAME'), collapsed: b.isCollapsed(),
  deletable: b.isDeletable(), movable: b.isMovable(), editable: b.isEditable()}))
```

## Add an empty function

```js title="Console"
Blockly.serialization.blocks.append(
  {type: 'procedures_defnoreturn', x: 300, y: 40, fields: {NAME: 'my_setup'}},
  Blockly.getMainWorkspace())
```

## Blockly basics

Blocks save as JSON (XML is the older format). `Blockly.serialization.blocks.save(block)` returns a block's JSON, and `Blockly.serialization.blocks.append(json, workspace)` adds one. Saved attributes include `x`, `y`, `collapsed`, `disabled` and `data`.
