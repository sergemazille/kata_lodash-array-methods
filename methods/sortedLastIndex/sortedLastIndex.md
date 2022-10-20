# sortedLastIndex

Returns the lowest index where the value could be inserted while keeping the array sorted.

Similar to the `sortedIndex` function but if the value is already present in the array, the result index is the higher possible one.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `number`

## Arguments

- `sortedArray: T[]`
- `value: T`

## Example

```typescript
const sortedArray = [11, 25, 40, 40, 86];
const value = 40;

sortedLastIndex(sortedArray, value); // => 4
```
