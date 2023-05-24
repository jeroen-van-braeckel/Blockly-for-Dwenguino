import { RobotComponent } from "./robot_component.js";
import { Button } from '../../utilities/button.js';
import { EventsEnum } from '../scenario_event.js';
import BindMethods from "../../../utils/bindmethods.js"

export { BinaryInputRobotComponent };

class BinaryInputRobotComponent extends RobotComponent {
    constructor(activeValue = 1, inactiveValue = 0){
        super();
        BindMethods(this);
        this.activeValue = activeValue;
        this.inactiveValue = inactiveValue;
    }

    initComponent(type, buttonInputLabelTranslationKey, optionsMenuTranslationKey, componentName, activeImage, inactiveImage, componentCanvasClass, eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses){

        this._optionsMenuTranslationKey = optionsMenuTranslationKey;
        this._activeImageUrl = activeImage;
        this._inactiveImageUrl = inactiveImage;
        super.initComponent(eventBus, htmlClasses, id, type, componentName, pins, this.inactiveValue, visible, width, height, offsetLeft, offsetTop, inactiveImage, componentCanvasClass + id);
    }

    initComponentFromXml(eventBus, type, buttonInputLabelTranslationKey, optionsMenuTranslationKey, activeImage, inactiveImage, id, xml){
        this._optionsMenuTranslationKey = optionsMenuTranslationKey;
        this._activeImageUrl = activeImage;
        this._inactiveImageUrl = inactiveImage;
        super.initComponentFromXml(eventBus, inactiveImage, id, xml);
    }

    insertHtml(){
        super.insertHtml(DwenguinoBlocklyLanguageSettings.translate([this._optionsMenuTranslationKey]));
    }

    removeHtml(){
        super.removeHtml()
    }

    reset(){
        this.setImage(this._inactiveImageUrl);
        this.setState(this.inactiveValue);
    }


    /* TODO abstraction of lightsensor and pir doesnt work -> fix

    initEventListeners(active_eventname, passive_eventname){
        this._eventBus.registerEvent(active_eventname);
        this._eventBus.registerEvent(passive_eventname);
       
        this._eventBus.addEventListener(active_eventname, ()=> { 
            this.changeState(1);
        });     
        this._eventBus.addEventListener(passive_eventname, ()=> { 
            this.changeState(0);
        }); 
    }

    changeState(state){
        console.log(this.constructor.name + " had been set to " + state);
           if(state != this.getState()){
            let newImageSource = state ? this._activeImageUrl : this._inactiveImageUrl;
            this.setImage(newImageSource);
            this.setState(state);
            this._eventBus.dispatchEvent(EventsEnum.SAVE);
           }
        
    }
    */



}