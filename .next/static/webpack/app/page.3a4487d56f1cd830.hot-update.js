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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n\n\n\nfunction MovieCarousel(param) {\n    let { movies } = param;\n    const IMG_BASE_URL = \"https://www.themoviedb.org/t/p/original\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n        autoPlay: true,\n        infiniteLoop: true,\n        showThumbs: false,\n        showStatus: false,\n        showIndicators: false,\n        useKeyboardArrows: true,\n        swipeable: true,\n        dynamicHeight: true,\n        emulateTouch: true,\n        thumbWidth: 60,\n        className: \"carousel-container\",\n        children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative carousel-item flex items-center justify-between p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\".concat(IMG_BASE_URL).concat(movie.backdrop_path),\n                        alt: movie.title,\n                        className: \"w-full h-64 object-cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-4 w-1/3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(IMG_BASE_URL).concat(movie.poster_path),\n                                alt: movie.title,\n                                className: \"w-full h-64 object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-bold\",\n                                children: movie.title\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, movie.id, true, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = MovieCarousel;\nvar _c;\n$RefreshReg$(_c, \"MovieCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUVoRCxTQUFTQyxjQUFjLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjtJQUNwQyxNQUFNQyxlQUFlO0lBQ3JCLHFCQUNFLDhEQUFDSCwrREFBUUE7UUFDUEksUUFBUTtRQUNSQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtRQUNqQkMsU0FBUztRQUNUQyxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxXQUFVO2tCQUVUWixPQUFPYSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNDO2dCQUVDSCxXQUFVOztrQ0FFViw4REFBQ0k7d0JBQ0NDLEtBQUssR0FBa0JILE9BQWZiLGNBQW1DLE9BQXBCYSxNQUFNSSxhQUFhO3dCQUMxQ0MsS0FBS0wsTUFBTU0sS0FBSzt3QkFDaEJSLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0c7d0JBQUlILFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FDQ0MsS0FBSyxHQUFrQkgsT0FBZmIsY0FBaUMsT0FBbEJhLE1BQU1PLFdBQVc7Z0NBQ3hDRixLQUFLTCxNQUFNTSxLQUFLO2dDQUNoQlIsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDVTtnQ0FBR1YsV0FBVTswQ0FBcUJFLE1BQU1NLEtBQUs7Ozs7Ozs7Ozs7Ozs7ZUFkM0NOLE1BQU1TLEVBQUU7Ozs7Ozs7Ozs7QUFvQnZCO0tBdEN3QnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3g/Mzg1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUNhcm91c2VsKHsgbW92aWVzIH0pIHtcbiAgY29uc3QgSU1HX0JBU0VfVVJMID0gXCJodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy90L3Avb3JpZ2luYWxcIjtcbiAgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWxcbiAgICAgIGF1dG9QbGF5XG4gICAgICBpbmZpbml0ZUxvb3BcbiAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxuICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XG4gICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XG4gICAgICB1c2VLZXlib2FyZEFycm93c1xuICAgICAgc3dpcGVhYmxlXG4gICAgICBkeW5hbWljSGVpZ2h0XG4gICAgICBlbXVsYXRlVG91Y2hcbiAgICAgIHRodW1iV2lkdGg9ezYwfVxuICAgICAgY2xhc3NOYW1lPSdjYXJvdXNlbC1jb250YWluZXInXG4gICAgPlxuICAgICAge21vdmllcy5tYXAoKG1vdmllOiBhbnkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17bW92aWUuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSBjYXJvdXNlbC1pdGVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTQnXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2Ake0lNR19CQVNFX1VSTH0ke21vdmllLmJhY2tkcm9wX3BhdGh9YH1cbiAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLTY0IG9iamVjdC1jb3ZlcidcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy13aGl0ZSBwLTQgdy0xLzMnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Ake0lNR19CQVNFX1VSTH0ke21vdmllLnBvc3Rlcl9wYXRofWB9XG4gICAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkJz57bW92aWUudGl0bGV9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0Nhcm91c2VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiTW92aWVDYXJvdXNlbCIsIm1vdmllcyIsIklNR19CQVNFX1VSTCIsImF1dG9QbGF5IiwiaW5maW5pdGVMb29wIiwic2hvd1RodW1icyIsInNob3dTdGF0dXMiLCJzaG93SW5kaWNhdG9ycyIsInVzZUtleWJvYXJkQXJyb3dzIiwic3dpcGVhYmxlIiwiZHluYW1pY0hlaWdodCIsImVtdWxhdGVUb3VjaCIsInRodW1iV2lkdGgiLCJjbGFzc05hbWUiLCJtYXAiLCJtb3ZpZSIsImRpdiIsImltZyIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJhbHQiLCJ0aXRsZSIsInBvc3Rlcl9wYXRoIiwiaDIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/carrousel.tsx\n"));

/***/ })

});