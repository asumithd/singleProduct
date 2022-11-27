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
  declarations: [HeaderComponent, ListSearchComponent, ChipBarComponent,ListProductComponent,ProductBoxComponent,ProductImgComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent, ListSearchComponent, ChipBarComponent,ListProductComponent,ProductBoxComponent,ProductImgComponent
  ]
})
export class SharedModule { }
