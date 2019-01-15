import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
EventListComponent,
EventThumbnailComponent,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventListResolver,
CreateSessionComponent
} from './event/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { EventService } from './event.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    AuthService,
    EventListResolver,
  {
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

  export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
