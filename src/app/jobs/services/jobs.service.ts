import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobsData(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`jobs`);
  }
  getJobsDetails(id: number): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`jobs/${id}`);
  }
}
