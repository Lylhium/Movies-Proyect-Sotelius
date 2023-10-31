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

/***/ "(app-pages-browser)/./src/app/movie/page.tsx":
/*!********************************!*\
  !*** ./src/app/movie/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ \"(app-pages-browser)/./src/app/movie.service.ts\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/card */ \"(app-pages-browser)/./src/components/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst MoviePage = ()=>{\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [visibleMovies, setVisibleMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(8);\n    const [moviePage, setMoviePage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchDiscoverMovies() {\n            try {\n                const trendingMovies = await (0,_movie_service__WEBPACK_IMPORTED_MODULE_2__.getDiscoverMovies)();\n                setMovies(trendingMovies);\n            } catch (error) {\n                console.error(\"Error fetching Discover movies:\", error);\n            }\n        }\n        fetchDiscoverMovies();\n    }, []);\n    const loadMoreMovies = ()=>{\n        setVisibleMovies((prevVisibleMovies)=>prevVisibleMovies + 8);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-6 bg-base-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-orange-500 text-3xl font-semibold pb-4\",\n                children: \"Discover Movies\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/movie/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        movie: movie\n                    }, movie.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/movie/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/movie/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            visibleMovies < movies.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: loadMoreMovies,\n                className: \"text-orange-500 mt-4\",\n                children: \"Load More\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/movie/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/movie/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MoviePage, \"IGMDc+tGa7Kip7vHfhJWPYjQdDU=\");\n_c = MoviePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoviePage);\nvar _c;\n$RefreshReg$(_c, \"MoviePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDRTtBQUNWO0FBRTNDLE1BQU1LLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzlDLE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlVTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsaUJBQWlCLE1BQU1WLGlFQUFpQkE7Z0JBQzlDSSxVQUFVTTtZQUNaLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDbkQ7UUFDRjtRQUVBRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGlCQUFpQjtRQUNyQlAsaUJBQWlCLENBQUNRLG9CQUFzQkEsb0JBQW9CO0lBQzlEO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBOEM7Ozs7OzswQkFHNUQsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNaYixPQUFPZ0IsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDbkIsd0RBQU1BO3dCQUFnQm1CLE9BQU9BO3VCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7Ozs7OztZQUd4QmhCLGdCQUFnQkYsT0FBT21CLE1BQU0sa0JBQzVCLDhEQUFDQztnQkFBT0MsU0FBU1g7Z0JBQWdCRyxXQUFVOzBCQUF1Qjs7Ozs7Ozs7Ozs7O0FBTTFFO0dBeENNZDtLQUFBQTtBQTBDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vdmllL3BhZ2UudHN4PzY3NTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0RGlzY292ZXJNb3ZpZXMgfSBmcm9tIFwiLi4vbW92aWUuc2VydmljZVwiO1xuaW1wb3J0IENhcmRVSSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XG5cbmNvbnN0IE1vdmllUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFt2aXNpYmxlTW92aWVzLCBzZXRWaXNpYmxlTW92aWVzXSA9IHVzZVN0YXRlKDgpO1xuXG4gIGNvbnN0IFttb3ZpZVBhZ2UsIHNldE1vdmllUGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGlzY292ZXJNb3ZpZXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0cmVuZGluZ01vdmllcyA9IGF3YWl0IGdldERpc2NvdmVyTW92aWVzKCk7XG4gICAgICAgIHNldE1vdmllcyh0cmVuZGluZ01vdmllcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgRGlzY292ZXIgbW92aWVzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hEaXNjb3Zlck1vdmllcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZE1vcmVNb3ZpZXMgPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZU1vdmllcygocHJldlZpc2libGVNb3ZpZXMpID0+IHByZXZWaXNpYmxlTW92aWVzICsgOCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBwLTYgYmctYmFzZS0zMDAnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1vcmFuZ2UtNTAwIHRleHQtM3hsIGZvbnQtc2VtaWJvbGQgcGItNCc+XG4gICAgICAgIERpc2NvdmVyIE1vdmllc1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00Jz5cbiAgICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgPENhcmRVSSBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9PjwvQ2FyZFVJPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3Zpc2libGVNb3ZpZXMgPCBtb3ZpZXMubGVuZ3RoICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2FkTW9yZU1vdmllc30gY2xhc3NOYW1lPSd0ZXh0LW9yYW5nZS01MDAgbXQtNCc+XG4gICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERpc2NvdmVyTW92aWVzIiwiQ2FyZFVJIiwiTW92aWVQYWdlIiwibW92aWVzIiwic2V0TW92aWVzIiwidmlzaWJsZU1vdmllcyIsInNldFZpc2libGVNb3ZpZXMiLCJtb3ZpZVBhZ2UiLCJzZXRNb3ZpZVBhZ2UiLCJmZXRjaERpc2NvdmVyTW92aWVzIiwidHJlbmRpbmdNb3ZpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2FkTW9yZU1vdmllcyIsInByZXZWaXNpYmxlTW92aWVzIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwibWFwIiwibW92aWUiLCJpZCIsImxlbmd0aCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movie/page.tsx\n"));

/***/ })

});