# fill

Replaces the items of an array by a specific value, from a start index to an excluded end index.

This function **does mutate** the original array.

## Properties

Mutation: `true`
Difficulty: `Medium`
Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `value: any`
- `startIndex: number = 0`
- `excludedEndIndex: number = array.length`

## Example

```typescript
const array = ['banana', 0, 1, undefined, 'apple', null, [], false, {}, NaN];

fill(array, 'KO', 2, 6); // => ['banana', 0, 'KO', 'KO', 'KO', 'KO', [], false, {}, NaN]
```
