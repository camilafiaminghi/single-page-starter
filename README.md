## Single Page Starter

Creates a single page project using:
- Webpack
- Handlebars
- Sass
- Babel
- Jest

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
