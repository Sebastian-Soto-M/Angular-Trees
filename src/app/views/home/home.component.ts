import { Component, OnInit } from '@angular/core';
export interface ResumenArbol {
  nombre: string;
  descripcion: string;
  comentarios: string;
}

const CUADRO_COMPARATIVO: ResumenArbol[] = [
  {
    nombre: 'AVL',
    descripcion:
      'Es un arbol binario de busqueda que se trata de mantener lo mas balanceado posible. Este observa el factor de equilibrio de sus nodos y así determina la dirección de las rotaciones necesarias para balancear correctamente.',
    comentarios:
      'Se debe cumplir que la altura de sus subarboles no exceda una unidad',
  },
  {
    nombre: 'B',
    descripcion:
      'En este tipo de árbol, los nodos internos tienen un número variable de nodos hijo dentro de un rango predefinido. Cuando se agregan o borran datos, la cantidad de nodos hijo se adapta para que se mantenga dicho rango. Gracias a este proceso de adaptación, estos árbol no deben balancearse tan frecuentemente como otros árboles',
    comentarios: 'En un árbol B, los nodos son mejor conocidos como páginas',
  },
  {
    nombre: 'B+',
    descripcion: ' ',
    comentarios: ' ',
  },
  {
    nombre: 'Rojo Negro',
    descripcion: ' ',
    comentarios: ' ',
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  columnas: string[] = ['nombre', 'descripcion', 'comentarios'];
  datos = CUADRO_COMPARATIVO;

  constructor() {}

  ngOnInit(): void {}
}
