"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./components/button.tsx":
/*!*******************************!*\
  !*** ./components/button.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Button(param) {\n    var type = param.type, children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var onClick = function() {\n        router.push(\"/register\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            type === \"text\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full bg-[#37A59E] p-4 mb-4 rounded-md text-white font-black text-[24px] hover:cursor-pointer hover:bg-[#245854] ease-in duration-200\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            type === \"loginRegister\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full bg-[#37A59E] p-3 mb-4 rounded-md text-white font-black text-[24px] hover:cursor-pointer hover:bg-[#245854] ease-in duration-200\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            type === \"or\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-auto bg-[#37A59E] p-2 mb-4 rounded-md text-white font-black text-[24px] hover:cursor-pointer hover:bg-[#245854] ease-in duration-200\",\n                children: [\n                    \"or \",\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/button.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Button, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3Qzs7QUFRekIsU0FBU0MsTUFBTSxDQUFDLEtBQStCLEVBQUU7UUFBL0JDLElBQUksR0FBTixLQUErQixDQUE3QkEsSUFBSSxFQUFFQyxRQUFRLEdBQWhCLEtBQStCLENBQXZCQSxRQUFROztJQUM3QyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBTUssT0FBTyxHQUFHLFdBQU07UUFDcEJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QscUJBQ0U7O1lBQ0dKLElBQUksS0FBSyxNQUFNLGtCQUNkLDhEQUFDSyxRQUFNO2dCQUFDQyxTQUFTLEVBQUMsd0lBQXdJOzBCQUN2SkwsUUFBUTs7Ozs7b0JBQ0Y7WUFFVkQsSUFBSSxLQUFLLGVBQWUsa0JBQ3ZCLDhEQUFDSyxRQUFNO2dCQUFDQyxTQUFTLEVBQUMsd0lBQXdJOzBCQUN2SkwsUUFBUTs7Ozs7b0JBQ0Y7WUFFVkQsSUFBSSxLQUFLLElBQUksa0JBQ1osOERBQUNLLFFBQU07Z0JBQUNDLFNBQVMsRUFBQyx3SUFBd0k7O29CQUFDLEtBQ3RKO29CQUFDTCxRQUFROzs7Ozs7b0JBQ0w7O29CQXVCVixDQUNIO0NBQ0g7R0E3Q3VCRixNQUFNOztRQUNiRCxrREFBUzs7O0FBREZDLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b24udHN4P2M0YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgdHlwZTogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlLCBjaGlsZHJlbiB9OiBCdXR0b25Qcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3R5cGUgPT09IFwidGV4dFwiICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMzN0E1OUVdIHAtNCBtYi00IHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtWzI0cHhdIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjMjQ1ODU0XSBlYXNlLWluIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge3R5cGUgPT09IFwibG9naW5SZWdpc3RlclwiICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMzN0E1OUVdIHAtMyBtYi00IHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtWzI0cHhdIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLVsjMjQ1ODU0XSBlYXNlLWluIGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge3R5cGUgPT09IFwib3JcIiAmJiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1hdXRvIGJnLVsjMzdBNTlFXSBwLTIgbWItNCByb3VuZGVkLW1kIHRleHQtd2hpdGUgZm9udC1ibGFjayB0ZXh0LVsyNHB4XSBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bIzI0NTg1NF0gZWFzZS1pbiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICBvciB7Y2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHsvKiB7dHlwZSA9PT0gXCJsb2dpbkZvcm1CdXR0b25cIiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzM3QTU5RV0gcC0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtWzI0cHhdIG1iLTRcIj5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzM3QTU5RV0gcC0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtWzI0cHhdXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IHR5cGUgPT09IFwicmVnaXN0ZXJGb3JtQnV0dG9uXCIgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLVsjMzdBNTlFXSBwLTIgcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC1bMjRweF1cIj5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiB0eXBlID09PSBcIndyaXRlRm9ybUJ1dHRvblwiID8gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1bIzM3QTU5RV0gcC0yIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQtWzI0cHhdXCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IG51bGx9ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJ1dHRvbiIsInR5cGUiLCJjaGlsZHJlbiIsInJvdXRlciIsIm9uQ2xpY2siLCJwdXNoIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/button.tsx\n");

/***/ })

});