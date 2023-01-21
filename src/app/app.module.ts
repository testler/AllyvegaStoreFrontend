import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from '@coreui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryThumbnailComponent } from './components/category-thumbnail/category-thumbnail.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { AboutComponent } from './pages/about/about.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './adminPages/login/login.component';
import { ProductShowPageComponent } from './adminPages/product-show-page/product-show-page.component';
import { ProductsComponent } from './adminPages/products/products.component';
import { AdminLoginComponent } from './adminPages/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    CategoryThumbnailComponent,
    ProductThumbnailComponent,
    AboutComponent,
    CategoriesComponent,
    ContactMeComponent,
    LandingPageComponent,
    CheckoutComponent,
    LoginComponent,
    CartComponent,
    ProductComponent,
    CategoryComponent,
    ProductShowPageComponent,
    ProductsComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
