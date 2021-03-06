import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BtEjemploComponent } from './bt-ejemplo/bt-ejemplo.component';
import { BtRecursosComponent } from './bt-recursos/bt-recursos.component';

@Component({
  selector: 'app-b-tree',
  templateUrl: './b-tree.component.html',
  styleUrls: ['./b-tree.component.scss'],
})
export class BTreeComponent implements OnInit {
  constructor(private bs: MatBottomSheet) {}

  ngOnInit(): void {}

  mostrarRecursos(): void {
    this.bs.open(BtRecursosComponent);
  }

  mostrarEjemplo(): void {
    this.bs.open(BtEjemploComponent);
  }
}
