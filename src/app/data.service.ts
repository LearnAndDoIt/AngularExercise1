import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {BoundEventAst} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Foremost', 'Another']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
