import { Routes } from '@angular/router';

import { ListComponent } from '@product/pages/list/list.component';
import { AboutComponent } from './domains/shared/pages/about/about.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component'
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { ProductDetailComponent } from '@product/pages/product-detail/product-detail.component';



export const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product/:productId',
        component: ProductDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
