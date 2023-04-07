export { RobotComponent }

class RobotComponent{

    constructor(id){
        this._id = id;
    }

    reset(){
        this.setState(0);
        this._stateUpdated = false;
    }

    initComponent()
    setIsSimulationRunning()
    toString()
    getAllPossiblePins()
    getId(){
        return this._id;
    }
    setPin()
    getPin()
    getPins()
    setPins()
    setState(){
        this._state = state;
        this._stateUpdated = true;
    }

    getState(){
        return this._state;
    }
    getType(){
        return this.constructor.name;
    }

    isStateUpdated(){
        return this._stateUpdated();
    }

    update()
    

    removeHtml(parent){ //remove all components within child
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}
   