const isProd = process.env.IS_PROD_BUILD == "true";
const config = {
  title: 'SurrealDB Docs',
  tagline: 'SurrealDB Docs',
  favicon: '/img/favicon.ico',
  url: 'https://surrealdb.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          includeCurrentVersion: false,
          routeBasePath: '/surrealdb',
          lastVersion: '1.x',
          versions: {
            "1.x": {
              label: '1.x',
              path: '',
            },
          },
          editUrl: 'https://github.com/surrealdb/docs.surrealdb.com/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    ...(isProd ? [
      [
        'docusaurus-plugin-sentry',
        {
          DSN: "7494265ecc6f4f0d2a2d26c9cbae3262",
          sentry: {
            init: {
              ignoreErrors: [
                'Non-Error promise rejection captured with value',
              ],
              // Enable session replay
              // integrations: [
              //   Sentry.replayIntegration({
              //     maskAllText: false,
              //     blockAllMedia: false,
              //     workerUrl: "/assets/replay-worker.js",
              //   }),
              // ],
              // Monitor performance for 100% of sessions
              tracesSampleRate: 1.0,
              // Enable session replays for 10% of all sessions
              replaysSessionSampleRate: 0.1,
              // Enable session replays for 100% of all sessions with errors
              replaysOnErrorSampleRate: 1.0,
            }
          }
        },
      ],
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-J1NWM32T1V',
          anonymizeIP: true,
        },
      ],
    ] : []),
  ],
  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: '/img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'SurrealDB Logo',
          src: '/img/logo-surrealdb-dark.svg',
          srcDark: '/img/logo-surrealdb.svg',
        },
        items: [
          {
            to: 'https://surrealdb.com',
            position: 'right',
            className: 'navbar-surreal',
            'aria-label': 'SurrealDB.com',
            label: 'SurrealDB.com',
            target: '_blank',
            icon: 'none'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/surrealdb/docs.surrealdb.com',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `&copy; <a href='https://surrealdb.com'>SurrealDB</a> &bull; <a href='https://github.com/surrealdb'>GitHub</a> &bull; <a href='https://discord.gg/surrealdb'>Discord</a> &bull; <a href='https://surrealdb.com/community'>Community</a> &bull; <a href='https://surrealdb.com/products'>Products</a> &bull; <a href='https://surrealdb.com/features'>Features</a> &bull; <a href='https://surrealdb.com/releases'>Releases</a> &bull; <a href='https://surrealdb.com/install'>Install</a>`,
      },
      prism: {
        additionalLanguages: [
          'javascript',
          'typescript',
          'bash',
          'yaml',
          'markdown',
          'python',
          'json',
          'rust',
          'jsx',
          'sql',
          'java',
          'go',
          'jsx',
          'csharp'
        ]
      }
    }),
  scripts: isProd ? [
    { src: '/js/script.js', defer: true, 'data-domain': 'surrealdb.com' },
  ] : []
};

module.exports = config;
