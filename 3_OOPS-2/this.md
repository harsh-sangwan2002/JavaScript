## Rules

* "this" is determined on run-time
* "this" is always determined when a execution context is created.

### non-strict mode
* "this" is determined in different scenarios
    * `this in GEC` -> window
    * EC created in `method call` then "this" points to -> `current calling obj`
    * EC created using a `function call` -> `window obj`
    * Arrow functions don't have their own "this", they inherit from the outer scope.

### strict mode
* "this" is determined in different scenarios
    * `this in GEC` -> window
    * EC created in `method call` then "this" points to -> `current calling obj`
    * EC created using a `function call` -> `undefined`
    * Arrow functions don't have their own "this", they inherit from the outer scope.