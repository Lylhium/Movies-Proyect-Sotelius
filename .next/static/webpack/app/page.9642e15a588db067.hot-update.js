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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaPlayCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaPlayCircle!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n\n\n\n\n\nfunction MovieCarousel(param) {\n    let { movies } = param;\n    const IMG_BASE_URL = \"https://www.themoviedb.org/t/p/original\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto w-full sm:w-[800px] md:w-[1000px] lg:w-[1000px] xl:w-[1300px] \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            infiniteLoop: true,\n            showThumbs: false,\n            showStatus: false,\n            showIndicators: false,\n            useKeyboardArrows: true,\n            swipeable: true,\n            dynamicHeight: true,\n            emulateTouch: true,\n            thumbWidth: 60,\n            className: \"carousel-container relative\",\n            children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"carousel-item relative \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-black bg-opacity-70\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"\".concat(IMG_BASE_URL).concat(movie.backdrop_path),\n                            alt: movie.title,\n                            className: \"w-full h-100 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/movie/\" + movie.id,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute left-10 top-1/2 transform -translate-y-1/2 p-4 w-1/3  \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"\".concat(IMG_BASE_URL).concat(movie.poster_path),\n                                    alt: movie.title,\n                                    className: \"w-64 h-65 object-cover rounded-lg sm:w-158 sm:h-130\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute left-1/2 top-1/2 transform -translate-y-1/2 p-4 w-1/3  \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-4xl font-semibold mb-2\",\n                                    children: [\n                                        movie.title,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-400 text-lg\",\n                                            children: [\n                                                \"(\",\n                                                new Date(movie.release_date).getFullYear(),\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-center pb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaPlayCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPlayCircle, {\n                                        color: \"orange\",\n                                        size: \"lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = MovieCarousel;\nvar _c;\n$RefreshReg$(_c, \"MovieCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUNsQztBQUNpQjtBQUMvQixTQUFTRyxjQUFjLEtBQWU7UUFBZixFQUFFQyxNQUFNLEVBQU8sR0FBZjtJQUNwQyxNQUFNQyxlQUFlO0lBRXJCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDUCwrREFBUUE7WUFDUFEsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2hCQyxpQkFBaUI7WUFDakJDLFNBQVM7WUFDVEMsYUFBYTtZQUNiQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWlQsV0FBVTtzQkFFVEgsT0FBT2EsR0FBRyxDQUFDLENBQUNDLHNCQUNYLDhEQUFDWjtvQkFBbUJDLFdBQVU7O3NDQUM1Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ1k7NEJBQ0NDLEtBQUssR0FBa0JGLE9BQWZiLGNBQW1DLE9BQXBCYSxNQUFNRyxhQUFhOzRCQUMxQ0MsS0FBS0osTUFBTUssS0FBSzs0QkFDaEJoQixXQUFVOzs7Ozs7c0NBRVosOERBQUNOLGtEQUFJQTs0QkFBQ3VCLE1BQU0sWUFBWU4sTUFBTU8sRUFBRTtzQ0FDOUIsNEVBQUNuQjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1k7b0NBQ0NDLEtBQUssR0FBa0JGLE9BQWZiLGNBQWlDLE9BQWxCYSxNQUFNUSxXQUFXO29DQUN4Q0osS0FBS0osTUFBTUssS0FBSztvQ0FDaEJoQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7d0NBQ1pXLE1BQU1LLEtBQUs7d0NBQUU7c0RBQ2QsOERBQUNJOzRDQUFLcEIsV0FBVTs7Z0RBQXdCO2dEQUNwQyxJQUFJcUIsS0FBS1YsTUFBTVcsWUFBWSxFQUFFQyxXQUFXO2dEQUFHOzs7Ozs7Ozs7Ozs7OzhDQUdqRCw4REFBQ3hCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDTCw0RkFBWUE7d0NBQUM2QixPQUFNO3dDQUFTQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBeEI5QmQsTUFBTU8sRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0M1QjtLQWxEd0J0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXJyb3VzZWwudHN4PzM4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZhUGxheUNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVDYXJvdXNlbCh7IG1vdmllcyB9OiBhbnkpIHtcbiAgY29uc3QgSU1HX0JBU0VfVVJMID0gXCJodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy90L3Avb3JpZ2luYWxcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHctZnVsbCBzbTp3LVs4MDBweF0gbWQ6dy1bMTAwMHB4XSBsZzp3LVsxMDAwcHhdIHhsOnctWzEzMDBweF0gJz5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBpbmZpbml0ZUxvb3BcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XG4gICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxuICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XG4gICAgICAgIHVzZUtleWJvYXJkQXJyb3dzXG4gICAgICAgIHN3aXBlYWJsZVxuICAgICAgICBkeW5hbWljSGVpZ2h0XG4gICAgICAgIGVtdWxhdGVUb3VjaFxuICAgICAgICB0aHVtYldpZHRoPXs2MH1cbiAgICAgICAgY2xhc3NOYW1lPSdjYXJvdXNlbC1jb250YWluZXIgcmVsYXRpdmUnXG4gICAgICA+XG4gICAgICAgIHttb3ZpZXMubWFwKChtb3ZpZTogYW55KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9J2Nhcm91c2VsLWl0ZW0gcmVsYXRpdmUgJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNzAnPjwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Ake0lNR19CQVNFX1VSTH0ke21vdmllLmJhY2tkcm9wX3BhdGh9YH1cbiAgICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC0xMDAgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL21vdmllL1wiICsgbW92aWUuaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0xMCB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHAtNCB3LTEvMyAgJz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake0lNR19CQVNFX1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e21vdmllLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTY0IGgtNjUgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgc206dy0xNTggc206aC0xMzAnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0xLzIgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBwLTQgdy0xLzMgICc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LXNlbWlib2xkIG1iLTInPlxuICAgICAgICAgICAgICAgIHttb3ZpZS50aXRsZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWdyYXktNDAwIHRleHQtbGcnPlxuICAgICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShtb3ZpZS5yZWxlYXNlX2RhdGUpLmdldEZ1bGxZZWFyKCl9KVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwYi00Jz5cbiAgICAgICAgICAgICAgICA8RmFQbGF5Q2lyY2xlIGNvbG9yPSdvcmFuZ2UnIHNpemU9J2xnJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJMaW5rIiwiRmFQbGF5Q2lyY2xlIiwiTW92aWVDYXJvdXNlbCIsIm1vdmllcyIsIklNR19CQVNFX1VSTCIsImRpdiIsImNsYXNzTmFtZSIsImluZmluaXRlTG9vcCIsInNob3dUaHVtYnMiLCJzaG93U3RhdHVzIiwic2hvd0luZGljYXRvcnMiLCJ1c2VLZXlib2FyZEFycm93cyIsInN3aXBlYWJsZSIsImR5bmFtaWNIZWlnaHQiLCJlbXVsYXRlVG91Y2giLCJ0aHVtYldpZHRoIiwibWFwIiwibW92aWUiLCJpbWciLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwiYWx0IiwidGl0bGUiLCJocmVmIiwiaWQiLCJwb3N0ZXJfcGF0aCIsInNwYW4iLCJEYXRlIiwicmVsZWFzZV9kYXRlIiwiZ2V0RnVsbFllYXIiLCJjb2xvciIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/carrousel.tsx\n"));

/***/ })

});