import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargillRadioButtonComponent } from './cargill-radio-button.component';

@NgModule({
  declarations: [
    CargillRadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CargillRadioButtonComponent
  ]
})
export class CargillRadioButtonModule { }
