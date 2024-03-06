import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Evnt } from 'src/model/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
})
export class ListEventComponent {
  allEvent: Evnt[] = [];
  isLoading = false;
  isSortByDate = false;
  pagination: any = {
    limit: 10,
    page: 1,
    totalPages: 0,
    totalData: 0,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.isLoading = true;
    this.apiService
      .getEvents(this.pagination.limit, this.pagination.page)
      .subscribe((data: any) => {
        this.allEvent = data.events;
        this.pagination.totalData = data.totalEvent;
        this.pagination.totalPages = Math.ceil(
          this.pagination.totalData / this.pagination.limit
        );
        this.isLoading = false;
      });
  }

  sortByDate() {
    this.isSortByDate = !this.isSortByDate;
    if (this.isSortByDate) {
      this.allEvent.sort((a, b) => {
        return a.Date > b.Date ? 1 : -1;
      });
    } else {
      this.allEvent.sort((a, b) => {
        return a.Date < b.Date ? 1 : -1;
      });
    }
  }
}
