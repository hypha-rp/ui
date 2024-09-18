import { MatSnackBar } from '@angular/material/snack-bar';
import * as _ from 'lodash';

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

export function mapKeysDeep(obj: any, fn: (key: string) => string): any {
  if (_.isArray(obj)) {
    return obj.map(innerObj => mapKeysDeep(innerObj, fn));
  } else if (_.isObject(obj)) {
    return _.mapValues(_.mapKeys(obj, (value, key) => fn(key)), value =>
      mapKeysDeep(value, fn)
    );
  } else {
    return obj;
  }
}