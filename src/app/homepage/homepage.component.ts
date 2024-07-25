import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ CommonModule ,RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HomepageComponent {
  isCardVisible = false;

  forgot() {
    this.isCardVisible = !this.isCardVisible;
  }

}
