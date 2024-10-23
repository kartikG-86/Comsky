import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private sideBarSubject = new BehaviorSubject<boolean>(true);
  sideBar$ = this.sideBarSubject.asObservable()
  constructor() { }

  setSideBarToggle(isToggle: boolean): void {
    this.sideBarSubject.next(isToggle)
  }
}
