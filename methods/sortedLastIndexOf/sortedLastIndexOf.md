# sortedLastIndexOf

Returns the index of the last item of an array that matches a provided value.

This function is similar to `sortedLastIndexOf` but operates from the end of the array.

By default the function starts from the last item but an optional argument can override this behavior.

This function is similar to `lastIndexOf` with the exception that it is optimized for sorted arrays.

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
const array = ['apple', 'banana', 'banana', 'peach'];
const value = 'banana';
sortedLastIndexOf(array, value); // => 2

const array = ['apple', 'banana', 'cherry', 'peach'];
const value = 'tomato';
sortedLastIndexOf(array, value); // => -1

const array = ['apple', 'banana', 'cherry', 'peach'];
const value = 'peach';
sortedLastIndexOf(array, value, 2); // => -1 (there is no 'peach' item at or before the index 2)
```

## Notes

If an empty array is provided or no matching value is found, the number `-1` is returned.
