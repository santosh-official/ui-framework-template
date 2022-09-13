import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CargillModalComponent } from './cargill-modal.component';

@NgModule({
  declarations: [
    CargillModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CargillModalComponent
  ]
})
export class CargillModalModule { }
