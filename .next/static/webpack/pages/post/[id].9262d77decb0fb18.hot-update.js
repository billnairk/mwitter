"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./components/viewContainer.tsx":
/*!**************************************!*\
  !*** ./components/viewContainer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./components/input.tsx\");\n/* harmony import */ var _mwit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwit */ \"./components/mwit.tsx\");\n/* harmony import */ var _mwitFav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mwitFav */ \"./components/mwitFav.tsx\");\n/* harmony import */ var _mwitPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mwitPost */ \"./components/mwitPost.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar ViewContainer = function(param) {\n    var type = param.type;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 mt-4 flex-grow\",\n        children: [\n            type === \"mwitPostListBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    7,\n                    8\n                ].map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        postNumber: i\n                    }, i, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 20\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitPostBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwitPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitFavBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    7,\n                    8\n                ].map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwitFav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        postNumber: i\n                    }, i, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 20\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitLoginBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"id\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"loginFormButton\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitRegisterBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"id\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"registerFormButton\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitWriteBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 20,\n                        cols: 10,\n                        className: \"w-full border-[1px] border-slate-300 rounded-md mb-4 p-2\",\n                        placeholder: \"Write..\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"registerFormButton\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = ViewContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewContainer);\nvar _c;\n$RefreshReg$(_c, \"ViewContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZXdDb250YWluZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQ0Y7QUFDRjtBQUNNO0FBQ0U7QUFNbEMsSUFBTUssYUFBYSxHQUFpQyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBQ3pELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQkFBb0I7O1lBQ2hDRixJQUFJLEtBQUssbUJBQW1CLGlCQUMzQiw4REFBQ0MsS0FBRzswQkFDRDtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7aUJBQUMsQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBSztvQkFDbkMscUJBQU8sOERBQUNSLDZDQUFJO3dCQUFTUyxVQUFVLEVBQUVELENBQUM7dUJBQWhCQSxDQUFDOzs7OzhCQUFtQixDQUFDO2lCQUN4QyxDQUFDOzs7OztxQkFDRSxHQUNKLElBQUk7WUFDUEosSUFBSSxLQUFLLGVBQWUsaUJBQ3ZCLDhEQUFDQyxLQUFHOzBCQUNGLDRFQUFDSCxpREFBUTs7Ozt5QkFBRzs7Ozs7cUJBQ1IsR0FDSixJQUFJO1lBQ1BFLElBQUksS0FBSyxjQUFjLGlCQUN0Qiw4REFBQ0MsS0FBRzswQkFDRDtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztBQUFFLHFCQUFDO0FBQUUscUJBQUM7aUJBQUMsQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBSztvQkFDbkMscUJBQU8sOERBQUNQLGdEQUFPO3dCQUFTUSxVQUFVLEVBQUVELENBQUM7dUJBQWhCQSxDQUFDOzs7OzhCQUFtQixDQUFDO2lCQUMzQyxDQUFDOzs7OztxQkFDRSxHQUNKLElBQUk7WUFDUEosSUFBSSxLQUFLLGdCQUFnQixpQkFDeEIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxFQUFFOztrQ0FDZiw4REFBQ1AsOENBQUs7d0JBQUNLLElBQUksRUFBQyxJQUFJOzs7Ozs2QkFBRztrQ0FDbkIsOERBQUNMLDhDQUFLO3dCQUFDSyxJQUFJLEVBQUMsVUFBVTs7Ozs7NkJBQUc7a0NBQ3pCLDhEQUFDTiwrQ0FBTTt3QkFBQ00sSUFBSSxFQUFDLGlCQUFpQjs7Ozs7NkJBQUc7Ozs7OztxQkFDN0IsR0FDSixJQUFJO1lBQ1BBLElBQUksS0FBSyxtQkFBbUIsaUJBQzNCLDhEQUFDQyxLQUFHOztrQ0FDRiw4REFBQ04sOENBQUs7d0JBQUNLLElBQUksRUFBQyxJQUFJOzs7Ozs2QkFBRztrQ0FDbkIsOERBQUNMLDhDQUFLO3dCQUFDSyxJQUFJLEVBQUMsVUFBVTs7Ozs7NkJBQUc7a0NBQ3pCLDhEQUFDTiwrQ0FBTTt3QkFBQ00sSUFBSSxFQUFDLG9CQUFvQjs7Ozs7NkJBQUc7Ozs7OztxQkFDaEMsR0FDSixJQUFJO1lBQ1BBLElBQUksS0FBSyxnQkFBZ0IsaUJBQ3hCLDhEQUFDQyxLQUFHOztrQ0FDRiw4REFBQ0ssVUFBUTt3QkFDUEMsSUFBSSxFQUFFLEVBQUU7d0JBQ1JDLElBQUksRUFBRSxFQUFFO3dCQUNSTixTQUFTLEVBQUMsMERBQTBEO3dCQUNwRU8sV0FBVyxFQUFDLFNBQVM7Ozs7OzZCQUNyQjtrQ0FDRiw4REFBQ2YsK0NBQU07d0JBQUNNLElBQUksRUFBQyxvQkFBb0I7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2hDLEdBQ0osSUFBSTs7Ozs7O2FBQ0osQ0FDTjtDQUNIO0FBakRLRCxLQUFBQSxhQUFhO0FBbURuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdmlld0NvbnRhaW5lci50c3g/MjVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL2J1dHRvblwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgTXdpdCBmcm9tIFwiLi9td2l0XCI7XG5pbXBvcnQgTXdpdEZhdiBmcm9tIFwiLi9td2l0RmF2XCI7XG5pbXBvcnQgTXdpdFBvc3QgZnJvbSBcIi4vbXdpdFBvc3RcIjtcblxuaW50ZXJmYWNlIFZpZXdDb250YWluZXJQcm9wcyB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuY29uc3QgVmlld0NvbnRhaW5lcjogUmVhY3QuRkM8Vmlld0NvbnRhaW5lclByb3BzPiA9ICh7IHR5cGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG10LTQgZmxleC1ncm93XCI+XG4gICAgICB7dHlwZSA9PT0gXCJtd2l0UG9zdExpc3RCb2FyZFwiID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ubWFwKChpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPE13aXQga2V5PXtpfSBwb3N0TnVtYmVyPXtpfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRQb3N0Qm9hcmRcIiA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXdpdFBvc3QgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRGYXZCb2FyZFwiID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ubWFwKChpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPE13aXRGYXYga2V5PXtpfSBwb3N0TnVtYmVyPXtpfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRMb2dpbkJvYXJkXCIgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJpZFwiIC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibG9naW5Gb3JtQnV0dG9uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRSZWdpc3RlckJvYXJkXCIgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJpZFwiIC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVnaXN0ZXJGb3JtQnV0dG9uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRXcml0ZUJvYXJkXCIgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICByb3dzPXsyMH1cbiAgICAgICAgICAgIGNvbHM9ezEwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1bMXB4XSBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbWQgbWItNCBwLTJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZS4uXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInJlZ2lzdGVyRm9ybUJ1dHRvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIklucHV0IiwiTXdpdCIsIk13aXRGYXYiLCJNd2l0UG9zdCIsIlZpZXdDb250YWluZXIiLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaSIsInBvc3ROdW1iZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/viewContainer.tsx\n");

/***/ })

});