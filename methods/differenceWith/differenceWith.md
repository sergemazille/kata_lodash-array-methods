# differenceWith

Similar to the `difference` function but the values are evaluated by a comparison function (predicate) instead of comparing values directly.

The first argument is the reference array. While comparing each of its values with each comparison values, if the function returns true, then the conditions are met and the value is excluded from the resulting array.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `T[]`

## Arguments

- `array: T[]`
- `...arrays: T[]`
- `predicate: <T>(refValue: T, otherValue: T) => boolean`

## Examples

```typescript
const array = ['apple', 'banana', 'cherry'];
const hasSameCharactersCount = (refValue: string, otherValue: string) => refValue.length === otherValue.length;
differenceWith(array, ['apricots', 'durian'], hasSameCharactersCount); // => ['apple']

const array = [
  { firstname: 'John', lastname: 'Doe' },
  { age: 34, city: 'New York' },
];
const objectsAreEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
differenceWith(array, [{ age: 34, city: 'New York' }], objectsAreEqual); // => [{ firstname: 'John', lastname: 'Doe' }]
```

## Notes

The last argument has to be a function.

The resulting array can still contain non unique values.

```typescript
const array = ['apple', 'apple', 'cherry'];
const hasSameCharactersCount = (refValue: string, otherValue: string) => refValue.length === otherValue.length;

differenceWith(array, ['apricots', 'durian'], hasSameCharactersCount); // => ['apple', 'apple']
```
