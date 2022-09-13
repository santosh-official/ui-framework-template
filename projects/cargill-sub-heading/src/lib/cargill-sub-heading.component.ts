import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-sub-heading',
  template: `
    <span class="blockquote">{{message}}</span>
  `,
  styles: [`
    .blockquote { font-size: 1.10rem }
  `]
})
export class CargillSubHeadingComponent implements OnInit {

  @Input() message!: any;

  constructor() { }

  ngOnInit(): void { }

}
