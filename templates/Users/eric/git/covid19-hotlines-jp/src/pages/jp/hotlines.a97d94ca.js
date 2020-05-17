(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hotlines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony default export */ __webpack_exports__["default"] = (function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hotlines__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],{lang:"jp"}));});

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fp_ts_lib_NonEmptyArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(572);
/* harmony import */ var fp_ts_lib_NonEmptyArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_NonEmptyArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fp_ts_lib_Reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(571);
/* harmony import */ var fp_ts_lib_Reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Reader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fp_ts_lib_Record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(573);
/* harmony import */ var fp_ts_lib_Record__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Record__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(160);
/* harmony import */ var _css_Hotlines_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(548);
/* harmony import */ var _css_Hotlines_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Hotlines_css__WEBPACK_IMPORTED_MODULE_7__);
var makeEnExplanation=function makeEnExplanation(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"explanation"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,"These hotlines are government and volunteer-run organizations that provide medical consultation on testing if you are worried that you have COVID-19. We recommend first calling the foreign-language hotlines listed for your prefecture. If you cannot get help, then call one of the Japanese-language hotlines."));};var makeJaExplanation=function makeJaExplanation(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"explanation"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,"\u65B0\u578B\u30B3\u30ED\u30CA\u30A6\u30A4\u30EB\u30B9\u611F\u67D3\u75C7\u306E\u611F\u67D3\u304C\u7591\u308F\u308C\u308B\u65B9\u306F\u3001\u76F4\u63A5\u533B\u7642\u6A5F\u95A2\u3078\u53D7\u8A3A\u305B\u305A\u3001\u4E8B\u524D\u306B\u5E30\u56FD\u8005\u30FB\u63A5\u89E6\u8005\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u307E\u3067\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002\u3082\u3057\u65E5\u672C\u8A9E\u304C\u8A71\u305B\u306A\u3044\u5834\u5408\u3001\u307E\u305A\u306F\u591A\u8A00\u8A9E\u5BFE\u5FDC\u306E\u30B3\u30FC\u30EB\u30BB\u30F3\u30BF\u30FC\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3057\u96FB\u8A71\u304C\u3064\u306A\u304C\u3089\u306A\u3044\u5834\u5408\u307E\u305F\u306F\u65E5\u672C\u8A9E\u304C\u8A71\u305B\u308B\u5834\u5408\u3001\u65E5\u672C\u8A9E\u5BFE\u5FDC\u306E\u76F4\u63A5\u5E30\u56FD\u8005\u30FB\u63A5\u89E6\u8005\u76F8\u8AC7\u30BB\u30F3\u30BF\u30FC\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"));};var makeExplanation=fp_ts_lib_Reader__WEBPACK_IMPORTED_MODULE_1__["asks"](function(props){return props.lang==="en"?makeEnExplanation():makeJaExplanation();});var Hotlines=fp_ts_lib_Reader__WEBPACK_IMPORTED_MODULE_1__["asks"](function(props){var _useRouteData=Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useRouteData"])(),hotlines=_useRouteData.hotlines;var txProps={lang:props.lang,tx:Object(_translate__WEBPACK_IMPORTED_MODULE_6__[/* tx */ "a"])(props.lang)};var prefs=fp_ts_lib_Record__WEBPACK_IMPORTED_MODULE_2__["filterMap"](fp_ts_lib_NonEmptyArray__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(hotlines.area);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"hotlines"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3",null,txProps.tx("Hotlines"))),makeExplanation(txProps),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:"date-updated"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p",null,txProps.tx("Last updated"),": 2020/5/3")),Object(_Support__WEBPACK_IMPORTED_MODULE_5__[/* makeAccordion */ "b"])(prefs)(txProps));});/* harmony default export */ __webpack_exports__["a"] = (Hotlines);

/***/ })

}]);