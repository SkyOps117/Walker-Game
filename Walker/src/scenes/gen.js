//Using Phaser framework v3.55.2
import * as Phaser from './phaser.js';
import Stats from './plugin/Stats.js';
class Walker extends Phaser.Scene
{
    init()
    {
        this.input.mouse.disableContextMenu();
        //document.getElementsByClassName("canvas").style["boxShadow"] = "0 0 100px #000000";
        //this.centerX = this.game.config.width / 2;
        //this.centerY = this.game.config.height / 2;
    }
     preload()
    {
        //this.input.setDefaultCursor("/assets/cur/default.cur");
        //this.load.image('name', '/assets/img/filename.png');
        //this.scale.startFullscreen();
    }
    create()
    {
        this.pointer = this.input.activePointer;
        //this.input.on('pointerdown', onMouseMove(this.input.activePointer), this); //this.input.activePointer
        this.cameras.main.setViewport(0, 0, 1920, 1080);
        this.worldObject = new Phaser.Geom.Circle(70, 70, 70);
        this.guiObject = new Phaser.Geom.Circle(175, 35, 35);
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0xffffcb);
        this.graphics.fillCircleShape(this.worldObject);
        this.graphics.fillStyle(0xbb0000);
        this.graphics.fillCircleShape(this.guiObject);
        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild(this.stats.dom);
    }
    update()
    {
        //this.scale.updateBounds();
        //this.scale.startFullscreen();
        this.pointer = this.input.activePointer;
        this.stats.begin();
        
        // monitored code goes here
        this.stats.end();
        if(pointer.isDown) {
            if(pointer.distance > 0) 
            { 

            } 
        }
    }

    onMouseMove()
    {
        this.guiObject.x = pointer.x;
        this.guiObject.y = pointer.y;
        this.graphics.clear();
        this.graphics.fillStyle(0xffffcb);
        this.graphics.fillCircleShape(this.worldObject);
        this.graphics.fillStyle(0xbb0000);
        this.graphics.fillCircleShape(this.guiObject);
        /*
        //pointer = this.input.activePointer;
        graphics.clear();
        worldObject = new Phaser.Geom.Circle(pointer.worldX, pointer.wolrdZ, 35);
        guiObject = new Phaser.Geom.Circle(pointer.x, pointer.y, 35);
        //worldObject = new Phaser.Geom.Circle(pointer.worldX, pointer.worldY, 35);
        //guiObject = new Phaser.Geom.Circle(pointer.x, pointer.y, 35);
        graphics.fillStyle(0xffffcb);
        graphics.fillCircleShape(worldObject);
        graphics.fillStyle(0x00a0ff);
        graphics.fillCircleShape(guiObject);
        /*worldObject.x = event.x;
        scene.worldObject.y = event.y;
        var d = Math.round(pointer.distance);
        if(d > 0)
            console.log(d);*/
    }

    drawPath(fillColor, fillAlpha, strokeColor, strokeAlpha, strokeWidth,  path, closing)
    {
        graphics.clear();
        graphics.lineStyle(strokeWidth, strokeColor, strokeAlpha); //example color: 0xFF00FF
        graphics.fillStyle(fillColor, fillAlpha);
        if(path.length < 1)
        {
            graphics.fillCircle(path[0].x, path[0].y, strokeWidth);
            graphics.strokeCircle(path[0].x, path[0].y, strokeWidth * 0.25);
        }
        else
        {
            graphics.beginPath();
            graphics.moveTo(path[0].x, path[0].y);
            for (i = 1; i < path.length-1; i++)
            {
                graphics.lineTo(path[i].x, path[i].y);
            }
            if(closing)
                graphics.closePath();
            
            graphics.strokePath();
        }
    }
}

let gameScene = new Walker();
//CONFIG
let config = {
    type: Phaser.CANVAS,
    width: 1920,
    height: 1080,
    parent: 'phaser-game',
    scene: gameScene,
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true
            gravity:{y:0}
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: true
    }
};
//INSTANCIATION
let game = new Phaser.Game(config);