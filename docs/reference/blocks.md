# All blocks

Every block a Sprite Lab 2 level can offer in its toolbox: what it looks like, what it does, and whether it worked in a test run. Tested 2026-11-25 in a start-mode preview; nothing was saved. Pictures switch with the site's light and dark theme.

| Label | Meaning |
|---|---|
| <span class="status tested">Tested</span> | Ran in a test program and did what the row says. |
| <span class="status untested">Check by hand</span> | Couldn't be checked in the test (needs arrow keys, sound, or songs). The note says why. |

**Shape:** a *hat* starts a script, a *stack* block snaps into a script, a *value* block plugs into a slot.

!!! tip "Testing a block yourself"
    In start mode the small preview runs **when run** right away, so you can see most blocks work without pressing Run. Timers, clicks and behaviors need **Run**. The game takes about 3 seconds to start.

## AI

See [AI blocks](ai-blocks.md) for what these return when things go wrong. They only work for accounts with AI turned on.

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![set system prompt to](../images/blocks/set-system-prompt-light.png#only-light){ .block }![set system prompt to](../images/blocks/set-system-prompt-dark.png#only-dark){ .block } | `spritelab2_setSystemPrompt` | stack | Sets instructions the AI follows for every later question in this run. | <span class="status tested">Tested</span> |
| ![ask AI for variable](../images/blocks/ask-ai-light.png#only-light){ .block }![ask AI for variable](../images/blocks/ask-ai-dark.png#only-dark){ .block } | `spritelab2_askAI` | stack | Sends a question; the answer goes into the variable. Use **when ? answered** to act on it. | <span class="status tested">Tested</span> |
| ![ask AI with answer choices](../images/blocks/ask-ai-with-choices-light.png#only-light){ .block }![ask AI with answer choices](../images/blocks/ask-ai-with-choices-dark.png#only-dark){ .block } | `spritelab2_askAIWithChoices` | stack | Same, but the answer is always one of up to three choices you list. | <span class="status tested">Tested</span> |

## Events

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![when run](../images/blocks/when-run-light.png#only-light){ .block }![when run](../images/blocks/when-run-dark.png#only-dark){ .block } | `spritelab2_whenRun` | hat | Runs when the student presses Run. Every new level has one, and students can't delete it. | <span class="status tested">Tested</span> |
| ![when answered](../images/blocks/when-answered-light.png#only-light){ .block }![when answered](../images/blocks/when-answered-dark.png#only-dark){ .block } | `gamelab_whenPromptAnswered` | hat | Runs when a variable gets an answer from **prompt user** or an AI block. | <span class="status tested">Tested</span> |
| ![repeat every 5 seconds](../images/blocks/repeat-every-light.png#only-light){ .block }![repeat every 5 seconds](../images/blocks/repeat-every-dark.png#only-dark){ .block } | `gamelab_everyInterval` | hat | Runs its blocks again and again on a timer. | <span class="status tested">Tested</span> |
| ![at 5 seconds](../images/blocks/at-time-light.png#only-light){ .block }![at 5 seconds](../images/blocks/at-time-dark.png#only-dark){ .block } | `gamelab_atTime` | hat | Runs once after a delay. | <span class="status tested">Tested</span> |
| ![when sprite touches sprite](../images/blocks/check-touching-light.png#only-light){ .block }![when sprite touches sprite](../images/blocks/check-touching-dark.png#only-dark){ .block } | `gamelab_checkTouching` | hat | Runs when two sprites touch. **If both slots name the same image, it fires as soon as the game starts**, because each sprite counts as touching itself. Use two different images. | <span class="status tested">Tested</span> |
| ![when sprite clicked](../images/blocks/sprite-clicked-light.png#only-light){ .block }![when sprite clicked](../images/blocks/sprite-clicked-dark.png#only-dark){ .block } | `gamelab_spriteClicked` | hat | Runs when a sprite is clicked. | <span class="status tested">Tested</span> |
| ![when player walks](../images/blocks/when-player-light.png#only-light){ .block }![when player walks](../images/blocks/when-player-dark.png#only-dark){ .block } | `spritelab2_whenPlayer` | hat | Runs when the platform player walks, jumps, lands or bumps. Needs arrow keys, which the test tools could not press. | <span class="status untested">Check by hand</span> |
| ![the touched sprite](../images/blocks/touched-sprite-light.png#only-light){ .block }![the touched sprite](../images/blocks/touched-sprite-dark.png#only-dark){ .block } | `spritelab2_touchedSprite` | value | The sprite from the last **touches** event. | <span class="status tested">Tested</span> |
| ![the clicked sprite](../images/blocks/clicked-sprite-light.png#only-light){ .block }![the clicked sprite](../images/blocks/clicked-sprite-dark.png#only-dark){ .block } | `spritelab2_clickedSprite` | value | The sprite from the last **clicked** event. Tested with **remove**: only the clicked sprite went away. | <span class="status tested">Tested</span> |

## Sprites

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![make new sprite at](../images/blocks/make-new-sprite-anon-light.png#only-light){ .block }![make new sprite at](../images/blocks/make-new-sprite-anon-dark.png#only-dark){ .block } | `gamelab_makeNewSpriteAnon` | stack | Makes a sprite from an image in the Images tab at a location. | <span class="status tested">Tested</span> |
| ![sprite image](../images/blocks/all-sprites-with-animation-light.png#only-light){ .block }![sprite image](../images/blocks/all-sprites-with-animation-dark.png#only-dark){ .block } | `gamelab_allSpritesWithAnimation` | value | All sprites that use an image. Plugs into sprite slots. | <span class="status tested">Tested</span> |
| ![say for seconds](../images/blocks/sprite-say-time-light.png#only-light){ .block }![say for seconds](../images/blocks/sprite-say-time-dark.png#only-dark){ .block } | `gamelab_spriteSayTime` | stack | Shows a speech bubble for a number of seconds. Text, variables and `join` all work. | <span class="status tested">Tested</span> |
| ![say](../images/blocks/sprite-say-light.png#only-light){ .block }![say](../images/blocks/sprite-say-dark.png#only-dark){ .block } | `gamelab_spriteSay` | stack | Shows a speech bubble until another **say** replaces it. | <span class="status tested">Tested</span> |
| ![remove](../images/blocks/destroy-light.png#only-light){ .block }![remove](../images/blocks/destroy-dark.png#only-dark){ .block } | `gamelab_destroy` | stack | Deletes a sprite. | <span class="status tested">Tested</span> |
| ![set size to](../images/blocks/set-prop-light.png#only-light){ .block }![set size to](../images/blocks/set-prop-dark.png#only-dark){ .block } | `gamelab_setProp` | stack | Sets a property: size (percent), rotation, x, y, direction or speed. Size and rotation tested. | <span class="status tested">Tested</span> |
| ![move pixels forward](../images/blocks/move-forward-light.png#only-light){ .block }![move pixels forward](../images/blocks/move-forward-dark.png#only-dark){ .block } | `gamelab_moveForward` | stack | Moves a sprite the way it faces. | <span class="status tested">Tested</span> |
| ![move pixels backward](../images/blocks/move-backward-light.png#only-light){ .block }![move pixels backward](../images/blocks/move-backward-dark.png#only-dark){ .block } | `gamelab_moveBackward` | stack | Moves a sprite away from the way it faces. | <span class="status tested">Tested</span> |
| ![move pixels North](../images/blocks/move-in-direction-light.png#only-light){ .block }![move pixels North](../images/blocks/move-in-direction-dark.png#only-dark){ .block } | `gamelab_moveInDirection` | stack | Moves a sprite North, South, East or West. On the screen, North is up. | <span class="status tested">Tested</span> |
| ![create burst effect with sprites](../images/blocks/make-burst-light.png#only-light){ .block }![create burst effect with sprites](../images/blocks/make-burst-dark.png#only-dark){ .block } | `gamelab_makeBurst` | stack | Copies of a sprite fly out (burst, pop, rain or spiral), then disappear. The game takes about 3 seconds to start after Run, so watch for it. | <span class="status tested">Tested</span> |
| ![make sprites using grid](../images/blocks/make-sprites-grid-light.png#only-light){ .block }![make sprites using grid](../images/blocks/make-sprites-grid-dark.png#only-dark){ .block } | `gamelab_makeSpritesGrid` | stack | Places a sprite on every square you paint in the grid. | <span class="status tested">Tested</span> |
| ![make new sprite at grid location](../images/blocks/make-sprite-at-grid-light.png#only-light){ .block }![make new sprite at grid location](../images/blocks/make-sprite-at-grid-dark.png#only-dark){ .block } | `spritelab2_makeSpriteAtGrid` | stack | Makes one sprite at the grid square you pick. | <span class="status tested">Tested</span> |
| ![make new sprite at left](../images/blocks/make-sprite-at-position-light.png#only-light){ .block }![make new sprite at left](../images/blocks/make-sprite-at-position-dark.png#only-dark){ .block } | `spritelab2_makeSpriteAtPosition` | stack | Makes a sprite at left, center or right. | <span class="status tested">Tested</span> |
| ![make platform player at grid location](../images/blocks/make-platform-player-light.png#only-light){ .block }![make platform player at grid location](../images/blocks/make-platform-player-dark.png#only-dark){ .block } | `spritelab2_makePlatformPlayer` | stack | Makes the platform game player at a grid square. | <span class="status tested">Tested</span> |
| ![make platform blocks using grid](../images/blocks/make-platform-blocks-light.png#only-light){ .block }![make platform blocks using grid](../images/blocks/make-platform-blocks-dark.png#only-dark){ .block } | `spritelab2_makePlatformBlocks` | stack | Places platform blocks on the squares you paint. Pick a **Block** picture from the [Images tab](../image-generator.md); with none, they show as plain gray. | <span class="status tested">Tested</span> |
| ![set as player](../images/blocks/set-as-platform-player-light.png#only-light){ .block }![set as player](../images/blocks/set-as-platform-player-dark.png#only-dark){ .block } | `spritelab2_setAsPlatformPlayer` | stack | Makes an existing sprite the player. | <span class="status tested">Tested</span> |
| ![set as player 2](../images/blocks/set-as-platform-player2-light.png#only-light){ .block }![set as player 2](../images/blocks/set-as-platform-player2-dark.png#only-dark){ .block } | `spritelab2_setAsPlatformPlayer2` | stack | Makes an existing sprite player 2. | <span class="status tested">Tested</span> |
| ![the player](../images/blocks/the-player-light.png#only-light){ .block }![the player](../images/blocks/the-player-dark.png#only-dark){ .block } | `spritelab2_thePlayer` | value | The player sprite. Plugs into sprite slots. | <span class="status tested">Tested</span> |
| ![player 2](../images/blocks/the-player2-light.png#only-light){ .block }![player 2](../images/blocks/the-player2-dark.png#only-dark){ .block } | `spritelab2_thePlayer2` | value | The player 2 sprite. | <span class="status tested">Tested</span> |

## Behaviors

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![sprite begins behavior](../images/blocks/add-behavior-simple-light.png#only-light){ .block }![sprite begins behavior](../images/blocks/add-behavior-simple-dark.png#only-dark){ .block } | `gamelab_addBehaviorSimple` | stack | Starts a behavior on a sprite. Tested with **moving left** and **patrolling left and right**. | <span class="status tested">Tested</span> |
| ![sprite begins patrolling](../images/blocks/begins-behavior-light.png#only-light){ .block }![sprite begins patrolling](../images/blocks/begins-behavior-dark.png#only-dark){ .block } | `spritelab2_beginsBehavior` | stack | Starts a platform behavior: patrolling, wandering or following the player on blocks, or floating. "Floating" did nothing on a plain sprite; check it in a platform game. | <span class="status untested">Check by hand</span> |
| ![moving left](../images/blocks/moving-left-light.png#only-light){ .block }![moving left](../images/blocks/moving-left-dark.png#only-dark){ .block } | `spritelab2_movingLeft` | value | Walks the sprite slowly to the left. | <span class="status tested">Tested</span> |
| ![moving with arrow keys](../images/blocks/moving-with-arrow-keys-light.png#only-light){ .block }![moving with arrow keys](../images/blocks/moving-with-arrow-keys-dark.png#only-dark){ .block } | `spritelab2_movingWithArrowKeys` | value | The arrow keys move the sprite. The test tools could not press arrow keys. | <span class="status untested">Check by hand</span> |
| ![patrolling left and right](../images/blocks/patrolling-left-right-light.png#only-light){ .block }![patrolling left and right](../images/blocks/patrolling-left-right-dark.png#only-dark){ .block } | `spritelab2_patrollingLeftRight` | value | Walks the sprite back and forth. | <span class="status tested">Tested</span> |

## World

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![prompt user for variable](../images/blocks/set-prompt-light.png#only-light){ .block }![prompt user for variable](../images/blocks/set-prompt-dark.png#only-dark){ .block } | `gamelab_setPrompt` | stack | Shows a text box under the game; the answer goes into the variable. | <span class="status tested">Tested</span> |
| ![prompt user with choices](../images/blocks/set-prompt-with-choices-light.png#only-light){ .block }![prompt user with choices](../images/blocks/set-prompt-with-choices-dark.png#only-dark){ .block } | `gamelab_setPromptWithChoices` | stack | Shows up to three buttons; the chosen text goes into the variable. | <span class="status tested">Tested</span> |
| ![burst sparks from](../images/blocks/burst-light.png#only-light){ .block }![burst sparks from](../images/blocks/burst-dark.png#only-dark){ .block } | `spritelab2_burst` | stack | A spark burst from a sprite. | <span class="status tested">Tested</span> |
| ![set background color](../images/blocks/set-background-light.png#only-light){ .block }![set background color](../images/blocks/set-background-dark.png#only-dark){ .block } | `gamelab_setBackground` | stack | Sets a background color. Works with **random color** too. | <span class="status tested">Tested</span> |
| ![set background to](../images/blocks/set-background-image-as-light.png#only-light){ .block }![set background to](../images/blocks/set-background-image-as-dark.png#only-dark){ .block } | `gamelab_setBackgroundImageAs` | stack | Sets a background image. Make the background in the [Images tab](../image-generator.md) first; until then the menu is empty. | <span class="status tested">Tested</span> |
| ![do bubbles effect](../images/blocks/set-foreground-effect-light.png#only-light){ .block }![do bubbles effect](../images/blocks/set-foreground-effect-dark.png#only-dark){ .block } | `gamelab_setForegroundEffect` | stack | A screen effect: bubbles, confetti, hearts, emojis, rain, starburst, glass, twinkling and more. | <span class="status tested">Tested</span> |
| ![set weather to](../images/blocks/set-weather-light.png#only-light){ .block }![set weather to](../images/blocks/set-weather-dark.png#only-dark){ .block } | `spritelab2_setWeather` | stack | Rain or snow over the game. | <span class="status tested">Tested</span> |
| ![play sound](../images/blocks/play-sound-light.png#only-light){ .block }![play sound](../images/blocks/play-sound-dark.png#only-dark){ .block } | `spritelab2_playSound` | stack | Plays a sound. It ran with no errors, but the sound could not be heard in the test. | <span class="status untested">Check by hand</span> |
| ![play sound effect](../images/blocks/play-sound-effect-light.png#only-light){ .block }![play sound effect](../images/blocks/play-sound-effect-dark.png#only-dark){ .block } | `spritelab2_playSoundEffect` | stack | Plays a made-up tone (wave, pitch, length, pattern). Ran with no errors; not heard. | <span class="status untested">Check by hand</span> |
| ![play music](../images/blocks/play-music-light.png#only-light){ .block }![play music](../images/blocks/play-music-dark.png#only-dark){ .block } | `spritelab2_playMusic` | stack | Plays a song. The menu said "no songs yet", and neither the Images tab nor the level edit page has a way to add songs, so it is still unchecked. | <span class="status untested">Check by hand</span> |

## Game Design

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![show title You win](../images/blocks/show-title-light.png#only-light){ .block }![show title You win](../images/blocks/show-title-dark.png#only-dark){ .block } | `spritelab2_showTitle` | stack | Shows "You win!" in big letters for a few seconds. It has no inputs. | <span class="status tested">Tested</span> |
| ![go to scene](../images/blocks/go-to-scene-light.png#only-light){ .block }![go to scene](../images/blocks/go-to-scene-dark.png#only-dark){ .block } | `spritelab2_goToScene` | stack | Switches to another scene. Add scenes with **All scenes** → **New scene** under the workspace; each scene has its own code and its own **when run**. The menu lists the other scenes ("no scenes" if there is only one). Use **Run game** to start from the first scene. | <span class="status tested">Tested</span> |
| ![restart scene](../images/blocks/restart-scene-light.png#only-light){ .block }![restart scene](../images/blocks/restart-scene-dark.png#only-dark){ .block } | `spritelab2_restartScene` | stack | The screen fades and the scene starts over, so variables and timers reset. | <span class="status tested">Tested</span> |
| ![set jump height](../images/blocks/set-platform-jump-height-light.png#only-light){ .block }![set jump height](../images/blocks/set-platform-jump-height-dark.png#only-dark){ .block } | `spritelab2_setPlatformJumpHeight` | stack | How high the platform player jumps. Needs arrow keys to check. | <span class="status untested">Check by hand</span> |
| ![set gravity direction](../images/blocks/set-platform-gravity-direction-light.png#only-light){ .block }![set gravity direction](../images/blocks/set-platform-gravity-direction-dark.png#only-dark){ .block } | `spritelab2_setPlatformGravityDirection` | stack | Down, up or none. In the test the player did not fall either way, so check it by hand. | <span class="status untested">Check by hand</span> |
| ![set zoom to](../images/blocks/set-camera-zoom-light.png#only-light){ .block }![set zoom to](../images/blocks/set-camera-zoom-dark.png#only-dark){ .block } | `spritelab2_setCameraZoom` | stack | Zooms the camera. Nothing changed with a plain sprite (zoom 4), so it probably needs a platform player. Check by hand. | <span class="status untested">Check by hand</span> |

## Variables

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![set variable to](../images/blocks/variables-set-light.png#only-light){ .block }![set variable to](../images/blocks/variables-set-dark.png#only-dark){ .block } | `variables_set` | stack | Stores a value. | <span class="status tested">Tested</span> |
| ![variable](../images/blocks/variables-get-light.png#only-light){ .block }![variable](../images/blocks/variables-get-dark.png#only-dark){ .block } | `variables_get` | value | Reads a value. | <span class="status tested">Tested</span> |
| ![change by](../images/blocks/math-change-light.png#only-light){ .block }![change by](../images/blocks/math-change-dark.png#only-dark){ .block } | `math_change` | stack | Adds to a number variable. Listed under Math. | <span class="status tested">Tested</span> |
| ![show variable at](../images/blocks/show-variable-light.png#only-light){ .block }![show variable at](../images/blocks/show-variable-dark.png#only-dark){ .block } | `gamelab_showVariable` | stack | Shows a variable's name and value on the game screen, as a label like `score: 7`. | <span class="status tested">Tested</span> |
| ![hide variable](../images/blocks/hide-variable-light.png#only-light){ .block }![hide variable](../images/blocks/hide-variable-dark.png#only-dark){ .block } | `gamelab_hideVariable` | stack | Hides that label again. | <span class="status tested">Tested</span> |
| ![sprite variable](../images/blocks/sprite-variables-get-light.png#only-light){ .block }![sprite variable](../images/blocks/sprite-variables-get-dark.png#only-dark){ .block } | `sprite_variables_get` | value | Reads a sprite's own variable. No toolbox block sets one, so it wasn't tested. | <span class="status untested">Check by hand</span> |

## Functions

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![function definition](../images/blocks/procedures-defnoreturn-light.png#only-light){ .block }![function definition](../images/blocks/procedures-defnoreturn-dark.png#only-dark){ .block } | `procedures_defnoreturn` | hat | A named group of blocks, shown inside a green Function frame. Functions can't take inputs or return values. | <span class="status tested">Tested</span> |
| ![function call](../images/blocks/procedures-callnoreturn-light.png#only-light){ .block }![function call](../images/blocks/procedures-callnoreturn-dark.png#only-dark){ .block } | `procedures_callnoreturn` | stack | Runs a function. | <span class="status tested">Tested</span> |

To stop students from changing a function, see [Lock a function](../lock-a-function.md).

## Logic

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![if do](../images/blocks/controls-if-light.png#only-light){ .block }![if do](../images/blocks/controls-if-dark.png#only-dark){ .block } | `controls_if` | stack | Runs blocks when a test is true. The **+** adds else. | <span class="status tested">Tested</span> |
| ![compare](../images/blocks/logic-compare-light.png#only-light){ .block }![compare](../images/blocks/logic-compare-dark.png#only-dark){ .block } | `logic_compare` | value | =, ≠, <, ≤, >, ≥. | <span class="status tested">Tested</span> |
| ![and](../images/blocks/logic-operation-light.png#only-light){ .block }![and](../images/blocks/logic-operation-dark.png#only-dark){ .block } | `logic_operation` | value | and / or. | <span class="status tested">Tested</span> |
| ![not](../images/blocks/logic-negate-light.png#only-light){ .block }![not](../images/blocks/logic-negate-dark.png#only-dark){ .block } | `logic_negate` | value | Flips true and false. | <span class="status tested">Tested</span> |
| ![true](../images/blocks/logic-boolean-light.png#only-light){ .block }![true](../images/blocks/logic-boolean-dark.png#only-dark){ .block } | `logic_boolean` | value | true or false. | <span class="status tested">Tested</span> |

## Loops

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![repeat times](../images/blocks/controls-repeat-ext-light.png#only-light){ .block }![repeat times](../images/blocks/controls-repeat-ext-dark.png#only-dark){ .block } | `controls_repeat_ext` | stack | Repeats a set number of times. | <span class="status tested">Tested</span> |
| ![repeat while](../images/blocks/controls-while-until-light.png#only-light){ .block }![repeat while](../images/blocks/controls-while-until-dark.png#only-dark){ .block } | `controls_whileUntil` | stack | Repeats while (or until) a test is true. | <span class="status tested">Tested</span> |
| ![count with](../images/blocks/controls-for-light.png#only-light){ .block }![count with](../images/blocks/controls-for-dark.png#only-dark){ .block } | `controls_for` | stack | Counts a variable from one number to another. | <span class="status tested">Tested</span> |
| ![break out of loop](../images/blocks/controls-flow-statements-light.png#only-light){ .block }![break out of loop](../images/blocks/controls-flow-statements-dark.png#only-dark){ .block } | `controls_flow_statements` | stack | Leaves the loop (or skips to the next round). Shows a warning until it is inside a loop. | <span class="status tested">Tested</span> |

## Math

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![number](../images/blocks/math-number-light.png#only-light){ .block }![number](../images/blocks/math-number-dark.png#only-dark){ .block } | `math_number` | value | A number. | <span class="status tested">Tested</span> |
| ![random integer](../images/blocks/math-random-int-light.png#only-light){ .block }![random integer](../images/blocks/math-random-int-dark.png#only-dark){ .block } | `math_random_int` | value | A random whole number between two numbers. | <span class="status tested">Tested</span> |
| ![arithmetic](../images/blocks/math-arithmetic-light.png#only-light){ .block }![arithmetic](../images/blocks/math-arithmetic-dark.png#only-dark){ .block } | `math_arithmetic` | value | +, −, ×, ÷, ^. | <span class="status tested">Tested</span> |
| ![round](../images/blocks/math-round-light.png#only-light){ .block }![round](../images/blocks/math-round-dark.png#only-dark){ .block } | `math_round` | value | Round, round up, round down. | <span class="status tested">Tested</span> |
| ![square root](../images/blocks/math-single-light.png#only-light){ .block }![square root](../images/blocks/math-single-dark.png#only-dark){ .block } | `math_single` | value | Square root, absolute value and more. | <span class="status tested">Tested</span> |
| ![remainder of](../images/blocks/math-modulo-light.png#only-light){ .block }![remainder of](../images/blocks/math-modulo-dark.png#only-dark){ .block } | `math_modulo` | value | The remainder after dividing. | <span class="status tested">Tested</span> |
| ![is even](../images/blocks/math-number-property-light.png#only-light){ .block }![is even](../images/blocks/math-number-property-dark.png#only-dark){ .block } | `math_number_property` | value | Even, odd, prime, whole, positive, negative. | <span class="status tested">Tested</span> |

## Text

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![text](../images/blocks/text-light.png#only-light){ .block }![text](../images/blocks/text-dark.png#only-dark){ .block } | `text` | value | A piece of text. | <span class="status tested">Tested</span> |
| ![join](../images/blocks/text-join-simple-light.png#only-light){ .block }![join](../images/blocks/text-join-simple-dark.png#only-dark){ .block } | `text_join_simple` | value | Joins text and variables. The **+** adds more slots. | <span class="status tested">Tested</span> |

## Colour

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![color](../images/blocks/colour-picker-light.png#only-light){ .block }![color](../images/blocks/colour-picker-dark.png#only-dark){ .block } | `colour_picker` | value | A color you pick. | <span class="status tested">Tested</span> |
| ![random color](../images/blocks/colour-random-light.png#only-light){ .block }![random color](../images/blocks/colour-random-dark.png#only-dark){ .block } | `colour_random` | value | A random color. | <span class="status tested">Tested</span> |

## Location

| Block | Type | Shape | What it does | Status |
|---|---|---|---|---|
| ![location](../images/blocks/location-picker-light.png#only-light){ .block }![location](../images/blocks/location-picker-dark.png#only-dark){ .block } | `gamelab_location_picker` | value | A spot on the game screen you pick. | <span class="status tested">Tested</span> |

## Blocks that run but aren't in the toolbox

Sprite Lab 2 shows only an allowlist of the older shared-pool blocks in the toolbox (25 of them, set in the lab's code). Other pool blocks are still loaded, and they **run** if they are already in the starter code.

- Tested 2026-11-25: `gamelab_changePropBy` ("change ? size by ?") added to starter code with the [console](console-recipes.md) made the sprite bigger when run. Nothing was saved.
- Students can't drag these from the toolbox, so use them only in locked starter code, and test each one first.
- See [Create new blocks](../create-new-blocks.md).
