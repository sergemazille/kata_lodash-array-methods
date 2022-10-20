# zipObject

Returns an **object** composed from the two provided arrays.

The first array provides the properties while the second one provides the values.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `Object`

## Arguments

- `properties: string[]`
- `values: unknown[]`

## Example

```typescript
const properties = ['fruit', 'age', 'movie'];
const values = ['apple', 42, 'Avatar'];

zipObject(properties, values); // => { fruit: 'apple', age: 42, movie: 'Avatar' }
```

## Notes

If no value is given for a property, `undefined` is used.

```typescript
const properties = ['fruit', 'age', 'movie'];
const values = ['apple', 42];

zipObject(properties, values); // => { fruit: 'apple', age: 42, movie: undefined }
```

On the opposite, if there is one extra value it will just be ignored.

```typescript
const properties = ['fruit', 'age'];
const values = ['apple', 42, 'Avatar'];

zipObject(properties, values); // => { fruit: 'apple', age: 42 }
```

if a key is defined multiple times, the last one wins.

```typescript
const properties = ['fruit', 'fruit'];
const values = ['apple', 'banana'];

zipObject(properties, values); // => { fruit: 'banana' }
```
