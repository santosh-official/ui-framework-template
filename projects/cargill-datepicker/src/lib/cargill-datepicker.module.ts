import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CargillDatepickerComponent } from './cargill-datepicker.component';

@NgModule({
  declarations: [
    CargillDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    CargillDatepickerComponent
  ]
})
export class CargillDatepickerModule { }
