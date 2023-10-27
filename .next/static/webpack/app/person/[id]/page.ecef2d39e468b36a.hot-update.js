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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/movie.service */ \"(app-pages-browser)/./src/app/movie.service.ts\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/loading */ \"(app-pages-browser)/./src/components/loading.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PersonComponentPage = (param)=>{\n    let { params } = param;\n    _s();\n    const [personDetails, setPersonDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fallbackImage = \"../src/img/images.png\"; // Ruta de tu imagen de relleno\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPersonDetails = async ()=>{\n            try {\n                const details = await (0,_app_movie_service__WEBPACK_IMPORTED_MODULE_2__.getPerson)(params.id);\n                setPersonDetails(details);\n            } catch (error) {\n                console.error(\"Error fetching person:\", error);\n            }\n        };\n        fetchPersonDetails();\n    }, [\n        params.id\n    ]);\n    const gender = (personDetails === null || personDetails === void 0 ? void 0 : personDetails.gender) === 2 ? \"Male\" : (personDetails === null || personDetails === void 0 ? void 0 : personDetails.gender) === 1 ? \"Female\" : \"Unknown\";\n    var _gender_toString;\n    const genderString = (_gender_toString = gender === null || gender === void 0 ? void 0 : gender.toString()) !== null && _gender_toString !== void 0 ? _gender_toString : \"Unknown\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 flex flex-col md:flex-row items-center\",\n        children: personDetails ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full md:w-1/3 pr-6 mb-4 md:mb-0\",\n                    children: personDetails.profile_path ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://image.tmdb.org/t/p/w400\".concat(personDetails.profile_path),\n                        alt: \"\".concat(personDetails.name, \" profile\"),\n                        className: \"rounded-lg shadow-xl max-w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: fallbackImage,\n                        alt: \"\".concat(personDetails.name, \" profile\"),\n                        className: \"rounded-lg shadow-xl max-w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full md:w-2/3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mb-4 text-orange-500\",\n                            children: personDetails.name\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Biography:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        personDetails.biography ? personDetails.biography.split(\"\\n\\n\").map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base-content text-sm py-2 pr-4\",\n                                children: paragraph\n                            }, index, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base-content\",\n                            children: [\n                                \"There's no biography for \",\n                                personDetails.name,\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Known For:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content  mt-2\",\n                            children: personDetails.known_for_department\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Birthday:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content  mt-2\",\n                            children: personDetails.birthday ? \"Born on \".concat(personDetails.birthday) : \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Also Known As:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content  mt-2\",\n                            children: personDetails.also_known_as.length ? personDetails.also_known_as.join(\", \") : \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Gender:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content  mt-2\",\n                            children: genderString\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Homepage:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined),\n                        personDetails.homepage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm font-bold text-orange-500 mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: personDetails.homepage,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: personDetails.homepage\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"font-bold\",\n                            children: \"Place of Birth:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-base-content  mt-2\",\n                            children: personDetails.place_of_birth ? personDetails.place_of_birth : \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n            lineNumber: 110,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/agustinpfarherr/Documents/GitHub/Movies-Proyect/src/app/person/[id]/page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PersonComponentPage, \"zc3oEOHdktcA0vhSqvYG2CYQaIs=\");\n_c = PersonComponentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PersonComponentPage);\nvar _c;\n$RefreshReg$(_c, \"PersonComponentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDSDtBQUNMO0FBRTNDLE1BQU1LLHNCQUFzQjtRQUFDLEVBQUVDLE1BQU0sRUFBTzs7SUFDMUMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQWE7SUFDL0QsTUFBTU8sZ0JBQWdCLHlCQUF5QiwrQkFBK0I7SUFFOUVSLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMscUJBQXFCO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUMsVUFBVSxNQUFNUiw2REFBU0EsQ0FBQ0csT0FBT00sRUFBRTtnQkFDekNKLGlCQUFpQkc7WUFDbkIsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBQ0FIO0lBQ0YsR0FBRztRQUFDSixPQUFPTSxFQUFFO0tBQUM7SUFFZCxNQUFNRyxTQUNKUixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVRLE1BQU0sTUFBSyxJQUN0QixTQUNBUixDQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWVRLE1BQU0sTUFBSyxJQUMxQixXQUNBO1FBQ2VBO0lBQXJCLE1BQU1DLGVBQWVELENBQUFBLG1CQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVFFLFFBQVEsZ0JBQWhCRiw4QkFBQUEsbUJBQXNCO0lBRTNDLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNaWiw4QkFDQzs7OEJBQ0UsOERBQUNXO29CQUFJQyxXQUFVOzhCQUNaWixjQUFjYSxZQUFZLGlCQUN6Qiw4REFBQ0M7d0JBQ0NDLEtBQUssa0NBQTZELE9BQTNCZixjQUFjYSxZQUFZO3dCQUNqRUcsS0FBSyxHQUFzQixPQUFuQmhCLGNBQWNpQixJQUFJLEVBQUM7d0JBQzNCTCxXQUFVOzs7OztrREFHWiw4REFBQ0U7d0JBQ0NDLEtBQUtiO3dCQUNMYyxLQUFLLEdBQXNCLE9BQW5CaEIsY0FBY2lCLElBQUksRUFBQzt3QkFDM0JMLFdBQVU7Ozs7Ozs7Ozs7OzhCQUtoQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBR04sV0FBVTtzQ0FDWFosY0FBY2lCLElBQUk7Ozs7OztzQ0FFckIsOERBQUNDOzRCQUFHTixXQUFVO3NDQUFZOzs7Ozs7d0JBQ3pCWixjQUFjbUIsU0FBUyxHQUN0Qm5CLGNBQWNtQixTQUFTLENBQ3BCQyxLQUFLLENBQUMsUUFDTkMsR0FBRyxDQUFDLENBQUNDLFdBQWdCQyxzQkFDcEIsOERBQUNDO2dDQUVDWixXQUFVOzBDQUVUVTsrQkFISUM7Ozs7MkRBT1gsOERBQUNDOzRCQUFFWixXQUFVOztnQ0FBb0I7Z0NBQ0xaLGNBQWNpQixJQUFJO2dDQUFDOzs7Ozs7O3NDQUdqRCw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNZOzRCQUFFWixXQUFVO3NDQUNWWixjQUFjeUIsb0JBQW9COzs7Ozs7c0NBRXJDLDhEQUFDUDs0QkFBR04sV0FBVTtzQ0FBWTs7Ozs7O3NDQUMxQiw4REFBQ1k7NEJBQUVaLFdBQVU7c0NBQ1ZaLGNBQWMwQixRQUFRLEdBQ25CLFdBQWtDLE9BQXZCMUIsY0FBYzBCLFFBQVEsSUFDakM7Ozs7OztzQ0FFTiw4REFBQ1I7NEJBQUdOLFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNZOzRCQUFFWixXQUFVO3NDQUNWWixjQUFjMkIsYUFBYSxDQUFDQyxNQUFNLEdBQy9CNUIsY0FBYzJCLGFBQWEsQ0FBQ0UsSUFBSSxDQUFDLFFBQ2pDOzs7Ozs7c0NBRU4sOERBQUNYOzRCQUFHTixXQUFVO3NDQUFZOzs7Ozs7c0NBQzFCLDhEQUFDWTs0QkFBRVosV0FBVTtzQ0FBbUNIOzs7Ozs7c0NBQ2hELDhEQUFDUzs0QkFBR04sV0FBVTtzQ0FBWTs7Ozs7O3dCQUN6QlosY0FBYzhCLFFBQVEsa0JBQ3JCLDhEQUFDTjs0QkFBRVosV0FBVTtzQ0FDWCw0RUFBQ21CO2dDQUNDQyxNQUFNaEMsY0FBYzhCLFFBQVE7Z0NBQzVCRyxRQUFPO2dDQUNQQyxLQUFJOzBDQUVIbEMsY0FBYzhCLFFBQVE7Ozs7Ozs7Ozs7O3NDQUk3Qiw4REFBQ1o7NEJBQUdOLFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNZOzRCQUFFWixXQUFVO3NDQUNWWixjQUFjbUMsY0FBYyxHQUN6Qm5DLGNBQWNtQyxjQUFjLEdBQzVCOzs7Ozs7Ozs7Ozs7O3lDQUtWLDhEQUFDdEMsMkRBQU9BOzs7Ozs7Ozs7O0FBSWhCO0dBNUdNQztLQUFBQTtBQThHTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGVyc29uL1tpZF0vcGFnZS50c3g/NWEzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRQZXJzb24gfSBmcm9tIFwiQC9hcHAvbW92aWUuc2VydmljZVwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9sb2FkaW5nXCI7XG5cbmNvbnN0IFBlcnNvbkNvbXBvbmVudFBhZ2UgPSAoeyBwYXJhbXMgfTogYW55KSA9PiB7XG4gIGNvbnN0IFtwZXJzb25EZXRhaWxzLCBzZXRQZXJzb25EZXRhaWxzXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBmYWxsYmFja0ltYWdlID0gXCIuLi9zcmMvaW1nL2ltYWdlcy5wbmdcIjsgLy8gUnV0YSBkZSB0dSBpbWFnZW4gZGUgcmVsbGVub1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQZXJzb25EZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGF3YWl0IGdldFBlcnNvbihwYXJhbXMuaWQpO1xuICAgICAgICBzZXRQZXJzb25EZXRhaWxzKGRldGFpbHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBlcnNvbjpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hQZXJzb25EZXRhaWxzKCk7XG4gIH0sIFtwYXJhbXMuaWRdKTtcblxuICBjb25zdCBnZW5kZXIgPVxuICAgIHBlcnNvbkRldGFpbHM/LmdlbmRlciA9PT0gMlxuICAgICAgPyBcIk1hbGVcIlxuICAgICAgOiBwZXJzb25EZXRhaWxzPy5nZW5kZXIgPT09IDFcbiAgICAgID8gXCJGZW1hbGVcIlxuICAgICAgOiBcIlVua25vd25cIjtcbiAgY29uc3QgZ2VuZGVyU3RyaW5nID0gZ2VuZGVyPy50b1N0cmluZygpID8/IFwiVW5rbm93blwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtNCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlcic+XG4gICAgICB7cGVyc29uRGV0YWlscyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMS8zIHByLTYgbWItNCBtZDptYi0wJz5cbiAgICAgICAgICAgIHtwZXJzb25EZXRhaWxzLnByb2ZpbGVfcGF0aCA/IChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c0MDAke3BlcnNvbkRldGFpbHMucHJvZmlsZV9wYXRofWB9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtwZXJzb25EZXRhaWxzLm5hbWV9IHByb2ZpbGVgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBzaGFkb3cteGwgbWF4LXctZnVsbCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2ZhbGxiYWNrSW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtwZXJzb25EZXRhaWxzLm5hbWV9IHByb2ZpbGVgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBzaGFkb3cteGwgbWF4LXctZnVsbCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMi8zJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LW9yYW5nZS01MDAnPlxuICAgICAgICAgICAgICB7cGVyc29uRGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+QmlvZ3JhcGh5OjwvaDE+XG4gICAgICAgICAgICB7cGVyc29uRGV0YWlscy5iaW9ncmFwaHkgPyAoXG4gICAgICAgICAgICAgIHBlcnNvbkRldGFpbHMuYmlvZ3JhcGh5XG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXFxuXFxuXCIpXG4gICAgICAgICAgICAgICAgLm1hcCgocGFyYWdyYXBoOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1iYXNlLWNvbnRlbnQgdGV4dC1zbSBweS0yIHByLTQnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1iYXNlLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIFRoZXJlJ3Mgbm8gYmlvZ3JhcGh5IGZvciB7cGVyc29uRGV0YWlscy5uYW1lfS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+S25vd24gRm9yOjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1iYXNlLWNvbnRlbnQgIG10LTInPlxuICAgICAgICAgICAgICB7cGVyc29uRGV0YWlscy5rbm93bl9mb3JfZGVwYXJ0bWVudH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+QmlydGhkYXk6PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWJhc2UtY29udGVudCAgbXQtMic+XG4gICAgICAgICAgICAgIHtwZXJzb25EZXRhaWxzLmJpcnRoZGF5XG4gICAgICAgICAgICAgICAgPyBgQm9ybiBvbiAke3BlcnNvbkRldGFpbHMuYmlydGhkYXl9YFxuICAgICAgICAgICAgICAgIDogXCJOL0FcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+QWxzbyBLbm93biBBczo8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtYmFzZS1jb250ZW50ICBtdC0yJz5cbiAgICAgICAgICAgICAge3BlcnNvbkRldGFpbHMuYWxzb19rbm93bl9hcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IHBlcnNvbkRldGFpbHMuYWxzb19rbm93bl9hcy5qb2luKFwiLCBcIilcbiAgICAgICAgICAgICAgICA6IFwiTi9BXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQnPkdlbmRlcjo8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtYmFzZS1jb250ZW50ICBtdC0yJz57Z2VuZGVyU3RyaW5nfTwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+SG9tZXBhZ2U6PC9oMT5cbiAgICAgICAgICAgIHtwZXJzb25EZXRhaWxzLmhvbWVwYWdlICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS01MDAgbXQtMic+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3BlcnNvbkRldGFpbHMuaG9tZXBhZ2V9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGVyc29uRGV0YWlscy5ob21lcGFnZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQnPlBsYWNlIG9mIEJpcnRoOjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1iYXNlLWNvbnRlbnQgIG10LTInPlxuICAgICAgICAgICAgICB7cGVyc29uRGV0YWlscy5wbGFjZV9vZl9iaXJ0aFxuICAgICAgICAgICAgICAgID8gcGVyc29uRGV0YWlscy5wbGFjZV9vZl9iaXJ0aFxuICAgICAgICAgICAgICAgIDogXCJOL0FcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbkNvbXBvbmVudFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFBlcnNvbiIsIkxvYWRpbmciLCJQZXJzb25Db21wb25lbnRQYWdlIiwicGFyYW1zIiwicGVyc29uRGV0YWlscyIsInNldFBlcnNvbkRldGFpbHMiLCJmYWxsYmFja0ltYWdlIiwiZmV0Y2hQZXJzb25EZXRhaWxzIiwiZGV0YWlscyIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2VuZGVyIiwiZ2VuZGVyU3RyaW5nIiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9maWxlX3BhdGgiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwiaDEiLCJiaW9ncmFwaHkiLCJzcGxpdCIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwicCIsImtub3duX2Zvcl9kZXBhcnRtZW50IiwiYmlydGhkYXkiLCJhbHNvX2tub3duX2FzIiwibGVuZ3RoIiwiam9pbiIsImhvbWVwYWdlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJwbGFjZV9vZl9iaXJ0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/[id]/page.tsx\n"));

/***/ })

});