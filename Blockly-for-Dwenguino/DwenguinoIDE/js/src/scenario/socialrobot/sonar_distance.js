import { SocialRobotSonar, SonarEnum } from "./components/sonar.js";
import { RobotComponent } from './components/robot_component.js';
import { EventsEnum } from "./scenario_event.js";


export { SonarDistance }

class SonarDistance {

    constructor(robot, eventbus) {
        this._robot = robot;
        this._eventBus = eventbus;
        this._eventBus.registerEvent(EventsEnum.DISTANCECHANGED);
        this._eventBus.addEventListener(EventsEnum.DISTANCECHANGED, (sonar) => this.updateDistance(sonar));
    }



    updateDistance(sonar) {
        console.log("sonar " + sonar.getId() + " distace is updated");
        let distance = this.calculateDistance(sonar);
        sonar.changeSonarDistance(distance);
        console.log("distance is " + distance);
    }


    // find all components in the right direction, by using the offsetTop and offsetLeft as reference points
    // for example, if the sonar is facing the north side, then check put all components above it in an array called filteredRobotComponents
    // counting starts in upper left corner (0,0)
    calculateDistance(sonar) {

        var minDistance = Infinity;

        //calculate all borders of the sonar component
        var orientation = sonar.getOrientation();
        var leftBorder = sonar.getOffset()['left'];
        var rightBorder = 0; //calculate depending on orientation
        var upperBorder = sonar.getOffset()['top'];
        var lowerBorder = 0; //calculate depending on orientation


        switch (orientation) {
            case SonarEnum.NORTH:
                minDistance = Infinity;
                rightBorder = leftBorder + sonar.getWidth(); //find the right border of the sonar component
                lowerBorder = upperBorder + sonar.getHeight();

                this._robot.forEach((robotComponent) => {

                    //calculate all borders of the robot component
                    console.log(robotComponent);
                    let robotComponentLeftborder = robotComponent.getOffset()['left'];
                    let robotComponentRightborder = robotComponentLeftborder + robotComponent.getWidth();
                    let robotComponentUpperborder = robotComponent.getOffset()['top'];
                    let robotComponentLowerborder = robotComponentUpperborder + robotComponent.getHeight();

                    if (robotComponentUpperborder < upperBorder) { //select all components in the right direction
                        if ((robotComponentLeftborder >= leftBorder && robotComponentLeftborder < rightBorder) || //if component start more to the left but has overlay with the sonar
                            (robotComponent.rightBorder > leftBorder && robotComponentRightborder < rightBorder) ||  //if component end more to the right but has overlay with the sonar
                            (robotComponentLeftborder < leftBorder && robotComponentRightborder > rightBorder)) { //if component is wider than sonar & starts more to the left and ends more to the right

                            if ((robotComponentLowerborder - upperBorder) < minDistance) {
                                minDistance = robotComponentLowerborder - upperBorder;
                            }
                        }
                    }
                });
                return minDistance;
                break;

            case SonarEnum.EAST:
                this._robot.forEach((robotComponent) => {
                    if (robotComponent.offsetLeft > sonar.offsetLeft) {
                        return 24; //TODO
                    }
                });
                break;
            case SonarEnum.SOUTH:
                this._robot.forEach((robotComponent) => {
                    if (robotComponent.offsetTop > sonar.offsetTop) {
                        return 25; //TODO
                    }
                });
                break;
            case SonarEnum.WEST:
                this._robot.forEach((robotComponent) => {
                    if (robotComponent.offsetLeft < sonar.offsetLeft) {
                        return 26; //TODO
                    }
                });
                break;
        }

        //return minDistance;
    }

}