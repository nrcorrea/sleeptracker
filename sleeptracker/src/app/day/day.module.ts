import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DayPage } from './day.page';

import { DayPageRoutingModule } from './day-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPageRoutingModule
  ],
  declarations: [DayPage]
})
export class DayPageModule {}
