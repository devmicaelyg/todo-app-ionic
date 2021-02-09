import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FolderPage } from 'src/app/folder/folder.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categoryItem: string; 
  showFormCategory: boolean = false; 
  takeFormCategory: boolean = true; 
  items: Array<string> = [];

  constructor(public modalController: ModalController) {
   }

  ngOnInit() {}

  addTasks(){
    this.presentModal();
  }

  addCategory(){
    this.items.push(this.categoryItem);
    this.categoryItem = '';
  }

  openFormCategory(){
    this.showFormCategory = true; 
  }

  closeFormCategory(){
    this.showFormCategory = false;  
  }

  trashItem(item) {
    this.items.splice(this.items.indexOf(item), 1)
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
