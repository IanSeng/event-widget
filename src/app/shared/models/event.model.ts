enum CategoryType {
    IHCC = 'IHCC',
    GLIDE = 'Glide',
    FT = 'FT',
}

interface PolicyType {
    sdg: boolean;
    edi: boolean;
    TandR: boolean;
}

export interface User {
    displayName: string;
    created: Date;
}

export class Event {
    name: string;
    venue: string;
    start: Date;
    end: Date;
    duration: number;
    hosts: string[];
    bottomLiner: string[];
    attendees: string;
    categories: CategoryType;
    policies: PolicyType;

    constructor(
        name: string,
        venue: string,
        start: Date,
        end: Date,
        duration: number,
        hosts: string[],
        bottomLiner: string[],
        attendees: string,
        categories: CategoryType,
        policies: PolicyType,
    ) {
        this.name = name;
        this.venue = venue;
        this.end = end;
        this.start = start;
        this.duration = duration;
        this.hosts = hosts;
        this.bottomLiner = bottomLiner;
        this.attendees = attendees;
        this.categories = categories;
        this.policies = policies;
    }
}