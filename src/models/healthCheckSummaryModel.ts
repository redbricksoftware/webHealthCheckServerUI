export class HealthCheckSummaryModel {
  uri: string;
  averageRequestLengthMS: number;
  requestDate: number;
  activeResponsePercent: number;
  degradedResponsePercent: number;
  failedResponsePercent: number;
  otherResponsePercent: number;
  tenantID: number;
  configID: number;
}
