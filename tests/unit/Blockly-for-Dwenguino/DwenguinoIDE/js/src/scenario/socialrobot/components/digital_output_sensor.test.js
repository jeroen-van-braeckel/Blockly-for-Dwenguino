

import { expect } from "@jest/globals";
import {jest} from '@jest/globals'
import {DigitalOutputSensor}  from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/components/digital_output_sensor";

import { EventBus } from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/event_bus.js"


describe("digital_output_sensor", () => {

    let sensor;
    beforeAll(()=>{
        global.settings = {
            basepath: "localhost:12032/simulator"
        }
        sensor = new DigitalOutputSensor();
        sensor._image = new Image();
        sensor._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on_red_light.png`;
        sensor._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`;
        sensor._eventBus = new EventBus();

        sensor._eventBus.dispatchEvent = jest.fn().mockReturnValue(23); //mock value for eventbus function, which is not tested here
    });
  

test('change digital_output_sensor state to active', () =>{
    sensor.changeState(1)
    expect(sensor.getState()).toBe(1);
    expect(sensor.getImage().src).toBe(`${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on_red_light.png`);
    
})


test('change digital_output_sensor state to inactive', () =>{
    sensor.changeState(0)
    expect(sensor.getState()).toBe(0);
    expect(sensor.getImage().src).toBe(`${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`);
    
})

test('reset digital_output_sensor', () =>{
    sensor.reset()
    expect(sensor.getState()).toBe(0);
    expect(sensor.getImage().src).toBe(`${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`);
    
})

});