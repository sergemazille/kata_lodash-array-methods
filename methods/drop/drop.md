# drop

Removes the provided number of items from the beginning of an array.

## Properties

Mutation: `false`
Difficulty: `Easy`
Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `count: number = 1`

## Example

```typescript
const array = ['banana', 'apple', 'peach', 'tomato'];

drop(array, 2); // => ['peach', 'tomato']
drop(array, 5); // => []
drop(array, -1); // => ['banana', 'apple', 'peach', 'tomato']
drop(array); // => ['apple', 'peach', 'tomato']
```

## Notes

A negative count argument has no effect.

If no count is provided, one item will be dropped
