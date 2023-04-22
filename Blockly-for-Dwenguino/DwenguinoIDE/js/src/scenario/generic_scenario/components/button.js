import { RobotComponent } from "./robot_component";

import { Button as DisplayButton } from '../../utilities/button.js';

export { Button }

class Button extends RobotComponent {

    constructor(id, pin = 12, boardstate) {
        super(id);
        this.pin = pin; //TODO pin conflict?
        this.boardstate = boardstate;
        this._isActive = false;
        let activeImage = `${settings.basepath}DwenguinoIDE/img/board/button_pushed.png`;
        let inactiveImage = `${settings.basepath}DwenguinoIDE/img/board/button.png`;
        this.pinNames = {
            digitalPin: "digitalPin"
        }
    }


    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "SW_N", "SW_E", "SW_S", "SW_W", "SW_C"];
    }


    /*display part
    addToCanvas() {
        /*       
        create in simulation container:
        <div id="sim_button1" class="sim_element sim_element_button draggable" data-x="357.4000244140625" data-y="149.79998779296875" style="top: 0px; left: 0px; transform: translate(357.4px, 149.8px); visibility: visible;">
        <div>
               <span id="component_title_button_1">(digitalPin:SW_S)
        </span>
        </div>
        <canvas id="sim_button_canvas1" class="sim_canvas button_canvas" width="62" height="62">
        </canvas>
        </div>
        

        parentElement = document.getElementById("sim_container");

        const draggableElementAttributes = {
            id:id+"_draggable",
            class:"sim_element sim_element_button draggable",
            style:"top: 0px; left: 0px; transform: translate(357.4px, 149.8px); visibility: visible;" //todo translate?
        }
        draggableElementAttributes.setAttribute("data-x",5);
        draggableElementAttributes.setAttribute("data-y",5);
        draggableElement = HtmlElementCreator.createElement("div", this.draggableElementAttributes);
        parentElement.appendChild(draggableElement);
        
        spanDiv = HtmlElementCreator.createElement("div");
        draggableElement.appendChild(spanDiv);
        
        span = HtmlElementCreator.createElement("span");
        span.textContent = this.pin; //TODO
        spanDiv.appendChild(span);



        const canvasElementAttributes = {
            id:"id",
            class:"sim_canvas button_canvas",
            width:"62",
            height:"62"
        }
        canvasElement = HtmlElementCreator.createElement("canvas",this.canvasElementAttributes);
        draggableElement.appendChild(canvasElement);



       
        this.update();
    }
    */

    buttonEvent() {
        this._button.onclick = function () {

            _isActive = !this.boardstate.getIoPinState(this.pin); //switch from current state on click
            //change boardstate
            this.boardstate.setIoPinState(pin, _isActive);
            update();

        }

        super.insertHtml(DwenguinoBlocklyLanguageSettings.translate([this._optionsMenuTranslationKey]));
    }

    //update view of button depending on boardstate
    update() {

        if (this.boardstate.getIoPinState(this.pin)) { //if active
            this._isActive = true;
            his._button.setAttribute("class", 'dwenguino_button dwenguino_button_pushed');
        }
        else {
            this._isActive = false;
            his._button.setAttribute("class", 'dwenguino_button');
        }
    }



    removeHtml() {
        super.removeHtml()
        this.getButton().remove();
    }


/*
    <div id="sim_button1" class="sim_element sim_element_button draggable" data-x="5" data-y="5" style="top: 0px; left: 0px; transform: translate(5px, 5px); visibility: visible;"><div><span id="component_title_button_1">(digitalPin:SW_S)
</span></div><canvas id="sim_button_canvas1" class="sim_canvas button_canvas" width="62" height="62"></canvas></div>
*/


    /*
    draw(button, canvas){
        if (canvas.getContext) {
    
            // in case the image isn't loaded yet.
            var self = this;
            button.getImage().onload = function() {
                var ctx = canvas.getContext('2d');
                ctx.drawImage(button.getImage(),0,0,button.getWidth(),button.getHeight()); 
            }
    
            var ctx = canvas.getContext('2d');
            ctx.drawImage(button.getImage(),0,0,button.getWidth(),button.getHeight());
        } else {
            console.log(canvas, "This canvas has no context");
        } 
        
    }
    */
}
