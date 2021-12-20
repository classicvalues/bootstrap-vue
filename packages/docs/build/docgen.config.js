/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const path = require('path')
const pkg = require('./../package.json')
// const templates = require('./docgen.templates')

module.exports = {
  componentsRoot: './../../packages', // the folder where CLI will start searching for components.
  components: [
    '**/[A-Z]*.ts',
    '!**/[A-Z]*.d.ts',
    '!**/[A-Z]*.spec.ts'
  ],
  // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: 'api', // folder to save components docs in (relative to the current working directry)
  getDocFileName: (componentPath) =>
    componentPath.replace(/\.ts$/, '.md'), // specify the name of the input md file
  getDestFile: (file, config) => {
    return path.join(
      config.outDir,
      file.replace('bootstrap-vue/src/components', '')).replace(/\.ts$/, '.api.md') // specify the name of the output md file
  },
  // templates,
  templates: {
    // global component template wrapping all others see #templates
    component: require('./templates/component'),
    events: require('./templates/events'),
    props: require('./templates/props'),
    slots: require('./templates/slots'),
  },
  docsRepo: 'profile/repo',
  docsBranch: 'master',
  docsFolder: '',
  editLinkLabel: 'Edit on github',
}