import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Datos } from '../interfaces/datos.interface';

@Injectable()
export class DatosService {

  datosURL: string = "https://heroesapp-cb895.firebaseio.com/";

  constructor(private http: Http) { }

  cargarDatos( persona: Datos, uid : string ){
    let body = JSON.stringify(persona);
    let headers = new Headers( {
      'Content-Type' :'application/json'
    });
    return this.http.post( this.datosURL + uid + "/datos" +".json"
          , body, { headers } )
          .map( res => {
      console.log("Res", res);
      
      console.log("Res.json", res.json());
      return res.json();
    })
  }

  getDatos( uid : string) {
    return this.http.get(this.datosURL + uid + "/datos" +'.json')
          .map( res => res.json() );
  }

}
