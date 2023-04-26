import { AbstractRobotComponent } from './abstract_robot_component.js'
import { TypesEnum } from '../robot_components_factory.js';
import { BinaryInputRobotComponent } from './binary_input_robot_component.js';
import BindMethods from "../../../utils/bindmethods.js"
import { EventsEnum } from '../scenario_event.js';

export { SocialRobotTouchSensor }

/**
 * @extends AbstractRobotComponent
 */
class SocialRobotTouchSensor extends BinaryInputRobotComponent {
    static pinNames = {
        digitalPin: "digitalPin"
    }
    constructor() {
        super();
        BindMethods(this);
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        let activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/touch_sensor_on.svg`;
        let inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/touch_sensor.svg`;
        super.initComponent(TypesEnum.TOUCH,
            ['touchButtonLabel'],
            ['touchOptions'],
            "touch sensor",
            activeImageUrl,
            inactiveImageUrl,
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
        this.initEventListeners(id);
    }

    initComponentFromXml(eventBus, id, xml) {
        let activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/touch_sensor_on.svg`;
        let inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/touch_sensor.svg`;
        super.initComponentFromXml(eventBus,
            TypesEnum.TOUCH,
            ['touchButtonLabel'],
            ['touchOptions'],
            activeImageUrl,
            inactiveImageUrl,
            id,
            xml);
        this.initEventListeners(id);
    }

    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }


    initEventListeners(id) {//register when components are moving to set pir state
        let ComponentId = "sim_touch" + id;
        console.log(ComponentId);
        document.getElementById(ComponentId).addEventListener('click', () => {
            if (!this.getState()) {
                this.setImage(this._activeImageUrl);
                this.setState(this.activeValue);
                this._stateUpdated = true;
                this._eventBus.dispatchEvent(EventsEnum.SAVE);
            } else {
                this.setImage(this._inactiveImageUrl);
                this.setState(this.inactiveValue);
                this._stateUpdated = true;
                this._eventBus.dispatchEvent(EventsEnum.SAVE);
            }
        })
    }
}