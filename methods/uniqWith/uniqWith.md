# uniqWith

Similar to the `uniq` function but the values are evaluated by a comparison function (predicate) instead of comparing values directly.

While comparing each values together, if the function returns true, then the conditions are met and the value is considered unique and returned in the resulting array.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `predicate: <T>(refValue: T, otherValue: T) => boolean`

## Examples

```typescript
function comparator(a: string, b: string) {
  const hasSameCharactersCount = a.length === b.length;
  const startsWithSameLetter = a.charAt(0) === b.charAt(0);

  return hasSameCharactersCount && startsWithSameLetter;
}

const array = ['John', 'Jane', 'Jim', 'Jerry', 'Jill', 'Lynda'];
uniqWith(array, comparator); // => ['John', 'Jim', 'Jerry', 'Lynda']
```
