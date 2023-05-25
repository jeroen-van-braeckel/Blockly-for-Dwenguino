
import { EventsEnum } from '../scenario_event.js';
import { RobotComponent } from "./robot_component";
import BindMethods from "../../../utils/bindmethods.js"
import { off } from 'process';
import { html } from '@microsoft/fast-element';
import { DigitalOutputSensor } from './digital_output_sensor.js';

export { ClickableRobotComponent };
class ClickableRobotComponent extends DigitalOutputSensor {

    constructor(activeValue = 1, inactiveValue = 0){
        super();
        BindMethods(this);
        this.activeValue = activeValue;
        this.inactiveValue = inactiveValue;
    }

    initComponent(type, optionsMenuTranslationKey, componentName, activeImage, inactiveImage, componentCanvasClass, eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses){
        super.initComponent(type, optionsMenuTranslationKey, componentName, activeImage, inactiveImage, componentCanvasClass, eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses, true, null,null)
         this.initEventListeners(id);
    }

    initComponentFromXml(eventBus, type, optionsMenuTranslationKey, activeImage, inactiveImage, id, xml){
        super.initComponentFromXml(eventBus, type, optionsMenuTranslationKey, activeImage, inactiveImage, id, xml, true,null, null)
        this.initEventListeners(id);
    }

    initEventListeners(id) {//register clicks as touch-events 

        //check if user action is a click or a "move" action, component should not change state on move action
        ///TODO Pir still works? -> only one registerevent in whole simulation
        let isMoveAction = false;
        this._eventBus.registerEvent(EventsEnum.COMPONENTSMOVING);
        this._eventBus.addEventListener(EventsEnum.COMPONENTSMOVING, () => {
            isMoveAction = true; 
        })

        let ComponentId = 'sim_' + this.getType() + "_canvas" + this.getId();
        document.getElementById(ComponentId).addEventListener('click', () => {
            if(!isMoveAction){
                if (this.getState() != this.activeValue) {
                this.setImage(this._activeImageUrl);
                this.setState(this.activeValue);
            } else {
                this.setImage(this._inactiveImageUrl);
                this.setState(this.inactiveValue);
            }
            this._stateUpdated = true;
            this._eventBus.dispatchEvent(EventsEnum.SAVE);
            }
            else{
                isMoveAction = false; //reset value for next event
            }
        })
    }




}