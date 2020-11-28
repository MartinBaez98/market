import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {
    this.products.push({
      name: 'Xbox Series X',
      photo: 'https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/3169339.jpg',
      description: 'Consola de Microsoft Xbox Series X 1TB Negro',
      price: 13500
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}