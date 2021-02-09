import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../home/home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

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
