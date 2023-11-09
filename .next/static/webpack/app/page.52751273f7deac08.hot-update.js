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

/***/ "(app-pages-browser)/./src/components/carrousel.tsx":
/*!**************************************!*\
  !*** ./src/components/carrousel.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaPlayCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaPlayCircle!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nfunction MovieCarousel(param) {\n    let { movies } = param;\n    const IMG_BASE_URL = \"https://www.themoviedb.org/t/p/original\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto w-full sm:w-[800px] md:w-[1000px] lg:w-[1000px] xl:w-[1300px] \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            infiniteLoop: true,\n            showThumbs: false,\n            showStatus: false,\n            showIndicators: false,\n            useKeyboardArrows: true,\n            swipeable: true,\n            dynamicHeight: true,\n            emulateTouch: true,\n            thumbWidth: 60,\n            className: \"carousel-container relative\",\n            children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"carousel-item relative \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-black bg-opacity-70\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"\".concat(IMG_BASE_URL).concat(movie.backdrop_path),\n                            alt: movie.title,\n                            className: \"w-full h-100 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/movie/\" + movie.id,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute left-10 top-1/2 transform -translate-y-1/2 p-4 w-1/3  \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"\".concat(IMG_BASE_URL).concat(movie.poster_path),\n                                    alt: movie.title,\n                                    className: \"w-64 h-65 object-cover rounded-lg sm:w-158 sm:h-130\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute left-1/2 top-1/2 transform -translate-y-1/2 p-4 w-1/3  \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-4xl font-semibold mb-2\",\n                                    children: [\n                                        movie.title,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-400 text-lg\",\n                                            children: [\n                                                \"(\",\n                                                new Date(movie.release_date).getFullYear(),\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center pb-4 text-4xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaPlayCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPlayCircle, {\n                                            color: \"orange\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = MovieCarousel;\nvar _c;\n$RefreshReg$(_c, \"MovieCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUNsQztBQUNpQjtBQUMvQixTQUFTRyxjQUFjLEtBQWU7UUFBZixFQUFFQyxNQUFNLEVBQU8sR0FBZjtJQUNwQyxNQUFNQyxlQUFlO0lBRXJCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDUCwrREFBUUE7WUFDUFEsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2hCQyxpQkFBaUI7WUFDakJDLFNBQVM7WUFDVEMsYUFBYTtZQUNiQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWlQsV0FBVTtzQkFFVEgsT0FBT2EsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDWjtvQkFBbUJDLFdBQVU7O3NDQUM1Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ1k7NEJBQ0NDLEtBQUssR0FBa0JGLE9BQWZiLGNBQW1DLE9BQXBCYSxNQUFNRyxhQUFhOzRCQUMxQ0MsS0FBS0osTUFBTUssS0FBSzs0QkFDaEJoQixXQUFVOzs7Ozs7c0NBRVosOERBQUNOLGtEQUFJQTs0QkFBQ3VCLE1BQU0sWUFBWU4sTUFBTU8sRUFBRTtzQ0FDOUIsNEVBQUNuQjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1k7b0NBQ0NDLEtBQUssR0FBa0JGLE9BQWZiLGNBQWlDLE9BQWxCYSxNQUFNUSxXQUFXO29DQUN4Q0osS0FBS0osTUFBTUssS0FBSztvQ0FDaEJoQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7d0NBQ1pXLE1BQU1LLEtBQUs7d0NBQUU7c0RBQ2QsOERBQUNJOzRDQUFLcEIsV0FBVTs7Z0RBQXdCO2dEQUNwQyxJQUFJcUIsS0FBS1YsTUFBTVcsWUFBWSxFQUFFQyxXQUFXO2dEQUFHOzs7Ozs7Ozs7Ozs7OzhDQUdqRCw4REFBQ3hCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDd0I7a0RBQ0MsNEVBQUM3Qiw0RkFBWUE7NENBQUM4QixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkF6QmxCZCxNQUFNTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFrQzVCO0tBcER3QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3g/Mzg1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRmFQbGF5Q2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUNhcm91c2VsKHsgbW92aWVzIH06IGFueSkge1xuICBjb25zdCBJTUdfQkFTRV9VUkwgPSBcImh0dHBzOi8vd3d3LnRoZW1vdmllZGIub3JnL3QvcC9vcmlnaW5hbFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdy1mdWxsIHNtOnctWzgwMHB4XSBtZDp3LVsxMDAwcHhdIGxnOnctWzEwMDBweF0geGw6dy1bMTMwMHB4XSAnPlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIGluZmluaXRlTG9vcFxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XG4gICAgICAgIHNob3dJbmRpY2F0b3JzPXtmYWxzZX1cbiAgICAgICAgdXNlS2V5Ym9hcmRBcnJvd3NcbiAgICAgICAgc3dpcGVhYmxlXG4gICAgICAgIGR5bmFtaWNIZWlnaHRcbiAgICAgICAgZW11bGF0ZVRvdWNoXG4gICAgICAgIHRodW1iV2lkdGg9ezYwfVxuICAgICAgICBjbGFzc05hbWU9J2Nhcm91c2VsLWNvbnRhaW5lciByZWxhdGl2ZSdcbiAgICAgID5cbiAgICAgICAge21vdmllcy5tYXAoKG1vdmllOiBhbnkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT0nY2Fyb3VzZWwtaXRlbSByZWxhdGl2ZSAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS03MCc+PC9kaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YCR7SU1HX0JBU0VfVVJMfSR7bW92aWUuYmFja2Ryb3BfcGF0aH1gfVxuICAgICAgICAgICAgICBhbHQ9e21vdmllLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLTEwMCBvYmplY3QtY292ZXInXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbW92aWUvXCIgKyBtb3ZpZS5pZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTEwIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgcC00IHctMS8zICAnPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7SU1HX0JBU0VfVVJMfSR7bW92aWUucG9zdGVyX3BhdGh9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNjQgaC02NSBvYmplY3QtY292ZXIgcm91bmRlZC1sZyBzbTp3LTE1OCBzbTpoLTEzMCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTEvMiB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHAtNCB3LTEvMyAgJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtc2VtaWJvbGQgbWItMic+XG4gICAgICAgICAgICAgICAge21vdmllLnRpdGxlfXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAgdGV4dC1sZyc+XG4gICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKG1vdmllLnJlbGVhc2VfZGF0ZSkuZ2V0RnVsbFllYXIoKX0pXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTQgdGV4dC00eGwnPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICA8RmFQbGF5Q2lyY2xlIGNvbG9yPSdvcmFuZ2UnIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIkxpbmsiLCJGYVBsYXlDaXJjbGUiLCJNb3ZpZUNhcm91c2VsIiwibW92aWVzIiwiSU1HX0JBU0VfVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5maW5pdGVMb29wIiwic2hvd1RodW1icyIsInNob3dTdGF0dXMiLCJzaG93SW5kaWNhdG9ycyIsInVzZUtleWJvYXJkQXJyb3dzIiwic3dpcGVhYmxlIiwiZHluYW1pY0hlaWdodCIsImVtdWxhdGVUb3VjaCIsInRodW1iV2lkdGgiLCJtYXAiLCJtb3ZpZSIsImltZyIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJhbHQiLCJ0aXRsZSIsImhyZWYiLCJpZCIsInBvc3Rlcl9wYXRoIiwic3BhbiIsIkRhdGUiLCJyZWxlYXNlX2RhdGUiLCJnZXRGdWxsWWVhciIsImJ1dHRvbiIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/carrousel.tsx\n"));

/***/ })

});