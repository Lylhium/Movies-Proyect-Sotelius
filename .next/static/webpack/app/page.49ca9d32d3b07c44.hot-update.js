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

/***/ "(app-pages-browser)/./src/components/trailerModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/trailerModal.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TrailerModal: function() { return /* binding */ TrailerModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction TrailerModal(param) {\n    let { trailer, onClose } = param;\n    _s();\n    const handleEscape = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        if (e.key === \"Escape\") {\n            onClose();\n        }\n    }, [\n        onClose\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"keydown\", handleEscape);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleEscape);\n        };\n    }, [\n        handleEscape\n    ]);\n    const handleClose = ()=>{\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-screen-md\",\n            onClick: handleClose,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClose,\n                        className: \"absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none\",\n                        children: \"x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        style: {\n                            paddingBottom: \"56.25%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            className: \"absolute top-0 left-0 w-full h-full\",\n                            src: \"https://www.youtube.com/embed/\".concat(trailer.results[0].key),\n                            title: \"Trailer\",\n                            allowFullScreen: true\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/components/trailerModal.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(TrailerModal, \"siZ+Xj7QrGNuK36tf4rJ1SXDsPQ=\");\n_c = TrailerModal;\nvar _c;\n$RefreshReg$(_c, \"TrailerModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RyYWlsZXJNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBRS9DLFNBQVNHLGFBQWEsS0FBeUI7UUFBekIsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQU8sR0FBekI7O0lBQzNCLE1BQU1DLGVBQWVKLGtEQUFXQSxDQUM5QixDQUFDSztRQUNDLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxVQUFVO1lBQ3RCSDtRQUNGO0lBQ0YsR0FDQTtRQUFDQTtLQUFRO0lBR1hKLGdEQUFTQSxDQUFDO1FBQ1JRLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdKO1FBQ25DLE9BQU87WUFDTEcsT0FBT0UsbUJBQW1CLENBQUMsV0FBV0w7UUFDeEM7SUFDRixHQUFHO1FBQUNBO0tBQWE7SUFFakIsTUFBTU0sY0FBYztRQUNsQlA7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO1lBQXlCQyxTQUFTSDtzQkFDL0MsNEVBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NELFNBQVNIO3dCQUNURSxXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFXRyxPQUFPOzRCQUFFQyxlQUFlO3dCQUFTO2tDQUN6RCw0RUFBQ0M7NEJBQ0NMLFdBQVU7NEJBQ1ZNLEtBQUssaUNBQXdELE9BQXZCaEIsUUFBUWlCLE9BQU8sQ0FBQyxFQUFFLENBQUNiLEdBQUc7NEJBQzVEYyxPQUFNOzRCQUNOQyxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0I7R0EzQ2dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdHJhaWxlck1vZGFsLnRzeD8zOGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFpbGVyTW9kYWwoeyB0cmFpbGVyLCBvbkNsb3NlIH06IGFueSkge1xuICBjb25zdCBoYW5kbGVFc2NhcGUgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNsb3NlXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGUpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVFc2NhcGVdKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB6LTUwIGJnLWJsYWNrIGJnLW9wYWNpdHktNzAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1zY3JlZW4tbWQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtbGcgcC00Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS04MDAgZm9jdXM6b3V0bGluZS1ub25lJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiNTYuMjUlXCIgfX0+XG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwnXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dHJhaWxlci5yZXN1bHRzWzBdLmtleX1gfVxuICAgICAgICAgICAgICB0aXRsZT0nVHJhaWxlcidcbiAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJUcmFpbGVyTW9kYWwiLCJ0cmFpbGVyIiwib25DbG9zZSIsImhhbmRsZUVzY2FwZSIsImUiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImJ1dHRvbiIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsImlmcmFtZSIsInNyYyIsInJlc3VsdHMiLCJ0aXRsZSIsImFsbG93RnVsbFNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/trailerModal.tsx\n"));

/***/ })

});