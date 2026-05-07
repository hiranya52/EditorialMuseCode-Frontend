import { User } from './../../service/user/user';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Register } from '../../../model/Register.model';

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

  constructor(private formBuilder: FormBuilder) {

    this.signupForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: ['']
    });

  }

  onSubmit(){

    const registerData: Register = this.signupForm.value;

    this.userService.registerUser(registerData).subscribe((res) => {
      console.log(res);
    });


  }


}
