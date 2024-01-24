import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoWeb } from '../interfaces/info-web.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoWebService {

  info: InfoWeb = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get<InfoWeb>('assets/data/data-pagina.json')
      .subscribe((resp: InfoWeb) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get<any[]>('https://angular-html-7fdb3-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.equipo = resp;
      });
  }

  // Optional: You can expose methods to get the data if needed
  getInfo(): InfoWeb {
    return this.info;
  }

  getEquipo(): any[] {
    return this.equipo;
  }
}
