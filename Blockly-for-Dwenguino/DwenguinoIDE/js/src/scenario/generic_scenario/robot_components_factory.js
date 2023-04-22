import { compose } from "redux";
import { TypesEnum } from "../socialrobot/robot_components_factory";
import { Button } from "./components/button";
import { RobotComponent } from "./components/robot_component";
import { event } from "jquery";

export {RobotComponentsFactory}


class RobotComponentsFactory{

    constructor(boardstate,logger, eventBus) {
         this._robot = [];
         this.boardState = boardstate;
         this.logger = logger;
         this.eventBus = eventBus;
    }

    createId(type){ //e.g. sim_button_4
      if(this._robot === undefined || this._robot.length == 0){
       return "sim_" + type + "_" + "1"; 
    }
    else{
        let number_of_same_type = this._robot.filter( component => component.constructor.name.toLowerCase() == type).length +1;
        return "sim_" + type + "_" + number_of_same_type; 
    }
  }


    setIsSimulationRunning(){}

    getRobot(){
        return this._robot;
    }

    resetGenericRobot(){
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
            if (this._robot[i].getType().toLowerCase() === type){
                this._robot.splice(i,1);
                return;
            }
        }
    }


    addRobotComponent(type){
      var id = this.createId(type);
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
                  let knop = new Button(id,this.boardState);
                  this._robot.push(knop);
                  this.logger.recordEvent(this.logger.createEvent(EVENT_NAMES.addRobotComponent, TypesEnum.BUTTON));


                  let pinMapping = {
                    1: "SW_S",
                    2: "SW_W",
                    3: "SW_N",
                    4: "SW_E",
                    5: "SW_C"
                  }
                  let pins = {};
                  if (id >= 1 && id <= 5){
                    pins[SocialRobotButton.pinNames.digitalPin] = pinMapping[id];
                  }else{
                    pins[SocialRobotButton.pinNames.digitalPin] = pin + id - 1;
                  }

                  knop.initDisplayComponent(this.eventBus,  htmlClasses='sim_canvas button_canvas', id,TypesEnum.BUTTON, pins, 

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

    serialize(){}
    deserialize(){}

    draw(){
      for(let i=0; i< this._robot.length; i++){
        console.log(this._robot[i]); //TODO verwijder
        this._robot[i].draw();
      }
    }
    }
    