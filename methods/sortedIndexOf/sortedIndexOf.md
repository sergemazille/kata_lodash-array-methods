# sortedIndexOf

Returns the index of the first item of an array that matches a provided value.

By default the function starts from the first item but an optional argument can override this behavior.

This function is similar to `indexOf` with the exception that it is optimized for sorted arrays.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `number`

## Arguments

- `array: T[]`
- `value: T`
- `startIndex: number = 0`

## Examples

```typescript
const array = ['apple', 'banana', 'cherry', 'peach'];
const value = 'banana';
sortedIndexOf(array, value); // => 1

const array = ['apple', 'banana', 'cherry', 'peach'];
const value = 'tomato';
sortedIndexOf(array, value); // => -1

const array = ['apple', 'banana', 'cherry', 'peach'];
const value = 'apple';
sortedIndexOf(array, value, 2); // => -1 (there is no 'apple' item at or after the index 2)
```

## Notes

If an empty array is provided or no matching value is found, the number `-1` is returned.
