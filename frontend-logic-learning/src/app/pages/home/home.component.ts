import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  constructor(private router: Router) { }

  topicsList: Array<any> = [
    { id: 0, title: "How to exchange data between components" },
    { id: 1, title: "second" }
  ]

  courseURL: string = "https://www.youtube.com/watch?v=CGLdH5ORX-Y&t=4979s"

  onClick(index: any) {
    let i = index + 1
    this.router.navigate([`/topic${i}`])
  }
}
