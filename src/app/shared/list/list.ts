export enum Status {
    Pending,
    MovedIn,
    MovedOut,
}

export interface ResidentInfo {
    firstName: String;
    lastName: String;
    roomNumber: number;
    status: number;
}