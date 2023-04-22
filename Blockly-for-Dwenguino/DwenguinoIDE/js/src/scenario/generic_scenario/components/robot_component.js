import { AbstractRobotComponent } from "../../socialrobot/components/abstract_robot_component";
import { DisplayComponent } from "../display/abstract_display_component";

export { RobotComponent }

class RobotComponent{


    constructor(id){
        this._id = id;
        this._image = new Image();
    }

    reset(){
        this.setState(0);
        this._stateUpdated = false;
    }

    initComponent(){}
    setIsSimulationRunning(){}
    toString(){}
    getAllPossiblePins(){}
    getId(){
        return this._id;
    }
    setPin(){}
    getPin(){}
    getPins(){}
    setPins(){}
    setState(){
        this._state = state;
        this._stateUpdated = true;
    }

    getState(){
        return this._state;
    }
    getType(){
        return this.constructor.name;
    }

    isStateUpdated(){
        return this._stateUpdated();
    }

    update(){}


    removeHtml(parent){ //remove all components within child
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    draw(){//implement in component classes
        console.debug('draw does not have an implementation in the component class');
        this.insertHtml();
    }


    setComponentName(){
        let connectedPinNames = "";
        for (const [key, value] of Object.entries(this._pins)){
            connectedPinNames += `(${key}:${value})\n`
        }
        let pinsTranslationKey = "pin";
        if (Object.entries(this._pins).length > 1){
            pinsTranslationKey = "pins";
        }
        let componentTitleElement = $("#component_title_" + this.getType() + "_" + this.getId());
        componentTitleElement.html(connectedPinNames);
        document.getSelection().removeAllRanges();
    }
    
    insertHtml(optionsLabel = "options") {
        
        $('#sim_container').append("<div id='sim_" + this.getType() + this.getId() 
            + "' class='sim_element sim_element_" 
            + this.getType() 
            + " draggable'><div>" 
            + "<span id='component_title_" + this.getType() + "_" + this.getId() + "'>"
            + "</span>"
            + "</div></div>");
        // First add the element at position 0, 0
        $('#sim_' + this.getType() + this.getId()).css('top', 0 + 'px');
        $('#sim_' + this.getType() + this.getId()).css('left', 0 + 'px');
        // Now move the element according to its offset by using css transform
        $('#sim_' + this.getType() + this.getId()).css(
            'transform',
            "translate(" + this.getOffset()['left'] + "px, " +  this.getOffset()['top'] + "px)"
            )
        // add the offset to the data-x and data-y attributes to let the draggable system know where the element is now
        $('#sim_' + this.getType() + this.getId()).attr("data-x", this.getOffset()['left']);
        $('#sim_' + this.getType() + this.getId()).attr("data-y", this.getOffset()['top']);
        $('#sim_' + this.getType() + this.getId()).append("<canvas id='" + this.getCanvasId() + "' class='" + this.getHtmlClasses() + "'></canvas>");
    
        let simSensor = document.getElementById('sim_'+this.getType() + this.getId());

        if (simSensor){
            simSensor.addEventListener('mouseup', (event) => {
                let offset = {
                    "left": event.currentTarget.getAttribute("data-x"),
                    "top": event.currentTarget.getAttribute("data-y")
                    };
                this.setOffset(offset);
            })
    
            simSensor.addEventListener('dblclick', () => { 
                this.createComponentOptionsModalDialog(optionsLabel);
                this.showDialog();
            });
        }
       

        this.setComponentName();
    }

    removeHtml() {
        $('#sim_' + this.getType() + this.getId()).remove();
    }

    toggleVisibility(visible) {
        if (visible) {
            $('#sim_' + this.getType() + this.getId()).css('visibility', 'visible');
        } else {
            $('#sim_' + this.getType() + this.getId()).css('visibility', 'hidden');
        }
    }



//#region pinmodal
    showDialog() {
        $("#componentOptionsModal").modal('show');
    }

    removeDialog() {
        $('div').remove('#componentOptionsModal');
        $('.modal-backdrop').remove();
    }

    createComponentOptionsModalDialog(headerTitle){
        removeDialog();
    
        $('#db_body').append('<div id="componentOptionsModal" class="modal fade" role="dialog"></div>');
        $('#componentOptionsModal').append('<div id="componentOptionsModalDialog" class="modal-dialog"></div>');
    
        $('#componentOptionsModalDialog').append('<div id="componentOptionsModalContent" class="modal-content"></div>');
    
        $('#componentOptionsModalContent').append('<div id="componentOptionsModalHeader" class="modal-header"></div>');
        $('#componentOptionsModalContent').append('<div id="componentOptionsModalBody" class="modal-body container"></div>');
        $('#componentOptionsModalContent').append('<div id="componentOptionsModalFooter" class="modal-footer"></div>');
    
        $('#componentOptionsModalHeader').append('<h4 class="modal-title">'+ headerTitle +'</h4>');
        $('#componentOptionsModalHeader').append('<button type="button" class="close" data-dismiss="modal">&times;</button>');

        for (let key in this.getPins()){
            this.createPinOptionsInModalDialog(key);
        }
        

    }    
    createPinOptionsInModalDialog(pinName){
        $('#componentOptionsModalBody').append('<div id="componentOptionsPin' + pinName + '" class="ui-widget row mb-4">');
        $('#componentOptionsPin' + pinName).append('<div class="col-md-2">' + DwenguinoBlocklyLanguageSettings.translate([ "pinNames", pinName])+'</div>');
        $('#componentOptionsPin' + pinName).append('<div id="pins_' + pinName +'" class="col-md-10"></div>');

        let possiblePins = this.getAllPossiblePins();
        for(let pin = 0; pin < possiblePins.length; pin++){
            $('#pins_' + pinName).append('<button type="button" id=pin' + pinName + possiblePins[pin]+' name='+possiblePins[pin]+' class="col-md-auto ml-2 mb-2 pinButton option_button_enabled">'+possiblePins[pin]+'</button>');
            if(this.getPin(pinName) == possiblePins[pin]){
                $('#pin' + pinName + possiblePins[pin]).addClass('option_button_selected');
            }else if(Object.values(this.getPins()).includes(possiblePins[pin])){
                $('#pin' + pinName + possiblePins[pin]).addClass('option_button_disabled');
            }

            let pinButton = document.getElementById('pin'+ pinName + possiblePins[pin]);

            pinButton.addEventListener('click', () => { 
                let newPin = pinButton.name;
                this.setPin(newPin, pinName);
                // Remove all selected labels from buttons within same pin type
                $('#pins_' + pinName + ' .pinButton').removeClass('option_button_selected');
                // Add selected label to clicked button
                pinButton.classList.add('option_button_selected');
                // Iterate all other pins that can be connected.
                // remove the disabled class from all other buttons
                // add the disabled class to the buttons in the other pin groups.
                for (let key in this.getPins()){
                    if (key != pinName){
                        $('#pins_' + key + ' .pinButton').removeClass('option_button_disabled'); // enable all buttons for pin type key
                        $('#pin' + key + newPin).addClass('option_button_disabled'); // disable button for newPin fo the key pin type
                    }
                }
                this._eventBus.dispatchEvent(EventsEnum.SAVE);                
            });
        }
    }
    //#endregion
}

Object.assign(RobotComponent.prototype, DisplayComponent); //MIXIN to mimic multiple inheritance
   