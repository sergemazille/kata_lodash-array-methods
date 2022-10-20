# concat

Concatenates all provided arguments into a single array.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `...arguments: any`

## Examples

```typescript
const array = ['banana', 'apple'];

concat(array, 1, [2, 3], [[4], 5]); // => ['banana', 'apple', 1, 2, 3, [4], 5] (notice the flatten array at the end)
concat(1, [2, 3], [[4], 5]); // => [1, 2, 3, [4], 5]
```

## Notes

The first argument doesn't need to be an array.

If an argument is already an array then it is flatten one (and only one) level up.

```typescript
const array = ['cherry'];

concat(array, 'apple', ['banana', ['pear', ['tomato']]]); // => ['cherry', 'apple', 'banana', ['pear', ['tomato']]]
```
