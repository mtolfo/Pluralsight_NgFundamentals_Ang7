import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [`.container { padding-left:20px; padding-right: 20px;}
  .event-image {height: 100px; }`]
})
export class EventDetailsComponent implements OnInit {

  event: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']
    );
  }

}
