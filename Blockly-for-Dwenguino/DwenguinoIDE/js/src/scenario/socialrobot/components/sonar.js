import { AbstractRobotComponent } from './abstract_robot_component.js'
import { TypesEnum } from '../robot_components_factory.js'
import { EventsEnum } from '../scenario_event.js'
import { Slider } from '../../utilities/slider.js'
import { RobotComponent } from './robot_component.js'
import BindMethods from "../../../utils/bindmethods.js"

export { SocialRobotSonar }

/**
 * @extends RobotComponent
 */
class SocialRobotSonar extends RobotComponent {
    static pinNames = {
        triggerPin: "triggerPin",
        echoPin: "echoPin"
    }
    constructor() {
        super();
        BindMethods(this);

        this.rotateCount = 0; //to continue rotating in multiples of 90°
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        let label = DwenguinoBlocklyLanguageSettings.translate(['sonarSliderLabel']) + " " + id;
        let sliderId = '' + TypesEnum.SONAR + id;
        this._slider = new Slider(sliderId, 'sensor_options', 0, 200, 0, label, '', ' cm', 'sonar_slider');

        var self = this;
        let sliderElement = this._slider.getSliderElement();
        sliderElement.oninput = function () {
            let myid = self.getId();
            self.changeSonarDistance(this.value, myid);
            self._slider.updateValueLabel(this.value);
        }

        super.initComponent(eventBus, htmlClasses, id, TypesEnum.SONAR, 'sonar', pins, state, visible, width, height, offsetLeft, offsetTop, `${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow.png`, 'sim_sonar_canvas' + id);


        this.initEventListeners();
        console.log("offsetLeft: " + this.offsetLeft + "width" + this.getWidth() + "top" + this.getOffset() + ",height:" + this.getHeight()); //TODO verwijder
    }

    initComponentFromXml(eventBus, id, xml) {
        let label = DwenguinoBlocklyLanguageSettings.translate(['sonarSliderLabel']) + " " + id;
        let sliderId = '' + TypesEnum.SONAR + id;
        this._slider = new Slider(sliderId, 'sensor_options', 0, 200, 0, label, '', ' cm', 'sonar_slider');

        var self = this;
        let sliderElement = this._slider.getSliderElement();
        sliderElement.oninput = function () {
            let myid = self.getId();
            self.changeSonarDistance(this.value, myid);
            self._slider.updateValueLabel(this.value);
        }

        super.initComponentFromXml(eventBus, `${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow.png`, id, xml);

        this.initEventListeners();
    }


    insertHtml() {
        var self = this;
        let sliderElement = this._slider.getSliderElement();
        sliderElement.oninput = function () {
            let id = self.getId();
            self.changeSonarDistance(this.value, id);
            self._slider.updateValueLabel(this.value);
        }
        super.insertHtml(DwenguinoBlocklyLanguageSettings.translate(['sonarOptions']));


        // add a rotate icon to rotate the sonar sensor t the measured place    
        var divId = "sim_sonar" + this.getId();
        var rotateId = "rotateIcon" + this.getId();

        //document.getElementById(divId)
        $('#' + divId).append("<i id='" + rotateId + "' style='font-size:15px' class='fa'></i>");
        document.getElementById(rotateId).addEventListener('click', this.rotate);
    }

    changeSonarDistance(value) {
        this.setState(value);
    }

    removeHtml() {
        super.removeHtml();
        this.getSlider().remove();
    }

    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "SONAR_1_TRIG", "SONAR_1_ECHO", "SONAR_2_TRIG", "SONAR_2_ECHO", "SONAR_3_TRIG", "SONAR_3_ECHO"];
    }

    getSlider() {
        return this._slider;
    }

    reset() {
        super.reset();
        this.getSlider().reset();
    }



    initEventListeners() {//register when components are moving to set pir state
        this._eventBus.registerEvent(EventsEnum.COMPONENTSMOVING);//change state to active
        this._eventBus.registerEvent(EventsEnum.COMPONENTMOVED);//change state to inactive
        this._eventBus.addEventListener(EventsEnum.COMPONENTSMOVING, () => {
            //TODO meet afstand to eerstvolgende component
        })
        this._eventBus.addEventListener(EventsEnum.COMPONENTMOVED, () => {
            //this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_turned.png`)
            //TODO stop met meten

        })
    }


    rotate() {
        var canvas = document.getElementById("sim_sonar_canvas" +this._id);
        var ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,canvas.width,canvas.height);

        this.rotateCount++;
        switch (this.rotateCount % 4) {
            case 0:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_NORD.png`);
                break;
            case 1:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_EAST.png`);
                break;
            case 2:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_SOUTH.png`);
                break;
            case 3:
                this.setImage(`${settings.basepath}DwenguinoIDE/img/board/sonar_with_arrow_WEST.png`);
                break;
        }
        /*
        console.log("rotate called");
        var canvas = document.getElementById("sim_sonar_canvas" +this._id);
        var ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,canvas.width,canvas.height);
        var tempWidth = canvas.width;
        canvas.width = canvas.height;
        canvas.height = tempWidth;
        

        /*
        var tempWidth = canvas.width;
        canvas.width = canvas.height;
        canvas.height = tempWidth;
        

        // save the unrotated ctx of the canvas so we can restore it later
        // the alternative is to untranslate & unrotate after drawing
        ctx.save();

        // move to the center of the canvas
        ctx.translate(canvas.width/2,canvas.height/2);
    
        // rotate the canvas to the specified degrees
        ctx.rotate(this.rotateCount*90*Math.PI/180);
    
        // draw the image
        // since the ctx is rotated, the image will be rotated also
        var width = this.getImage().width;
        var height = this.getImage().height;
        width = this.getWidth();
        height = this.getHeight();
        ctx.drawImage(this.getImage(),-width/2,-height/2, width, height);
        // we’re done with the rotating so restore the unrotated ctx
        ctx.restore();
        console.log("rotate done");

        */
    }
}