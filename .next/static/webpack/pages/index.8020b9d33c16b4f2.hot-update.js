"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_topNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/topNav */ \"./components/topNav.tsx\");\n/* harmony import */ var _components_mainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/mainContainer */ \"./components/mainContainer.tsx\");\n/* harmony import */ var _components_viewContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/viewContainer */ \"./components/viewContainer.tsx\");\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var user = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    console.log(\"haha\");\n    if (true) {\n        localStorage.getItem(\"username\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_topNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_viewContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    type: \"mwitPostListBoard\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ms/Downloads/mwitter/pages/index.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Home, \"BPnln+wUpxLjLAxQmw7xYz9C+QI=\", false, function() {\n    return [\n        _lib_client_useUser__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDZ0I7QUFDYztBQUNBO0FBQ1o7O0FBRzdCLFNBQVNLLElBQUksR0FBRzs7SUFDN0IsSUFBTUMsSUFBSSxHQUFHRiwrREFBTyxFQUFFO0lBQ3RCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixJQUFJLElBQTZCLEVBQUU7UUFDakNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNSLGlFQUFhOzs4QkFDWiw4REFBQ0QsMERBQU07Ozs7d0JBQUc7OEJBQ1YsOERBQUNFLGlFQUFhO29CQUFDUSxJQUFJLEVBQUUsbUJBQW1COzs7Ozt3QkFBSTs7Ozs7O2dCQUM5QjtxQkFDZixDQUNIO0NBQ0g7R0FmdUJOLElBQUk7O1FBQ2JELDJEQUFPOzs7QUFERUMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9wTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3RvcE5hdlwiO1xuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpbkNvbnRhaW5lclwiO1xuaW1wb3J0IFZpZXdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlld0NvbnRhaW5lclwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVXNlclwiO1xuaW1wb3J0IHVzZVNXUiwgeyB1c2VTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG4gIGNvbnNvbGUubG9nKFwiaGFoYVwiKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgIDxUb3BOYXYgLz5cbiAgICAgICAgPFZpZXdDb250YWluZXIgdHlwZT17XCJtd2l0UG9zdExpc3RCb2FyZFwifSAvPlxuICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9wTmF2IiwiTWFpbkNvbnRhaW5lciIsIlZpZXdDb250YWluZXIiLCJ1c2VVc2VyIiwiSG9tZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});