
export { AbstractDisplayComponent }

class AbstractDisplayComponent {
    _isSimulationRunning = true;
    
    /**
     * @param {boolean} clickable: in case of button or touch sensor
     */

    constructor(name, type, x, y, height, width, clickable){
        this.name = name
        this.type = type
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.clickable = clickable
    };


    initComponent(eventBus, htmlClasses) {
      //TODO create componentcanvas
    }

    /**
     * Add a string containting a concatination of css classes to the robot component.
     * @param {string} htmlClasses 
     */
    setHtmlClasses(htmlClasses) {
      this._htmlClasses = htmlClasses;
    }
    
    /**
     * @returns {string} a concatination of css classes of the robot component devided by spaces.
     */
    getHtmlClasses() {
      return this._htmlClasses;
    }

    /**
    * Sets the state of the simulation
    * @param {*} isSimulationRunning true or false depending on if simulation is running or not.
    */
    setIsSimulationRunning(isSimulationRunning){
      this._isSimulationRunning = isSimulationRunning;
    }

    setMultipleAttributesonElement(elem, elemAttributes) {
      Object.keys(elementAttributes).forEach(attribute => {
      elem.setAttribute(attribute, elemAttributes[attribute]);
    });
      
      }
    
    addComponentUtil(pinOptions){
      this.pinOptions = pinOptions
      parent = document.getElementById("sim_container")
      const elementAttributes = {
        id: this.name,
        class: 'sim_element sim_element_'+this.componentType+' draggable',
        style:'top: '+x-5+'px; left: '+y-5+'px;' //TODO 5 ok?
      };

      componentDiv = document.createElement("div")
      setMultipleAttributesonElement(componentDiv, elementAttributes);
      //pinModal, componentName & drag-icon 
      //return chosenpins
    }


    onClick(){
        //propagate clickevent to change state 
    }
}