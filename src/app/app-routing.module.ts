import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';


// const routes: Routes = [];
const routes: Route[] = [
  // { path: '' , component: HomeComponent},
  { path: '' , redirectTo: '/home', pathMatch: 'full'}, //  pathMatch: 'prefix'
  { path: 'home', component: HomeComponent },
  // You can do { path: 'settings/profile', component: SettingsComponent },
  // BUT that doesnt determine it is a setting child. We configured it
  { 
    path: 'settings', 
    component: SettingsComponent, 
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full'},
      { path: 'profile', component: SettingsProfileComponent },
      { path: 'contact', component: SettingsContactComponent },
      { path: '**', redirectTo: 'profile', pathMatch: 'full'}
    ]
  },
  { path:'**', component: PageNotFoundComponent }
  // { path: 'view2', component: 'componentName' },
  // { path: 'view3', component: 'componentName' }
];

// This is created as a part of Angular RoutingModule creation
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
