import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-polizas',
  templateUrl: './lista-polizas.component.html',
  styleUrls: ['./lista-polizas.component.scss']
})
export class ListaPolizasComponent {
  polizas = [
    { titulo: 'Póliza 1', descripcion: 'Descripción de la póliza 1' },
    { titulo: 'Póliza 2', descripcion: 'Descripción de la póliza 2' },
    { titulo: 'Póliza 3', descripcion: 'Descripción de la póliza 3' }
  ];
}
