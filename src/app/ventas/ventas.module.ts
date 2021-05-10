import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FlexLayoutModule } from '@angular/flex-layout';

import { CajeroComponent } from './cajero/cajero.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
    declarations:[
        CajeroComponent,
        ProductosComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        FlexLayoutModule,
        MatTableModule,
        MatPaginatorModule,
        BrowserModule
        
    ],
    exports:[
        CajeroComponent
    ],
    providers:[

    ]

})

export class ventasModule{

}