/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/api/api.js":
/*!************************************!*\
  !*** ./src/controllers/api/api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../middlewares/error-handler */ "./src/middlewares/error-handler.js");
/* harmony import */ var _services_extractor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/extractor */ "./src/services/extractor.js");
/* harmony import */ var _services_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/seo */ "./src/services/seo.js");
/* harmony import */ var xmlbuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xmlbuilder */ "xmlbuilder");
/* harmony import */ var xmlbuilder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xmlbuilder__WEBPACK_IMPORTED_MODULE_5__);






process.setMaxListeners(0);

var Api = function Api(app) {
  app.get('/audit-domain', (0,_middlewares_error_handler__WEBPACK_IMPORTED_MODULE_2__.asyncHandler)( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(req, res) {
      var url, results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = 'https://pablomonteserin.com';
              _context.next = 3;
              return (0,_services_seo__WEBPACK_IMPORTED_MODULE_4__.getSEO)(url, _services_extractor__WEBPACK_IMPORTED_MODULE_3__.SEOExtractor);

            case 3:
              results = _context.sent;
              res.send(results);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
  app.get('/audit-habitaclia', (0,_middlewares_error_handler__WEBPACK_IMPORTED_MODULE_2__.asyncHandler)( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(req, res) {
      var url, results, root, channel, xml;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // const url = 'https://www.idealista.com/alquiler-viviendas/barcelona/gracia/con-pisos,duplex,aticos,amueblado_solo-cocina-equipada,ultimas-plantas/';
              //    const url = 'https://pablomonteserin.com';
              // const url = 'https://www.tecnoempleo.com/';
              url = 'https://www.habitaclia.com/alquiler-distrito_sarria_sant_gervasi-barcelona.htm?#id3983001590838';
              _context2.next = 3;
              return (0,_services_seo__WEBPACK_IMPORTED_MODULE_4__.getRSS)(url, _services_extractor__WEBPACK_IMPORTED_MODULE_3__.HabitacliaExtractor);

            case 3:
              results = _context2.sent;
              console.log(results);
              root = xmlbuilder__WEBPACK_IMPORTED_MODULE_5___default().create('rss');
              channel = root.ele('channel');
              channel.ele('title', 'Habitaclia');
              channel.ele('link', 'https://www.habitaclia.com/');
              channel.ele('description', '');
              results.forEach(function (r) {
                var item = channel.ele('item');
                item.ele('title', r.title);
                item.ele('link', r.link);
                item.ele('description', '');
              });
              xml = root.end({
                pretty: true
              });
              console.log(xml);
              res.send(xml);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/controllers/index.js":
/*!**********************************!*\
  !*** ./src/controllers/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/controllers/api/api.js");


var Controllers = function Controllers(app) {
  (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.default)(app);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controllers);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./src/middlewares/index.js");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers */ "./src/controllers/index.js");




var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var port = process.env.PORT || 3005;
(0,_middlewares__WEBPACK_IMPORTED_MODULE_2__.default)(app);
(0,_controllers__WEBPACK_IMPORTED_MODULE_3__.default)(app);
var server = http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app);
server.listen(port, function () {
  return console.log("Server listening to http://localhost:".concat(port));
});

/***/ }),

/***/ "./src/middlewares/error-handler.js":
/*!******************************************!*\
  !*** ./src/middlewares/error-handler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncHandler": () => /* binding */ asyncHandler,
/* harmony export */   "socketHandler": () => /* binding */ socketHandler
/* harmony export */ });
/*Tenemos una función que recibe como parámetro la función de cada controlador,
la ejecuta (resolve)
y si  hay algún error, lo mostrará por consola y lanzará un 500
*/
var asyncHandler = function asyncHandler(controller) {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next))["catch"](function (err) {
      console.error('Request error:' + err.toString());
      if (err) return res.sendStatus(500).send();
    });
  };
};
var socketHandler = function socketHandler(controller) {
  return function (msg) {
    return Promise.resolve(controller(msg))["catch"](function (err) {
      console.error('Socket error:' + err);
    });
  };
};

/***/ }),

/***/ "./src/middlewares/index.js":
/*!**********************************!*\
  !*** ./src/middlewares/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);



var Middlewares = function Middlewares(app) {
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded());
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());
  app.use(cors__WEBPACK_IMPORTED_MODULE_0___default()());
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      next();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Middlewares);

/***/ }),

/***/ "./src/services/crawler.js":
/*!*********************************!*\
  !*** ./src/services/crawler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPage": () => /* binding */ getPage
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



var puppeteer = __webpack_require__(/*! puppeteer */ "puppeteer");

var getPage = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, evaluate) {
    var browser, page, evaluation;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return puppeteer.launch({
              ignoreDefaultArgs: ['--disable-extensions'],
              args: ['--disable-dev-shm-usage', "--window-size=1440,1000", "--disable-setuid-sandbox"]
            });

          case 2:
            browser = _context.sent;
            _context.next = 5;
            return browser.newPage();

          case 5:
            page = _context.sent;
            _context.next = 8;
            return page.setRequestInterception(true);

          case 8:
            _context.next = 10;
            return page.setExtraHTTPHeaders({
              'user-agent': 'Mozilla / 5.0(Windows NT 10.0; Win64; x64) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 87.0.4280.141 Safari / 537.36'
            });

          case 10:
            page.on('request', function (request) {
              if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
                request.abort();
              } else {
                request["continue"]();
              }
            });
            _context.prev = 11;
            page.setDefaultNavigationTimeout(0);
            _context.next = 15;
            return page["goto"](url, {
              timeout: 0,
              waitUntil: 'networkidle2'
            });

          case 15:
            _context.next = 22;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](11);
            _context.next = 21;
            return browser.close();

          case 21:
            return _context.abrupt("return", null);

          case 22:
            _context.next = 24;
            return page.evaluate(evaluate);

          case 24:
            evaluation = _context.sent;
            _context.next = 27;
            return browser.close();

          case 27:
            return _context.abrupt("return", evaluation);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 17]]);
  }));

  return function getPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/services/extractor.js":
/*!***********************************!*\
  !*** ./src/services/extractor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEOExtractor": () => /* binding */ SEOExtractor,
/* harmony export */   "HabitacliaExtractor": () => /* binding */ HabitacliaExtractor
/* harmony export */ });
var SEOExtractor = function SEOExtractor() {
  var getElements = function getElements(selector, property) {
    return Array.from(document.querySelectorAll(selector)).map(function (tag) {
      return tag[property];
    });
  };

  var h1Texts = getElements('h1', 'innerText');
  var links = getElements('a', 'href');
  var imgSrc = getElements('img', 'src');
  var titleText = getElements('title', 'innerText');
  var metaDescription = getElements('meta[name=description]', 'content');
  return {
    h1Texts: h1Texts,
    links: links,
    imgSrc: imgSrc,
    titleText: titleText,
    metaDescription: metaDescription
  };
};
var HabitacliaExtractor = function HabitacliaExtractor() {
  var getElements = function getElements(item, selector, property) {
    return Array.from(item.querySelectorAll(selector)).map(function (tag) {
      return tag[property];
    });
  };

  var getItem = function getItem(item) {
    var title = getElements(item, '.list-item-title', 'innerText')[0];
    var link = getElements(item, '.list-item-title a', 'href')[0];
    var price = getElements(item, '.list-item-price .font-2', 'innerText')[0];
    var imgSrc = getElements(item, '.image img', 'src')[0];
    return {
      title: title,
      link: link,
      price: price,
      imgSrc: imgSrc
    };
  };

  var items = Array.from(document.querySelectorAll('.list-item')).map(function (tag) {
    return getItem(tag);
  });
  return items;
};

/***/ }),

/***/ "./src/services/seo-validations.js":
/*!*****************************************!*\
  !*** ./src/services/seo-validations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateImages": () => /* binding */ validateImages,
/* harmony export */   "validateH1": () => /* binding */ validateH1,
/* harmony export */   "validateTitle": () => /* binding */ validateTitle,
/* harmony export */   "validateMetaDescription": () => /* binding */ validateMetaDescription,
/* harmony export */   "validate": () => /* binding */ validate
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

var validateImages = function validateImages() {
  var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    images: images.filter(function (o) {
      return o.alt == null || o.alt == '';
    })
  };
};
var validateH1 = function validateH1() {
  var h1s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    count: h1s.length,
    tooShort: h1s.filter(function (txt) {
      return txt && txt.length < 20;
    }),
    tooLong: h1s.filter(function (txt) {
      return txt && txt.length > 70;
    })
  };
};
var validateTitle = function validateTitle() {
  var titles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    count: titles.length,
    tooLong: titles.filter(function (txt) {
      return txt && txt.length > 65;
    })
  };
};
var validateMetaDescription = function validateMetaDescription() {
  var descriptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    count: descriptions.length,
    tooLong: descriptions.filter(function (txt) {
      return txt && txt.length > 155;
    })
  };
};
var validate = function validate(results) {
  var _ref;

  var imgResults = validateImages(results.imgSrc);
  var h1Results = validateH1(results.h1Texts);
  var titleResults = validateTitle(results.titleText);
  var metaDescriptionResults = validateMetaDescription(results.metaDescription);
  return _ref = {
    imgResults: imgResults,
    titleResults: titleResults,
    h1Results: h1Results
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "titleResults", titleResults), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "metaDescriptionResults", metaDescriptionResults), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "links", results.links), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "url", results.url), _ref;
};

/***/ }),

/***/ "./src/services/seo.js":
/*!*****************************!*\
  !*** ./src/services/seo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSEO": () => /* binding */ getSEO,
/* harmony export */   "getRSS": () => /* binding */ getRSS
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _seo_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seo-validations */ "./src/services/seo-validations.js");
/* harmony import */ var _crawler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crawler */ "./src/services/crawler.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/url */ "./src/utils/url.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var getSEO = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(baseUrl, extractor) {
    var trackedLinks, allResults, extractPageData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            trackedLinks = [baseUrl];
            allResults = [];

            extractPageData = /*#__PURE__*/function () {
              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, extractor) {
                var results, domainLinks, untrackedLinks, pageLinks;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0,_crawler__WEBPACK_IMPORTED_MODULE_4__.getPage)(url, extractor);

                      case 2:
                        results = _context.sent;

                        if (!results) {
                          _context.next = 13;
                          break;
                        }

                        domainLinks = results.links.filter((0,_utils_url__WEBPACK_IMPORTED_MODULE_5__.hasMainDomain)(baseUrl));
                        untrackedLinks = domainLinks.filter(function (link) {
                          return !trackedLinks.includes(link);
                        });
                        allResults.push(_objectSpread(_objectSpread({}, results), {}, {
                          url: url
                        }));

                        if (!untrackedLinks.length) {
                          _context.next = 11;
                          break;
                        }

                        pageLinks = untrackedLinks.map(function (link) {
                          trackedLinks.push(link);
                          return extractPageData(link, extractor);
                        });
                        _context.next = 11;
                        return Promise.all(pageLinks);

                      case 11:
                        _context.next = 14;
                        break;

                      case 13:
                        allResults.push({
                          url: url,
                          error: true
                        });

                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function extractPageData(_x3, _x4) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.next = 5;
            return extractPageData(baseUrl, extractor);

          case 5:
            return _context2.abrupt("return", allResults);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSEO(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getRSS = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(baseUrl, extractor) {
    var allResults, extractPageData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            allResults = [];

            extractPageData = /*#__PURE__*/function () {
              var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(url, extractor) {
                var results;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return (0,_crawler__WEBPACK_IMPORTED_MODULE_4__.getPage)(url, extractor);

                      case 2:
                        results = _context3.sent;

                        if (results) {
                          //allResults.push(results);
                          allResults = results;
                        } else {
                          allResults.push({
                            url: url,
                            error: true
                          });
                        }

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function extractPageData(_x7, _x8) {
                return _ref4.apply(this, arguments);
              };
            }();

            _context4.next = 4;
            return extractPageData(baseUrl, extractor);

          case 4:
            return _context4.abrupt("return", allResults);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getRSS(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/url.js":
/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMediaUrl": () => /* binding */ isMediaUrl,
/* harmony export */   "hasMainDomain": () => /* binding */ hasMainDomain
/* harmony export */ });
var isMediaUrl = function isMediaUrl(url) {
  return url.match(/png$|jpg$|jpeg$|gif$|webm$|mp4$|mpg$|mp4$|svg$/g);
};
var hasMainDomain = function hasMainDomain(baseUrl) {
  return function (url) {
    return url.startsWith(baseUrl) && !url.includes('#') && !isMediaUrl(url);
  };
};

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("puppeteer");;

/***/ }),

/***/ "xmlbuilder":
/*!*****************************!*\
  !*** external "xmlbuilder" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("xmlbuilder");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map