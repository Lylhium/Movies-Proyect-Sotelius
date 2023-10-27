"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/person/[id]/page",{

/***/ "(app-pages-browser)/./src/app/person/[id]/page.tsx":
/*!**************************************!*\
  !*** ./src/app/person/[id]/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/movie.service */ \"(app-pages-browser)/./src/app/movie.service.ts\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PersonComponentPage = (param)=>{\n    let { params } = param;\n    _s();\n    const [personDetails, setPersonDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fallbackImage = \"../src/img/images.png\"; // Ruta de tu imagen de relleno\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPersonDetails = async ()=>{\n            try {\n                const details = await (0,_app_movie_service__WEBPACK_IMPORTED_MODULE_2__.getPerson)(params.id);\n                setPersonDetails(details);\n            } catch (error) {\n                console.error(\"Error fetching person:\", error);\n            }\n        };\n        fetchPersonDetails();\n    }, [\n        params.id\n    ]);\n    const gender = (personDetails === null || personDetails === void 0 ? void 0 : personDetails.gender) === 2 ? \"Male\" : (personDetails === null || personDetails === void 0 ? void 0 : personDetails.gender) === 1 ? \"Female\" : \"Unknown\";\n    var _gender_toString;\n    const genderString = (_gender_toString = gender === null || gender === void 0 ? void 0 : gender.toString()) !== null && _gender_toString !== void 0 ? _gender_toString : \"Unknown\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 flex flex-col md:flex-row items-center\",\n        children: personDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full md:w-1/3 pr-6 mb-4 md:mb-0\",\n                    children: personDetails.profile_path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://image.tmdb.org/t/p/w400\".concat(personDetails.profile_path),\n                        alt: \"\".concat(personDetails.name, \" profile\"),\n                        className: \"rounded-lg shadow-xl max-w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fallbackImage,\n                        alt: \"\".concat(personDetails.name, \" profile\"),\n                        className: \"rounded-lg shadow-xl max-w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full md:w-2/3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mb-4 text-orange-500\",\n                            children: personDetails.name\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Biography:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        personDetails.biography ? personDetails.biography.split(\"\\n\\n\").map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base-content text-sm py-2 pr-4\",\n                                children: paragraph\n                            }, index, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base-content\",\n                            children: [\n                                \"There's no biography for \",\n                                personDetails.name,\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Known For:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content py-2\",\n                            children: personDetails.known_for_department\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Birthday:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content py-2\",\n                            children: personDetails.birthday ? \"Born on \".concat(personDetails.birthday) : \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Also Known As:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content py-2 \",\n                            children: personDetails.also_known_as.length ? personDetails.also_known_as.join(\", \") : \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Gender:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content py-2 \",\n                            children: genderString\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold py-2 \",\n                            children: \"Homepage:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined),\n                        personDetails.homepage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-bold text-orange-500 mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: personDetails.homepage,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: personDetails.homepage\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Place of Birth:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content  mt-2\",\n                            children: personDetails.place_of_birth ? personDetails.place_of_birth : \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n            lineNumber: 110,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PersonComponentPage, \"zc3oEOHdktcA0vhSqvYG2CYQaIs=\");\n_c = PersonComponentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PersonComponentPage);\nvar _c;\n$RefreshReg$(_c, \"PersonComponentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDSDtBQUNMO0FBRTNDLE1BQU1LLHNCQUFzQjtRQUFDLEVBQUVDLE1BQU0sRUFBTzs7SUFDMUMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQWE7SUFDL0QsTUFBTU8sZ0JBQWdCLHlCQUF5QiwrQkFBK0I7SUFFOUVSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMscUJBQXFCO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUMsVUFBVSxNQUFNUiw2REFBU0EsQ0FBQ0csT0FBT00sRUFBRTtnQkFDekNKLGlCQUFpQkc7WUFDbkIsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBQ0FIO0lBQ0YsR0FBRztRQUFDSixPQUFPTSxFQUFFO0tBQUM7SUFFZCxNQUFNRyxTQUNKUixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVRLE1BQU0sTUFBSyxJQUN0QixTQUNBUixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVRLE1BQU0sTUFBSyxJQUMxQixXQUNBO1FBQ2VBO0lBQXJCLE1BQU1DLGVBQWVELENBQUFBLG1CQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFFLFFBQVEsZ0JBQWhCRiw4QkFBQUEsbUJBQXNCO0lBRTNDLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNaWiw4QkFDQzs7OEJBQ0UsOERBQUNXO29CQUFJQyxXQUFVOzhCQUNaWixjQUFjYSxZQUFZLGlCQUN6Qiw4REFBQ0M7d0JBQ0NDLEtBQUssa0NBQTZELE9BQTNCZixjQUFjYSxZQUFZO3dCQUNqRUcsS0FBSyxHQUFzQixPQUFuQmhCLGNBQWNpQixJQUFJLEVBQUM7d0JBQzNCTCxXQUFVOzs7OztrREFHWiw4REFBQ0U7d0JBQ0NDLEtBQUtiO3dCQUNMYyxLQUFLLEdBQXNCLE9BQW5CaEIsY0FBY2lCLElBQUksRUFBQzt3QkFDM0JMLFdBQVU7Ozs7Ozs7Ozs7OzhCQUtoQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FDWFosY0FBY2lCLElBQUk7Ozs7OztzQ0FFckIsOERBQUNDOzRCQUFHTixXQUFVO3NDQUFZOzs7Ozs7d0JBQ3pCWixjQUFjbUIsU0FBUyxHQUN0Qm5CLGNBQWNtQixTQUFTLENBQ3BCQyxLQUFLLENBQUMsUUFDTkMsR0FBRyxDQUFDLENBQUNDLFdBQWdCQyxzQkFDcEIsOERBQUNDO2dDQUVDWixXQUFVOzBDQUVUVTsrQkFISUM7Ozs7MkRBT1gsOERBQUNDOzRCQUFFWixXQUFVOztnQ0FBb0I7Z0NBQ0xaLGNBQWNpQixJQUFJO2dDQUFDOzs7Ozs7O3NDQUdqRCw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNZOzRCQUFFWixXQUFVO3NDQUNWWixjQUFjeUIsb0JBQW9COzs7Ozs7c0NBRXJDLDhEQUFDUDs0QkFBR04sV0FBVTtzQ0FBWTs7Ozs7O3NDQUMxQiw4REFBQ1k7NEJBQUVaLFdBQVU7c0NBQ1ZaLGNBQWMwQixRQUFRLEdBQ25CLFdBQWtDLE9BQXZCMUIsY0FBYzBCLFFBQVEsSUFDakM7Ozs7OztzQ0FFTiw4REFBQ1I7NEJBQUdOLFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNZOzRCQUFFWixXQUFVO3NDQUNWWixjQUFjMkIsYUFBYSxDQUFDQyxNQUFNLEdBQy9CNUIsY0FBYzJCLGFBQWEsQ0FBQ0UsSUFBSSxDQUFDLFFBQ2pDOzs7Ozs7c0NBRU4sOERBQUNYOzRCQUFHTixXQUFVO3NDQUFZOzs7Ozs7c0NBQzFCLDhEQUFDWTs0QkFBRVosV0FBVTtzQ0FBbUNIOzs7Ozs7c0NBQ2hELDhEQUFDUzs0QkFBR04sV0FBVTtzQ0FBa0I7Ozs7Ozt3QkFDL0JaLGNBQWM4QixRQUFRLGtCQUNyQiw4REFBQ047NEJBQUVaLFdBQVU7c0NBQ1gsNEVBQUNtQjtnQ0FDQ0MsTUFBTWhDLGNBQWM4QixRQUFRO2dDQUM1QkcsUUFBTztnQ0FDUEMsS0FBSTswQ0FFSGxDLGNBQWM4QixRQUFROzs7Ozs7Ozs7OztzQ0FJN0IsOERBQUNaOzRCQUFHTixXQUFVO3NDQUFZOzs7Ozs7c0NBQzFCLDhEQUFDWTs0QkFBRVosV0FBVTtzQ0FDVlosY0FBY21DLGNBQWMsR0FDekJuQyxjQUFjbUMsY0FBYyxHQUM1Qjs7Ozs7Ozs7Ozs7Ozt5Q0FLViw4REFBQ3RDLDJEQUFPQTs7Ozs7Ozs7OztBQUloQjtHQTVHTUM7S0FBQUE7QUE4R04sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BlcnNvbi9baWRdL3BhZ2UudHN4PzVhMzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UGVyc29uIH0gZnJvbSBcIkAvYXBwL21vdmllLnNlcnZpY2VcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvbG9hZGluZ1wiO1xuXG5jb25zdCBQZXJzb25Db21wb25lbnRQYWdlID0gKHsgcGFyYW1zIH06IGFueSkgPT4ge1xuICBjb25zdCBbcGVyc29uRGV0YWlscywgc2V0UGVyc29uRGV0YWlsc10gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcbiAgY29uc3QgZmFsbGJhY2tJbWFnZSA9IFwiLi4vc3JjL2ltZy9pbWFnZXMucG5nXCI7IC8vIFJ1dGEgZGUgdHUgaW1hZ2VuIGRlIHJlbGxlbm9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUGVyc29uRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBhd2FpdCBnZXRQZXJzb24ocGFyYW1zLmlkKTtcbiAgICAgICAgc2V0UGVyc29uRGV0YWlscyhkZXRhaWxzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwZXJzb246XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoUGVyc29uRGV0YWlscygpO1xuICB9LCBbcGFyYW1zLmlkXSk7XG5cbiAgY29uc3QgZ2VuZGVyID1cbiAgICBwZXJzb25EZXRhaWxzPy5nZW5kZXIgPT09IDJcbiAgICAgID8gXCJNYWxlXCJcbiAgICAgIDogcGVyc29uRGV0YWlscz8uZ2VuZGVyID09PSAxXG4gICAgICA/IFwiRmVtYWxlXCJcbiAgICAgIDogXCJVbmtub3duXCI7XG4gIGNvbnN0IGdlbmRlclN0cmluZyA9IGdlbmRlcj8udG9TdHJpbmcoKSA/PyBcIlVua25vd25cIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxuICAgICAge3BlcnNvbkRldGFpbHMgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTEvMyBwci02IG1iLTQgbWQ6bWItMCc+XG4gICAgICAgICAgICB7cGVyc29uRGV0YWlscy5wcm9maWxlX3BhdGggPyAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NDAwJHtwZXJzb25EZXRhaWxzLnByb2ZpbGVfcGF0aH1gfVxuICAgICAgICAgICAgICAgIGFsdD17YCR7cGVyc29uRGV0YWlscy5uYW1lfSBwcm9maWxlYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtbGcgc2hhZG93LXhsIG1heC13LWZ1bGwnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtmYWxsYmFja0ltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17YCR7cGVyc29uRGV0YWlscy5uYW1lfSBwcm9maWxlYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtbGcgc2hhZG93LXhsIG1heC13LWZ1bGwnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvMyc+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC1vcmFuZ2UtNTAwJz5cbiAgICAgICAgICAgICAge3BlcnNvbkRldGFpbHMubmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQnPkJpb2dyYXBoeTo8L2gxPlxuICAgICAgICAgICAge3BlcnNvbkRldGFpbHMuYmlvZ3JhcGh5ID8gKFxuICAgICAgICAgICAgICBwZXJzb25EZXRhaWxzLmJpb2dyYXBoeVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIlxcblxcblwiKVxuICAgICAgICAgICAgICAgIC5tYXAoKHBhcmFncmFwaDogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmFzZS1jb250ZW50IHRleHQtc20gcHktMiBwci00J1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZS1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICBUaGVyZSdzIG5vIGJpb2dyYXBoeSBmb3Ige3BlcnNvbkRldGFpbHMubmFtZX0uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQnPktub3duIEZvcjo8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtYmFzZS1jb250ZW50IHB5LTInPlxuICAgICAgICAgICAgICB7cGVyc29uRGV0YWlscy5rbm93bl9mb3JfZGVwYXJ0bWVudH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+QmlydGhkYXk6PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWJhc2UtY29udGVudCBweS0yJz5cbiAgICAgICAgICAgICAge3BlcnNvbkRldGFpbHMuYmlydGhkYXlcbiAgICAgICAgICAgICAgICA/IGBCb3JuIG9uICR7cGVyc29uRGV0YWlscy5iaXJ0aGRheX1gXG4gICAgICAgICAgICAgICAgOiBcIk4vQVwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5BbHNvIEtub3duIEFzOjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1iYXNlLWNvbnRlbnQgcHktMiAnPlxuICAgICAgICAgICAgICB7cGVyc29uRGV0YWlscy5hbHNvX2tub3duX2FzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gcGVyc29uRGV0YWlscy5hbHNvX2tub3duX2FzLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgICAgIDogXCJOL0FcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+R2VuZGVyOjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1iYXNlLWNvbnRlbnQgcHktMiAnPntnZW5kZXJTdHJpbmd9PC9wPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIHB5LTIgJz5Ib21lcGFnZTo8L2gxPlxuICAgICAgICAgICAge3BlcnNvbkRldGFpbHMuaG9tZXBhZ2UgJiYgKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ib2xkIHRleHQtb3JhbmdlLTUwMCBtdC0yJz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17cGVyc29uRGV0YWlscy5ob21lcGFnZX1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtwZXJzb25EZXRhaWxzLmhvbWVwYWdlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+UGxhY2Ugb2YgQmlydGg6PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWJhc2UtY29udGVudCAgbXQtMic+XG4gICAgICAgICAgICAgIHtwZXJzb25EZXRhaWxzLnBsYWNlX29mX2JpcnRoXG4gICAgICAgICAgICAgICAgPyBwZXJzb25EZXRhaWxzLnBsYWNlX29mX2JpcnRoXG4gICAgICAgICAgICAgICAgOiBcIk4vQVwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uQ29tcG9uZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UGVyc29uIiwiTG9hZGluZyIsIlBlcnNvbkNvbXBvbmVudFBhZ2UiLCJwYXJhbXMiLCJwZXJzb25EZXRhaWxzIiwic2V0UGVyc29uRGV0YWlscyIsImZhbGxiYWNrSW1hZ2UiLCJmZXRjaFBlcnNvbkRldGFpbHMiLCJkZXRhaWxzIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiLCJnZW5kZXIiLCJnZW5kZXJTdHJpbmciLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGVfcGF0aCIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJoMSIsImJpb2dyYXBoeSIsInNwbGl0IiwibWFwIiwicGFyYWdyYXBoIiwiaW5kZXgiLCJwIiwia25vd25fZm9yX2RlcGFydG1lbnQiLCJiaXJ0aGRheSIsImFsc29fa25vd25fYXMiLCJsZW5ndGgiLCJqb2luIiwiaG9tZXBhZ2UiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInBsYWNlX29mX2JpcnRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[id]/page.tsx\n"));

/***/ })

});