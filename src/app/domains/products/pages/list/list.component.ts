import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] =[
      {
        id: Date.now(),
        title: 'product1',
        price: 100,
        image: 'https://picsum.photos/230/230?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'product2',
        price: 100,
        image: 'https://picsum.photos/230/230?r=15',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'product3',
        price: 100,
        image: 'https://picsum.photos/230/230?r=18',
        creationAt: new Date().toISOString()
      }
    ];

    this.products.set(initProducts);
  }

  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event)
  }
}
