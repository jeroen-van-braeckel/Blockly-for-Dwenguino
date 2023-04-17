import { RobotComponent } from "../../socialrobot/components/robot_component";

class LightSensor extends RobotComponent{

    constructor(){
        this._image.src = "dwenguinoblockly/DwenguinoIDE/img/socialrobot/light_sensor.png"; //TODO src juist?
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/light_sensor.png`; //TODO welke nodig?
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/light_sensor.png`;
        this._width = 125;
        this._height = 75;
    }


    draw(canvas){
        if (canvas.getContext) {
    
            // in case the image isn't loaded yet.
            var self = this;
            this.getImage().onload = function() {
                var ctx = canvas.getContext('2d');
                ctx.drawImage(this.getImage(),0,0,_width,_height); 
            }
    
            var ctx = canvas.getContext('2d');
            ctx.drawImage(lightSensor.getImage(),0,0,lightSensor.getWidth(),lightSensor.getHeight());
        } else {
            console.log(canvas, "This canvas has no context");
        } 
    }

    getAllPossiblePins(){
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }
}


