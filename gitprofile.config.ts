// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mad0021', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'etable',
          description:
            'eTable is a next-generation, all-in-one solution for the digital management of restaurants, specifically designed for Android tablets. By combining the power of Jetpack Compose with Firebase, it revolutionizes the experience for both staff and customers through an intuitive interface and advanced features.',
          imageUrl: 'public/etable-preview.png',
          link: 'https://github.com/mad0021/etable.git',
        },
      ],
    },
  },
  seo: { title: '', description: '', imageURL: '' },
  social: {
    linkedin: 'madev021',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mamadoudiallo2002@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C#',
    'Net Framework',
    'Windows Forms',
    'Visual Basic',
    'JavaScript',
    'Python',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'HTML',
    'Django',
    'Django REST Framework',
    'Kotlin',
    'Jetpack Compose',
    'Firebase',
  ],
  experiences: [
    {
      company: 'DoceoSoftware',
      position: 'Intern programmer',
      from: 'May 2024',
      to: 'September 2025',
      companyLink: 'https://doceosoftware.com/',
    },
  ],
  certifications: [
    {
      name: 'Fundamentos de Ciberseguridad: un enfoque práctico',
      body: '',
      year: 'June 2023',
      link: 'https://courses.edx.org/certificates/a49beb3a10ba4a92bfa12e7b22443831',
    },
  ],
  educations: [
    {
      institution: 'Institut Montilivi',
      degree: 'Advanced Degree in Multiplatform Application Development',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Institution Name',
      degree: 'High School',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Instituto Santiago Sobrequés y Vidal',
      degree: 'Secondary Education',
      from: '2014',
      to: '2018',
    },

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
};

export default CONFIG;
