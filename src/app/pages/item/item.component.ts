import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service.service';
import { ProductoDescrip } from '../../interfaces/producto-descrip.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescrip | undefined;
  id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      const productId: string = parametros['id'];

      this.productoService.getProducto(productId).subscribe(
        (producto: any) => { // Fix: Change the type of 'producto' parameter to 'any'
          this.id = productId;
          this.producto = producto;
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    });
  }
}
