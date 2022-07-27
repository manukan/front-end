import { Component, Input, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() titulo = '';
  @Input() nombre = '';
  @Input() ano = '';
  @Input() descripcion = '';
  constructor() { }

  ngOnInit(): void {
  }
 }
