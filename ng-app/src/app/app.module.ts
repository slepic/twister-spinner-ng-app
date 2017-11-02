import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwisterMenuComponent } from './menu.component';
import { TwisterGameComponent } from './game.component';
import { TwisterAboutComponent } from './about.component';
import { TwisterAppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'game', component: TwisterGameComponent},
  {path: 'about', component: TwisterAboutComponent},
  {path: '', redirectTo: '/game', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    TwisterMenuComponent,
    TwisterGameComponent,
    TwisterAboutComponent,
    TwisterAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [TwisterAppComponent]
})
export class TwisterModule { }
