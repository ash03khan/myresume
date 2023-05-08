import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprofile';
  name = "Ashar khan";
  student = {
    "rno":1,"name": "tausif"
  };
}
