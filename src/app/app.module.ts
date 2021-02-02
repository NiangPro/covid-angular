import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { MaladeComponent } from './malade/malade.component';
import { BanniereComponent } from './banniere/banniere.component';
import { LogoComponent } from './logo/logo.component';
import { PolitiqueComponent } from './politique/politique.component';
import { Routes, RouterModule } from '@angular/router';
import { AddTestComponent } from './add-test/add-test.component';
import { HttpClientModule } from '@angular/common/http';

const  appRoutes:Routes = [
  {path:'', component: MaladeComponent },
  {path:'politique', component: PolitiqueComponent},
  {path:'ajout_test', component: AddTestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    MaladeComponent,
    BanniereComponent,
    LogoComponent,
    PolitiqueComponent,
    AddTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
