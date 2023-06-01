
import { event } from 'jquery';
import { EventsEnum } from './scenario_event.js';

import { SoundComponent } from './components/sound_component.js';
import { SocialRobotLedMatrix } from './components/ledmatrix.js';
import { SocialRobotLedMatrixSegment } from './components/ledmatrix_segment.js';
import { SocialRobotRgbLed } from './components/rgbled.js';
import { SocialRobotLed } from './components/led.js';
import { TypesEnum } from './robot_components_factory.js';
import { EnvironmentLamp } from './components/environment_elements/environment_lamp.js';

export { EnvironmentStateManager, SoundStateManager, LightStateManager }

//class for all sensors which react to the overall state of the simulation environment, where multiple triggers are possible
//e.g. light can be produced by multiple sources, one active lightsource is enough to set the overall state to active
class EnvironmentStateManager {

    constructor(eventBus, activeEventName, inactiveEventname) {
        this._eventBus = eventBus;
        this._activeEventName = activeEventName;
        this._inactiveEventname = inactiveEventname;
        this._overallState = 0;
    }

    update(robot) { //check all components in the map to see if one of them has an active state
        this.getTriggerComponents(robot);
        //console.log(this._triggerComponents);
        this._overallState = this.checkState();
        this.sendEvent();
    }

    checkState() { //default, most sensors need a sensor-specific implemnetation
        return [...this._triggerComponents.values()].some((component) => component.state() > 0);
    }

    sendEvent() {
        if (this._overallState) {
            try {
                this._eventBus.dispatchEvent(this._activeEventName);
            }
            catch (error) {
            }
        }
        else {
            try {
                this._eventBus.dispatchEvent(this._inactiveEventname); SoundStateManager
            }
            catch (error) {
            }
        }
    }
}

class SoundStateManager extends EnvironmentStateManager {

    constructor(eventBus, activeEventName, inactiveEventname) {
        super(eventBus, activeEventName, inactiveEventname);
    }

    checkState() { //check all components in the map to see if one of them has an active state
        return [...this._triggerComponents.values()].some((component) => component.getAudioPlaying() > 0);
    }

    getTriggerComponents(robot) {
        this._triggerComponents = robot.filter(component => component instanceof SoundComponent);
    }
}

class LightStateManager extends EnvironmentStateManager {

    constructor(eventBus, activeEventName, inactiveEventname) {
        super(eventBus, activeEventName, inactiveEventname);
    }

    checkState() { //check all components in the map to see if one of them has an active state
        let lightStates = [];

        //every light component has a different state, led has a boolean value, led
        this._triggerComponents.forEach(component => {
            switch (component.getType()) {
                case TypesEnum.LED:
                    lightStates.push(parseInt(component.getState()));
                    break;
                case TypesEnum.LEDMATRIX:
                    lightStates = lightStates.concat(component.getState());
                    break;
                case TypesEnum.LEDMATRIXSEGMENT:
                    let state = component.getState();
                    if (typeof state !== 'undefined' && state != 0) { //check if led matrix is generating light for the lightsensor
                        lightStates = lightStates.concat(state.flat().flat()); //hack to be usable with "clear LED matrix" an "clear LED matrix <number>"-blocks which have different structures

                    }
                    break;
                case TypesEnum.RGBLED:
                    lightStates = lightStates.concat(component.getState());
                    break;
                case TypesEnum.LAMP:
                    lightStates.push(component.getState());
                    break;
            }

        });
        if (lightStates.reduce((accumulator, currentValue) => accumulator + currentValue, //check for all states in the lightstates-array if one has an active state
            0) > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }

    getTriggerComponents(robot) {
        this._triggerComponents = robot.filter(component => component instanceof SocialRobotLed || component instanceof SocialRobotLedMatrix || component instanceof SocialRobotLedMatrixSegment || component instanceof SocialRobotRgbLed ||component instanceof EnvironmentLamp);
    }
}
