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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n\n\n\nfunction MovieCarousel(param) {\n    let { movies } = param;\n    const IMG_BASE_URL = \"https://www.themoviedb.org/t/p/original\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto w-full sm:w-[800px] md:w-[1000px] lg:w-[1200px] xl:w-[1400px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {\n            autoPlay: true,\n            infiniteLoop: true,\n            showThumbs: false,\n            showStatus: false,\n            showIndicators: false,\n            useKeyboardArrows: true,\n            swipeable: true,\n            dynamicHeight: true,\n            emulateTouch: true,\n            thumbWidth: 60,\n            className: \"carousel-container relative\",\n            children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"carousel-item relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-black bg-opacity-50\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"\".concat(IMG_BASE_URL).concat(movie.backdrop_path),\n                            alt: movie.title,\n                            className: \"w-full h-250 object-cover\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute left-0 top-1/2 transform -translate-y-1/2 p-4 w-1/3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(IMG_BASE_URL).concat(movie.poster_path),\n                                alt: movie.title,\n                                className: \"w-64 h-65 object-cover\"\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/carrousel.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = MovieCarousel;\nvar _c;\n$RefreshReg$(_c, \"MovieCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUVoRCxTQUFTQyxjQUFjLEtBQWU7UUFBZixFQUFFQyxNQUFNLEVBQU8sR0FBZjtJQUNwQyxNQUFNQyxlQUFlO0lBRXJCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDTCwrREFBUUE7WUFDUE0sUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxnQkFBZ0I7WUFDaEJDLGlCQUFpQjtZQUNqQkMsU0FBUztZQUNUQyxhQUFhO1lBQ2JDLFlBQVk7WUFDWkMsWUFBWTtZQUNaVixXQUFVO3NCQUVUSCxPQUFPYyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNiO29CQUFtQkMsV0FBVTs7c0NBQzVCLDhEQUFDRDs0QkFBSUMsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDYTs0QkFDQ0MsS0FBSyxHQUFrQkYsT0FBZmQsY0FBbUMsT0FBcEJjLE1BQU1HLGFBQWE7NEJBQzFDQyxLQUFLSixNQUFNSyxLQUFLOzRCQUNoQmpCLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNhO2dDQUNDQyxLQUFLLEdBQWtCRixPQUFmZCxjQUFpQyxPQUFsQmMsTUFBTU0sV0FBVztnQ0FDeENGLEtBQUtKLE1BQU1LLEtBQUs7Z0NBQ2hCakIsV0FBVTs7Ozs7Ozs7Ozs7O21CQVhOWSxNQUFNTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFtQjVCO0tBdEN3QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhcnJvdXNlbC50c3g/Mzg1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUNhcm91c2VsKHsgbW92aWVzIH06IGFueSkge1xuICBjb25zdCBJTUdfQkFTRV9VUkwgPSBcImh0dHBzOi8vd3d3LnRoZW1vdmllZGIub3JnL3QvcC9vcmlnaW5hbFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdy1mdWxsIHNtOnctWzgwMHB4XSBtZDp3LVsxMDAwcHhdIGxnOnctWzEyMDBweF0geGw6dy1bMTQwMHB4XSc+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgaW5maW5pdGVMb29wXG4gICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cbiAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxuICAgICAgICB1c2VLZXlib2FyZEFycm93c1xuICAgICAgICBzd2lwZWFibGVcbiAgICAgICAgZHluYW1pY0hlaWdodFxuICAgICAgICBlbXVsYXRlVG91Y2hcbiAgICAgICAgdGh1bWJXaWR0aD17NjB9XG4gICAgICAgIGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udGFpbmVyIHJlbGF0aXZlJ1xuICAgICAgPlxuICAgICAgICB7bW92aWVzLm1hcCgobW92aWU6IGFueSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPSdjYXJvdXNlbC1pdGVtIHJlbGF0aXZlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAnPjwvZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2Ake0lNR19CQVNFX1VSTH0ke21vdmllLmJhY2tkcm9wX3BhdGh9YH1cbiAgICAgICAgICAgICAgYWx0PXttb3ZpZS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC0yNTAgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBwLTQgdy0xLzMnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtJTUdfQkFTRV9VUkx9JHttb3ZpZS5wb3N0ZXJfcGF0aH1gfVxuICAgICAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTY0IGgtNjUgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIk1vdmllQ2Fyb3VzZWwiLCJtb3ZpZXMiLCJJTUdfQkFTRV9VUkwiLCJkaXYiLCJjbGFzc05hbWUiLCJhdXRvUGxheSIsImluZmluaXRlTG9vcCIsInNob3dUaHVtYnMiLCJzaG93U3RhdHVzIiwic2hvd0luZGljYXRvcnMiLCJ1c2VLZXlib2FyZEFycm93cyIsInN3aXBlYWJsZSIsImR5bmFtaWNIZWlnaHQiLCJlbXVsYXRlVG91Y2giLCJ0aHVtYldpZHRoIiwibWFwIiwibW92aWUiLCJpbWciLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwiYWx0IiwidGl0bGUiLCJwb3N0ZXJfcGF0aCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/carrousel.tsx\n"));

/***/ })

});