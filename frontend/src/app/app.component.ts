import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Use templateUrl instead of template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-app';
  // public today: Date = new Date();
  // public currentYear: number = this.today.getFullYear();
  // public currentMonth: number = this.today.getMonth();
  // public currentDay: number = this.today.getDate();
  // public dateValue: Date = new Date(new Date().setDate(14)); // Use Date instead of Object
  // public minDate: Date = new Date(this.currentYear, this.currentMonth, 7); // Use Date instead of Object
  // public maxDate: Date = new Date(this.currentYear, this.currentMonth, 27); // Use Date instead of Object
  // public multiSelect: boolean = true; // Use boolean instead of Boolean

  constructor() {
  }
}
