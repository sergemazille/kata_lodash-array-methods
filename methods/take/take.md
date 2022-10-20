# take

Returns the provided number of items from the beginning of an array.

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

take(array, 2); // => ['banana', 'apple']
take(array, 5); // => ['banana', 'apple', 'peach', 'tomato']
take(array, -1); // => []
take(array); // => ['banana']
```

## Notes

If count is equal to 0 or negative then an empty array will be returned.
