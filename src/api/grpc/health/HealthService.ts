import { Service } from '@join-com/grpc-ts'
import { GrpcHealth } from '../proto/generated/Health'
import * as controller from './HealthController'

export default new Service<GrpcHealth.IHealthImplementation>(
  GrpcHealth.healthServiceDefinition,
  {
    check: controller.check,
  }
)
