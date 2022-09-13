import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cargill-button',
  template: `
    <button class="btn" [disabled]="disabled" (click)='onclick($event)'>{{name}}</button>
  `,
  styles: [`
    .btn { background-color: #003641; color: white; outline: #003641; text-shadow: 2px 2px 5px black; font-size: 0.9rem; border-radius: 5px; padding: 0.275rem 0.5rem; }
    .btn:hover { background-color: #268A95; color: white; outline: #268A95 }
    .btn:focus { box-shadow: none!important }
  `]
})
export class CargillButtonComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() name!: any;
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public onclick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
    }
  }
}
