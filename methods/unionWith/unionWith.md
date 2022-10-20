# unionWith

Similar to the `union` function but compares the uniqueness of the values through a comparison function (predicate) instead of comparing their uniqueness directly.

While comparing the uniqueness of each values together, if the function returns true, then the conditions are met and the value is considered unique and returned in the resulting array.

Also very similar to `uniqWith` with the difference that it accepts multiple arrays as first arguments.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[]`
- `predicate: <T>(refValue: T, otherValue: T) => boolean`

## Examples

```typescript
// are considered equivalent the values that
// - have the same number of characters
// - start with the same letter
function comparator(a: string, b: string) {
  const hasSameCharactersCount = a.length === b.length;
  const startsWithSameLetter = a.charAt(0) === b.charAt(0);

  return hasSameCharactersCount && startsWithSameLetter;
}

const array1 = ['John', 'Jane'];
const array2 = ['Jim'];
const array3 = ['Jerry', 'Jill', 'Lynda'];
unionWith(array1, array2, array3, comparator); // => ['John', 'Jim', 'Jerry', 'Lynda']
```
