"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./components/viewContainer.tsx":
/*!**************************************!*\
  !*** ./components/viewContainer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mwit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mwit */ \"./components/mwit.tsx\");\nvar _this = undefined;\n\n\nvar ViewContainer = function(param) {\n    var type = param.type;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 mt-4\",\n        children: [\n            type === \"mwitPostBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    7,\n                    8\n                ].map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwit__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        postNumber: i\n                    }, i, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 20\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitloginBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"border-2 border-orange-300 w-full h-[50px] rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = ViewContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewContainer);\nvar _c;\n$RefreshReg$(_c, \"ViewContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZXdDb250YWluZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBMEI7QUFNMUIsSUFBTUMsYUFBYSxHQUFpQyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBQ3pELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVOztZQUN0QkYsSUFBSSxLQUFLLGVBQWUsaUJBQ3ZCLDhEQUFDQyxLQUFHOzBCQUNEO0FBQUMscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQyxDQUFDRSxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFLO29CQUNuQyxxQkFBTyw4REFBQ04sNkNBQUk7d0JBQVNPLFVBQVUsRUFBRUQsQ0FBQzt1QkFBaEJBLENBQUM7Ozs7OEJBQW1CLENBQUM7aUJBQ3hDLENBQUM7Ozs7O3FCQUNFLEdBQ0osSUFBSTtZQUNQSixJQUFJLEtBQUssZ0JBQWdCLGlCQUN4Qiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLEVBQUU7MEJBQ2YsNEVBQUNJLE9BQUs7b0JBQUNKLFNBQVMsRUFBQyx1REFBdUQ7Ozs7O3lCQUFHOzs7OztxQkFDdkUsR0FDSixJQUFJOzs7Ozs7YUFDSixDQUNOO0NBQ0g7QUFqQktILEtBQUFBLGFBQWE7QUFtQm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWV3Q29udGFpbmVyLnRzeD8yNWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNd2l0IGZyb20gXCIuL213aXRcIjtcblxuaW50ZXJmYWNlIFZpZXdDb250YWluZXJQcm9wcyB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuY29uc3QgVmlld0NvbnRhaW5lcjogUmVhY3QuRkM8Vmlld0NvbnRhaW5lclByb3BzPiA9ICh7IHR5cGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG10LTRcIj5cbiAgICAgIHt0eXBlID09PSBcIm13aXRQb3N0Qm9hcmRcIiA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxNd2l0IGtleT17aX0gcG9zdE51bWJlcj17aX0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7dHlwZSA9PT0gXCJtd2l0bG9naW5Cb2FyZFwiID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItb3JhbmdlLTMwMCB3LWZ1bGwgaC1bNTBweF0gcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIk13aXQiLCJWaWV3Q29udGFpbmVyIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImkiLCJwb3N0TnVtYmVyIiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/viewContainer.tsx\n");

/***/ })

});