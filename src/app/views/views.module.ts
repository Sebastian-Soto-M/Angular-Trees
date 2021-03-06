import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BTreeComponent } from './b-tree/b-tree.component';
import { BpTreeComponent } from './bp-tree/bp-tree.component';
import { RbTreeComponent } from './rb-tree/rb-tree.component';
import { AvlTreeComponent } from './avl-tree/avl-tree.component';
import { BtEjemploComponent } from './b-tree/bt-ejemplo/bt-ejemplo.component';
import { BtRecursosComponent } from './b-tree/bt-recursos/bt-recursos.component';
import { AvlEjemploComponent } from './avl-tree/avl-ejemplo/avl-ejemplo.component';
import { AvlRecursosComponent } from './avl-tree/avl-recursos/avl-recursos.component';

@NgModule({
  declarations: [
    AvlEjemploComponent,
    AvlRecursosComponent,
    AvlTreeComponent,
    BTreeComponent,
    BpTreeComponent,
    BtEjemploComponent,
    BtRecursosComponent,
    HomeComponent,
    RbTreeComponent,
  ],
  imports: [SharedModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
