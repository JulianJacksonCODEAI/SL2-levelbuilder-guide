# Lock a function <span class="status tested">Tested</span>

Use this when students should run a function but not open, change, move or delete it. For example, a function that holds rules the students' own code depends on. Tested 2026-11-24.

## What each option protects

| What you do | The function block | The blocks inside it |
|---|---|---|
| Lock with the right-click menu | Can't move, edit or delete | **Students can still drag them out and edit them** |
| Lock **and collapse** (console) | Can't move, edit, delete or expand | Hidden and safe |
| Make it invisible | Disappears | **Doesn't work:** the program stops with "… is not defined" |

To protect what's inside, the function must be **collapsed** as well as locked. The menu has no Collapse option, so use the console.

## Lock and collapse (console)

1. Open start mode: `/levels/{level ID}/edit_blocks/start_sources`, then the **Code** tab.
2. Click an empty spot in the workspace.
3. Open the console: ++ctrl+shift+j++ (or ++f12++, then **Console**). The first time, Chrome may ask you to type `allow pasting`.
4. Paste this, change `start_game` to your function's name, and press ++enter++:

    ```js title="Console"
    {
      const ws = Blockly.getMainWorkspace();
      const d = ws.getTopBlocks().find(b =>
        b.type === 'procedures_defnoreturn' && b.getFieldValue('NAME') === 'start_game');
      const st = d.saveExtraState(true);
      d.loadExtraState({...st, invisible: false,
        initialEditConfig: false, initialDeleteConfig: false, initialMoveConfig: false});
      d.setEditable(false); d.setDeletable(false); d.setMovable(false);
      d.setCollapsed(true);
      console.log('locked: ' + d.getFieldValue('NAME'));
    }
    ```

    The console prints `locked: start_game`.

5. **Drag any other block a little.** The lock alone doesn't count as an edit, so Save would store the old version.
6. Wait about 5 seconds, then click **Save**.
7. Check as a student: open the level, click **Start Over**, and right-click the function. You should see only **Copy** and **Create '…'**, with no Expand.

![collapsed, locked function](images/blocks/function-locked-light.png#only-light){ .block }
![collapsed, locked function](images/blocks/function-locked-dark.png#only-dark){ .block }

!!! note "Why the console says `undefined`"
    Running a line that only declares a variable, like `const ws = Blockly.getMainWorkspace();`, always prints `undefined`. That's normal. Type `ws` and press ++enter++ to see the workspace. If you see `null`, click the workspace and run the line again.

!!! warning "Use the braces"
    Keep the `{ }` around the snippet. Without them, running it twice gives "Identifier 'ws' has already been declared."

## Lock with the right-click menu

1. In start mode, right-click the function block.
2. Choose **Make Undeletable to Users**, **Make Immovable to Users** and **Make Uneditable to Users**, one at a time. After each, the menu item changes to "Make Deletable…" and so on.
3. Drag any other block a little, wait about 5 seconds, then click **Save**.

The menu sets the same lock settings as the console snippet, but it doesn't collapse the function. The blocks inside stay editable for students.

## Unlock

Run the snippet with `true` in place of `false` on the three `initial…Config` lines and in the three `set…` calls, and `d.setCollapsed(false)`. Then nudge a block, wait, and Save.

## Show students what's inside

A collapsed block shows only a cut-off label. If students need to know what a locked function does, print its contents in the lesson materials.
