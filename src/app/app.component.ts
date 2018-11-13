import { Component } from '@angular/core';
import { AutentificacionService } from './servicios/autentificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiRutaIGV';

  usuarioLogueado: boolean = false;

  constructor(private autentificacion: AutentificacionService) { }

  ngOnInit() {
    if(localStorage.getItem("usuarioLogueado")){
      this.usuarioLogueado = true;
    }
    else {
      this.usuarioLogueado = false;
    }
    this.autentificacion.onCambioEstado
      .subscribe(
        (estado: boolean) => this.usuarioLogueado = estado
      )
  }

}
