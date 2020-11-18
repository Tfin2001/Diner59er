import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateringComponent } from './catering/catering.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'location', component: LocationComponent },
  { path: 'catering', component: CateringComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
