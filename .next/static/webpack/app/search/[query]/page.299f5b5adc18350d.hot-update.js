"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/[query]/page",{

/***/ "(app-pages-browser)/./src/components/trailerModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/trailerModal.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrailerModal: function() { return /* binding */ TrailerModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction TrailerModal(param) {\n    let { trailer, onClose } = param;\n    _s();\n    const handleEscape = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        if (e.key === \"Escape\") {\n            onClose();\n        }\n    }, [\n        onClose\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"keydown\", handleEscape);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleEscape);\n        };\n    }, [\n        handleEscape\n    ]);\n    const handleClose = ()=>{\n        onClose();\n    };\n    const stopPropagation = (e)=>{\n        e.stopPropagation();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                onClick: ()=>document.getElementById(\"my_modal_2\").showModal(),\n                children: \"open modal\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n                id: \"my_modal_2\",\n                className: \"modal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"modal-box\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-bold text-lg\",\n                                children: \"Hello!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-4\",\n                                children: \"Press ESC key or click outside to close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        method: \"dialog\",\n                        className: \"modal-backdrop\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"close\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(TrailerModal, \"siZ+Xj7QrGNuK36tf4rJ1SXDsPQ=\");\n_c = TrailerModal;\nvar _c;\n$RefreshReg$(_c, \"TrailerModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RyYWlsZXJNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBRS9DLFNBQVNHLGFBQWEsS0FBeUI7UUFBekIsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQU8sR0FBekI7O0lBQzNCLE1BQU1DLGVBQWVKLGtEQUFXQSxDQUM5QixDQUFDSztRQUNDLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxVQUFVO1lBQ3RCSDtRQUNGO0lBQ0YsR0FDQTtRQUFDQTtLQUFRO0lBR1hKLGdEQUFTQSxDQUFDO1FBQ1JRLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdKO1FBQ25DLE9BQU87WUFDTEcsT0FBT0UsbUJBQW1CLENBQUMsV0FBV0w7UUFDeEM7SUFDRixHQUFHO1FBQUNBO0tBQWE7SUFFakIsTUFBTU0sY0FBYztRQUNsQlA7SUFDRjtJQUVBLE1BQU1RLGtCQUFrQixDQUFDTjtRQUN2QkEsRUFBRU0sZUFBZTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZFLFNBQVMsSUFBTUMsU0FBU0MsY0FBYyxDQUFDLGNBQWNDLFNBQVM7MEJBQy9EOzs7Ozs7MEJBR0QsOERBQUNDO2dCQUFPQyxJQUFHO2dCQUFhUCxXQUFVOztrQ0FDaEMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQW9COzs7Ozs7MENBQ2xDLDhEQUFDUztnQ0FBRVQsV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUV0Qiw4REFBQ1U7d0JBQUtDLFFBQU87d0JBQVNYLFdBQVU7a0NBQzlCLDRFQUFDQztzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0E3Q2dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90cmFpbGVyTW9kYWwudHN4PzM4ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWlsZXJNb2RhbCh7IHRyYWlsZXIsIG9uQ2xvc2UgfTogYW55KSB7XG4gIGNvbnN0IGhhbmRsZUVzY2FwZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uQ2xvc2VdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjYXBlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUVzY2FwZV0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB6LTUwIGJnLWJsYWNrIGJnLW9wYWNpdHktNzAnPlxuICAgICAgey8qIE9wZW4gdGhlIG1vZGFsIHVzaW5nIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJRCcpLnNob3dNb2RhbCgpIG1ldGhvZCAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdidG4nXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlfbW9kYWxfMlwiKS5zaG93TW9kYWwoKX1cbiAgICAgID5cbiAgICAgICAgb3BlbiBtb2RhbFxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGlhbG9nIGlkPSdteV9tb2RhbF8yJyBjbGFzc05hbWU9J21vZGFsJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJveCc+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtbGcnPkhlbGxvITwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdweS00Jz5QcmVzcyBFU0Mga2V5IG9yIGNsaWNrIG91dHNpZGUgdG8gY2xvc2U8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBtZXRob2Q9J2RpYWxvZycgY2xhc3NOYW1lPSdtb2RhbC1iYWNrZHJvcCc+XG4gICAgICAgICAgPGJ1dHRvbj5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2RpYWxvZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiVHJhaWxlck1vZGFsIiwidHJhaWxlciIsIm9uQ2xvc2UiLCJoYW5kbGVFc2NhcGUiLCJlIiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsInN0b3BQcm9wYWdhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd01vZGFsIiwiZGlhbG9nIiwiaWQiLCJoMyIsInAiLCJmb3JtIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/trailerModal.tsx\n"));

/***/ })

});