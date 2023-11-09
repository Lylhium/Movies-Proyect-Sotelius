"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movie/page",{

/***/ "(app-pages-browser)/./utils/movie.service.ts":
/*!********************************!*\
  !*** ./utils/movie.service.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCredits: function() { return /* binding */ getCredits; },\n/* harmony export */   getDiscoverMovies: function() { return /* binding */ getDiscoverMovies; },\n/* harmony export */   getMovieDetails: function() { return /* binding */ getMovieDetails; },\n/* harmony export */   getPerson: function() { return /* binding */ getPerson; },\n/* harmony export */   getSearchMovies: function() { return /* binding */ getSearchMovies; },\n/* harmony export */   getTrailer: function() { return /* binding */ getTrailer; },\n/* harmony export */   getTrendingMovies: function() { return /* binding */ getTrendingMovies; },\n/* harmony export */   getUpcomingMovies: function() { return /* binding */ getUpcomingMovies; }\n/* harmony export */ });\nconst API_KEY = \"77f3cadb497722d6b57cf23f4e4c2032\";\nconst BASE_URL = \"https://api.themoviedb.org/3\";\nconst getTrendingMovies = async ()=>{\n    try {\n        const res = await fetch(\"\".concat(BASE_URL, \"/trending/movie/day?language=en-US&api_key=\").concat(API_KEY));\n        const data = await res.json();\n        return data.results;\n    } catch (error) {\n        console.error(\"Error fetching trending movies:\", error);\n        return [];\n    }\n};\nconst getMovieDetails = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getTrailer = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/videos?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getCredits = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/\").concat(id, \"/credits?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getPerson = async (id)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/person/\").concat(id, \"?api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data;\n};\nconst getDiscoverMovies = async (page)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/discover/movie?page=\").concat(page, \"&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\nconst getSearchMovies = async (query)=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/search/movie?query=\").concat(query, \"&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\nconst getUpcomingMovies = async ()=>{\n    const res = await fetch(\"\".concat(BASE_URL, \"/movie/day?language=en-USupcoming&api_key=\").concat(API_KEY));\n    const data = await res.json();\n    return data.results;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL21vdmllLnNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxVQUFVO0FBRWhCLE1BQU1DLFdBQVc7QUFFVixNQUFNQyxvQkFBb0I7SUFDL0IsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEIsR0FBeURKLE9BQXREQyxVQUFTLCtDQUFxRCxPQUFSRDtRQUUzRCxNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7UUFFM0IsT0FBT0QsS0FBS0UsT0FBTztJQUNyQixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakQsT0FBTyxFQUFFO0lBQ1g7QUFDRixFQUFFO0FBRUssTUFBTUUsa0JBQWtCLE9BQU9DO0lBQ3BDLE1BQU1SLE1BQU0sTUFBTUMsTUFBTSxHQUFxQk8sT0FBbEJWLFVBQVMsV0FBdUJELE9BQWRXLElBQUcsYUFBbUIsT0FBUlg7SUFDM0QsTUFBTUssT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9EO0FBQ1QsRUFBRTtBQUVLLE1BQU1PLGFBQWEsT0FBT0Q7SUFDL0IsTUFBTVIsTUFBTSxNQUFNQyxNQUFNLEdBQXFCTyxPQUFsQlYsVUFBUyxXQUE4QkQsT0FBckJXLElBQUcsb0JBQTBCLE9BQVJYO0lBQ2xFLE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNUSxhQUFhLE9BQU9GO0lBQy9CLE1BQU1SLE1BQU0sTUFBTUMsTUFBTSxHQUFxQk8sT0FBbEJWLFVBQVMsV0FBK0JELE9BQXRCVyxJQUFHLHFCQUEyQixPQUFSWDtJQUNuRSxNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0Q7QUFDVCxFQUFFO0FBRUssTUFBTVMsWUFBWSxPQUFPSDtJQUM5QixNQUFNUixNQUFNLE1BQU1DLE1BQU0sR0FBc0JPLE9BQW5CVixVQUFTLFlBQXdCRCxPQUFkVyxJQUFHLGFBQW1CLE9BQVJYO0lBQzVELE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNVSxvQkFBb0IsT0FBT0M7SUFDdEMsTUFBTWIsTUFBTSxNQUFNQyxNQUNoQixHQUFtQ1ksT0FBaENmLFVBQVMseUJBQXVDRCxPQUFoQmdCLE1BQUssYUFBbUIsT0FBUmhCO0lBRXJELE1BQU1LLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtJQUMzQixPQUFPRCxLQUFLRSxPQUFPO0FBQ3JCLEVBQUU7QUFFSyxNQUFNVSxrQkFBa0IsT0FBT0M7SUFDcEMsTUFBTWYsTUFBTSxNQUFNQyxNQUNoQixHQUFrQ2MsT0FBL0JqQixVQUFTLHdCQUF1Q0QsT0FBakJrQixPQUFNLGFBQW1CLE9BQVJsQjtJQUVyRCxNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsT0FBT0QsS0FBS0UsT0FBTztBQUNyQixFQUFFO0FBRUssTUFBTVksb0JBQW9CO0lBQy9CLE1BQU1oQixNQUFNLE1BQU1DLE1BQ2hCLEdBQXdESixPQUFyREMsVUFBUyw4Q0FBb0QsT0FBUkQ7SUFFMUQsTUFBTUssT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU9ELEtBQUtFLE9BQU87QUFDckIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9tb3ZpZS5zZXJ2aWNlLnRzPzJkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9IFwiNzdmM2NhZGI0OTc3MjJkNmI1N2NmMjNmNGU0YzIwMzJcIjtcblxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcblxuZXhwb3J0IGNvbnN0IGdldFRyZW5kaW5nTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7QkFTRV9VUkx9L3RyZW5kaW5nL21vdmllL2RheT9sYW5ndWFnZT1lbi1VUyZhcGlfa2V5PSR7QVBJX0tFWX1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyZW5kaW5nIG1vdmllczpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRGV0YWlscyA9IGFzeW5jIChpZDogYW55KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9tb3ZpZS8ke2lkfT9hcGlfa2V5PSR7QVBJX0tFWX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRyYWlsZXIgPSBhc3luYyAoaWQ6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vbW92aWUvJHtpZH0vdmlkZW9zP2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3JlZGl0cyA9IGFzeW5jIChpZDogYW55KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9tb3ZpZS8ke2lkfS9jcmVkaXRzP2FwaV9rZXk9JHtBUElfS0VZfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVyc29uID0gYXN5bmMgKGlkOiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L3BlcnNvbi8ke2lkfT9hcGlfa2V5PSR7QVBJX0tFWX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERpc2NvdmVyTW92aWVzID0gYXN5bmMgKHBhZ2U6IGFueSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtCQVNFX1VSTH0vZGlzY292ZXIvbW92aWU/cGFnZT0ke3BhZ2V9JmFwaV9rZXk9JHtBUElfS0VZfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhLnJlc3VsdHM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoTW92aWVzID0gYXN5bmMgKHF1ZXJ5OiBhbnkpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QkFTRV9VUkx9L3NlYXJjaC9tb3ZpZT9xdWVyeT0ke3F1ZXJ5fSZhcGlfa2V5PSR7QVBJX0tFWX1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YS5yZXN1bHRzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVwY29taW5nTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtCQVNFX1VSTH0vbW92aWUvZGF5P2xhbmd1YWdlPWVuLVVTdXBjb21pbmcmYXBpX2tleT0ke0FQSV9LRVl9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEucmVzdWx0cztcbn07XG4iXSwibmFtZXMiOlsiQVBJX0tFWSIsIkJBU0VfVVJMIiwiZ2V0VHJlbmRpbmdNb3ZpZXMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicmVzdWx0cyIsImVycm9yIiwiY29uc29sZSIsImdldE1vdmllRGV0YWlscyIsImlkIiwiZ2V0VHJhaWxlciIsImdldENyZWRpdHMiLCJnZXRQZXJzb24iLCJnZXREaXNjb3Zlck1vdmllcyIsInBhZ2UiLCJnZXRTZWFyY2hNb3ZpZXMiLCJxdWVyeSIsImdldFVwY29taW5nTW92aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/movie.service.ts\n"));

/***/ })

});