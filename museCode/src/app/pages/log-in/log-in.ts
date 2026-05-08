import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../service/user/user';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {

  private userService = inject(User);

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


  onSubmit(){

    const logInData: LogIn = this.logInForm.value

    this.userService.logIn(logInData).subscribe((res) =>{
      console.log(res);
    });

  }


}
