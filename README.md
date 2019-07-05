## Single Page Starter

Creates a single page project using:
- [Webpack](https://webpack.js.org/)
- [Handlebars](http://handlebarsjs.com/)
- [Sass](https://sass-lang.com/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/docs/en/getting-started), [jest-dom](https://github.com/testing-library/jest-dom), [@testing-library/dom](https://testing-library.com/docs/intro)

Initial structure of the project:
```
|-- single-page-starter
	|-- build (generates with watch or build)
	|-- src
		|-- images
		|-- partials
			|-- content.handlebars
			|-- header.handlebars
		|-- scss
			|-- common
				|-- _layout.scss
				|-- _mixins.scss
				|-- _variables.scss
			|-- index.scss
		|-- favicon.ico
		|-- index.handlebars
		|-- index.js
	|-- .editorconfig
	|-- .gitignore
	|-- package.json
	|-- README.md
	|-- webpack.config.js
	|-- package.json
	|-- yarn.lock
```


### Install dependencies:
```
$ yarn install
```

### Run webpack server:
```
$ yarn server
```

### Run developer mode:
```
$ yarn watch
```

### Generate a static build:
```
$ yarn build
```
