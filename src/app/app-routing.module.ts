import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProductComponent } from './pages/product/product.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
