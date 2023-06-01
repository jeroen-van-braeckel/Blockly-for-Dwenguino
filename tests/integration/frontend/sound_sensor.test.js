

import { expect } from "@jest/globals";
import {jest} from '@jest/globals'
import {SoundsoundSensor}  from "../../../../Blockly-for-Dwenguino/Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/components/sound_sensor"
import {soundcomponent}  from "../../../../Blockly-for-Dwenguino/Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/components/sound_component"
import { EventBus } from "../../../../Blockly-for-Dwenguino/Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/event_bus"


describe("intergration test digital soundSensor", () => {

    let soundSensor;
    let soundcomponent;
    let eventBus = new EventBus();
    
    beforeAll(()=>{
        global.settings = {
            basepath: "localhost:12032/simulator"
        }
        
        soundSensor = new SoundsoundSensor();
        soundSensor.initComponent("TypesEnum.SOUND",
            ['soundOptions'],
            'sound sensor',
            `${settings.basepath}DwenguinoIDE/img/socialrobot/sound_sensor.png`,
            `${settings.basepath}DwenguinoIDE/img/socialrobot/sound_sensor.png`,
            'sim_sound_canvas' + 1,
            eventBus,
            1,
            {digitalPin: 'SOUND_1'},
            0,
            true,
            20,
            20,
            0,
            0,
            '',true, EventsEnum.AUDIOSTARTED, EventsEnum.AUDIOSTOPPED);
soundcomponent = new soundcomponent();
    }   
    )});
  

test('change digital_output_soundSensor state to active by generating sound', () =>{
    soundSensor.setState(0); //set state to inactive to check if the state really changed
    expect(soundSensor.getState()).toBe(0);
    soundcomponent.setAudioStarted(true); //generate sound
    expect(soundSensor.getState()).toBe(1);
})


test('change digital_output_soundSensor state to passive by stopping sound', () =>{
    soundSensor.setState(1); //set state to active to check if the state really changed
    expect(soundSensor.getState()).toBe(1);
    soundcomponent.setAudioStarted(false); //send event that soundcomponent stopped playing sound
    expect(soundSensor.getState()).toBe(0);
})

//todo geen soundsensor meer, wel nog geluid afspelen en pin checken
