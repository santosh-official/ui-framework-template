import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-image-cards',
  template: `
    <div class="img-container">
      <img src="{{image}}" class="img-thumbnail">
      <div class="caption post-content">
          <span class="h5">{{message}}</span>
      </div>
    </div>
  `,
  styles: [`
    .post-content { background: none repeat scroll 0 0 #FFffff; opacity: 0.5; margin: 0 auto; margin-top: -40px; text-align:center; position: relative; width:100% }
    .img-container:hover { box-shadow: 0 5px 10px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.06) }
  `]
})
export class CargillImageCardsComponent implements OnInit {

  @Input() image!: string;
  @Input() message!: string;

  constructor() { }

  ngOnInit(): void { }

}
