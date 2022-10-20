# pullAllWith

Similar to the `pullAll` function but the values are evaluated against a comparison function (predicate) instead of comparing values directly.

The first argument is the reference array. While comparing each of its values with each comparison values, if the function returns true, then the conditions are met and the value is excluded from the resulting array.

## Properties

Mutation: `true`

Difficulty: `Hard`

Return type: `T[]`

## Arguments

- `array: T[]`
- `comparisonArray: T[]`
- `predicate: <T>(refValue: T, otherValue: T) => boolean`

## Example

```typescript
const array = [
  { firstname: 'John', age: 42 },
  { firstname: 'Jane', age: 24 },
  { firstname: 'Jim', age: 24 },
];

const comparisonArray = [
  { firstname: 'John', age: 24 },
  { firstname: 'Jane', age: 36 },
];

type Arg = Partial<{ firstname: number }>;
const hasSameFirstname = (obj: Arg, comparisonObj: Arg) => obj.firstname === comparisonObj.firstname;

pullAllWith(array, comparisonArray, hasSameFirstname); // => [{ firstname: 'Jim', age: 24 }]
```

## Notes

The last argument has to be a function.

The resulting array can still contain non unique values.

```typescript
const array = ['apple', 'apple', 'cherry'];
const comparisonArray = ['apricots', 'durian'];
const hasSameCharactersCount = (refValue: string, otherValue: string) => refValue.length === otherValue.length;

pullAllWith(array, comparisonArray, hasSameCharactersCount); // => ['apple', 'apple']
```
