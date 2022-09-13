import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-progressbar',
  template: `
    <div class="progress">
      <div id="progress-bar" class="progress-bar" [style.color]="textColor" [style.backgroundColor]='bgColor'
          role="progressbar" [style.width.%]="percentage" aria-valuemin="0" aria-valuemax="100">{{percentage}}%</div>
    </div>
  `,
  styles: []
})
export class CargillProgressbarComponent implements OnInit {

  @Input() bgColor: any = '#003641';
  @Input() textColor: any = 'white';
  @Input() current: any;
  @Input() total: any;
  percentage!: any;

  constructor() { }

  ngOnInit(): void {
    this.percentage = Math.round((this.current / this.total) * 100);
  }
}
