export interface EventAttendees {
    start: Date;
    end: Date;
    name: string;
}

export interface UserCheckInInfo {
    email: string;
    name: string;
    time: Date;
}
export interface Policy {
    edi: boolean;
    sdg: boolean;
    tr: boolean;
}
export interface EventDetails {
    categories: string;
    start: Date;
    end: Date;
    eventAttendeesId: string;
    hosts: string[];
    name: string;
    polocies: Policy;
    questionAir: boolean;
    venue: string;
}
export class Events {
    constructor(
        public id: string,
        public eventDetails: EventDetails
    ) { }
}

