import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  factura = {
    id: null,
    ruc: null,
    nombre_comercial: '',
    razon_social: '',
    direccion: '',
    telefono: '',
    nombre_contacto: '',
    tipo_establecimiento: ''
  };

  constructor(private facturaService: FacturaService) {}

  generateFactura(): void {
    this.facturaService.createFactura(this.factura).subscribe(response => {
      console.log('Factura generated successfully', response);
    }, error => {
      console.error('Error generating factura', error);
    });
  }
  ngOnInit(): void {
  }

}
