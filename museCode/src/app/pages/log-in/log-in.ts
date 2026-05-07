import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {

  logInForm!: FormGroup;

  email!:string;
  password!:string;

  constructor(private formBuider: FormBuilder, private router: Router) {

    this.logInForm = this.formBuider.group({
      email: [''],
      password: ['']
    });

  }

  goToFeed(){
    this.router.navigate(['/onboarding/personalize-feed']);
  }

  goToSignUp(){
    this.router.navigate(['/signUp']);
  }


  onSubmit(){}


}
