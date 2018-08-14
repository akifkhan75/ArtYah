import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = []
  
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cartItems = JSON.parse(this.cookieService.get('cartProducts'))
  }

  removeCartItem(product){
    let arr = this.cartItems
    arr.forEach(function(item,index,arr){
      // console.log(product +"=="+ item.productName)
      if(product === item.productName){
        arr.splice(index,1)
        console.log('length '+arr.length)
      }
    })
    this.cookieService.set('cartProducts',JSON.stringify(arr))
    this.cartItems = JSON.parse(this.cookieService.get('cartProducts'))
  }

}
