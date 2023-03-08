import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  topicsList: Array<any> = [
    { id: 1, title: "How to exchange data between components" },
    { id: 2, title: "second" }
  ]

  courseURL: string = "https://www.youtube.com/watch?v=CGLdH5ORX-Y&t=4979s"


}
