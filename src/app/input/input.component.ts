import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <p>
      Voll super!!
    </p>
    <input [value]="title"
    (keyup.enter)="changeTitle($event.target.value)"
    #inputElement>
<button (click)="changeTitle(inputElement.value)">
Speichern
</button>
<p>The title is: {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private title: string = 'my title';
  private title2: string = 'my title';

  constructor() { 
    console.log('in constructor');
    this.changeTitle('My First ToDo List!');
    console.log(this.title);
   }
changeTitle(newTitle: string): void {
  this.submit.emit(newTitle);
  
}
  ngOnInit() {
  }}
