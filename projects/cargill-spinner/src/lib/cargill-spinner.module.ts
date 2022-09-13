import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CargillSpinnerComponent } from './cargill-spinner.component';

@NgModule({
  declarations: [
    CargillSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [
    CargillSpinnerComponent
  ]
})
export class CargillSpinnerModule { }
