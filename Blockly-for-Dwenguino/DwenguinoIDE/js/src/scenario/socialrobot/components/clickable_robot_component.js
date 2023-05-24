import { BinaryInputRobotComponent } from "./binary_input_robot_component";
import { EventsEnum } from '../scenario_event.js';


export { ClickableRobotComponent };

class ClickableRobotComponent extends BinaryInputRobotComponent {


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