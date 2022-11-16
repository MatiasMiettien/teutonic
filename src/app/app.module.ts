import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from "@angular/router";
import { FrontPageComponent } from "./pages/front-page/front-page.component";
import {PagesModule} from "./pages/pages.module";
import {PrefabsComponent} from "./pages/prefabs/prefabs.component";
import {GamesComponent} from "./pages/games/games.component";
import {WebPagesComponent} from "./pages/web-pages/web-pages.component";
import {IconDesignComponent} from "./pages/icon-design/icon-design.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'prefabs', component: PrefabsComponent},
      {path: 'games', component: GamesComponent},
      {path: 'web-pages', component: WebPagesComponent},
      {path: 'icon', component: IconDesignComponent},
      {path: '**', component: FrontPageComponent}
    ], {useHash: true})
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
