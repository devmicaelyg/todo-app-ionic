import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesPageRoutingModule } from './slides/slides-routing.module';
import { IonicModule } from '@ionic/angular';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [SlidesComponent],
  imports: [
    CommonModule, 
    SlidesPageRoutingModule, 
    IonicModule
  ]
})
export class SlidesModule { }
