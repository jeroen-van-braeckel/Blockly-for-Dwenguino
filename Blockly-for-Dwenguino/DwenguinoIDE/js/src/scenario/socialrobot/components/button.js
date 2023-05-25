import { AbstractRobotComponent } from './abstract_robot_component.js'
import { TypesEnum } from '../robot_components_factory.js';
import { EventsEnum } from '../scenario_event.js';
import { Button } from '../../utilities/button.js';
import { RobotComponent } from './robot_component.js';
import BindMethods from "../../../utils/bindmethods.js"
import { ClickableRobotComponent } from './clickable_robot_component.js';

export { SocialRobotButton }

/**
 * @extends AbstractRobotComponent
 */
class SocialRobotButton extends ClickableRobotComponent{
    static pinNames = {
        digitalPin: "digitalPin"
    }
    constructor(){
        super(0, 1);
        BindMethods(this);
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/board/button_pushed.png`;
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/board/button.png`;
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses){
        this.id = id;
        
        
        super.initComponent(TypesEnum.BUTTON, 
            ['buttonOptions'], 
            "button", 
            this._activeImageUrl, 
            this._inactiveImageUrl, 
            'sim_button_canvas', 
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

    initComponentFromXml(eventBus, id, xml){
        super.initComponentFromXml(eventBus,
            TypesEnum.BUTTON,
            ['buttonOptions'],
            this._activeImageUrl,
            this._inactiveImageUrl,
            id,
            xml);
    }


    getAllPossiblePins(){
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "SW_N", "SW_E", "SW_S", "SW_W", "SW_C"];
    }

    reset(){
        super.reset();
    }


}