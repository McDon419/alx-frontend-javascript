/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\nvar student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 21,\n    location: \"Accra\"\n};\nvar student2 = {\n    firstName: \"Jane\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"Kumasi\"\n};\nvar studentsList = [student1, student2];\nfunction renderTable(students) {\n    var table = document.createElement(\"table\");\n    var tableBody = document.createElement(\"tbody\");\n    students.forEach(function (student) {\n        var row = document.createElement(\"tr\");\n        var firstNameCell = document.createElement(\"td\");\n        firstNameCell.textContent = student.firstName;\n        var locationCell = document.createElement(\"td\");\n        locationCell.textContent = student.location;\n        row.appendChild(firstNameCell);\n        row.appendChild(locationCell);\n        tableBody.appendChild(row);\n    });\n    table.appendChild(tableBody);\n    document.body.appendChild(table);\n}\nrenderTable(studentsList);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;