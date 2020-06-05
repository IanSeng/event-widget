import { CheckInStatus } from './enums.model';
export class Residence {
    public firstName: string;
    public lastName: string;
    public roomNumber: number;
    public checkInDate: Date;
    public checkInStatus: CheckInStatus;
    private email: string;

    constructor(
        firstName: string,
        lastName: string,
        roomNumber: number,
        checkInDate: Date,
        checkInStatus: CheckInStatus,
        email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roomNumber = roomNumber;
        this.checkInDate = checkInDate;
        this.checkInStatus = checkInStatus;
        this.email = email;
    }

    getEmail() {
        return this.email;
    }
}
