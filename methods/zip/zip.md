# zip

Regroups items of multiple arrays into chunks.

Items sharing the same initial index belong to the same resulting chunk.

This operation can be seen as switching the grouping of tabular values from a line to a column.

It is very similar to the `unzip` function but accepts a list of arrays as an input instead of an array of arrays.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[][]`

## Arguments

- `...arrays: unknown[]`

## Example

```typescript
const array1 = ['John', 42, 'Avatar']
const array2 = ['Jane', 24, 'Titanic']
const array3 = ['Jim', 36, 'Terminator']
zip(array1, array2, array3); // => [['John', 'Jane', 'Jim'], [42, 24, 36], ['Avatar', 'Titanic', 'Terminator']]
```

## Notes

`undefined` will be used to complete eventual missing data.

```typescript
const array1 = ['a', 1];
const array2 = ['b'];
zip(array1, array2); // => [['a', 'b'], [1, undefined]]
```

If only one array is given, then chunks of one element will be returned.

```typescript
const array = ['apple', 1, 'banana', 2];
zip(array); // => [['apple'], [1], ['banana'], [2]]
```