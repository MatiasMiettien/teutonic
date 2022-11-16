import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextCardComponent} from "./text-card/text-card.component";
import { PrefabComponent } from './prefab/prefab.component';



@NgModule({
  declarations: [
    TextCardComponent,
    PrefabComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TextCardComponent
  ]
})
export class ComponentModule { }
