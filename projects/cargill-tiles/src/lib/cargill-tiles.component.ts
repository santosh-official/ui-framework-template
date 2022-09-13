import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-tiles',
  template: `
    <div class="card">
      <div class="card-header" [style.backgroundColor]='bgColor'>
          {{header}}
      </div>
      <div class="card-body">
          {{message}}
      </div>
    </div>
  `,
  styles: [`
    .card { border: none !important }
    .card:hover { box-shadow: 0 5px 10px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.06) }
    .card-header { color: white; text-shadow:2px 2px 5px black; border-top-right-radius: 6px; border-top-left-radius: 6px }
    .card-body { border-bottom-right-radius: 6px; border-bottom-left-radius: 6px; border: 1px solid rgba(0,0,0,.125) }
  `]
})
export class CargillTilesComponent implements OnInit {

  @Input() header: any;
  @Input() message: any;
  @Input() bgColor: any = '#003641'

  constructor() { }

  ngOnInit(): void { }

}
