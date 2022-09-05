import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'aboutme',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
