import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// const routes: Routes = [];
const routes: Route[] = [
  // { path: '' , component: HomeComponent},
  { path: '' , redirectTo: '/home', pathMatch: 'full'}, //  pathMatch: 'prefix'
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
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
