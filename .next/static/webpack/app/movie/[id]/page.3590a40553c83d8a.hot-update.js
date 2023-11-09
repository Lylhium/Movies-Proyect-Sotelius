"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movie/[id]/page",{

/***/ "(app-pages-browser)/./utils/movie.service.ts":
/*!********************************!*\
  !*** ./utils/movie.service.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCredits: function() { return /* binding */ getCredits; },\n/* harmony export */   getDiscoverMovies: function() { return /* binding */ getDiscoverMovies; },\n/* harmony export */   getMovieDetails: function() { return /* binding */ getMovieDetails; },\n/* harmony export */   getMovieReviews: function() { return /* binding */ getMovieReviews; },\n/* harmony export */   getPerson: function() { return /* binding */ getPerson; },\n/* harmony export */   getSearchMovies: function() { return /* binding */ getSearchMovies; },\n/* harmony export */   getTrailer: function() { return /* binding */ getTrailer; },\n/* harmony export */   getTrendingMovies: function() { return /* binding */ getTrendingMovies; }\n/* harmony export */ });\nconst API_KEY = \"77f3cadb497722d6b57cf23f4e4c2032\";\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nconst getTrendingMovies = async ()=>{\n    try {\n        const res = await fetch(\"\".concat(BASE_URL, \"/trending/movie/day?language=en-US&api_key=\").concat(API_KEY));\n        const data = await res.json();\n        return data.results;\n    } catch (error) {\n        console.error(\"Error fetching trending movies:\", error);\n        return [];\n    }\n};\nconst getMovieDetails = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getTrailer = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/videos?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getCredits = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/credits?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getPerson = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/person/\").concat(id, \"?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getDiscoverMovies = async (page)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/discover/movie?page=\").concat(page, \"&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\nconst getSearchMovies = async (query)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/search/movie?query=\").concat(query, \"&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\nconst getMovieReviews = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/reviews?language=en-US&page=1&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL21vdmllLnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxVQUFVQyxrQ0FBK0I7QUFDL0MsTUFBTUcsV0FBV0gsOEJBQWdDO0FBRTFDLE1BQU1LLG9CQUFvQjtJQUMvQixJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixHQUF5RFIsT0FBdERJLFVBQVMsK0NBQXFELE9BQVJKO1FBRTNELE1BQU1TLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUUzQixPQUFPRCxLQUFLRSxPQUFPO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxPQUFPLEVBQUU7SUFDWDtBQUNGLEVBQUU7QUFFSyxNQUFNRSxrQkFBa0IsT0FBT0M7SUFDcEMsTUFBTVIsTUFBTSxNQUFNQyxNQUFNLEdBQXFCTyxPQUFsQlgsVUFBUyxXQUF1QkosT0FBZGUsSUFBRyxhQUFtQixPQUFSZjtJQUMzRCxNQUFNUyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0Q7QUFDVCxFQUFFO0FBRUssTUFBTU8sYUFBYSxPQUFPRDtJQUMvQixNQUFNUixNQUFNLE1BQU1DLE1BQU0sR0FBcUJPLE9BQWxCWCxVQUFTLFdBQThCSixPQUFyQmUsSUFBRyxvQkFBMEIsT0FBUmY7SUFDbEUsTUFBTVMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9EO0FBQ1QsRUFBRTtBQUVLLE1BQU1RLGFBQWEsT0FBT0Y7SUFDL0IsTUFBTVIsTUFBTSxNQUFNQyxNQUFNLEdBQXFCTyxPQUFsQlgsVUFBUyxXQUErQkosT0FBdEJlLElBQUcscUJBQTJCLE9BQVJmO0lBQ25FLE1BQU1TLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNUyxZQUFZLE9BQU9IO0lBQzlCLE1BQU1SLE1BQU0sTUFBTUMsTUFBTSxHQUFzQk8sT0FBbkJYLFVBQVMsWUFBd0JKLE9BQWRlLElBQUcsYUFBbUIsT0FBUmY7SUFDNUQsTUFBTVMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9EO0FBQ1QsRUFBRTtBQUVLLE1BQU1VLG9CQUFvQixPQUFPQztJQUN0QyxNQUFNYixNQUFNLE1BQU1DLE1BQ2hCLEdBQW1DWSxPQUFoQ2hCLFVBQVMseUJBQXVDSixPQUFoQm9CLE1BQUssYUFBbUIsT0FBUnBCO0lBRXJELE1BQU1TLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPRCxLQUFLRSxPQUFPO0FBQ3JCLEVBQUU7QUFFSyxNQUFNVSxrQkFBa0IsT0FBT0M7SUFDcEMsTUFBTWYsTUFBTSxNQUFNQyxNQUNoQixHQUFrQ2MsT0FBL0JsQixVQUFTLHdCQUF1Q0osT0FBakJzQixPQUFNLGFBQW1CLE9BQVJ0QjtJQUVyRCxNQUFNUyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0QsS0FBS0UsT0FBTztBQUNyQixFQUFFO0FBRUssTUFBTVksa0JBQWtCLE9BQU9SO0lBQ3BDLE1BQU1SLE1BQU0sTUFBTUMsTUFDaEIsR0FBcUJPLE9BQWxCWCxVQUFTLFdBQXFESixPQUE1Q2UsSUFBRywyQ0FBaUQsT0FBUmY7SUFFbkUsTUFBTVMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBRTNCLE9BQU9ELEtBQUtFLE9BQU87QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9tb3ZpZS5zZXJ2aWNlLnRzPzJkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG5jb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMO1xuXG5leHBvcnQgY29uc3QgZ2V0VHJlbmRpbmdNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtCQVNFX1VSTH0vdHJlbmRpbmcvbW92aWUvZGF5P2xhbmd1YWdlPWVuLVVTJmFwaV9rZXk9JHtBUElfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGEucmVzdWx0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJlbmRpbmcgbW92aWVzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVEZXRhaWxzID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L21vdmllLyR7aWR9P2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VHJhaWxlciA9IGFzeW5jIChpZDogYW55KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9tb3ZpZS8ke2lkfS92aWRlb3M/YXBpX2tleT0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDcmVkaXRzID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L21vdmllLyR7aWR9L2NyZWRpdHM/YXBpX2tleT0ke0FQSV9LRVl9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQZXJzb24gPSBhc3luYyAoaWQ6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vcGVyc29uLyR7aWR9P2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGlzY292ZXJNb3ZpZXMgPSBhc3luYyAocGFnZTogYW55KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGAke0JBU0VfVVJMfS9kaXNjb3Zlci9tb3ZpZT9wYWdlPSR7cGFnZX0mYXBpX2tleT0ke0FQSV9LRVl9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEucmVzdWx0cztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hNb3ZpZXMgPSBhc3luYyAocXVlcnk6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtCQVNFX1VSTH0vc2VhcmNoL21vdmllP3F1ZXJ5PSR7cXVlcnl9JmFwaV9rZXk9JHtBUElfS0VZfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhLnJlc3VsdHM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVSZXZpZXdzID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QkFTRV9VUkx9L21vdmllLyR7aWR9L3Jldmlld3M/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJmFwaV9rZXk9JHtBUElfS0VZfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGEucmVzdWx0cztcbn07XG4iXSwibmFtZXMiOlsiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsImdldFRyZW5kaW5nTW92aWVzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInJlc3VsdHMiLCJlcnJvciIsImNvbnNvbGUiLCJnZXRNb3ZpZURldGFpbHMiLCJpZCIsImdldFRyYWlsZXIiLCJnZXRDcmVkaXRzIiwiZ2V0UGVyc29uIiwiZ2V0RGlzY292ZXJNb3ZpZXMiLCJwYWdlIiwiZ2V0U2VhcmNoTW92aWVzIiwicXVlcnkiLCJnZXRNb3ZpZVJldmlld3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/movie.service.ts\n"));

/***/ })

});