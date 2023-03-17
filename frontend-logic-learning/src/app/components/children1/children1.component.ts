import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.css']
})
export class Children1Component implements OnInit {

  dataChild: string = 'You have made it to pass data from child to parent by using @ViewChild decorator.Congrats!'

  outputChildMessege: string = 'Child sending data by using output decorator and event emitter.You have received data from child through the event. Congratulations!'

  @Input() dataFromParent: string = '';

  @Output() messageEvent = new EventEmitter<string>()


  ngOnInit() {
  }

  onClick() {
    this.messageEvent.emit(this.outputChildMessege)
  }
}
