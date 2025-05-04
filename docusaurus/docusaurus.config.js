module.exports = {
  title: 'Storybook ve Docusaurus Entegrasyonu',
  tagline: 'Bileşen dokümantasyonu örneği',
  url: 'https://storybook-docusaurus-example.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zeynebozdem',
  projectName: 'storybook-docusaurus-example',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs-content',
          routeBasePath: 'docs/components',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Bileşen Kütüphanesi',
      items: [
        {
          to: '/docs/components/button',
          position: 'left',
          label: 'Bileşenler',
        },
        {
          href: '/storybook',
          position: 'right',
          label: 'Storybook',
        },
        {
          href: 'https://github.com/zeynebozdem/storybook-docusaurus-example',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Bileşenler',
          items: [
            {
              label: 'Button',
              to: '/docs/components/button',
            },
            {
              label: 'Input',
              to: '/docs/components/input',
            },
            {
              label: 'Checkbox',
              to: '/docs/components/checkbox',
            },
          ],
        },
        {
          title: 'Araçlar',
          items: [
            {
              label: 'Storybook',
              href: '/storybook',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zeynebozdem/storybook-docusaurus-example',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Storybook Docusaurus Örneği.`,
    },
  },
}; 