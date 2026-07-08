import { User } from './../../service/user/user';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../model/Register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  private userService = inject(User);

  signupForm!: FormGroup;

  fullName!:string;
  email!:string;
  password!:string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  goToLogIn(){
    this.router.navigate(['/auth/login']);
  }

  goToFeed(){
    this.router.navigate(['/personalize-feed']);
  }

  onSubmit(){

    const registerData: Register = this.signupForm.value;

    this.userService.register(registerData).subscribe({
    next: (res: any) => {
      console.log(res);

      if (res.message === 'User registered successfully') {
        this.goToFeed();
      }
    },

    error: (err) => {
      console.log(err);
    }
  });


  }


}
