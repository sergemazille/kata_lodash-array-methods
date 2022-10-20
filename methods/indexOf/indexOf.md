# indexOf

Returns the index of the first item of an array that matches a provided value.

By default the function starts from the first item but an optional argument can override this behavior.

To help you solve this one, you can use the provided helpers (found in the `helpers` directory)

## Properties

Mutation: `false`

Difficulty: `Hardcore`

Return type: `number`

## Arguments

- `array: T[]`
- `value: T`
- `startIndex: number = 0`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'cherry'];
const value = 'apple';
indexOf(array, value); // => 1

const array = ['banana', 'apple', 'peach', 'cherry'];
const value = 'tomato';
indexOf(array, value); // => -1

const array = [{ fruit: 'banana' }, { fruit: 'apple' }, { fruit: 'peach' }];
const value = { fruit: 'peach' };
indexOf(array, value); // => 2

const array = ['banana', 'apple', 'peach', 'cherry'];
const value = 'apple';
indexOf(array, value, 2); // => -1 (there is no 'apple' item at or after the index 2)
```

## Notes

If an empty array is provided or no matching value is found, the number `-1` is returned.
