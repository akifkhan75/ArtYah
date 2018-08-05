import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

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

  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getproducts(1,10,{}).subscribe(data => {
      this.products = data
    })
    /**
     * get images from service json file
     */
    this.productService.getProductImages(1).subscribe(images => {
      this.galleryImages = images
    })

    this.productService.getProductImages(1).subscribe(images => {
      this.itemsGalleryImages = images
    })

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

}
