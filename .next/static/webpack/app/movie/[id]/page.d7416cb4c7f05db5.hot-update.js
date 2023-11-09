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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ReviewSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n\n\n\nfunction ReviewSection(param) {\n    let { reviews } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 py-10 md:px-6 lg:py-16 md:py-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]\",\n                children: \"Movie Review\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            reviews.map((review)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"prose prose-zinc mx-auto dark:prose-invert\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2 not-prose\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                            className: \"h-9 w-9\",\n                                            children: review.author_details.avatar_path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarImage, {\n                                                alt: \"\".concat(review.author.name, \"'s Avatar\"),\n                                                src: review.author_details.avatar_path\n                                            }, void 0, false, {\n                                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                lineNumber: 19,\n                                                columnNumber: 19\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {\n                                                children: review.author && review.author.username ? review.author.username.charAt(0).toUpperCase() : \"JD\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                            lineNumber: 17,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid gap-0.5 text-xs\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"font-medium\",\n                                                    children: review.author.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-zinc-500 dark:text-zinc-400\",\n                                                    children: review.author.username\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                    lineNumber: 16,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-zinc-500 dark:text-zinc-400\",\n                                    children: [\n                                        \"Posted on \",\n                                        new Date(review.created_at).toLocaleDateString()\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: review.content\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, review.id, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/review-section.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = ReviewSection;\nvar _c;\n$RefreshReg$(_c, \"ReviewSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jldmlldy1zZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDbUQ7QUFFOUQsU0FBU0ksY0FBYyxLQUErQjtRQUEvQixFQUFFQyxPQUFPLEVBQXNCLEdBQS9CO0lBQ3BDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXlFOzs7Ozs7WUFHdEZGLFFBQVFJLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ0M7b0JBRUNKLFdBQVU7O3NDQUVWLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0oseURBQU1BOzRDQUFDSSxXQUFVO3NEQUNmRyxPQUFPRSxjQUFjLENBQUNDLFdBQVcsaUJBQ2hDLDhEQUFDWiw4REFBV0E7Z0RBQ1ZhLEtBQUssR0FBc0IsT0FBbkJKLE9BQU9LLE1BQU0sQ0FBQ0MsSUFBSSxFQUFDO2dEQUMzQkMsS0FBS1AsT0FBT0UsY0FBYyxDQUFDQyxXQUFXOzs7OztxRUFHeEMsOERBQUNYLGlFQUFjQTswREFDWlEsT0FBT0ssTUFBTSxJQUFJTCxPQUFPSyxNQUFNLENBQUNHLFFBQVEsR0FDcENSLE9BQU9LLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUM1Qzs7Ozs7Ozs7Ozs7c0RBSVYsOERBQUNkOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0Q7b0RBQUlDLFdBQVU7OERBQWVHLE9BQU9LLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7OzhEQUNoRCw4REFBQ1Y7b0RBQUlDLFdBQVU7OERBQ1pHLE9BQU9LLE1BQU0sQ0FBQ0csUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUk3Qiw4REFBQ0c7b0NBQUVkLFdBQVU7O3dDQUFtQzt3Q0FDbkMsSUFBSWUsS0FBS1osT0FBT2EsVUFBVSxFQUFFQyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7c0NBRzdELDhEQUFDSDtzQ0FBR1gsT0FBT2UsT0FBTzs7Ozs7OzttQkE5QmJmLE9BQU9nQixFQUFFOzs7Ozs7Ozs7OztBQW1DeEI7S0EzQ3dCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmV2aWV3LXNlY3Rpb24udHN4PzIxMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXZhdGFySW1hZ2UsIEF2YXRhckZhbGxiYWNrLCBBdmF0YXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2F2YXRhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZpZXdTZWN0aW9uKHsgcmV2aWV3cyB9OiB7IHJldmlld3M6IGFueVtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNCBweS0xMCBtZDpweC02IGxnOnB5LTE2IG1kOnB5LTEyJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IGxnOnRleHQtNXhsIGxnOmxlYWRpbmctWzMuNXJlbV0nPlxuICAgICAgICBNb3ZpZSBSZXZpZXdcbiAgICAgIDwvaDE+XG4gICAgICB7cmV2aWV3cy5tYXAoKHJldmlldykgPT4gKFxuICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgIGtleT17cmV2aWV3LmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT0ncHJvc2UgcHJvc2UtemluYyBteC1hdXRvIGRhcms6cHJvc2UtaW52ZXJ0J1xuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMiBub3QtcHJvc2UnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMic+XG4gICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdoLTkgdy05Jz5cbiAgICAgICAgICAgICAgICB7cmV2aWV3LmF1dGhvcl9kZXRhaWxzLmF2YXRhcl9wYXRoID8gKFxuICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YCR7cmV2aWV3LmF1dGhvci5uYW1lfSdzIEF2YXRhcmB9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17cmV2aWV3LmF1dGhvcl9kZXRhaWxzLmF2YXRhcl9wYXRofVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEF2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgICAgICB7cmV2aWV3LmF1dGhvciAmJiByZXZpZXcuYXV0aG9yLnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPyByZXZpZXcuYXV0aG9yLnVzZXJuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIkpEXCJ9XG4gICAgICAgICAgICAgICAgICA8L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBnYXAtMC41IHRleHQteHMnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+e3Jldmlldy5hdXRob3IubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC16aW5jLTUwMCBkYXJrOnRleHQtemluYy00MDAnPlxuICAgICAgICAgICAgICAgICAge3Jldmlldy5hdXRob3IudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtemluYy01MDAgZGFyazp0ZXh0LXppbmMtNDAwJz5cbiAgICAgICAgICAgICAgUG9zdGVkIG9uIHtuZXcgRGF0ZShyZXZpZXcuY3JlYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+e3Jldmlldy5jb250ZW50fTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXJJbWFnZSIsIkF2YXRhckZhbGxiYWNrIiwiQXZhdGFyIiwiUmV2aWV3U2VjdGlvbiIsInJldmlld3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInJldmlldyIsImFydGljbGUiLCJhdXRob3JfZGV0YWlscyIsImF2YXRhcl9wYXRoIiwiYWx0IiwiYXV0aG9yIiwibmFtZSIsInNyYyIsInVzZXJuYW1lIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJwIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjb250ZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/review-section.tsx\n"));

/***/ })

});