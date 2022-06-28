import { Component, OnInit } from '@angular/core';
import { NewSerService } from '../new-ser.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  informacionReci:any=''
  constructor(private servicio:NewSerService) { 
    servicio.obtenerNum().subscribe((data)=>{
      this.informacionReci=data
    })
  }

  ngOnInit(): void {
  }

}
