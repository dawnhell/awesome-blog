import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule
    ]
})

export class MaterialModule {}
