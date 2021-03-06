/*
 ____       _               _   _               ____        _        
/ ___|  ___| |__   __ _ ___| |_(_) __ _ _ __   / ___|  ___ | |_ ___  
\___ \ / _ \ '_ \ / _` / __| __| |/ _` | '_ \  \___ \ / _ \| __/ _ \ 
 ___) |  __/ |_) | (_| \__ \ |_| | (_| | | | |  ___) | (_) | || (_) |
|____/ \___|_.__/ \__,_|___/\__|_|\__,_|_| |_| |____/ \___/ \__\___/ 
                                                                     
 __  __           _      _             _ 
|  \/  | __ _  __| |_ __(_) __ _  __ _| |
| |\/| |/ _` |/ _` | '__| |/ _` |/ _` | |
| |  | | (_| | (_| | |  | | (_| | (_| | |
|_|  |_|\__,_|\__,_|_|  |_|\__, |\__,_|_|
                           |___/         
*/

class NodeB {
  values: number[];
  leaf: boolean;
  children: NodeB[];
  tree: BTree | null;
  parent: NodeB | null;
  constructor(leaf: boolean) {
    this.values = [];
    this.leaf = leaf;
    this.children = [];
    this.tree = null;
    this.parent = null;
  }

  get n(): number {
    return this.values.length;
  }

  addValue(value: number | null): void {
    if (value === null) {
      return;
    }
    let pos = 0;
    while (pos < this.n && this.values[pos] < value) {
      pos++;
    }
    this.values.splice(pos, 0, value);
  }

  removeValue(pos: number): number | null {
    if (pos >= this.n) {
      return null;
    }
    return this.values.splice(pos, 1)[0];
  }

  addChild(node: NodeB, pos: number): void {
    this.children.splice(pos, 0, node);
    node.parent = this;
  }

  deleteChild(pos: number): NodeB {
    return this.children.splice(pos, 1)[0];
  }
}

export class BTree {
  root: NodeB | null;

  constructor(public order: number) {
    this.root = null;
  }

  searchValue(node: NodeB, value: number): NodeB | null {
    if (node.values.includes(value)) {
      return node;
    }
    if (node.leaf) {
      return null;
    }
    let child = 0;
    while (child <= node.n && node.values[child] < value) {
      child++;
    }
    return this.searchValue(node.children[child], value);
  }

  delete(value: number): void {
    if (
      this.root !== null &&
      this.root.n === 1 &&
      !this.root.leaf &&
      this.root.children[0].n === this.order - 1 &&
      this.root.children[1].n === this.order - 1
    ) {
      this.mergeNodes(this.root.children[1], this.root.children[0]);
      this.root = this.root.children[0];
    }
    this.deleteFromNode(this.root, value);
  }

  deleteFromNode(node: NodeB | null, value: number): boolean {
    if (node !== null) {
      const index = node.values.indexOf(value);
      if (index >= 0) {
        if (node.leaf && node.n > this.order - 1) {
          node.removeValue(node.values.indexOf(value));
          return true;
        }
        if (
          node.children[index].n > this.order - 1 ||
          node.children[index + 1].n > this.order - 1
        ) {
          if (node.children[index].n > this.order - 1) {
            const predecessor = this.getMinMaxFromSubTree(
              node.children[index],
              1
            );
            node.values[index] = predecessor;
            return this.deleteFromNode(node.children[index], predecessor);
          }
          const successor = this.getMinMaxFromSubTree(
            node.children[index + 1],
            0
          );
          node.values[index] = successor;
          return this.deleteFromNode(node.children[index + 1], successor);
        }
        this.mergeNodes(node.children[index + 1], node.children[index]);
        return this.deleteFromNode(node.children[index], value);
      }
      if (node.leaf) {
        return false;
      }
      let nextNode = 0;
      while (nextNode < node.n && node.values[nextNode] < value) {
        nextNode++;
      }
      if (node.children[nextNode].n > this.order - 1) {
        return this.deleteFromNode(node.children[nextNode], value);
      }
      if (
        (nextNode > 0 && node.children[nextNode - 1].n > this.order - 1) ||
        (nextNode < node.n && node.children[nextNode + 1].n > this.order - 1)
      ) {
        if (nextNode > 0 && node.children[nextNode - 1].n > this.order - 1) {
          this.transferValue(
            node.children[nextNode - 1],
            node.children[nextNode]
          );
        } else {
          this.transferValue(
            node.children[nextNode + 1],
            node.children[nextNode]
          );
        }
        return this.deleteFromNode(node.children[nextNode], value);
      }
      this.mergeNodes(
        nextNode > 0
          ? node.children[nextNode - 1]
          : node.children[nextNode + 1],
        node.children[nextNode]
      );
      return this.deleteFromNode(node.children[nextNode], value);
    }
    return false;
  }

  transferValue(origin: NodeB, target: NodeB): void {
    if (origin.parent !== null && target.parent !== null) {
      const indexo = origin.parent.children.indexOf(origin);
      const indext = origin.parent.children.indexOf(target);
      if (indexo < indext) {
        target.addValue(target.parent.removeValue(indexo));
        origin.parent.addValue(origin.removeValue(origin.n - 1));
        if (!origin.leaf) {
          target.addChild(origin.deleteChild(origin.children.length - 1), 0);
        }
      } else {
        target.addValue(target.parent.removeValue(indext));
        origin.parent.addValue(origin.removeValue(0));
        if (!origin.leaf) {
          target.addChild(origin.deleteChild(0), target.children.length);
        }
      }
    }
  }

  mergeNodes(origin: NodeB, target: NodeB): void {
    if (origin.parent !== null && target.parent !== null) {
      const indexo = origin.parent.children.indexOf(origin);
      const indext = target.parent.children.indexOf(target);
      target.addValue(target.parent.removeValue(Math.min(indexo, indext)));
      for (let i = origin.n - 1; i >= 0; i--) {
        target.addValue(origin.removeValue(i));
      }
      target.parent.deleteChild(indexo);
      if (!origin.leaf) {
        while (origin.children.length) {
          if (indexo > indext) {
            target.addChild(origin.deleteChild(0), target.children.length);
          } else {
            target.addChild(origin.deleteChild(origin.children.length - 1), 0);
          }
        }
      }
    }
  }

  getMinMaxFromSubTree(node: NodeB, max: 0 | 1): number {
    while (!node.leaf) {
      node = node.children[max ? node.n : 0];
    }
    return node.values[max ? node.n - 1 : 0];
  }

  insert(value: number): void {
    const actual = this.root;
    if (actual !== null && actual.n === 2 * this.order - 1) {
      const temp = new NodeB(false);
      temp.tree = this;
      this.root = temp;
      temp.addChild(actual, 0);
      this.split(actual, temp, 1);
      this.insertNonFull(temp, value);
    } else {
      const res = this.insertNonFull(actual, value);
      if (this.root === null) {
        this.root = res;
      }
    }
  }

  split(child: NodeB, parent: NodeB, pos: number) {
    const newChild = new NodeB(child.leaf);
    newChild.tree = this.root!.tree;
    for (let k = 1; k < this.order; k++) {
      newChild.addValue(child.removeValue(this.order));
    }
    if (!child.leaf) {
      for (let k = 1; k <= this.order; k++) {
        newChild.addChild(child.deleteChild(this.order), k - 1);
      }
    }
    parent.addChild(newChild, pos);
    parent.addValue(child.removeValue(this.order - 1));
    parent.leaf = false;
  }

  insertNonFull(node: NodeB | null, value: number): NodeB {
    if (node === null) {
      node = new NodeB(true);
    }
    if (node.leaf) {
      node.addValue(value);
      return node;
    }
    let temp = node.n;
    while (temp >= 1 && value < node.values[temp - 1]) {
      temp = temp - 1;
    }
    if (node.children[temp].n === 2 * this.order - 1) {
      this.split(node.children[temp], node, temp + 1);
      if (value > node.values[temp]) {
        temp = temp + 1;
      }
    }
    this.insertNonFull(node.children[temp], value);
    return node;
  }

  sortPreOrder(): number[] {
    const res: number[] = [];
    this.recPreOrder(this.root, res);
    console.log(this);
    return res;
  }

  private recPreOrder(node: NodeB | null, result: number[]): void {
    if (node !== null) {
      node.children.forEach((child: NodeB) => {
        this.recPreOrder(child, result);
      });
      result.push(...node.values);
    }
  }
}
