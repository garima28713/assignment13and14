import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormData } from '../_helpers/_models/loginForm';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
})
export class LoginComponent implements OnInit {
  returnUrl: string='/';

  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.auth.currentUserValue) {
      this.router.navigate(['/']);
  }
  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    console.log(this.loginForm.value);
    let loginValues: LoginFormData = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    };
    this.auth.login(loginValues);
    this.auth.login(loginValues).subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log(error)
            });
  }
}
