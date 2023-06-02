import { TypesEnum } from '../robot_components_factory.js'
import { EventsEnum } from '../scenario_event.js'
import { RobotComponent } from './robot_component.js'
import BindMethods from "../../../utils/bindmethods.js"
import { AnalogOutputSensor } from './analog_output_sensor.js'

export { SocialRobotSonar, SonarEnum}

const SonarEnum = {
    NORTH: 'N',
    EAST: 'E',
    SOUTH: 'S',
    WEST: 'W'
  };

/**
 * @extends AnalogOutputSensor
 */
class SocialRobotSonar extends AnalogOutputSensor {
    static pinNames = {
        triggerPin: "triggerPin",
        echoPin: "echoPin"
    }
    constructor() {
        super();
        BindMethods(this);
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        super.initComponent(eventBus, htmlClasses, id, TypesEnum.SONAR, 'sonar', pins, state, visible, width, height, offsetLeft, offsetTop, `${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow.png`, 'sim_sonar_canvas' + id);
        this.rotateCount = 0; //to determine orientation, this.rotateCount%4 = 0 is North, =1 is East, =2 is South, =3 is West
    }

    initComponentFromXml(eventBus, id, xml) {
        super.initComponentFromXml(eventBus, `${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow.png`, id, xml);
        this.rotateCount = 0; //to determine orientation, this.rotateCount%4 = 0 is North, =1 is East, =2 is South, =3 is West
    }


    insertHtml() {
        super.insertHtml(DwenguinoBlocklyLanguageSettings.translate(['sonarOptions']));


        // add a rotate icon to rotate the sonar sensor t the measured place    
        var divId = "sim_sonar" + this.getId();
        var rotateId = "rotateIcon" + this.getId();

        $('#' + divId).append("<i id='" + rotateId + "' style='font-size:15px' class='fa'></i>");
        document.getElementById(rotateId).addEventListener('click', this.rotate);
    }

    removeHtml() {
        super.removeHtml();
    }

    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "SONAR_1_TRIG", "SONAR_1_ECHO", "SONAR_2_TRIG", "SONAR_2_ECHO", "SONAR_3_TRIG", "SONAR_3_ECHO"];
    }

    reset() {
        super.reset();
    }

    setHtmlClasses(classes){ //update class in canvas-element in DOM
        let canvas = document.getElementById(this.getCanvasId()).className=classes;
        super.setHtmlClasses(classes);
    }

    getOrientation(){ //returns in which direction the sensor is currently pointing
        const values = Object.values(SonarEnum);
        return values[this.rotateCount%4];
    }
    rotate() {
        var canvas = document.getElementById("sim_sonar_canvas" +this._id);
        var ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,canvas.width,canvas.height);
        var tempHeight = canvas.height
        canvas.height = canvas.width;
        canvas.width = tempHeight;
       
        this.rotateCount++;
        switch (this.getOrientation()) {
            case SonarEnum.NORTH:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_NORTH.png`);
                var tempHeight = this.getHeight()
                this.setHeight(this.getWidth());
                this.setWidth(tempHeight);
                this.setHtmlClasses('sim_canvas sonar_canvas');
                break;
            case SonarEnum.EAST:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_EAST.png`);
                var tempHeight = this.getHeight()
                this.setHeight(this.getWidth());
                this.setWidth(tempHeight);
                this.setHtmlClasses('sim_canvas sonar_canvas_rotated');
                
                break;
            case SonarEnum.SOUTH:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_SOUTH.png`);
                var tempHeight = this.getHeight()
                this.setHeight(this.getWidth());
                this.setWidth(tempHeight);
                this.setHtmlClasses('sim_canvas sonar_canvas');
                break;
            case SonarEnum.WEST:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_WEST.png`);
                var tempHeight = this.getHeight()
                this.setHeight(this.getWidth());
                this.setWidth(tempHeight);
                this.setHtmlClasses('sim_canvas sonar_canvas_rotated');
                break;
        }
        this._eventBus.dispatchEvent(EventsEnum.DISTANCECHANGED, this);
    }
}