import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  // @Input({required: true}) cart: Product[] = [];  sin usar store
  // total = signal(0);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  //sin store
  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart'];
  //   if(cart){
  //     this.total.set(this.calcTotal());
  //   }
  // }

  // calcTotal() {
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }
}
