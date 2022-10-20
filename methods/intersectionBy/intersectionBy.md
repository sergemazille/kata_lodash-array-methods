# intersectionBy

Similar to the `intersection` function but compares the values evaluated through a function instead of comparing values directly.

If the projected value of an item is **not** also found in **each** of the subsets, then it is excluded from the resulting array.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `T[]`

## Arguments

- `...arrays: T[]`
- `project: (value: T) => U`

## Examples

```typescript
const array1 = [2.1, 1.2, 4.8, 6.3];
const array2 = [2.3, 3.4, 4.1];
const array3 = [4.6, 1.3, 2.2];
intersectionBy(array1, array2, array3, Math.floor); // => [2.1, 4.8]

const array1 = ['apple', 'banana', 'pineapple'];
const array2 = ['tomato', 'apricot', 'peach'];
const array3 = ['fig', 'grape', 'cherry'];
const numberOfCharacters = (item) => item.length;
intersectionBy(array1, array2, array3, numberOfCharacters); // => ['apple', 'banana']
```

## Notes

The order of the resulting items follows the order of the first array provided.

The last argument has to be a function.
