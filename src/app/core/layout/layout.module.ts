import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import {
  MembersDialog,
  NavigationComponent,
} from './navigation/navigation.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavigationComponent,
    MembersDialog,
  ],
  imports: [SharedModule],
  exports: [MainComponent, FooterComponent, NavigationComponent],
  entryComponents: [MembersDialog],
})
export class LayoutModule {}
