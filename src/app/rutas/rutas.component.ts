import { Component, OnInit } from '@angular/core';
import { IRutas } from '../modelos/rutas.interface';
import { RutasService } from '../servicios/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  listaRutas: IRutas[];

  constructor(private rutasService: RutasService, private ruteador: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.rutasService.listar()
      .subscribe(
      (datos: IRutas[]) => {
        console.table(datos);
        this.listaRutas = datos;
      }
    );
  }

  nuevo() {
    this.ruteador.navigate(['rutas/nuevo'], {
      queryParams: { tit: "Nueva Ruta" },
      fragment: 'admin'
    });
  }
}
