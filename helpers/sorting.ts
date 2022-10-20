import { isObject } from './equality';
import { Collection, Obj } from './types';

// the suffix 'safe' indicates that the function does not mutate its inputs
export function sortObjectSafe(obj: Obj) {
  const copy = JSON.parse(JSON.stringify(obj));

  return Object.keys(copy)
    .sort()
    .reduce((acc: Obj, key) => {
      let value = copy[key];

      if (isObject(value)) {
        value = sortObjectSafe(value);
      }

      if (Array.isArray(value)) {
        value = sortArraySafe(value);
      }

      return {
        ...acc,
        [key]: value,
      };
    }, {});
}

export function sortArraySafe(array: unknown[]) {
  const preSorted = array.map((item) => {
    let localResult = item;

    if (isObject(item)) {
      localResult = sortObjectSafe(item);
    }

    if (Array.isArray(item)) {
      localResult = sortArraySafe(item);
    }

    return localResult;
  });

  const stringArray = preSorted.map((item) => JSON.stringify(item));
  const sortedStringArray = bubbleSort(stringArray) as string[];

  return sortedStringArray.map((item) => JSON.parse(item));
}

export function sortCollectionSafe(collection: Collection) {
  if (isObject(collection)) {
    return sortObjectSafe(collection);
  }

  if (Array.isArray(collection)) {
    return sortArraySafe(collection);
  }

  // should never be reached
  return;
}

export function bubbleSort(array: unknown[]) {
  let isSorted = false;

  while (!isSorted) {
    let hasBeenSwapped = false;

    array.forEach((item, index) => {
      let mustBeSwapped = false;

      const currentItem = item;
      const nextItem = array[index + 1];

      if (typeof currentItem === 'number') {
        if (typeof nextItem === 'number') {
          mustBeSwapped = currentItem > nextItem;
        }
      }

      if (typeof currentItem === 'string') {
        if (typeof nextItem === 'number') {
          mustBeSwapped = true;
        } else {
          const current = currentItem as string;
          const next = nextItem as string;

          if (current.localeCompare(next) > 0) {
            mustBeSwapped = true;
          }
        }
      }

      if (mustBeSwapped) {
        array[index] = array[index + 1];
        array[index + 1] = item;
        hasBeenSwapped = true;
      }
    });

    if (!hasBeenSwapped) {
      isSorted = true;
    }
  }

  return array;
}
