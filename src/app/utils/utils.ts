import { MatSnackBar } from '@angular/material/snack-bar';

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
