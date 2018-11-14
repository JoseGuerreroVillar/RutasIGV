import { Component, OnInit } from '@angular/core';
import { IRutas } from '../modelos/rutas.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from '../servicios/rutas.service';

@Component({
  selector: 'app-nueva-ruta',
  templateUrl: './nueva-ruta.component.html',
  styleUrls: ['./nueva-ruta.component.css']
})
export class NuevaRutaComponent implements OnInit {

  ruta: IRutas = {};
  titulo: string;
  fragmento: string;

  constructor(private rutasService: RutasService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.rutaActiva.snapshot.queryParamMap.get("tit");
    this.fragmento = this.rutaActiva.snapshot.fragment;
  }

  agregar() {
    this.ruta.estado = true;
    this.rutasService.insertar(this.ruta)
      .subscribe(
        respuesta => this.ruteador.navigate(['rutas'])
      );
  }

}
