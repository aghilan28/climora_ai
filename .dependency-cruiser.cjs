/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-circular',
      severity: 'error',
      comment: 'Any circular dependency violates the Architecture Constitution.',
      from: {},
      to: { circular: true },
    },
    {
      name: 'presentation-must-not-import-domain',
      severity: 'error',
      from: { path: '^(apps/web|packages/(design-system|visualizations))/' },
      to: { path: '^(services/domain|packages/domain-types)/' },
    },
    {
      name: 'presentation-must-not-import-knowledge',
      severity: 'error',
      from: { path: '^(apps/web|packages/(design-system|visualizations))/' },
      to: { path: '^services/knowledge/' },
    },
    {
      name: 'presentation-must-not-import-data',
      severity: 'error',
      from: { path: '^(apps/web|packages/(design-system|visualizations))/' },
      to: { path: '^services/ingestion/' },
    },
    {
      name: 'visualization-must-not-import-knowledge',
      severity: 'error',
      from: { path: '^packages/visualizations/' },
      to: { path: '^services/knowledge/' },
    },
    {
      name: 'visualization-must-not-import-data',
      severity: 'error',
      from: { path: '^packages/visualizations/' },
      to: { path: '^services/ingestion/' },
    },
    {
      name: 'application-must-not-import-ui',
      severity: 'error',
      from: { path: '^services/application-api/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'domain-must-not-import-ui',
      severity: 'error',
      from: { path: '^(services/domain|packages/domain-types)/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'knowledge-must-not-import-ui',
      severity: 'error',
      from: { path: '^services/knowledge/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'domain-must-not-import-presentation',
      severity: 'error',
      from: { path: '^(services/domain|packages/domain-types)/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'knowledge-must-not-import-presentation',
      severity: 'error',
      from: { path: '^services/knowledge/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'validation-must-not-import-presentation',
      severity: 'error',
      from: { path: '^services/validation/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'data-must-not-import-presentation',
      severity: 'error',
      from: { path: '^services/ingestion/' },
      to: { path: '^(apps/web|packages/(design-system|visualizations))/' },
    },
    {
      name: 'domain-must-not-import-application-upward',
      severity: 'error',
      from: { path: '^(services/domain|packages/domain-types)/' },
      to: { path: '^services/application-api/' },
    },
    {
      name: 'knowledge-must-not-import-application-upward',
      severity: 'error',
      from: { path: '^services/knowledge/' },
      to: { path: '^services/application-api/' },
    },
    {
      name: 'data-must-not-import-application-upward',
      severity: 'error',
      from: { path: '^services/ingestion/' },
      to: { path: '^services/application-api/' },
    },
    {
      name: 'validation-must-not-import-application-upward',
      severity: 'error',
      from: { path: '^services/validation/' },
      to: { path: '^services/application-api/' },
    },
    {
      name: 'shared-must-remain-layer-neutral',
      severity: 'error',
      from: { path: '^packages/shared/' },
      to: {
        path: '^(apps|services|packages/(domain-types|api-client|design-system|visualizations))/',
      },
    },
    {
      name: 'testing-must-not-be-production-dependency',
      severity: 'error',
      from: {
        path: '^(apps|services|packages/(domain-types|shared|api-client|design-system|visualizations))/',
      },
      to: { path: '^packages/testing/' },
    },
    {
      name: 'no-fixture-imports-from-production',
      severity: 'error',
      from: { pathNot: '^tests/architecture/fixtures/' },
      to: { path: '^tests/architecture/fixtures/' },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    exclude: {
      path: '(^|/)(node_modules|lib|coverage|reports|\\.cache|\\.local)/|^tests/architecture/(fixtures|fixture-configs)/',
    },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: 'tsconfig.json' },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'types', 'node', 'default'],
    },
    reporterOptions: {
      dot: { collapsePattern: 'node_modules/(@[^/]+/[^/]+|[^/]+)' },
      archi: { collapsePattern: '^(apps|services|packages|infrastructure|tests|docs)(/[^/]+)?' },
    },
  },
};
