import { AbstractRobotComponent } from './abstract_robot_component.js'
import { TypesEnum } from '../robot_components_factory.js';
import { EventsEnum } from '../scenario_event.js';
import BindMethods from "../../../utils/bindmethods.js"
import { DigitalOutputSensor } from './digital_output_sensor.js';

export { SocialRobotLightSensor }

/**
 * @extends AbstractRobotComponent
 */
class SocialRobotLightSensor extends DigitalOutputSensor{
    static pinNames = {
        digitalPin: "digitalPin"
    }

    constructor(){
        super();
        BindMethods(this);
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/light_sensor.png`;
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/light_sensor.png`;
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses, firstOfType){
        super.initComponent(TypesEnum.LIGHT,
            ['lightSensorOptionsLabel'],
            "light_sensor",
            this._activeImageUrl,
            this._inactiveImageUrl,
            'sim_light_canvas' + id,
            eventBus,
            id,
            pins,
            state,
            visible,
            width,
            height,
            offsetLeft,
            offsetTop,
            htmlClasses, firstOfType, EventsEnum.LIGHTON, EventsEnum.LIGHTOFF)
        
    }


    insertHtml(){
        super.insertHtml();
    }



    initComponentFromXml(eventBus, id, xml, firstOfType){
        super.initComponentFromXml(eventBus,
            TypesEnum.LIGHT,
            ['lightSensorOptionsLabel'],
            this._activeImageUrl,
            this._inactiveImageUrl,
            id, 
            xml, firstOfType,  EventsEnum.LIGHTON, EventsEnum.LIGHTOFF);

    }


    getAllPossiblePins(){
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }


}