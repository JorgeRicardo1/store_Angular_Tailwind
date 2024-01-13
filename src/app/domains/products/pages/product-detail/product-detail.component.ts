import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() productId?: string;
  product= signal<Product | null>(null);
  private productService = inject(ProductService);

  ngOnInit() {
    if(this.productId){
      this.productService.getOne(this.productId)
      .subscribe({
        next: (product) => {
          this.product.set(product)
        }
      });
    }

  }
}
