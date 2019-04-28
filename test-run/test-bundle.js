/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./all-tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./all-tests.js":
/*!**********************!*\
  !*** ./all-tests.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tests */ \"./tests/index.js\");\n\nnew _tests__WEBPACK_IMPORTED_MODULE_0__[\"AppStateTests\"]().runAll();\n\n//# sourceURL=webpack:///./all-tests.js?");

/***/ }),

/***/ "./appstate.js":
/*!*********************!*\
  !*** ./appstate.js ***!
  \*********************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppState\", function() { return AppState; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction required() {\n  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  throw new Error(\"A missing parameter was encountered \".concat(param));\n}\n/**\n * Controls basic state and event handling.\n */\n\n\nvar AppState =\n/*#__PURE__*/\nfunction () {\n  function AppState() {\n    _classCallCheck(this, AppState);\n\n    this.eventSubscription = {};\n    this.eventStateData = {};\n    this.getStateData = this.getStateData.bind(this);\n    this.setStateData = this.setStateData.bind(this);\n    this.subscribe = this.subscribe.bind(this);\n    this.unsubscribe = this.unsubscribe.bind(this);\n    this.raiseEvent = this.raiseEvent.bind(this);\n  }\n  /**\n   * Retrieves the data associated with the specified State.\n   * @param {*} stateVariable The State data to retrieve.\n   */\n\n\n  _createClass(AppState, [{\n    key: \"getStateData\",\n    value: function getStateData(stateVariable) {\n      return this.eventStateData[stateVariable];\n    }\n    /**\n     * Associates the specified State variable to the data.\n     * @param {*} stateVariable The State variable to set the data for.\n     * @param {*} data The data to set.\n     */\n\n  }, {\n    key: \"setStateData\",\n    value: function setStateData(stateVariable, data) {\n      this.eventStateData[stateVariable] = data;\n    }\n    /**\n     * Subscribes the object to the specified list of Events.\n     * @param {*} obj Required. The object to subscribe.\n     * @param  {...any} args Required. A list of one or more Events to subscribe the object to.\n     */\n\n  }, {\n    key: \"subscribe\",\n    value: function subscribe() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : required(\"obj\");\n\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      if (args.length == 0) throw \"objs cannot be null, and at least one arg must be specified\";\n\n      for (var _i = 0, _args = args; _i < _args.length; _i++) {\n        var eventName = _args[_i];\n        if (this.eventSubscription[eventName] == null) this.eventSubscription[eventName] = [];\n        if (this.eventSubscription[eventName].find(function (o) {\n          return o == obj;\n        }) == null) this.eventSubscription[eventName].push(obj);\n      }\n    }\n    /**\n     * Unsubscribes the specified object from the Events in the args parameter, or all Events if this parameter is left empty.\n     * @param {*} obj Required. The object to unsubscribe.\n     * @param  {...any} args Optional. The Events to unsubscribe from. If this parameter is empty, the object is unsubscribed from all Events.\n     */\n\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : required(\"obj\");\n\n      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        args[_key2 - 1] = arguments[_key2];\n      }\n\n      // args is never null\n      if (args.length > 0) {\n        for (var _i2 = 0, _args2 = args; _i2 < _args2.length; _i2++) {\n          var eventName = _args2[_i2];\n\n          if (this.eventSubscription[eventName] != null) {\n            this.eventSubscription[eventName] = this.eventSubscription[eventName].filter(function (val, index, arr) {\n              return val != obj;\n            });\n            console.log(\"Unsubscribed an object for event \".concat(eventName, \".\"));\n          }\n        }\n      } else {\n        var arr = Object.keys(this.eventSubscription);\n\n        for (var _i3 = 0, _arr = arr; _i3 < _arr.length; _i3++) {\n          var key = _arr[_i3];\n          this.eventSubscription[key] = this.eventSubscription[key].filter(function (val, index, arr) {\n            return val != obj;\n          });\n        }\n\n        console.log(\"Globally unsubscribed an object.\");\n      }\n    }\n  }, {\n    key: \"getSubscriptionCount\",\n    value: function getSubscriptionCount() {\n      var count = 0;\n      var arr = Object.keys(this.eventSubscription);\n\n      for (var _i4 = 0, _arr2 = arr; _i4 < _arr2.length; _i4++) {\n        var key = _arr2[_i4];\n        count += this.eventSubscription[key].length;\n      }\n\n      return count;\n    }\n    /**\n     * Invoke all event handlers passing in the associated event data.\n     * @param {*} event Required. The Event to raise.\n     * @param {*} data Optional. The data associated with the Event to raise.\n     */\n\n  }, {\n    key: \"raiseEvent\",\n    value: function raiseEvent() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : required(\"event\");\n      var data = arguments.length > 1 ? arguments[1] : undefined;\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.eventSubscription[event][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var objToInvoke = _step.value;\n\n          if (objToInvoke != null) {\n            if (objToInvoke[event] != null) // for objects\n              objToInvoke[event](event, data);else if (typeof objToInvoke === \"function\") // for functions\n              objToInvoke(event, data);\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return AppState;\n}();\n\n\n\n//# sourceURL=webpack:///./appstate.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appstate */ \"./appstate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AppState\", function() { return _appstate__WEBPACK_IMPORTED_MODULE_0__[\"AppState\"]; });\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./tests/appstate-tests.js":
/*!*********************************!*\
  !*** ./tests/appstate-tests.js ***!
  \*********************************/
/*! exports provided: AppStateTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateTests\", function() { return AppStateTests; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar events = {\n  TEST1: 'test1'\n};\n\nvar AppStateTests =\n/*#__PURE__*/\nfunction () {\n  function AppStateTests() {\n    _classCallCheck(this, AppStateTests);\n\n    this.appState = new _index__WEBPACK_IMPORTED_MODULE_0__[\"AppState\"]();\n    this.testUnsubscribe = this.testUnsubscribe.bind(this);\n    this.runAll = this.runAll.bind(this);\n  }\n\n  _createClass(AppStateTests, [{\n    key: \"testUnsubscribe\",\n    value: function testUnsubscribe() {\n      this.appState.subscribe(this, events.TEST1);\n      if (this.appState.getSubscriptionCount() != 1) throw 'Unexpected subscription count, expected 1';\n      this.appState.unsubscribe(this);\n      if (this.appState.getSubscriptionCount() != 0) throw 'Unexpected subscription count, expected 0';\n    }\n  }, {\n    key: \"runAll\",\n    value: function runAll() {\n      this.testUnsubscribe();\n    }\n  }]);\n\n  return AppStateTests;\n}();\n\n\n\n//# sourceURL=webpack:///./tests/appstate-tests.js?");

/***/ }),

/***/ "./tests/index.js":
/*!************************!*\
  !*** ./tests/index.js ***!
  \************************/
/*! exports provided: AppStateTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appstate_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appstate-tests */ \"./tests/appstate-tests.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AppStateTests\", function() { return _appstate_tests__WEBPACK_IMPORTED_MODULE_0__[\"AppStateTests\"]; });\n\n\n\n//# sourceURL=webpack:///./tests/index.js?");

/***/ })

/******/ });