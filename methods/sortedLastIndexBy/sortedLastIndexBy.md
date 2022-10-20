# sortedLastIndexBy

Returns the lowest index where the value could be inserted while keeping the array sorted.

Similar to the `sortLastIndex` function but compares the values evaluated through a function instead of comparing values directly.

If the projected value is already present in the array, the result index is the higher possible one.

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

sortedLastIndexBy(sortedArray, value, Math.floor); // => 3

const numberOfCharacters = (item: string) => item.length;
const sortedArray = ['fig', 'date', 'peach', 'peach', 'apple', 'tomato'];
const value = 'apple';

sortedLastIndexBy(sortedArray, value, numberOfCharacters); // => 5
```
