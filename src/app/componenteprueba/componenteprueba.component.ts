import { Component, OnInit } from '@angular/core';
import {persona } from '../classes/persona';

@Component({
  selector: 'app-componenteprueba',
  templateUrl: './componenteprueba.component.html',
  styleUrls: ['./componenteprueba.component.css']
})
export class ComponentepruebaComponent {

  clasepersona = new persona('Juan','Villa Pérez',21,'Masculino');

  tittle = 'Persona';

  

}
