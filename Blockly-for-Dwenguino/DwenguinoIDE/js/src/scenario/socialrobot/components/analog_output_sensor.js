import { RobotComponent } from './robot_component.js'
import BindMethods from "../../../utils/bindmethods.js"

export {AnalogOutputSensor }


/**
 * @extends RobotComponent
 */
class AnalogOutputSensor extends RobotComponent {

    constructor() {
        super();
        BindMethods(this);
    }

    initComponent(eventBus, htmlClasses, id, type, name, pins, state, visible, width, height, offsetLeft, offsetTop, imgSource, canvasId) {
        super.initComponent(eventBus, htmlClasses, id, type, name, pins, state, visible, width, height, offsetLeft, offsetTop, imgSource, canvasId);
    }

    initComponentFromXml(eventBus, imgSource, id, xml){
        super.initComponentFromXml(eventBus, imgSource, id, xml);
    } 


    insertHtml(optionsLabel = "options") {
        super.insertHtml(optionsLabel);
    }

    setState(value) { //change the state
        super.setState(value);
    }

    removeHtml() {
        super.removeHtml();
    }

    reset() {
        super.reset();
    }
}