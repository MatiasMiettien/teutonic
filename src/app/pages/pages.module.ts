import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page/front-page.component';
import {ComponentModule} from "../component/component.module";
import { GamesComponent } from './games/games.component';
import { PrefabsComponent } from './prefabs/prefabs.component';
import { WebPagesComponent } from './web-pages/web-pages.component';
import { IconDesignComponent } from './icon-design/icon-design.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FrontPageComponent,
    GamesComponent,
    PrefabsComponent,
    WebPagesComponent,
    IconDesignComponent,
  ],
    imports: [
        CommonModule,
        ComponentModule,
        FormsModule
    ],
})
export class PagesModule { }
