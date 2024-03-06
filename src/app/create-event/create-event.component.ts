import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  eventForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    Description: ['', Validators.required],
    Date: ['', Validators.required],
    Location: ['', Validators.required],
  });

  createEvent() {
    if (this.eventForm.valid) {
      this.apiService.createEvent(this.eventForm.value).subscribe((data) => {
        alert('Event created successfully');

        window.location.href = '/';
      });
    }
  }
}
