import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.css']
})
export class Children1Component implements OnInit {

  @Input() dataFromParent: string = '';

  ngOnInit() {
  }
}
