




//MIXIN class: multiple inheritance is not possible in JS, so a mixin is used
export let DisplayComponent = {

    initDisplayComponent(eventBus, htmlClasses, id, type, visible, width, height, offsetLeft, offsetTop, imgSource, canvasId) {
        super.initComponent(eventBus, htmlClasses);
        this._id = id;
        this._type = type;
        this._width = width;
        this._height = height;
        this._visible = visible;
        this._offset = {
            "left": offsetLeft,
            "top": offsetTop
        };
        this._image = new Image();
        this._image.src = imgSource;
        this._canvasId = canvasId;
        this._stateUpdated = false;
        this.insertHtml();
        this.toggleVisibility(visible);
    },




    setWidth(width) {
        this._width = width;
    },

    getWidth() {
        return this._width;
    },

    setHeight(height) {
        this._height = height;
    },

    getHeight() {
        return this._height;
    },

    setOffset(offset) {
        this._offset = offset;
    },

    getOffset() {
        return this._offset;
    },

    setImage(image) {
        this._image.src = image;
    },

    getImage() {
        return this._image;
    },


    insertHtml(optionsLabel = "options") {

        $('#sim_container').append("<div id='sim_" + this.getType() + this.getId()
            + "' class='sim_element sim_element_"
            + this.getType()
            + " draggable'><div>"
            + "<span id='component_title_" + this.getType() + "_" + this.getId() + "'>"
            + "</span>"
            + "</div></div>");
        // First add the element at position 0, 0
        $('#sim_' + this.getType() + this.getId()).css('top', 0 + 'px');
        $('#sim_' + this.getType() + this.getId()).css('left', 0 + 'px');
        // Now move the element according to its offset by using css transform
        $('#sim_' + this.getType() + this.getId()).css(
            'transform',
            "translate(" + this.getOffset()['left'] + "px, " + this.getOffset()['top'] + "px)"
        )
        // add the offset to the data-x and data-y attributes to let the draggable system know where the element is now
        $('#sim_' + this.getType() + this.getId()).attr("data-x", this.getOffset()['left']);
        $('#sim_' + this.getType() + this.getId()).attr("data-y", this.getOffset()['top']);
        $('#sim_' + this.getType() + this.getId()).append("<canvas id='" + this.getCanvasId() + "' class='" + this.getHtmlClasses() + "'></canvas>");

        let simSensor = document.getElementById('sim_' + this.getType() + this.getId());

        if (simSensor) {
            simSensor.addEventListener('mouseup', (event) => {
                let offset = {
                    "left": event.currentTarget.getAttribute("data-x"),
                    "top": event.currentTarget.getAttribute("data-y")
                };
                this.setOffset(offset);
            })

            simSensor.addEventListener('dblclick', () => {
                this.createComponentOptionsModalDialog(optionsLabel);
                this.showDialog();
            });
        }


        this.setComponentName();
    },

    removeHtml() {
        $('#sim_' + this.getType() + this.getId()).remove();
    },

    toggleVisibility(visible) {
        if (visible) {
            $('#sim_' + this.getType() + this.getId()).css('visibility', 'visible');
        } else {
            $('#sim_' + this.getType() + this.getId()).css('visibility', 'hidden');
        }
    },

};