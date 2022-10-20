# intersection

Excludes items from a dataset by comparing the values of its subsets.

If the value of an item is **not** also found in **each** of the subsets, then it is excluded from the resulting array.

## Properties

Mutation: `false`
Difficulty: `Medium`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[]`

## Example

```typescript
const array1 = ['cherry', 'apple'];
const array2 = ['apple', 'banana'];
const array3 = ['banana', 'cherry', 'apple'];

intersection(array1, array2, array3); // => ['apple']
```

Only `apple` is found in each array.

## Notes

The order of the resulting items follows the order of the first array provided.
