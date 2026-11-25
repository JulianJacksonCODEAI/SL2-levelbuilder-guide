# All blocks

Every block a Sprite Lab 2 level can offer in its toolbox, as the block reads in the lab, what it does, and how sure we are that it works. Checked 2026-11-25. The block text was read from the live lab; `?` marks a slot where another block goes.

| Label | Meaning |
|---|---|
| <span class="status tested">Tested</span> | Used in a level that ran in Level Builder. |
| <span class="status untested">In toolbox</span> | Offered in the toolbox, but not run in a test yet. |

**Shape:** a *hat* starts a script, a *stack* block snaps into a script, a *value* block plugs into a slot.

## AI

See [AI blocks](ai-blocks.md) for what these return when things go wrong. They only work for accounts with AI turned on.

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| set system prompt to ? | `spritelab2_setSystemPrompt` | stack | Sets instructions the AI follows for every later question in this run. | <span class="status tested">Tested</span> |
| ask AI ? for variable ? | `spritelab2_askAI` | stack | Sends a question; the answer goes into the variable. Use **when ? answered** to act on it. | <span class="status tested">Tested</span> |
| ask AI ? with answer choices ? ? ? for variable ? | `spritelab2_askAIWithChoices` | stack | Same, but the answer is always one of up to three choices you list. | <span class="status tested">Tested</span> |

## Events

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| when run | `spritelab2_whenRun` | stack | Runs when the student presses Run. Every new level has one, and students can't delete it. | <span class="status tested">Tested</span> |
| when ? answered | `gamelab_whenPromptAnswered` | stack | Runs when a variable gets an answer from **prompt user** or an AI block. | <span class="status tested">Tested</span> |
| repeat every ? seconds | `gamelab_everyInterval` | stack | Runs its blocks again and again on a timer. | <span class="status tested">Tested</span> |
| at ? seconds | `gamelab_atTime` | stack | Runs once after a delay. | <span class="status untested">In toolbox</span> |
| when ? touches ? | `gamelab_checkTouching` | stack | Runs when two sprites touch. | <span class="status untested">In toolbox</span> |
| when ? clicked | `gamelab_spriteClicked` | stack | Runs when a sprite is clicked. | <span class="status untested">In toolbox</span> |
| when player walks | `spritelab2_whenPlayer` | stack | Runs when the platform player does an action (dropdown). | <span class="status untested">In toolbox</span> |
| the touched sprite | `spritelab2_touchedSprite` | value | The sprite from the last **touches** event. | <span class="status untested">In toolbox</span> |
| the clicked sprite | `spritelab2_clickedSprite` | value | The sprite from the last **clicked** event. | <span class="status untested">In toolbox</span> |

## Sprites

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| make new "Sprite 1" sprite at ? | `gamelab_makeNewSpriteAnon` | stack | Makes a sprite from an image in the Images tab at a location. | <span class="status tested">Tested</span> |
| "Sprite 1" | `gamelab_allSpritesWithAnimation` | value | All sprites that use an image. Plugs into sprite slots. | <span class="status tested">Tested</span> |
| ? say ? for ? seconds | `gamelab_spriteSayTime` | stack | Shows a speech bubble for a number of seconds. Text, variables and `join` all work. | <span class="status tested">Tested</span> |
| ? say | `gamelab_spriteSay` | stack | Shows a speech bubble until something else replaces it. | <span class="status untested">In toolbox</span> |
| remove ? | `gamelab_destroy` | stack | Deletes a sprite. | <span class="status untested">In toolbox</span> |
| set ? size to ? | `gamelab_setProp` | stack | Sets a sprite property (dropdown: size and others). | <span class="status untested">In toolbox</span> |
| move ? ? pixels forward / backward / North | `gamelab_moveForward`, `gamelab_moveBackward`, `gamelab_moveInDirection` | stack | Moves a sprite. | <span class="status untested">In toolbox</span> |
| create burst effect with ? "Sprite 1" sprites | `gamelab_makeBurst` | stack | Bursts copies of a sprite. | <span class="status untested">In toolbox</span> |
| make "Sprite 1" sprites using grid | `gamelab_makeSpritesGrid` | stack | Places sprites on a grid you paint. | <span class="status untested">In toolbox</span> |
| make new "Sprite 1" sprite at grid location | `spritelab2_makeSpriteAtGrid` | stack | Makes one sprite at a grid square. | <span class="status untested">In toolbox</span> |
| make new "Sprite 1" sprite at left | `spritelab2_makeSpriteAtPosition` | stack | Makes a sprite at a named position (dropdown). | <span class="status untested">In toolbox</span> |
| make platform player "Sprite 1" at grid location | `spritelab2_makePlatformPlayer` | stack | Makes the platform game player. | <span class="status untested">In toolbox</span> |
| make … platform blocks using grid | `spritelab2_makePlatformBlocks` | stack | Places platform blocks on a grid. | <span class="status untested">In toolbox</span> |
| set "Sprite 1" as player / player 2 | `spritelab2_setAsPlatformPlayer`, `spritelab2_setAsPlatformPlayer2` | stack | Makes an existing sprite the player. | <span class="status untested">In toolbox</span> |
| the player / player 2 | `spritelab2_thePlayer`, `spritelab2_thePlayer2` | value | The current player sprite. | <span class="status untested">In toolbox</span> |

## Behaviors

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| sprite ? begins ? | `gamelab_addBehaviorSimple` | stack | Starts a behavior on a sprite. | <span class="status untested">In toolbox</span> |
| "Sprite 1" begins patrolling left and right | `spritelab2_beginsBehavior` | stack | Starts a built-in behavior (dropdown). | <span class="status untested">In toolbox</span> |
| moving left / moving with arrow keys / patrolling left and right | `spritelab2_movingLeft`, `spritelab2_movingWithArrowKeys`, `spritelab2_patrollingLeftRight` | value | Behaviors that plug into **begins**. | <span class="status untested">In toolbox</span> |

## World

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| prompt user ? for variable ? | `gamelab_setPrompt` | stack | Shows a text box under the game; the answer goes into the variable. | <span class="status tested">Tested</span> |
| prompt user ? for variable ? with choices ? ? ? | `gamelab_setPromptWithChoices` | stack | Shows up to three buttons; the chosen text goes into the variable. | <span class="status tested">Tested</span> |
| burst 20 sparks from ? | `spritelab2_burst` | stack | A spark burst from a sprite. | <span class="status tested">Tested</span> |
| set background color ? | `gamelab_setBackground` | stack | Sets a background color. | <span class="status untested">In toolbox</span> |
| set background to … | `gamelab_setBackgroundImageAs` | stack | Sets a background image. | <span class="status untested">In toolbox</span> |
| do bubbles effect | `gamelab_setForegroundEffect` | stack | Adds a screen effect (dropdown). | <span class="status untested">In toolbox</span> |
| set weather to none | `spritelab2_setWeather` | stack | Adds weather (dropdown). | <span class="status untested">In toolbox</span> |
| play sound boom / play sound effect / play music | `spritelab2_playSound`, `spritelab2_playSoundEffect`, `spritelab2_playMusic` | stack | Plays audio (dropdowns). | <span class="status untested">In toolbox</span> |

## Game Design

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| show title You win! | `spritelab2_showTitle` | stack | Shows a title. It has no inputs, so it always says "You win!" | <span class="status untested">In toolbox</span> |
| go to scene | `spritelab2_goToScene` | stack | Switches to another scene in the project. | <span class="status untested">In toolbox</span> |
| restart scene | `spritelab2_restartScene` | stack | Starts the current scene over. | <span class="status untested">In toolbox</span> |
| set jump height to 3 squares | `spritelab2_setPlatformJumpHeight` | stack | Platform jump height. | <span class="status untested">In toolbox</span> |
| set gravity direction ↓ | `spritelab2_setPlatformGravityDirection` | stack | Platform gravity direction. | <span class="status untested">In toolbox</span> |
| set zoom to 2 | `spritelab2_setCameraZoom` | stack | Camera zoom. | <span class="status untested">In toolbox</span> |

## Variables

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| set ? to ? | `variables_set` | stack | Stores a value. | <span class="status tested">Tested</span> |
| (variable name) | `variables_get` | value | Reads a value. | <span class="status tested">Tested</span> |
| change ? by ? | `math_change` | stack | Adds to a number variable. Listed under Math. | <span class="status tested">Tested</span> |
| show variable ? at ? / hide variable ? | `gamelab_showVariable`, `gamelab_hideVariable` | stack | Shows or hides a variable's value on the game screen. | <span class="status untested">In toolbox</span> |
| (sprite variable) | `sprite_variables_get` | value | Reads a sprite's own variable. | <span class="status untested">In toolbox</span> |

## Functions

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| (function definition) | `procedures_defnoreturn` | hat | A named group of blocks. Functions can't take inputs or return values. | <span class="status tested">Tested</span> |
| (function call) | `procedures_callnoreturn` | stack | Runs a function. | <span class="status tested">Tested</span> |

To stop students from changing a function, see [Lock a function](../lock-a-function.md).

## Logic, Loops, Math, Text, Colour, Location

| Block | Type | Shape | Status |
|---|---|---|---|
| if ? do ? (the **+** adds else) | `controls_if` | stack | <span class="status tested">Tested</span> |
| ? = ? | `logic_compare` | value | <span class="status tested">Tested</span> |
| ? and ? / not ? / true | `logic_operation`, `logic_negate`, `logic_boolean` | value | <span class="status untested">In toolbox</span> |
| repeat ? times / repeat while ? / count with … / break out of loop | `controls_repeat_ext`, `controls_whileUntil`, `controls_for`, `controls_flow_statements` | stack | <span class="status untested">In toolbox</span> |
| 0 (number) | `math_number` | value | <span class="status tested">Tested</span> |
| random integer / ? + ? / round / square root / remainder / is even | `math_random_int`, `math_arithmetic`, `math_round`, `math_single`, `math_modulo`, `math_number_property` | value | <span class="status untested">In toolbox</span> |
| “ ” (text) | `text` | value | <span class="status tested">Tested</span> |
| join ? ? (the **+** adds more slots) | `text_join_simple` | value | <span class="status tested">Tested</span> |
| color / random color | `colour_picker`, `colour_random` | value | <span class="status untested">In toolbox</span> |
| (location picker) | `gamelab_location_picker` | value | <span class="status tested">Tested</span> |

## Blocks that run but aren't in the toolbox

Sprite Lab 2 shows only an allowlist of the older shared-pool blocks in the toolbox (25 of them, set in the lab's code). Other pool blocks are still loaded, and they **run** if they are already in the starter code.

- Tested 2026-11-25: `gamelab_changePropBy` ("change ? size by ?") added to starter code with the [console](console-recipes.md) made the sprite bigger when run. Nothing was saved.
- Students can't drag these from the toolbox, so use them only in locked starter code, and test each one first.
- See [Create new blocks](../create-new-blocks.md).
