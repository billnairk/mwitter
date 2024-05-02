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
exports.id = "pages/api/uploadpost";
exports.ids = ["pages/api/uploadpost"];
exports.modules = {

/***/ "(api)/./pages/api/uploadpost.ts":
/*!*********************************!*\
  !*** ./pages/api/uploadpost.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ uploadPost)\n/* harmony export */ });\nasync function uploadPost(req, res) {\n    const postText = req.body.writeForm;\n    const username = req.body.userName;\n    console.log(`${username} ${postText}`);\n// const getId = await db.user.findUnique({\n//   where: {\n//     username,\n//   },\n// });\n// if (getId) {\n//   const uploadPost = await db.post.create({\n//     data: {\n//       userId: getId.id,\n//     },\n//   });\n//   console.log(uploadPost);\n//   return res.json({ ok: true });\n// }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkcG9zdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR2UsZUFBZUEsVUFBVSxDQUN0Q0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0MsU0FBUztJQUNuQyxNQUFNQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRyxRQUFRO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEVBQUVILFFBQVEsQ0FBQyxDQUFDLEVBQUVILFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QywyQ0FBMkM7QUFDM0MsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1AsTUFBTTtBQUNOLGVBQWU7QUFDZiw4Q0FBOEM7QUFDOUMsY0FBYztBQUNkLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1QsUUFBUTtBQUNSLDZCQUE2QjtBQUM3QixtQ0FBbUM7QUFDbkMsSUFBSTtDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL3BhZ2VzL2FwaS91cGxvYWRwb3N0LnRzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGxvYWRQb3N0KFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHBvc3RUZXh0ID0gcmVxLmJvZHkud3JpdGVGb3JtO1xuICBjb25zdCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJOYW1lO1xuICBjb25zb2xlLmxvZyhgJHt1c2VybmFtZX0gJHtwb3N0VGV4dH1gKTtcbiAgLy8gY29uc3QgZ2V0SWQgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAvLyAgIHdoZXJlOiB7XG4gIC8vICAgICB1c2VybmFtZSxcbiAgLy8gICB9LFxuICAvLyB9KTtcbiAgLy8gaWYgKGdldElkKSB7XG4gIC8vICAgY29uc3QgdXBsb2FkUG9zdCA9IGF3YWl0IGRiLnBvc3QuY3JlYXRlKHtcbiAgLy8gICAgIGRhdGE6IHtcbiAgLy8gICAgICAgdXNlcklkOiBnZXRJZC5pZCxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG4gIC8vICAgY29uc29sZS5sb2codXBsb2FkUG9zdCk7XG4gIC8vICAgcmV0dXJuIHJlcy5qc29uKHsgb2s6IHRydWUgfSk7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJ1cGxvYWRQb3N0IiwicmVxIiwicmVzIiwicG9zdFRleHQiLCJib2R5Iiwid3JpdGVGb3JtIiwidXNlcm5hbWUiLCJ1c2VyTmFtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadpost.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploadpost.ts"));
module.exports = __webpack_exports__;

})();