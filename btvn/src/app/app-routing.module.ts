import { Morein4Component } from './pages/morein4/morein4.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailsComponent } from './pages/details/details.component';
import { ErrorComponent } from './pages/error/error.component';
import { LinkComponent } from './pages/link/link.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: LinkComponent },
  {path:'details', component: DetailsComponent },
  {path:'detail/:id', component: DetailComponent },
  {path:'morein4/:id', component: Morein4Component },
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
