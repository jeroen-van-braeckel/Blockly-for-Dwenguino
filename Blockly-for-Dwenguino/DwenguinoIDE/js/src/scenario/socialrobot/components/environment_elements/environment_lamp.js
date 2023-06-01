import { RobotComponent } from "../robot_component";
import { TypesEnum } from "../../robot_components_factory";

import BindMethods from "../../../../utils/bindmethods";

export {EnvironmentLamp}

/**
 * @extends RobotComponent
 */
class EnvironmentLamp extends RobotComponent{


    constructor(){
        super();
        BindMethods(this);
        
        this.activeValue = 1;
        this.inactiveValue = 0;
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/led.png`; //TODO
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/lamp_active.png`; //TODO
        
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        super.initComponent(eventBus, htmlClasses, id, TypesEnum.LAMP, "lamp", pins, state, visible,width,height,offsetLeft, offsetTop, this._inactiveImageUrl, "sim_lamp_canvas" + id);
        this.initEventListener();
        this.lampState = this.inactiveValue;
    }

    initComponentFromXml(eventBus, id, xml) {
        super.initComponentFromXml(eventBus,
            this._imageUrl,
            id,
            xml);
            this.initEventListener();
            this.lampState = this.inactiveValue;
    }

    insertHtml() {
        super.insertHtml("noOptions"); 
    }

    toXml() {
        return super.toXml();
    }

    getAllPossiblePins() {
        return []
    }

    setOffset(offset) {
        this._offset = offset;
    }

    getOffset(){
        return this._offset;
    }

    getState(){//custom, not related to boardstate
        return this.lampState;
    }
    setState(value){//custom, not related to boardstate
        this.lampState = value;
    }

    initEventListener(){ //lamp turns on or off on click
    document.getElementById(this.getCanvasId()).addEventListener('click', () => {
        if (this.getState() != this.activeValue) {
            this.setImage(this._activeImageUrl);
            this.setState(this.activeValue);
        } else {
            this.setImage(this._inactiveImageUrl);
            this.setState(this.inactiveValue);
        }
        this._stateUpdated = true;
        });
    
}

}