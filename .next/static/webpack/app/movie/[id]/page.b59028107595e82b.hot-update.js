"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movie/[id]/page",{

/***/ "(app-pages-browser)/./src/components/billed-cast-mem.tsx":
/*!********************************************!*\
  !*** ./src/components/billed-cast-mem.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BilledCastMem: function() { return /* binding */ BilledCastMem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction BilledCastMem(param) {\n    let { IMG_BASE_URL, credit } = param;\n    if (!credit || !credit.cast) {\n        return null;\n    }\n    const castToDisplay = credit.cast.slice(0, 9);\n    const fallbackImage = \"utils/img/fallbackimg.jpg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-semibold text-2xl mb-4\",\n                children: \"Top Billed Cast\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-full mx-auto p-4 rounded-lg overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4 justify-start\",\n                    children: castToDisplay.map((castMember)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-48\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    alt: castMember.name,\n                                    className: \"object-cover w-full h-60 rounded-lg\",\n                                    height: 300,\n                                    src: castMember.profile_path ? IMG_BASE_URL + castMember.profile_path : fallbackImage,\n                                    style: {\n                                        aspectRatio: \"200/300\",\n                                        objectFit: \"cover\"\n                                    },\n                                    width: 200\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold text-lg mt-2\",\n                                    children: castMember.name.split(\" \").slice(0, 2).join(\" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-zinc-500 dark:text-zinc-400\",\n                                    children: castMember.character\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, castMember.id, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = BilledCastMem;\nvar _c;\n$RefreshReg$(_c, \"BilledCastMem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JpbGxlZC1jYXN0LW1lbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBU0EsY0FBYyxLQU03QjtRQU42QixFQUM1QkMsWUFBWSxFQUNaQyxNQUFNLEVBSVAsR0FONkI7SUFPNUIsSUFBSSxDQUFDQSxVQUFVLENBQUNBLE9BQU9DLElBQUksRUFBRTtRQUMzQixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxnQkFBZ0JGLE9BQU9DLElBQUksQ0FBQ0UsS0FBSyxDQUFDLEdBQUc7SUFDM0MsTUFBTUMsZ0JBQWdCO0lBRXRCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQThCOzs7Ozs7MEJBQzVDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pKLGNBQWNNLEdBQUcsQ0FBQyxDQUFDQywyQkFDbEIsOERBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0k7b0NBQ0NDLEtBQUtGLFdBQVdHLElBQUk7b0NBQ3BCTixXQUFVO29DQUNWTyxRQUFRO29DQUNSQyxLQUNFTCxXQUFXTSxZQUFZLEdBQ25CaEIsZUFBZVUsV0FBV00sWUFBWSxHQUN0Q1g7b0NBRU5ZLE9BQU87d0NBQ0xDLGFBQWE7d0NBQ2JDLFdBQVc7b0NBQ2I7b0NBQ0FDLE9BQU87Ozs7Ozs4Q0FFVCw4REFBQ0M7b0NBQUdkLFdBQVU7OENBQ1hHLFdBQVdHLElBQUksQ0FBQ1MsS0FBSyxDQUFDLEtBQUtsQixLQUFLLENBQUMsR0FBRyxHQUFHbUIsSUFBSSxDQUFDOzs7Ozs7OENBRS9DLDhEQUFDQztvQ0FBRWpCLFdBQVU7OENBQ1ZHLFdBQVdlLFNBQVM7Ozs7Ozs7MkJBcEJnQmYsV0FBV2dCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCbEU7S0FoRGdCM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmlsbGVkLWNhc3QtbWVtLnRzeD81MWM2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBCaWxsZWRDYXN0TWVtKHtcbiAgSU1HX0JBU0VfVVJMLFxuICBjcmVkaXQsXG59OiB7XG4gIElNR19CQVNFX1VSTDogc3RyaW5nO1xuICBjcmVkaXQ6IGFueTtcbn0pIHtcbiAgaWYgKCFjcmVkaXQgfHwgIWNyZWRpdC5jYXN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjYXN0VG9EaXNwbGF5ID0gY3JlZGl0LmNhc3Quc2xpY2UoMCwgOSk7XG4gIGNvbnN0IGZhbGxiYWNrSW1hZ2UgPSBcInV0aWxzL2ltZy9mYWxsYmFja2ltZy5qcGdcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdC00Jz5cbiAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgbWItNCc+VG9wIEJpbGxlZCBDYXN0PC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1mdWxsIG14LWF1dG8gcC00IHJvdW5kZWQtbGcgb3ZlcmZsb3cteC1hdXRvJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC00IGp1c3RpZnktc3RhcnQnPlxuICAgICAgICAgIHtjYXN0VG9EaXNwbGF5Lm1hcCgoY2FzdE1lbWJlcjogYW55KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1zaHJpbmstMCB3LTQ4JyBrZXk9e2Nhc3RNZW1iZXIuaWR9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtjYXN0TWVtYmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdvYmplY3QtY292ZXIgdy1mdWxsIGgtNjAgcm91bmRlZC1sZydcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgY2FzdE1lbWJlci5wcm9maWxlX3BhdGhcbiAgICAgICAgICAgICAgICAgICAgPyBJTUdfQkFTRV9VUkwgKyBjYXN0TWVtYmVyLnByb2ZpbGVfcGF0aFxuICAgICAgICAgICAgICAgICAgICA6IGZhbGxiYWNrSW1hZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBcIjIwMC8zMDBcIixcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG10LTInPlxuICAgICAgICAgICAgICAgIHtjYXN0TWVtYmVyLm5hbWUuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIDIpLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC16aW5jLTUwMCBkYXJrOnRleHQtemluYy00MDAnPlxuICAgICAgICAgICAgICAgIHtjYXN0TWVtYmVyLmNoYXJhY3Rlcn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQmlsbGVkQ2FzdE1lbSIsIklNR19CQVNFX1VSTCIsImNyZWRpdCIsImNhc3QiLCJjYXN0VG9EaXNwbGF5Iiwic2xpY2UiLCJmYWxsYmFja0ltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJjYXN0TWVtYmVyIiwiaW1nIiwiYWx0IiwibmFtZSIsImhlaWdodCIsInNyYyIsInByb2ZpbGVfcGF0aCIsInN0eWxlIiwiYXNwZWN0UmF0aW8iLCJvYmplY3RGaXQiLCJ3aWR0aCIsImgzIiwic3BsaXQiLCJqb2luIiwicCIsImNoYXJhY3RlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/billed-cast-mem.tsx\n"));

/***/ })

});