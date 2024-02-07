import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}
  async runSeed() {
    await this.insertNewProduct();
    return 'SEED EXECITED';
  }

  private async insertNewProduct() {
    await this.productsService.deleteAllProducts();
    const products = initialData.products;
    const insertPromises = [];
    products.forEach((product) => {
      insertPromises.push(this.productsService.create(product));
    });
    await Promise.all(insertPromises);
  }
}
