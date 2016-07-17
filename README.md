# Function Parameter Type Validation Decorators
This is a library intended to be used with Babel 6 and `babel-runtime` or the `babel-polyfill` (specifically, the `babel-plugin-transform-function-parameter-decorators` plugin). It works in tandem with function parameter decorators to validate the type of any argument passed to a function.

The decorators themselves will be extended on the `window`:
```javascript
function incrementArr(@type.isArray arr) {
    return arr.map(v => v + 1);
}

function typesafeToFixed(@type.isNumber num, places = 2) {
    return num.toFixed(places);
}
```
This will be transpiled to:
```javascript
function incrementArr(_arr) {
    var arr = window.type.isArray(_arr);

    return arr.map(v => v + 1);
}

function typesafeToFixed(num, places = 2) {
    var num = window.type.isNumber(_num);

    return num.toFixed(places);
}
```
The decorator library can also be imported:
```javascript

import type from 'function-parameter-type-validation-decorators';

function typesafeToLowerCase(@type.isString str) {
    return str.toLowerCase();
}
```
Which will in turn be transpiled to:
```javascript

import type from 'function-parameter-type-validation-decorators';

function typesafeToLowerCase(_str) {
    var str = window.type.isString(_str);

    return str.toLowerCase();
}
```

#### NOTE:
This package depends on `babel-plugin-transform-decorators-legacy` and `babel-plugin-transform-function-parameter-decorators`

## Installation & Usage
```bash
npm install babel-plugin-transform-decorators-legacy babel-plugin-transform-function-parameter-decorators
```
Add the following line to your `.babelrc` file:
```json
    {
        "plugins": [
            "transform-decorators-legacy",
            "transform-function-parameter-decorators"
        ]
    }
```
and then either use the library similar to the `window` or the `import` example above.

## License
MIT (c) 2016