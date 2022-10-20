# sortedIndex

Returns the lowest index where the value could be inserted while keeping the array sorted.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `number`

## Arguments

- `sortedArray: T[]`
- `value: T`

## Examples

```typescript
const sortedArray = [11, 25, 42, 86];
const value = 40;

sortedIndex(sortedArray, value); // => 2

const sortedArray = ['apple', 'banana', 'peach', 'tomato'];
const value = 'apricot';

sortedIndex(sortedArray, value); // => 1
```
