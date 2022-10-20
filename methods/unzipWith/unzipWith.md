# unzipWith

Reduce together the items of the input arrays that share the same index position.

The operation is done through a provided function.

It is very similar to the `zipWith` function but accepts an array of arrays instead of a list of arrays as an input.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `arrays: unknown[][]`
- `func: (...values: T[]) => U`

## Example

```typescript
const array1 = [1, 10, 100];
const array2 = [2, 20, 200];
const array3 = [3, 30, 300];

const multiply = (...args) => {
  args.reduce((acc, current) => {
    return acc * current;
  }, 0);
};

unzipWith(array1, array2, array3, multiply); // => [6, 6000, 6 000 000]
```
