import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorPickerModule } from 'ngx-color-picker';

import { TwisterService, TwisterControl } from './service';

import { TwisterMenuComponent } from './menu.component';
import { TwisterGameComponent } from './game.component';
import { TwisterSetupComponent } from './setup.component';
import { TwisterAboutComponent } from './about.component';
import { TwisterAppComponent } from './app.component';


const appRoutes: Routes = [
  {path: 'game', component: TwisterGameComponent},
  {path: 'setup', component: TwisterSetupComponent},
  {path: 'about', component: TwisterAboutComponent},
  {path: '', redirectTo: '/game', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    TwisterMenuComponent,
    TwisterGameComponent,
    TwisterSetupComponent,
    TwisterAboutComponent,
    TwisterAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ColorPickerModule
  ],
  providers: [
    TwisterService,
    TwisterControl
  ],
  bootstrap: [TwisterAppComponent]
})
export class TwisterModule { }
