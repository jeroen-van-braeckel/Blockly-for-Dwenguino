
import { TypesEnum } from '../robot_components_factory.js';
import { EventsEnum } from '../scenario_event.js';
import { DigitalOutputSensor } from './digital_output_sensor.js';
import BindMethods from "../../../utils/bindmethods.js"

export { SocialRobotPir }

/**
 * @extends DigitalOutputSensor
 */
class SocialRobotPir extends DigitalOutputSensor {

    static pinNames = {
        digitalPin: "digitalPin"
    }
    constructor() {
        super();
        BindMethods(this);
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on_red_light.png`;
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`;
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses, firstOfType) {
        super.initComponent(TypesEnum.PIR,
            ['pirOptions'],
            "pir",
            this._activeImageUrl,
            this._inactiveImageUrl,
            'sim_pir_canvas',
            eventBus,
            id,
            pins,
            state,
            visible,
            width,
            height,
            offsetLeft,
            offsetTop,
            htmlClasses, firstOfType, EventsEnum.COMPONENTSMOVING, EventsEnum.COMPONENTMOVED);
    }

    initComponentFromXml(eventBus, id, xml, firstOfType) {
        this.firstOfType = firstOfType;
        super.initComponentFromXml(eventBus,
            TypesEnum.PIR,
            ['pirOptions'],
            this._activeImageUrl,
            this._inactiveImageUrl,
            id,
            xml, firstOfType, EventsEnum.COMPONENTSMOVING, EventsEnum.COMPONENTMOVED);
    }

    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }
}