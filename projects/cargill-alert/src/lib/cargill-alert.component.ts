import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-alert',
  template: `
    <div class="alert alert-dismissible fade show" [style.backgroundColor]='bgColor' role="alert">
      <p>{{message}}</p>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `,
  styles: [`
    .alert { padding-bottom: 0 }
  `]
})
export class CargillAlertComponent implements OnInit {

  @Input() message: any;
  @Input() bgColor: any = '#BFE0CE'

  constructor() { }

  ngOnInit(): void { }

}
