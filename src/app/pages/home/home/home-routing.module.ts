import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from 'src/app/folder/folder.page';
 
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }

  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'folder',
  //       component: FolderPage,
  //       loadChildren: () => import('src/app/folder/folder.module').then( m => m.FolderPageModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
