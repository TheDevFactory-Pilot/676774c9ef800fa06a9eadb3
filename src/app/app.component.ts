import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//your app will run at /absproxy/8080/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
