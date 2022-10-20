# pull

Removes **all** given values from an array.

This function is similar to the `without` function, with the exception that it **does mutate** the original array.

## Properties

Mutation: `true`
Difficulty: `Medium`
Return type: `T[]`

## Arguments

- `array: T[]`
- `...values: T`

## Example

```typescript
const array = ['banana', 'apple', 'cherry', 'peach'];

pull(array, 'apple', 'peach'); // => ['banana', 'cherry']
```
