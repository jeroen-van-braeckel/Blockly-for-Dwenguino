import { AbstractRobotComponent } from "./abstract_robot_component.js";
import { EventsEnum } from "../scenario_event.js";
import BindMethods from "../../../utils/bindmethods.js"


export { RobotComponent }

class RobotComponent extends AbstractRobotComponent {
    constructor() {
        super();
        BindMethods(this);
    }

    initComponent(eventBus, htmlClasses, id, type, name, pins, state, visible, width, height, offsetLeft, offsetTop, imgSource, canvasId) {
        super.initComponent(eventBus, htmlClasses);
        this._id = id;
        this._type = type;
        this._name = name;
        this._pins = pins;
        this._state = state;
        this._width = width;
        this._height = height;
        this._visible = visible;
        this._offset = {
        "left": offsetLeft,
        "top": offsetTop
        };
        this._image = new Image();
        this._image.src = imgSource;
        this._canvasId = canvasId;
        this._stateUpdated = false;
        this.insertHtml();
        this.toggleVisibility(visible);
    }

    initComponentFromXml(eventBus, imgSource, id, xml) {
        this._id = id;
        this._type = xml.getAttribute('Type');
        this._name = xml.getAttribute('Name');
        this._pins = this.xmlToPins(xml.getAttribute('Pins'));
        this._state = parseInt(xml.getAttribute('State'));
        this._width = parseFloat(xml.getAttribute('Width'));
        this._height = parseFloat(xml.getAttribute('Height'));
        let offsetLeft = parseFloat(xml.getAttribute('OffsetLeft'));
        let offsetTop = parseFloat(xml.getAttribute('OffsetTop'));
        this._offset = {
            "left": offsetLeft,
            "top": offsetTop
        };
        this._visible = true;
        this._image = new Image();
        this._image.src = imgSource;
        this._canvasId = xml.getAttribute('CanvasId');
        this._htmlClasses = xml.getAttribute('Classes');

        super.initComponentFromXml(eventBus);

        this.insertHtml();
        this.toggleVisibility(true);
    }
    
    toString() {
        return this._name;
    }

    /*
                + DwenguinoBlocklyLanguageSettings.translateFrom('simulator',[this.getType()]) 
            + " " 
            + DwenguinoBlocklyLanguageSettings.translateFrom('simulator',["on"])
            + " " 
            + DwenguinoBlocklyLanguageSettings.translateFrom('simulator',[pinsTranslationKey])
            + " " 
            + connectedPinNames
    */

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

    toXml(additionalAttributes = "") {
        let data = '';
        
        data = data.concat("<Item ");
        data = data.concat(" Type='", this.getType().toString(), "'");
        data = data.concat(" Name='", this.toString(), "'");
        data = data.concat(" Id='", this.getId().toString(), "'");
        data = data.concat(" Width='", this.getWidth().toString(), "'");
        data = data.concat(" Height='", this.getHeight().toString(), "'");

        let simId = '#sim_' + this.getType() + this.getId();
        if ($(simId).attr('data-x')) {
            data = data.concat(" OffsetLeft='", parseFloat($(simId).attr('data-x')).toString(), "'");
        } else {
            data = data.concat(" OffsetLeft='", parseFloat(this.getOffset()['left']).toString(), "'");
        }
        if ($(simId).attr('data-y')) {
            data = data.concat(" OffsetTop='", parseFloat($(simId).attr('data-y')).toString(), "'");
        } else {
            data = data.concat(" OffsetTop='", parseFloat(this.getOffset()['top']).toString(), "'");
        }

        data = data.concat(" Pins='", this.pinsToXml(), "'");
        data = data.concat(" State='", this.getState(), "'");
        data = data.concat(" CanvasId='", this.getCanvasId(), "'");
        data = data.concat(" Classes='", this.getHtmlClasses(), "'");

        data = data.concat(additionalAttributes);

        data = data.concat('></Item>');

        return data;
    }

    pinsToXml() {
        return JSON.stringify(this.getPins());
    }

    xmlToPins(xml) {
        return JSON.parse(xml);
    }

    reset() {
        this.setState(0);
        this._stateUpdated = false;
    }

    showDialog() {
        $("#componentOptionsModal").modal('show');
    }

    removeDialog() {
        $('div').remove('#componentOptionsModal');
        $('.modal-backdrop').remove();
    }

    createComponentOptionsModalDialog(headerTitle){
        this.removeDialog();
    
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

    //pinName: digitalPin & analogPin -> keys in the pins object

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

    getAllPossiblePins() {
        return [];
    }

    getId() {
        return this._id;
    }

    getType() {
        return this._type;
    }

    setWidth(width) {
        this._width = width;
    }

    getWidth() {
        return this._width;
    }

    setHeight(height) {
        this._height = height;
    }

    getHeight() {
        return this._height;
    }

    setOffset(offset) {
        this._offset = offset;
    }

    getOffset() {
        return this._offset;
    }

    setImage(image){
        this._image.src = image;
    }

    getImage() {
        return this._image;
    }

    setPin(pinConnectedPin, pinName="digitalPin") {
        this.getPins()[pinName] = pinConnectedPin;
        this.setComponentName();
    }

    getPin(pinName="digitalPin") {
         return this._pins[pinName];
    }

    getPins() {
        return this._pins;
    }

    setPins(pins) {
        this._pins = pins;
    }

    setState(state) {
        this._state = state;
        this._stateUpdated = true;
       // this._eventBus.dispatchEvent(EventsEnum.SAVE);
    }

    getState() {
        return this._state;
    }

    isStateUpdated() {
        return this._stateUpdated;
    }

    getCanvasId() {
        return this._canvasId;
    }
}