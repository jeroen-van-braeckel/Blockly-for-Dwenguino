import DwenguinoSimulationScenario from "../dwenguino_simulation_scenario.js"
import DwenguinoBoardSimulation from "../dwenguino_board_simulation.js";
import { Display_Renderer } from "./display/display_renderer.js";
import { EventPublisher } from "./event_publisher.js";

class GenericScenario  extends DwenguinoSimulationScenario {

    
    
    constructor() {
        super();
        this.renderer = new DisplayRenderer()
        this.componentsfactory = new ComponentsFactory()
        this.eventPublisher = new EventPublisher()
        BindMethods(this);
    }

    addComponent(type){
        this.componentsfactory.addComponent(type);
        this.renderer.addComponent(type);
        this.eventPublisher.addSubscriber(type);
    }

    removeComponentByName(name){
        this.componentsfactory.removeComponent(name);
        this.renderer.removeComponent(name);
    }

    removeComponentByType(type){
        this.componentsfactory.removeComponentByOrder(type);
        this.renderer.removeComponentByOrder(type);
    }
}