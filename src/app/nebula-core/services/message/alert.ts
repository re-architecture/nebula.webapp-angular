import { Message } from "src/app/nebula-core";

export class Alert{

    message : Message;
    isSizeSmall: boolean;

    constructor(message : Message,isSizeSmall : boolean = false){
        this.message = message;
        this.isSizeSmall = isSizeSmall;
    }
}