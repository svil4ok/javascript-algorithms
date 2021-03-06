module.exports = function (grunt) {
  'use strict';

  grunt.config('eslint', {
    default: {
      options: {
        format: require('eslint-stylish-config')
      },
      src: ['algorithms/**/*.js', 'spec/**/*.js']
    }
  });
};
