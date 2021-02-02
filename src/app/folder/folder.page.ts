import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { HomeComponent } from '../home/home/home.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public titleHeader: string = "Tasks To Do"

  constructor(
    private activatedRoute: ActivatedRoute, 
    private alertController: AlertController, 
    public modalController: ModalController,
    private router: Router) { }

  items: Array<string> = [];
  data;
  route: string = 'home'

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmit() {
    //O método PUSH é para ADICIONAR elementos no ARRAY
    if (this.data === undefined) {
      this.presentAlert();
    } else {
      this.items.push(this.data)
      this.data = '';

    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atention',
      message: `Can't send a task with empty field`,
      buttons: ['OK']
    });

    await alert.present();
  }

  trashItem(item) {
    //O método SPLICE é para REMOVER elementos no ARRAY
    //O primeiro parâmetro é o indice do item a ser removido e a quantidade de itens para remover
    this.items.splice(this.items.indexOf(item), 1)
  }

  colorTheme(event){
    event.detail.checked == true ? document.body.setAttribute('color-theme', 'dark') : document.body.setAttribute('color-theme', 'light');

  }

  backHome(){
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
