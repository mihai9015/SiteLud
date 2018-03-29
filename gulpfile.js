'use strict';

const gulp = require('gulp');
const pump = require('pump');
const rimraf = require('rimraf');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const pathfinder = require('./gulp-pathfinder.js');
const htmlreplace = require('gulp-html-replace');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const fs = require('fs');

const indexRefs = [];
const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const destPath = 'dist';

gulp.task('clear', cb => rimraf(destPath, cb));

gulp.task('index', ['clear'], () => pump([
  gulp.src(['src/index.html'], { base: 'src/' }),
  pathfinder(indexRefs),
  htmlreplace({
    js: `bundle.js?v=${version}`,
    templates: `templates.js?v=${version}`,
    css: `bundle.css?v=${version}`,
  }),
  gulp.dest(destPath),
]));

gulp.task('indexRefs', ['index'], (cb) => {
  const refs = indexRefs.map(path => `src/${path}`)
  pump([
    gulp.src([...refs, 'src/images/**'], { base: 'src/' }),
    // TODO: replace rest url in config.js
    gulpif(file => file.path.endsWith('.js') && !file.path.endsWith('.min.js'), babel({ presets: ['es2015'] })),
    gulpif(file => file.path.endsWith('.js'), concat('bundle.js')),
    gulpif(file => file.path.endsWith('.css'), concatCss('bundle.css')),
    gulpif(file => file.path.endsWith('.css'), cleanCSS()),
    gulpif(file => file.path.endsWith('.js'), uglify()),
    gulp.dest(destPath),

  ], cb);
});

gulp.task('build', ['indexRefs']);
gulp.task('default', ['build']);
