import { ChipBarComponent } from './../chip-bar/chip-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { ListSearchComponent } from '../list-search/list-search.component';



@NgModule({
  declarations: [HeaderComponent, ListSearchComponent, ChipBarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent, ListSearchComponent, ChipBarComponent
  ]
})
export class SharedModule { }
