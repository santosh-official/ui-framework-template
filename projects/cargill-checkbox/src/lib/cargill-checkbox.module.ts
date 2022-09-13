import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargillCheckboxComponent } from './cargill-checkbox.component';

@NgModule({
  declarations: [
    CargillCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CargillCheckboxComponent
  ]
})
export class CargillCheckboxModule { }
