import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    HomeRoutingModule
  ],
  exports: [
    ShareModule
  ]
})
export class HomeModule { }
