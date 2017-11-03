import { Component } from '@angular/core';

import { TwisterService } from './service';

@Component({
  selector: 'twister-about',
  templateUrl: './setup.component.html'
})
export class TwisterSetupComponent {
  color:string = '#ff0000'

  constructor(private service:TwisterService) {}
}
