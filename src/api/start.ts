import { startGrpcServer } from './grpc'

export const start = async (): Promise<void> => {
  await startGrpcServer()
}
