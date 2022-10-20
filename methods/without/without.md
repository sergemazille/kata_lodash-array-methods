# without

Removes all given values from an array.

This function is very similar with the `pull` function, with the exception that it doesn't mutate the original array.

## Properties

Mutation: `false`
Difficulty: `Easy`
Return type: `T[]`

## Arguments

- `array: T[]`
- `...values: T`

## Example

```typescript
const array = ['banana', 'apple', 'cherry', 'peach'];

without(array, 'apple', 'peach'); // => ['banana', 'cherry']
```
