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

/***/ "(app-pages-browser)/./src/components/review-section.tsx":
/*!*******************************************!*\
  !*** ./src/components/review-section.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ReviewSection = (param)=>{\n    let { reviews } = param;\n    _s();\n    const [expandedReviews, setExpandedReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const toggleExpansion = (reviewId)=>{\n        setExpandedReviews((prev)=>prev.includes(reviewId) ? prev.filter((id)=>id !== reviewId) : [\n                ...prev,\n                reviewId\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-10 md:px-6 lg:py-16 md:py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-extrabold tracking-tight lg:text-3xl lg:leading-[3.5rem] text-orange-500\",\n                children: \"Movie Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            reviews.map((review)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"prose prose-zinc mx-auto dark:prose-invert\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2 not-prose\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid gap-0.5 text-md font-bold\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-orange-500 dark:text-orange-500 text-md pt-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"user: \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                        lineNumber: 29,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    review.author\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                lineNumber: 28,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-orange-500 dark:text-orange-500\",\n                                                children: review.author.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                lineNumber: 32,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-zinc-500 dark:text-zinc-400\",\n                                    children: [\n                                        \"Posted on \",\n                                        new Date(review.created_at).toLocaleDateString()\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: review.content.length > 200 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: expandedReviews.includes(review.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: review.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-orange-500\",\n                                            onClick: ()=>toggleExpansion(review.id),\n                                            children: \"See Less\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                review.content.slice(0, 200),\n                                                \"...\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-orange-500\",\n                                            onClick: ()=>toggleExpansion(review.id),\n                                            children: \"See More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true)\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: review.content\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, review.id, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewSection, \"CCUG+tdRHDS6uy9cut3AyVMddQ8=\");\n_c = ReviewSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewSection);\nvar _c;\n$RefreshReg$(_c, \"ReviewSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jldmlldy1zZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFHeEMsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsT0FBTyxFQUFzQjs7SUFDcEQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHSiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRW5FLE1BQU1LLGtCQUFrQixDQUFDQztRQUN2QkYsbUJBQW1CLENBQUNHLE9BQ2xCQSxLQUFLQyxRQUFRLENBQUNGLFlBQ1ZDLEtBQUtFLE1BQU0sQ0FBQyxDQUFDQyxLQUFPQSxPQUFPSixZQUMzQjttQkFBSUM7Z0JBQU1EO2FBQVM7SUFFM0I7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF5Rjs7Ozs7O1lBR3RHVixRQUFRWSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUNDO29CQUVDSixXQUFVOztzQ0FFViw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNLO2tFQUFLOzs7Ozs7b0RBQ0xGLE9BQU9HLE1BQU07Ozs7Ozs7MERBRWhCLDhEQUFDUDtnREFBSUMsV0FBVTswREFDWkcsT0FBT0csTUFBTSxDQUFDQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJN0IsOERBQUNDO29DQUFFUixXQUFVOzt3Q0FBbUM7d0NBQ25DLElBQUlTLEtBQUtOLE9BQU9PLFVBQVUsRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7O3NDQUc3RCw4REFBQ1o7c0NBQ0VJLE9BQU9TLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLG9CQUN2Qiw4REFBQ2Q7MENBQ0VSLGdCQUFnQkssUUFBUSxDQUFDTyxPQUFPTCxFQUFFLGtCQUNqQzs7c0RBQ0UsOERBQUNVO3NEQUFHTCxPQUFPUyxPQUFPOzs7Ozs7c0RBQ2xCLDhEQUFDRTs0Q0FDQ2QsV0FBVTs0Q0FDVmUsU0FBUyxJQUFNdEIsZ0JBQWdCVSxPQUFPTCxFQUFFO3NEQUN6Qzs7Ozs7OztpRUFLSDs7c0RBQ0UsOERBQUNVOztnREFBR0wsT0FBT1MsT0FBTyxDQUFDSSxLQUFLLENBQUMsR0FBRztnREFBSzs7Ozs7OztzREFDakMsOERBQUNGOzRDQUNDZCxXQUFVOzRDQUNWZSxTQUFTLElBQU10QixnQkFBZ0JVLE9BQU9MLEVBQUU7c0RBQ3pDOzs7Ozs7Ozs7Ozs7MERBT1AsOERBQUNVOzBDQUFHTCxPQUFPUyxPQUFPOzs7Ozs7Ozs7Ozs7bUJBN0NqQlQsT0FBT0wsRUFBRTs7Ozs7Ozs7Ozs7QUFvRHhCO0dBdEVNVDtLQUFBQTtBQXdFTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZXZpZXctc2VjdGlvbi50c3g/MjEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF2YXRhckltYWdlLCBBdmF0YXJGYWxsYmFjaywgQXZhdGFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcblxuY29uc3QgUmV2aWV3U2VjdGlvbiA9ICh7IHJldmlld3MgfTogeyByZXZpZXdzOiBhbnlbXSB9KSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZFJldmlld3MsIHNldEV4cGFuZGVkUmV2aWV3c10gPSB1c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xuXG4gIGNvbnN0IHRvZ2dsZUV4cGFuc2lvbiA9IChyZXZpZXdJZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0RXhwYW5kZWRSZXZpZXdzKChwcmV2KSA9PlxuICAgICAgcHJldi5pbmNsdWRlcyhyZXZpZXdJZClcbiAgICAgICAgPyBwcmV2LmZpbHRlcigoaWQpID0+IGlkICE9PSByZXZpZXdJZClcbiAgICAgICAgOiBbLi4ucHJldiwgcmV2aWV3SWRdXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdweC00IHB5LTEwIG1kOnB4LTYgbGc6cHktMTYgbWQ6cHktMTInPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgbGc6dGV4dC0zeGwgbGc6bGVhZGluZy1bMy41cmVtXSB0ZXh0LW9yYW5nZS01MDAnPlxuICAgICAgICBNb3ZpZSBSZXZpZXdzXG4gICAgICA8L2gxPlxuICAgICAge3Jldmlld3MubWFwKChyZXZpZXcpID0+IChcbiAgICAgICAgPGFydGljbGVcbiAgICAgICAgICBrZXk9e3Jldmlldy5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9J3Byb3NlIHByb3NlLXppbmMgbXgtYXV0byBkYXJrOnByb3NlLWludmVydCdcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTIgbm90LXByb3NlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBnYXAtMC41IHRleHQtbWQgZm9udC1ib2xkJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1vcmFuZ2UtNTAwIGRhcms6dGV4dC1vcmFuZ2UtNTAwIHRleHQtbWQgcHQtMyc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj51c2VyOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7cmV2aWV3LmF1dGhvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1vcmFuZ2UtNTAwIGRhcms6dGV4dC1vcmFuZ2UtNTAwJz5cbiAgICAgICAgICAgICAgICAgIHtyZXZpZXcuYXV0aG9yLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXppbmMtNTAwIGRhcms6dGV4dC16aW5jLTQwMCc+XG4gICAgICAgICAgICAgIFBvc3RlZCBvbiB7bmV3IERhdGUocmV2aWV3LmNyZWF0ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cmV2aWV3LmNvbnRlbnQubGVuZ3RoID4gMjAwID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtleHBhbmRlZFJldmlld3MuaW5jbHVkZXMocmV2aWV3LmlkKSA/IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxwPntyZXZpZXcuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtb3JhbmdlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVFeHBhbnNpb24ocmV2aWV3LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNlZSBMZXNzXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxwPntyZXZpZXcuY29udGVudC5zbGljZSgwLCAyMDApfS4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1vcmFuZ2UtNTAwJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuc2lvbihyZXZpZXcuaWQpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU2VlIE1vcmVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPntyZXZpZXcuY29udGVudH08L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJldmlld1NlY3Rpb24iLCJyZXZpZXdzIiwiZXhwYW5kZWRSZXZpZXdzIiwic2V0RXhwYW5kZWRSZXZpZXdzIiwidG9nZ2xlRXhwYW5zaW9uIiwicmV2aWV3SWQiLCJwcmV2IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicmV2aWV3IiwiYXJ0aWNsZSIsInNwYW4iLCJhdXRob3IiLCJ1c2VybmFtZSIsInAiLCJEYXRlIiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbnRlbnQiLCJsZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/review-section.tsx\n"));

/***/ })

});