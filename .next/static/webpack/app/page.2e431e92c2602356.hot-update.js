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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/movie.service */ \"(app-pages-browser)/./utils/movie.service.ts\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/card */ \"(app-pages-browser)/./src/components/card.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* harmony import */ var _components_carrousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/carrousel */ \"(app-pages-browser)/./src/components/carrousel.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home(params) {\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movieTrailer, setMovieTrailer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchTrendingMovies() {\n            try {\n                const trendingMovies = await (0,_utils_movie_service__WEBPACK_IMPORTED_MODULE_2__.getTrendingMovies)();\n                setMovies(trendingMovies);\n            } catch (error) {\n                console.error(\"Error fetching trending movies:\", error);\n            } finally{\n                setIsLoading(false);\n            }\n        }\n        const fetchGetTrailer = async ()=>{\n            try {\n                const trailer = await (0,_utils_movie_service__WEBPACK_IMPORTED_MODULE_2__.getTrailer)(params.id);\n                setMovieTrailer(trailer);\n            } catch (error) {\n                console.error(\"Error fetching movie trailer:\", error);\n            }\n        };\n        fetchTrendingMovies();\n        fetchGetTrailer();\n    }, [\n        params.id\n    ]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-base-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[500px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carrousel__WEBPACK_IMPORTED_MODULE_5__.Carrousel, {\n                    movie: movies\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        movie: movie\n                    }, movie.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"f1YoUvmSp4mPRQTHs/qBJSlHugM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUN1QjtBQUNsQztBQUNHO0FBQ1E7QUFFcEMsU0FBU1EsS0FBS0MsTUFBVzs7SUFDdEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDOUMsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFhO0lBRTdERCxnREFBU0EsQ0FBQztRQUNSLGVBQWVlO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxpQkFBaUIsTUFBTWQsdUVBQWlCQTtnQkFDOUNRLFVBQVVNO1lBQ1osRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtZQUNuRCxTQUFVO2dCQUNSTCxhQUFhO1lBQ2Y7UUFDRjtRQUNBLE1BQU1PLGtCQUFrQjtZQUN0QixJQUFJO2dCQUNGLE1BQU1DLFVBQVUsTUFBTWpCLGdFQUFVQSxDQUFDSyxPQUFPYSxFQUFFO2dCQUMxQ1AsZ0JBQWdCTTtZQUNsQixFQUFFLE9BQU9ILE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQ0FBaUNBO1lBQ2pEO1FBQ0Y7UUFFQUY7UUFDQUk7SUFDRixHQUFHO1FBQUNYLE9BQU9hLEVBQUU7S0FBQztJQUVkLElBQUlWLFdBQVc7UUFDYixxQkFBTyw4REFBQ04sMkRBQU9BOzs7OztJQUNqQjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDakIsNERBQVNBO29CQUFDbUIsT0FBT2hCOzs7Ozs7Ozs7OzswQkFFcEIsOERBQUNlO2dCQUFJRCxXQUFVOzBCQUNaZCxPQUFPaUIsR0FBRyxDQUFDLENBQUNELHNCQUNYLDhEQUFDckIsd0RBQU1BO3dCQUFnQnFCLE9BQU9BO3VCQUFqQkEsTUFBTUosRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQjtHQTdDd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRUcmVuZGluZ01vdmllcywgZ2V0VHJhaWxlciB9IGZyb20gXCIuLi8uLi91dGlscy9tb3ZpZS5zZXJ2aWNlXCI7XG5pbXBvcnQgQ2FyZFVJIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuaW1wb3J0IHsgQ2Fycm91c2VsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9jYXJyb3VzZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwYXJhbXM6IGFueSkge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbW92aWVUcmFpbGVyLCBzZXRNb3ZpZVRyYWlsZXJdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFRyZW5kaW5nTW92aWVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHJlbmRpbmdNb3ZpZXMgPSBhd2FpdCBnZXRUcmVuZGluZ01vdmllcygpO1xuICAgICAgICBzZXRNb3ZpZXModHJlbmRpbmdNb3ZpZXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRyZW5kaW5nIG1vdmllczpcIiwgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZmV0Y2hHZXRUcmFpbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHJhaWxlciA9IGF3YWl0IGdldFRyYWlsZXIocGFyYW1zLmlkKTtcbiAgICAgICAgc2V0TW92aWVUcmFpbGVyKHRyYWlsZXIpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vdmllIHRyYWlsZXI6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hUcmVuZGluZ01vdmllcygpO1xuICAgIGZldGNoR2V0VHJhaWxlcigpO1xuICB9LCBbcGFyYW1zLmlkXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcC02IGJnLWJhc2UtMzAwJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs1MDBweF0nPlxuICAgICAgICA8Q2Fycm91c2VsIG1vdmllPXttb3ZpZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00Jz5cbiAgICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgPENhcmRVSSBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9PjwvQ2FyZFVJPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0VHJlbmRpbmdNb3ZpZXMiLCJnZXRUcmFpbGVyIiwiQ2FyZFVJIiwiTG9hZGluZyIsIkNhcnJvdXNlbCIsIkhvbWUiLCJwYXJhbXMiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtb3ZpZVRyYWlsZXIiLCJzZXRNb3ZpZVRyYWlsZXIiLCJmZXRjaFRyZW5kaW5nTW92aWVzIiwidHJlbmRpbmdNb3ZpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaEdldFRyYWlsZXIiLCJ0cmFpbGVyIiwiaWQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibW92aWUiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});