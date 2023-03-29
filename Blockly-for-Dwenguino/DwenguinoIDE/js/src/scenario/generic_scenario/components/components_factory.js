import { TypesEnum } from "../types_enum";

export { ComponentsFactory }


/**
 * This factory produces robot components of certain types.
 * @param {SocialRobot} robot 
 */
class ComponentsFactory {
  logger = null;
  robotcomponents = null;
  /**
   * 
   * @constructs
   * @param {DwenguinoScenarioUtils} scenarioUtils 
   * @param {DwenguinoEventLogger} logger 
   * @param {EventBus} eventBus 
   */
  constructor(scenarioUtils, logger, eventBus) {
    this.logger = logger;
    this._eventBus = eventBus;
    this.robotcomponents = [];
  }
/**
 * Sets the state of the simulation
 * @param {*} isSimulationRunning true or false depending on if simulation is running or not.
 */
  setIsSimulationRunning(isSimulationRunning){
    for(var i = 0; i < this._robot.length; i++){
      this._robot[i].setIsSimulationRunning(isSimulationRunning);
    }
  }


  addComponent(type){
    switch(type){
        case TypesEnum.BUTTON:
            return new ButtonComponent();
            break;
        case TypesEnum.SERVO:
            return new ServoComponent();
            break;
        //TODO aanvullen voro elke soort component
    }
  }

  removeComponent(name){
    
  }
}
