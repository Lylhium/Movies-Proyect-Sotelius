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

/***/ "(app-pages-browser)/./src/components/creditModal.tsx":
/*!****************************************!*\
  !*** ./src/components/creditModal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CreditModal = (param)=>{\n    let { IMG_BASE_URL, credit } = param;\n    if (!credit || !credit.cast) {\n        return null;\n    }\n    const castToDisplay = credit.cast.slice(0, 9);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Top Billed Cast\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex -mx-1 overflow-x-auto\",\n                children: castToDisplay.map((castMember)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-30 px-4 sm:w-96 md:w-96 lg:w-96 mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card bg-base-100 shadow-xl text-black \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/person/\".concat(castMember.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: IMG_BASE_URL + castMember.profile_path,\n                                            alt: castMember.name,\n                                            className: \"w-full h-full rounded-t-lg object-cover\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body px-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"card-title text-black \",\n                                            children: castMember.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-black \",\n                                            children: castMember.character\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, castMember.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CreditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreditModal);\nvar _c;\n$RefreshReg$(_c, \"CreditModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NyZWRpdE1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsY0FBYztRQUFDLEVBQ25CQyxZQUFZLEVBQ1pDLE1BQU0sRUFJUDtJQUNDLElBQUksQ0FBQ0EsVUFBVSxDQUFDQSxPQUFPQyxJQUFJLEVBQUU7UUFDM0IsT0FBTztJQUNUO0lBRUEsTUFBTUMsZ0JBQWdCRixPQUFPQyxJQUFJLENBQUNFLEtBQUssQ0FBQyxHQUFHO0lBRTNDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUM1Qyw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1pKLGNBQWNLLEdBQUcsQ0FBQyxDQUFDQywyQkFDbEIsOERBQUNKO3dCQUVDRSxXQUFVO2tDQUVWLDRFQUFDRjs0QkFBSUUsV0FBVTs7OENBQ2IsOERBQUNHOzhDQUNDLDRFQUFDWixrREFBSUE7d0NBQUNhLE1BQU0sV0FBeUIsT0FBZEYsV0FBV0csRUFBRTtrREFDbEMsNEVBQUNDOzRDQUNDQyxLQUFLZCxlQUFlUyxXQUFXTSxZQUFZOzRDQUMzQ0MsS0FBS1AsV0FBV1EsSUFBSTs0Q0FDcEJWLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSWhCLDhEQUFDRjtvQ0FBSUUsV0FBVTs7c0RBQ2IsOERBQUNXOzRDQUFHWCxXQUFVO3NEQUEwQkUsV0FBV1EsSUFBSTs7Ozs7O3NEQUN2RCw4REFBQ0U7NENBQUVaLFdBQVU7c0RBQXVCRSxXQUFXVyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBZnZEWCxXQUFXRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUI5QjtLQTFDTWI7QUE0Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3JlZGl0TW9kYWwudHN4Pzg5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBDcmVkaXRNb2RhbCA9ICh7XG4gIElNR19CQVNFX1VSTCxcbiAgY3JlZGl0LFxufToge1xuICBJTUdfQkFTRV9VUkw6IHN0cmluZztcbiAgY3JlZGl0OiBhbnk7XG59KSA9PiB7XG4gIGlmICghY3JlZGl0IHx8ICFjcmVkaXQuY2FzdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY2FzdFRvRGlzcGxheSA9IGNyZWRpdC5jYXN0LnNsaWNlKDAsIDkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCc+VG9wIEJpbGxlZCBDYXN0PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IC1teC0xIG92ZXJmbG93LXgtYXV0byc+XG4gICAgICAgIHtjYXN0VG9EaXNwbGF5Lm1hcCgoY2FzdE1lbWJlcjogYW55KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtjYXN0TWVtYmVyLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTMwIHB4LTQgc206dy05NiBtZDp3LTk2IGxnOnctOTYgbWItNCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBiZy1iYXNlLTEwMCBzaGFkb3cteGwgdGV4dC1ibGFjayAnPlxuICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGVyc29uLyR7Y2FzdE1lbWJlci5pZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtJTUdfQkFTRV9VUkwgKyBjYXN0TWVtYmVyLnByb2ZpbGVfcGF0aH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtjYXN0TWVtYmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCByb3VuZGVkLXQtbGcgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5IHB4LTEnPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NhcmQtdGl0bGUgdGV4dC1ibGFjayAnPntjYXN0TWVtYmVyLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ibGFjayAnPntjYXN0TWVtYmVyLmNoYXJhY3Rlcn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJDcmVkaXRNb2RhbCIsIklNR19CQVNFX1VSTCIsImNyZWRpdCIsImNhc3QiLCJjYXN0VG9EaXNwbGF5Iiwic2xpY2UiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsImNhc3RNZW1iZXIiLCJmaWd1cmUiLCJocmVmIiwiaWQiLCJpbWciLCJzcmMiLCJwcm9maWxlX3BhdGgiLCJhbHQiLCJuYW1lIiwiaDIiLCJwIiwiY2hhcmFjdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/creditModal.tsx\n"));

/***/ })

});