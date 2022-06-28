import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  nombre:string="Raul"
  @Output() NuevoCanal = new EventEmitter<string>()

 enviarInfo(){
  this.NuevoCanal.emit(this.nombre)
 }

  hobbies:Array<string>=["Futbol","Natación","Viernes de chelas","Leer"]
}
