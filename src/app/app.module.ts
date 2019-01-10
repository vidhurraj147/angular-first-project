import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    HomeComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  // imports takes the dependent modules
  imports: [
    BrowserModule,
    // This is Angular Routhing 
    // ng new routing-proj --routing  // To enable routing to new project 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ViewModule
  ],
  // Services has to be listed in the providers 
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
