# findIndex

Returns the index of the first item that matches the conditions of a predicate function.

By default the predicate function starts from the first item but an optional start index argument can override this behavior.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `number`

## Arguments

- `array: T[]`
- `predicate: (item, index, array) => boolean`
- `startIndex: number = 0`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'tomato'];
const has5Characters = (item) => item.length === 5;

findIndex(array, has5Characters, 2); // => 2
findIndex(array, has5Characters, 3); // => -1
```

## Notes

If none of the array's items corresponds to the criteria then `-1` is returned.
