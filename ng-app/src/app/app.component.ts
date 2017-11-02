import { Component } from '@angular/core';

class RNG {
  getIntRangeExc(min:number = 0, max:number = 100):number {
    return Math.floor(Math.random() * (max - min) + min)
  }
  getIntExc(max:number = 100):number {
    return this.getIntRangeExc(0, max)
  }
}

export class BodyPart {
  name: string
  imageUrl: string
}

export class Color {
  name: string
  htmlColor: string
}

export class TwisterService {
  noBodyPartImageUrl: string = "play.png"
  bodyParts:BodyPart[] = [{
    name : "Left hand",
    imageUrl : "left-hand.png"
  }, {
    name : "Right hand",
    imageUrl : "right-hand.png"
  }, {
    name : "Left foot",
    imageUrl : "left-foot.png"
  }, {
    name : "Right foot",
    imageUrl : "right-foot.png"
  }]

  colors:Color[] = [{
    name : "Red",
    htmlColor : "#ff0000"
  }, {
    name : "Green",
    htmlColor : "#00ff00"
  }, {
    name : "Blue",
    htmlColor : "#0000ff"
  }, {
    name : "Yellow",
    htmlColor : "yellow"
  }]

  private rng:RNG;

  constructor() {
    this.rng = new RNG();
  }

  getRandomBodyPart():BodyPart {
    var i = this.rng.getIntExc(this.bodyParts.length);
    return this.bodyParts[i];
  }

  getRandomColor():Color {
    var i = this.rng.getIntExc(this.colors.length);
    return this.colors[i];
  }
}

export class TwisterState {
  bodyPart: BodyPart
  color: Color
}

export class TwisterControl {
  service:TwisterService
  state:TwisterState

  constructor() {
    this.service = new TwisterService();
  }

  reset():void {
    this.state = null;
  }

  randomize():void {
    if(this.state === null)
      this.state = new TwisterState();
    this.state.bodyPart = this.service.getRandomBodyPart();
    this.state.color = this.service.getRandomColor();
  }
  
  isReset(): boolean {
    return this.state === null;
  }

  getBodyPartName(): string {
    return this.state.bodyPart.name;
  }

  getBodyPartImageUrl(): string {
    return this.prepareUrl(this.state.bodyPart.imageUrl);
  }

  getNoBodyPartImageUrl(): string {
    return this.prepareUrl(this.service.noBodyPartImageUrl);
  }

  getColorName(): string {
    return this.state.color.name;
  }

  getHtmlColor(): string {
    return this.state.color.htmlColor;
  }

  prepareUrl(url:string):string {
    return 'assets/img/' + url;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isReset: boolean
  bodyPartName: string
  colorName: string
  htmlColor: string
  imageUrl: string
  turnCounter: number = 0

  private control:TwisterControl;

  constructor() {
    this.control = new TwisterControl();
    this.reset();
  }

  reset(event?:Event): void {
    if(event) event.stopPropagation();

    this.control.reset();

    this.isReset = this.control.isReset();
    this.bodyPartName = '';
    this.colorName = '';
    this.htmlColor = 'white';
    this.imageUrl = this.control.getNoBodyPartImageUrl();

    this.turnCounter = 0;
  }

  randomize():void {
    this.control.randomize();
    this.isReset = this.control.isReset();
    this.bodyPartName = this.control.getBodyPartName();
    this.colorName = this.control.getColorName();
    this.htmlColor = this.control.getHtmlColor();
    this.imageUrl = this.control.getBodyPartImageUrl();

    this.turnCounter++;
  }
}
