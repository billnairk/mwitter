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
exports.id = "pages/api/users/myinfo";
exports.ids = ["pages/api/users/myinfo"];
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

/***/ "(api)/./pages/api/users/myinfo/index.ts":
/*!*****************************************!*\
  !*** ./pages/api/users/myinfo/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Myinfo)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function Myinfo(req, res) {\n    // console.log(req);\n    // console.log(req.url);\n    // const urlArray = await req.url?.split(\"/api/users/myinfo/\");\n    // if (urlArray && urlArray[1] !== undefined) {\n    //   let userId = +urlArray[1];\n    // console.log(userId);\n    // userId가 유효한 값이 있는 경우에만 findUnique 메서드 실행\n    //   if (!isNaN(userId)) {\n    //     });\n    const myProfile = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n        where: {\n            id: 1\n        }\n    });\n    //     console.log(myProfile);\n    //   }\n    // }\n    // if (userId !== undefined) {\n    //   userId = +urlArray[1];\n    //   const myProfile = await db.user.findUnique({\n    //     where: {\n    //       id: userId,\n    //     },\n    //   });\n    //   console.log(myProfile);\n    // }\n    res.json({\n        ok: true,\n        myProfile\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvbXlpbmZvL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ29DO0FBR3JCLGVBQWVDLE1BQU0sQ0FDbENDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsK0RBQStEO0lBQy9ELCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsdUJBQXVCO0lBRXZCO0lBQ0EsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixNQUFNQyxTQUFTLEdBQUcsTUFBTUosK0RBQWtCLENBQUM7UUFDekNPLEtBQUssRUFBRTtZQUNMQyxFQUFFLEVBQUUsQ0FBQztTQUNOO0tBQ0YsQ0FBQztJQUNGLDhCQUE4QjtJQUM5QixNQUFNO0lBQ04sSUFBSTtJQUNKLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsaURBQWlEO0lBQ2pELGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsSUFBSTtJQUVKTCxHQUFHLENBQUNNLElBQUksQ0FBQztRQUNQQyxFQUFFLEVBQUUsSUFBSTtRQUNSTixTQUFTO0tBQ1YsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vcGFnZXMvYXBpL3VzZXJzL215aW5mby9pbmRleC50cz80NmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvZGJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBNeWluZm8oXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgLy8gY29uc29sZS5sb2cocmVxKTtcbiAgLy8gY29uc29sZS5sb2cocmVxLnVybCk7XG4gIC8vIGNvbnN0IHVybEFycmF5ID0gYXdhaXQgcmVxLnVybD8uc3BsaXQoXCIvYXBpL3VzZXJzL215aW5mby9cIik7XG4gIC8vIGlmICh1cmxBcnJheSAmJiB1cmxBcnJheVsxXSAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgbGV0IHVzZXJJZCA9ICt1cmxBcnJheVsxXTtcbiAgLy8gY29uc29sZS5sb2codXNlcklkKTtcblxuICAvLyB1c2VySWTqsIAg7Jyg7Zqo7ZWcIOqwkuydtCDsnojripQg6rK97Jqw7JeQ66eMIGZpbmRVbmlxdWUg66mU7ISc65OcIOyLpO2WiVxuICAvLyAgIGlmICghaXNOYU4odXNlcklkKSkge1xuICAvLyAgICAgfSk7XG4gIGNvbnN0IG15UHJvZmlsZSA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiAxLFxuICAgIH0sXG4gIH0pO1xuICAvLyAgICAgY29uc29sZS5sb2cobXlQcm9maWxlKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gaWYgKHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgdXNlcklkID0gK3VybEFycmF5WzFdO1xuICAvLyAgIGNvbnN0IG15UHJvZmlsZSA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gIC8vICAgICB3aGVyZToge1xuICAvLyAgICAgICBpZDogdXNlcklkLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gICBjb25zb2xlLmxvZyhteVByb2ZpbGUpO1xuICAvLyB9XG5cbiAgcmVzLmpzb24oe1xuICAgIG9rOiB0cnVlLFxuICAgIG15UHJvZmlsZSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZGIiLCJNeWluZm8iLCJyZXEiLCJyZXMiLCJteVByb2ZpbGUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJqc29uIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/myinfo/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/myinfo/index.ts"));
module.exports = __webpack_exports__;

})();