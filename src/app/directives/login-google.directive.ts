import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Directive({
  selector: '[appLoginGoogle]'
})
export class LoginGoogleDirective {
  @HostListener('click', ['$event']) loginGoogle(e: MouseEvent) {
    e.preventDefault();
    this.authService.loginWithGoogle
  }

  constructor(private authService: AuthService) { }

}
