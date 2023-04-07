class Animal{
    constructor(id){
        this.id = id;
    }

    getType(){
        return this.constructor.name
    }
}

class Duck extends Animal{

}