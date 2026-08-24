import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  
  public changeProfile$:Subject<any> = new Subject<any>;
  public smartData$:Subject<any> = new Subject<any>();
  // public smartData$:BehaviorSubject<any> = new BehaviorSubject<any[]>([]);
}
