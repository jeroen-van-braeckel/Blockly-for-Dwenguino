import { compose } from "redux";

export {RobotComponentsFactory}


class RobotComponentsFactory{

    constructor(boardstate) {
         this._robot = [];
         this.boardState = boardstate;
    }

    createId(type, ){ //e.g. sim_button_4
        number_of_same_type = this._robot.find( component => component.constructor.name == type).length;
        return "sim_" + type + "_" + number_of_same_type; 
    }


    setIsSimulationRunning()
    getRobot(){
        return this._robot;
    }

    resetSocialRobot(){
        for(var i = 0; i < this._robot.length; i++){
            this._robot[i].reset();
          }
    }

    removeAllSocialRobotComponents(){

    }

  /**
   * Update the state and other properties of the robot components when an update of
   * the Dwenguino Boardstate is received.
   * @param {BoardState} boardState 
   */
    updateScenarioState(boardState){
        for(var i = 0; i < this._robot.length; i++){
            this._robot[i].update(boardState);
          }
    }
    

    getRobotComponentById(id){
        component = this._robot.find( component => component.id == id);
        if(component === undefined){
            console.log(`component with id ${id} is not found`)
        }
        else{
            return component;
        }
    }

    removeRobotComponentByType(type){ //remove last added component
        for(var i = this._robot.length -1;i>=0; i--){
            if (this._robot[i].getType() == type){
                this._robot[i].remove();
                return;
            }
        }
    }
    addRobotComponent(type){
      id = this.createId(type);
        switch(type){
                case TypesEnum.SERVO:
                  this.addServo(id);
                  break;
                case TypesEnum.CONTINUOUSSERVO:
                  this.addContinuousServo(id);
                  break;
                case TypesEnum.LED:
                  this.addLed(id);
                  break;
                case TypesEnum.RGBLED:
                  this.addRgbLed(id);
                  break;
                case TypesEnum.LEDMATRIX:
                  this.addLedmatrix(id);
                  break;
                case TypesEnum.LEDMATRIXSEGMENT:
                  this.addLedmatrixSegment(id);
                  break;  
                case TypesEnum.TOUCH:
                  this.addTouchSensor(id);
                  break;
                case TypesEnum.BUTTON:
                  this.addButton(id, boardstate);
                  break;
                case TypesEnum.PIR:;
                  this.addPir(id);
                  break;
                case TypesEnum.SONAR:
                  this.addSonar(id);
                  break;
                case TypesEnum.LCD:
                  this.addLcd(id);
                  break;
                case TypesEnum.SOUND:
                  this.addSoundSensor(id);
                  break;
                case TypesEnum.LIGHT:
                  this.addLightSensor(id);
                  break;
                case TypesEnum.BUZZER:
                  this.addBuzzer(id);
                  break;
              }
    }

    removeRobotComponentById(id){
        try{
            this.getRobotComponentById(id).remove();
        }
        catch(error) {
            console.error("Could not remove robot-component with id: "+id +" - " +error);
        }
    }

    serialize()
    deserialize()
    }
    