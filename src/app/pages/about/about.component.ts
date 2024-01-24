import { Component, OnInit } from '@angular/core';
import { InfoWebService } from '../../services/info-web.service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoWebService: InfoWebService) { }

  ngOnInit() {
  }

}
