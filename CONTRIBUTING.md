# Contributing Guide

Thank you for checking out this doc and _hopefully_ thinking about contributing to this project. While this project is relatively simple, we are still always open for contributions!

If you are interested in finding ways to contribute to this project, check out the currently open issues [here](https://github.com/tmobaird/probot-welcome/issues).

For more information about probot, check out [the project](https://github.com/probot/probot).

For those looking to contribute, here's some additional info about contributing to this project:

### Setting Up Your Dev Environment

To set up the development environment for this project, there are a couple of prerequisites you will need. Those are:

- Node (version >= 7.7.0)
- NPM (version >= 4)

[Here's a relatively straight forward guide about installing those two](https://docs.npmjs.com/getting-started/installing-node). Once you have those installed, git clone this project:

```
git clone git@github.com:tmobaird/probot-welcome.git
```

`cd` into the project's directory, and run `npm install` to install all necessary project dependencies.

Your dev environment should now be fully set up.

### Tests

This project uses [Mocha](https://mochajs.org/) for it's automated tests. All tests can be found in the [`test`](https://github.com/tmobaird/probot-welcome/tree/master/test) directory. When contributing to this project, all the tests must be passing. To run the tests, simply run:

```
npm run test
```

from the command line, in the project's root. Keep in mind that `npm run test` will run both mocha tests and xo code linting. For more information about code linting, continue to the next section [Code Linting](#code-linting).

### Code Linting

This project uses [xo](https://github.com/sindresorhus/xo) for code style linting. Running xo will help you find any bad styles within your JavaScript code. To run xo for this project, simply run:

```
npm run test
```

from the command line, in the project's root. If any bad styles are encountered, it will display those to you. Make sure you keep up with any xo code linting issues, because any code with linting offenses will NOT be merged into master.

### Git Strategy/Flow

The git flow for this project is very straight forward:

1. Fork the project on Github: [Fork Me](https://github.com/tmobaird/probot-welcome).
2. Clone your fork to your personal dev machine.
3. From git, checkout a new branch that is named something related to your change. Example: `git checkout -b docs/updating-readme`.
4. Make your changes and stage all file changes (`git add -A`).
5. Commit your changes with a descriptive commit message (`git commit -m "Some descriptive commit message"`).
6. Push up your changes to your remote forked repo (`git push origin branch-name`).
7. Create pull request to main repo (base fork should be the main project: tmobaird/welcome-bot, base: master. Head fork should be your forked repo, compare: branch-name).

And that's it! If you have any questions about contributing to this project, feel free to email Thomas Baird at **tmobaird@gmail.com**. :v:.
