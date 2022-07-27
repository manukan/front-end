import { Component, OnInit, Input } from '@angular/core';
import { ExperienciaComponent } from '../experiencia.component';

@Component({
  selector: 'app-experiencia-card',
  templateUrl: './experiencia-card.component.html',
  styleUrls: ['./experiencia-card.component.css']
})
export class ExperienciaCardComponent implements OnInit {
  @Input() titulo = '';
  @Input() nombre = '';
  @Input() ano = '';
  @Input() descripcion = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
