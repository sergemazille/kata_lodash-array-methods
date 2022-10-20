# pullAllBy

Removes **all** given values from an array.

Similar to the `pullAll` function but compares the values evaluated through a function instead of comparing values directly.

If the projected value of the array to filter is equal to the projected value of the item it is compared to, then the conditions are met and the original value is removed from the array.

This function **does mutate** the original array.

## Properties

Mutation: `true`

Difficulty: `Hard`

Return type: `T[]`

## Arguments

- `array: T[]`
- `arrays: T[]`
- `project: (value: T) => U`

## Example

```typescript
const array = [
  { firstname: 'John', age: 42 },
  { firstname: 'Jane', age: 24 },
  { firstname: 'John', age: 24 },
];

const comparisonArray = [
  { firstname: 'John', age: 24 },
  { firstname: 'Jane', age: 36 },
];

const extractAge = (obj: Partial<{ age: number }>) => obj.age;

pullAllBy(array, comparisonArray, extractAge); // => [{ firstname: 'John', age: 42 }]
```

In this example, the `extractAge` function "transforms" an object into a number. This is this number that will be used to compare the values.

## Notes

The last argument has to be a function.

The resulting array can still contain non unique values.

```typescript
const array = [1.2, 1.2, 2.7];
const transform = Math.floor;

pullAllBy(array, [2.6], transform); // => [1.2, 1.2]
```
