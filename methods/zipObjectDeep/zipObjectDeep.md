# zipObjectDeep

Returns an **object** composed from the two provided arrays.

The first array provides the properties while the second one provides the values.

Similar to `zipObject` with the exception that it can accept property paths (see examples).

This method involves multiple steps to be resolved. You can use `mergeObjects` and `pathToObject` tests to guide you toward the solution.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `Object`

## Arguments

- `properties: string[]`
- `values: unknown[]`

## Example

```typescript
const properties = ['user.fruits[0].best', 'user.fruits[1].worst', 'user.movie'];
const values = ['apple', 'banana', 'Avatar'];

zipObjectDeep(properties, values); // => { 'user': { 'fruits': [{ 'best': 'apple' }, { 'worst': 'banana' }], movie: 'Avatar' }}
```

## Notes

If no value is given for a property, `undefined` is used.

```typescript
const properties = ['user.fruit', 'user.age', 'user.movie'];
const values = ['apple', 42];

zipObjectDeep(properties, values); // => { user: { fruit: 'apple', age: 42, movie: undefined }}
```

On the opposite, if there is one extra value it will just be ignored.

```typescript
const properties = ['user.fruit', 'user.age'];
const values = ['apple', 42, 'Avatar'];

zipObjectDeep(properties, values); // => { user: { fruit: 'apple', age: 42 }}
```

if a key is defined multiple times, the last one wins.

```typescript
const properties = ['user.fruit', 'user.fruit'];
const values = ['apple', 'banana'];

zipObjectDeep(properties, values); // => { user: { fruit: 'banana' }}
```
