const logging = {
  LOG_LEVEL: 'WARNING',
}

module.exports = {
  defaults: {
    ...logging,
  },
  test: {},
  ci: {
    CI: true,
    LOG_LEVEL: 'INFO',
  },
}
