import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargillTextareaComponent } from './cargill-textarea.component';

@NgModule({
  declarations: [
    CargillTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CargillTextareaComponent
  ]
})
export class CargillTextareaModule { }
