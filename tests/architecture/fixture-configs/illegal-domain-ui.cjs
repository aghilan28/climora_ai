module.exports = {
  forbidden: [
    {
      name: 'domain-to-ui',
      severity: 'error',
      from: { path: 'domain\.ts$' },
      to: { path: 'ui\.ts$' },
    },
  ],
  options: { tsPreCompilationDeps: true },
};
