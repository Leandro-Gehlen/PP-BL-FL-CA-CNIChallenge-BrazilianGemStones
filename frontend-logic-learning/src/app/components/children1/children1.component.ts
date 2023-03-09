import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.css']
})
export class Children1Component implements OnInit {

  dataChild: string = 'You have made it to pass data from child to parent by using @ViewChild decorator.Congrats!'

  @Input() dataFromParent: string = '';


  ngOnInit() {
  }

  onClick() {
    console.log("Passou o método")
  }
}
