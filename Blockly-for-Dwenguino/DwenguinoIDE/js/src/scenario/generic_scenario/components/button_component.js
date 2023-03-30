import { AbstractRobotComponent } from "./abstract_robot_component";


class ButtonComponent extends AbstractRobotComponent{


     initComponent(){
        document.getElementById("name").addEventListener("click", onClick);
    }

    onClick(){
        this.pin
    }

    getAllPossiblePins(){
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "SW_N", "SW_E", "SW_S", "SW_W", "SW_C"];
    }
} 