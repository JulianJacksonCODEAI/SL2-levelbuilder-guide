# Checklists (objectives) <span class="status tested">Tested</span>

Sprite Lab 2 checks student progress with a checklist. It replaces the JavaScript **Validation** box from old Sprite Lab.

## Add a checklist

1. On the edit page, open **Additional properties (JSON)**.
2. Paste an `objectives` key like the one below.
3. Click **Save additional properties**. This button saves the JSON on its own; you don't need the main Save button.

```json title="Additional properties (JSON)"
{
  "objectives": {
    "title": "**Make your game**",
    "collapsedText": "Make your game",
    "items": [
      {"id": "gen", "text": "Generate a character.", "check": {"kind": "generated", "imageType": "sprite"}},
      {"id": "place", "text": "Place it in the world.", "check": {"kind": "world", "changed": true}},
      {"id": "run", "text": "Press **Play**.", "check": {"kind": "play"}}
    ]
  }
}
```

Each item shows "To do" and changes to "Done" as soon as the student does it. **Finish** appears when every item is done.

!!! note
    In testing, the checklist `title` did not show in the panel. Check it on your level.

## Check kinds

| Check | Passes when | Checked again if the student undoes it? |
|---|---|---|
| `generated` `{imageType?}` | The student generated an image on this level | No |
| `image` `{imageType}` | An image of that type exists | Yes |
| `world` `{role?, changed?}` | A cell shows an image with that role, or the grid changed | Yes |
| `block` `{type, under?, data?, fields?, scene?}` | A block of that type is in the code | Yes |
| `play` | The student pressed Play | No |
| `reach` `{role?, moved?}` | The player touched a sprite with that role, or moved | No |
| `scene` `{id}` | A jump landed on that scene | No |
| `editing` `{id}` | The student opened that scene in the editor | No |
| `rated` | The student rated a generated picture | No |

- `shownWhen` hides an item until another check passes. <span class="status untested">Not yet tested</span>
- With no `items`, students can continue right away.
