# Gulp & Browserify Library Seed

This is a Kickstarter or a Seed project to use to build your own Library.

## Technologies used

* **[gulp](http://gulpjs.com/)**: Used for building
* **[browserify](http://browserify.org)**: Used for importing modules into the lib
* **[karma](http://karma-runner.github.io/0.12/index.html)**: Used for running tests on the lib
* **[mocha](http://visionmedia.github.io/mocha/)**: Used as the Testing framework
* **[Chai](http://chaijs.com/)**: Used as the expect/assertion library

## Gulp tasks

* **build**: Will output 4 files into the `dist` folder. 
  * **Browserified**: This outputs the library to be used as part of a Browserify project. This will include all js files in `src/`. It will output both a minified and not minified files.  
  * **Standalone**: This will output the library to be used as a global object. By default, it'll export the library with the same name as in the `package.json`. It's similar to how `$` is always there when you include `jQuery`
* **test**: It will run all the tests. A test is a JS file inside the `test` folder.
* **test-debug**: It will run all the tests but in debug mode. This means that the tests will be re run each time you save any file inside the `src` or `test` folder.

## Using it

Just `git clone` this repository and change the project name from the `package.json` to your library and that's it :).



