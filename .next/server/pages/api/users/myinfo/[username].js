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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Myinfo)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function Myinfo(req, res) {\n    const urlArray = await req.url?.split(\"/api/users/myinfo/\");\n    let userId;\n    if (urlArray) {\n        userId = urlArray[1];\n        const myProfile = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                username: userId\n            }\n        });\n        res.json({\n            ok: true,\n            myProfile\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvbXlpbmZvL1t1c2VybmFtZV0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDb0M7QUFFckIsZUFBZUMsTUFBTSxDQUNsQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csR0FBRyxFQUFFQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDM0QsSUFBSUMsTUFBTTtJQUNWLElBQUlILFFBQVEsRUFBRTtRQUNaRyxNQUFNLEdBQUdILFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNSSxTQUFTLEdBQUcsTUFBTVIsK0RBQWtCLENBQUM7WUFDekNXLEtBQUssRUFBRTtnQkFDTEMsUUFBUSxFQUFFTCxNQUFNO2FBQ2pCO1NBQ0YsQ0FBQztRQUNGSixHQUFHLENBQUNVLElBQUksQ0FBQztZQUNQQyxFQUFFLEVBQUUsSUFBSTtZQUNSTixTQUFTO1NBQ1YsQ0FBQyxDQUFDO0tBQ0o7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdXNlcnMvbXlpbmZvL1t1c2VybmFtZV0udHM/ZjkwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIE15aW5mbyhcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCB1cmxBcnJheSA9IGF3YWl0IHJlcS51cmw/LnNwbGl0KFwiL2FwaS91c2Vycy9teWluZm8vXCIpO1xuICBsZXQgdXNlcklkO1xuICBpZiAodXJsQXJyYXkpIHtcbiAgICB1c2VySWQgPSB1cmxBcnJheVsxXTtcbiAgICBjb25zdCBteVByb2ZpbGUgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVzLmpzb24oe1xuICAgICAgb2s6IHRydWUsXG4gICAgICBteVByb2ZpbGUsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYiIsIk15aW5mbyIsInJlcSIsInJlcyIsInVybEFycmF5IiwidXJsIiwic3BsaXQiLCJ1c2VySWQiLCJteVByb2ZpbGUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidXNlcm5hbWUiLCJqc29uIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/myinfo/[username].ts\n");

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