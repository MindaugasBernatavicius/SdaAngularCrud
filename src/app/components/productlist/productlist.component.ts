import {Component} from '@angular/core';

@Component({
  selector: 'app-productlist',
  template: `
    <button (click)="myCustomOnClickHandler($event)">{{ buttonText }}</button>
    <p *ngIf="showMessage">{{ buttonMessage }}</p>

    <table *ngIf="products.length">
      <thead>
      <tr>
        <th>Title</th>
        <th>Count</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor='let product of products'>
        <td>{{ product.title }}</td>
        <td>{{ product.count }}</td>
        <td>{{ product.price | currency: 'USD':'symbol':'4.2-2' }}</td>
      </tr>
      </tbody>
    </table>
    <input type="text" [(ngModel)]="text">
    <div>{{text}}&#160;</div>              <!-- one-way binding w/ interpolation -->
    <input type="text" [(ngModel)]="text"> <!-- two-way binding-->
    <br>
    <br>
    <label>Filter:</label>
    <input type="text" (input)="onFilter($event.target.value)">
    <table *ngIf="products.length">
      <thead>
      <tr>
        <th>Title</th>
        <th>Count</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor='let product of filteredProducts'>
        <td>{{ product.title }}</td>
        <td>{{ product.count }}</td>
        <td>{{ product.price | currency: 'USD':'symbol':'4.2-2' }}</td>
      </tr>
      </tbody>
    </table>
  `,
  styles: [
    'td, th { border: 1px solid black; }',
    'tbody { font-family: Verdana, Geneva, sans-serif; }'
  ],
})
export class ProductlistComponent {
  products: any[] = [
    {title: `Shoe A`, count: 150, price: 2.25}, // notice the error
    {title: `Shoe B`, count: 200, price: 2.78}
  ];

  showMessage = false;
  buttonMessage = `My message`;
  buttonText = `Show message`;

  // two-way binding
  text = `Placeholder text`;
  filteredProducts = this.products;

  myCustomOnClickHandler($event: MouseEvent) {
    // toggle the message and button text
    this.showMessage = !this.showMessage;
    this.showMessage ? this.buttonText = `Hide message` : this.buttonText = `Show message`;

    // tslint:disable-next-line:forin
    for (const i in this.products) {
      console.log(`${i} --> ${this.products[i].title}`);
    }
  }

  // code for filtering
  performFilter(filter: string): any[] {
    return this.products.filter((p: any) =>
      p.title.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  onFilter(val: string): void {
    this.filteredProducts = val ?
      this.performFilter(val) :
      this.products;
  }
}

// productlist.component.ts
