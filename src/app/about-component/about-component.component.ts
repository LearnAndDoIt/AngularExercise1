import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.scss']
})
export class AboutComponentComponent implements OnInit {

  goals: any;
  constructor(private route: ActivatedRoute, private router: Router, private  _data: DataService) {
    this.route.params.subscribe(res => alert(res.id + '+' + res.goal));
  }

  sendMeToHomePage() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

}
