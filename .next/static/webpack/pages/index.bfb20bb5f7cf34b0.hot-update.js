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

/***/ "./components/button.tsx":
/*!*******************************!*\
  !*** ./components/button.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Button(param) {\n    var type = param.type;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var onClick = function() {\n        router.push(\"/register\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: type === \"loginFormButton\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px] mb-4\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onClick,\n                    className: \"w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : type === \"registerFormButton\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]\",\n            children: \"Register\"\n        }, void 0, false, {\n            fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this) : type === \"writeFormButton\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]\",\n            children: \"Submit\"\n        }, void 0, false, {\n            fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this) : type === \"signUp\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: onClick,\n            className: \"w-full bg-[#37A59E] p-2 rounded-md text-white font-black text-[24px]\",\n            children: \"Sign Up\"\n        }, void 0, false, {\n            fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this) : null\n    }, void 0, false);\n};\n_s(Button, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3Qzs7QUFNekIsU0FBU0MsTUFBTSxDQUFDLEtBQXFCLEVBQUU7UUFBdkIsSUFBTSxHQUFOLEtBQXFCLENBQW5CQyxJQUFJOztJQUNuQyxJQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFDMUIsSUFBTUksT0FBTyxHQUFHLFdBQU07UUFDcEJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QscUJBQ0U7a0JBQ0dILElBQUksS0FBSyxpQkFBaUIsaUJBQ3pCOzs4QkFDRSw4REFBQ0ksUUFBTTtvQkFBQ0MsU0FBUyxFQUFDLDJFQUEyRTs4QkFBQyxPQUU5Rjs7Ozs7d0JBQVM7OEJBQ1QsOERBQUNELFFBQU07b0JBQ0xGLE9BQU8sRUFBRUEsT0FBTztvQkFDaEJHLFNBQVMsRUFBQyxzRUFBc0U7OEJBQ2pGLFNBRUQ7Ozs7O3dCQUFTOzt3QkFDUixHQUNETCxJQUFJLEtBQUssb0JBQW9CLGlCQUMvQiw4REFBQ0ksUUFBTTtZQUFDQyxTQUFTLEVBQUMsc0VBQXNFO3NCQUFDLFVBRXpGOzs7OztnQkFBUyxHQUNQTCxJQUFJLEtBQUssaUJBQWlCLGlCQUM1Qiw4REFBQ0ksUUFBTTtZQUFDQyxTQUFTLEVBQUMsc0VBQXNFO3NCQUFDLFFBRXpGOzs7OztnQkFBUyxHQUNQTCxJQUFJLEtBQUssUUFBUSxpQkFDbkIsOERBQUNJLFFBQU07WUFDTEYsT0FBTyxFQUFFQSxPQUFPO1lBQ2hCRyxTQUFTLEVBQUMsc0VBQXNFO3NCQUNqRixTQUVEOzs7OztnQkFBUyxHQUNQLElBQUk7cUJBQ1AsQ0FDSDtDQUNIO0dBckN1Qk4sTUFBTTs7UUFDYkQsa0RBQVM7OztBQURGQyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV0dG9uLnRzeD9jNGI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUgfTogQnV0dG9uUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0eXBlID09PSBcImxvZ2luRm9ybUJ1dHRvblwiID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMzdBNTlFXSBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1bMjRweF0gbWItNFwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMzdBNTlFXSBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1bMjRweF1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApIDogdHlwZSA9PT0gXCJyZWdpc3RlckZvcm1CdXR0b25cIiA/IChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMzN0E1OUVdIHAtMiByb3VuZGVkLW1kIHRleHQtd2hpdGUgZm9udC1ibGFjayB0ZXh0LVsyNHB4XVwiPlxuICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IHR5cGUgPT09IFwid3JpdGVGb3JtQnV0dG9uXCIgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMzdBNTlFXSBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1bMjRweF1cIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogdHlwZSA9PT0gXCJzaWduVXBcIiA/IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMzdBNTlFXSBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1bMjRweF1cIlxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBVcFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJ1dHRvbiIsInR5cGUiLCJyb3V0ZXIiLCJvbkNsaWNrIiwicHVzaCIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/button.tsx\n");

/***/ })

});