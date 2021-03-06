import { Component, OnInit } from '@angular/core';
import { BTree } from '@shared/models/entities/b-tree.model';

@Component({
  selector: 'app-bt-ejemplo',
  templateUrl: './bt-ejemplo.component.html',
  styleUrls: ['./bt-ejemplo.component.scss'],
})
export class BtEjemploComponent implements OnInit {
  values = [10, 2, 16, 23, 15, 29];
  tree = new BTree(3);

  constructor() {}

  ngOnInit(): void {
    for (let val of this.values) {
      this.tree.insert(val);
    }
  }
}
