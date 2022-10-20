# flattenDepth

Flatten the subarrays of an array up to the number of levels provided as argument.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `level: number = 0`

## Examples

```typescript
const array = ['banana', ['apple', ['peach'], 'tomato']];

flattenDepth(array, 0); // => ['banana', ['apple', ['peach'], 'tomato']]
flattenDepth(array, 1); // => ['banana', 'apple', ['peach'], 'tomato']
flattenDepth(array, 2); // => ['banana', 'apple', 'peach', 'tomato']
flattenDepth(array); // => ['banana', 'apple', ['peach'], 'tomato']
```
