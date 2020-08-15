export enum Status {
    Pending,
    MovedIn,
    MovedOut,
}

export interface ResidentInfo {
    firstName: String;
    lastName: String;
    room: number;
    status: number;
    email: string;
}