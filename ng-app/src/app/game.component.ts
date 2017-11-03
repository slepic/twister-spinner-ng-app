import { Component } from '@angular/core';

import { TwisterControl} from './service';


@Component({
  selector: 'twister-game',
  templateUrl: './game.component.html',
})
export class TwisterGameComponent {
  isReset: boolean
  bodyPartName: string
  colorName: string
  htmlColor: string
  imageUrl: string
  turnCounter: number

  constructor(private control:TwisterControl) {
    this.update();
  }

  update(): void {
    this.isReset = this.control.isReset();
    if(this.isReset) {
      this.bodyPartName = '';
      this.colorName = '';
      this.htmlColor = 'white';
      this.imageUrl = this.control.getNoBodyPartImageUrl();
    } else {
      this.bodyPartName = this.control.getBodyPartName();
      this.colorName = this.control.getColorName();
      this.htmlColor = this.control.getHtmlColor();
      this.imageUrl = this.control.getBodyPartImageUrl();
    }
    this.turnCounter = this.control.turnCounter;
  }

  reset(event?:Event): void {
    if(event) event.stopPropagation();
    this.control.reset();
    this.update();
  }

  randomize():void {
    this.control.randomize();
    this.update();
  }
}
