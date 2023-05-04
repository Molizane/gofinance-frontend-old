module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/global */ \"./src/styles/global.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.ts\");\n\nvar _jsxFileName = \"/mnt/F/Cursos/Udemy/FinanceGolang/go-finance/gofinance-frontend/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"/img/icon-512.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-icon\",\n        href: \"/img/icon-512.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"manifest\",\n        href: \"/manifest.json\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Next Js boilerplate\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQWlEO0FBQy9DLHNCQUNFLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQyxxREFBdEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxrQkFBVjtBQUE2QixZQUFJLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxXQUFHLEVBQUMsVUFBVjtBQUFxQixZQUFJLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0UscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFY0Ysa0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJ0Avc3R5bGVzL2dsb2JhbCdcbmltcG9ydCB0aGVtZSBmcm9tICdAL3N0eWxlcy90aGVtZSdcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ltZy9pY29uLTUxMi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9pbWcvaWNvbi01MTIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTmV4dCBKcyBib2lsZXJwbGF0ZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n\n@font-face {\n  font-family: Rubik;\n  src: local(Rubik-Light),\n    url('/fonts/Rubik-Light.ttf') format(\"truetype\");\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n   font-display: swap;\n\n}\n@font-face {\n  font-family: Rubik;\n  src: local(Rubik-Regular),\n    url('/fonts/Rubik-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n   font-display: swap;\n}\n@font-face {\n  font-family: Rubik;\n  src: local(Rubik-Medium),\n      url('fonts/Rubik-Medium.ttf') format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n   font-display: swap;\n}\n@font-face {\n  font-family: Linearicons;\n  src: local(Linearicons),\n      url('fonts/Linearicons.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  font-display: swap;\n}\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    &::before,\n    &::after {\n      box-sizing: inherit;\n    }\n  }\n\n  ${({\n  theme,\n  removeBg\n}) => styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n    html {\n      font-size: 62.5%;\n    }\n\n    body {\n      font-family: ${theme.font.family};\n      font-size: ${theme.font.sizes.medium};\n\n      ${!removeBg && styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n        background-color: ${theme.colors.mainBg};\n      `}\n    }\n  `}\n\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC50cz9iYTcxIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJyZW1vdmVCZyIsImNzcyIsImZvbnQiLCJmYW1pbHkiLCJzaXplcyIsIm1lZGl1bSIsImNvbG9ycyIsIm1haW5CZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQSxNQUFNQSxZQUdMLEdBQUdDLG1FQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUF5QkMscURBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQkYsS0FBSyxDQUFDRyxJQUFOLENBQVdDLE1BQU87QUFDdkMsbUJBQW1CSixLQUFLLENBQUNHLElBQU4sQ0FBV0UsS0FBWCxDQUFpQkMsTUFBTztBQUMzQztBQUNBLFFBQVEsQ0FBQ0wsUUFBRCxJQUNGQyxxREFBSTtBQUNWLDRCQUE0QkYsS0FBSyxDQUFDTyxNQUFOLENBQWFDLE1BQU87QUFDaEQsT0FBUTtBQUNSO0FBQ0EsR0FBSTtBQUNKO0FBQ0EsQ0F4RUE7QUEwRWVWLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9nbG9iYWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVHbG9iYWxTdHlsZSxcbiAgY3NzLFxuICBEZWZhdWx0VGhlbWUsXG4gIEdsb2JhbFN0eWxlQ29tcG9uZW50XG59IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG50eXBlIEdsb2JhbFN0eWxlc1Byb3BzID0ge1xuICByZW1vdmVCZz86IGJvb2xlYW5cbn1cblxuY29uc3QgR2xvYmFsU3R5bGVzOiBHbG9iYWxTdHlsZUNvbXBvbmVudDxcbiAgR2xvYmFsU3R5bGVzUHJvcHMsXG4gIERlZmF1bHRUaGVtZVxuPiA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICBzcmM6IGxvY2FsKFJ1YmlrLUxpZ2h0KSxcbiAgICB1cmwoJy9mb250cy9SdWJpay1MaWdodC50dGYnKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgIGZvbnQtZGlzcGxheTogc3dhcDtcblxufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgc3JjOiBsb2NhbChSdWJpay1SZWd1bGFyKSxcbiAgICB1cmwoJy9mb250cy9SdWJpay1SZWd1bGFyLnR0ZicpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgc3JjOiBsb2NhbChSdWJpay1NZWRpdW0pLFxuICAgICAgdXJsKCdmb250cy9SdWJpay1NZWRpdW0udHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IExpbmVhcmljb25zO1xuICBzcmM6IGxvY2FsKExpbmVhcmljb25zKSxcbiAgICAgIHVybCgnZm9udHMvTGluZWFyaWNvbnMudHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAkeyh7IHRoZW1lLCByZW1vdmVCZyB9KSA9PiBjc3NgXG4gICAgaHRtbCB7XG4gICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgIH1cblxuICAgIGJvZHkge1xuICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC5mYW1pbHl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMubWVkaXVtfTtcblxuICAgICAgJHshcmVtb3ZlQmcgJiZcbiAgICAgIGNzc2BcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubWFpbkJnfTtcbiAgICAgIGB9XG4gICAgfVxuICBgfVxuXG5gXG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  grid: {\n    container: '130rem',\n    gutter: '3.2rem'\n  },\n  border: {\n    radius: '0.4rem'\n  },\n  font: {\n    family: \"Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\",\n    icon: \"Linearicons, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\",\n    light: 300,\n    normal: 400,\n    bold: 600,\n    sizes: {\n      xsmall: '1.2rem',\n      small: '1.4rem',\n      medium: '1.6rem',\n      large: '1.8rem',\n      xlarge: '2.0rem',\n      xxlarge: '2.8rem'\n    }\n  },\n  colors: {\n    primary: '#2e5bff',\n    secondary: '#3CD3C1',\n    mainBg: '#06092B',\n    lightBg: '#F2F2F2',\n    white: '#FAFAFA',\n    black: '#030517',\n    lightGray: '#EAEAEA',\n    gray: '#8F8F8F',\n    darkGray: '#2E2F42',\n    red: '#FF6347',\n    baseColorBlack2: '#69707f',\n    baseColorBlue: '#2e5bff',\n    baseColorGray: '#bfc5d2',\n    baseColorBlack3: '#8798ad',\n    baseColorWhite: '#ffffff',\n    baseColorBlack: '#2e384d',\n    baseColorGray2: '#f4f6fc',\n    baseColorGray3: '#eef3f5',\n    baseColorGreen: '#33ac2e',\n    baseColorYellow: '#f7c137',\n    baseColorTeal: '#00c1d4',\n    baseColorRed: '#d63649',\n    baseColorPurple: '#8c54ff',\n    lightPeriwinkle: '#d6dfff',\n    cloudyBlue: '#b0bac9',\n    tomato: '#e74133',\n    blueSide: '#1a4679',\n    baseColorBlue20: 'rgba(46, 91, 255, 0.2)',\n    color01: '#7fffff',\n    divider: '#c8c9cc',\n    baseColorRed10: 'rgba(214, 54, 73, 0.1)',\n    baseColorGreen15: 'rgba(80, 173, 48, 0.15)',\n    baseColorBlue10: 'rgba(46, 91, 255, 0.1)',\n    baseColorYellow10: 'rgba(247, 193, 55, 0.1)'\n  },\n  spacings: {\n    xxsmall: '0.8rem',\n    xsmall: '1.6rem',\n    small: '2.4rem',\n    medium: '3.2rem',\n    large: '4.0rem',\n    xlarge: '4.8rem',\n    xxlarge: '5.6rem'\n  },\n  layers: {\n    base: 10,\n    menu: 20,\n    overlay: 30,\n    modal: 40,\n    alwaysOnTop: 50\n  },\n  transition: {\n    default: '0.3s ease-in-out',\n    fast: '0.1s ease-in-out'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzk0Y2UiXSwibmFtZXMiOlsiZ3JpZCIsImNvbnRhaW5lciIsImd1dHRlciIsImJvcmRlciIsInJhZGl1cyIsImZvbnQiLCJmYW1pbHkiLCJpY29uIiwibGlnaHQiLCJub3JtYWwiLCJib2xkIiwic2l6ZXMiLCJ4c21hbGwiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwieGxhcmdlIiwieHhsYXJnZSIsImNvbG9ycyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtYWluQmciLCJsaWdodEJnIiwid2hpdGUiLCJibGFjayIsImxpZ2h0R3JheSIsImdyYXkiLCJkYXJrR3JheSIsInJlZCIsImJhc2VDb2xvckJsYWNrMiIsImJhc2VDb2xvckJsdWUiLCJiYXNlQ29sb3JHcmF5IiwiYmFzZUNvbG9yQmxhY2szIiwiYmFzZUNvbG9yV2hpdGUiLCJiYXNlQ29sb3JCbGFjayIsImJhc2VDb2xvckdyYXkyIiwiYmFzZUNvbG9yR3JheTMiLCJiYXNlQ29sb3JHcmVlbiIsImJhc2VDb2xvclllbGxvdyIsImJhc2VDb2xvclRlYWwiLCJiYXNlQ29sb3JSZWQiLCJiYXNlQ29sb3JQdXJwbGUiLCJsaWdodFBlcml3aW5rbGUiLCJjbG91ZHlCbHVlIiwidG9tYXRvIiwiYmx1ZVNpZGUiLCJiYXNlQ29sb3JCbHVlMjAiLCJjb2xvcjAxIiwiZGl2aWRlciIsImJhc2VDb2xvclJlZDEwIiwiYmFzZUNvbG9yR3JlZW4xNSIsImJhc2VDb2xvckJsdWUxMCIsImJhc2VDb2xvclllbGxvdzEwIiwic3BhY2luZ3MiLCJ4eHNtYWxsIiwibGF5ZXJzIiwiYmFzZSIsIm1lbnUiLCJvdmVybGF5IiwibW9kYWwiLCJhbHdheXNPblRvcCIsInRyYW5zaXRpb24iLCJkZWZhdWx0IiwiZmFzdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFLFFBRFA7QUFFSkMsVUFBTSxFQUFFO0FBRkosR0FETztBQUtiQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFO0FBREYsR0FMSztBQVFiQyxNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUNKLG9JQUZFO0FBR0pDLFFBQUksRUFBRSwwSUFIRjtBQUtKQyxTQUFLLEVBQUUsR0FMSDtBQU1KQyxVQUFNLEVBQUUsR0FOSjtBQU9KQyxRQUFJLEVBQUUsR0FQRjtBQVFKQyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLFFBREg7QUFFTEMsV0FBSyxFQUFFLFFBRkY7QUFHTEMsWUFBTSxFQUFFLFFBSEg7QUFJTEMsV0FBSyxFQUFFLFFBSkY7QUFLTEMsWUFBTSxFQUFFLFFBTEg7QUFNTEMsYUFBTyxFQUFFO0FBTko7QUFSSCxHQVJPO0FBeUJiQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsYUFBUyxFQUFFLFNBRkw7QUFHTkMsVUFBTSxFQUFFLFNBSEY7QUFJTkMsV0FBTyxFQUFFLFNBSkg7QUFLTkMsU0FBSyxFQUFFLFNBTEQ7QUFNTkMsU0FBSyxFQUFFLFNBTkQ7QUFPTkMsYUFBUyxFQUFFLFNBUEw7QUFRTkMsUUFBSSxFQUFFLFNBUkE7QUFTTkMsWUFBUSxFQUFFLFNBVEo7QUFVTkMsT0FBRyxFQUFFLFNBVkM7QUFXTkMsbUJBQWUsRUFBRSxTQVhYO0FBWU5DLGlCQUFhLEVBQUUsU0FaVDtBQWFOQyxpQkFBYSxFQUFFLFNBYlQ7QUFjTkMsbUJBQWUsRUFBRSxTQWRYO0FBZU5DLGtCQUFjLEVBQUUsU0FmVjtBQWdCTkMsa0JBQWMsRUFBRSxTQWhCVjtBQWlCTkMsa0JBQWMsRUFBRSxTQWpCVjtBQWtCTkMsa0JBQWMsRUFBRSxTQWxCVjtBQW1CTkMsa0JBQWMsRUFBRSxTQW5CVjtBQW9CTkMsbUJBQWUsRUFBRSxTQXBCWDtBQXFCTkMsaUJBQWEsRUFBRSxTQXJCVDtBQXNCTkMsZ0JBQVksRUFBRSxTQXRCUjtBQXVCTkMsbUJBQWUsRUFBRSxTQXZCWDtBQXdCTkMsbUJBQWUsRUFBRSxTQXhCWDtBQXlCTkMsY0FBVSxFQUFFLFNBekJOO0FBMEJOQyxVQUFNLEVBQUUsU0ExQkY7QUEyQk5DLFlBQVEsRUFBRSxTQTNCSjtBQTRCTkMsbUJBQWUsRUFBRSx3QkE1Qlg7QUE2Qk5DLFdBQU8sRUFBRSxTQTdCSDtBQThCTkMsV0FBTyxFQUFFLFNBOUJIO0FBK0JOQyxrQkFBYyxFQUFFLHdCQS9CVjtBQWdDTkMsb0JBQWdCLEVBQUUseUJBaENaO0FBaUNOQyxtQkFBZSxFQUFFLHdCQWpDWDtBQWtDTkMscUJBQWlCLEVBQUU7QUFsQ2IsR0F6Qks7QUE2RGJDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsUUFERDtBQUVSMUMsVUFBTSxFQUFFLFFBRkE7QUFHUkMsU0FBSyxFQUFFLFFBSEM7QUFJUkMsVUFBTSxFQUFFLFFBSkE7QUFLUkMsU0FBSyxFQUFFLFFBTEM7QUFNUkMsVUFBTSxFQUFFLFFBTkE7QUFPUkMsV0FBTyxFQUFFO0FBUEQsR0E3REc7QUFzRWJzQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFLEVBREE7QUFFTkMsUUFBSSxFQUFFLEVBRkE7QUFHTkMsV0FBTyxFQUFFLEVBSEg7QUFJTkMsU0FBSyxFQUFFLEVBSkQ7QUFLTkMsZUFBVyxFQUFFO0FBTFAsR0F0RUs7QUE2RWJDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUUsa0JBREM7QUFFVkMsUUFBSSxFQUFFO0FBRkk7QUE3RUMsQ0FBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGdyaWQ6IHtcbiAgICBjb250YWluZXI6ICcxMzByZW0nLFxuICAgIGd1dHRlcjogJzMuMnJlbSdcbiAgfSxcbiAgYm9yZGVyOiB7XG4gICAgcmFkaXVzOiAnMC40cmVtJ1xuICB9LFxuICBmb250OiB7XG4gICAgZmFtaWx5OlxuICAgICAgXCJSdWJpaywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG4gICAgaWNvbjogXCJMaW5lYXJpY29ucywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXG5cbiAgICBsaWdodDogMzAwLFxuICAgIG5vcm1hbDogNDAwLFxuICAgIGJvbGQ6IDYwMCxcbiAgICBzaXplczoge1xuICAgICAgeHNtYWxsOiAnMS4ycmVtJyxcbiAgICAgIHNtYWxsOiAnMS40cmVtJyxcbiAgICAgIG1lZGl1bTogJzEuNnJlbScsXG4gICAgICBsYXJnZTogJzEuOHJlbScsXG4gICAgICB4bGFyZ2U6ICcyLjByZW0nLFxuICAgICAgeHhsYXJnZTogJzIuOHJlbSdcbiAgICB9XG4gIH0sXG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6ICcjMmU1YmZmJyxcbiAgICBzZWNvbmRhcnk6ICcjM0NEM0MxJyxcbiAgICBtYWluQmc6ICcjMDYwOTJCJyxcbiAgICBsaWdodEJnOiAnI0YyRjJGMicsXG4gICAgd2hpdGU6ICcjRkFGQUZBJyxcbiAgICBibGFjazogJyMwMzA1MTcnLFxuICAgIGxpZ2h0R3JheTogJyNFQUVBRUEnLFxuICAgIGdyYXk6ICcjOEY4RjhGJyxcbiAgICBkYXJrR3JheTogJyMyRTJGNDInLFxuICAgIHJlZDogJyNGRjYzNDcnLFxuICAgIGJhc2VDb2xvckJsYWNrMjogJyM2OTcwN2YnLFxuICAgIGJhc2VDb2xvckJsdWU6ICcjMmU1YmZmJyxcbiAgICBiYXNlQ29sb3JHcmF5OiAnI2JmYzVkMicsXG4gICAgYmFzZUNvbG9yQmxhY2szOiAnIzg3OThhZCcsXG4gICAgYmFzZUNvbG9yV2hpdGU6ICcjZmZmZmZmJyxcbiAgICBiYXNlQ29sb3JCbGFjazogJyMyZTM4NGQnLFxuICAgIGJhc2VDb2xvckdyYXkyOiAnI2Y0ZjZmYycsXG4gICAgYmFzZUNvbG9yR3JheTM6ICcjZWVmM2Y1JyxcbiAgICBiYXNlQ29sb3JHcmVlbjogJyMzM2FjMmUnLFxuICAgIGJhc2VDb2xvclllbGxvdzogJyNmN2MxMzcnLFxuICAgIGJhc2VDb2xvclRlYWw6ICcjMDBjMWQ0JyxcbiAgICBiYXNlQ29sb3JSZWQ6ICcjZDYzNjQ5JyxcbiAgICBiYXNlQ29sb3JQdXJwbGU6ICcjOGM1NGZmJyxcbiAgICBsaWdodFBlcml3aW5rbGU6ICcjZDZkZmZmJyxcbiAgICBjbG91ZHlCbHVlOiAnI2IwYmFjOScsXG4gICAgdG9tYXRvOiAnI2U3NDEzMycsXG4gICAgYmx1ZVNpZGU6ICcjMWE0Njc5JyxcbiAgICBiYXNlQ29sb3JCbHVlMjA6ICdyZ2JhKDQ2LCA5MSwgMjU1LCAwLjIpJyxcbiAgICBjb2xvcjAxOiAnIzdmZmZmZicsXG4gICAgZGl2aWRlcjogJyNjOGM5Y2MnLFxuICAgIGJhc2VDb2xvclJlZDEwOiAncmdiYSgyMTQsIDU0LCA3MywgMC4xKScsXG4gICAgYmFzZUNvbG9yR3JlZW4xNTogJ3JnYmEoODAsIDE3MywgNDgsIDAuMTUpJyxcbiAgICBiYXNlQ29sb3JCbHVlMTA6ICdyZ2JhKDQ2LCA5MSwgMjU1LCAwLjEpJyxcbiAgICBiYXNlQ29sb3JZZWxsb3cxMDogJ3JnYmEoMjQ3LCAxOTMsIDU1LCAwLjEpJ1xuICB9LFxuICBzcGFjaW5nczoge1xuICAgIHh4c21hbGw6ICcwLjhyZW0nLFxuICAgIHhzbWFsbDogJzEuNnJlbScsXG4gICAgc21hbGw6ICcyLjRyZW0nLFxuICAgIG1lZGl1bTogJzMuMnJlbScsXG4gICAgbGFyZ2U6ICc0LjByZW0nLFxuICAgIHhsYXJnZTogJzQuOHJlbScsXG4gICAgeHhsYXJnZTogJzUuNnJlbSdcbiAgfSxcbiAgbGF5ZXJzOiB7XG4gICAgYmFzZTogMTAsXG4gICAgbWVudTogMjAsXG4gICAgb3ZlcmxheTogMzAsXG4gICAgbW9kYWw6IDQwLFxuICAgIGFsd2F5c09uVG9wOiA1MFxuICB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVmYXVsdDogJzAuM3MgZWFzZS1pbi1vdXQnLFxuICAgIGZhc3Q6ICcwLjFzIGVhc2UtaW4tb3V0J1xuICB9XG59IGFzIGNvbnN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });