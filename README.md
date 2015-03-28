# ttracker.io - Kanban Issue Tracker - [A demo of the project](http://ttracker.io)

[![Join the chat at https://gitter.im/wallynm/ttracker](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/wallynm/ttracker?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Task Tracker (TTracker) it's project focused into issues solving integrated with a Kanban board, inside you can keep track of everything. Comments, subtasks, milestones into due and many other functions.

## Motivation

This project has the main reason to make issues management a way better, including several integrations alongside.

## Technologies
Not every library is listed here, only the core ones, a list of each lib can be found at the end of this file into the section of credits.
These are the main thechnologies/libs been used:

- [NodeJS](https://nodejs.org/)
- [MongoDB](https://mongodb.org/) (OR another non-relational database)
- [jQuery](https://jquery.com)
- [Backbone](http://backbonejs.org/)
- [Marionette](http://marionettejs.com/)
- [RequireJS](http://requirejs.org/)
- [UnderscoreJS](http://underscorejs.org/)
- [Bootstrap](http://getbootstrap.com/)



## Installation

In order to install and run the app you will need to install nodejs and bower into the server which will install all the dependencies needed into the frontend app:

    npm install bower -g
    bower install


## CSS Structure

As base css architecture we use Bottstrap 3 with our own modifications, we don't touch any of the original files of bootstrap less files, so keep they untouchable, any needed change apply it inside of the /public/less directory and @import your added file into main.less, this way everything keeps more easily to maintain.

To build and see any visual change you need to run the gulp file inside build folder, it will take care of compile all the less files and apply any new change into the main.css file.

To build just run this commands:

    cd build
    gulp less

## Roadmap 1.0.0

- Github integration for login
- Bitbucket integration for login
- Creation of projects based on the repositories already found into the user account
- Basic layout for issues tracking
- Open issues from TTracker board
- Close issues from TTracker board
- Set labels from TTracker board

## Roadmap 1.1.0

- Gitlab integration
- Ability to comment issues without need to leave TTracker board
- Create subtasks inside TTracker issues (Analyse if we're going to create sub issues linked, or just a refference to a simple checklist)
- Filtering issues based on Milestones
- Filtering issues based on Labels

##Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## License

The MIT License (MIT)

Copyright (c) 2013 Matt Lambert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
