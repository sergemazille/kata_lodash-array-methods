# fromPairs

Returns an **object** composed from the key-value pairs of a provided array.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `Object`

## Arguments

- `array: unknown[][]`

## Example

```typescript
const array = [
  ['fruit', 'apple'],
  ['age', 42],
  ['movie', 'Avatar'],
];

fromPairs(array); // => { fruit: 'apple', age: 42, movie: 'Avatar' }
```

## Notes

If a subarray contains more than two items, the extra ones will be ignored.

```typescript
const array = [
  ['fruit', 'apple'],
  ['movie', 'Avatar', 'Titanic'],
];

fromPairs(array); // => { fruit: 'apple', movie: 'Avatar' }
```

if a key is defined multiple times, the last one wins.

```typescript
const array = [
  ['fruit', 'apple'],
  ['fruit', 'banana'],
];

fromPairs(array); // => { fruit: 'banana' }
```

If an item of a subarray is missing, it will resolve to `undefined`.

```typescript
const array = [['fruit'], [, 42]];

fromPairs(array); // => { fruit: undefined, undefined: 42 }
```
