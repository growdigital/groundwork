const Metalsmith = require('metalsmith');
const cleancss = require('metalsmith-clean-css');
const collection = require('metalsmith-collections');
const concat = require('metalsmith-concat');
const dateFormat = require('metalsmith-date-formatter');
const drafts = require('metalsmith-drafts');
const feed = require('metalsmith-feed');
const markdown = require('metalsmith-markdown');
const metadata = require('metalsmith-writemetadata');
const move = require('metalsmith-movey').default;
const permalinks = require('metalsmith-permalinks');
const postcss = require('metalsmith-postcss');
const templates = require('metalsmith-layouts');
const uglifyjs = require('metalsmith-uglifyjs');

Metalsmith(__dirname)
  .metadata({
    site: {
      lang: 'en-gb',
      title: 'Blank Groundwork',
      description: 'Blank Metalsmith blog template',
      url: 'https://blank.groundwork.rocks/',
      author: 'Jake Rayson'
    }
  })
  .source('./src')
  .destination('./build')
  // Does fresh build every time. Can slow down sites with lots of pages.
  .clean(true)
  // Concatenation: the order is important
  // Concatenate CSS
  .use(
    concat({
      files: [
        'assets/css/settings/variables.css',
        'normalize.css/normalize.css',
        'assets/css/settings/base.css',
        'assets/css/settings/typography.css',
        'assets/css/settings/responsive.css',
        'modules/objects/**/*.css',
        'modules/components/**/**/*.css',
        'modules/utilities/**/**/*.css',
        'assets/css/shame.css'
      ],
      searchPaths: ['node_modules'],
      output: 'assets/styles.css'
    })
  )
  .use(markdown())
  .use(permalinks())
  .use(
    templates({
      engine: 'handlebars'
    })
  )
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
