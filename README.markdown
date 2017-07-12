# check-prop-type

Run a prop type against a value and return any warnings


## Installation

```sh
npm install check-prop-type --save
```


## Usage

```
checkPropType(propType, value)
```

Returns a string containing an error if the given prop-type is not valid for the given value.

Returns null otherwise.

Examples (adadpted from the test suite):

```js
import checkPropType from "check-prop-type"

const result = checkPropType(PropTypes.string, 1)
expect(result).to.be.a("string")

const result = checkPropType(PropTypes.string, "asd")
expect(result).to.be.null

const result = checkPropType(PropTypes.string.isRequired, undefined)
expect(result).to.be.a("string")
```
