import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  
  public changeProfile$:Subject<any> = new Subject<any>;
}
