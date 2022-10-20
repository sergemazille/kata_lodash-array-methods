# union

Returns only the first occurence of each values from a dataset (ignores the eventual duplicates).

Very similar to `uniq` with the difference that it accepts multiple arrays as arguments.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[][]`

## Example

```typescript
const array1 = ['banana', 'apple', 'banana', 'cherry'];
const array2 = ['peach', 'cherry'];
union(array); // => ['banana', 'apple', 'cherry', 'peach']
```
