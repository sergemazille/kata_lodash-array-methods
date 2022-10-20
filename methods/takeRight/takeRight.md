# takeRight

Returns the provided number of items, starting from the end of an array.

## Properties

Mutation: `false`
Difficulty: `Easy`
Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `count: number = 1`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'tomato'];

takeRight(array, 2); // => ['peach', 'tomato']
takeRight(array, 5); // => ['banana', 'apple', 'peach', 'tomato']
takeRight(array, -1); // => []
takeRight(array); // => ['tomato']
```

## Notes

If count is equal to 0 or negative then an empty array will be returned.
