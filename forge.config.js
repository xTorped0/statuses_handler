const BUILD_NAME = 'Services-handler'

module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // authors: 'Torped0',
        // // iconUrl: 'https://your_site/favicon.ico',
        // exe: `${BUILD_NAME}.exe`,
        // name: BUILD_NAME,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        // options: {
        //   bin: BUILD_NAME,
        //   maintainer: 'Torped0',
        //   homepage: 'https://you home page',
        // },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
