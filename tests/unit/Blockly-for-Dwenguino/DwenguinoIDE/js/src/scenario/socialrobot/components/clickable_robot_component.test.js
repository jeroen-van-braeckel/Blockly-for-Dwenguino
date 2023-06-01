


import { beforeEach, expect, jest, test, describe} from '@jest/globals'
import {ClickableRobotComponent}  from "../../../../../../../../../Blockly-for-Dwenguino/DwenguinoIDE/js/src/scenario/socialrobot/components/clickable_robot_component";


describe('clickable_robot_component', () => {
	let component;
	let events = {};

	beforeEach(() => {
		component = new ClickableRobotComponent(1,0);

		// Empty our events before each test case
		events = {};

		// Define the addEventListener method with a Jest mock function
		document.addEventListener = jest.fn((event, callback) => {
      		events[event] = callback;
    	});
      
       
	});

	test('Test Keypress fires callback', () => {
        component.setState(0);
        // Watch the function that gets called when our event fires
        jest.spyOn(component, 'click');
        
        // A method inside of our dependency that sets up event listeners
		component.setupEvents();

		// Fire the keypress event
		events.click();
        
       
        expect(component.getState()).ToBe(1);
    
	});
});