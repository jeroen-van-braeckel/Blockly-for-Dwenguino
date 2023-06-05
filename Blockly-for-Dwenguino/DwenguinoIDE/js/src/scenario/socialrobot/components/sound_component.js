
import { EventsEnum } from '../scenario_event.js'
import { RobotComponent } from './robot_component.js';

export { SoundComponent}

class SoundComponent extends RobotComponent {

    constructor(){
        super();
        this.audioPlaying = false;
    }

    
    

    setAudioPlaying(started){
      
        if(started){
            this.audioPlaying = true;
            /*
            try{
                this._eventBus.dispatchEvent(EventsEnum.audioPlaying);
              }
              catch(error){
                //console.error("pir is not attached: " + error); 
              }
              */
        }
        else{
            this.audioPlaying = false;
            /*
            try{
                this._eventBus.dispatchEvent(EventsEnum.AUDIOSTOPPED);
              }
              catch(error){
                //console.error("pir is not attached: " + error); 
              }
              */
        }
        
    }
    
    getAudioPlaying(){
        return this.audioPlaying;
    }
}
