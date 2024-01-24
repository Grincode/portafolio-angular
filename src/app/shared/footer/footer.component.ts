import { Component, OnInit } from '@angular/core';
import { InfoWebService } from '../../services/info-web.service.service';

@Component({

    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
  })

export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  constructor( public _service: InfoWebService )  { 


  };

  ngOnInit() {
  };

}
