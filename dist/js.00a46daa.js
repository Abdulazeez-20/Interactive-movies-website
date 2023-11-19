// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Details = function render() {
  return "<h1 class=\"main-title\">Unrelative</h1>\n<section class=\"section hero-details-page\">\n    <div class=\"container\">\n            <div class=\"movie-trailar\">\n                <iframe width=\"500\" height=\"281\" src=\"https://www.youtube.com/embed/l0qvxPPISuY?si=K59BKf8LZHyGLX71&amp;start=9\"\n                title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n            </div>\n\n            <div class=\"movie-description\">\n                <h2 class=\"sub-title\">C++ Introduction</h2>\n                <p>The famous professor teaching programing</p>\n                <p>experties: 13 years of teaching</p>\n            </div>\n    </div>\n\n    <section class=\"section prof-personal-data\">\n        <div class=\"container\">\n            <h2 class=\"sub-title\">professor personal information</h2>\n            <ul>\n                <li>\n                    <span class=\"title\">name </span>\n                    <span class=\"value\">Mr. Kishore</span>\n                </li>\n                <li>\n                    <span class=\"title\">age </span>\n                    <span class=\"value\">Mid 50</span>\n                </li>\n                <li>\n                    <span class=\"title\">degree</span>\n                    <span class=\"value\">prof.</span>\n                </li>\n                <li>\n                    <span class=\"title\">contry</span>\n                    <span class=\"value\">India</span>\n                </li>\n            </ul>\n            \n        </div>\n\n    </section>\n</section>";
};
var _default = exports.default = Details;
},{}],"js/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Home = function render() {
  return "\n<section class=\"section hero featuredMovies has-bullets\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"slide featured\">\n\t\t\t\t\t\t<h2 class=\"featured-title\">Peaky Blinders</h2>\n\t\t\t\t\t\t<p class=\"featured-overview\">\u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u064A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0628\u0637\u0644 \u0643\u0627\u0644\u064A\u0646 \u0645\u0648\u0631\u0641\u064A \u0641\u064A \u062F\u0648\u0631 \u062A\u0648\u0645\u064A \u0634\u064A\u0644\u0628\u064A\u060C \u0642\u0627\u0626\u062F \u0627\u0644\u0639\u0635\u0627\u0628\u0629 \u0628\u0627\u0644\u0623\u0636\u0627\u0641\u0629 \u0625\u0644\u0649\n\t\t\t\t\t\t\t\u0633\u0627\u0645 \u0646\u064A\u0644 \u0641\u064A \u062F\u0648\u0631 \u0627\u0644\u0645\u062D\u0642\u0642 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u0642\u0645\u0639 \u0627\u0644\u0639\u0635\u0627\u0628\u0629. \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0645\u0642\u062A\u0628\u0633 \u0639\u0646 \u0639\u0627\u0626\u0644\u0629 \u0627\u0644\u0628\u064A\u0643\u064A \u0628\u0644\u0627\u064A\u0646\u062F\u0631\u0632 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0627\u0644\u0645\u0633\u0644\u0633\u0644 \u0639\u0631\u0636\n\t\t\t\t\t\t\t\u0644\u0627\u0648\u0644 \u0645\u0631\u0647 \u0639\u0644\u064A \u0628\u064A \u0628\u064A \u0633\u064A 2 \u0641\u064A 13 \u0633\u0628\u062A\u0645\u0628\u0631 2013 \u0644\u0645\u062F\u0629 6 \u062D\u0644\u0642\u0627\u062A</p>\n\t\t\t\t\t\t<p class=\"buttons\">\n\t\t\t\t\t\t\t<a href=\"#/details\" class=\"button\">\u0634\u0627\u0647\u062F \u0627\u0644\u0641\u064A\u0644\u0645</a>\n\t\t\t\t\t\t\t<a href=\"#/details\" class=\"button is-secondary\">\u0625\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F</a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"section movies slider has-arrows is-suggested\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<h3 class=\"section-title\">\u0625\u0642\u062A\u0631\u0627\u062D\u062A\u0646\u0627 \u0644\u0643</h3>\n\t\t\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"section movies slider has-arrows is-trending\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<h3 class=\"section-title\">\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629</h3>\n\t\t\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"section movies slider has-arrows is-series\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A</h3>\n\t\t\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<section class=\"section movies slider has-arrows is-movies\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0623\u0641\u0644\u0627\u0645</h3>\n\t\t\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</section>\n            ";
};
var _default = exports.default = Home;
},{}],"js/movies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Movies = function render() {
  return "\n<section >\n\t<div>\n\t\t<label>\u0627\u062E\u062A\u0627\u0631 \u0646\u0648\u0639 \u0627\u0644\u0641\u0644\u0645</label>\n\t\t<select name=\"movies-drop-list\" id=\"movies-drop-list\">\n\t\t\t<option value=\"\u0627\u0644\u0643\u0644\">\u0627\u0644\u0643\u0644</option>\n\t\t\t<option value=\"\u0627\u0643\u0634\u0646\">\u0627\u0643\u0634\u0646</option>\n\t\t\t<option value=\"\u062F\u0631\u0627\u0645\u0627\">\u062F\u0631\u0627\u0645\u0627</option>\n\t\t\t<option value=\"\u062E\u064A\u0627\u0644 \u0639\u0644\u0645\u064A\">\u062E\u064A\u0627\u0644 \u0639\u0644\u0645\u064A</option>\n\t\t\t<option value=\"\u0643\u0648\u0645\u064A\u062F\u064A\">\u0643\u0648\u0645\u064A\u062F\u064A</option>\n\t\t</select>\n\t</div>\n\n\n\t<section class=\"section movies slider has-arrows is-suggested\">\n\t\t<div class=\"container\">\n\t\t\t<h3 class=\"section-title\">\u0625\u0642\u062A\u0631\u0627\u062D\u062A\u0646\u0627 \u0644\u0643</h3>\n\t\t\t<ul class=\"moviesGrid\">\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"movie\">\n\t\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</section>\n</section>\n\n<section class=\"section movies slider has-arrows is-trending\">\n\t<div class=\"container\">\n\t\t<h3 class=\"section-title\">\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629</h3>\n\t\t<ul class=\"moviesGrid\">\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"images/movie2.svg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tBreaking Bad\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"images/movie3.svg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tPeaky Blinders\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"images/movie4.svg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Good Doctor\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"movie\">\n\t\t\t\t<a href=\"#/details\">\n\t\t\t\t\t<img src=\"images/movie1.svg\" />\n\t\t\t\t\t<span class=\"movie-description\">\n\t\t\t\t\t\t<span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n\t\t\t\t\t\tThe Maze Runner\n\t\t\t\t\t</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</section>";
};
var _default = exports.default = Movies;
},{}],"js/shows.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Shows = function render() {
  return "<section >\n    <div>\n    <label >\u0627\u062E\u062A\u0627\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u0644\u0633\u0644</label>\n    <select name=\"drop-list\" id=\"drop-list\">\n        <option value=\"\u0627\u0644\u0643\u0644\">\u0627\u0644\u0643\u0644</option>\n        <option value=\"\u0627\u0643\u0634\u0646\">\u0627\u0643\u0634\u0646</option>\n        <option value=\"\u062F\u0631\u0627\u0645\u0627\">\u062F\u0631\u0627\u0645\u0627</option>\n        <option value=\"\u062E\u064A\u0627\u0644 \u0639\u0644\u0645\u064A\">\u062E\u064A\u0627\u0644 \u0639\u0644\u0645\u064A</option>\n        <option value=\"\u0643\u0648\u0645\u064A\u062F\u064A\">\u0643\u0648\u0645\u064A\u062F\u064A</option>\n    </select>\n    </div>\n\n    <section class=\"section movies slider has-arrows is-series\">\n    <div class=\"container\">\n    <h3 class=\"section-title\">\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0633\u0644\u0633\u0644\u0627\u062A</h3>\n    <ul class=\"moviesGrid\">\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie1.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    The Maze Runner\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie2.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    Breaking Bad\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie1.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    The Maze Runner\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie2.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    Breaking Bad\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie3.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    Peaky Blinders\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie3.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    Peaky Blinders\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie4.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    The Good Doctor\n                </span>\n            </a>\n        </li>\n        <li class=\"movie\">\n            <a href=\"#/details\">\n                <img src=\"images/movie4.svg\" />\n                <span class=\"movie-description\">\n                    <span class=\"play-icon\"><i class=\"fas fa-play\"></i></span>\n                    The Good Doctor\n                </span>\n            </a>\n        </li>\n    </ul>\n    </div>\n</section>";
};
var _default = exports.default = Shows;
},{}],"images/logo.svg":[function(require,module,exports) {
module.exports = "/logo.236e4034.svg";
},{}],"js/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("../images/logo.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Header = function render() {
  return "\n    <div class=\"container\">\n\t\t\t\t\t<button class=\"navbar-burger\"><span class=\"navicon\"></span></button>\n\t\t\t\t\t<a class=\"navbar-item navbar-logo\" href=\"#/\"><img src=\"".concat(_logo.default, "\" width=\"80\"></a>\n\t\t\t\t\t<ul class=\"navbar-menu\">\n\t\t\t\t\t\t<li><a class=\"navbar-item active\" href=\"#/\">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a></li>\n\t\t\t\t\t\t<li><a class=\"navbar-item\" href=\"#/movies\">\u0623\u0641\u0644\u0627\u0645</a></li>\n\t\t\t\t\t\t<li><a class=\"navbar-item\" href=\"#/shows\">\u0645\u0633\u0644\u0633\u0644\u0627\u062A</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"navbar-search\">\n\t\t\t\t\t\t<input class=\"searchInput\" type=\"text\" name=\"search\" placeholder=\"\u0625\u0628\u062D\u062B \u0639\u0646 \u0641\u064A\u0644\u0645 \u0623\u0648 \u0645\u0633\u0644\u0633\u0644...\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>");
};
var _default = exports.default = Header;
},{"../images/logo.svg":"images/logo.svg"}],"js/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("../images/logo.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Footer = function render() {
  return "\n    <div class=\"container\">\n\t\t\t\t\t<section class=\"footer-nav\" role=\"navigation\">\n\t\t\t\t\t\t<a class=\"navbar-logo grayscale\" href=\"#/\"><img src=\"".concat(_logo.default, "\" width=\"80\"></a>\n\t\t\t\t\t\t<div class=\"navbar-menu\">\n\t\t\t\t\t\t\t\t<ul class=\"navbar-menu navbar-fix\" >\n\t\t\t\t\t\t\t\t\t<li><a class=\"navbar-item\" href=\"#/\">\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629</a></li>\n\t\t\t\t\t\t\t\t\t<li><a class=\"navbar-item\" href=\"#/movies\">\u0623\u0641\u0644\u0627\u0645</a></li>\n\t\t\t\t\t\t\t\t\t<li><a class=\"navbar-item\" href=\"#/shows\">\u0645\u0633\u0644\u0633\u0644\u0627\u062A</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"navbar-item logout\" href=\"#/logout\">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</a>\n\t\t\t\t\t</section>\n\t\t\t\t</div>");
};
var _default = exports.default = Footer;
},{"../images/logo.svg":"images/logo.svg"}],"js/login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("../images/logo.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Login = function render() {
  return "\n    <section class = \"login\">\n        <img class= \"login-logo\" src=\"".concat(_logo.default, "\" width=\"150px'>\n            <form id=\"loginForm\" method=\"POST\" action=\"/#\">   \n                <span class=\"form-field\">\n                    <label for=\"email\">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A</label>\n                    <input  type=\"email\" id=\"email\" required />\n                </span>\n\n                <span class= \"form-field\">\n                    <label for=\"password\">\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0633\u0631\u064A</label>\n                    <input type=\"password\" id=\"password\" required />\n                </span>\n\n                <span class= \"form-field\">\n                    <input type=\"submit\" value=\"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644\"/>\n                    <a href=\"#/register\">\u0627\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628</a>\n                </span>\n            </form>\n    </section>");
};
var _default = exports.default = Login;
},{"../images/logo.svg":"images/logo.svg"}],"js/register.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("../images/logo.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Register = function render() {
  return "\n    <section class = \"login\">\n        <img class= \"login-logo\" src=\"".concat(_logo.default, "\" width=\"150px'>\n            <form id=\"loginForm\" method=\"POST\" action=\"#/login\">\n\n                <span class=\"form-field\">\n                    <label for=\"email\">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A</label>\n                    <input required  type=\"email\" id=\"email\" />\n                </span>\n\n                \n                <span class= \"form-field\">\n                    <label for=\"password\">\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631</label>\n                    <input required type=\"password\" id=\"password\"/>\n                </span>\n\n                <span class= \"form-field\">\n                    <label for=\"password\">\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631</label>\n                    <input required type=\"password\" id=\"password\"/>\n                </span>\n\n                <span class= \"form-field\">\n                    <input type=\"submit\" value=\"\u0627\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628\" href=\"#/login\"/>\n                    <a href=\"#/login\">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>\n                </span>\n\n            </form>\n    </section>");
};
var _default = exports.default = Register;
},{"../images/logo.svg":"images/logo.svg"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _details = _interopRequireDefault(require("./details.js"));
var _home = _interopRequireDefault(require("./home.js"));
var _movies = _interopRequireDefault(require("./movies.js"));
var _shows = _interopRequireDefault(require("./shows.js"));
var _header = _interopRequireDefault(require("./header.js"));
var _footer = _interopRequireDefault(require("./footer.js"));
var _login = _interopRequireDefault(require("./login.js"));
var _register = _interopRequireDefault(require("./register.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.querySelector("header").innerHTML = (0, _header.default)();
document.querySelector("footer").innerHTML = (0, _footer.default)();
document.querySelector(".navbar-burger").addEventListener("click", function () {
  return document.querySelector("header").classList.toggle("is-active");
});
function renderPage() {
  var currentPage;
  switch (window.location.hash) {
    case "#/":
      currentPage = (0, _home.default)();
      break;
    case "#/movies":
      currentPage = (0, _movies.default)();
      break;
    case "#/shows":
      currentPage = (0, _shows.default)();
      break;
    case "#/details":
      currentPage = (0, _details.default)();
      break;
    case "#/login":
      currentPage = (0, _login.default)();
      break;
    case "#/register":
      currentPage = (0, _register.default)();
      break;
    default:
      currentPage = "404";
      break;
  }
  if (window.location.hash !== "#/login" && window.location.hash !== "#/register") {
    document.querySelector("body").classList.remove("is-loggedOut");
    document.querySelector("header").innerHTML = (0, _header.default)();
  } else {
    document.querySelector("header").innerHTML = null;
    document.querySelector("footer").innerHTML = null;
    document.querySelector("body").classList.add("is-loggedOut");
  }
  document.querySelector("#root").innerHTML = currentPage;
  return currentPage;
}
window.onhashchange = renderPage;
renderPage();
document.querySelector("#loginForm").addEventListener('submit', function () {
  e.preventDefault();
  var loginObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  };
  if (loginObj) {
    console.log(loginObj);
  }
});
},{"./details.js":"js/details.js","./home.js":"js/home.js","./movies.js":"js/movies.js","./shows.js":"js/shows.js","./header.js":"js/header.js","./footer.js":"js/footer.js","./login.js":"js/login.js","./register.js":"js/register.js"}],"C:/Users/3d/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50096" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/3d/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map