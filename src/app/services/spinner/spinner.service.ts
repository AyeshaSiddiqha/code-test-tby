import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public spinnerStatus = new BehaviorSubject(false);

  constructor() { }

  setSpinnerStatus(value: boolean): void{
    this.spinnerStatus.next(value);
  }
  
}
