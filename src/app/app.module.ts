import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import {CustomerListComponent} from './customer-list/customer-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //CustomerListComponent,
    //RegistrationComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
