import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      "mongodb://demouser:demopassword@localhost:27017/demodb?retryWrites=true&w=majority"
      ),
      // 'mongodb+srv://demo1:demo@cluster0.hzjfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}