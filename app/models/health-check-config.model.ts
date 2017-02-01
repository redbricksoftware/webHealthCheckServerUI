
export class HealthCheckConfig {
    configID: number;
    tenantID: number;
    name: string;
    uri: string;
    enabled: boolean;
    pollFrequencyInSeconds: number;
    maxResponseTimeMS: number;
    emergencyContactGroupID: number;
}