import { Component } from '@angular/core';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component {

  messageFromParent: string = "You have made it to pass data from a Parent component to a children component."

}
