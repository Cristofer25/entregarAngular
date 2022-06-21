import { Component, OnInit } from '@angular/core';
import { NewServicioService } from "../new-servicio.service";
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
infoRecibida:any={}
  constructor(private servicio:NewServicioService) { 
    servicio.obtenerChiste().subscribe((data)=>{
      this.infoRecibida=data
    })
  }
  cambiar(){
    this.servicio.obtenerChiste().subscribe((data)=>{
      this.infoRecibida=data
    })
  }

  ngOnInit(): void {
  }

}
