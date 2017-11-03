import { Component } from '@angular/core';

import { TwisterService, Color } from './service';

@Component({
  selector: 'twister-about',
  templateUrl: './setup.component.html'
})
export class TwisterSetupComponent {
  colors: Color[]

  constructor(private service:TwisterService) {
    this.colors = this.service.colors;
  }
}
