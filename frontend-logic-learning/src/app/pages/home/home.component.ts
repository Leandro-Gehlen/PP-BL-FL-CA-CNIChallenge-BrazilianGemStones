import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  courseURL: string = "https://www.youtube.com/watch?v=CGLdH5ORX-Y&t=4979s"

  subjectsList: Array<any> = [
    { id: 1, subjectTitle: "How to exchange data between components" }
  ]

}
