import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Evnt } from 'src/model/event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  currentEvent!: Evnt;
  eventForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    Description: ['', Validators.required],
    Date: ['', Validators.required],
    Location: ['', Validators.required],
  });

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params['id'];
      this.getEventById(id);
    });
  }

  getEventById(id: number) {
    this.apiService.getEvent(id).subscribe((event: Evnt) => {
      this.currentEvent = event;
      this.eventForm.patchValue({
        Title: event.Title,
        Description: event.Description,
        Date: event.Date,
        Location: event.Location,
      });
    });
  }

  editEvent() {
    if (this.eventForm.valid) {
      this.apiService
        .updateEvent({ ...this.currentEvent, ...this.eventForm.value })
        .subscribe((data) => {
          alert('Event updated successfully');
          window.location.href = '/';
        });
    }
  }
}
