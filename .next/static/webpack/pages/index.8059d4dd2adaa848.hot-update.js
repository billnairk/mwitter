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

/***/ "./components/topNav.tsx":
/*!*******************************!*\
  !*** ./components/topNav.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction TopNav(param) {\n    var pageCheck = param.pageCheck;\n    _s();\n    var user;\n    if (true) {\n        user = localStorage.getItem(\"username\");\n    }\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var onClick = function() {\n        router.push(\"/config\");\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isUserLoading = ref[0], setIsUserLoading = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (user) setIsUserLoading(true);\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex-grow shadow-md p-3 flex justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: onClick,\n                className: \"hover:cursor-pointer hover:bg-[#245854] ease-in duration-300 rounded-full w-14 h-14 flex flex-col justify-center text-center bg-[#37A59E]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white font-black text-[32px]\",\n                    children: \"M\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/components/topNav.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/topNav.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            isUserLoading && pageCheck && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-black text-red-400\",\n                        children: user\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/topNav.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\uB2D8, \\uC548\\uB155\\uD558\\uC138\\uC694\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/topNav.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/topNav.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ms/Downloads/mwitter/components/topNav.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(TopNav, \"cBnK2EO2rufoGdSWPrbUt0T4qxg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TopNav;\nTopNav.defaultProps = {\n    pageCheck: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvcE5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXdDO0FBQ0k7O0FBTTVDLFNBQVNHLE1BQU0sQ0FBQyxLQUE0QixFQUFFO1FBQTlCLFNBQVcsR0FBWCxLQUE0QixDQUExQkMsU0FBUzs7SUFDekIsSUFBSUMsSUFBSTtJQUNSLElBQUksSUFBNkIsRUFBRTtRQUNqQ0EsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN6QztJQUNELElBQU1DLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixJQUFNUyxPQUFPLEdBQUcsV0FBTTtRQUNwQkQsTUFBTSxDQUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEI7SUFDRCxJQUEwQ1IsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWhCM0QsYUFnQnNCLEdBQXNCQSxHQUFlLEdBQXJDLEVBaEJ0QixnQkFnQndDLEdBQUlBLEdBQWUsR0FBbkI7SUFDdENELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlJLElBQUksRUFBRU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEMsRUFBRTtRQUFDUCxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBQ1gscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtFQUFrRTs7MEJBQy9FLDhEQUFDRCxLQUFHO2dCQUNGSixPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCSyxTQUFTLEVBQUMsMklBQTJJOzBCQUVySiw0RUFBQ0MsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLG1DQUFtQzs4QkFBQyxHQUFDOzs7Ozt3QkFBSTs7Ozs7b0JBQ2xEO1lBQ0xILGFBQWEsSUFBSVAsU0FBUyxrQkFDekIsOERBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztrQ0FDbkIsOERBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7a0NBQUVULElBQUk7Ozs7OzRCQUFLO2tDQUNqRCw4REFBQ1UsR0FBQztrQ0FBQyx3Q0FBUTs7Ozs7NEJBQUk7Ozs7OztvQkFDWDs7Ozs7O1lBRUosQ0FDTjtDQUNIO0dBN0JRWixNQUFNOztRQUtFSCxrREFBUzs7O0FBTGpCRyxLQUFBQSxNQUFNO0FBK0JmQSxNQUFNLENBQUNhLFlBQVksR0FBRztJQUNwQlosU0FBUyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztBQUVGLCtEQUFlRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b3BOYXYudHN4Pzc4NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQYWdlQ2hlY2tUeXBlIHtcbiAgcGFnZUNoZWNrOiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBUb3BOYXYoeyBwYWdlQ2hlY2sgfTogUGFnZUNoZWNrVHlwZSkge1xuICBsZXQgdXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcbiAgfVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9jb25maWdcIik7XG4gIH07XG4gIGNvbnN0IFtpc1VzZXJMb2FkaW5nLCBzZXRJc1VzZXJMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcikgc2V0SXNVc2VyTG9hZGluZyh0cnVlKTtcbiAgfSwgW3VzZXJdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LWdyb3cgc2hhZG93LW1kIHAtMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctWyMyNDU4NTRdIGVhc2UtaW4gZHVyYXRpb24tMzAwIHJvdW5kZWQtZnVsbCB3LTE0IGgtMTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBiZy1bIzM3QTU5RV1cIlxuICAgICAgPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1bMzJweF1cIj5NPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNVc2VyTG9hZGluZyAmJiBwYWdlQ2hlY2sgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtcmVkLTQwMFwiPnt1c2VyfTwvcD5cbiAgICAgICAgICA8cD7ri5gsIOyViOuFle2VmOyEuOyalDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Ub3BOYXYuZGVmYXVsdFByb3BzID0ge1xuICBwYWdlQ2hlY2s6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9wTmF2IiwicGFnZUNoZWNrIiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCIsImlzVXNlckxvYWRpbmciLCJzZXRJc1VzZXJMb2FkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/topNav.tsx\n");

/***/ })

});