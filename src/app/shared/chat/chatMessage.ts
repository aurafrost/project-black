export class ChatMessage {
    // noteId: number;
    message: string;
    date: string;
    userId: string;

    constructor(message: string, date: string, userId: string) {
        this.message = message;
        this.date = date;
        this.userId = userId;
    }
}
