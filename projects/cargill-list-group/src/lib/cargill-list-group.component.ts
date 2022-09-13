import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-list-group',
  template: `
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="list-group" id="list-tab" role="tablist">
              <a class="list-group-item list-group-item-action"
                  *ngFor="let item of items; index as i; first as isFirst" [ngClass]="{active:isFirst}"
                  id="list-{{item.name}}-list" data-toggle="list" href="#list-{{item.name}}" role="tab"
                  [attr.aria-controls]="item.name">{{item.name}}</a>
          </div>
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9 list-group-body">
          <div class="tab-content card-body" id="nav-tabContent">
              <div *ngFor="let item of items; index as i; first as isFirst" [ngClass]="{active:isFirst}"
                  class="tab-pane fade show" id="list-{{item.name}}" role="tabpanel"
                  attr.aria-labelledby="list-{{item.name}}-list">
                  {{item.description}} </div>
          </div>
      </div>
    </div>
  `,
  styles: [`
    .list-group-item.active { background-color: #003641; border: none !important; text-shadow:2px 2px 5px black }
    .list-group a:hover { background-color: #BFDCE0; color: black; outline: #BFDCE0; text-shadow: none }
    .list-group-body { border: 1px solid rgba(0,0,0,.1); border-radius: 0.25rem }
  `]
})
export class CargillListGroupComponent implements OnInit {

  @Input() items: any;

  constructor() { }

  ngOnInit(): void { }

}
