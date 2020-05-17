/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		20: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "templates/" + ({"1":"Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx~Users/eric/git/covid19-hotlines-jp/src/p~97e6a657","2":"Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines~Users/eric/git/covid19-hotlines-jp/src/page~3f0dbbc6","3":"vendors~Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines~Users/eric/git/covid19-hotlines-jp/~ee2f6e5e","4":"Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx~Users/eric/git/covid19-hotlines-jp/src/pag~ca748c82","5":"Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx~Users/eric/git/covid19-hotlines-jp/src/page~1d15b179","6":"Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx","7":"Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx","8":"Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx","9":"Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines","10":"Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx","11":"Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx","12":"Users/eric/git/covid19-hotlines-jp/src/pages/en/support","13":"Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx","14":"Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx","15":"Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx","16":"Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines","17":"Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx","18":"Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx","19":"Users/eric/git/covid19-hotlines-jp/src/pages/jp/support"}[chunkId]||chunkId) + "." + {"1":"33ce0269","2":"b36f2d66","3":"6ad43292","4":"dee417ef","5":"0a99fa9e","6":"3a7c06be","7":"78a9c5e1","8":"2f240d0b","9":"65f89e5e","10":"9f663c11","11":"431b7ee5","12":"08124edb","13":"304d37a0","14":"7d813c11","15":"64f5e79c","16":"a97d94ca","17":"b942e21a","18":"b40da13d","19":"07f79728"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://covid19-hotlines.jp/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([252,0,21]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(18);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(74);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/Navbar.js + 3 modules
var Navbar = __webpack_require__(558);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/Nav.js + 7 modules
var Nav = __webpack_require__(557);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-bootstrap/esm/Jumbotron.js
var Jumbotron = __webpack_require__(556);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/react-router-bootstrap/lib/index.js
var react_router_bootstrap_lib = __webpack_require__(62);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/src/translate.ts
var translate = __webpack_require__(160);

// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/src/css/Menu.css
var css_Menu = __webpack_require__(226);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/src/components/Menu.tsx
var path2Lang=function path2Lang(path){return path.startsWith('/jp')?'jp':'en';};var stripLang=function stripLang(path){var xs=path.split('/');var filtered=xs.filter(function(x){return x!=='en'&&x!=='jp';});return filtered.join('/');};var updateLang=function updateLang(lang,path){return"/"+lang+stripLang(path);};var Menu_Menu=function Menu(){var _useLocation;var path=((_useLocation=Object(lib["useLocation"])())===null||_useLocation===void 0?void 0:_useLocation.pathname)||"/";var lang=path2Lang(path);// noinspection HtmlUnknownTarget
return/*#__PURE__*/react_default.a.createElement("div",{className:"menu"},/*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */],{variant:"dark",expand:"sm"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */],{className:"navbar-expand"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:updateLang("en",path)},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true,className:"EN",eventKey:"en"},lang==="jp"?"EN":"英語"))),/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:updateLang("jp",path)},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true,className:"JP",eventKey:"jp"},lang==="en"?"日本語":"JP")))),/*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */].Toggle,{"aria-controls":"basic-navbar-nav"}),/*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */].Collapse,{id:"basic-navbar-nav"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */],{className:"ml-auto menu"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:"/"+lang+"/about"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true},"ABOUT"))),/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:"/"+lang+"/covid19"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true},"COVID-19"))),/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:"/"+lang+"/hotlines"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true},"HOTLINES"))),/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:"/"+lang+"/info"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true},"INFO"))),/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Item,null,/*#__PURE__*/react_default.a.createElement(react_router_bootstrap_lib["LinkContainer"],{to:"/"+lang+"/support"},/*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link,{active:true},"SUPPORT")))))),/*#__PURE__*/react_default.a.createElement("a",{href:"/"+lang},/*#__PURE__*/react_default.a.createElement(Jumbotron["a" /* default */],{fluid:true},/*#__PURE__*/react_default.a.createElement("h1",null,"COVID-19 Hotlines in Japan"),/*#__PURE__*/react_default.a.createElement("p",null,Object(translate["a" /* tx */])(lang)('新型コロナウィルス対策に役立つ情報')," #COVID19HotlinesJp"))));};/* harmony default export */ var components_Menu = (Menu_Menu);
// EXTERNAL MODULE: /Users/eric/git/covid19-hotlines-jp/node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(546);

// CONCATENATED MODULE: /Users/eric/git/covid19-hotlines-jp/src/App.tsx
function App(){return/*#__PURE__*/react_default.a.createElement(lib["Root"],null,/*#__PURE__*/react_default.a.createElement(components_Menu,null),/*#__PURE__*/react_default.a.createElement("div",{className:"content"},/*#__PURE__*/react_default.a.createElement(react_default.a.Suspense,{fallback:function fallback(){return undefined;}},/*#__PURE__*/react_default.a.createElement(react_router["g" /* Switch */],null,/*#__PURE__*/react_default.a.createElement(react_router["d" /* Route */],{render:function render(){return/*#__PURE__*/react_default.a.createElement(lib["Routes"],{path:"*"});}})))));}/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),

/***/ 158:
/***/ (function(module) {

module.exports = JSON.parse("[{\"Japanese\":\"新型コロナウィルス対策に役立つ情報\",\"English\":\"Information to help fight COVID-19\"},{\"Japanese\":\"※三者通話による電話通訳サービス有「つうやく おねがいします。○○語(ご)です。」と言ってください。\",\"English\":\"※Interpretation service can be requested with \\\"Tsuyaku onegaishimasu ○○-go desu.\\\"\"},{\"Japanese\":\"※三者通話による電話通訳サービス有。\",\"English\":\"※Interpretation services for calling COVID-19 hotlines available.\"},{\"Japanese\":\"帰国者・接触者相談センター\",\"English\":\"Hotlines\"},{\"Japanese\":\"生活相談窓口\",\"English\":\"Support Centers\"},{\"Japanese\":\"対応相談内容\",\"English\":\"Topics\"},{\"Japanese\":\"生活全般\",\"English\":\"Any topic\"},{\"Japanese\":\"不安なこと\",\"English\":\"Anxiety\"},{\"Japanese\":\"健康\",\"English\":\"Health\"},{\"Japanese\":\"経済的問題\",\"English\":\"Financial\"},{\"Japanese\":\"経済的問題\",\"English\":\"Money\"},{\"Japanese\":\"仕事\",\"English\":\"Work\"},{\"Japanese\":\"仕事\",\"English\":\"Jobs\"},{\"Japanese\":\"学校\",\"English\":\"School\"},{\"Japanese\":\"生活\",\"English\":\"Life\"},{\"Japanese\":\"出産\",\"English\":\"Child Birth\"},{\"Japanese\":\"子育て\",\"English\":\"Child Raising\"},{\"Japanese\":\"教育\",\"English\":\"Education\"},{\"Japanese\":\"医療\",\"English\":\"Medical\"},{\"Japanese\":\"在留手続き\",\"English\":\"Visa\"},{\"Japanese\":\"福祉\",\"English\":\"Welfare\"},{\"Japanese\":\"※韓国語、ネパール語、インドネシア語など、その他の言語は通訳ソフトなどを使って毎日対応可能。\",\"English\":\"※Korean, Nepali, Indonesian and other unlisted languages are supported every day by translation software.\"},{\"Japanese\":\"第1水曜日, 第3水曜日を除く平日(月曜日-金曜日)\",\"English\":\"Weekdays except 1st and 3rd Wednesday\"},{\"Japanese\":\"第2月曜日\",\"English\":\"2nd Monday of the month\"},{\"Japanese\":\"第2・4土曜日\",\"English\":\"2nd and 4th Saturday of each month\"},{\"Japanese\":\"第4・5木曜日は要予約\",\"English\":\"appointment required on 4th and 5th Thursday\"},{\"Japanese\":\"(第2・4 月曜日 休)\",\"English\":\"(Closed every second and fourth Monday)\"},{\"Japanese\":\"(第2,4火除)\",\"English\":\"(except 2nd and 4th Tuesdays)\"},{\"Japanese\":\"(第2・4)\",\"English\":\"(2nd and 4th of the month)\"},{\"Japanese\":\"通訳を介した対応\",\"English\":\"Provided by interpreter\"},{\"Japanese\":\"外部通訳サービスによる対応:\",\"English\":\"Provided by outside interpreters:\"},{\"Japanese\":\"外部通訳サービスによる対応\",\"English\":\"provided by outside interpreter\"},{\"Japanese\":\"水曜日を除く毎日\",\"English\":\"Every day except Wednesday\"},{\"Japanese\":\"5月の日曜日\",\"English\":\"Sundays in May\"},{\"Japanese\":\"(5月31日)まで\",\"English\":\"(Until May 31st)\"},{\"Japanese\":\"(通常)\",\"English\":\"(Usually)\"},{\"Japanese\":\"等\",\"English\":\"and others\"},{\"Japanese\":\"月曜日\",\"English\":\"Monday\"},{\"Japanese\":\"火曜日\",\"English\":\"Tuesday\"},{\"Japanese\":\"水曜日\",\"English\":\"Wednesday\"},{\"Japanese\":\"木曜日\",\"English\":\"Thursday\"},{\"Japanese\":\"金曜日\",\"English\":\"Friday\"},{\"Japanese\":\"土曜日\",\"English\":\"Saturday\"},{\"Japanese\":\"日曜日\",\"English\":\"Sunday\"},{\"Japanese\":\"第1\",\"English\":\"1st\"},{\"Japanese\":\"第2\",\"English\":\"2nd\"},{\"Japanese\":\"第3\",\"English\":\"3rd\"},{\"Japanese\":\"第4\",\"English\":\"4th\"},{\"Japanese\":\"第5\",\"English\":\"5th\"},{\"Japanese\":\"全国\",\"English\":\"All of Japan\"},{\"Japanese\":\"北海道\",\"English\":\"Hokkaido\"},{\"Japanese\":\"青森県\",\"English\":\"Aomori\"},{\"Japanese\":\"岩手県\",\"English\":\"Iwate\"},{\"Japanese\":\"宮城県\",\"English\":\"Miyagi\"},{\"Japanese\":\"秋田県\",\"English\":\"Akita\"},{\"Japanese\":\"山形県\",\"English\":\"Yamagata\"},{\"Japanese\":\"福島県\",\"English\":\"Fukushima\"},{\"Japanese\":\"茨城県\",\"English\":\"Ibaraki\"},{\"Japanese\":\"栃木県\",\"English\":\"Tochigi\"},{\"Japanese\":\"群馬県\",\"English\":\"Gunma\"},{\"Japanese\":\"埼玉県\",\"English\":\"Saitama\"},{\"Japanese\":\"千葉県\",\"English\":\"Chiba\"},{\"Japanese\":\"東京都\",\"English\":\"Tokyo\"},{\"Japanese\":\"神奈川県\",\"English\":\"Kanagawa\"},{\"Japanese\":\"新潟県\",\"English\":\"Niigata\"},{\"Japanese\":\"富山県\",\"English\":\"Toyama\"},{\"Japanese\":\"石川県\",\"English\":\"Ishikawa\"},{\"Japanese\":\"福井県\",\"English\":\"Fukui\"},{\"Japanese\":\"山梨県\",\"English\":\"Yamanashi\"},{\"Japanese\":\"長野県\",\"English\":\"Nagano\"},{\"Japanese\":\"岐阜県\",\"English\":\"Gifu\"},{\"Japanese\":\"静岡県\",\"English\":\"Shizuoka\"},{\"Japanese\":\"愛知県\",\"English\":\"Aichi\"},{\"Japanese\":\"三重県\",\"English\":\"Mie\"},{\"Japanese\":\"滋賀県\",\"English\":\"Shiga\"},{\"Japanese\":\"京都府\",\"English\":\"Kyoto\"},{\"Japanese\":\"大阪府\",\"English\":\"Osaka\"},{\"Japanese\":\"兵庫県\",\"English\":\"Hyogo\"},{\"Japanese\":\"奈良県\",\"English\":\"Nara\"},{\"Japanese\":\"和歌山県\",\"English\":\"Wakayama\"},{\"Japanese\":\"鳥取県\",\"English\":\"Tottori\"},{\"Japanese\":\"島根県\",\"English\":\"Shimane\"},{\"Japanese\":\"岡山県\",\"English\":\"Okayama\"},{\"Japanese\":\"広島県\",\"English\":\"Hiroshima\"},{\"Japanese\":\"山口県\",\"English\":\"Yamaguchi\"},{\"Japanese\":\"徳島県\",\"English\":\"Tokushima\"},{\"Japanese\":\"香川県\",\"English\":\"Kagawa\"},{\"Japanese\":\"愛媛県\",\"English\":\"Ehime\"},{\"Japanese\":\"高知県\",\"English\":\"Kochi\"},{\"Japanese\":\"福岡県\",\"English\":\"Fukuoka\"},{\"Japanese\":\"佐賀県\",\"English\":\"Saga\"},{\"Japanese\":\"長崎県\",\"English\":\"Nagasaki\"},{\"Japanese\":\"熊本県\",\"English\":\"Kumamoto\"},{\"Japanese\":\"大分県\",\"English\":\"Oita\"},{\"Japanese\":\"宮崎県\",\"English\":\"Miyazaki\"},{\"Japanese\":\"鹿児島県\",\"English\":\"Kagoshima\"},{\"Japanese\":\"沖縄県\",\"English\":\"Okinawa\"},{\"Japanese\":\"センター名\",\"English\":\"Provider\"},{\"Japanese\":\"IP電話\",\"English\":\"Contact (VoIP)\"},{\"Japanese\":\"電話番号\",\"English\":\"Phone\"},{\"Japanese\":\"対応時間\",\"English\":\"Hours of operation\"},{\"Japanese\":\"平日\",\"English\":\"Weekdays\"},{\"Japanese\":\"土日\",\"English\":\"Weekends\"},{\"Japanese\":\"土曜日\",\"English\":\"Saturday\"},{\"Japanese\":\"祝日\",\"English\":\"Holidays\"},{\"Japanese\":\"毎日\",\"English\":\"Every day\"},{\"Japanese\":\"24時間\",\"English\":\"24 hours\"},{\"Japanese\":\"(緊急事態宣言期間中は土日祝日も対応: 現在のところ5月6日まで)\",\"English\":\"(Emergencies also supported on weekends and holidays until 5/6)\"},{\"Japanese\":\"時間外の緊急対応あり\",\"English\":\"Emergencies only after hours\"},{\"Japanese\":\"18言語に対応可\",\"English\":\"18 languages\"},{\"Japanese\":\"対応言語\",\"English\":\"Supported languages\"},{\"Japanese\":\"中国語\",\"English\":\"Chinese\"},{\"Japanese\":\"ベトナム語\",\"English\":\"Vietnamese\"},{\"Japanese\":\"タガログ語\",\"English\":\"Tagalog\"},{\"Japanese\":\"ポルトガル語\",\"English\":\"Portuguese\"},{\"Japanese\":\"スペイン語\",\"English\":\"Spanish\"},{\"Japanese\":\"ネパール語\",\"English\":\"Nepali\"},{\"Japanese\":\"タイ語\",\"English\":\"Thai\"},{\"Japanese\":\"シンハラ語\",\"English\":\"Sinhala\"},{\"Japanese\":\"タミル語\",\"English\":\"Tamil\"},{\"Japanese\":\"インドネシア語\",\"English\":\"Indonesian\"},{\"Japanese\":\"韓国語\",\"English\":\"Korean\"},{\"Japanese\":\"英語\",\"English\":\"English\"},{\"Japanese\":\"最終更新日\",\"English\":\"Last updated\"},{\"Japanese\":\"やさしい日本語\",\"English\":\"Simple Japanese\"},{\"Japanese\":\"日本語\",\"English\":\"Japanese\"},{\"Japanese\":\"フランス語\",\"English\":\"French\"},{\"Japanese\":\"カンボジア語\",\"English\":\"Cambodian\"},{\"Japanese\":\"ミャンマー語\",\"English\":\"Myanmarese\"},{\"Japanese\":\"ドイツ語\",\"English\":\"German\"},{\"Japanese\":\"イタリア語\",\"English\":\"Italian\"},{\"Japanese\":\"ロシア語\",\"English\":\"Russian\"},{\"Japanese\":\"クメール語\",\"English\":\"Khmer\"},{\"Japanese\":\"モンゴル語\",\"English\":\"Mongolian\"},{\"Japanese\":\"マレー語\",\"English\":\"Malaysian\"},{\"Japanese\":\"アラビア語\",\"English\":\"Arabic\"},{\"Japanese\":\"クメール語\",\"English\":\"Khmer\"},{\"Japanese\":\"シンハラ語\",\"English\":\"Siṁhala\"},{\"Japanese\":\"ヒンディー語\",\"English\":\"Hindi\"}]");

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tx; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_translations_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);
var _data_translations_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(158, 1);
var makeObj=function makeObj(arr){return Object.assign.apply(Object,[{}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(Array.from(arr,function(_ref){var _ref2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref,2),k=_ref2[0],v=_ref2[1];return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},k,v);}))));};var jaen=makeObj(_data_translations_json__WEBPACK_IMPORTED_MODULE_3__.map(function(x){return[x.Japanese,x.English];}));var enja=makeObj(_data_translations_json__WEBPACK_IMPORTED_MODULE_3__.map(function(x){return[x.English,x.Japanese];}));var trans={'jp':{'en':jaen},'en':{'jp':enja}};// noinspection JSUnusedGlobalSymbols
var tx=function tx(tgtLang){return function(s){var srcLang=tgtLang==='jp'?'en':'jp';var TX=trans[srcLang][tgtLang];for(var phrase in TX){for(;;){// noinspection JSUnfilteredForInLoop
var n=s.indexOf(phrase);if(n<0)break;// noinspection JSUnfilteredForInLoop
s=s.substring(0,n)+TX[phrase]+s.substring(n+phrase.length);}}return s;};};if(__webpack_require__.c[__webpack_require__.s]===module){}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(161)(module)))

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_eric_git_covid19_hotlines_jp_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _Users_eric_git_covid19_hotlines_jp_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_eric_git_covid19_hotlines_jp_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
// Plugins
var plugins=[{location:"/Users/eric/git/covid19-hotlines-jp/node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"/Users/eric/git/covid19-hotlines-jp/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"/Users/eric/git/covid19-hotlines-jp/node_modules/react-static-plugin-react-router",plugins:[],hooks:_Users_eric_git_covid19_hotlines_jp_node_modules_react_static_plugin_react_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})},{location:"/Users/eric/git/covid19-hotlines-jp/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"/Users/eric/git/covid19-hotlines-jp",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);
Object(_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");},ignoreBabelRename:true};var t_0=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 238))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx');},resolve:function resolve(){return /*require.resolve*/(238);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx";}}),universalOptions);t_0.template='/Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx';var t_1=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 239))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx');},resolve:function resolve(){return /*require.resolve*/(239);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx";}}),universalOptions);t_1.template='/Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx';var t_2=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 240))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx');},resolve:function resolve(){return /*require.resolve*/(240);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx";}}),universalOptions);t_2.template='/Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx';var t_3=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 241))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines');},resolve:function resolve(){return /*require.resolve*/(241);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines";}}),universalOptions);t_3.template='/Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines';var t_4=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 242))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx');},resolve:function resolve(){return /*require.resolve*/(242);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx";}}),universalOptions);t_4.template='/Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx';var t_5=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 243))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx');},resolve:function resolve(){return /*require.resolve*/(243);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx";}}),universalOptions);t_5.template='/Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx';var t_6=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/en/support",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/en/support */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 244))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/support');},resolve:function resolve(){return /*require.resolve*/(244);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/en/support";}}),universalOptions);t_6.template='/Users/eric/git/covid19-hotlines-jp/src/pages/en/support';var t_7=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 245))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx');},resolve:function resolve(){return /*require.resolve*/(245);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx";}}),universalOptions);t_7.template='/Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx';var t_8=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 246))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx');},resolve:function resolve(){return /*require.resolve*/(246);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx";}}),universalOptions);t_8.template='/Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx';var t_9=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 247))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx');},resolve:function resolve(){return /*require.resolve*/(247);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx";}}),universalOptions);t_9.template='/Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx';var t_10=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 248))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines');},resolve:function resolve(){return /*require.resolve*/(248);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines";}}),universalOptions);t_10.template='/Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines';var t_11=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, 249))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx');},resolve:function resolve(){return /*require.resolve*/(249);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx";}}),universalOptions);t_11.template='/Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx';var t_12=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx */[__webpack_require__.e(0), __webpack_require__.e(5), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, 250))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx');},resolve:function resolve(){return /*require.resolve*/(250);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx";}}),universalOptions);t_12.template='/Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx';var t_13=_Users_eric_git_covid19_hotlines_jp_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"/Users/eric/git/covid19-hotlines-jp/src/pages/jp/support",load:function load(){return Promise.all([Promise.all(/* import() | Users/eric/git/covid19-hotlines-jp/src/pages/jp/support */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, 251))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/support');},resolve:function resolve(){return /*require.resolve*/(251);},chunkName:function chunkName(){return"Users/eric/git/covid19-hotlines-jp/src/pages/jp/support";}}),universalOptions);t_13.template='/Users/eric/git/covid19-hotlines-jp/src/pages/jp/support';// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'/Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx':t_0,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/about.tsx':t_1,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/covid19.tsx':t_2,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/hotlines':t_3,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/index.tsx':t_4,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/info.tsx':t_5,'/Users/eric/git/covid19-hotlines-jp/src/pages/en/support':t_6,'/Users/eric/git/covid19-hotlines-jp/src/pages/index.tsx':t_7,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/about.tsx':t_8,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/covid19.tsx':t_9,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/hotlines':t_10,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/index.tsx':t_11,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/info.tsx':t_12,'/Users/eric/git/covid19-hotlines-jp/src/pages/jp/support':t_13});// Not Found Template
var notFoundTemplate="/Users/eric/git/covid19-hotlines-jp/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(253);
__webpack_require__(149);
__webpack_require__(477);
__webpack_require__(529);
module.exports = __webpack_require__(535);


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 90,
	"./": 90,
	"./index": 90,
	"./index.js": 90
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 531;

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(237);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(119);
// import "core-js/stable"
// import "regenerator-runtime/runtime"
// import "react-app-polyfill/ie9"
// import "react-app-polyfill/stable"
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);// Render your app
if(typeof document!=='undefined'){var target=document.getElementById('root');// @ts-ignore
var renderMethod=target.hasChildNodes()?react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate:react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;var render=function render(Comp){renderMethod(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp,null)),target);};// Render!
render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);// Hot Module Replacement
if(module&&module.hot){module.hot.accept('./App',function(){render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);});}}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(161)(module)))

/***/ })

/******/ });