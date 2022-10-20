# compact

Removes the falsy values of an array.

## Properties

Mutation: `false`

Difficulty: `Easy`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`

## Example

```typescript
const array = ['banana', 0, 1, undefined, 'apple', null, [], false, {}, NaN];

compact(array); // => ['banana', 1, 'apple', [], {}]
```

## Notes

Falsy values are: `undefined`, `null`, `""` (empty strings), `0`, `NaN` and `false`.

An empty array or an empty object are not considered as falsy.
