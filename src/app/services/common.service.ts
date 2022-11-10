import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private snackBar: MatSnackBar) {
    }

    public showMessage(message: string, messageType: string): void {
        this.snackBar.open(message, messageType, {
            duration: 3000,
        });
    }
}
