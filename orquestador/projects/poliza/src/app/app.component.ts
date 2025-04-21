import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poliza';
  polizas = [
    { titulo: 'Póliza 1', descripcion: 'Descripción de la póliza 1' },
    { titulo: 'Póliza 2', descripcion: 'Descripción de la póliza 2' },
    { titulo: 'Póliza 3', descripcion: 'Descripción de la póliza 3' }
  ];
}
