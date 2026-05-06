import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../service/user/user';
import { Register } from '../../../model/UserRegister.model';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  private userService = inject(User);

  signupForm!: FormGroup;

  name!:string;
  email!:string;
  password!:string;

  constructor(private formBuilder: FormBuilder) {

    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });

  }

  onSubmit(){

    this.name = this.signupForm.value.name;
    this.email = this.signupForm.value.email;
    this.password = this.signupForm.value.password;

    const registerData: Register = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    console.log('Register Object:', registerData);


  }




}
