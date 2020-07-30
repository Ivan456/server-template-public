// GENERATED CODE -- DO NOT EDIT!
import * as protobufjs from 'protobufjs/minimal';
// @ts-ignore ignored as it's generated and it's difficult to predict if logger is needed
import { logger } from '@join-com/gcloud-logger-trace';

import * as grpcts from '@join-com/grpc-ts';
import * as nodeTrace from '@join-com/node-trace';

export namespace GrpcHealth {
  export type ServingStatus = 'UNKNOWN' | 'SERVING' | 'NOT_SERVING';

  export interface IHealthCheckRequest {
    service?: string;
  }

  export class HealthCheckRequest implements IHealthCheckRequest {
    public static decode(
      inReader: Uint8Array | protobufjs.Reader,
      length?: number
    ) {
      const reader = !(inReader instanceof protobufjs.Reader)
        ? protobufjs.Reader.create(inReader)
        : inReader;
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = new HealthCheckRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.service = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
    public service?: string;
    constructor(attrs?: IHealthCheckRequest) {
      Object.assign(this, attrs);
    }
    public encode(writer: protobufjs.Writer = protobufjs.Writer.create()) {
      if (this.service != null) {
        writer.uint32(10).string(this.service);
      }
      return writer;
    }
  }

  export interface IHealthCheckResponse {
    status?: ServingStatus;
  }

  export class HealthCheckResponse implements IHealthCheckResponse {
    public static decode(
      inReader: Uint8Array | protobufjs.Reader,
      length?: number
    ) {
      const reader = !(inReader instanceof protobufjs.Reader)
        ? protobufjs.Reader.create(inReader)
        : inReader;
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = new HealthCheckResponse();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.status = ((val) => {
              switch (val) {
                case 0:
                  return 'UNKNOWN';
                case 1:
                  return 'SERVING';
                case 2:
                  return 'NOT_SERVING';
                default:
                  return;
              }
            })(reader.int32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
    public status?: ServingStatus;
    constructor(attrs?: IHealthCheckResponse) {
      Object.assign(this, attrs);
    }
    public encode(writer: protobufjs.Writer = protobufjs.Writer.create()) {
      if (this.status != null) {
        const status = ((val) => {
          switch (val) {
            case 'UNKNOWN':
              return 0;
            case 'SERVING':
              return 1;
            case 'NOT_SERVING':
              return 2;
            default:
              return;
          }
        })(this.status);
        if (status != null) {
          writer.uint32(8).int32(status);
        }
      }
      return writer;
    }
  }

  export const healthServiceDefinition = {
    check: {
      path: '/Health/Check',
      requestStream: false,
      responseStream: false,
      requestType: HealthCheckRequest,
      responseType: HealthCheckResponse,
      requestSerialize: (args: IHealthCheckRequest) =>
        new HealthCheckRequest(args).encode().finish() as Buffer,
      requestDeserialize: (argBuf: Buffer) => HealthCheckRequest.decode(argBuf),
      responseSerialize: (args: IHealthCheckResponse) =>
        new HealthCheckResponse(args).encode().finish() as Buffer,
      responseDeserialize: (argBuf: Buffer) =>
        HealthCheckResponse.decode(argBuf),
    },
  };

  export interface IHealthImplementation extends grpcts.Implementations {
    check(
      call: grpcts.grpc.ServerUnaryCall<IHealthCheckRequest>
    ): Promise<IHealthCheckResponse>;
    check(
      call: grpcts.grpc.ServerUnaryCall<IHealthCheckRequest>,
      callback: grpcts.grpc.sendUnaryData<IHealthCheckResponse>
    ): void;
  }

  export type ClientConfig = Omit<grpcts.Config, 'definition'>;

  export class HealthClient extends grpcts.Client {
    constructor(config: ClientConfig) {
      super({
        definition: healthServiceDefinition,
        trace: nodeTrace,
        ...config,
      });
    }
    public check(req: IHealthCheckRequest, metadata?: grpcts.Metadata) {
      return super.makeUnaryRequest<IHealthCheckRequest, IHealthCheckResponse>(
        'check',
        req,
        metadata
      );
    }
  }
}
