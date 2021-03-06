import { NgModule } from '@angular/core';
import { LibrariesModule } from '@shared/libraries.module';
import { MaterialModule } from '@shared/material.module';
import { NumberFormComponent } from './number-form/number-form.component';

@NgModule({
  declarations: [NumberFormComponent],
  imports: [LibrariesModule, MaterialModule],
  exports: [NumberFormComponent],
})
export class ComponentsModule {}
