import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
  ) {
    const generatedId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
    );
    return { id: generatedId };
  }

  @Get('read')
  async getAllProducts() {
    const products = await this.productsService.getProduct();
    return products;
  }

  @Get('read/:id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch('update/:id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
  ) {
    await this.productsService.updateProduct(prodId, prodTitle, prodDesc);
    return null;
  }

  @Delete('delete/:id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
    return null;
  }
}
