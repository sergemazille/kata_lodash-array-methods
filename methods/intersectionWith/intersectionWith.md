# intersectionWith

Similar to the `intersection` function but the values are evaluated by a comparison function (predicate) instead of comparing values directly.

The first argument is the reference array. While comparing each of its values with each comparison values, if the function returns false, then the conditions are met and the value is excluded from the resulting array.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `T[]`

## Arguments

- `...arrays: T[]`
- `predicate: <T>(refValue: T, otherValue: T) => boolean`

## Example

```typescript
const array1 = [4, 3, 6, 8, 1, 9];
const array2 = [5, 6, 7, 12];
const array3 = [6, 4, 5, 7];

const isSmaller = (a: number, b: number) => a < b;

intersectionWith(array1, array2, array3, isSmaller); // => [4, 3, 6, 1]
```

If the condition is true at least once in every array then the value is kept in the result.

```typescript
4 < 6 && 4 < 6; // we keep 4
3 < 5 && 3 < 6; // we keep 3
6 < 7 && 6 < 7; // we keep 6
8 < 12; // but 8 is not smaller than any of the last array values. We drop 8
1 < 5 && 1 < 6; // we keep 1
9 < 12; // but 9 is not smaller than any of the last array values. We drop 9
```

## Notes

The order of the resulting items follows the order of the first array provided.

The last argument has to be a function.
