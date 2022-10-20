# join

Join all elements of an array into a string and separated by a provided separator.

## Properties

Mutation: `false`
Difficulty: `Hard`
Return type: `string`

## Arguments

- `array: unknown[]`
- `separator: string | number`

## Example

```typescript
const array = ['banana', 1, 'orange', 2, 'pear'];
const separator = ':';

join(array, separator); // => 'banana:1:orange:2:pear'
```

## Notes

If an item of the array is itself an array, it will be fully flatten and its value will resolve as comma separated values.

```typescript
const array = ['banana', ['apple', [0, 1], [2, [3]]], 4];
const separator = ':';

join(array, separator); // => 'banana:apple:0:1:2:3:4'
```

Examples of resolved items by type:

```typescript
'name' -> 'name'
1 -> '1'
NaN -> 'NaN'
['John', 'Doe'] -> 'John, Doe'
{ age: 42 } -> '[object Object]'
undefined -> 'undefined'
null -> 'null'
```

```typescript
const array = ['banana', ['apple', [0, NaN], undefined, { age: 42 }, null]];
const separator = ':';

join(array, separator);
// => 'banana:apple:0:NaN:undefined:[object Object]:null'
```
