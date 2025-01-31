
/**
 * 
 */
class DwenguinoEventLogger {
    sessionId = null;
    tutorialId = null;
    
    tutialIdSetting = "";
    computerId = "-1";
    workshopId = "-1";

    /**
     * @constructs
     */
    constructor(){
    }

    init(){
        this.sessionId = window.sessionStorage.loadOnceSessionId;
        delete window.sessionStorage.loadOnceSessionId;

        this.createNewSessionId();
    }

    /**
     * Get a new session id from the server and set it as the current session id.
     */
    createNewSessionId() {
        if (!this.sessionId){
            $.ajax({
                type: "GET",
                url: settings.hostname + "/logging/newSessionId"}
            ).done((data) => {
                this.sessionId = data;
            }).fail(function(response, status)  {
            });
        }
    }

    /**
     * Create an event that captures the recent action of the user in the simulator.
     * The event needs to have a name that is defined in event_name.js.The data object depends 
     * on the nature of the action. 
     * The event will also contain a timestamp.
     * @param {String} eventName | Mandatory String to reference the action of the user in the simulator. Should be defined in event_names.js 
     * @param {String} data | Mandatory String containing the data related to this event. Empty if there is no relevant data. This can for instance be the xml data for the Blockly program or the xml data for the simulation scenario.
     * @param {Int} difficultyLevel | Optional parameter indicating the difficulty level of the programming blocks selected in the simulator.
     * @param {Int} simulatorState | Optional state of the simulator.
     * @returns 
     */
    createEvent(eventName, data, difficultyLevel = 0, simulatorState = -1){
        var event = {
            "timestamp": Date.now(),
            "eventName": eventName,
            "sessionId": this.sessionId,
            "simulatorState": simulatorState,
            "selectedDifficulty": difficultyLevel,
            "activeTutorial": this.tutorialIdSetting,
            "computerId": this.computerId,
            "workshopId": this.workshopId,
            "data": JSON.stringify(data)
        };
        return event;
    }

    /**
     * This function records a recent action of the user in the simulator and sends it to the server.
     * The event contains a timestamp, a unique session id and the event object.
     * @param {event} eventToRecord | The event that will be saved by the server into the database.
     */
    recordEvent(eventToRecord){
        //console.debug('Record event ' + eventToRecord.eventName + ' with data ' + eventToRecord.data);
        if (this.sessionId !== undefined){
            $.ajax({
                type: "POST",
                url: settings.hostname + "/logging/event",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(eventToRecord)
            }).done(function(data){
                //console.debug('Recording submitted', data);
            }).fail(function(response, status)  {
                console.warn('Failed to submit recording:', status);
            });
        }
    }
}

export default DwenguinoEventLogger;