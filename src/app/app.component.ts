import { Component } from '@angular/core';
import { HttpService } from './Service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interviewingSystem';
  ngOnInit(): void{
    this.http.addCurrentUser(1);
  }
  constructor(private http: HttpService) { 
  }
}
