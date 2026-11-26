# Setup tricks

## Hide setup code in a locked function <span class="status tested">Tested</span>

Sprite Lab 2 has no initialization blocks (hidden code that runs first). The closest option is a function that students can see but can't open or change.

1. In start mode, put the setup blocks inside a function.
2. Run the [lock recipe](reference/console-recipes.md#lock-and-collapse-a-function) in the browser console.
3. Click **Save**. Students now see one closed block they can't open, edit, move or delete.

    ![collapsed, locked function](images/blocks/function-locked-light.png#only-light){ .block loading=lazy }
    ![collapsed, locked function](images/blocks/function-locked-dark.png#only-dark){ .block loading=lazy }

!!! danger "Don't make it invisible"
    Setting the function to invisible makes the program fail with a "not defined" error. <span class="status unverified">Not yet tested</span>

## Other tips

| Tip | Status |
|---|---|
| Click **Start Over** after every starter code save, or you'll keep seeing your old project. | <span class="status tested">Tested</span> |
| For Variables and Functions, use the Auto-populated Category block on its own. | <span class="status tested">Tested</span> |
| In the JSON box, each key replaces its whole value. To change one item, copy the whole value, edit it and paste it back. `null`, empty or `false` removes the key. | <span class="status tested">Tested</span> |
| After a console change, wait a few seconds before you click **Save**, then reload to check. | <span class="status unverified">Not yet tested</span> |
| Exemplar code doesn't save on Sprite Lab 2 levels. Keep the exemplar in a cloned level. | <span class="status unverified">Not yet tested</span> |
