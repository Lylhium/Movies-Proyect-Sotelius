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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie.service */ \"(app-pages-browser)/./src/app/movie.service.ts\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/card */ \"(app-pages-browser)/./src/components/card.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Importa el componente Loading\nconst SearchMovie = (param)=>{\n    let { params } = param;\n    _s();\n    const [searchMovies, setSearchMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Estado para controlar si se está cargando\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSearchMovies = async ()=>{\n            try {\n                const searchResults = await (0,_movie_service__WEBPACK_IMPORTED_MODULE_2__.getSearchMovies)(params.query);\n                setSearchMovies(searchResults);\n                setIsLoading(false); // Cambia el estado a \"false\" cuando la carga está completa\n            } catch (error) {\n                console.error(\"Error fetching movie:\", error);\n                setIsLoading(false); // Asegúrate de cambiar el estado en caso de error\n            }\n        };\n        fetchSearchMovies();\n    }, [\n        params\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-base-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\",\n                children: \" Movies with the name of:\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-orange-500 text-3xl font-semibold pb-4 \",\n                children: params.query\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: searchMovies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        movie: movie\n                    }, movie.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/search/[query]/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchMovie, \"R4XDucxCMyhJUjqd5wt9BxbLZvU=\");\n_c = SearchMovie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchMovie);\nvar _c;\n$RefreshReg$(_c, \"SearchMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VhcmNoL1txdWVyeV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ0c7QUFDUjtBQUNJLENBQUMsZ0NBQWdDO0FBRW5GLE1BQU1NLGNBQWM7UUFBQyxFQUFFQyxNQUFNLEVBQU87O0lBQ2xDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFRLEVBQUU7SUFDMUQsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLE9BQU8sNENBQTRDO0lBRTlGQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLG9CQUFvQjtZQUN4QixJQUFJO2dCQUNGLE1BQU1DLGdCQUFnQixNQUFNViwrREFBZUEsQ0FBQ0ksT0FBT08sS0FBSztnQkFDeERMLGdCQUFnQkk7Z0JBQ2hCRixhQUFhLFFBQVEsMkRBQTJEO1lBQ2xGLEVBQUUsT0FBT0ksT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7Z0JBQ3ZDSixhQUFhLFFBQVEsa0RBQWtEO1lBQ3pFO1FBQ0Y7UUFDQUM7SUFDRixHQUFHO1FBQUNMO0tBQU87SUFFWCxxQkFDRSw4REFBQ1U7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUFPOzs7Ozs7MEJBQ3RCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlgsT0FBT08sS0FBSzs7Ozs7O1lBR2RKLDBCQUNDLDhEQUFDTCwyREFBT0E7Ozs7MENBRVIsOERBQUNjO2dCQUFJRCxXQUFVOzBCQUNaVixhQUFhWSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ2pCLDhEQUFDakIsd0RBQU1BO3dCQUFnQmlCLE9BQU9BO3VCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQztHQXBDTWhCO0tBQUFBO0FBc0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2VhcmNoL1txdWVyeV0vcGFnZS50c3g/YWM3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRTZWFyY2hNb3ZpZXMgfSBmcm9tIFwiLi4vLi4vbW92aWUuc2VydmljZVwiO1xuaW1wb3J0IENhcmRVSSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7IC8vIEltcG9ydGEgZWwgY29tcG9uZW50ZSBMb2FkaW5nXG5cbmNvbnN0IFNlYXJjaE1vdmllID0gKHsgcGFyYW1zIH06IGFueSkgPT4ge1xuICBjb25zdCBbc2VhcmNoTW92aWVzLCBzZXRTZWFyY2hNb3ZpZXNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBFc3RhZG8gcGFyYSBjb250cm9sYXIgc2kgc2UgZXN0w6EgY2FyZ2FuZG9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoU2VhcmNoTW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGF3YWl0IGdldFNlYXJjaE1vdmllcyhwYXJhbXMucXVlcnkpO1xuICAgICAgICBzZXRTZWFyY2hNb3ZpZXMoc2VhcmNoUmVzdWx0cyk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7IC8vIENhbWJpYSBlbCBlc3RhZG8gYSBcImZhbHNlXCIgY3VhbmRvIGxhIGNhcmdhIGVzdMOhIGNvbXBsZXRhXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW92aWU6XCIsIGVycm9yKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTsgLy8gQXNlZ8O6cmF0ZSBkZSBjYW1iaWFyIGVsIGVzdGFkbyBlbiBjYXNvIGRlIGVycm9yXG4gICAgICB9XG4gICAgfTtcbiAgICBmZXRjaFNlYXJjaE1vdmllcygpO1xuICB9LCBbcGFyYW1zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwLTYgYmctYmFzZS0zMDAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTInPiBNb3ZpZXMgd2l0aCB0aGUgbmFtZSBvZjo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LW9yYW5nZS01MDAgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCBwYi00ICc+XG4gICAgICAgIHtwYXJhbXMucXVlcnl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzTG9hZGluZyA/ICggLy8gTW9zdHJhciBlbCBjb21wb25lbnRlIExvYWRpbmcgc2kgaXNMb2FkaW5nIGVzIHRydWVcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00Jz5cbiAgICAgICAgICB7c2VhcmNoTW92aWVzLm1hcCgobW92aWU6IGFueSkgPT4gKFxuICAgICAgICAgICAgPENhcmRVSSBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hNb3ZpZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0U2VhcmNoTW92aWVzIiwiQ2FyZFVJIiwiTG9hZGluZyIsIlNlYXJjaE1vdmllIiwicGFyYW1zIiwic2VhcmNoTW92aWVzIiwic2V0U2VhcmNoTW92aWVzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hTZWFyY2hNb3ZpZXMiLCJzZWFyY2hSZXN1bHRzIiwicXVlcnkiLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwibW92aWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/search/[query]/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/loading.tsx":
/*!************************************!*\
  !*** ./src/components/loading.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst loading = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: \"100vh\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\",\n            style: {\n                transition: \"opacity 2s\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/loading.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/loading.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFVBQVU7SUFDZCxxQkFDRSw4REFBQ0M7UUFDQ0MsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1FBQ2Q7a0JBRUEsNEVBQUNDO1lBQ0NDLFdBQVU7WUFDVk4sT0FBTztnQkFBRU8sWUFBWTtZQUFhOzs7Ozs7Ozs7OztBQUkxQztBQUVBLCtEQUFlVCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xvYWRpbmcudHN4PzAzMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT0nbG9hZGluZyBsb2FkaW5nLXNwaW5uZXIgbG9hZGluZy1sZydcbiAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDJzXCIgfX1cbiAgICAgID48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibG9hZGluZyIsImRpdiIsInN0eWxlIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInNwYW4iLCJjbGFzc05hbWUiLCJ0cmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/loading.tsx\n"));

/***/ })

});