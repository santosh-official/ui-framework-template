import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-collapse',
  template: `
    <a class="btn mb-1" [style.backgroundColor]='bgColor' data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
    aria-controls="collapseExample">
    {{header}}
    </a>
    <br>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            {{message}}
        </div>
    </div>
  `,
  styles: [`
    .btn { padding: 0.275rem 0.5rem }
    .btn:hover { background-color: #268A95 !important; outline: #268A95 !important }
    .btn:focus { box-shadow: none!important }
  `]
})
export class CargillCollapseComponent implements OnInit {

  @Input() header: any;
  @Input() message: any;
  @Input() bgColor: any = '#003641'

  constructor() { }

  ngOnInit(): void { }

}
