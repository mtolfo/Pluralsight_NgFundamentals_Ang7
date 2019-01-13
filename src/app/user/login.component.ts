import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser } from './user.model';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @Input() userName: string;
  @Input() password: string;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['event']);
  }

  cancelLogin() {
    this.router.navigate(['event']);

  }
}
