## Maybe window

Simply the `window` wrapped in a `Maybe` structure. Useful when you're not sure that the window exists and you're tired of having to check that it does...

```js
  import { getWindow } from 'maybe-window'

  getWindow().map(window =>
    // Do something with the window
  )
```
