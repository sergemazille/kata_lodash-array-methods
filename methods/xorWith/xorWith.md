# xorWith

Returns the values of each array for which a predicate function determines if it is not also truthy in any of the other arrays.

Similar to the `xor` function but compares the uniqueness of the values through a comparison function instead of comparing their uniqueness directly.

While comparing the uniqueness of each values together, if the function returns true, then the conditions are met and the value is considered unique and returned in the resulting array.

If a projected value is a duplicate in its own array then only the first occurence will be returned.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[]`
- `predicate: <T>(refValue: T, otherValue: T) => boolean`

## Example

```typescript
// are considered equivalent the values that
// - have the same number of characters
// - start with the same letter
function comparator(a: string, b: string) {
  const hasSameCharactersCount = a.length === b.length;
  const startsWithSameLetter = a.charAt(0) === b.charAt(0);

  return hasSameCharactersCount && startsWithSameLetter;
}

const array1 = ['apple', 'cherry', 'longan', 'avocado'];
const array2 = ['apricot', 'date', 'cashew'];
const array3 = ['banana', 'berry', 'loquat'];

xorWith(array1, array2, array3, comparator); // => ['apple', 'date', 'banana', 'berry']
```
