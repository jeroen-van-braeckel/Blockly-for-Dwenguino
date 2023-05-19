
import { EventsEnum } from '../scenario_event.js'
import { RobotComponent } from './robot_component.js';

export { SoundComponent}

class SoundComponent extends RobotComponent {

    constructor(){
        super();
        this.audioStarted = false;
    }
    

    setAudioStarted(started){
        if(started){
            this.audioStarted = true;
            try{
                this._eventBus.dispatchEvent(EventsEnum.AUDIOSTARTED);
              }
              catch(error){
                //console.error("pir is not attached: " + error); 
              }
        }
        else{
            this.audioStarted = false;
            try{
                this._eventBus.dispatchEvent(EventsEnum.AUDIOSTOPPED);
              }
              catch(error){
                //console.error("pir is not attached: " + error); 
              }
        }
    }
    
    getAudioStarted(){
        return this.audioStarted;
    }
}
