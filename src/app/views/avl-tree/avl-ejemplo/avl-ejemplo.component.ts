import { Component, OnInit } from '@angular/core';
import { AVLTree } from '@shared/models/entities/avl-tree.model';

interface TreeSorts<T> {
  pre: T[];
  in: T[];
  post: T[];
}

@Component({
  selector: 'app-avl-ejemplo',
  templateUrl: './avl-ejemplo.component.html',
  styleUrls: ['./avl-ejemplo.component.scss'],
})
export class AvlEjemploComponent implements OnInit {
  values = [10, 2, 16, 23, 15, 29];
  tree = new AVLTree<number>();
  sorts!: TreeSorts<number>;

  constructor() {}

  ngOnInit(): void {
    for (let val of this.values) {
      this.tree.add(val);
    }

    this.sorts = {
      pre: this.tree.sortPreOrder(),
      in: this.tree.sortInOrder(),
      post: this.tree.sortPostOrder(),
    };
  }
}
