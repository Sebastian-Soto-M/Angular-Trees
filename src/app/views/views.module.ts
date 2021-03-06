import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BTreeComponent } from './b-tree/b-tree.component';
import { BpTreeComponent } from './bp-tree/bp-tree.component';
import { RbTreeComponent } from './rb-tree/rb-tree.component';
import { AvlTreeComponent } from './avl-tree/avl-tree.component';
import { BtCaracteristicasComponent } from './b-tree/bt-caracteristicas/bt-caracteristicas.component';
import { BtEjemploComponent } from './b-tree/bt-ejemplo/bt-ejemplo.component';
import { BtRecursosComponent } from './b-tree/bt-recursos/bt-recursos.component';

@NgModule({
  declarations: [
    AvlTreeComponent,
    BTreeComponent,
    BpTreeComponent,
    HomeComponent,
    RbTreeComponent,
    BtCaracteristicasComponent,
    BtEjemploComponent,
    BtRecursosComponent,
  ],
  imports: [SharedModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
