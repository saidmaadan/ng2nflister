export class Flisting {
    title: string;
    description: string;
    username: string;
    flistingId?: string;
    flisterId?: string;

    constructor(title: string, description: string, username: string, flistingId?: string, flisterId?: string) {
        this.title = title;
        this.description = description;
        this.username = username;
        this.flistingId = flistingId;
        this.flisterId = flisterId;
    }
}
