import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Injectable({providedIn: 'root'})
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot ) {
      const eventExists = !!this.eventService.getEvent(+route.params['id']);
      if (!eventExists) {
        this.router.navigate(['/404']);
      }
      return eventExists;
  }
}
