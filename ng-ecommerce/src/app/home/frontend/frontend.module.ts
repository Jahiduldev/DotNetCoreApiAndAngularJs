import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { SingleProductComponent } from './single-product/single-product.component';
import { FullCartComponent } from './full-cart/full-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    SingleProductComponent,
    FullCartComponent,
    CheckoutComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,FrontendRoutingModule
  ]
})
export class FrontendModule { }
