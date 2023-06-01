

import { expect } from "@jest/globals";
import {jest} from '@jest/globals'
import {AnalogOutputSensor}  from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/components/analog_output_sensor";
import { EventBus } from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/event_bus.js"


describe("analog_output_sensor", () => {

    let sensor;
    beforeAll(()=>{
        global.settings = {
            basepath: "localhost:12032/simulator"
        }
        sensor = new AnalogOutputSensor();
        sensor._eventBus = new EventBus();

        sensor._eventBus.dispatchEvent = jest.fn().mockReturnValue(2); //mock value for eventbus function, which is not tested here
    });
  
    test('set state of analog_output_sensor', () =>{
        sensor.setState(23)
        expect(sensor.getState()).toBe(23);
    })
    

test('reset analog_output_sensor', () =>{
    sensor.reset()
    expect(sensor.getState()).toBe(0);
})



});