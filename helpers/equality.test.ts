import { expect, test } from 'vitest';
import { arraysEquality, isEqual, isObject, objectsEquality } from './equality';

test('isObject', () => {
  {
    const obj = {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    };

    const result = isObject(obj);

    expect(result).toBeTruthy();
  }

  {
    const notObj = 'John';

    const result = isObject(notObj);

    expect(result).toBeFalsy();
  }

  {
    const notObj = ['apple', 'banana'];

    const result = isObject(notObj);

    expect(result).toBeFalsy();
  }
});

test('objectsEquality behaves as expected', () => {
  {
    const objectA = {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    };

    const objectB = {
      firstName: 'John',
      lastName: 'Doe',
      age: 42,
    };

    const result = objectsEquality(objectA, objectB);

    expect(result).toBeTruthy();
  }

  {
    const objectA = {
      subObj: { age: 42 },
    };

    const objectB = {
      subObj: { age: 42 },
    };

    const result = objectsEquality(objectA, objectB);

    expect(result).toBeTruthy();
  }

  {
    const objectA = {
      subObj: { age: 30 },
    };

    const objectB = {
      subObj: { age: 40 },
    };

    const result = objectsEquality(objectA, objectB);

    expect(result).toBeFalsy();
  }
});

test('arraysEquality behaves as expected', () => {
  {
    const arrayA = ['John', 'Doe', 42];
    const arrayB = ['John', 'Doe', 42];

    const result = arraysEquality(arrayA, arrayB);

    expect(result).toBeTruthy();
  }

  {
    const arrayA = ['John', 'Doe', { age: 42 }];
    const arrayB = ['John', 'Doe', { age: 42 }];

    const result = arraysEquality(arrayA, arrayB);

    expect(result).toBeTruthy();
  }

  {
    const arrayA = ['John', 'Doe'];
    const arrayB = ['Doe', 'John'];

    const result = arraysEquality(arrayA, arrayB);

    // array order does matter
    expect(result).toBeFalsy();
  }

  {
    const arrayA = ['John', 'Doe', [{ data: { age: 42, movie: 'Avatar' } }]];
    const arrayB = ['John', 'Doe', [{ data: { movie: 'Avatar', age: 42 } }]];

    const result = arraysEquality(arrayA, arrayB);

    // object property values order does not matter
    expect(result).toBeTruthy();
  }
});

test('isEqual behaves as expected', () => {
  const itemA = { data: ['John', 'Doe', { age: 42, movie: 'Avatar' }] };
  const itemB = { data: ['John', 'Doe', { movie: 'Avatar', age: 42 }] };

  const result = isEqual(itemA, itemB);

  expect(result).toBeTruthy();
});
