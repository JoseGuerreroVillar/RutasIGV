import { Injectable } from '@angular/core';
import { IRutas} from '../modelos/rutas.interface';
import { Observable, Observer, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  data: IRutas[] = [];

  constructor() { }

  listar(): Observable<IRutas[]> {
    return Observable.create(
      (observador: Observer<IRutas[]>) => {
        setTimeout(() => {
          observador.next(this.data);
        }, 500);
      }
    );
  }
  
  insertar(rutas: IRutas): Observable<boolean> {
    this.data.push(rutas);
    return Observable.create(
      (observador: Observer<boolean>) => {
        setTimeout(() => {
          observador.next(true);
          console.log(this.data);
        }, 500);
      }
    );
  }

  eliminar(indice: number): Observable<any> {
    this.data.splice(indice, 1);
    return Observable.create(
      (observador: Observer<any>) => {
        setTimeout(() => {
          observador.next(0);
        }, 500);
      }
    );
  }

  actualizar(rutas: IRutas, indice: number): Observable<any> {
    this.data[indice] = rutas;
    return Observable.create(
      (observador: Observer<any>) => {
        setTimeout(() => {
          observador.next(true);
        }, 500);
      }
    );
  }

  detallar(indice: number): Observable<IRutas> {
    return Observable.create(
      (observador: Observer<IRutas>) => {
        setTimeout(() => {
          const item = Object.assign({}, this.data[indice]);
          observador.next(item);
        }, 500);
      }
    );
  }

}
