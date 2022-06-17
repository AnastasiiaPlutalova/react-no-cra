# react-no-cra
This is an react app which is set up without create-react-app command.

To set up react app from scratch with webpack:
* `npm init`
* `npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin`
* `npm i @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader`
* `npm i react react-dom`
* Create `webpack.config.js`, set mode to development, add HtmlWebpackPlugin
* Add scripts to `package.json`
```
"scripts": {
    "start": "webpack serve",
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```


Entry point: `src/index.js`

HTML: `publick/index.html`

## Other branches
* Simple CountClicks component without jsx: [no_jsx_components](https://github.com/AnastasiiaPlutalova/react-no-cra/tree/no_jsx_components)  
* Using context: [using_context](https://github.com/AnastasiiaPlutalova/react-no-cra/tree/context) 
* Simple modal with render prop content: [render_prop](https://github.com/AnastasiiaPlutalova/react-no-cra/tree/render-props)
* Refs: [refs](https://github.com/AnastasiiaPlutalova/react-no-cra/tree/ref)
  * Get data from file input after for submission,
  * Set focus on nested text input
* [URL shortener](https://github.com/AnastasiiaPlutalova/react-no-cra/blob/url_shortener/README.md)
