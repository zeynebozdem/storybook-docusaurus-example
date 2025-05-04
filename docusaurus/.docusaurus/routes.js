import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs/components',
    component: ComponentCreator('/docs/components', '6aa'),
    routes: [
      {
        path: '/docs/components',
        component: ComponentCreator('/docs/components', '6a3'),
        routes: [
          {
            path: '/docs/components',
            component: ComponentCreator('/docs/components', 'a8f'),
            routes: [
              {
                path: '/docs/components/button',
                component: ComponentCreator('/docs/components/button', '6c5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/components/checkbox',
                component: ComponentCreator('/docs/components/checkbox', '455'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/components/dropdown',
                component: ComponentCreator('/docs/components/dropdown', '9fb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/components/input',
                component: ComponentCreator('/docs/components/input', '74a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/components/modal',
                component: ComponentCreator('/docs/components/modal', 'ee3'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
