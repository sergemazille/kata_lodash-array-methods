# unionBy

Similar to the `union` function but compares the uniqueness of the values through the projected values returned by a function, instead of comparing values directly.

Also very similar to `uniqBy` with the difference that it accepts multiple arrays as first arguments.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `...arrays: unknown[]`
- `project: (value: T) => U`

## Examples

```typescript
const getFirstCharacter = (item: string) => item.charAt(0);

const array1 = ['banana', 'apple', 'blackberry', 'cherry'];
const array2 = ['apricot', 'cherry'];
unionBy(array1, array2, getFirstCharacter); // => ['banana', 'apple', 'cherry']

const array1 = [{ age: 42 }, 'apple'];
const array2 = [{ age: 42 }, 'peach'];
unionBy(array1, array2, getFirstCharacter); // => [{ age: 42 }, 'apple', 'peach']
```
