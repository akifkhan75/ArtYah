import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Http } from '@angular/http';
// import { Observable } from "rxjs";
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient, private http: Http) { }

  public getProduct<Product>(id:string){
    return this._http.get('url/'+id)
  }

  public getproducts<Product>(id:number, limit:number, options:object){
    return this._http.get('url/?id='+id+'&limit='+limit)
  }

  public getProductImages(id: number): any{
    return this.http.get('../../assets/images.json').pipe(map(res => res.json())
  }
  
}

export interface images{
  images: images[]
}
