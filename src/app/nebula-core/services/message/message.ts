export declare type MessageType = 'Info' | 'Warning' | 'Error' | 'Success';

// export enum MessageType {
//     Info = 'Info',
//     Warning = 'Warning',
//     Error = 'Error',
//     Success = 'Success'
// }

export class Message {

    message: string;
    description: string;
    messageType: MessageType;

    constructor(message: string | object, description?: string | object, messageType: MessageType = 'Info') {
        //typeof val === 'object'
        if (typeof message === "string") {
            this.message = message;
        } else {
            this.message = JSON.stringify(message);
        }

        if (description) {
            if (typeof description === "string") {
                this.description = description;
            } else {
                this.description = JSON.stringify(description);
            }
        }
        this.messageType = messageType;
    }



}