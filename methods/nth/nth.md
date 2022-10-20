# nth

Returns the value of the item that matches the provided index.

If the index is negative then the search starts from the end of the array.

## Properties

Mutation: `false`

Difficulty: `Easy`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `index: number`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'apple'];
nth(array, 2); // => 'peach'

const array = ['banana', 'apple', 'peach', 'apple'];
nth(array, -3); // => 'apple'
```
