import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>{{myObject.Gender}}</p>
    <ul>
        <li *ngFor="let arr of myArr">{{arr}}   
        </li>
    </ul>
    <ul>
       <li *ngIf = "myArr1 == 'Hello1'; then sameVar else otherVar"></li> 
       <ng-template #sameVar>True</ng-template>
       <ng-template #otherVar>False</ng-template>
    </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //JSON Value (Array)
  myObject = {
    Gender : 'male',
    age : 45,
    location : 'India'
  }
  //Array

  myArr = ['Vikrant','Nilesh','Lal'];
  myArr1 = 'Hello';
}
