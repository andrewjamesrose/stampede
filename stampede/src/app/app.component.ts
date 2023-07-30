import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darwinKey = '984b6dd9-b9c8-4542-b220-0731620b5f7d';
  url =
    'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2021-11-01';

  constructor(private http: HttpClientModule) {}

  buttonClicked() {
    console.log('button was clicked');
  }
}
