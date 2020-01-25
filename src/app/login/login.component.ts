import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailed = false;      
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  subscription :Subscription;
  user:any;
  constructor(private formBuilder: FormBuilder ,  private router: Router) { 
}

  ngOnInit() {
    
  }
  onLogin(){
    console.log("in login");  
    if((this.loginForm.value.email == 'Mr.Ak') && (this.loginForm.value.password == 'cool')){
      console.log(this.loginForm.value.email);
      this.router.navigate(['/customer-list']);
    }
          
  }

  onRegistration(){

    this.router.navigate(['/Registration']);
  }

  
}

class loginData{
 username:string;
 passwords:string;    
}

