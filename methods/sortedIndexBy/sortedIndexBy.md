# sortedIndexBy

Returns the lowest index where the value could be inserted while keeping the array sorted.

Similar to the `sortIndex` function but compares the values evaluated through a function instead of comparing values directly.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `number`

## Arguments

- `sortedArray: T[]`
- `value: T`
- `project: (value: T) => U`

## Examples

```typescript
const sortedArray = [1.3, 1.9, 2.4, 3.6];
const value = 2.6;

sortedIndexBy(sortedArray, value, Math.floor); // => 2

const numberOfCharacters = (item: string) => item.length;
const sortedArray = ['fig', 'date', 'peach', 'tomato'];
const value = 'apple';

sortedIndexBy(sortedArray, value, numberOfCharacters); // => 2
```
