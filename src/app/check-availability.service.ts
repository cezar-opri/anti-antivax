import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAvailabilityService {

  private baseUrl = 'http://localhost:8080/api/v1/check-availability';
  constructor(private http: HttpClient) { }

  createCheckInfo(checkInfo: Object): Observable<Object> {
    return this.http.post('${this.baseUrl}', checkInfo);
  }
}
