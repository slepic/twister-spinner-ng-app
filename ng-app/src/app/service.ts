import { Injectable } from '@angular/core';

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

@Injectable()
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
    htmlColor : "#ffff00"
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

@Injectable()
export class TwisterControl {
  bodyPart: BodyPart = null
  color: Color = null
  turnCounter: number = 0

  constructor(private service:TwisterService) {}

  reset():void {
    this.bodyPart = null;
    this.color = null;
    this.turnCounter = 0;
  }

  randomize():void {
    this.bodyPart = this.service.getRandomBodyPart();
    this.color = this.service.getRandomColor();
    this.turnCounter++;
  }
  
  isReset(): boolean {
    return this.turnCounter == 0;
  }

  getBodyPartName(): string {
    return this.bodyPart.name;
  }

  getBodyPartImageUrl(): string {
    return this.prepareUrl(this.bodyPart.imageUrl);
  }

  getNoBodyPartImageUrl(): string {
    return this.prepareUrl(this.service.noBodyPartImageUrl);
  }

  getColorName(): string {
    return this.color.name;
  }

  getHtmlColor(): string {
    return this.color.htmlColor;
  }

  prepareUrl(url:string):string {
    return 'assets/img/' + url;
  }
}
