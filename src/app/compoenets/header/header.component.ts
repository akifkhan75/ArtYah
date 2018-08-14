import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService, private productService: ProductService) { }

  cartItemsCount = this.productService.cartItemsCount

  ngOnInit() {
    // this.cartItems = JSON.parse(localStorage.getItem('product'))
    // this.cartItems = JSON.parse(this.cookieService.get('cartProducts'))
    this.cartItemsCount = this.productService.cartItemsCount;
    // console.log(this.cartItems)
  }

}
