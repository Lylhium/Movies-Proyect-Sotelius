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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CreditModal = (param)=>{\n    let { IMG_BASE_URL, credit } = param;\n    if (!credit || !credit.cast) {\n        return null;\n    }\n    const castToDisplay = credit.cast.slice(0, 9);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"Top Billed Cast\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex -mx-1 overflow-x-auto\",\n                children: castToDisplay.map((castMember)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-96 px-2 sm:w-96 md:w-96 lg:w-96 mb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card bg-base-100 shadow-xl text-black \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/person/\".concat(castMember.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: IMG_BASE_URL + castMember.profile_path,\n                                        alt: castMember.name,\n                                        className: \"w-full h-full rounded-t-lg object-cover\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \" text-black \",\n                                            children: castMember.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-black \",\n                                            children: [\n                                                \"as \",\n                                                castMember.character\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, castMember.id, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/creditModal.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CreditModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreditModal);\nvar _c;\n$RefreshReg$(_c, \"CreditModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NyZWRpdE1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsY0FBYztRQUFDLEVBQ25CQyxZQUFZLEVBQ1pDLE1BQU0sRUFJUDtJQUNDLElBQUksQ0FBQ0EsVUFBVSxDQUFDQSxPQUFPQyxJQUFJLEVBQUU7UUFDM0IsT0FBTztJQUNUO0lBRUEsTUFBTUMsZ0JBQWdCRixPQUFPQyxJQUFJLENBQUNFLEtBQUssQ0FBQyxHQUFHO0lBRTNDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUM1Qyw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1pKLGNBQWNLLEdBQUcsQ0FBQyxDQUFDQywyQkFDbEIsOERBQUNKO3dCQUVDRSxXQUFVO2tDQUVWLDRFQUFDRjs0QkFBSUUsV0FBVTs7OENBQ2IsOERBQUNULGtEQUFJQTtvQ0FBQ1ksTUFBTSxXQUF5QixPQUFkRCxXQUFXRSxFQUFFOzhDQUNsQyw0RUFBQ0M7d0NBQ0NDLEtBQUtiLGVBQWVTLFdBQVdLLFlBQVk7d0NBQzNDQyxLQUFLTixXQUFXTyxJQUFJO3dDQUNwQlQsV0FBVTs7Ozs7Ozs7Ozs7OENBSWQsOERBQUNGO29DQUFJRSxXQUFVOztzREFDYiw4REFBQ1U7NENBQUdWLFdBQVU7c0RBQWdCRSxXQUFXTyxJQUFJOzs7Ozs7c0RBQzdDLDhEQUFDRTs0Q0FBRVgsV0FBVTs7Z0RBQXNCO2dEQUFJRSxXQUFXVSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWQxRFYsV0FBV0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQXNCOUI7S0F6Q01aO0FBMkNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NyZWRpdE1vZGFsLnRzeD84OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ3JlZGl0TW9kYWwgPSAoe1xuICBJTUdfQkFTRV9VUkwsXG4gIGNyZWRpdCxcbn06IHtcbiAgSU1HX0JBU0VfVVJMOiBzdHJpbmc7XG4gIGNyZWRpdDogYW55O1xufSkgPT4ge1xuICBpZiAoIWNyZWRpdCB8fCAhY3JlZGl0LmNhc3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNhc3RUb0Rpc3BsYXkgPSBjcmVkaXQuY2FzdC5zbGljZSgwLCA5KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTQnPlRvcCBCaWxsZWQgQ2FzdDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCAtbXgtMSBvdmVyZmxvdy14LWF1dG8nPlxuICAgICAgICB7Y2FzdFRvRGlzcGxheS5tYXAoKGNhc3RNZW1iZXI6IGFueSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17Y2FzdE1lbWJlci5pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy05NiBweC0yIHNtOnctOTYgbWQ6dy05NiBsZzp3LTk2IG1iLTQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgYmctYmFzZS0xMDAgc2hhZG93LXhsIHRleHQtYmxhY2sgJz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wZXJzb24vJHtjYXN0TWVtYmVyLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17SU1HX0JBU0VfVVJMICsgY2FzdE1lbWJlci5wcm9maWxlX3BhdGh9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Nhc3RNZW1iZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCByb3VuZGVkLXQtbGcgb2JqZWN0LWNvdmVyJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMSc+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nIHRleHQtYmxhY2sgJz57Y2FzdE1lbWJlci5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtYmxhY2sgJz5hcyB7Y2FzdE1lbWJlci5jaGFyYWN0ZXJ9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0TW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQ3JlZGl0TW9kYWwiLCJJTUdfQkFTRV9VUkwiLCJjcmVkaXQiLCJjYXN0IiwiY2FzdFRvRGlzcGxheSIsInNsaWNlIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJtYXAiLCJjYXN0TWVtYmVyIiwiaHJlZiIsImlkIiwiaW1nIiwic3JjIiwicHJvZmlsZV9wYXRoIiwiYWx0IiwibmFtZSIsImgyIiwicCIsImNoYXJhY3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/creditModal.tsx\n"));

/***/ })

});