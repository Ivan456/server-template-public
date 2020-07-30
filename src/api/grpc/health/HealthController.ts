import { GrpcHealth } from '../proto/generated/Health'

export const check = (): Promise<GrpcHealth.IHealthCheckResponse> => {
  return Promise.resolve({ status: 'SERVING' })
}
