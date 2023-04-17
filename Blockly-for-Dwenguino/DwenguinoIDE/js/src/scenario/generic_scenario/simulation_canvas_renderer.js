
/**
 * This renderer renders the robot component canvases in the simulation
 * container. 
 */
class SimulationCanvasRenderer {
    constructor(){
        this.initializeCanvas();
    }

    initializeCanvas(robotComponentsFactory, component){
        let canvasId = component.getCanvasId();
        let canvas = document.getElementById(canvasId);
        if(canvas !== null){
            this.configureCanvasDimensions(canvas);
            robotComponentsFactory.draw();
        }
    }

      /**
     * Correctly onfigure the canvas dimensions based on the device pixel ratio 
     * to avoid blurry drawings.
     * @param {HTMLCanvasElement} canvas 
     */
      configureCanvasDimensions(canvas){

        var dpr = window.devicePixelRatio || 1;
        // Get the size of the canvas in CSS pixels.
        var rect = canvas.getBoundingClientRect();
        
        // Give the canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        if(canvas.getContext("2d")){
        var ctx = canvas.getContext('2d');
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);
        }
    };

}

export default SimulationCanvasRenderer;
