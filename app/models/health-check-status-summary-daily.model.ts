import {StatusEnum} from "./StatusEnum";

export class HealthCheckStatusSummaryDaily {
    summaryID: number;
    configID: number;
    date: Date;
    averagePingResponseMS: number;
    status: StatusEnum;
    uptimePercent: number;

}