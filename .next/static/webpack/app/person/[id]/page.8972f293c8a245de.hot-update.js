"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/person/[id]/page",{

/***/ "(app-pages-browser)/./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCredits: function() { return /* binding */ getCredits; },\n/* harmony export */   getDiscoverMovies: function() { return /* binding */ getDiscoverMovies; },\n/* harmony export */   getMovieDetails: function() { return /* binding */ getMovieDetails; },\n/* harmony export */   getPerson: function() { return /* binding */ getPerson; },\n/* harmony export */   getSearchMovies: function() { return /* binding */ getSearchMovies; },\n/* harmony export */   getTrailer: function() { return /* binding */ getTrailer; },\n/* harmony export */   getTrendingMovies: function() { return /* binding */ getTrendingMovies; }\n/* harmony export */ });\nconst API_KEY = \"77f3cadb497722d6b57cf23f4e4c2032\";\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nconst getTrendingMovies = async ()=>{\n    try {\n        const res = await fetch(\"\".concat(BASE_URL, \"/trending/movie/day?language=en-US&api_key=\").concat(API_KEY));\n        const data = await res.json();\n        return data.results;\n    } catch (error) {\n        console.error(\"Error fetching trending movies:\", error);\n        return [];\n    }\n};\nconst getMovieDetails = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getTrailer = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/videos?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getCredits = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/credits?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getPerson = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/person/\").concat(id, \"?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getDiscoverMovies = async (page)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/discover/movie?page=\").concat(page, \"&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\nconst getSearchMovies = async (query)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/search/movie?query=\").concat(query, \"&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWUuc2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsVUFBVTtBQUVoQixNQUFNQyxXQUFXO0FBRVYsTUFBTUMsb0JBQW9CO0lBQy9CLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLEdBQXlESixPQUF0REMsVUFBUywrQ0FBcUQsT0FBUkQ7UUFFM0QsTUFBTUssT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBRTNCLE9BQU9ELEtBQUtFLE9BQU87SUFDckIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE9BQU8sRUFBRTtJQUNYO0FBQ0YsRUFBRTtBQUVLLE1BQU1FLGtCQUFrQixPQUFPQztJQUNwQyxNQUFNUixNQUFNLE1BQU1DLE1BQU0sR0FBcUJPLE9BQWxCVixVQUFTLFdBQXVCRCxPQUFkVyxJQUFHLGFBQW1CLE9BQVJYO0lBQzNELE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNTyxhQUFhLE9BQU9EO0lBQy9CLE1BQU1SLE1BQU0sTUFBTUMsTUFBTSxHQUFxQk8sT0FBbEJWLFVBQVMsV0FBOEJELE9BQXJCVyxJQUFHLG9CQUEwQixPQUFSWDtJQUNsRSxNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0Q7QUFDVCxFQUFFO0FBRUssTUFBTVEsYUFBYSxPQUFPRjtJQUMvQixNQUFNUixNQUFNLE1BQU1DLE1BQU0sR0FBcUJPLE9BQWxCVixVQUFTLFdBQStCRCxPQUF0QlcsSUFBRyxxQkFBMkIsT0FBUlg7SUFDbkUsTUFBTUssT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9EO0FBQ1QsRUFBRTtBQUVLLE1BQU1TLFlBQVksT0FBT0g7SUFDOUIsTUFBTVIsTUFBTSxNQUFNQyxNQUFNLEdBQXNCTyxPQUFuQlYsVUFBUyxZQUF3QkQsT0FBZFcsSUFBRyxhQUFtQixPQUFSWDtJQUM1RCxNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0Q7QUFDVCxFQUFFO0FBRUssTUFBTVUsb0JBQW9CLE9BQU9DO0lBQ3RDLE1BQU1iLE1BQU0sTUFBTUMsTUFDaEIsR0FBbUNZLE9BQWhDZixVQUFTLHlCQUF1Q0QsT0FBaEJnQixNQUFLLGFBQW1CLE9BQVJoQjtJQUVyRCxNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0QsS0FBS0UsT0FBTztBQUNyQixFQUFFO0FBRUssTUFBTVUsa0JBQWtCLE9BQU9DO0lBQ3BDLE1BQU1mLE1BQU0sTUFBTUMsTUFDaEIsR0FBa0NjLE9BQS9CakIsVUFBUyx3QkFBdUNELE9BQWpCa0IsT0FBTSxhQUFtQixPQUFSbEI7SUFFckQsTUFBTUssT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9ELEtBQUtFLE9BQU87QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vdmllLnNlcnZpY2UudHM/NjA3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gXCI3N2YzY2FkYjQ5NzcyMmQ2YjU3Y2YyM2Y0ZTRjMjAzMlwiO1xuXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvM1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VHJlbmRpbmdNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtCQVNFX1VSTH0vdHJlbmRpbmcvbW92aWUvZGF5P2xhbmd1YWdlPWVuLVVTJmFwaV9rZXk9JHtBUElfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJlbmRpbmcgbW92aWVzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVEZXRhaWxzID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L21vdmllLyR7aWR9P2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhaWxlciA9IGFzeW5jIChpZDogYW55KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9tb3ZpZS8ke2lkfS92aWRlb3M/YXBpX2tleT0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDcmVkaXRzID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L21vdmllLyR7aWR9L2NyZWRpdHM/YXBpX2tleT0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQZXJzb24gPSBhc3luYyAoaWQ6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vcGVyc29uLyR7aWR9P2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGlzY292ZXJNb3ZpZXMgPSBhc3luYyAocGFnZTogYW55KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGAke0JBU0VfVVJMfS9kaXNjb3Zlci9tb3ZpZT9wYWdlPSR7cGFnZX0mYXBpX2tleT0ke0FQSV9LRVl9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEucmVzdWx0cztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hNb3ZpZXMgPSBhc3luYyAocXVlcnk6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtCQVNFX1VSTH0vc2VhcmNoL21vdmllP3F1ZXJ5PSR7cXVlcnl9JmFwaV9rZXk9JHtBUElfS0VZfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhLnJlc3VsdHM7XG59O1xuIl0sIm5hbWVzIjpbIkFQSV9LRVkiLCJCQVNFX1VSTCIsImdldFRyZW5kaW5nTW92aWVzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInJlc3VsdHMiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRNb3ZpZURldGFpbHMiLCJpZCIsImdldFRyYWlsZXIiLCJnZXRDcmVkaXRzIiwiZ2V0UGVyc29uIiwiZ2V0RGlzY292ZXJNb3ZpZXMiLCJwYWdlIiwiZ2V0U2VhcmNoTW92aWVzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movie.service.ts\n"));

/***/ })

});