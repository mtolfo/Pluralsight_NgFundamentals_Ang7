import { Routes } from '@angular/router';
import { EventListComponent } from './event/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { CreateEventComponent } from './event/create-events.component';

export const appRoutes: Routes = [
  { path: 'event/new', component: CreateEventComponent},
  { path: 'event', component: EventListComponent},
  { path: 'event/:id', component: EventDetailsComponent},
  { path: '', pathMatch: 'full', redirectTo: '/event' }
];
