import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule, Routes} from '@angular/router';

import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compoenets/header/header.component';
import { FooterComponent } from './compoenets/footer/footer.component';
import { ProductComponent } from './compoenets/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const appRouts: Routes = [
	{path: '', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    NgxGalleryModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
