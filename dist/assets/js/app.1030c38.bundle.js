/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 934:
/***/ (() => {

eval("/* src/app.js */\n\n// Styles\n\nlet button = document.getElementById(\"form-button\");\nlet inputName = document.getElementById(\"input-name\");\nlet inputEmail = document.getElementById(\"input-email\");\nlet inputMessage = document.getElementById(\"input-message\");\nbutton.onclick = e => {\n  fetch(\"https://api.byteplex.info/api/test/contact/\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      name: inputName.value,\n      email: inputEmail.value,\n      message: inputMessage.value\n    })\n  });\n  e.preventDefault();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTM0LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ2lDO0FBRWpDLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ25ELElBQUlDLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0FBQ3JELElBQUlFLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3ZELElBQUlHLFlBQVksR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBRTNERixNQUFNLENBQUNNLE9BQU8sR0FBSUMsQ0FBQyxJQUFLO0VBQ3BCQyxLQUFLLENBQUMsNkNBQTZDLEVBQUU7SUFDakRDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLE9BQU8sRUFBRTtNQUNMLGNBQWMsRUFBRTtJQUNwQixDQUFDO0lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7TUFDakJDLElBQUksRUFBRVgsU0FBUyxDQUFDWSxLQUFLO01BQ3JCQyxLQUFLLEVBQUVaLFVBQVUsQ0FBQ1csS0FBSztNQUN2QkUsT0FBTyxFQUFFWixZQUFZLENBQUNVO0lBQzFCLENBQUM7RUFDTCxDQUFDLENBQUM7RUFFRlIsQ0FBQyxDQUFDVyxjQUFjLENBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwLmpzPzlhNzgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogc3JjL2FwcC5qcyAqL1xuXG4vLyBTdHlsZXNcbmltcG9ydCBcIi9hc3NldHMvc2Nzcy9fbWFpbi5zY3NzXCI7XG5cbmxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYnV0dG9uXCIpO1xubGV0IGlucHV0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbmFtZVwiKTtcbmxldCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1lbWFpbFwiKTtcbmxldCBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW1lc3NhZ2VcIik7XG5cbmJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vYXBpLmJ5dGVwbGV4LmluZm8vYXBpL3Rlc3QvY29udGFjdC9cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG5hbWU6IGlucHV0TmFtZS52YWx1ZSxcbiAgICAgICAgICAgIGVtYWlsOiBpbnB1dEVtYWlsLnZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogaW5wdXRNZXNzYWdlLnZhbHVlXG4gICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuIl0sIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnB1dE5hbWUiLCJpbnB1dEVtYWlsIiwiaW5wdXRNZXNzYWdlIiwib25jbGljayIsImUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwibWVzc2FnZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///934\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[934]();
/******/ 	
/******/ })()
;