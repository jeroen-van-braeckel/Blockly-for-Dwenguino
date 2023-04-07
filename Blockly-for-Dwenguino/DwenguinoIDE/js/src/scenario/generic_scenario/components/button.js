import { RobotComponent } from "./robot_component";

import { Button as DisplayButton } from '../../utilities/button.js';

export { Button }

class Button extends RobotComponent {




    constructor(id, pin = 12, boardstate) {
        this.id = id;
        this.pin = pin; //TODO pin conflict?
        this.boardstate = boardstate;
        this._isActive = false;
        //this.activeImage = `${settings.basepath}DwenguinoIDE/img/board/button_pushed.png`; //already set in syles.css, use classnames
        //this.inactiveImage = `${settings.basepath}DwenguinoIDE/img/board/button.png`;
        this.pinNames = {
            digitalPin: "digitalPin"
        }
    }


    getAllPossiblePins() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, "SW_N", "SW_E", "SW_S", "SW_W", "SW_C"];
    }


    //display part
    draw() {
/*       
create in simulation container:
        <div id="sim_button1" class="sim_element sim_element_button draggable" data-x="197" data-y="165" style="top: 0px; left: 0px; transform: translate(197px, 165px); visibility: visible;">
            <div>
                <span id="component_title_button_1">(digitalPin:SW_S)
                </span>
            </div>
            <div id="button_button1_button" class="dwenguino_button" style="height:50px; width:50px"></div>
        </div>
*/

        parentElement = document.getElementById("sim_container");
        const buttonElementAttributes = {
            id: id,
            width: "50",
            height: "50"
        };

        this._button = HtmlElementCreator.createElement("div", buttonElementAttributes);

        parent.appendChild(this._button);
        this.update();
    }

    buttonEvent() {
        this._button.onclick = function () {

            _isActive = !this.boardstate.getIoPinState(this.pin); //switch from current state on click
            //change boardstate
            this.boardstate.setIoPinState(pin, _isActive);
            update();

        }

        super.insertHtml(DwenguinoBlocklyLanguageSettings.translate([this._optionsMenuTranslationKey]));
    }

    //update view of button depending on boardstatea
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
        
    }*/
}
