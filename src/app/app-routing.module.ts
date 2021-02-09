import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesModule)
  }, 
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then( m => m.LoginModule)
  }, 
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  }, 
  {
    path: 'folder',
    loadChildren: () => import('src/app/folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
