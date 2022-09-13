import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-heading',
  template: `
    <span class="blockquote">{{message}}</span>
  `,
  styles: []
})
export class CargillHeadingComponent implements OnInit {

  @Input() message!: any;

  constructor() { }

  ngOnInit(): void { }

}
