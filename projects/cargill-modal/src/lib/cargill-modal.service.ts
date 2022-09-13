import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CargillModalComponent } from './cargill-modal.component';

@Injectable({
  providedIn: 'root'
})

export class CargillModalService {

  constructor(private ngbModal: NgbModal) { }

  showDefaultModalComponent(modalOption: any) {
    let ngbModalOptions: NgbModalOptions;
    if (modalOption.size === 'extra-large') {
      ngbModalOptions = { size: 'xl' };
    } else if (modalOption.size === 'large') {
      ngbModalOptions = { size: 'lg' };
    } else if (modalOption.size === 'medium') {
      ngbModalOptions = { size: 'md' };
    } else if (modalOption.size === 'small') {
      ngbModalOptions = { size: 'sm' };
    } else {
      ngbModalOptions = { size: 'md' };
    }
    const modalRef = this.ngbModal.open(CargillModalComponent, ngbModalOptions);
    modalRef.componentInstance.header = modalOption.header;
    modalRef.componentInstance.body = modalOption.body;
    modalRef.componentInstance.btnName = modalOption.btnName;
    return modalRef;
  }
}
