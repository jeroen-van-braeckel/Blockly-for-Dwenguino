import { TypesEnum } from "../../robot_components_factory";
import { SoundComponent } from "../sound_component"
import BindMethods from "../../../../utils/bindmethods";

export { EnvironmentSpeaker}

class EnvironmentSpeaker extends SoundComponent {

    constructor() {
        super();
        BindMethods(this);
        this.activeValue = 1;
        this.inactiveValue = 0;
        this._activeImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/speaker_active.png`; 
        this._inactiveImageUrl = `${settings.basepath}DwenguinoIDE/img/socialrobot/speaker_inactive.png`; 

    }

    initComponent(eventBus, id, pins, state, visible, width, height, offsetLeft, offsetTop, htmlClasses) {
        super.initComponent(eventBus, htmlClasses, id, TypesEnum.SPEAKER, "speaker", pins, state, visible, width, height, offsetLeft, offsetTop, this._inactiveImageUrl, "sim_speaker_canvas" + id);
        this.initEventListener();
        this.speakerState = this.inactiveValue;
    }

    initComponentFromXml(eventBus, id, xml) {
        super.initComponentFromXml(eventBus,
            this._inactiveImageUrl,
            id,
            xml);
        this.initEventListener();
        this.speakerState = this.inactiveValue;
    }

    insertHtml() {
        super.insertHtml("noOptions");
//audio source is royalty-free, no attribute to author needed. Content license summary: https://pixabay.com/service/license-summary/
        $('#sim_' + this.getType() + this.getId()).append(`<audio id="speakerAudio" src="${settings.basepath}DwenguinoIDE/img/socialrobot/8-bit-game-music-122259.mp3"></audio>`); //todo set path & removehtml
    }

    getAllPossiblePins() {
        return []
    }


    getState() {//custom, not related to boardstate
        return this.speakerState;
    }
    setState(value) {//custom, not related to boardstate
        this.speakerState = value;
    }

    initEventListener() { //speaker turns on or off on click
        document.getElementById(this.getCanvasId()).addEventListener('click', this.toggleSound);

    }
    // Toggle the sound playback on or off
    toggleSound() {
        // Get the audio element
        let audio = document.getElementById('speakerAudio');

        if (this.getAudioPlaying()) {
            audio.pause();  // Pause the if speaker is inactive

            this.setImage(this._inactiveImageUrl);
        } else {
            audio.currentTime = 0;  // Reset the audio to the beginning
            audio.play();   // Play the audio
            audio.loop = true; // Enable looping
            
        this.setImage(this._activeImageUrl);
        }
        this.setAudioPlaying(!this.audioPlaying);
        //todo change image to (in)active
    }

}