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
    descripcion: '',
    comentarios:
      'Dolor neque eum aliquid at autem quaerat vitae, amet sed Atque pariatur esse fuga corrupti quasi? Sapiente aspernatur commodi non nihil iusto odit. Amet expedita minus dolorem quasi saepe! Provident.',
  },
  {
    nombre: 'B+',
    descripcion: '',
    comentarios:
      'Dolor neque eum aliquid at autem quaerat vitae, amet sed Atque pariatur esse fuga corrupti quasi? Sapiente aspernatur commodi non nihil iusto odit. Amet expedita minus dolorem quasi saepe! Provident.',
  },
  {
    nombre: 'Rojo Negro',
    descripcion: '',
    comentarios:
      'Dolor neque eum aliquid at autem quaerat vitae, amet sed Atque pariatur esse fuga corrupti quasi? Sapiente aspernatur commodi non nihil iusto odit. Amet expedita minus dolorem quasi saepe! Provident.',
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
