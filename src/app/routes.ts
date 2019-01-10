import { Routes } from '@angular/router';
import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { CreateEventComponent } from './event/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './event/event-details/event-route-activator.service';
import { EventListResolver } from './event/event-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'event/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'event', component: EventListComponent, resolve: {events: EventListResolver}},
  { path: 'event/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component},
  { path: '', pathMatch: 'full', redirectTo: '/event' }
];
