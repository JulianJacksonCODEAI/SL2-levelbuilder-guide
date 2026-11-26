# AI blocks <span class="status tested">Tested</span>

The AI category has three blocks. They work only for levelbuilders, pilot users, students of pilot teachers, and sections with AI tools turned on.

## set system prompt

Sets instructions the AI follows for every later question.

![set system prompt block](../images/blocks/set-system-prompt-light.png#only-light){ .block loading=lazy }
![set system prompt block](../images/blocks/set-system-prompt-dark.png#only-dark){ .block loading=lazy }

## ask AI

Sends a question and stores the answer in a variable. It is a stack block, not a block that returns text.

![ask AI block](../images/blocks/ask-ai-light.png#only-light){ .block loading=lazy }
![ask AI block](../images/blocks/ask-ai-dark.png#only-dark){ .block loading=lazy }

There is no "wait" block. To use the answer, put your code under **when [variable] answered**.

![when answered block](../images/blocks/when-answered-light.png#only-light){ .block loading=lazy }
![when answered block](../images/blocks/when-answered-dark.png#only-dark){ .block loading=lazy }

## ask AI with answer choices

Like **ask AI**, but the answer is always one of the choices you list.

![ask AI with answer choices block](../images/blocks/ask-ai-with-choices-light.png#only-light){ .block loading=lazy }
![ask AI with answer choices block](../images/blocks/ask-ai-with-choices-dark.png#only-dark){ .block loading=lazy }

### Example program

![program that sets a system prompt and asks with choices](../images/blocks/example-ask-ai-program-light.png#only-light){ .block loading=lazy }
![program that sets a system prompt and asks with choices](../images/blocks/example-ask-ai-program-dark.png#only-dark){ .block loading=lazy }

![when answered, if answer = yes, show title](../images/blocks/example-branch-on-answer-light.png#only-light){ .block loading=lazy }
![when answered, if answer = yes, show title](../images/blocks/example-branch-on-answer-dark.png#only-dark){ .block loading=lazy }

### What it returns

Tested with **when [answer] answered** set up to show whether it fired.

| Case | What happened | Variable | **when answered** runs? |
|---|---|---|---|
| Normal question | The AI picked the right choice. | That choice | Yes |
| Nonsense question | The AI picked the closest choice. It never says "none of these." | That choice | Yes |
| The AI sends back a number that isn't a choice | Console warning: "The AI answered with something other than a choice." | Unchanged | No |
| Empty answer | Same console warning | Unchanged | No |
| Network failure | Console warning: "Failed to fetch" | Unchanged | No |
| Timeout (15 seconds) | Students see "The AI took too long to answer. Try again." | Unchanged | No |

What this means for your level:

- The block tells the AI, "If no choice fits, pick the closest one." The variable can only ever hold one of your choices.
- A variable that was never set starts as `undefined`. After a failure, the variable keeps its old value: `undefined` on the first question, or the last good answer after that.
- An `else` under **when answered** can't catch a failure, because **when answered** never runs.
- To notice a failure, set the variable to `"waiting"` before you ask, then check it later from a timer or a button.
- In testing, each Run sent the question to the AI twice. This may be why answers sometimes show twice in one speech bubble.
