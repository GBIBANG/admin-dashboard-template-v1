import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-dashboard-template-v1';
  status = false;

  addToggle(){
    this.status = !this.status;       
  }
}
