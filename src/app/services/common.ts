import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  
  public changeProfile$:Subject<any> = new Subject<any>;
  public smartData$:Subject<any> = new Subject<any>();
  // public smartData$:BehaviorSubject<any> = new BehaviorSubject<any[]>([]);

  private apiUrl = 'http://localhost:3000/resumes';

  constructor(private http: HttpClient) {}
  saveResume(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
