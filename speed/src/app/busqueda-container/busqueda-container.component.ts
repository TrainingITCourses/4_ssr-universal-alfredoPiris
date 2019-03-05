import { Component, OnInit} from '@angular/core';
import launchesJson from '../../assets/data/launches.json';


@Component({
  selector: 'app-busqueda-container',
  templateUrl: './busqueda-container.component.html',
  styleUrls: ['./busqueda-container.component.css']
})
export class BusquedaContainerComponent implements OnInit {
  public resultado;
  public agencias;
  public misiones;
  public estados;
  constructor() { }

  ngOnInit() {
  }

  metodoBusqueda (busqueda: any) {
    /*this.resultado = [];*/

    /*for (let i = 0; i < launchesJson.launches.length; i++) {
      if ((launchesJson.launches[i].location.pads[0].name.toLowerCase().search(busqueda) !== -1) && (this.resultado.includes(launchesJson.launches[i].location.pads[0].name) === false)) {
        this.resultado.push(launchesJson.launches[i].location.pads[0].name);
      }
      if (launchesJson.launches[i].rocket.name.toLowerCase().search(busqueda) !== -1 && (this.resultado.includes(launchesJson.launches[i].rocket.name) === false)) {
        this.resultado.push(launchesJson.launches[i].rocket.name);
      }
      if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
        if (launchesJson.launches[i].missions[0].agencies != null && launchesJson.launches[i].missions[0].agencies.length > 0) {
          if (launchesJson.launches[i].missions[0].agencies[0].name.toLowerCase().search(busqueda) !== -1 && (this.resultado.includes(launchesJson.launches[i].missions[0].agencies[0].name) === false)) {
            this.resultado.push(launchesJson.launches[i].missions[0].agencies[0].name);
          }
        }
      }
    }*/
    this.metodoBusquedaAgencias (busqueda);
    this.metodoBusquedaMisiones (busqueda, true);
    this.metodoBusquedaEstados (busqueda, true);
    this.metodoUnionArray();

  }

  metodoBusquedaAgencias (busqueda: any) {
    this.agencias = [];
    this.misiones = [];
    this.estados = [];
    for (let i = 0; i < launchesJson.launches.length; i++) {
      if ((launchesJson.launches[i].location.pads[0].name.toLowerCase().search(busqueda) !== -1) && (this.agencias.includes(launchesJson.launches[i].location.pads[0].name) === false)) {
        this.agencias.push('pad: ' + launchesJson.launches[i].location.pads[0].name);
      }
      if (launchesJson.launches[i].rocket.name.toLowerCase().search(busqueda) !== -1 && (this.agencias.includes(launchesJson.launches[i].rocket.name) === false)) {
        this.agencias.push('roket: ' + launchesJson.launches[i].rocket.name);
      }
      if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
        if (launchesJson.launches[i].missions[0].agencies != null && launchesJson.launches[i].missions[0].agencies.length > 0) {
          if (launchesJson.launches[i].missions[0].agencies[0].name.toLowerCase().search(busqueda) !== -1 && (this.agencias.includes(launchesJson.launches[i].missions[0].agencies[0].name) === false)) {
            this.agencias.push('agency: ' + launchesJson.launches[i].missions[0].agencies[0].name);
          }
        }
      }
    }
    this.metodoUnionArray();
  }

  metodoBusquedaMisiones (busqueda: any, keyUp: any = false) {
    if (!keyUp) {
      this.agencias = [];
      this.misiones = [];
      this.estados = [];
    }
    for (let i = 0; i < launchesJson.launches.length; i++) {
      if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
        if (launchesJson.launches[i].missions[0].type === parseInt(busqueda, 10)) {
            this.misiones.push('missionStatus: ' + launchesJson.launches[i].missions[0].name);
        }
      }
    }
    this.metodoUnionArray();
  }

  metodoBusquedaEstados (busqueda: any, keyUp: any = false) {
    if (!keyUp) {
      this.agencias = [];
      this.misiones = [];
      this.estados = [];
    }
    for (let i = 0; i < launchesJson.launches.length; i++) {
      if (launchesJson.launches[i].status === parseInt(busqueda, 10)) {
        this.estados.push('launchStatus: ' + launchesJson.launches[i].name);
      }
    }
    this.metodoUnionArray();
  }

  metodoUnionArray () {
    this.resultado = [];
    this.resultado = this.resultado.concat(this.agencias);
    this.resultado = this.resultado.concat(this.misiones);
    this.resultado = this.resultado.concat(this.estados);
  }
}
