module.exports = {
  forbidden: [
    {
      name: 'knowledge-to-ui',
      severity: 'error',
      from: { path: 'knowledge\.ts$' },
      to: { path: 'ui\.ts$' },
    },
  ],
  options: { tsPreCompilationDeps: true },
};
