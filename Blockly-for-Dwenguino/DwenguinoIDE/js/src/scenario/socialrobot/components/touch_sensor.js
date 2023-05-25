import { AbstractRobotComponent } from './abstract_robot_component.js'
import { TypesEnum } from '../robot_components_factory.js';
import BindMethods from "../../../utils/bindmethods.js"
import { EventsEnum } from '../scenario_event.js';
import { ClickableRobotComponent } from './clickable_robot_component.js';

export { SocialRobotTouchSensor }

/**
 * @extends AbstractRobotComponent
 */
class SocialRobotTouchSensor extends ClickableRobotComponent {
    static pinNames = {
        digitalPin: "digitalPin"
    }
    constructor() {
        super();
        BindMethods(this);
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/touch_sensor_on.svg`;
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/touch_sensor.svg`;
       
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        super.initComponent(TypesEnum.TOUCH,
            ['touchOptions'],
            "touch sensor",
           this._activeImageUrl,
            this._inactiveImageUrl,
            'sim_touch_canvas',
            eventBus,
            id,
            pins,
            state,
            visible,
            width,
            height,
            offsetLeft,
            offsetTop,
            htmlClasses);
    }

    initComponentFromXml(eventBus, id, xml) {
        super.initComponentFromXml(eventBus,
            TypesEnum.TOUCH,
            ['touchOptions'],
           this._activeImageUrl,
            this._inactiveImageUrl,
            id,
            xml);
    }

    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }
}