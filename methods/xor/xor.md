# xor

Returns the values of each array that are not also found in any of the other arrays.

If a value is a duplicate in its own array then only the first occurence will be returned.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[]`

## Example

```typescript
const array1 = ['apple', 'cherry', 'durian', 'apple', 'banana',];
const array2 = ['tomato'];
const array3 = ['cherry'];
xor(array1, array2, array3); // => ['apple', 'durian', 'banana', 'tomato']
```
