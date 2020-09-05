import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    await this.authService.createUser(this.form.email, this.form.password);
    this.router.navigate(['/customers']);
  }
}
