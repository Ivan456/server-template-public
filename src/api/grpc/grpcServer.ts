import { Server } from '@join-com/grpc-ts'
import HealthService from './health/HealthService'

export const grpcServer = new Server()

grpcServer.addService(HealthService)
