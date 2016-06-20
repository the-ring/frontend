'use strict';

/* eslint-disable global-require */

const deepAssign = require('deep-assign');
const gulp = require('gulp');
const gutil = require('gulp-util');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = require('express')();

const port = require('./config').react.frontend.port;
const config = deepAssign({}, require('the-ring-main-styles/config'), require('./config').styles);
const webpackConfig = require('./webpack.config');
const webpackProductionConfig = require('./webpack.config.prod');

gulp.task('css', () =>
  gulp.src('src/styles/main.pcss')
  .pipe(postcss([
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-external-vars')({
      data: Object.assign({}, config.icons, config.fonts, config.colors, config.other)
    }),
    require('postcss-inline-svg'),
    require('postcss-svgo'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({ browsers: ['IE >= 10', 'last 3 versions', '> 3%'] })
  ], { parser: require('postcss-safe-parser') }))
  .pipe(cssnano())
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('dist/'))
);

gulp.task('webpack:build', ['css'], callback =>
  webpack(webpackProductionConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  })
);

gulp.task('webpack-dev-server', ['css'], callback => {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });

  app.listen(port, err => {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', `http://localhost:${port}`);
    return callback();
  });
});

gulp.task('default', () => gulp.start('build'));

gulp.task('build', ['webpack:build']);

gulp.task('watch', ['css', 'webpack-dev-server'], () => gulp.watch(['src/styles/**'], ['css']));
