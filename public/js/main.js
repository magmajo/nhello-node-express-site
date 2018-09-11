/* eslint-disable no-inline-comments,no-unused-vars */
/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
// import $ from 'jquery';
// import screenfull from 'screenfull';
// import Swiper from 'swiper';

// var $ = require('jquery');
// var screenfull = require('screenfull');
// var Swiper = require('swiper');

// initFullScreen
/*
function initFullScreen(button, target) {
  const el = document.getElementById(target);
  document.getElementById(button).addEventListener('click', () => {
    if (screenfull.enabled) {
      screenfull.request(el);
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      screenfull.toggle(document.getElementById('vidPlayer'));
    }
  }, false);
}

function initFullScreenWithJquery(button, target) {
  // const target = $(target)[0]; // Get DOM element from jQuery collection
  $(button).on('click', () => {
    if (screenfull.enabled) {
      screenfull.request(target);
    }
  });
}

function initFullScreenWithImage(img) {
  $(img).on('click', event => {
    if (screenfull.enabled) {
      screenfull.toggle(event.target);
    }
  });
}

// toggle fullscreen
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}
*/

/*
$(document).ready(function(){
  // jQuery methods go here...
});
*/

(function($) {
  'use strict';

  // var debug = require('node_modules/debug');
  // debug('test!');

  // console.log('hello world!');

  $('#hello').click(function() {
    $(this).hide();
  });

  // var $ = require('jquery');
  // var screenfull = require('screenfull');
  // var Swiper = require('swiper');

  /*
  // initialize swiper
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  // initialize fullscreen
  initFullScreen('button1', 'divSlide');

  // detect fullscreen
  if (screenfull.enabled) {
    screenfull.on('change', () => {
      console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
    });
  }
  */

  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }

  class ColorPoint extends Point {
    constructor(x, y, color) {
      super(x, y);
      this.color = color;
    }
    toString() {
      return super.toString() + ' in ' + this.color;
    }
  }

  let cp = new ColorPoint(25, 8, 'green');
  cp.toString(); // '(25, 8) in green'

  console.log(cp instanceof ColorPoint); // true
  console.log(cp instanceof Point); // true

  // Your custom JavaScript goes here
  console.log('hello world!');

  /*
  logA = debug('worker:a');
  logB = debug('worker:b');

  setInterval(function(){
    logA('doing some work');
  }, 1000);

  setInterval(function(){
    logB('doing some work');
  }, 1200);
  */
})(jQuery);
