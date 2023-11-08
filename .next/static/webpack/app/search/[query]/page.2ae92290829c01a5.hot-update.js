"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/[query]/page",{

/***/ "(app-pages-browser)/./src/app/search/[query]/page.tsx":
/*!*****************************************!*\
  !*** ./src/app/search/[query]/page.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/movie.service */ \"(app-pages-browser)/./utils/movie.service.ts\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/card */ \"(app-pages-browser)/./src/components/card.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SearchMovie = (param)=>{\n    let { params } = param;\n    _s();\n    const [searchMovies, setSearchMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSearchMovies = async ()=>{\n            try {\n                const searchResults = await (0,_utils_movie_service__WEBPACK_IMPORTED_MODULE_2__.getSearchMovies)(params.query);\n                setSearchMovies(searchResults);\n                setIsLoading(false);\n            } catch (error) {\n                console.error(\"Error fetching movie:\", error);\n                setIsLoading(false);\n            }\n        };\n        fetchSearchMovies();\n    }, [\n        params\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-base-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: \"Movies titled\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-orange-500 text-3xl font-semibold pb-4 \",\n                children: [\n                    '\"',\n                    params.query,\n                    '\"'\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: searchMovies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        movie: movie\n                    }, movie.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchMovie, \"R4XDucxCMyhJUjqd5wt9BxbLZvU=\");\n_c = SearchMovie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchMovie);\nvar _c;\n$RefreshReg$(_c, \"SearchMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL1txdWVyeV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ2U7QUFDcEI7QUFDSTtBQUVsRCxNQUFNTSxjQUFjO1FBQUMsRUFBRUMsTUFBTSxFQUFPOztJQUNsQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzFELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxvQkFBb0I7WUFDeEIsSUFBSTtnQkFDRixNQUFNQyxnQkFBZ0IsTUFBTVYscUVBQWVBLENBQUNJLE9BQU9PLEtBQUs7Z0JBQ3hETCxnQkFBZ0JJO2dCQUNoQkYsYUFBYTtZQUNmLEVBQUUsT0FBT0ksT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7Z0JBQ3ZDSixhQUFhO1lBQ2Y7UUFDRjtRQUNBQztJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUVYLHFCQUNFLDhEQUFDVTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQU87Ozs7OzswQkFDdEIsOERBQUNDO2dCQUFJRCxXQUFVOztvQkFBK0M7b0JBQzFEWCxPQUFPTyxLQUFLO29CQUFDOzs7Ozs7O1lBR2hCSiwwQkFDQyw4REFBQ0wsMkRBQU9BOzs7OzBDQUVSLDhEQUFDYztnQkFBSUQsV0FBVTswQkFDWlYsYUFBYVksR0FBRyxDQUFDLENBQUNDLHNCQUNqQiw4REFBQ2pCLHdEQUFNQTt3QkFBZ0JpQixPQUFPQTt1QkFBakJBLE1BQU1DLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakM7R0FwQ01oQjtLQUFBQTtBQXNDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlYXJjaC9bcXVlcnldL3BhZ2UudHN4P2FjNzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0U2VhcmNoTW92aWVzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL21vdmllLnNlcnZpY2VcIjtcbmltcG9ydCBDYXJkVUkgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY2FyZFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuXG5jb25zdCBTZWFyY2hNb3ZpZSA9ICh7IHBhcmFtcyB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3NlYXJjaE1vdmllcywgc2V0U2VhcmNoTW92aWVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoU2VhcmNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGF3YWl0IGdldFNlYXJjaE1vdmllcyhwYXJhbXMucXVlcnkpO1xuICAgICAgICBzZXRTZWFyY2hNb3ZpZXMoc2VhcmNoUmVzdWx0cyk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW92aWU6XCIsIGVycm9yKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoU2VhcmNoTW92aWVzKCk7XG4gIH0sIFtwYXJhbXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtNiBiZy1iYXNlLTMwMCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktMic+TW92aWVzIHRpdGxlZDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtb3JhbmdlLTUwMCB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHBiLTQgJz5cbiAgICAgICAgXCJ7cGFyYW1zLnF1ZXJ5fVwiXG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00Jz5cbiAgICAgICAgICB7c2VhcmNoTW92aWVzLm1hcCgobW92aWU6IGFueSkgPT4gKFxuICAgICAgICAgICAgPENhcmRVSSBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hNb3ZpZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2VhcmNoTW92aWVzIiwiQ2FyZFVJIiwiTG9hZGluZyIsIlNlYXJjaE1vdmllIiwicGFyYW1zIiwic2VhcmNoTW92aWVzIiwic2V0U2VhcmNoTW92aWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hTZWFyY2hNb3ZpZXMiLCJzZWFyY2hSZXN1bHRzIiwicXVlcnkiLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwibW92aWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/[query]/page.tsx\n"));

/***/ })

});