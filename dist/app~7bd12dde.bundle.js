(self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || []).push([[193],{

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable max-len */
var focusCheckbox = function focusCheckbox() {
  var checkbox = document.getElementById('check');
  checkbox.checked = !checkbox.checked;
  checkbox.focus();
};
var main = function main() {
  var focusableElements = Array.from(document.querySelectorAll('a, button')).filter(function (element) {
    return element.tabIndex >= 0;
  });
  var check = document.getElementById('check');
  focusableElements.forEach(function (element, index) {
    element.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' && index < focusableElements.length - 1) {
        focusableElements[index + 1].focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        focusableElements[index - 1].focus();
      }
    });
  });
  check.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      focusableElements[0].focus();
    } else if (e.key === 'ArrowLeft') {
      focusableElements[focusableElements.length - 1].focus();
    }
  });
  var bellybitesBtn = document.getElementById('nav-btn');
  if (bellybitesBtn) {
    bellybitesBtn.addEventListener('click', focusCheckbox);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ 540:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
var _templateObject, _templateObject2;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ExploreComponent = /*#__PURE__*/function (_LitElement) {
  _inherits(ExploreComponent, _LitElement);
  var _super = _createSuper(ExploreComponent);
  function ExploreComponent() {
    _classCallCheck(this, ExploreComponent);
    return _super.apply(this, arguments);
  }
  _createClass(ExploreComponent, [{
    key: "render",
    value:
    // eslint-disable-next-line class-methods-use-this
    function render() {
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__/* .html */ .dy)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"section-title\">\n        <h2>Apa Yang Bisa Kamu Temukan Disini ?</h2>\n      </div>\n      <div class=\"explore\">\n        <article class=\"headline\">\n          <div class=\"headline__figure\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/92/b3/8b/92b38be3c16a32d670294686d2407049.jpg\"\n              alt=\"food\" />\n            <figcaption>food</figcaption>\n          </div>\n          <div class=\"headline__content\">\n            <h3 class=\"headline__title\">Berbagai Macam Menu ada disini</h3>\n            <p class=\"headline__description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum\n              facere nostrum officiis qui quidem ratione similique, soluta veniam\n              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta\n              distinctio ducimus expedita itaque laudantium magnam maiores.\n            </p>\n            <button class=\"headline__button\">Read More</button>\n          </div>\n        </article>\n\n        <article class=\"headline\">\n          <div class=\"headline__figure\">\n            <img loading=\"lazy\"\n              src=\"https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&ga=GA1.2.402080748.1694688639&semt=sph\"\n              alt=\"Restaurant\" />\n            <figcaption>Restaurant</figcaption>\n          </div>\n          <div class \"headline__content\">\n            <h3 class=\"headline__title\">Mau pilih berdasarkan Restoran nya ?</h3>\n            <p class=\"headline__description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum\n              facere nostrum officiis qui quidem ratione similique, soluta veniam\n              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta\n              distinctio ducimus expedita itaque laudantium magnam maiores.\n            </p>\n            <button class=\"headline__button\">Read More</button>\n          </div>\n        </article>\n\n        <article class=\"headline\">\n          <div class=\"headline__figure\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/5b/3c/b2/5b3cb2253b5a17c54500aab911f5168d.jpg\" alt=\"Bahan Makanan\" />\n            <figcaption>Resep Makanan</figcaption>\n          </div>\n          <div class=\"headline__content\">\n            <h3 class=\"headline__title\">Ingin tahu Resep dari suatu Menu ?</h3>\n            <p class=\"headline__description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum\n              facere nostrum officiis qui quidem ratione similique, soluta veniam\n              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta\n              distinctio ducimus expedita itaque laudantium magnam maiores.\n            </p>\n            <button class=\"headline__button\">Read More</button>\n          </div>\n        </article>\n\n        <article class=\"headline\">\n          <div class=\"headline__figure\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/76/d3/ec/76d3ecd706b739820da52010eac581f2.jpg\" alt=\"Blog Kuliner\" />\n            <figcaption>Blog Kuliner</figcaption>\n          </div>\n          <div class=\"headline__content\">\n            <h3 class=\"headline__title\">Update seputar kuliner ada disini</h3>\n            <p class=\"headline__description\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum\n              facere nostrum officiis qui quidem ratione similique, soluta veniam\n              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta\n              distinctio ducimus expedita itaque laudantium magnam maiores.\n            </p>\n            <button class=\"headline__button\">Read More</button>\n          </div>\n      </article>\n    </div>\n    "])));
    }
  }]);
  return ExploreComponent;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__/* .LitElement */ .oi);
_defineProperty(ExploreComponent, "styles", (0,lit_element__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .section-title {\n      margin: 20px;\n      text-align: center;\n      color: #C63D2F;\n      font-size: 20px;\n    }\n    .explore {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      gap: 20px;\n      align-items: flex-start;\n      padding: 20px;\n      border-radius: 5px;\n      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n    }\n    .headline {\n      display: grid;\n      grid-template-columns: 1fr;\n      padding: 20px;\n      border-radius: 5px;\n      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n      transition: transform 0.3s, background-color 0.3s, color 0.3s;\n      cursor: pointer;\n    }\n    .headline:hover {\n      transform: translateY(-10px);\n      background-color: #FF9B50;\n      color: white;\n    }\n    .headline__figure {\n      width: 100%;\n      position: relative;\n    }\n    .headline__figure img {\n      width: 100%;\n      height: auto;\n      border-radius: 5px 5px 0 0;\n    }\n    .headline__figure figcaption {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      text-align: center;\n      background-color: #C63D2F;\n      color: white;\n      font-size: 13px;\n      padding: 8px 0;\n    }\n    .headline__content {\n      padding: 20px;\n    }\n    .headline__title {\n      font-size: 24px;\n      color: #333;\n      margin-bottom: 10px;\n    }\n    .headline__description {\n      font-size: 16px;\n      color: #666;\n      margin-bottom: 20px;\n    }\n    .headline__button {\n      text-transform: uppercase;\n      margin-top: 24px;\n      cursor: pointer;\n      padding: 20px;\n      color: white;\n      border: none;\n      border-radius: 5px;\n      background-color: #C63D2F;\n      transition: opacity 0.3s;\n    }\n    .headline__button:hover {\n      opacity: 0.8;\n    }\n  "]))));
customElements.define('explore-component', ExploreComponent);

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(502);
var _templateObject, _templateObject2;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var MenuCustom = /*#__PURE__*/function (_LitElement) {
  _inherits(MenuCustom, _LitElement);
  var _super = _createSuper(MenuCustom);
  function MenuCustom() {
    _classCallCheck(this, MenuCustom);
    return _super.apply(this, arguments);
  }
  _createClass(MenuCustom, [{
    key: "render",
    value:
    // eslint-disable-next-line class-methods-use-this
    function render() {
      return (0,lit_element__WEBPACK_IMPORTED_MODULE_0__/* .html */ .dy)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <section class=\"content-menu\">\n        <div class=\"section-title\">\n          <h2>Tipe Makanan Apa Yang Kamu inginkan ?</h2>\n          <p>Disini ada banyak loh, Ayok Jelajahi menu bersama !</p>\n        </div>\n        <article class=\"list-menu\">\n          <div class=\"card-menu\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/f7/a4/93/f7a493c4bafc3a94fc1360142c31479b.jpg\" alt=\"Menu Vegetarian\"\n              class=\"menu-img\">\n            <h3 class=\"menu-title\">Vegetarian</h3>\n            <p>Menu tanpa daging atau produk nabati</p>\n            <button class=\"menu-button\">Read More</button>\n          </div>\n          <div class=\"card-menu\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/c3/2d/c8/c32dc887f28784f3e496c37d4f27c8c6.jpg\" alt=\"Indonesian Food\"\n              class=\"menu-img\">\n            <h3 class=\"menu-title\">Indonesian Food</h3>\n            <p>Makanan khas dari berbagai daerah di Indonesia</p>\n            <button class=\"menu-button\">Read More</button>\n          </div>\n          <div class=\"card-menu\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/11/22/59/112259057b3f915446bf9e8402619371.jpg\" alt=\"Menu non Vegetarian\"\n              class=\"menu-img\">\n            <h3 class=\"menu-title\">Non-Vegetarian</h3>\n            <p>Menu dengan daging atau produk hewani</p>\n            <button class=\"menu-button\">Read More</button>\n          </div>\n          <div class=\"card-menu\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/8c/97/76/8c9776e91d67c77925d43288714a257b.jpg\" alt=\"Korean Food\"\n              class=\"menu-img\">\n            <h3 class=\"menu-title\">Korean Food</h3>\n            <p>Menu populer yang berasal dari Korea</p>\n            <button class=\"menu-button\">Read More</button>\n          </div>\n          <div class=\"card-menu\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/52/0a/8e/520a8ece7fd6e0720f67ba333ec413c7.jpg\" alt=\"Japanese Food\"\n              class=\"menu-img\">\n            <h3 class=\"menu-title\">Japanese Food</h3>\n            <p>Menu populer yang berasal dari Jepang</p>\n            <button class=\"menu-button\">Read More</button>\n          </div>\n          <div class=\"card-menu\">\n            <img loading=\"lazy\" src=\"https://i.pinimg.com/564x/27/f9/bb/27f9bb5e887035585fed629a7b8fd2f2.jpg\" alt=\"Fast Food\"\n              class=\"menu-img\">\n            <h3 class=\"menu-title\">Fast Food</h3>\n            <p>Menu cepat saji dengan rasa yang pas di lidah</p>\n            <button class=\"menu-button\">Read More</button>\n          </div>\n        </article>\n      </section>\n    "])));
    }
  }]);
  return MenuCustom;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__/* .LitElement */ .oi);
_defineProperty(MenuCustom, "styles", (0,lit_element__WEBPACK_IMPORTED_MODULE_0__/* .css */ .iv)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .section-title {\n      margin: 20px;\n      text-align: center;\n      color: #C63D2F;\n    }\n    .list-menu {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      gap: 20px;\n      align-items: center;\n      justify-items: center;\n      margin-top: 20px;\n      padding: 20px;\n      border-radius: 5px;\n      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n    }\n    .card-menu {\n      position: relative;\n      width: 200px;\n      display: grid;\n      grid-template-rows: 1fr auto auto auto;\n      align-items: center;\n      text-align: center;\n      gap: 10px;\n    }\n    .menu-img {\n      width: 100%;\n      height: auto;\n      display: block;\n      overflow: hidden;\n      border-radius: 50%;\n      position: relative;\n    }\n    .menu-title {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      background-color: #FF9B50;\n      padding: 5px;\n      border-radius: 5px;\n      z-index: 1;\n    }\n    .card-menu p {\n      text-align: center;\n      font-size: 14px;\n      color: #333;\n      margin-top: 10px;\n    }\n    .menu-button {\n      background-color: #C63D2F;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      padding: 5px 10px;\n      cursor: pointer;\n      margin-top: 10px;\n      min-width: 44px;\n      min-height: 45px;\n    }\n    .menu-button:hover {\n      background-color: #FF9B50;\n    }\n  "]))));
customElements.define('menu-custom', MenuCustom);

/***/ }),

/***/ 555:
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ReviewCustom = /*#__PURE__*/function (_HTMLElement) {
  _inherits(ReviewCustom, _HTMLElement);
  var _super = _createSuper(ReviewCustom);
  function ReviewCustom() {
    var _this;
    _classCallCheck(this, ReviewCustom);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }
  _createClass(ReviewCustom, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(this.getStyle(), "\n      </style>\n      <div class=\"header-review\">\n        <button class=\"back-button\" id=\"back-button\">Kembali</button>\n        <div class=\"section-title\">\n          <h2>Tambahkan Review</h2>\n          <p>Review yang baik adalah sebuah review yang dapat membantu restoran meningkatkan pelayanan dan kualitasnya</p>\n        </div>\n      </div>\n    ");
      var backButton = this.shadowDOM.querySelector('#back-button');
      backButton.addEventListener('click', function () {
        window.history.back();
      });
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "getStyle",
    value: function getStyle() {
      return "\n      .header-review {\n        display: flex;\n        flex-direction: row-reverse;\n        justify-content: space-between;\n      }\n      \n      .header-review .back-button {\n        height: fit-content;\n        width: 100px;\n        padding: 10px;\n        min-height: 48px;\n        min-width: 45px;\n      }\n\n      .review-header-item {\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        padding: 10px;\n      }\n      \n      .section-title {\n        margin: 20px;\n        text-align: center;\n        color: #C63D2F;\n        font-size: 20px;\n      }\n      .back-button {\n        text-transform: uppercase;\n        padding: 8px 16px;\n        background-color: #C63D2F;\n        color: white;\n        border: none;\n        border-radius: 5px;\n        cursor: pointer;\n        transition: opacity 0.3s;\n        padding: 10px;\n      }\n      \n      .back-button:hover {\n        opacity: 0.8;\n      }    \n      @media (max-width: 440px) {  \n        .review-header-item {\n          grid-template-columns: 1fr;\n        }\n      \n        .header-review {\n          flex-direction: column;\n        }\n      }\n    ";
    }
  }]);
  return ReviewCustom;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('review-header-custom', ReviewCustom);

/***/ })

}]);
//# sourceMappingURL=app~7bd12dde.bundle.js.map