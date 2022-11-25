import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/layout/header/header.component';
import { SharedModule } from './utils/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { MATERIAL_MODULES } from './utils/material.barel';

@NgModule({
  // customElements.define('app-root', AppComponent)
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HeaderComponent,
    HomeComponent,
    GetStartedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
