import { SocialRobotSonar, SonarEnum } from SocialRobotSonar;
import { RobotComponent } from './robot_component.js'


export { SonarDistance }

class SonarDistance {

    constructor(robot) {
        this.robot = robot;
        this.filteredRobotComponents = [];
    }

    calculateDistance(sonar, robot) {
        this.getComponentsInDirection(sonar);
        this.getComponentsInView()
    }


    // find all components in the right direction, by using the offsetTop and offsetLeft as reference points
    // for example, if the sonar is facing the north side, then check put all components above it in an array called filteredRobotComponents
    // counting starts in upper left corner (0,0)
    getComponentsInDirection(sonar) { 
        var orientation = sonar.getOrientation();
        var leftBorder =  sonar.getOffset()['left'];
        var rightBorder = 0; //calculate depending on orientation
        var upperBorder =  sonar.getOffset()['top'];
        var lowerBorder = 0; //calculate depending on orientation

        switch (orientation) {
            case SonarEnum.NORTH:
                rightBorder = leftBorder + sonar.getWidth(); //find the right border of the sonar component
                robot.forEach((robotComponent) => {
                    if (robotComponent.getOffset()['top'] < upperBorder) { //select all components in the right direction
                        if(robotComponent.offsetLeft)





                        this.filteredRobotComponents.push(robotComponent);
                    }
                });
                break;
            case SonarEnum.EAST:
                robot.forEach((robotComponent) => {
                    if (robotComponent.offsetLeft > sonar.offsetLeft) {
                        this.filteredRobotComponents.push(robotComponent);
                    }
                });
                break;
            case SonarEnum.SOUTH:
                robot.forEach((robotComponent) => {
                    if (robotComponent.offsetTop > sonar.offsetTop) {
                        this.filteredRobotComponents.push(robotComponent);
                    }
                });
                break;
            case SonarEnum.WEST:
                robot.forEach((robotComponent) => {
                    if (robotComponent.offsetLeft < sonar.offsetLeft) {
                        this.filteredRobotComponents.push(robotComponent);
                    }
                });
                break;
        }
    }

}