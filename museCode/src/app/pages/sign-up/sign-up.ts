import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  signupForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });

  }


  onSubmit(){



  }




}
