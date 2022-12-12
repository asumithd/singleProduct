import { ButtonBannerComponent } from './../button-banner/button-banner.component';
import { ProductDetailBoxComponent } from './../product-detail-box/product-detail-box.component';
import { ChipBarComponent } from './../chip-bar/chip-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { ListSearchComponent } from '../list-search/list-search.component';
import { ListProductComponent } from '../list-product/list-product.component';
import { ProductBoxComponent } from '../product-box/product-box.component';
import { ProductImgComponent } from '../product-img/product-img.component';



@NgModule({
  declarations: [HeaderComponent, ListSearchComponent, ChipBarComponent, ListProductComponent, ProductBoxComponent, ProductImgComponent, ProductDetailBoxComponent, ButtonBannerComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent, ListSearchComponent, ChipBarComponent, ListProductComponent, ProductBoxComponent, ProductImgComponent, ProductDetailBoxComponent, ButtonBannerComponent
  ]
})
export class SharedModule { }
