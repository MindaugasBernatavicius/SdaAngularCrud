import {Component} from '@angular/core';

@Component({
  template: `
    <input type="text" [(ngModel)]="text">
    <div>{{text}}&#160;</div>              <!-- one-way binding w/ interpolation -->
    <input type="text" [(ngModel)]="text"> <!-- two-way binding-->
  `
})
export class HomeComponent {
  // two-way binding
  text = `Placeholder text`;
}
