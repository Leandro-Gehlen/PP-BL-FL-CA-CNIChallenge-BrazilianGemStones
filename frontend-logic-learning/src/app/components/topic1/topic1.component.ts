import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { Children1Component } from '../children1/children1.component';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component implements AfterViewInit {

  messageFromParent: string = "You have made it to pass data from a Parent component to a children component."
  messageFromChild: string = ''

  @ViewChild(Children1Component) children1Component: any



  ngAfterViewInit(): void {
    setTimeout(() => {
      this.messageFromChild = this.children1Component.dataChild
    }, 0)

  }

}
