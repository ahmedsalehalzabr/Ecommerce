import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustomerOrdersComponent } from './pages/website/customer-orders/customer-orders.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';


export const routes: Routes = [

    { 
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LandingComponent,
        children: [
          {
            path: 'AllProducts',
            component: WebProductsComponent,
            title: 'All-Products'
          },
          {
            path: 'products/:id',
            component: CategoryProductsComponent
          },
          {
            path: 'cart',
            component: CartComponent
          }
        ]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
   
        title: 'Checkout'
      },
      {
        path: 'order-history',
        component: CustomerOrdersComponent,
 
        title: 'Your Orders'
      },
      {
        path: '',
        component: LayoutComponent,
   
        children: [
          {
            path: 'products',
            component: ProductsComponent,
            title: 'Products'
          },
          {
            path: 'category',
            component: CategoriesComponent,
            title: 'Category'
          }
        ]
      }
    
    ];