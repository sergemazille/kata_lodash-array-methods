import { sortObjectSafe } from './sorting';
import { Obj } from './types';

export function isObject(argument: unknown): argument is Obj {
  return typeof argument === 'object' && argument !== null && !Array.isArray(argument);
}
export function objectsEquality(a: Obj, b: Obj) {
  const objA = sortObjectSafe(a);
  const objB = sortObjectSafe(b);

  const entriesA = Object.entries(objA);
  const entriesB = Object.entries(objB);

  return arraysEquality(entriesA, entriesB);
}

export function arraysEquality(a: unknown[], b: unknown[]): boolean {
  return a.every((_, index) => {
    const itemA = a[index];
    const itemB = b[index];

    if (isObject(itemA) && isObject(itemB)) {
      return objectsEquality(itemA, itemB);
    }

    if (Array.isArray(itemA) && Array.isArray(itemB)) {
      return arraysEquality(itemA, itemB);
    }

    return itemA === itemB;
  });
}

export function isEqual(a: unknown, b: unknown) {
  if (isObject(a) && isObject(b)) {
    return objectsEquality(a, b);
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return arraysEquality(a, b);
  }

  return a === b;
}
