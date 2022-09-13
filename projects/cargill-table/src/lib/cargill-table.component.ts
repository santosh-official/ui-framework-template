import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CargillTableService } from './cargill-table.service';

@Component({
  selector: 'cargill-table',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillTableComponent),
      multi: true
    }
  ],
  template: `
    <table *ngIf="data" datatable [dtOptions]="dtOptions" class="table text-nowrap table-striped"
    aria-describedby="cargill-table">
      <thead>
          <tr>
              <th class="text-capitalize" *ngFor="let head of data[0] | keys">{{head}}</th>
              <th *ngIf="editable">Action</th>
          </tr>
      </thead>
      <tbody *ngIf="!editable">
          <tr *ngFor="let item of data">
              <td *ngFor="let list of item | keys">{{item[list]}}</td>
          </tr>
      </tbody>
      <tbody *ngIf="editable">
          <tr *ngFor="let item of data; index as i;">
              <ng-container *ngIf="enableEditIndex != i">
                  <td *ngFor="let list of item | keys">{{item[list]}}</td>
                  <td *ngIf="enableEditIndex != i">
                      <span><i class="fa fa-pen" aria-hidden="true" (click)="switchEditMode(i)"></i></span>
                      <span class="ml-2"><i class="fa fa-times fa-lg" aria-hidden="true"
                              (click)="update(item)"></i></span>
                  </td>
              </ng-container>
              <ng-container *ngIf="enableEditIndex == i">
                  <td *ngFor="let list of item | keys">
                      <input class="form-control" [(ngModel)]="item[list]" />
                  </td>
                  <td>
                      <span><i class="fa fa-check" aria-hidden="true" (click)="update(item)"></i></span>
                      <span class="ml-2"><i class="fa fa-times fa-lg" aria-hidden="true"
                              (click)="update(item)"></i></span>
                  </td>
              </ng-container>
          </tr>
      </tbody>
    </table>
  `,
  styles: [`
    thead { background: linear-gradient(10deg, black 5%, #003641 100%); color: white; text-shadow: 2px 2px 5px black; border-bottom: 3px ridge white }
    ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button { padding-left: 10px; padding-right: 10px; padding-top: 2px; padding-bottom: 2px; margin-left: 5px; border-radius: 6px }
    ::ng-deep .dataTables_wrapper .dataTables_paginate .paginate_button:hover { border-radius: 0; background: #003641; border-radius: 6px }
    ::ng-deep .dt-button { background: linear-gradient(10deg, black 5%, #003641 100%); color: white; outline: #003641; text-shadow: 2px 2px 5px black; padding: 0.175rem 0.5rem; border: 1px solid transparent; border-radius: 0.25rem; font-size: 0.9rem; margin-bottom: 10px }
    ::ng-deep .dataTables_wrapper .dataTables_filter input { border-radius: 6px; padding: 0.175rem 0.5rem; margin-left: 3px }
    ::ng-deep table.dataTable thead th { border-bottom: 3px ridge white }
    .form-control { height: calc(0.75em + 0.75rem + 2px) }
    .fa-times { color: red }
    .fa-edit { color: #003641 }
    .fa-check { color: #003641 }
  `]
})
export class CargillTableComponent implements OnInit {

  @Input() data!: any;
  @Input() pagelength!: number;
  @Input() search: boolean = false;
  @Input() advanced: boolean = false;
  @Input() editable: boolean = false;
  dtOptions: any = {};
  isEditing: boolean = false;
  enableEditIndex = null;

  constructor(private cargillTableService: CargillTableService) { }

  ngOnInit(): void {
    if (this.search === true && this.advanced === true) {
      this.dtOptions = {
        paging: true, pageLength: this.pagelength, dom: 'fBtip', buttons: [
          { extend: 'excel', text: 'Export to Excel' },
          { extend: 'csv', text: 'Export to CSV' },
        ]
      };
    } else if (this.search === true && this.advanced !== true) {
      this.dtOptions = { paging: true, pageLength: this.pagelength, dom: 'ftip' };
    } else if (this.search !== true && this.advanced === true) {
      this.dtOptions = {
        paging: true, pageLength: this.pagelength, dom: 'Btip', buttons: [
          { extend: 'excel', text: 'Export to Excel' },
          { extend: 'csv', text: 'Export to CSV' },
        ]
      };
    } else {
      this.dtOptions = { paging: true, pageLength: this.pagelength, dom: 'tip' };
    }
  }

  switchEditMode(i: any) {
    this.isEditing = true;
    this.enableEditIndex = i;
  }

  update(item: any) {
    this.isEditing = false;
    this.enableEditIndex = null;
    console.log(item);
  }
}
