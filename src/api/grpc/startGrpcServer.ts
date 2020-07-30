import logger from '@join-com/gcloud-logger-trace'
import { env } from '@join-com/process-env'
import { watchShutdown } from '@join-com/shutdown'
import { grpcServer } from './grpcServer'

const PORT = env('GRPC_PORT').asInt()
const IP = '0.0.0.0'

export const startGrpcServer = async (): Promise<void> => {
  logger.info(`Starting gRPC server ${IP}:${PORT}`)
  await grpcServer.start(`${IP}:${PORT}`)
  logger.info(`Started gRPC server ${IP}:${PORT}`)

  watchShutdown(async (): Promise<void> => {
    logger.info(`Shutting down gRPC server ${IP}:${PORT}`)
    await grpcServer.tryShutdown()
    logger.info(`Shut down gRPC server ${IP}:${PORT}`)
  }, logger)
}
