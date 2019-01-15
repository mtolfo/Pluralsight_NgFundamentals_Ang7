import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { AuthService } from '../user/auth.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-events',
  templateUrl: 'create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateEventComponent {
  newEvent: any;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }
  cancel() {
    this.router.navigate(['/event']);
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/event']);
  }
}
