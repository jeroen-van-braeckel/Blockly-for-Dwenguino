import { AbstractDisplayComponent } from "./abstract_display_component";

export { DisplayRenderer }

class DisplayRenderer {
    _isSimulationRunning = true;
    displayComponents = [] //in volgorde van hoe elementen zijn toegevoegd 



    constructor(){
      
    };

    initCanvas(){

    }

    serialize(){//componentnames & positions needed
      //TODO
    }

    deserialize(){
      //TODO
    }

    addComponent(componentType){
      //TODO
      //
      //newComponent = new DisplayComponent(x,y,...)
      this.displayComponents.push(newComponent)
    }

    removeComponent(name){ //name has to be unique
      try {
        rederer.disp.filter(component => component.name !=name)
      }
      catch{
        console.log("could not remove "+ name+"-component")
      }
      
    }

    removeComponent(type){ //remove last added component of type
      //TODO
    }

}