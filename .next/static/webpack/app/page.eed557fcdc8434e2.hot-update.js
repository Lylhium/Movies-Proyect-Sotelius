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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/movie.service */ \"(app-pages-browser)/./utils/movie.service.ts\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card */ \"(app-pages-browser)/./src/components/card.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* harmony import */ var _components_carrousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carrousel */ \"(app-pages-browser)/./src/components/carrousel.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movieTrailer, setMovieTrailer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchTrendingMovies() {\n            try {\n                const trendingMovies = await (0,_utils_movie_service__WEBPACK_IMPORTED_MODULE_2__.getTrendingMovies)();\n                setMovies(trendingMovies);\n            } catch (error) {\n                console.error(\"Error fetching trending movies:\", error);\n            } finally{\n                setIsLoading(false);\n            }\n        }\n        fetchTrendingMovies();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-base-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-6 px-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carrousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    movies: movies\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-orange-500 text-4xl font-bold\",\n                children: \"Trending Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        movie: movie\n                    }, movie.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"f1YoUvmSp4mPRQTHs/qBJSlHugM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNXO0FBQ3RCO0FBQ0c7QUFDUTtBQUVwQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFRLEVBQUU7SUFDOUMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFhO0lBRTdERCxnREFBU0EsQ0FBQztRQUNSLGVBQWVhO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxpQkFBaUIsTUFBTVosdUVBQWlCQTtnQkFDOUNNLFVBQVVNO1lBQ1osRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtZQUNuRCxTQUFVO2dCQUNSTCxhQUFhO1lBQ2Y7UUFDRjtRQUVBRztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlKLFdBQVc7UUFDYixxQkFBTyw4REFBQ0wsMkRBQU9BOzs7OztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDYTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNiLDZEQUFhQTtvQkFBQ0UsUUFBUUE7Ozs7Ozs7Ozs7OzBCQUV6Qiw4REFBQ2E7Z0JBQUdGLFdBQVU7MEJBQXFDOzs7Ozs7MEJBQ25ELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlgsT0FBT2MsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDbkIsd0RBQU1BO3dCQUFnQm1CLE9BQU9BO3VCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQjtHQXJDd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0VHJlbmRpbmdNb3ZpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbW92aWUuc2VydmljZVwiO1xuaW1wb3J0IENhcmRVSSBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL2xvYWRpbmdcIjtcbmltcG9ydCBNb3ZpZUNhcm91c2VsIGZyb20gXCJAL2NvbXBvbmVudHMvY2Fycm91c2VsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttb3ZpZVRyYWlsZXIsIHNldE1vdmllVHJhaWxlcl0gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoVHJlbmRpbmdNb3ZpZXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0cmVuZGluZ01vdmllcyA9IGF3YWl0IGdldFRyZW5kaW5nTW92aWVzKCk7XG4gICAgICAgIHNldE1vdmllcyh0cmVuZGluZ01vdmllcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJlbmRpbmcgbW92aWVzOlwiLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoVHJlbmRpbmdNb3ZpZXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtNiBiZy1iYXNlLTMwMCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItNiBweC1hdXRvJz5cbiAgICAgICAgPE1vdmllQ2Fyb3VzZWwgbW92aWVzPXttb3ZpZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtb3JhbmdlLTUwMCB0ZXh0LTR4bCBmb250LWJvbGQnPlRyZW5kaW5nIE1vdmllczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNCc+XG4gICAgICAgIHttb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICAgIDxDYXJkVUkga2V5PXttb3ZpZS5pZH0gbW92aWU9e21vdmllfT48L0NhcmRVST5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFRyZW5kaW5nTW92aWVzIiwiQ2FyZFVJIiwiTG9hZGluZyIsIk1vdmllQ2Fyb3VzZWwiLCJIb21lIiwibW92aWVzIiwic2V0TW92aWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibW92aWVUcmFpbGVyIiwic2V0TW92aWVUcmFpbGVyIiwiZmV0Y2hUcmVuZGluZ01vdmllcyIsInRyZW5kaW5nTW92aWVzIiwiZXJyb3IiLCJjb25zb2xlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibWFwIiwibW92aWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});