# WebUI Rails Sample

## Related

- [WebUI Library](https://github.com/mikoweb/webui)
- [WebUI CLI Installation](https://github.com/mikoweb/node-webui-installer)

## Goals

- Implement the WebUI in Rails application.
- Add support for ECMAScript 2015.

## Requirements

- JavaScript application must be independent of backend and assets mechanism.
- Should have support for modular architecture.
- JavaScript compilation by [Babel](https://babeljs.io/) and [Grunt](http://gruntjs.com/).

## Compile JavaScript

### On production

    grunt js-prod

### On development

I. Step

    grunt js-dev

II. Step - Don't close this process.

    cd private/src && grunt && grunt watch:dist

Command `grunt watch:dist` will compile your ES2015 sources on-the-flight when you modify any file from `private/src/js`.

## License

This source is under the BSD 4-clause license. See the complete license in the file:

    LICENSE
