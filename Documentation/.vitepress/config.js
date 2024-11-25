export default {
  title: 'PeyrSharp',
  logo: '/logo.png',
  description: "A C# library designed to make developers' job easier.",
  lastUpdated: true,
  outDir: '../docs',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/get-started' },
      { text: 'Reference', link: '/reference' },
    ],
    repo: 'DevyusCode/PeyrSharp',
    docsDir: 'documentation',
    docsBranch: 'main',
    editLink: {
      pattern:
        'https://github.com/DevyusCode/PeyrSharp/edit/main/Documentation/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Devyus`,
    },
    algolia: {
      appId: 'JVAJ1JZ6HO',
      apiKey: '0ef6a29a84fc5698ce54fde4381bf281',
      indexName: 'peyrsharp',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/DevyusCode/PeyrSharp',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/LeoCorpNews',
      },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/@PeyronnetGroup/',
      },
    ],
    outline: [1, 3],
    sidebar: {
      '/core/': sidebar(),
      core: sidebar(),
      'get-started': superSidebar(),
      '/ui-helpers/': uiHelpersSidebar(),
      'ui-helpers': uiHelpersSidebar(),
      '/env/': envSidebar(),
      env: envSidebar(),
      '/extensions/': extSidebar(),
      '/extension': extSidebar(),
      reference: superSidebar(),
      enumerations: superSidebar(),
      exceptions: superSidebar(),
    },
  },
};

function superSidebar() {
  return [
    {
      text: 'Core',
      collapsed: false,
      items: sidebar(),
    },
    ...envSidebar(),
    {
      text: 'Enums',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/enumerations',
        },
      ],
    },
    {
      text: 'Exceptions',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/exceptions',
        },
      ],
    },
    ...extSidebar(),
    ...uiHelpersSidebar(),
  ];
}

function extSidebar() {
  return [
    {
      text: 'Extensions',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/extensions',
        },
        {
          text: 'Array',
          link: '/extensions/array',
        },
        {
          text: 'Double',
          link: '/extensions/double',
        },
        {
          text: 'Int',
          link: '/extensions/int',
        },
        {
          text: 'String',
          link: '/extensions/string',
        },
      ],
    },
  ];
}

function envSidebar() {
  return [
    {
      text: 'Env',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/env',
        },
        {
          text: 'FileSys',
          link: '/env/filesys',
        },
        {
          text: 'Logger',
          link: '/env/logger',
        },
        {
          text: 'Sys',
          link: '/env/system',
        },
        {
          text: 'Update',
          link: '/env/update',
        },
        {
          text: 'UwpApp',
          link: '/env/uwpapp',
        },
      ],
    },
  ];
}

function sidebar() {
  return [
    {
      text: 'Converters',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/core/converters',
        },
        {
          text: 'Angle',
          link: '/core/converters/angle',
        },
        {
          text: 'Colors',
          collapsed: true,
          items: [
            {
              text: 'RGB',
              link: '/core/converters/colors/rgb',
            },
            {
              text: 'HEX',
              link: '/core/converters/colors/hex',
            },
            {
              text: 'HSV',
              link: '/core/converters/colors/hsv',
            },
          ],
        },
        {
          text: 'Distances',
          link: '/core/converters/distances',
        },
        {
          text: 'Energies',
          link: '/core/converters/energies',
        },
        {
          text: 'Masses',
          link: '/core/converters/masses',
        },
        {
          text: 'Speeds',
          link: '/core/converters/speeds',
        },
        {
          text: 'Storage',
          link: '/core/converters/storage',
        },
        {
          text: 'Temperatures',
          link: '/core/converters/temperatures',
        },
        {
          text: 'Time',
          link: '/core/converters/time',
        },
        {
          text: 'Volumes',
          link: '/core/converters/volumes',
        },
      ],
    },
    {
      text: 'Crypt',
      collapsed: false,
      items: [
        {
          text: 'Crypt',
          link: '/core/crypt',
        },
      ],
    },
    {
      text: 'Guid',
      collapsed: false,
      items: [
        {
          text: 'GuidGen',
          link: '/core/guid',
        },
        {
          text: 'GuidOptions',
          link: '/core/guid-options',
        },
      ],
    },
    {
      text: 'Helpers',
      collapsed: false,
      items: [
        {
          text: 'JsonHelper',
          link: '/core/json-helper',
        },
        {
          text: 'XmlHelper',
          link: '/core/xml-helper',
        },
      ],
    },
    {
      text: 'Internet',
      collapsed: false,
      items: [
        {
          text: 'Internet',
          link: '/core/internet',
        },
        {
          text: 'StatusInfo',
          link: '/core/statusinfo',
        },
      ],
    },
    {
      text: 'Maths',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/core/maths',
        },
        {
          text: 'Algebra',
          link: '/core/maths/algebra',
        },
        {
          text: 'Geometry',
          collapsed: true,
          link: '/core/maths/geometry',
          items: [
            {
              text: 'Circle',
              link: '/core/maths/geometry/circle',
            },
            {
              text: 'Cone',
              link: '/core/maths/geometry/cone',
            },
            {
              text: 'Cube',
              link: '/core/maths/geometry/cube',
            },
            {
              text: 'Cylinder',
              link: '/core/maths/geometry/cylinder',
            },
            {
              text: 'Diamond',
              link: '/core/maths/geometry/diamond',
            },
            {
              text: 'Hexagon',
              link: '/core/maths/geometry/hexagon',
            },
            {
              text: 'Pyramid',
              link: '/core/maths/geometry/pyramid',
            },
            {
              text: 'Rectangle',
              link: '/core/maths/geometry/rectangle',
            },
            {
              text: 'Sphere',
              link: '/core/maths/geometry/sphere',
            },
            {
              text: 'Triangle',
              link: '/core/maths/geometry/triangle',
            },
          ],
        },
        {
          text: 'Percentages',
          link: '/core/maths/percentages',
        },
        {
          text: 'Proba',
          link: '/core/maths/proba',
        },
        {
          text: 'Stats',
          link: '/core/maths/stats',
        },
        {
          text: 'Trigonometry',
          link: '/core/maths/trigonometry',
        },
      ],
    },
    {
      text: 'Password',
      collapsed: false,
      items: [
        {
          text: 'Password',
          link: '/core/password',
        },
      ],
    },
  ];
}

function uiHelpersSidebar() {
  return [
    {
      text: 'UiHelpers',
      collapsed: false,
      items: [
        {
          text: 'Home',
          link: '/ui-helpers',
        },
        {
          text: 'Screen',
          link: '/ui-helpers/screen',
        },
        {
          text: 'WinForms',
          link: '/ui-helpers/winforms',
        },
        {
          text: 'WindowHelpers',
          link: '/ui-helpers/windowhelpers',
        },
        {
          text: 'WindowInfo',
          link: '/ui-helpers/windowinfo',
        },
        {
          text: 'WPF',
          link: '/ui-helpers/wpf',
        },
      ],
    },
  ];
}
