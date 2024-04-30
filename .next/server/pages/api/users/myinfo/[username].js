"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/myinfo/[username]";
exports.ids = ["pages/api/users/myinfo/[username]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/myinfo/[username].ts":
/*!**********************************************!*\
  !*** ./pages/api/users/myinfo/[username].ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Myinfo)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function Myinfo(req, res) {\n    console.log(req.url);\n    const urlArray = await req.url?.split(\"/api/users/myinfo/\");\n    let userId;\n    if (urlArray) {\n        userId = urlArray[1];\n        const myProfile = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                username: userId\n            }\n        });\n        res.json({\n            ok: true,\n            myProfile\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvbXlpbmZvL1t1c2VybmFtZV0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDb0M7QUFFckIsZUFBZUMsTUFBTSxDQUNsQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUNJLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLE1BQU1DLFFBQVEsR0FBRyxNQUFNTCxHQUFHLENBQUNJLEdBQUcsRUFBRUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQzNELElBQUlDLE1BQU07SUFDVixJQUFJRixRQUFRLEVBQUU7UUFDWkUsTUFBTSxHQUFHRixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTUcsU0FBUyxHQUFHLE1BQU1WLCtEQUFrQixDQUFDO1lBQ3pDYSxLQUFLLEVBQUU7Z0JBQ0xDLFFBQVEsRUFBRUwsTUFBTTthQUNqQjtTQUNGLENBQUM7UUFDRk4sR0FBRyxDQUFDWSxJQUFJLENBQUM7WUFDUEMsRUFBRSxFQUFFLElBQUk7WUFDUk4sU0FBUztTQUNWLENBQUMsQ0FBQztLQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXJzL215aW5mby9bdXNlcm5hbWVdLnRzP2Y5MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBNeWluZm8oXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc29sZS5sb2cocmVxLnVybCk7XG4gIGNvbnN0IHVybEFycmF5ID0gYXdhaXQgcmVxLnVybD8uc3BsaXQoXCIvYXBpL3VzZXJzL215aW5mby9cIik7XG4gIGxldCB1c2VySWQ7XG4gIGlmICh1cmxBcnJheSkge1xuICAgIHVzZXJJZCA9IHVybEFycmF5WzFdO1xuICAgIGNvbnN0IG15UHJvZmlsZSA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VybmFtZTogdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXMuanNvbih7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIG15UHJvZmlsZSxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiIiwiTXlpbmZvIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVybCIsInVybEFycmF5Iiwic3BsaXQiLCJ1c2VySWQiLCJteVByb2ZpbGUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXNlcm5hbWUiLCJqc29uIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/myinfo/[username].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/myinfo/[username].ts"));
module.exports = __webpack_exports__;

})();