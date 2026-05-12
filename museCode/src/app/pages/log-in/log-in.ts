import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  message: string = '';

  logInForm!: FormGroup;

  email!: string;
  password!: string;

  constructor(
    private formBuider: FormBuilder,
    private router: Router,
  ) {
    this.logInForm = this.formBuider.group({
      email: [''],
      password: [''],
    });
  }

  goToFeed() {
    this.router.navigate(['/personalize-feed']);
  }

  goToSignUp() {
    this.router.navigate(['/signUp']);
  }

  onSubmit() {
    const logInData: LogIn = this.logInForm.value;

    this.userService.logIn(logInData).subscribe({
      next: (res: any) => {
        if (res === 'User not found' || res === 'Invalid password') {
          this.message = res;
        } else {
          this.message = 'Login Success';
          // localStorage.setItem('token', res);
          localStorage.setItem("token", res.message);
          console.log(res);

          this.goToFeed();
        }
      },
    });
  }
}
