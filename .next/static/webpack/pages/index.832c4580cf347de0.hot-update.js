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

/***/ "./components/viewContainer.tsx":
/*!**************************************!*\
  !*** ./components/viewContainer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./components/input.tsx\");\n/* harmony import */ var _mwit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwit */ \"./components/mwit.tsx\");\n/* harmony import */ var _mwitFav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mwitFav */ \"./components/mwitFav.tsx\");\n/* harmony import */ var _mwitPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mwitPost */ \"./components/mwitPost.tsx\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/client/useMutation */ \"./lib/client/useMutation.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ViewContainer = function(param) {\n    var type = param.type;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n        id: \"\",\n        password: \"\"\n    }), userFormData = ref1[0], setUserFormData = ref1[1];\n    var ref2 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"/api/users/register\"), 2), registerFn = ref2[0], ref3 = ref2[1], registerLoading = ref3.loading, registerData = ref3.data, registerError = ref3.error;\n    var ref4 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"/api/users/login\"), 2), loginFn = ref4[0], ref5 = ref4[1], loginLoading = ref5.loading, loginData = ref5.data, loginError = ref5.error;\n    var onValidLogin = function(loginFormData) {\n        setUserFormData(loginFormData);\n        loginFn(loginFormData);\n    };\n    var onValidRegister = function(registerFormData) {\n        // setUserFormData(registerFormData);\n        registerFn(registerFormData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        if (loginData === null || loginData === void 0 ? void 0 : loginData.ok) {\n            localStorage.setItem(\"username\", userFormData === null || userFormData === void 0 ? void 0 : userFormData.id);\n            router.push(\"/\");\n        }\n        if (registerData === null || registerData === void 0 ? void 0 : registerData.ok) {\n            // localStorage.setItem(\"username\", userFormData?.id);\n            router.push(\"/login\");\n        }\n    }, [\n        loginData,\n        router,\n        registerData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 mt-4 flex-grow\",\n        children: [\n            type === \"mwitPostListBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    7,\n                    8\n                ].map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        postNumber: i\n                    }, i, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 20\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitPostBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwitPost__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitFavBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    7,\n                    8\n                ].map(function(i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mwitFav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        postNumber: i\n                    }, i, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 20\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitLoginBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValidLogin),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        register: register(\"id\", {\n                            required: true\n                        }),\n                        type: \"id\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        register: register(\"password\", {\n                            required: true\n                        }),\n                        type: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"loginFormButton\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitRegisterBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValidRegister),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        register: register(\"id\", {\n                            required: true\n                        }),\n                        type: \"id\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        register: register(\"password\", {\n                            required: true\n                        }),\n                        type: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"registerFormButton\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, _this) : null,\n            type === \"mwitWriteBoard\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: 20,\n                        cols: 10,\n                        className: \"w-full border-[1px] border-slate-300 rounded-md mb-4 p-2\",\n                        placeholder: \"Write..\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        type: \"writeFormButton\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, _this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ms/Downloads/mwitter/components/viewContainer.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(ViewContainer, \"OJM955SMXFK6wSQSFdIPj8oSeX4=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = ViewContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewContainer);\nvar _c;\n$RefreshReg$(_c, \"ViewContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ0MsUUFBUSxFQUFFL0IsWUFBWSxDQUFDbUIsZUFBZSxDQUFDOztrQ0FDM0MsOERBQUM5Qiw4Q0FBSzt3QkFBQ1UsUUFBUSxFQUFFQSxRQUFRLENBQUMsSUFBSSxFQUFFOzRCQUFFaUMsUUFBUSxFQUFFLElBQUk7eUJBQUUsQ0FBQzt3QkFBRWxDLElBQUksRUFBQyxJQUFJOzs7Ozs2QkFBRztrQ0FDakUsOERBQUNULDhDQUFLO3dCQUNKVSxRQUFRLEVBQUVBLFFBQVEsQ0FBQyxVQUFVLEVBQUU7NEJBQUVpQyxRQUFRLEVBQUUsSUFBSTt5QkFBRSxDQUFDO3dCQUNsRGxDLElBQUksRUFBQyxVQUFVOzs7Ozs2QkFDZjtrQ0FDRiw4REFBQ1YsK0NBQU07d0JBQUNVLElBQUksRUFBQyxvQkFBb0I7Ozs7OzZCQUFHOzs7Ozs7cUJBQy9CLEdBQ0wsSUFBSTtZQUNQQSxJQUFJLEtBQUssZ0JBQWdCLGlCQUN4Qiw4REFBQzJCLEtBQUc7O2tDQUNGLDhEQUFDUSxVQUFRO3dCQUNQQyxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsSUFBSSxFQUFFLEVBQUU7d0JBQ1JULFNBQVMsRUFBQywwREFBMEQ7d0JBQ3BFVSxXQUFXLEVBQUMsU0FBUzs7Ozs7NkJBQ3JCO2tDQUNGLDhEQUFDaEQsK0NBQU07d0JBQUNVLElBQUksRUFBQyxpQkFBaUI7Ozs7OzZCQUFHOzs7Ozs7cUJBQzdCLEdBQ0osSUFBSTs7Ozs7O2FBQ0osQ0FDTjtDQUNIO0dBdkZLRCxhQUFhOztRQUNrQlYsb0RBQU87UUFDM0JTLGtEQUFTO1FBUXBCSCwrREFBVztRQUlYQSwrREFBVzs7O0FBZFhJLEtBQUFBLGFBQWE7QUF5Rm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWV3Q29udGFpbmVyLnRzeD8yNWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2J1dHRvblwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgTXdpdCBmcm9tIFwiLi9td2l0XCI7XG5pbXBvcnQgTXdpdEZhdiBmcm9tIFwiLi9td2l0RmF2XCI7XG5pbXBvcnQgTXdpdFBvc3QgZnJvbSBcIi4vbXdpdFBvc3RcIjtcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VNdXRhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmludGVyZmFjZSBWaWV3Q29udGFpbmVyUHJvcHMge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBMb2dpbkZvcm0ge1xuICBpZDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5jb25zdCBWaWV3Q29udGFpbmVyOiBSZWFjdC5GQzxWaWV3Q29udGFpbmVyUHJvcHM+ID0gKHsgdHlwZSB9KSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxMb2dpbkZvcm0+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlckZvcm1EYXRhLCBzZXRVc2VyRm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIGlkOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW1xuICAgIHJlZ2lzdGVyRm4sXG4gICAgeyBsb2FkaW5nOiByZWdpc3RlckxvYWRpbmcsIGRhdGE6IHJlZ2lzdGVyRGF0YSwgZXJyb3I6IHJlZ2lzdGVyRXJyb3IgfSxcbiAgXSA9IHVzZU11dGF0aW9uKFwiL2FwaS91c2Vycy9yZWdpc3RlclwiKTtcbiAgY29uc3QgW1xuICAgIGxvZ2luRm4sXG4gICAgeyBsb2FkaW5nOiBsb2dpbkxvYWRpbmcsIGRhdGE6IGxvZ2luRGF0YSwgZXJyb3I6IGxvZ2luRXJyb3IgfSxcbiAgXSA9IHVzZU11dGF0aW9uKFwiL2FwaS91c2Vycy9sb2dpblwiKTtcbiAgY29uc3Qgb25WYWxpZExvZ2luID0gKGxvZ2luRm9ybURhdGE6IExvZ2luRm9ybSkgPT4ge1xuICAgIHNldFVzZXJGb3JtRGF0YShsb2dpbkZvcm1EYXRhKTtcbiAgICBsb2dpbkZuKGxvZ2luRm9ybURhdGEpO1xuICB9O1xuICBjb25zdCBvblZhbGlkUmVnaXN0ZXIgPSAocmVnaXN0ZXJGb3JtRGF0YTogTG9naW5Gb3JtKSA9PiB7XG4gICAgLy8gc2V0VXNlckZvcm1EYXRhKHJlZ2lzdGVyRm9ybURhdGEpO1xuICAgIHJlZ2lzdGVyRm4ocmVnaXN0ZXJGb3JtRGF0YSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvZ2luRGF0YT8ub2spIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgdXNlckZvcm1EYXRhPy5pZCk7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICAgIGlmIChyZWdpc3RlckRhdGE/Lm9rKSB7XG4gICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJGb3JtRGF0YT8uaWQpO1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbbG9naW5EYXRhLCByb3V0ZXIsIHJlZ2lzdGVyRGF0YV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG10LTQgZmxleC1ncm93XCI+XG4gICAgICB7dHlwZSA9PT0gXCJtd2l0UG9zdExpc3RCb2FyZFwiID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ubWFwKChpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPE13aXQga2V5PXtpfSBwb3N0TnVtYmVyPXtpfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRQb3N0Qm9hcmRcIiA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TXdpdFBvc3QgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRGYXZCb2FyZFwiID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNiwgNywgOF0ubWFwKChpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPE13aXRGYXYga2V5PXtpfSBwb3N0TnVtYmVyPXtpfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt0eXBlID09PSBcIm13aXRMb2dpbkJvYXJkXCIgPyAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZExvZ2luKX0+XG4gICAgICAgICAgPElucHV0IHJlZ2lzdGVyPXtyZWdpc3RlcihcImlkXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IHR5cGU9XCJpZFwiIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxvZ2luRm9ybUJ1dHRvblwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3R5cGUgPT09IFwibXdpdFJlZ2lzdGVyQm9hcmRcIiA/IChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkUmVnaXN0ZXIpfT5cbiAgICAgICAgICA8SW5wdXQgcmVnaXN0ZXI9e3JlZ2lzdGVyKFwiaWRcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gdHlwZT1cImlkXCIgLz5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3RlcihcInBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVnaXN0ZXJGb3JtQnV0dG9uXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7dHlwZSA9PT0gXCJtd2l0V3JpdGVCb2FyZFwiID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgcm93cz17MjB9XG4gICAgICAgICAgICBjb2xzPXsxMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItWzFweF0gYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIG1iLTQgcC0yXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUuLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ3cml0ZUZvcm1CdXR0b25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlld0NvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNd2l0IiwiTXdpdEZhdiIsIk13aXRQb3N0IiwidXNlTXV0YXRpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlZpZXdDb250YWluZXIiLCJ0eXBlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyb3V0ZXIiLCJpZCIsInBhc3N3b3JkIiwidXNlckZvcm1EYXRhIiwic2V0VXNlckZvcm1EYXRhIiwicmVnaXN0ZXJGbiIsImxvYWRpbmciLCJyZWdpc3RlckxvYWRpbmciLCJkYXRhIiwicmVnaXN0ZXJEYXRhIiwiZXJyb3IiLCJyZWdpc3RlckVycm9yIiwibG9naW5GbiIsImxvZ2luTG9hZGluZyIsImxvZ2luRGF0YSIsImxvZ2luRXJyb3IiLCJvblZhbGlkTG9naW4iLCJsb2dpbkZvcm1EYXRhIiwib25WYWxpZFJlZ2lzdGVyIiwicmVnaXN0ZXJGb3JtRGF0YSIsIm9rIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwicG9zdE51bWJlciIsImZvcm0iLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiY29scyIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/viewContainer.tsx\n");

/***/ })

});