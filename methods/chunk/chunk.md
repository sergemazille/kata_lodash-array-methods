# chunk

Splits an array of elements into subarrays containing the requested number of elements.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `unknown[][]`

## Arguments

- `array: unknown[]`
- `size: number`

## Example

```typescript
const array = ['banana', 'apple', 'orange', 'kiwi', 'pear'];
const chunkSize = 2;

chunk(array, chunkSize); // => [['banana', 'apple'], ['orange', 'kiwi'], ['pear']]
```

`chunk` has split the original array into as many chunks of 2 elements as possible.

The remaining element, `pear`, has been added in a last subarray.

## Notes

`size` should be a natural integer.

if `size` is smaller than 1, then an empty array will be returned.

If `size` is greater than the number of items of the array then the result will be one single chunk.

```typescript
const sourceArray = ['apple', 'pear'];
const chunkSize = 3;

chunk(sourceArray, chunkSize); // => [['apple', 'pear']]
```
