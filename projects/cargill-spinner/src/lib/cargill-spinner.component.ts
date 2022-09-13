import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-spinner',
  template: `
    <ngx-spinner type="" size="large" bdColor="rgba(25,25,25,0.8)">
      <img src="{{image}}" height="60px" style="margin-top: -300px;">
      <div class="dot" style="margin-top: -120px;"></div>
    </ngx-spinner>
  `,
  styles: [`
    .dot {
      margin: 10px auto;
      color: white;
      width: 55px;
      height: 30px;
      --d: radial-gradient(farthest-side, currentColor 100%, #0000);
      background: var(--d), var(--d), var(--d), var(--d);
      background-size: 8px 8px;
      background-repeat: no-repeat;
      animation: m 1s infinite;
    }

    @keyframes m {
      0% {
        background-position: calc(0*100%/3) 100%, calc(1*100%/3) 100%, calc(2*100%/3) 100%, calc(3*100%/3) 100%
      }
      12.5% {
        background-position: calc(0*100%/3) 0, calc(1*100%/3) 100%, calc(2*100%/3) 100%, calc(3*100%/3) 100%
      }
      25% {
        background-position: calc(0*100%/3) 0, calc(1*100%/3) 0, calc(2*100%/3) 100%, calc(3*100%/3) 100%
      }
      37.5% {
        background-position: calc(0*100%/3) 0, calc(1*100%/3) 0, calc(2*100%/3) 0, calc(3*100%/3) 100%
      }
      50% {
        background-position: calc(0*100%/3) 0, calc(1*100%/3) 0, calc(2*100%/3) 0, calc(3*100%/3) 0
      }
      62.5% {
        background-position: calc(0*100%/3) 100%, calc(1*100%/3) 0, calc(2*100%/3) 0, calc(3*100%/3) 0
      }
      75% {
        background-position: calc(0*100%/3) 100%, calc(1*100%/3) 100%, calc(2*100%/3) 0, calc(3*100%/3) 0
      }
      87.5% {
        background-position: calc(0*100%/3) 100%, calc(1*100%/3) 100%, calc(2*100%/3) 100%, calc(3*100%/3) 0
      }
      100% {
        background-position: calc(0*100%/3) 100%, calc(1*100%/3) 100%, calc(2*100%/3) 100%, calc(3*100%/3) 100%
      }
    }
  `]
})
export class CargillSpinnerComponent implements OnInit {

  @Input() image: any;

  constructor() { }

  ngOnInit(): void { }

}
