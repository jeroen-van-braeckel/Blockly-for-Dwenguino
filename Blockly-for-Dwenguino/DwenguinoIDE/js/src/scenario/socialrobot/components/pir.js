import { AbstractRobotComponent } from './abstract_robot_component.js'
import { TypesEnum } from '../robot_components_factory.js';
import { EventsEnum } from '../scenario_event.js';
import { Button } from '../../utilities/button.js';
import { RobotComponent } from './robot_component.js';
import { BinaryInputRobotComponent } from './binary_input_robot_component.js';
import BindMethods from "../../../utils/bindmethods.js"

export { SocialRobotPir }

/**
 * @extends AbstractRobotComponent
 */
class SocialRobotPir extends BinaryInputRobotComponent {

    static pinNames = {
        digitalPin: "digitalPin"
    }
    constructor(firstOfType) {
        super();
        BindMethods(this);
        this.firstOfType = firstOfType;
    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        let activeImage = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on.png`;
        let inactiveImage = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`;



        super.initComponent(TypesEnum.PIR,
            ['simulator', 'pir'],
            ['pirOptions'],
            "pir",
            activeImage,
            inactiveImage,
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
            htmlClasses);

        //this.initEventListeners();
    }

    initComponentFromXml(eventBus, id, xml) {
        let activeImage = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on.png`;
        let inactiveImage = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`;
        super.initComponentFromXml(eventBus,
            TypesEnum.PIR,
            ['simulator', 'pir'],
            ['pirOptions'],
            activeImage,
            inactiveImage,
            id,
            xml);

        //this.initEventListeners();
    }

    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    }

    insertHtml(){
        super.insertHtml();
        this.initEventListeners();
       
    }

    
    initEventListeners() {//register when components are moving to set pir state
        if(this.firstOfType){
            this._eventBus.registerEvent(EventsEnum.COMPONENTSMOVING);//change state to active
            this._eventBus.registerEvent(EventsEnum.COMPONENTMOVED);//change state to inactive
            }
        this._eventBus.addEventListener(EventsEnum.COMPONENTSMOVING, () => {
            if(this._isSimulationRunning){
                this.setState(1);
                //this.setImage(this._activeImageUrl);
                console.log(this + " is set to 1"); //TODO remve
            }
           
        })
        this._eventBus.addEventListener(EventsEnum.COMPONENTMOVED, () => {
            if(this._isSimulationRunning){
            this.setState(0);
            //this.setImage(this._inactiveImageUrl);
            console.log(this +" is set to 0"); //TODO remove
            //console.log("components stopped moving");
            }
        })
    }

    removeHtml(){
        super.removeHtml();
        //this._eventBus.removeEventListener(EventsEnum.COMPONENTSMOVING); //remove PIR eventlisteners //TODO id meegeven?
        //this._eventBus.removeEventListener(EventsEnum.COMPONENTMOVED);
    }



}