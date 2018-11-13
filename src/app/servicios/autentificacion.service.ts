import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  onCambioEstado: Subject<boolean> = new Subject<boolean>()

  constructor() { }

  login(): Observable<{}> {
    return of({status:200, results: true})
      .pipe(
        pluck("results")
      )
  }

  logout() {
    localStorage.clear();
    this.onCambioEstado.next(false);
  }
}
