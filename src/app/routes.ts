import { Routes } from '@angular/router';

import {
  EventListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './event/index';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  {
    path: 'event/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'event',
    component: EventListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'event/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/event' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
