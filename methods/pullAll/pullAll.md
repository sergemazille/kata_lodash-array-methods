# pullAll

Removes **all** given values from an array.

This function **does mutate** the original array.

This function is very similar with the `pull` function, with the exception that the values come in the form of an array instead of the form of a list.

## Properties

Mutation: `true`

Difficulty: `Medium`

Return type: `T[]`

## Arguments

- `array: T[]`
- `valuesArray: T[]`

## Example

```typescript
const array = ['banana', 'apple', 'cherry', 'peach'];

pullAll(array, ['apple', 'peach']); // => ['banana', 'cherry']
```
