import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CargillTableComponent } from './cargill-table.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    CargillTableComponent,
    KeysPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [
    CargillTableComponent
  ]
})
export class CargillTableModule { }
