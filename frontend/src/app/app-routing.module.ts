import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { ViewdriverComponent } from './viewdriver/viewdriver.component';
import { UpdatedriverComponent } from './updatedriver/updatedriver.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { UpdatevehicleComponent } from './updatevehicle/updatevehicle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'adddriver', component: AdddriverComponent },
  { path: 'viewdriver', component: ViewdriverComponent },
  { path: 'updatedriver/:id', component: UpdatedriverComponent },
  { path: 'addvehicle', component: AddvehicleComponent },
  { path: 'viewvehicle', component: ViewvehicleComponent },
  { path: 'updatevehicle/:id', component: UpdatevehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
