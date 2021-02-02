import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home/home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule, 
    IonicModule,
  ]
})
export class HomeModule { }
