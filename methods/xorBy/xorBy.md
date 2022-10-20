# xorBy

Returns the values of each array for which the projected value are not also found in any of the other arrays.

Similar to the `xor` function but compares the uniqueness of the values through the projected values returned by a function, instead of comparing values directly.

If a projected value is a duplicate in its own array then only the first occurence will be returned.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[]`
- `project: (value: T) => U`

## Example

```typescript
const array1 = ['apple', 'cherry', 'durian', 'avocado'];
const array2 = ['apricot', 'date', 'tomato'];
const array3 = ['banana', 'berry'];

const getFirstCharacter = (item: string) => item.charAt(0);

xorBy(array1, array2, array3, getFirstCharacter); // => ['cherry', 'tomato', 'banana']
```
