import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {AboutComponentComponent} from './about-component/about-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  }, {
    path: 'about-component/:id/:goal',
    component: AboutComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
