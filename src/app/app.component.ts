import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
 experiencia = [
    {nombre:"Lazos, Institución Psicoanalítica de La Plata",ano:"2015 hasta 03/2022",descripcion:"Tareas de administrativo en una institución psicoanalítica. Entre mis responsabilidades se encontraba el manejo de caja."},
    {nombre:"Hospital General de agudos R. Gutierrez",ano:"2021 hasta la fecha", descripcion:"Tareas de administrativo en sector facturación"},
    {nombre:"Dateas",ano:"2018/2019/2020", descripcion:"Ingreso y análisis de datos"},


  ]
estudios = [
 { nombre: "UNLP", ano:2016, titulo: "Profesor en comunicación Social"},
 {nombre: "gremio programadores", ano:2019, titulo:"data analitics jr"},
 { nombre: "EEM n° 13", ano:2003, titulo: "Bachiller"}
]
skilss = [
  {nombre: "Angular", capacidad: "75"},
  {nombre: "Bootstrap", capacidad: "80"},
  {nombre: "Comunicación", capacidad: "80"}
]
}
