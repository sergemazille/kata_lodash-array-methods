# sortedUniqBy

This function is similar to `uniqBy` with the exception that it is optimized for sorted arrays.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `unknown[]`

## Arguments

- `sortedArray: unknown[]`
- `project: (value: T) => U`

## Examples

```typescript
const getFirstCharacter = (item: string) => item.charAt(0);

const sortedArray = ['apple', 'apricot', 'banana', 'blackberry', 'cherry', 'cherry'];
sortedUniqBy(sortedArray, getFirstCharacter); // => ['apple', 'banana', 'cherry']
```
