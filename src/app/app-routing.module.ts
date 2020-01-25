// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';


// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login'},
//   { path: 'login', component: LoginComponent }
// ];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login',component: LoginComponent },
    { path: '**', redirectTo: 'login'}
];
// export class AppRoutingModule {

// }
export const appRoutingModule = RouterModule.forRoot(routes);

//export const appRoutingModule = [LoginComponent];