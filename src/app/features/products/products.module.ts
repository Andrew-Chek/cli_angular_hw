import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'C:/epam_lab/angular_proj/store/src/app/shared/shared.module';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
