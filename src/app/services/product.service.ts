import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  public getProduct<Product>(id:string){
    return this._http.get('url/'+id)
  }

  public getproducts<Product>(id:number, limit:number, options:object){
    return this._http.get('url/?id='+id+'&limit='+limit)
  }
  
}
