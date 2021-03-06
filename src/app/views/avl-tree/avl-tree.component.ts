import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AvlEjemploComponent } from './avl-ejemplo/avl-ejemplo.component';
import { AvlRecursosComponent } from './avl-recursos/avl-recursos.component';

@Component({
  selector: 'app-avl-tree',
  templateUrl: './avl-tree.component.html',
  styleUrls: ['./avl-tree.component.scss'],
})
export class AvlTreeComponent implements OnInit {
  constructor(private bs: MatBottomSheet) {}

  ngOnInit(): void {}

  mostrarRecursos(): void {
    this.bs.open(AvlRecursosComponent);
  }

  mostrarEjemplo(): void {
    this.bs.open(AvlEjemploComponent);
  }
}
