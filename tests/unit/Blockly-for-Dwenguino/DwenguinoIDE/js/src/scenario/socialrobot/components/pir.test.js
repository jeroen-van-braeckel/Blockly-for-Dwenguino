
import { expect } from "@jest/globals";
import {jest} from '@jest/globals'
import {SocialRobotPir }  from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/components/pir";

import { EventBus } from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/event_bus.js"


describe("pir", () => {

    let pir;
    beforeAll(()=>{
        global.settings = {
            basepath: "localhost:12032/simulator"
        }
        pir = new SocialRobotPir();
        //pir._image = new Image();
        //pir._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on_red_light.png`;
        //pir._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`;
        pir._eventBus = new EventBus();

        pir._eventBus.dispatchEvent = jest.fn().mockReturnValue(23); //mock value for eventbus function, which is not tested here
    });
  

test('change digital_output_pir state to active', () =>{
    pir.changeState(1)
    expect(pir.getState()).toBe(1);
    expect(pir.getImage().src).toBe(`${settings.basepath}DwenguinoIDE/img/socialrobot/pir_on_red_light.png`);
    
})


test('change digital_output_pir state to inactive', () =>{
    pir.changeState(0)
    expect(pir.getState()).toBe(0);
    expect(pir.getImage().src).toBe(`${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`);
    
})

test('reset digital_output_pir', () =>{
    pir.reset()
    expect(pir.getState()).toBe(0);
    expect(pir.getImage().src).toBe(`${settings.basepath}DwenguinoIDE/img/socialrobot/pir_off.png`);
    
})
});