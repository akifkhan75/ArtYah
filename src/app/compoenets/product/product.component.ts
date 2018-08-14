import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { CookieService } from 'ngx-cookie-service';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products:object = [];
  public productDetails:object;

  // items Gallary
  itemsGalleryOptions: NgxGalleryOptions[];
  itemsGalleryImages: NgxGalleryImage[];

  // products gallary
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  productForm:FormGroup

  product:object;
  cartProducts = []

  // productName:string;
  // sellerName:string;
  // image:string;
  // price:number;
  // quantity:number;
  // size:number;
  
  constructor(private fb: FormBuilder,  private productService: ProductService, private cookieService: CookieService) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      productName:[],
      sellerName:[],
      image:[],
      price:[],
      quantity:[],
      size:[]
    })

    this.productService.getProductJson(1).subscribe(data => {
      this.products = data
      this.galleryImages = data.images
      this.itemsGalleryImages = data.images
      // console.log(this.products)
    })
    /**
     * get images from service json file
     */
    // this.productService.getProductImages(1).subscribe(images => {
    //   this.galleryImages = images
    // })

    // this.productService.getProductImages(1).subscribe(images => {
    //   this.itemsGalleryImages = images
    // })

    this.itemsGalleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      { 
        "image": false, 
        "thumbnailsRemainingCount": true, 
        "height": "100px" 
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];
  
    this.galleryOptions = [
        {
            width: '100%',
            height: '500px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

  }

  public viewProduct(id){
    this.productService.getProduct(id).subscribe(
      data => {
        this.productDetails = data
      }
    )
  }

  addToCart(formData){
    console.log('form '+formData)
    this.product = {
      productName: 'tst name',
      sellerName:  'akif khan',
      image:  'test',
      price:  '200',
      quantity:   '3',
      size: '2',
    }
    if(this.cookieService.check('cartProducts') == true){
      console.log('true')
      this.cartProducts = JSON.parse(this.cookieService.get('cartProducts'));
      this.cartProducts.push(this.product)
      this.cookieService.set('cartProducts',JSON.stringify(this.cartProducts))
    } else {
      console.log('false')
      this.cartProducts.push(this.product)
      this.cookieService.set('cartProducts',JSON.stringify(this.cartProducts))
    }
    
    // localStorage.setItem('product',JSON.stringify(this.productDetails))
  }

}
