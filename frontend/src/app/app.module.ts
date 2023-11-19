import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { ViewdriverComponent } from './viewdriver/viewdriver.component';
import { UpdatedriverComponent } from './updatedriver/updatedriver.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';
import { UpdatevehicleComponent } from './updatevehicle/updatevehicle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FaqComponent,
    AdddriverComponent,
    ViewdriverComponent,
    UpdatedriverComponent,
    AddvehicleComponent,
    ViewvehicleComponent,
    UpdatevehicleComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
