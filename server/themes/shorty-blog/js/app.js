webpackJsonp([0],[
/* 0 */,
/* 1 */
/*!********************************!*\
  !*** ./client/js/app/index.js ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @client/sass/style.scss */ 2);

__webpack_require__(/*! @client/sass/app.scss */ 4);

__webpack_require__(/*! @client/sass/pages/home.scss */ 5);

var _jquery = __webpack_require__(/*! @modules/jquery/dist/jquery.slim */ 0);

var _jquery2 = _interopRequireDefault(_jquery);

var _index = __webpack_require__(/*! @libs/navigation/index */ 6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $document = (0, _jquery2.default)(document);
var $window = (0, _jquery2.default)(window);

$document.ready(function () {
	console.log('live site');
	var menus = {
		primary: new _index2.default('.navbar')
	};
});

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./client/sass/style.scss ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */
/*!******************************!*\
  !*** ./client/sass/app.scss ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** ./client/sass/pages/home.scss ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/*!**********************************!*\
  !*** ./libs/navigation/index.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(/*! jquery */ 7);

var _jquery2 = _interopRequireDefault(_jquery);

var _typeUtils = __webpack_require__(/*! @beautiful-code/type-utils */ 8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
	function Navigation(selector, options) {
		var _this = this;

		_classCallCheck(this, Navigation);

		this.$el = null;
		this.config = {};

		this._handleOptions = function (options) {};

		this.getElement = function () {
			return _this.$el;
		};

		this.setElement = function () {
			var $el = void 0;
			switch (arguments.length) {
				case 0:
					throw new Error('Navigation.setElement() must have at least 1 argument, ' + arguments.length + ' supplied.');
				case 1:
					{
						var unknown = arguments.length <= 0 ? undefined : arguments[0];
						if (unknown instanceof _jquery2.default) {
							_this.$el = unknown;
						} else if ((0, _typeUtils.isString)(unknown)) {
							_this.$el = (0, _jquery2.default)(unknown);
						}
					}break;
				default:
					throw new Error('Navigation.setElement() must have no more than 1 arguments, ' + arguments.length + ' supplied.');
			}
		};

		this.hasValidElement = function () {
			return !(0, _typeUtils.isUndefined)(_this.$el) && _this.$el.length > 0;
		};

		this.addMenuClasses = function () {
			var $el = _this.$el;
			var $menu = $el.children('ul');
			_this.addMenuClassesToLevel($menu);
		};

		this.addMenuClassesToLevel = function ($root) {
			var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

			$root.addClass('' + Navigation.classes.level + level); // .level-1
			$root.attr('data-menu-level', level);

			var $items = $root.children('li');
			$items.each(function (i, item) {
				var $item = (0, _jquery2.default)(item);
				_this._handleTimberClasses($item);

				var itemIndex = i + 1;
				$item.addClass('' + Navigation.classes.item + itemIndex); // .menu-item-1
				$item.attr('data-menu-item', itemIndex);

				var $child = $item.children('ul');
				if ($child.length > 0) {
					$item.addClass(Navigation.classes.children);
					_this.addMenuClassesToLevel($child, ++level);
				}
			});
		};

		this._handleTimberClasses = function ($el) {
			_this.removeClasses($el, ['menu-item', 'menu-item-object-page', 'menu-item-has-children']);
			_this.replaceClasses($el, [_this.makeReplacementObject('menu-item-type-post_type', 'type-post'), _this.makeReplacementObject(/(menu-item-\d+)/g, 'type-post')]);
		};

		this.setElement(selector);
		this._handleOptions(options);
		if (this.hasValidElement) {
			this.addMenuClasses();
		}
	}

	_createClass(Navigation, [{
		key: 'makeReplacementObject',
		value: function makeReplacementObject(test, replacement) {
			return { test: test, replacement: replacement };
		}
	}, {
		key: 'removeClasses',
		value: function removeClasses($el, classes) {
			if (!(0, _typeUtils.isArray)(classes)) throw new Error('Navigation.removeClasses() parameter must be of type array, ' + (0, _typeUtils.getType)(classes) + ' provided.');
			classes.map(function (classToRemove) {
				$el.removeClass(classToRemove);
			});
		}
	}, {
		key: 'replaceClass',
		value: function replaceClass($el, test, replacement) {
			var _this2 = this;

			if ((0, _typeUtils.isString)(test)) {
				if ($el.hasClass(test)) {
					$el.removeClass(test);
					$el.addClass(replacement);
				}
			} else if ((0, _typeUtils.isRegExp)(test)) {
				var classes = $el.attr('class');
				if (test.test(classes)) {
					classes.match(test).map(function (classToRemove) {
						_this2.replaceClass($el, classToRemove, replacement);
					});
				}
			}
		}
	}, {
		key: 'replaceClasses',
		value: function replaceClasses($el, classes) {
			var _this3 = this;

			classes.map(function (_ref) {
				var test = _ref.test,
				    replacement = _ref.replacement;

				_this3.replaceClass($el, test, replacement);
			});
		}
	}]);

	return Navigation;
}();

Navigation.classes = {
	children: 'has-children',
	item: 'menu-item-',
	level: 'level-'
};
exports.default = Navigation;

/***/ })
],[1]);