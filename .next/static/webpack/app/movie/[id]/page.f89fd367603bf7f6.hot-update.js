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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BilledCastMem: function() { return /* binding */ BilledCastMem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BilledCastMem(param) {\n    let { IMG_BASE_URL, credit } = param;\n    if (!credit || !credit.cast) {\n        return null;\n    }\n    const castToDisplay = credit.cast.slice(0, 9);\n    const fallbackImage = \"utils/img/fallbackimg.jpg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-semibold text-3xl mb-4 text-orange-500 text-bold\",\n                children: \"Top Billed Cast\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-full mx-auto p-4 rounded-lg overflow-x-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4 justify-start\",\n                    children: castToDisplay.map((castMember)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 w-48\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/person/\".concat(castMember.id),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            alt: castMember.name,\n                                            className: \"object-cover w-full h-60 rounded-lg\",\n                                            height: 300,\n                                            src: castMember.profile_path ? IMG_BASE_URL + castMember.profile_path : fallbackImage,\n                                            style: {\n                                                aspectRatio: \"200/300\",\n                                                objectFit: \"cover\"\n                                            },\n                                            width: 200\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"font-semibold text-lg mt-2\",\n                                            children: castMember.name.split(\" \").slice(0, 2).join(\" \")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-zinc-500 dark:text-zinc-400\",\n                                    children: [\n                                        \"as \",\n                                        castMember.character\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, castMember.id, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/billed-cast-mem.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = BilledCastMem;\nvar _c;\n$RefreshReg$(_c, \"BilledCastMem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2JpbGxlZC1jYXN0LW1lbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFFdEIsU0FBU0MsY0FBYyxLQU03QjtRQU42QixFQUM1QkMsWUFBWSxFQUNaQyxNQUFNLEVBSVAsR0FONkI7SUFPNUIsSUFBSSxDQUFDQSxVQUFVLENBQUNBLE9BQU9DLElBQUksRUFBRTtRQUMzQixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxnQkFBZ0JGLE9BQU9DLElBQUksQ0FBQ0UsS0FBSyxDQUFDLEdBQUc7SUFDM0MsTUFBTUMsZ0JBQWdCO0lBRXRCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdEOzs7Ozs7MEJBR3RFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pKLGNBQWNNLEdBQUcsQ0FBQyxDQUFDQywyQkFDbEIsOERBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1Qsa0RBQUlBO29DQUFDYSxNQUFNLFdBQXlCLE9BQWRELFdBQVdFLEVBQUU7O3NEQUNsQyw4REFBQ0M7NENBQ0NDLEtBQUtKLFdBQVdLLElBQUk7NENBQ3BCUixXQUFVOzRDQUNWUyxRQUFROzRDQUNSQyxLQUNFUCxXQUFXUSxZQUFZLEdBQ25CbEIsZUFBZVUsV0FBV1EsWUFBWSxHQUN0Q2I7NENBRU5jLE9BQU87Z0RBQ0xDLGFBQWE7Z0RBQ2JDLFdBQVc7NENBQ2I7NENBQ0FDLE9BQU87Ozs7OztzREFFVCw4REFBQ0M7NENBQUdoQixXQUFVO3NEQUNYRyxXQUFXSyxJQUFJLENBQUNTLEtBQUssQ0FBQyxLQUFLcEIsS0FBSyxDQUFDLEdBQUcsR0FBR3FCLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OzhDQUdqRCw4REFBQ0M7b0NBQUVuQixXQUFVOzt3Q0FBMkM7d0NBQ2xERyxXQUFXaUIsU0FBUzs7Ozs7Ozs7MkJBdEJhakIsV0FBV0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJsRTtLQXBEZ0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2JpbGxlZC1jYXN0LW1lbS50c3g/NTFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCaWxsZWRDYXN0TWVtKHtcbiAgSU1HX0JBU0VfVVJMLFxuICBjcmVkaXQsXG59OiB7XG4gIElNR19CQVNFX1VSTDogc3RyaW5nO1xuICBjcmVkaXQ6IGFueTtcbn0pIHtcbiAgaWYgKCFjcmVkaXQgfHwgIWNyZWRpdC5jYXN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjYXN0VG9EaXNwbGF5ID0gY3JlZGl0LmNhc3Quc2xpY2UoMCwgOSk7XG4gIGNvbnN0IGZhbGxiYWNrSW1hZ2UgPSBcInV0aWxzL2ltZy9mYWxsYmFja2ltZy5qcGdcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwdC00Jz5cbiAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC0zeGwgbWItNCB0ZXh0LW9yYW5nZS01MDAgdGV4dC1ib2xkJz5cbiAgICAgICAgVG9wIEJpbGxlZCBDYXN0XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LWZ1bGwgbXgtYXV0byBwLTQgcm91bmRlZC1sZyBvdmVyZmxvdy14LWF1dG8nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTQganVzdGlmeS1zdGFydCc+XG4gICAgICAgICAge2Nhc3RUb0Rpc3BsYXkubWFwKChjYXN0TWVtYmVyOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXNocmluay0wIHctNDgnIGtleT17Y2FzdE1lbWJlci5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGVyc29uLyR7Y2FzdE1lbWJlci5pZH1gfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Nhc3RNZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nb2JqZWN0LWNvdmVyIHctZnVsbCBoLTYwIHJvdW5kZWQtbGcnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgIGNhc3RNZW1iZXIucHJvZmlsZV9wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgPyBJTUdfQkFTRV9VUkwgKyBjYXN0TWVtYmVyLnByb2ZpbGVfcGF0aFxuICAgICAgICAgICAgICAgICAgICAgIDogZmFsbGJhY2tJbWFnZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0UmF0aW86IFwiMjAwLzMwMFwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LWxnIG10LTInPlxuICAgICAgICAgICAgICAgICAge2Nhc3RNZW1iZXIubmFtZS5zcGxpdChcIiBcIikuc2xpY2UoMCwgMikuam9pbihcIiBcIil9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC16aW5jLTUwMCBkYXJrOnRleHQtemluYy00MDAnPlxuICAgICAgICAgICAgICAgIGFzIHtjYXN0TWVtYmVyLmNoYXJhY3Rlcn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkJpbGxlZENhc3RNZW0iLCJJTUdfQkFTRV9VUkwiLCJjcmVkaXQiLCJjYXN0IiwiY2FzdFRvRGlzcGxheSIsInNsaWNlIiwiZmFsbGJhY2tJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiY2FzdE1lbWJlciIsImhyZWYiLCJpZCIsImltZyIsImFsdCIsIm5hbWUiLCJoZWlnaHQiLCJzcmMiLCJwcm9maWxlX3BhdGgiLCJzdHlsZSIsImFzcGVjdFJhdGlvIiwib2JqZWN0Rml0Iiwid2lkdGgiLCJoMyIsInNwbGl0Iiwiam9pbiIsInAiLCJjaGFyYWN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/billed-cast-mem.tsx\n"));

/***/ })

});