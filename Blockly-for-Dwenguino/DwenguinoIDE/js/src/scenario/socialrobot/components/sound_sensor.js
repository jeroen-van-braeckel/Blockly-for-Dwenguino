import { TypesEnum } from '../robot_components_factory.js';
import { EventsEnum } from '../scenario_event.js';
import BindMethods from "../../../utils/bindmethods.js"
import { DigitalOutputSensor } from './digital_output_sensor.js';


export { SocialRobotSoundSensor }

/**
 * @extends DigitalOutputSensor
 */
class SocialRobotSoundSensor extends DigitalOutputSensor {
    static pinNames = {
        digitalPin: "digitalPin"
    }
    constructor() {
        super();
        BindMethods(this);
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/sound_sensor.png`;
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/sound_sensor.png`;

    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses, firstOfType) {
        super.initComponent(TypesEnum.SOUND,
            ['soundOptions'],
            'sound sensor',
            this._activeImageUrl,
            this._inactiveImageUrl,
            'sim_sound_canvas' + id,
            eventBus,
            id,
            pins,
            state,
            visible,
            width,
            height,
            offsetLeft,
            offsetTop,
            htmlClasses,firstOfType, EventsEnum.AUDIOSTARTED, EventsEnum.AUDIOSTOPPED);
    }

    initComponentFromXml(eventBus, id, xml, firstOfType) {
        super.initComponentFromXml(eventBus, 
            TypesEnum.SOUND,
            ['soundOptions'],
            this._activeImageUrl,
            this._inactiveImageUrl,
             id, 
             xml,firstOfType, EventsEnum.AUDIOSTARTED, EventsEnum.AUDIOSTOPPED);
    }

    insertHtml() {
        super.insertHtml();
    }

    removeHtml() {
        super.removeHtml();
    }

    reset() {
        super.reset();
    }

    getAllPossiblePins() {
        return ["SOUND_1", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7"];
    }

}
