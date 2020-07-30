const ports = {
  GRPC_PORT: 50051,
}

const logging = {
  LOG_LEVEL: 'WARNING',
}

module.exports = {
  defaults: {
    ...ports,
    ...logging,
  },
  test: {},
  ci: {
    CI: true,
    LOG_LEVEL: 'INFO',
  },
}
