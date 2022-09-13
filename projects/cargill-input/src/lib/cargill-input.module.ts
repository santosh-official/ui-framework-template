import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargillInputComponent } from './cargill-input.component';

@NgModule({
  declarations: [
    CargillInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CargillInputComponent
  ]
})
export class CargillInputModule { }
