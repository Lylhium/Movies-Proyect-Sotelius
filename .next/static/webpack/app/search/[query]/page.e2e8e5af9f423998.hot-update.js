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

/***/ "(app-pages-browser)/./src/components/card.tsx":
/*!*********************************!*\
  !*** ./src/components/card.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaStar!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MovieCard(param) {\n    let { movie } = param;\n    _s();\n    const IMG_BASE_URL = \"https://www.themoviedb.org/t/p/w220_and_h330_face\";\n    const maxOverviewLength = 150;\n    const [showFullOverview, setShowFullOverview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const truncatedOverview = movie.overview.length > maxOverviewLength && !showFullOverview ? movie.overview.slice(0, maxOverviewLength) + \"...\" : movie.overview;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-xs mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/movie/\" + movie.id,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: IMG_BASE_URL + movie.poster_path,\n                        alt: movie.title,\n                        className: \"w-full h-auto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/movie/\" + movie.id,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg font-semibold mb-2\",\n                            children: [\n                                movie.title,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-gray-400 text-sm\",\n                                    children: [\n                                        \"(\",\n                                        new Date(movie.release_date).getFullYear(),\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center pb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mr-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaStar_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaStar, {}, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xs font-bold\",\n                                children: movie.vote_average.toFixed(1)\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"normal-case text-sm text-base-content\",\n                        children: showFullOverview ? movie.overview : truncatedOverview\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    movie.overview.length > maxOverviewLength && (showFullOverview ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowFullOverview(false),\n                        className: \"text-orange-500 hover:underline cursor-pointer text-xs\",\n                        children: \"See less\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowFullOverview(true),\n                        className: \"text-orange-500 hover:underline cursor-pointer text-xs \",\n                        children: \"More Info\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Trailer\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/card.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieCard, \"iwZpIVPc8L8L6is/s45yACAW2s8=\");\n_c = MovieCard;\nvar _c;\n$RefreshReg$(_c, \"MovieCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBRVc7QUFDekIsU0FBU0ksVUFBVSxLQUFjO1FBQWQsRUFBRUMsS0FBSyxFQUFPLEdBQWQ7O0lBQ2hDLE1BQU1DLGVBQWU7SUFDckIsTUFBTUMsb0JBQW9CO0lBQzFCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFFekQsTUFBTVMsb0JBQ0pMLE1BQU1NLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHTCxxQkFBcUIsQ0FBQ0MsbUJBQzFDSCxNQUFNTSxRQUFRLENBQUNFLEtBQUssQ0FBQyxHQUFHTixxQkFBcUIsUUFDN0NGLE1BQU1NLFFBQVE7SUFFcEIscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDYixrREFBSUE7Z0JBQUNjLE1BQU0sWUFBWVgsTUFBTVksRUFBRTswQkFDOUIsNEVBQUNDOzhCQUNDLDRFQUFDQzt3QkFDQ0MsS0FBS2QsZUFBZUQsTUFBTWdCLFdBQVc7d0JBQ3JDQyxLQUFLakIsTUFBTWtCLEtBQUs7d0JBQ2hCUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYixrREFBSUE7d0JBQUNjLE1BQU0sWUFBWVgsTUFBTVksRUFBRTtrQ0FDOUIsNEVBQUNIOzRCQUFJQyxXQUFVOztnQ0FDWlYsTUFBTWtCLEtBQUs7Z0NBQUU7OENBQ2QsOERBQUNDO29DQUFFVCxXQUFVOzt3Q0FBd0I7d0NBQ2pDLElBQUlVLEtBQUtwQixNQUFNcUIsWUFBWSxFQUFFQyxXQUFXO3dDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSW5ELDhEQUFDYjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNhO2dDQUFLYixXQUFVOzBDQUNkLDRFQUFDWixnRkFBTUE7Ozs7Ozs7Ozs7MENBRVQsOERBQUN5QjtnQ0FBS2IsV0FBVTswQ0FDYlYsTUFBTXdCLFlBQVksQ0FBQ0MsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7a0NBSWhDLDhEQUFDQzt3QkFBRWhCLFdBQVU7a0NBQ1ZQLG1CQUFtQkgsTUFBTU0sUUFBUSxHQUFHRDs7Ozs7O29CQUV0Q0wsTUFBTU0sUUFBUSxDQUFDQyxNQUFNLEdBQUdMLHFCQUN0QkMsQ0FBQUEsaUNBQ0MsOERBQUN3Qjt3QkFDQ0MsU0FBUyxJQUFNeEIsb0JBQW9CO3dCQUNuQ00sV0FBVTtrQ0FDWDs7Ozs7NkNBSUQsOERBQUNpQjt3QkFDQ0MsU0FBUyxJQUFNeEIsb0JBQW9CO3dCQUNuQ00sV0FBVTtrQ0FDWDs7Ozs7NEJBR0g7Ozs7Ozs7MEJBRUosOERBQUNpQjswQkFBTzs7Ozs7Ozs7Ozs7O0FBR2Q7R0E5RHdCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZC50c3g/YmRmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZhU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVDYXJkKHsgbW92aWUgfTogYW55KSB7XG4gIGNvbnN0IElNR19CQVNFX1VSTCA9IFwiaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvdC9wL3cyMjBfYW5kX2gzMzBfZmFjZVwiO1xuICBjb25zdCBtYXhPdmVydmlld0xlbmd0aCA9IDE1MDtcbiAgY29uc3QgW3Nob3dGdWxsT3ZlcnZpZXcsIHNldFNob3dGdWxsT3ZlcnZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRydW5jYXRlZE92ZXJ2aWV3ID1cbiAgICBtb3ZpZS5vdmVydmlldy5sZW5ndGggPiBtYXhPdmVydmlld0xlbmd0aCAmJiAhc2hvd0Z1bGxPdmVydmlld1xuICAgICAgPyBtb3ZpZS5vdmVydmlldy5zbGljZSgwLCBtYXhPdmVydmlld0xlbmd0aCkgKyBcIi4uLlwiXG4gICAgICA6IG1vdmllLm92ZXJ2aWV3O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21heC13LXhzIG14LWF1dG8gYmctYmFzZS0xMDAgc2hhZG93LWxnIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgIDxMaW5rIGhyZWY9e1wiL21vdmllL1wiICsgbW92aWUuaWR9PlxuICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17SU1HX0JBU0VfVVJMICsgbW92aWUucG9zdGVyX3BhdGh9XG4gICAgICAgICAgICBhbHQ9e21vdmllLnRpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC1hdXRvJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL21vdmllL1wiICsgbW92aWUuaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMic+XG4gICAgICAgICAgICB7bW92aWUudGl0bGV9e1wiIFwifVxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwIHRleHQtc20nPlxuICAgICAgICAgICAgICAoe25ldyBEYXRlKG1vdmllLnJlbGVhc2VfZGF0ZSkuZ2V0RnVsbFllYXIoKX0pXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHBiLTInPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXItMSc+XG4gICAgICAgICAgICA8RmFTdGFyIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC14cyBmb250LWJvbGQnPlxuICAgICAgICAgICAge21vdmllLnZvdGVfYXZlcmFnZS50b0ZpeGVkKDEpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdub3JtYWwtY2FzZSB0ZXh0LXNtIHRleHQtYmFzZS1jb250ZW50Jz5cbiAgICAgICAgICB7c2hvd0Z1bGxPdmVydmlldyA/IG1vdmllLm92ZXJ2aWV3IDogdHJ1bmNhdGVkT3ZlcnZpZXd9XG4gICAgICAgIDwvcD5cbiAgICAgICAge21vdmllLm92ZXJ2aWV3Lmxlbmd0aCA+IG1heE92ZXJ2aWV3TGVuZ3RoICYmXG4gICAgICAgICAgKHNob3dGdWxsT3ZlcnZpZXcgPyAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dGdWxsT3ZlcnZpZXcoZmFsc2UpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtb3JhbmdlLTUwMCBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXIgdGV4dC14cydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VlIGxlc3NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dGdWxsT3ZlcnZpZXcodHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1vcmFuZ2UtNTAwIGhvdmVyOnVuZGVybGluZSBjdXJzb3ItcG9pbnRlciB0ZXh0LXhzICdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTW9yZSBJbmZvXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbj5UcmFpbGVyPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJGYVN0YXIiLCJNb3ZpZUNhcmQiLCJtb3ZpZSIsIklNR19CQVNFX1VSTCIsIm1heE92ZXJ2aWV3TGVuZ3RoIiwic2hvd0Z1bGxPdmVydmlldyIsInNldFNob3dGdWxsT3ZlcnZpZXciLCJ0cnVuY2F0ZWRPdmVydmlldyIsIm92ZXJ2aWV3IiwibGVuZ3RoIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaWQiLCJmaWd1cmUiLCJpbWciLCJzcmMiLCJwb3N0ZXJfcGF0aCIsImFsdCIsInRpdGxlIiwiYSIsIkRhdGUiLCJyZWxlYXNlX2RhdGUiLCJnZXRGdWxsWWVhciIsInNwYW4iLCJ2b3RlX2F2ZXJhZ2UiLCJ0b0ZpeGVkIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/card.tsx\n"));

/***/ })

});