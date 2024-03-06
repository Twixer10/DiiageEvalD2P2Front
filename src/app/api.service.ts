import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from 'src/model/event';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createEvent(event: Event) {
    var body = {
      Title: event.Title,
      Description: event.Description,
      Date: event.Date,
      Location: event.Location,
    };

    return this.http.post(`${environment.apiUrl}/events`, body);
  }

  getEvents(limit: number, page: number): Observable<Event[]> {
    return this.http
      .get(`${environment.apiUrl}/events?limit=${limit}&page=${page}`)
      .pipe(
        map((data: any) => {
          return data.map((event: Event) => {
            return event;
          });
        })
      );
  }

  deleteEvent(id: number) {
    return this.http.delete(`${environment.apiUrl}/events/${id}`);
  }

  updateEvent(event: Event) {
    var body = {
      Title: event.Title,
      Description: event.Description,
      Date: event.Date,
      Location: event.Location,
    };

    return this.http.put(`${environment.apiUrl}/events/${event.Id}`, body);
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get(`${environment.apiUrl}/events/${id}`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
