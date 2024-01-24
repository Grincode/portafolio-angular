import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service.service';
import { InfoWebService } from './services/info-web.service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public infoWeb: InfoWebService,
    public productosService: ProductosService) {


  }


}
