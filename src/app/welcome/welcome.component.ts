import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Shit'
  name = ''

  //INJECT ActivatedRoute
  constructor(private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }
}
