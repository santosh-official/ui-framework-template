import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cargill-carousel',
  template: `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" [ngClass]="{active:isFirst}"
              *ngFor="let caroisel of caroiselgallery; index as i;first as isFirst" data-slide-to="i"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item" [ngClass]="{active:isFirst}"
              *ngFor="let caroisel of caroiselgallery; index as i;first as isFirst">
              <img class="d-block w-100 img-thumbnail" src="{{caroisel.image}}" alt="{{caroisel.alt}}">
          </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
    </div>
  `,
  styles: [`
    .carousel-indicators li {
        border-radius:50%;
        width:10px;
        height:10px;
        background-color:#aaa;
    }`]
})
export class CargillCarouselComponent implements OnInit {

  @Input() caroiselgallery: any;

  constructor() { }

  ngOnInit(): void { }

}
