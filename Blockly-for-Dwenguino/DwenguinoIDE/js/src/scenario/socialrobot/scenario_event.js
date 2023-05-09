export { EventsEnum, ScenarioEvent }

const EventsEnum = {
    SAVE: 'save',
    INITIALIZECANVAS: 'initializecanvas',
    CLEARCANVAS: 'clearcanvas',
    AUDIOSTARTED: 'audiostarted',
    AUDIOSTOPPED: 'audiostopped',
    COMPONENTSMOVING: 'componentmoving',
    COMPONENTMOVED: 'componentmoved',
    LIGHTON: 'lighton',
    LIGHTOFF: 'lightoff',
    DISTANCECHANGED:'distancechanged'
};
Object.freeze(EventsEnum);

class ScenarioEvent {
    constructor(name) {
        this.name = name;
        this.callbacks = [];
    }

    registerCallback(callback) {
        console.log('calback registered '+ callback);
        this.callbacks.push(callback);
    }

    removeCallback(callback) {
        /*
        console.log("callabcks voor remove:");
        console.log(this.callbacks);
        var index = this.callbacks.indexOf(callback);
        if (index !== -1) {
            this.callbacks.splice(index, 1);
        }
        console.log("callabcks na remove:");
        console.log(this.callbacks);
        */
        this.callbacks = []; //TODO verwijder op juiste manier
    }
}



