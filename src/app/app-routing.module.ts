import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world';

// const routes: Routes = [];
const routes: Route[] = [
  { path: 'home', component: 'HelloWorldComponent' }
  // { path: 'view2', component: 'componentName' },
  // { path: 'view3', component: 'componentName' }
];

// This is created as a part of Angular RoutingModule creation
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
