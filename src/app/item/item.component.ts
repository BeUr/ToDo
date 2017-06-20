import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
{{ todoItem.title }}
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemTitle: string;

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
