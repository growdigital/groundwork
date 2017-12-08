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
    // title: "My Static Site & Blog",
    description: 'description',
    generator: 'Metalsmith',
    url: 'http://www.metalsmith.io/'
  })
  .source('./src')
  .destination('./build')
  .clean(false)
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
