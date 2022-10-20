# uniq

Returns only the first occurence of each values (ignores the eventual duplicates).

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`

## Example

```typescript
const array = ['banana', 'apple', 'banana', 'cherry', 'peach', 'cherry'];
uniq(array); // => ['banana', 'apple', 'cherry', 'peach']
```
