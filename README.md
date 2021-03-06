# Groundwork

## Development has halted 😞 Please [@gohugoio](https://github.com/gohugoio/) & [Indiego](https://github.com/growdigital/indiego) 🙂

[![Issue Count][issue-badge]][issue-url] [![Dependency Status][dep-badge]][dep-url] [![Build status][build-badge]][build-url]

### Metalsmith blog template. It rocks.

![Groundwork logo](src/modules/components/graphics/logo/logo.png)

[Static site](https://www.staticgen.com/) blog template built with [Metalsmith](http://www.metalsmith.io/), featuring Modular CSS, for web designers that code. Promoting [IndieWeb](https://indieweb.org/) principles of [Publish (on your) Own Site, Syndicate Elsewhere](https://indieweb.org/POSSE).

## Installation

Install with `$ git clone…` _**not**_ `$ npm install…`. Make sure you have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/).

```
$ git clone git@github.com:growdigital/groundwork
$ cd groundwork
$ npm install
$ npm run dev
```

## Features

* Simple installation via `git clone`
* Modular CSS and JS: each component/object is a separate file
* Auto-publish to Twitter, Facebook and Google+
* Blog and status post types set up

## Documentation

1. Make it your own: enter your details in `package.json` and `index.js`
2. Change your CSS settings `/src/assets/css/settings/`
3. Modify/create templates in `/layouts/` and `/partials/`
4. Add new modules in `/src/components/` (discrete components) and `/src/objects/` (design patterns).
5. Get rid of legacy CSS in `/src/assets/css/shame.css`
6. Create new posts in `/src/posts/`
7. Push to your git repo eg on [GitHub](https://github.com/)
8. Publish to the platform of your choice eg [Netlify](https://www.netlify.com), [Now](https://zeit.co/now), [Surge](https://surge.sh/)…

In-depth documentation: [www.groundwork.rocks](https://www.groundwork.rocks/)

Issues and features in the [Groundwork Roadmap](https://github.com/growdigital/groundwork/projects/1) 😍

## Contact

* Jake Rayson [contact@growdigital.org](contact@growdigital.org) [@growdigital](https://twitter.com/growdigital)
* Twitter [@GroundworkRocks](https://twitter.com/GroundworkRocks)

Made with pride in [Wales](https://en.wikipedia.org/wiki/Wales)

[![Deploys by Netlify](https://www.netlify.com/img/global/badges/netlify-dark.svg)](https://www.netlify.com)

[issue-badge]: https://codeclimate.com/github/growdigital/groundwork/badges/issue_count.svg
[issue-url]: https://codeclimate.com/github/growdigital/groundwork/issues
[dep-badge]: https://www.versioneye.com/user/projects/599ca850368b08141959f90f/badge.svg?style=flat-square
[dep-url]: https://www.versioneye.com/user/projects/58d97d9226a5bb002b54bea2
[build-badge]: https://travis-ci.org/growdigital/groundwork.svg?branch=master
[build-url]: https://travis-ci.org/growdigital/groundwork
