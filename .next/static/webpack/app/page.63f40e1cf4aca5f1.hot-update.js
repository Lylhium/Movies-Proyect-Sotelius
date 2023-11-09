"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/movie.service */ \"(app-pages-browser)/./utils/movie.service.ts\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card */ \"(app-pages-browser)/./src/components/card.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* harmony import */ var _components_carrousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carrousel */ \"(app-pages-browser)/./src/components/carrousel.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movieTrailer, setMovieTrailer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchTrendingMovies() {\n            try {\n                const trendingMovies = await (0,_utils_movie_service__WEBPACK_IMPORTED_MODULE_2__.getTrendingMovies)();\n                setMovies(trendingMovies);\n            } catch (error) {\n                console.error(\"Error fetching trending movies:\", error);\n            } finally{\n                setIsLoading(false);\n            }\n        }\n        fetchTrendingMovies();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-base-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carrousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    movie: movies\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        movie: movie\n                    }, movie.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"f1YoUvmSp4mPRQTHs/qBJSlHugM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNXO0FBQ3RCO0FBQ0c7QUFDUTtBQUVwQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFRLEVBQUU7SUFDOUMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFhO0lBRTdERCxnREFBU0EsQ0FBQztRQUNSLGVBQWVhO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxpQkFBaUIsTUFBTVosdUVBQWlCQTtnQkFDOUNNLFVBQVVNO1lBQ1osRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtZQUNuRCxTQUFVO2dCQUNSTCxhQUFhO1lBQ2Y7UUFDRjtRQUVBRztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlKLFdBQVc7UUFDYixxQkFBTyw4REFBQ0wsMkRBQU9BOzs7OztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7MEJBQ0MsNEVBQUNkLDZEQUFhQTtvQkFBQ2UsT0FBT2I7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1k7Z0JBQUlELFdBQVU7MEJBQ1pYLE9BQU9jLEdBQUcsQ0FBQyxDQUFDRCxzQkFDWCw4REFBQ2pCLHdEQUFNQTt3QkFBZ0JpQixPQUFPQTt1QkFBakJBLE1BQU1FLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0FwQ3dCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFRyZW5kaW5nTW92aWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21vdmllLnNlcnZpY2VcIjtcbmltcG9ydCBDYXJkVUkgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9sb2FkaW5nXCI7XG5pbXBvcnQgTW92aWVDYXJvdXNlbCBmcm9tIFwiQC9jb21wb25lbnRzL2NhcnJvdXNlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbW92aWVUcmFpbGVyLCBzZXRNb3ZpZVRyYWlsZXJdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyZW5kaW5nTW92aWVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHJlbmRpbmdNb3ZpZXMgPSBhd2FpdCBnZXRUcmVuZGluZ01vdmllcygpO1xuICAgICAgICBzZXRNb3ZpZXModHJlbmRpbmdNb3ZpZXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyZW5kaW5nIG1vdmllczpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaFRyZW5kaW5nTW92aWVzKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwLTYgYmctYmFzZS0zMDAnPlxuICAgICAgPGRpdj5cbiAgICAgICAgPE1vdmllQ2Fyb3VzZWwgbW92aWU9e21vdmllc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQnPlxuICAgICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICA8Q2FyZFVJIGtleT17bW92aWUuaWR9IG1vdmllPXttb3ZpZX0+PC9DYXJkVUk+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRUcmVuZGluZ01vdmllcyIsIkNhcmRVSSIsIkxvYWRpbmciLCJNb3ZpZUNhcm91c2VsIiwiSG9tZSIsIm1vdmllcyIsInNldE1vdmllcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1vdmllVHJhaWxlciIsInNldE1vdmllVHJhaWxlciIsImZldGNoVHJlbmRpbmdNb3ZpZXMiLCJ0cmVuZGluZ01vdmllcyIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJtb3ZpZSIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});