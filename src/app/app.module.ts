import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule, Routes} from '@angular/router';

import { NgxGalleryModule } from 'ngx-gallery';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compoenets/header/header.component';
import { FooterComponent } from './compoenets/footer/footer.component';
import { ProductComponent } from './compoenets/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CartComponent } from './components/cart/cart.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

const appRouts: Routes = [
	{path: '', component: ProductComponent},
	{path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    NgxGalleryModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
