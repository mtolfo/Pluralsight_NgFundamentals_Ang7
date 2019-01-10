import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [RouterModule.forChild(userRoutes),
  CommonModule],
  declarations: [ProfileComponent],
  providers: []
})
export class UserModule { }
