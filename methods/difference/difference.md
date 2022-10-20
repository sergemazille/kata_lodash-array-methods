# difference

Filter an array by comparing the values of its items with each of the values of a comparison dataset.

The comparison dataset can be one or multiple arrays, passed as extra arguments.

If the value of an item is also found in the comparison dataset, then it is excluded from the resulting array.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `T[]`

## Arguments

- `array: T[]`
- `...comparisonDataset: T[][]`

## Example

```typescript
const array = ['banana', 'apple', 'orange', 'kiwi', 'pear'];

difference(array, ['apple', 'cherry'], ['pear'], 'banana'); // => ['banana', 'orange', 'kiwi']
```

`banana` is kept in the filtered array because it is not passed dirrectly as a string, and not as an array so it is ignored.

`cherry` does not belong to the filtered array because it is not present in the reference array.

## Notes

Every argument has to be an array.

The resulting array can still contain non unique values.

```typescript
const array = ['apple', 'apple', 'orange'];

difference(array, ['orange']); // => ['apple', 'apple']
```
