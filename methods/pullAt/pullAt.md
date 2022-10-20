# pullAt

Extracts items of an array that are positionned at the given indexes.

This function **does mutate** the original array.

The return array is composed of the **removed** values.

## Properties

Mutation: `true`

Difficulty: `Hard`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `indexes: number[]`

## Example

```typescript
const array = ['banana', 'apple', 'cherry', 'peach'];

pullAt(array, [1, 2]); // => ['cherry', 'peach']
array; // => ['banana', 'apple']
```
