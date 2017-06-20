import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<h1>
{{title}}
</h1>

<todo-input></todo-input>
<ul>
  <li *ngFor="let item of todoList">
 
    <todo-item [todoItem]="item"></todo-item>
  </li>
</ul>
`,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private title: string = 'Hallo!';
  x = 'Juhu'; 
  private todoList = [
  {title: 'Hab Spaß'},
  {title: 'Leb dein Leben'},
  {title: 'Strahle über das ganze Gesicht'},
  {title: 'Nimm jeden Tag als könnte es dein letzter sein'},
  {title: 'Ein Leben ohne dich wäre wie ein Himmel ohne Sterne'},
  {title: 'Ohne dich ist alles doof!'},
];
}
