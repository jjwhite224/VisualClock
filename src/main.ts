import * as PIXI from "pixi.js"


const app = new PIXI.Application();
document.body.appendChild(app.view);
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

const graphics =  new PIXI.Graphics();
var startX= window.innerWidth/2
var startY =window.innerHeight/2
var size = window.innerWidth



for (let i=1;i<innerWidth;i++){
  graphics.lineStyle(2,0xC2FF50,1);
  graphics.beginFill()
  if (size>2){
  let newSize = size/(i*.5);
  graphics.drawCircle(startX,startY,newSize);
  graphics.lineStyle(2,0xFC4ECF,1);
  graphics.drawCircle(startX+newSize,startY,newSize);
  graphics.lineStyle(2,0x4828C5,1);
  graphics.drawCircle(startX-newSize,startY,newSize);
  graphics.endFill();
}
}


  app.stage.addChild(graphics);
