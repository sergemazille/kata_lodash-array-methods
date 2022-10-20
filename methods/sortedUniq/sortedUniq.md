# sortedUniq

Returns only the first occurence of each values (ignores the eventual duplicates).

This function is similar to `uniq` with the exception that it is optimized for sorted arrays.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `sortedArray: unknown[]`

## Examples

```typescript
const sortedArray = ['apple', 'banana', 'banana', 'cherry', 'cherry', 'peach'];
sortedUniq(sortedArray); // => ['apple', 'banana', 'cherry', 'peach']
```
