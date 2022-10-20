# uniqBy

Similar to the `uniq` function but compares the uniqueness of the values through the projected values returned by a function, instead of comparing values directly.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `project: (value: T) => U`

## Examples

```typescript
const getFirstCharacter = (item: string) => item.charAt(0);

const array = ['banana', 'apple', 'blackberry', 'cherry', 'apricot', 'cherry'];
uniqBy(array, getFirstCharacter); // => ['banana', 'apple', 'cherry']
```
