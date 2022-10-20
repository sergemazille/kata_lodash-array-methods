# Kata - Lodash arrays

Improve your Javascript array understanding by implementing [lodash array methods](https://lodash.com/docs) yourself.

## Notes

### Lodash

[Lodash](https://lodash.com/) is a popular library providing a collection of helpers for arrays, objects and functions.

If you're stuck on one challenge, either the spec is not clear enough or the examples don't help you, you should visit [Lodash's documentation page](https://lodash.com/docs).

There, you will be able to use the REPL and check the expected output for your use cases.

### Edge cases

This kata aims at making you practice array manipulation, filtering, inserting, etc.

It provides tests to guide you toward the resolution of the different array methods but is not supposed to trick you with exotic edge cases.

You can start from the principle that the tests don't cover wrong input types, because it would mean adding guards and boilerplate code in your functions which is not the goal of the kata.

It also means that a test could pass for an implementation that would not miror exactly how Lodash method would behave.

Nevertheless it should be close enough for you to practice and you are free to implement the solutions you deem correct.

And of course you can add edge cases if you wish.

### Typescript

This kata uses Typescript, in the specs, the tests and the helpers.

Even if you're not familiar with Typescript, it should not stop you as it stays pretty simple and no advance features are used.

Still, if you don't want to use it for your solutions you can change the extension of the placeholder solution files to use vanilla Javascript, the tests should still work (if your solution is correct ^^)

ex `methods/chunk/chunk.ts` -> `methods/chunk/chunk.js`

## Getting started

### Clone this repo locally

git clone git@github.com:sergemazille/kata_lodash-array-methods.git

### Install the dependencies

`yarn`

or

`npm i`

### Choose a function, read the spec

Let's take the `first` function as an example.

Open the directory `methods/first`, you should see two files.

The markdown file (`first.md`) is the spec, it provides explanations and examples.

The placeholder function file (`first.ts`) is where you will write the code needed to make the tests (`first.test.ts`) pass.

You can open the tests file (`first.test.ts`) in order to understand what will be tested.

### Write your solution

Open the file `first.ts`.

To make the tests pass you need to write a function that follow the specs, it should accept the correct arguments and return the correct value.

A possible solution for this function could be:

```typescript
export function first(array: unknown[]) {
  return array[0];
}
```

or, the same in vanilla Javascript:

```Javascript
export function first(array) {
  return array[0];
}
```

### Launch the tests

To check that your solution is correct, you can launch the command: 

```bash
yarn test methods/first
```

or 

```bash
npm test methods/first
```

You can also launch the whole test suite (`yarn test` or `npm t`)

### Helpers

Sometimes you'll need intermediary functions to write a solution. You can either write your own helpers or use one taken from the `helpers` directory.

You should find some handy methods and helping types there.

### Difficulty levels

Every function is given a difficulty level so you can train yourself on the appropriate level.

It is not a very objective ranking as someone will find certain types of functions easier than others and vice-versa.

Sometimes the difficulty is a bit artificial, like for the `indexOf` function which has to be able to match objects and arrays, according to the specs.

Feel free to add your own constraints or to update the specifications to fit your needs. Remember that you migh have to update the provided tests as well.

One again the goal is to train yourself to manipulate arrays. It should become easier and easier with practice.

### Definitions

You might not need to read this section but still it can help you to better understand some parts of the kata's challenges.

#### Flatten

An array can be composed of multiple subarrays which can also be composed of multiple subarrays...

```typescript
const deepArray = [1, [2, 3], [4, [5, 6, [7]]]];
```

We can say that this array has 4 levels deep (first level then 3 levels of subarrays).

The act of fully flattening the array consists of removing the sublevels, by merging their content up to the first level.

```typescript
const deepArray = [1, [2, 3], [4, [5, 6, [7]]]];
const flattenArray = [1, 2, 3, 4, 5, 6, 7];
```

But nothing forces us to merge everything up to the first level, we can also decide to flatten the array only to a certain level.

```typescript
const deepArray = [1, [2, 3], [4, [5, 6, [7]]]];
const flattenOneLevel = [1, 2, 3, 4, [5, 6, [7]]];
const flattenTwoLevels = [1, 2, 3, 4, 5, 6, [7]];
const flattenThreeLevels = [1, 2, 3, 4, 5, 6, 7];
```

#### Equality

To determine if two objects are equal, we can either compare their values or their reference.

Doing reference comparison means we're checking if the object in memory is the same. It is the case if, for example, a change applied to one of the reference will reflect in the other reference.

#### Predicate

We call `predicate` a function used to determine if some conditions are met.

It accepts one or more arguments which are evaluated against some condition and returns a boolean depending on the fact that conditions are met or not.

It can be used to filter a set of values or to compare values against each other for example.

```typescript
function isEven(count: number) {
  return count % 2 === 0;
}
```

#### Iteratee

You might not find the term inside this kata but it is used often on Lodash's documentation.

An iteratee is a function that is designed to operate on a iterable set of values, like an array.

It should not have a direct effect on the array itself as it is fed one item at a time.

Not mandatory but a typical iteratee takes three arguments: an item, the index of the item in the array it is taken of, and the array itself.

For example, `map`, `filter` or `forEach` Array methods take an iteratee as argument.

In the following example `format` is the iteratee passed as argument to `map`:

```typescript
function format(name: string, index: number, array: string[]) {
  return `${name}'s ranking is ${index + 1}/${array.length}`;
}

const formatted = ['Jane', 'John', 'Linda'].map(format);
```

Here, `formatted` will resolve to:

```typescript
["Jane's ranking is 1/3", "John's ranking is 2/3", "Linda's ranking is 3/3"];
```


