import { NgModule } from '@angular/core';

import { MatToolbarModule, MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatChipsModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatChipsModule
    ]
})

export class MaterialModule {}
