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

    constructor(message: string, description?: string, messageType: MessageType = 'Info') {
        this.message = message;
        this.description = description;
        this.messageType = messageType;
       
    }

}