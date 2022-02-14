import * as PIXI from "pixi.js"


const app = new PIXI.Application({backgroundColor:0x8e4f39});
document.body.appendChild(app.view);
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);
const graphics =  new PIXI.Graphics();
app.stage.addChild(graphics)
var startX= window.innerWidth
var startY =window.innerHeight
const d = new Date();



var skyBlue ='#87ceeb';//Color of Sky during the Day
var nightBlue='#222d5a';//Color of Sky during the Night
var hours=d.getHours();//Variable for hours
var seconds = d.getSeconds();
var minutes = d.getMinutes();
var isDay=false;//Boolean for the

 

 //graphics.lineStyle(2,0xC2FF50,1);

  for(let i = 0; i<hours;i++){
  graphics.beginFill(0xd8584e);
  graphics.drawCircle(Math.round(Math.random()*startX),Math.round(Math.random()*startY),100);
  graphics.endFill();
  }
  for(let i = 0; i<minutes;i++){
  graphics.beginFill(0x80b9b9);
  graphics.drawCircle(Math.round(Math.random()*startX),Math.round(Math.random()*startY),50);
  graphics.endFill();
  }
 
  for(let i = 0; i<hours;i++){
  graphics.beginFill(0xf8c08a);
  graphics.drawCircle(Math.round(Math.random()*startX),Math.round(Math.random()*startY),25);
  graphics.endFill();
  }
 


