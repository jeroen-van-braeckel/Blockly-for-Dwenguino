

class HtmlElementCreator {


static createElement(type, attributes){

    element = document.createElement(type);
    if(attributes != undefined){
        setMultipleAttributesonElement(element, attributes);
    }
    return element;
}



setMultipleAttributesonElement(elem, elemAttributes) {
    Object.keys(elementAttributes).forEach(attribute => {
        elem.setAttribute(attribute, elemAttributes[attribute]);
     });
    }

}
