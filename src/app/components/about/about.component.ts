import {Component} from '@angular/core';

@Component({ template: `
  <button (click)="myCustomOnClickHandler($event)">{{ buttonText }}</button>
  <p *ngIf="showMessage">{{ buttonMessage }}</p>
  `
})
export class AboutComponent {
  showMessage = false;
  buttonMessage = `My message`;
  buttonText = `Show message`;

  myCustomOnClickHandler($event: MouseEvent) {
    // toggle the message and button text
    this.showMessage = !this.showMessage;
    this.showMessage ? this.buttonText = `Hide message` : this.buttonText = `Show message`;
  }
}
