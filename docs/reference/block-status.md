# Block status

Blocks and features curriculum projects asked for, and whether Sprite Lab 2 has them.

| Block or feature | In Sprite Lab 2? | Notes |
|---|---|---|
| repeat every N seconds | <span class="status tested">Tested</span> | Fired again and again in a test run. |
| Functions | <span class="status tested">Tested</span> | A call runs the blocks inside. Functions can't return values. |
| ask AI | <span class="status tested">Tested</span> | Stores the answer in a variable. See [AI blocks](ai-blocks.md). |
| ask AI with answer choices | <span class="status tested">Tested</span> | See [AI blocks](ai-blocks.md). |
| set system prompt | <span class="status untested">In toolbox</span> | Sets instructions for later AI questions. |
| remove a sprite | <span class="status untested">In toolbox</span> | `remove` plus the **the touched sprite** and **the clicked sprite** blocks. Removing one sprite during a game wasn't tested. |
| show title | <span class="status untested">In toolbox</span> | Has no inputs. It always shows "You win!" |
| print | <span class="status no">Not available</span> | The block exists in the lab's code but isn't in the toolbox catalog. In a test it showed nothing and may stop the script it is in. |
| Upload a sprite image | <span class="status untested">Dev only</span> | A level mode setting labeled "FOR DEVELOPMENT USE ONLY." |
| Free-text image generation | <span class="status no">Not available</span> | Students pick from word chips. |
| AI instructions set in Level Builder | <span class="status no">Not available</span> | No level setting for it. |
| Go to another project | <span class="status no">Not available</span> | No block. |

Not checked yet: the limit on AI calls (30 a minute), sharing only within a section, and variables shared across scenes.

## Pictures

| Block | Picture |
|---|---|
| repeat every | ![repeat every 2 seconds](../images/blocks/repeat-every-light.png#only-light){ .block } ![repeat every 2 seconds](../images/blocks/repeat-every-dark.png#only-dark){ .block } |
| remove the touched sprite | ![remove the touched sprite](../images/blocks/remove-touched-sprite-light.png#only-light){ .block } ![remove the touched sprite](../images/blocks/remove-touched-sprite-dark.png#only-dark){ .block } |
| show title | ![show title You win](../images/blocks/show-title-light.png#only-light){ .block } ![show title You win](../images/blocks/show-title-dark.png#only-dark){ .block } |

## Full toolbox catalog

What each block does, with its text as shown in the lab: [All blocks](blocks.md).

These are all the blocks you can add in toolbox mode (checked 2026-11-24).

| Category | Block types |
|---|---|
| AI | `spritelab2_askAI`, `spritelab2_askAIWithChoices`, `spritelab2_setSystemPrompt` |
| Events | `gamelab_atTime`, `gamelab_checkTouching`, `gamelab_everyInterval`, `gamelab_spriteClicked`, `gamelab_whenPromptAnswered`, `spritelab2_whenPlayer`, `spritelab2_touchedSprite`, `spritelab2_clickedSprite` |
| Sprites | `gamelab_allSpritesWithAnimation`, `gamelab_destroy`, `gamelab_makeBurst`, `gamelab_makeNewSpriteAnon`, `gamelab_makeSpritesGrid`, `gamelab_moveBackward`, `gamelab_moveForward`, `gamelab_moveInDirection`, `gamelab_setProp`, `gamelab_spriteSay`, `gamelab_spriteSayTime`, `spritelab2_makePlatformPlayer`, `spritelab2_makePlatformBlocks`, `spritelab2_makeSpriteAtGrid`, `spritelab2_makeSpriteAtPosition`, `spritelab2_setAsPlatformPlayer`, `spritelab2_setAsPlatformPlayer2`, `spritelab2_thePlayer`, `spritelab2_thePlayer2` |
| Behaviors | `gamelab_addBehaviorSimple`, `spritelab2_beginsBehavior`, `spritelab2_movingLeft`, `spritelab2_movingWithArrowKeys`, `spritelab2_patrollingLeftRight` |
| Game Design | `spritelab2_goToScene`, `spritelab2_restartScene`, `spritelab2_showTitle`, `spritelab2_setPlatformJumpHeight`, `spritelab2_setPlatformGravityDirection`, `spritelab2_setCameraZoom` |
| World | `gamelab_setBackground`, `gamelab_setBackgroundImageAs`, `gamelab_setForegroundEffect`, `gamelab_setPrompt`, `gamelab_setPromptWithChoices`, `spritelab2_setWeather`, `spritelab2_burst`, `spritelab2_playSound`, `spritelab2_playSoundEffect`, `spritelab2_playMusic` |
| Variables | `gamelab_hideVariable`, `gamelab_showVariable`, `variables_get`, `sprite_variables_get`, plus the auto-populated set and change blocks |
| Logic | `controls_if`, `logic_compare`, `logic_operation`, `logic_negate`, `logic_boolean` |
| Loops | `controls_repeat_ext`, `controls_whileUntil`, `controls_for`, `controls_flow_statements` |
| Math | `math_number`, `math_change`, `math_random_int`, `math_arithmetic`, `math_round`, `math_single`, `math_modulo`, `math_number_property` |
| Text | `text_join_simple`, `text` |
| Colour | `colour_picker`, `colour_random` |
| Location | `gamelab_location_picker` |
