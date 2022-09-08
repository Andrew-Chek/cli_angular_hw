import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { SharedModule } from 'C:/epam_lab/angular_proj/store/src/app/shared/shared.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
