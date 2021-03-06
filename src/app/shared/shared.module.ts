import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LibrariesModule } from './libraries.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, LibrariesModule, ComponentsModule],
  exports: [CommonModule, MaterialModule, LibrariesModule, ComponentsModule],
})
export class SharedModule {}
