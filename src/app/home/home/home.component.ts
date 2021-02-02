import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FolderPage } from 'src/app/folder/folder.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public modalController: ModalController) {
   }

  ngOnInit() {}

  addCategory(){
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FolderPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  colorTheme(event){
    event.detail.checked == true ? document.body.setAttribute('color-theme', 'dark') : document.body.setAttribute('color-theme', 'light');

  }

}
