# dropRight

Removes the provided number of items, starting from the end of an array.

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

dropRight(array, 2); // => ['banana', 'apple']
dropRight(array, 5); // => []
dropRight(array, -1); // => ['banana', 'apple', 'peach', 'tomato']
dropRight(array); // => ['banana', 'apple', 'peach']
```

## Notes

A negative count argument has no effect.

If no count is provided, one item will be dropped
