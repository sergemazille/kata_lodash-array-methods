# slice

Returns the items included between a start index and an excluded end index.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `startIndex: number = 0`
- `excludedEndIndex: number = array.length`

## Example

```typescript
const array = ['banana', 'apple', 'orange', 'kiwi', 'pear'];

slice(array, 1, 3); // => ['apple', 'orange']
```
