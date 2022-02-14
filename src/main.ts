import * as PIXI from "pixi.js"


const app = new PIXI.Application();
document.body.appendChild(app.view);
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';

    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

const graphics =  new PIXI.Graphics();
await load(app);
let sun =  new PIXI.sprite(
  app.loader.resources['assests/sun.png'].texture
);
var startX= window.innerWidth/2
var startY =window.innerHeight/2
//var petals = [];



color skyBlue=color(135, 206, 235);//Color of Sky during the Day
color nightBlue=color(0, 51, 102);//Color of Sky during the Night
var hours=hour();//Variable for hours
var isDay=false;//Boolean for the

  if (hours>=7 && hours<=18) {//Makes background a ligther blue to show it is daytime
    isDay=true;
    background(skyBlue);
  } else {
    isDay=false;
    background(nightBlue);//Makes background a darker blue to show it is nighttime
  }

  graphics.drawEllipse(startX startY, 300, 300);
  /*ellipse((width/2), (height/2)-50, 10, 10);

  if (isDay==true) {//rotation of Sun
    fill(253, 184, 19);
    translate(width, height/2);
    rotate(0.0006944444);
    ellipseMode(CENTER);
    ellipse(100, 100, 100, 100);
  }

  else if(isDay==false){
    translate(width/2, height/2);
    rotate(0.0006944444);
    ellipseMode(CENTER);
    ellipse(100,100, 100, 100);
  }
  }

/*
graphics.lineStyle(2,0xC2FF50,1);
graphics.beginFill()

ellipseOne.position.x = startX
ellipseOne.position.y = startY
ellipseOne.pivot.set(startX,startY)
ellipseOne.angle = 40*i
graphics.endFill();
app.stage.addChild(graphics);
*/





//console.log(petals)
