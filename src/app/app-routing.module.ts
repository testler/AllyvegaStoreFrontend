import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductShowPageComponent } from './adminPages/product-show-page/product-show-page.component';
import { ProductsComponent } from './adminPages/products/products.component';
import { GuardGuard } from './core/guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductComponent } from './pages/product/product.component';
import { AdminLoginComponent } from './adminPages/admin-login/admin-login.component';

const routes: Routes = [{
  path: "",
  component: LandingPageComponent
},
{
  path: "about",
  component: AboutComponent
},

{
  path: "checkout",
  component: CheckoutComponent
},
{
  path: "contactMe",
  component: ContactMeComponent
},
{
  path: "products/:category/:id",
  component: ProductComponent
},
{
  path: "products/:category/",
  component: CategoryComponent,
},
{
  path: "products",
  component: CategoriesComponent,
},
{
  path: "Cart",
  component: CartComponent
},
{
  path: "admin",
  component: AdminLoginComponent,
  children:[{
    path: "products",
    component: ProductsComponent,
    canLoad: [GuardGuard]
  },
  {
    path: "products/:productid",
    component: ProductShowPageComponent,
    canLoad: [GuardGuard]
  }]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
