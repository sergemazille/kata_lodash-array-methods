# findLastIndex

Returns the index of the last item of an array that matches the conditions of a predicate function.

This function is similar to `findIndex` but operates from the end of the array.

By default the predicate function starts from the last item but an optional argument can override this behavior.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `number`

## Arguments

- `array: T[]`
- `predicate: (item, index, array) => boolean`
- `startIndex: number = array.length - 1`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'tomato'];
const has5Characters = (item) => item.length === 5;

findLastIndex(array, has5Characters, 2); // => 2
findLastIndex(array, has5Characters); // => -1
```

## Notes

If none of the array's items corresponds to the criteria then `-1` is returned.

The evaluation of the items starts from the end of the array.

If the starting index is greater than the array's length then the last index of the array is taken.
