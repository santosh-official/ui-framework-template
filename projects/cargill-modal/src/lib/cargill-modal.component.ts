import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CargillModalService } from './cargill-modal.service';

@Component({
  selector: 'cargill-modal',
  template: `
    <div class="modal-header">
        <span class="modal-title blockquote">{{header}}</span>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.close('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
    <p>{{body}}</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">
            {{btnName}}
        </button>
    </div>
  `,
  styles: [`
    .btn { background-color: #6c757d; color: white; outline: #6c757d; text-shadow: 2px 2px 5px black; padding: 0.275rem 0.5rem }
    .btn:hover { background-color: #3a3737; border: 1px solid transparent }
    .modal-header { padding: 0.5rem 1rem; background-color: #279989; color: white; text-shadow: 2px 2px 5px black }
    .modal-footer { padding: 0.25rem }
    .blockquote { font-size: 1rem }
  `]
})
export class CargillModalComponent implements OnInit {

  @Input() header: any;
  @Input() body: any;
  @Input() btnName: any = 'Close';
  
  constructor(private modalService: CargillModalService, public activeModal: NgbActiveModal) {}

  ngOnInit(): void { }

}
