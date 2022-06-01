import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LinkComponent } from './pages/link/link.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailComponent } from './pages/detail/detail.component';
import { Morein4Component } from './pages/morein4/morein4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    LinkComponent,
    ErrorComponent,
    DetailsComponent,
    DetailComponent,
    Morein4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
