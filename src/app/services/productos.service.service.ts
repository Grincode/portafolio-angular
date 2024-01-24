import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Producto[]>('https://angular-html-7fdb3-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-7fdb3-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  async buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // cargar productos
      await this.cargarProductos();
    }
    // aplicar el filtro
    this.filtrarProductos(termino);
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
