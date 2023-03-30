import { TypesEnum } from "./types_enum";

export {EventPublisher}


class EventPublisher{

    addSubscriber(type){
        //drag-event needed for all components (sonar-sensor)

        //specific events for certain components
        switch(type){
            case TypesEnum.BUTTON:
                document.getElementById("")

        }
    }

}