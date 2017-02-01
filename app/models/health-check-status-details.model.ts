import {StatusEnum} from './StatusEnum';

export class HealthCheckStatusDetails {
    dataID: number;
    configID: number;
    dateTime: Date;
    pingResponseMS: number;
    status: StatusEnum;
}