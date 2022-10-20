# lastIndexOf

Returns the index of the last item of an array that matches a provided value.

This function is similar to `indexOf` but operates from the end of the array.

By default the function starts from the last item but an optional argument can override this behavior.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `number`

## Arguments

- `array: T[]`
- `value: T`
- `endIndex: number = array.length - 1`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'apple'];
const value = 'apple';
lastIndexOf(array, value); // => 3

const array = ['banana', 'apple', 'peach', 'cherry'];
const value = 'tomato';
lastIndexOf(array, value); // => -1

// The function can operate on objects:
const array = [{ fruit: 'banana' }, { fruit: 'apple' }, { fruit: 'banana' }, { fruit: 'peach' }];
const value = { fruit: 'banana' };
lastIndexOf(array, value); // => 2

// With an override on the last index from which to start:
const array = ['banana', 'apple', 'peach', 'cherry'];
const value = 'cherry';
lastIndexOf(array, value, 2); // => -1 (there is no 'cherry' item at or before the index 2)
```

## Notes

If an empty array is provided or no matching value is found, the number `-1` is returned.
