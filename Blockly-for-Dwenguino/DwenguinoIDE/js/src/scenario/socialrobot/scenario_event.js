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
    DISTANCECHANGED:'distancechanged',
    ALLDISTANCESCHANGED:'alldistanceschanged',
    MOVENOTCLICK:'movenotclick'
};
Object.freeze(EventsEnum);

class ScenarioEvent {
    constructor(name) {
        this.name = name;
        this.callbacks = [];
    }

    registerCallback(callback) {
        this.callbacks.push(callback);
    }

}



