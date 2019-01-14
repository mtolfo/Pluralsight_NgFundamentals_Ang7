import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  @Input() firstName: string;
  @Input() lastName: string;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName);
    const lastName = new FormControl(this.authService.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancelProfile() {
    this.router.navigate(['event']);
  }

  saveProfile(formValues: any) {
    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );
    this.router.navigate(['event']);
  }
}
