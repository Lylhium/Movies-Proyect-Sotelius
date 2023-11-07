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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n\n\n\nfunction MovieCarousel(param) {\n    let { movies } = param;\n    const IMG_BASE_URL = \"https://www.themoviedb.org/t/p/original\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n        autoPlay: true,\n        infiniteLoop: true,\n        showThumbs: false,\n        showStatus: false,\n        showIndicators: false,\n        useKeyboardArrows: true,\n        swipeable: true,\n        dynamicHeight: true,\n        emulateTouch: true,\n        thumbWidth: 60,\n        className: \"carousel-container\",\n        children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative carousel-item flex items-center justify-between p-100 w-full h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\".concat(IMG_BASE_URL).concat(movie.backdrop_path),\n                        alt: movie.title,\n                        className: \"w-full h-64 object-cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-0 top-1/2 transform -translate-y-1/2 p-4 w-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"\".concat(IMG_BASE_URL).concat(movie.poster_path),\n                            alt: movie.title,\n                            className: \"w-74 h-64 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, movie.id, true, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MovieCarousel;\nvar _c;\n$RefreshReg$(_c, \"MovieCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUVoRCxTQUFTQyxjQUFjLEtBQWU7UUFBZixFQUFFQyxNQUFNLEVBQU8sR0FBZjtJQUNwQyxNQUFNQyxlQUFlO0lBQ3JCLHFCQUNFLDhEQUFDSCwrREFBUUE7UUFDUEksUUFBUTtRQUNSQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtRQUNqQkMsU0FBUztRQUNUQyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxXQUFVO2tCQUVUWixPQUFPYSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNDO2dCQUVDSCxXQUFVOztrQ0FFViw4REFBQ0k7d0JBQ0NDLEtBQUssR0FBa0JILE9BQWZiLGNBQW1DLE9BQXBCYSxNQUFNSSxhQUFhO3dCQUMxQ0MsS0FBS0wsTUFBTU0sS0FBSzt3QkFDaEJSLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0c7d0JBQUlILFdBQVU7a0NBQ2IsNEVBQUNJOzRCQUNDQyxLQUFLLEdBQWtCSCxPQUFmYixjQUFpQyxPQUFsQmEsTUFBTU8sV0FBVzs0QkFDeENGLEtBQUtMLE1BQU1NLEtBQUs7NEJBQ2hCUixXQUFVOzs7Ozs7Ozs7Ozs7ZUFaVEUsTUFBTVEsRUFBRTs7Ozs7Ozs7OztBQW1CdkI7S0FyQ3dCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2Fycm91c2VsLnRzeD8zODUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllQ2Fyb3VzZWwoeyBtb3ZpZXMgfTogYW55KSB7XG4gIGNvbnN0IElNR19CQVNFX1VSTCA9IFwiaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvdC9wL29yaWdpbmFsXCI7XG4gIHJldHVybiAoXG4gICAgPENhcm91c2VsXG4gICAgICBhdXRvUGxheVxuICAgICAgaW5maW5pdGVMb29wXG4gICAgICBzaG93VGh1bWJzPXtmYWxzZX1cbiAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxuICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxuICAgICAgdXNlS2V5Ym9hcmRBcnJvd3NcbiAgICAgIHN3aXBlYWJsZVxuICAgICAgZHluYW1pY0hlaWdodFxuICAgICAgZW11bGF0ZVRvdWNoXG4gICAgICB0aHVtYldpZHRoPXs2MH1cbiAgICAgIGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udGFpbmVyJ1xuICAgID5cbiAgICAgIHttb3ZpZXMubWFwKChtb3ZpZTogYW55KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e21vdmllLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT0ncmVsYXRpdmUgY2Fyb3VzZWwtaXRlbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0xMDAgdy1mdWxsIGgtZnVsbCdcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YCR7SU1HX0JBU0VfVVJMfSR7bW92aWUuYmFja2Ryb3BfcGF0aH1gfVxuICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtMCB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHAtNCB3LTEvMyc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YCR7SU1HX0JBU0VfVVJMfSR7bW92aWUucG9zdGVyX3BhdGh9YH1cbiAgICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTc0IGgtNjQgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiTW92aWVDYXJvdXNlbCIsIm1vdmllcyIsIklNR19CQVNFX1VSTCIsImF1dG9QbGF5IiwiaW5maW5pdGVMb29wIiwic2hvd1RodW1icyIsInNob3dTdGF0dXMiLCJzaG93SW5kaWNhdG9ycyIsInVzZUtleWJvYXJkQXJyb3dzIiwic3dpcGVhYmxlIiwiZHluYW1pY0hlaWdodCIsImVtdWxhdGVUb3VjaCIsInRodW1iV2lkdGgiLCJjbGFzc05hbWUiLCJtYXAiLCJtb3ZpZSIsImRpdiIsImltZyIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJhbHQiLCJ0aXRsZSIsInBvc3Rlcl9wYXRoIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/carrousel.tsx\n"));

/***/ })

});