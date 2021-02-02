import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeComponent } from 'src/app/home/home/home.component';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  addCategory(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: HomeComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
