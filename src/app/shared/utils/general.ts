import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';

/**
 * Copies the given UUID to the clipboard and displays a snackbar notification.
 *
 * @param {string} uuid - The UUID to be copied to the clipboard.
 * @param {MatSnackBar} snackBar - The Angular Material MatSnackBar service used to display notifications.
 *
 * @example
 * // Assuming you have a MatSnackBar instance called snackBar
 * copyUuidToClipboard('123e4567-e89b-12d3-a456-426614174000', snackBar);
 * // This will copy the UUID to the clipboard and show a snackbar notification.
 */
export function copyUuidToClipboard(uuid: string, snackBar: MatSnackBar) {
  navigator.clipboard
    .writeText(uuid)
    .then(() => {
      snackBar.open('UUID copied to clipboard', 'Close', {
        duration: 2000,
      });
    })
    .catch((err) => {
      console.error('Could not copy UUID: ', err);
    });
}

/**
 * Recursively transforms the keys of an object (or array of objects) using a provided transformation function.
 *
 * @param {any} obj - The input object or array to be transformed.
 * @param {(key: string) => string} fn - A function that takes a key as a string and returns a transformed key as a string.
 * @returns {any} - The transformed object or array with keys modified by the provided function.
 *
 * @example
 * const obj = { firstName: 'John', lastName: 'Doe' };
 * const result = transformKeysRecursively(obj, (key) => key.toUpperCase());
 * console.log(result);
 * // Output: { "FIRSTNAME": "John", "LASTNAME": "Doe" }
 */
export function transformKeysRecursively(obj: any, fn: (key: string) => string): any {
  if (_.isArray(obj)) {
    return obj.map((innerObj) => transformKeysRecursively(innerObj, fn));
  } else if (_.isObject(obj)) {
    return _.mapValues(
      _.mapKeys(obj, (value, key) => fn(key)),
      (value) => transformKeysRecursively(value, fn),
    );
  } else {
    return obj;
  }
}
