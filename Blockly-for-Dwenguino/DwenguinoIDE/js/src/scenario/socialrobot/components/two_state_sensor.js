import { RobotComponent } from "./robot_component.js";
import { EventsEnum } from '../scenario_event.js';
import BindMethods from "../../../utils/bindmethods.js"

export { TwoStateSensor };

class TwoStateSensor extends RobotComponent {
    constructor(activeValue = 1, inactiveValue = 0){
        super();
        BindMethods(this);
        this.activeValue = activeValue;
        this.inactiveValue = inactiveValue;
    }

    initComponent(type, optionsMenuTranslationKey, componentName, activeImage, inactiveImage, componentCanvasClass, eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses,firstOfType,activeEventName, passiveEventName){

        this._optionsMenuTranslationKey = optionsMenuTranslationKey;
        this._activeImageUrl = activeImage;
        this._inactiveImageUrl = inactiveImage;
        this.firstOfType = firstOfType;
        this.activeEventName = activeEventName;
        this.passiveEventName = passiveEventName;
        super.initComponent(eventBus, htmlClasses, id, type, componentName, pins, this.inactiveValue, visible, width, height, offsetLeft, offsetTop, inactiveImage, componentCanvasClass + id);
    }

    initComponentFromXml(eventBus, type, optionsMenuTranslationKey, activeImage, inactiveImage, id, xml, firstOfType,activeEventName, passiveEventName){
        this._optionsMenuTranslationKey = optionsMenuTranslationKey;
        this._activeImageUrl = activeImage;
        this._inactiveImageUrl = inactiveImage;
        this.firstOfType = firstOfType;
        this.activeEventName = activeEventName;
        this.passiveEventName = passiveEventName;
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

    initEventListeners(activeEventName, passiveEventName){
        if(this.firstOfType){
        this._eventBus.registerEvent(this.activeEventName);
        this._eventBus.registerEvent(this.passiveEventName);
        }
        this._eventBus.addEventListener(this.activeEventName, ()=> { 
            this.changeState(1);
        });     
        this._eventBus.addEventListener(this.passiveEventName, ()=> { 
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

}