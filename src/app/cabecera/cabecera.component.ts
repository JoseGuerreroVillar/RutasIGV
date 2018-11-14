import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from '../servicios/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private autentificacionService: AutentificacionService, private ruteador: Router) { }

  ngOnInit() {
  }

  logout() {
    this.autentificacionService.logout();
    this.ruteador.navigate(['']);
  }

}
