import { SocialRobotSonar, SonarEnum } from "./components/sonar.js";
import { RobotComponent } from './components/robot_component.js';
import { EventsEnum } from "./scenario_event.js";
import { root } from "postcss";


export { SonarDistance }

class SonarDistance {

    constructor(robot, eventbus) {
        this._robot = robot;
        this._eventBus = eventbus;
        this._eventBus.registerEvent(EventsEnum.DISTANCECHANGED);
        this._eventBus.addEventListener(EventsEnum.DISTANCECHANGED, (sonar) => this.updateDistance(sonar));
        this._eventBus.registerEvent(EventsEnum.COMPONENTSMOVING);
        this._eventBus.addEventListener(EventsEnum.COMPONENTSMOVING, () => this.updateAllDistances());
    }



    updateDistance(sonar) {
        let distance = this.calculateDistance(sonar);
        sonar.changeSonarDistance(distance);
        console.log("distance from sonar " + sonar.getId() + " is " + distance);
    }

    updateAllDistances(){
        this._robot.forEach( (robotComponent) => {
            if(robotComponent.constructor.name="SocialRobotSOnar"){
            this.updateAllDistances(robotComponent);
        }});
}


    // find all components in the right direction, by using the offsetTop and offsetLeft as reference points
    // for example, if the sonar is facing the north side, then check put all components above it in an array called filteredRobotComponents
    // counting starts in upper left corner (0,0)
    calculateDistance(sonar) {

        var minDistance = Infinity;


        //calculate all borders of the sonar component
        var orientation = sonar.getOrientation();

        /*var leftBorder = sonar.getOffset()['left'];
        var rightBorder = 0; //calculate depending on orientation
        var upperBorder = sonar.getOffset()['top'];
        var lowerBorder = 0; //calculate depending on orientation
*/
        var sonarCanvas = document.getElementById(sonar.getCanvasId());
        var leftBorder = sonarCanvas.getBoundingClientRect()['left'];
        var rightBorder = sonarCanvas.getBoundingClientRect()['right'];
        var upperBorder = sonarCanvas.getBoundingClientRect()['top'];
        var lowerBorder = sonarCanvas.getBoundingClientRect()['bottom'];

        switch (orientation) {
            case SonarEnum.NORTH:
                this._robot.forEach((robotComponent) => {
                    var canvasId = this.getCanvasId(robotComponent);
                    robotComponent = document.getElementById(canvasId); //get html-element to use getBoundingClientRect() function
                    
                    //save all borders of the robotcomponent
                    let robotComponentLeftBorder = robotComponent.getBoundingClientRect()['left'];
                    let robotComponentRightBorder = robotComponent.getBoundingClientRect()['right'];
                    let robotComponentUpperBorder = robotComponent.getBoundingClientRect()['top'];
                    let robotComponentLowerBorder = robotComponent.getBoundingClientRect()['bottom'];

                    if (robotComponentUpperBorder < upperBorder) { //select all components in the right direction, same component as sonar does not qualify
                        if ((robotComponentLeftBorder >= leftBorder && robotComponentLeftBorder < rightBorder) || //if component start more to the left but has overlay with the sonar
                            (robotComponentRightBorder > leftBorder && robotComponentRightBorder < rightBorder) ||  //if component end more to the right but has overlay with the sonar
                            (robotComponentLeftBorder < leftBorder && robotComponentRightBorder > rightBorder)) { //if component is wider than sonar & starts more to the left and ends more to the right

                            if ((upperBorder - robotComponentLowerBorder) < minDistance) {
                                console.log(robotComponent);
                                minDistance = upperBorder - robotComponentLowerBorder;
                            }
                        }
                    }
                });
                return minDistance;
                break;

            case SonarEnum.EAST:

                this._robot.forEach((robotComponent) => {
                    var canvasId= this.getCanvasId(robotComponent);
                    robotComponent = document.getElementById(canvasId); //get html-element to use getBoundingClientRect() function
                    
                    //save all borders of the robotcomponent
                    let robotComponentLeftBorder = robotComponent.getBoundingClientRect()['left'];
                    let robotComponentRightBorder = robotComponent.getBoundingClientRect()['right'];
                    let robotComponentUpperBorder = robotComponent.getBoundingClientRect()['top'];
                    let robotComponentLowerBorder = robotComponent.getBoundingClientRect()['bottom'];

                    if (robotComponentRightBorder > rightBorder) { //select all components in the right direction
                        if ((robotComponentUpperBorder <= upperBorder && robotComponentLowerBorder < lowerBorder && robotComponentLowerBorder > upperBorder) || //if component starts above the sonar but has overlay with the sonar
                        (robotComponentLowerBorder > upperBorder && robotComponentUpperBorder > upperBorder && robotComponentUpperBorder < lowerBorder) ||  //if component ends below but has overlay with the sonar
                            (robotComponentUpperBorder < upperBorder && robotComponentLowerBorder > lowerBorder)) { //if component is wider than sonar & starts more to the left and ends more to the right

                            if (( robotComponentLeftBorder - rightBorder) < minDistance) {
                                console.log(robotComponent);
                                minDistance = robotComponentLeftBorder - rightBorder;
                            }
                        }
                    }
                });
                return minDistance;
                break;


            case SonarEnum.SOUTH: 
            this._robot.forEach((robotComponent) => {
                var canvasId = this.getCanvasId(robotComponent);
                robotComponent = document.getElementById(canvasId); //get html-element to use getBoundingClientRect() function
                
                //save all borders of the robotcomponent
                let robotComponentLeftBorder = robotComponent.getBoundingClientRect()['left'];
                let robotComponentRightBorder = robotComponent.getBoundingClientRect()['right'];
                let robotComponentUpperBorder = robotComponent.getBoundingClientRect()['top'];
                let robotComponentLowerBorder = robotComponent.getBoundingClientRect()['bottom'];

                if (robotComponentLowerBorder > lowerBorder) { //select all components in the right direction
                    if ((robotComponentLeftBorder >= leftBorder && robotComponentLeftBorder < rightBorder) || //if component start more to the left but has overlay with the sonar
                        (robotComponentRightBorder > leftBorder && robotComponentRightBorder < rightBorder) ||  //if component end more to the right but has overlay with the sonar
                        (robotComponentLeftBorder < leftBorder && robotComponentRightBorder > rightBorder)) { //if component is wider than sonar & starts more to the left and ends more to the right

                        if ((robotComponentUpperBorder - lowerBorder) < minDistance) {
                            console.log(robotComponent);
                            minDistance = robotComponentUpperBorder - lowerBorder;
                        }
                    }
                }
            });
            return minDistance;
            break;
            case SonarEnum.WEST:
                this._robot.forEach((robotComponent) => {
                    var canvasId= this.getCanvasId(robotComponent);
                    robotComponent = document.getElementById(canvasId); //get html-element to use getBoundingClientRect() function
                    
                    //save all borders of the robotcomponent
                    let robotComponentLeftBorder = robotComponent.getBoundingClientRect()['left'];
                    let robotComponentRightBorder = robotComponent.getBoundingClientRect()['right'];
                    let robotComponentUpperBorder = robotComponent.getBoundingClientRect()['top'];
                    let robotComponentLowerBorder = robotComponent.getBoundingClientRect()['bottom'];

                    if (robotComponentLeftBorder < leftBorder) { //select all components in the right direction
                        if ((robotComponentUpperBorder <= upperBorder && robotComponentLowerBorder < lowerBorder && robotComponentLowerBorder > upperBorder) || //if component starts above the sonar but has overlay with the sonar
                            (robotComponentLowerBorder > upperBorder && robotComponentUpperBorder > upperBorder && robotComponentUpperBorder < lowerBorder) ||  //if component ends below but has overlay with the sonar
                            (robotComponentUpperBorder < upperBorder && robotComponentLowerBorder > lowerBorder)) { //if component is wider than sonar & starts more to the left and ends more to the right

                            if (( leftBorder - robotComponentRightBorder  ) < minDistance) {
                                console.log(robotComponent);
                                minDistance =  leftBorder - robotComponentRightBorder;
                            }
                        }
                    }
                });
                return minDistance;
                break;

        }

        //return minDistance;
    }

    getCanvasId(robotComponent){
        try{
            return robotComponent.getCanvasId()
        }
        catch{
            if (robotComponent.constructor.name === 'SocialRobotLcd') {
                return 'sim_element_lcd_img'//TODO voor componenten die niet afleiden van abstractrobotcomponent
            }
            else {
                console.log("unknown component");
            }
        }
    }

}