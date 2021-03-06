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

class NodeAVL<T> {
  balance: number;
  left: NodeAVL<T> | null;
  right: NodeAVL<T> | null;

  constructor(public value: T, public parent: NodeAVL<T> | null = null) {
    this.balance = 0;
    this.left = null;
    this.right = null;
  }
}

export class AVLTree<T> {
  constructor(private root: NodeAVL<T> | null = null) {}

  add(key: T): boolean {
    if (this.root === null) {
      this.root = new NodeAVL<T>(key);
    } else {
      let n: NodeAVL<T> | null = this.root,
        parent: NodeAVL<T> | null = null;

      while (true) {
        if (n.value === key) {
          return false;
        }

        parent = n;

        let goLeft: boolean = n.value > key;
        n = goLeft ? n.left : n.right;

        if (n === null) {
          if (goLeft) {
            parent.left = new NodeAVL<T>(key, parent);
          } else {
            parent.right = new NodeAVL<T>(key, parent);
          }

          this.rebalance(parent);
          break;
        }
      }
    }

    return true;
  }

  private rotateLeft(a: NodeAVL<T>): NodeAVL<T> {
    let b: NodeAVL<T> | null = a.right;
    if (b !== null) {
      b.parent = a.parent;
      a.right = b.left;

      if (a.right !== null) {
        a.right.parent = a;
      }

      b.left = a;
      a.parent = b;

      if (b.parent !== null) {
        if (b.parent.right === a) {
          b.parent.right = b;
        } else {
          b.parent.left = b;
        }
      }

      this.setBalance(a);
      this.setBalance(b);
      return b;
    }
    return a;
  }

  private rotateRight(a: NodeAVL<T>): NodeAVL<T> {
    let b: NodeAVL<T> | null = a.left;
    if (b !== null) {
      b.parent = a.parent;
      a.left = b.right;

      if (a.left !== null) {
        a.left.parent = a;
      }

      b.right = a;
      a.parent = b;

      if (b.parent !== null) {
        if (b.parent.right === a) {
          b.parent.right = b;
        } else {
          b.parent.left = b;
        }
      }

      this.setBalance(a);
      this.setBalance(b);
      return b;
    }
    return a;
  }

  private rotateLeftThenRight(n: NodeAVL<T>): NodeAVL<T> {
    n.left = this.rotateLeft(n.left!);
    return this.rotateRight(n);
  }

  private rotateRightThenLeft(n: NodeAVL<T>): NodeAVL<T> {
    n.right = this.rotateRight(n.right!);
    return this.rotateLeft(n);
  }

  private rebalance(n: NodeAVL<T>): void {
    this.setBalance(n);

    if (n.balance === -2) {
      if (this.height(n.left!.left) >= this.height(n.left!.right)) {
        n = this.rotateRight(n);
      } else {
        n = this.rotateLeftThenRight(n);
      }
    } else if (n.balance === 2) {
      if (this.height(n.right!.right) >= this.height(n.right!.left)) {
        n = this.rotateLeft(n);
      } else {
        n = this.rotateRightThenLeft(n);
      }
    }

    if (n.parent !== null) {
      this.rebalance(n.parent);
    } else {
      this.root = n;
    }
  }

  private height(n: NodeAVL<T> | null): number {
    if (n === null) {
      return -1;
    }
    return 1 + Math.max(this.height(n.left!), this.height(n.right!));
  }

  private setBalance(n: NodeAVL<T>): void {
    n.balance = this.height(n.right!) - this.height(n.left!);
  }

  sortPreOrder(): T[] {
    const res: T[] = [];
    this.recPreOrder(this.root, res);
    return res;
  }

  private recPreOrder(node: NodeAVL<T> | null, result: T[]) {
    if (node != null) {
      result.push(node.value);
      this.recPreOrder(node.left, result);
      this.recPreOrder(node.right, result);
    }
  }

  sortInOrder(): T[] {
    const res: T[] = [];
    this.recInOrder(this.root, res);
    return res;
  }

  private recInOrder(node: NodeAVL<T> | null, result: T[]): void {
    if (node !== null) {
      this.recInOrder(node.left, result);
      result.push(node.value);
      this.recInOrder(node.right, result);
    }
  }

  sortPostOrder(): T[] {
    const res: T[] = [];
    this.recPostOrder(this.root, res);
    return res;
  }

  private recPostOrder(node: NodeAVL<T> | null, result: T[]): void {
    if (node != null) {
      this.recPostOrder(node.left, result);
      this.recPostOrder(node.right, result);
      result.push(node.value);
    }
  }
}
