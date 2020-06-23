import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConnectStore';

 leadForm = new FormGroup({
   name: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    consent: new FormControl(''),
  });

}
