# differenceBy

Similar to the `difference` function but compares the values evaluated through a function instead of comparing values directly.

If the projected value of the array to filter is equal to the projected value of the item it is compared to, then the conditions are met and the original value is removed from the resulting array.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `T[]`

## Arguments

- `array: T[]`
- `...arrays: T[]`
- `project: (value: T) => U`

## Example

```typescript
const array = ['apple', 'banana', 'cherry'];
const getFirstCharacter = (item: string) => item.charAt(0);

differenceBy(array, ['apricots', 'clementine'], getFirstCharacter); // => ['banana']
```

## Notes

The last argument has to be a function.

The resulting array can still contain non unique values.

```typescript
const array = [1.2, 1.2, 2.7];
const transform = Math.floor;

differenceBy(array, [2.6], transform); // => [1.2, 1.2]
```
