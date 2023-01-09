import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product } from './components/product/product.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SearchProductsPipe } from './pipes/search-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { FocusDirective } from './directives/focus.directive';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    Product,
    GlobalErrorComponent,
    SearchProductsPipe,
    ModalComponent,
    CreateProductsComponent,
    FocusDirective,
    AboutPageComponent,
    ProductPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
