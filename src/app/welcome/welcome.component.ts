import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Shit'
  welcomeMessageFromService:string =''
  name = ''

  //INJECT ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) {

  }
  ngOnInit(): void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessasge() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome messages")
  }

  getWelcomeMessasgeWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServicePathVariable(this.name).subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("get welcome messages")
  }

  handleSuccesfullResponse(response: any){
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }

}
