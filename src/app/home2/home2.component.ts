import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {NgImageSliderModule} from 'ng-image-slider';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {SlickCarouselComponent, SlickCarouselModule} from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, MatCardModule, SlickCarouselModule, NgImageSliderModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {
  
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
 
  isIconChanged: boolean = false;
  constructor(private slickmodal:SlickCarouselModule){}

  toggleIcon() {
    this.isIconChanged = !this.isIconChanged;
  }
  imageObject = [{
    image: '/assets/villa.jpeg',
    thumbImage: '/assets/villa.jpeg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: '/assets/independent house.jpg',
    thumbImage: '/assets/independent house.jpg'
}, {
    image: '/assets/tours.jpg',
    thumbImage: '/assets/tours.jpg',
    title: 'Example with title.'
},{
    image: '/assets/property3.jpg',
    thumbImage: '/assets/property3.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: '/assets/property1.jpg',
    thumbImage: '/assets/property1.jpg'
}, {
    image: '/assets/house1.jpg',
    thumbImage: '/assets/house1.jpg',
    title: 'Example two with title.'
}];

 
ngAfterViewInit(): void {
 
}
 

 

 
}


