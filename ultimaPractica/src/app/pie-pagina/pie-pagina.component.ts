import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent  {

  infoRecibida:string=''
  recibir(nombre:string){
    this.infoRecibida=nombre
  }

}
