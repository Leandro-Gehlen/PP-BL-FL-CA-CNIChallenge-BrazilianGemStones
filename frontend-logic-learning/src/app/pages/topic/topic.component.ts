import { Component } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  subjectsList: Array<any> = [
    { id: 1, subjectTitle: "How to exchange data between components" }
  ]

}
