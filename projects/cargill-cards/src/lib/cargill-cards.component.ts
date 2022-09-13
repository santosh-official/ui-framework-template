import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-cards',
  template: `
    <div class="card">
      <img src={{imagePath}} alt="Card Image">
      <div class="card-body mt-1" *ngIf="message !==''">
          <p class="card-text">{{message}}</p>
      </div>
    </div>
  `,
  styles: [`
    .card { border: none !important }
    img { border-radius: 6px }
    .card-body { border-radius: 6px; border: 1px solid rgba(0,0,0,.125) }
  `]
})
export class CargillCardsComponent implements OnInit {

  @Input() message: any = '';
  @Input() imagePath: any;

  constructor() { }

  ngOnInit(): void { }

}
