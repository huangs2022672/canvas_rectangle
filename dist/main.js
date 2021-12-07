/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/rectangle */ \"./src/scripts/rectangle.js\");\n// const ee = require('@google/earthengine'); // google earth engine api\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvasEl = document.getElementById('canvas'); // canvasEl.width = document.body.clientWidth;\n  // canvasEl.height = document.body.clientHeight;\n\n  canvasEl.width = 600;\n  canvasEl.height = 600;\n  var ctx = canvasEl.getContext('2d'); // debugger\n  // ctx.fillStyle = 'rgb(200, 0, 0)';\n  // ctx.fillRect(10, 10, 50, 50);\n  // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n  // ctx.fillRect(30, 30, 50, 50);\n\n  var rect = new _scripts_rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 50, 50);\n  document.addEventListener(\"click\", rect.changeColor);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFFbEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBakIsQ0FGa0QsQ0FHbEQ7QUFDQTs7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxLQUFULEdBQWlCLEdBQWpCO0FBQ0FGLEVBQUFBLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixHQUFsQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDSyxVQUFULENBQW9CLElBQXBCLENBQVosQ0FQa0QsQ0FTbEQ7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsSUFBSVQsMERBQUosQ0FBY08sR0FBZCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixDQUFiO0FBRUFOLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNPLElBQUksQ0FBQ0MsV0FBeEM7QUFjRCxDQWpDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbnZhc19hcGkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBlZSA9IHJlcXVpcmUoJ0Bnb29nbGUvZWFydGhlbmdpbmUnKTsgLy8gZ29vZ2xlIGVhcnRoIGVuZ2luZSBhcGlcclxuXHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vc2NyaXB0cy9yZWN0YW5nbGVcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gIC8vIGNhbnZhc0VsLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAvLyBjYW52YXNFbC5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICBjYW52YXNFbC53aWR0aCA9IDYwMDtcclxuICBjYW52YXNFbC5oZWlnaHQgPSA2MDA7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgLy8gZGVidWdnZXJcclxuXHJcbiAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjAwLCAwLCAwKSc7XHJcbiAgLy8gY3R4LmZpbGxSZWN0KDEwLCAxMCwgNTAsIDUwKTtcclxuXHJcbiAgLy8gY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDIwMCwgMC41KSc7XHJcbiAgLy8gY3R4LmZpbGxSZWN0KDMwLCAzMCwgNTAsIDUwKTtcclxuXHJcbiAgY29uc3QgcmVjdCA9IG5ldyBSZWN0YW5nbGUoY3R4LCA1MCwgNTApO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVjdC5jaGFuZ2VDb2xvcik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlJlY3RhbmdsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJyZWN0IiwiY2hhbmdlQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/rectangle.js":
/*!**********************************!*\
  !*** ./src/scripts/rectangle.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Rectangle = /*#__PURE__*/function () {\n  function Rectangle(ctx, x, y, startX, startY) {\n    _classCallCheck(this, Rectangle);\n\n    this.ctx = ctx;\n    this.x = x;\n    this.y = y;\n    this.startX = 10;\n    this.endX = x - this.startX;\n    this.startY = 10;\n    this.endY = y - this.startY;\n    this.color = 'rgb(200, 0, 0)';\n    this.drawRect(this.color);\n    this.changeColor = this.changeColor.bind(this);\n  }\n\n  _createClass(Rectangle, [{\n    key: \"drawRect\",\n    value: function drawRect(color) {\n      this.color = color;\n      this.ctx.fillStyle = this.color;\n      this.ctx.fillRect(this.startX, this.startY, this.endX, this.endY); // this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n      // this.ctx.fillRect(30, 30, 50, 50);\n    }\n  }, {\n    key: \"changeColor\",\n    value: function changeColor(e) {\n      // debugger\n      // e.clientX x pos\n      // e.clientY y pos\n      console.log(e.clientX, e.clientY); // console.log(e.clientY)\n      // debugger\n      // e\n\n      if (e.clientX >= this.startX && e.clientX <= this.endX && e.clientY >= this.startY && e.clientY <= this.endY) {\n        this.drawRect('rgb(200, 200, 0)');\n      }\n    }\n  }]);\n\n  return Rectangle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yZWN0YW5nbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUFNQTtBQUNKLHFCQUFZQyxHQUFaLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUJDLE1BQXZCLEVBQStCQyxNQUEvQixFQUF1QztBQUFBOztBQUNyQyxTQUFLSixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtFLElBQUwsR0FBWUosQ0FBQyxHQUFDLEtBQUtFLE1BQW5CO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLRSxJQUFMLEdBQVlKLENBQUMsR0FBQyxLQUFLRSxNQUFuQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxnQkFBYjtBQUVBLFNBQUtDLFFBQUwsQ0FBYyxLQUFLRCxLQUFuQjtBQUNBLFNBQUtFLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDs7OztXQUVELGtCQUFTSCxLQUFULEVBQWdCO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS1AsR0FBTCxDQUFTVyxTQUFULEdBQXFCLEtBQUtKLEtBQTFCO0FBQ0EsV0FBS1AsR0FBTCxDQUFTWSxRQUFULENBQWtCLEtBQUtULE1BQXZCLEVBQStCLEtBQUtDLE1BQXBDLEVBQTRDLEtBQUtDLElBQWpELEVBQXVELEtBQUtDLElBQTVELEVBSGMsQ0FLZDtBQUNBO0FBQ0Q7OztXQUVELHFCQUFZTyxDQUFaLEVBQWU7QUFDYjtBQUNBO0FBQ0E7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csT0FBZCxFQUF1QkgsQ0FBQyxDQUFDSSxPQUF6QixFQUphLENBS2I7QUFDQTtBQUNBOztBQUNBLFVBQUlKLENBQUMsQ0FBQ0csT0FBRixJQUFhLEtBQUtiLE1BQWxCLElBQ0FVLENBQUMsQ0FBQ0csT0FBRixJQUFhLEtBQUtYLElBRGxCLElBRUFRLENBQUMsQ0FBQ0ksT0FBRixJQUFhLEtBQUtiLE1BRmxCLElBR0FTLENBQUMsQ0FBQ0ksT0FBRixJQUFhLEtBQUtYLElBSHRCLEVBRzRCO0FBQ3RCLGFBQUtFLFFBQUwsQ0FBYyxrQkFBZDtBQUNEO0FBR047Ozs7OztBQU1ILCtEQUFlVCxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FudmFzX2FwaS8uL3NyYy9zY3JpcHRzL3JlY3RhbmdsZS5qcz80N2RhIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJlY3RhbmdsZSB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBzdGFydFgsIHN0YXJ0WSkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuc3RhcnRYID0gMTA7XHJcbiAgICB0aGlzLmVuZFggPSB4LXRoaXMuc3RhcnRYO1xyXG4gICAgdGhpcy5zdGFydFkgPSAxMDtcclxuICAgIHRoaXMuZW5kWSA9IHktdGhpcy5zdGFydFk7XHJcbiAgICB0aGlzLmNvbG9yID0gJ3JnYigyMDAsIDAsIDApJztcclxuXHJcbiAgICB0aGlzLmRyYXdSZWN0KHRoaXMuY29sb3IpO1xyXG4gICAgdGhpcy5jaGFuZ2VDb2xvciA9IHRoaXMuY2hhbmdlQ29sb3IuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGRyYXdSZWN0KGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHRoaXMuZW5kWCwgdGhpcy5lbmRZKTtcclxuXHJcbiAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyMDAsIDAuNSknO1xyXG4gICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMzAsIDMwLCA1MCwgNTApO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlQ29sb3IoZSkge1xyXG4gICAgLy8gZGVidWdnZXJcclxuICAgIC8vIGUuY2xpZW50WCB4IHBvc1xyXG4gICAgLy8gZS5jbGllbnRZIHkgcG9zXHJcbiAgICBjb25zb2xlLmxvZyhlLmNsaWVudFgsIGUuY2xpZW50WSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGUuY2xpZW50WSlcclxuICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAvLyBlXHJcbiAgICBpZiAoZS5jbGllbnRYID49IHRoaXMuc3RhcnRYICYmXHJcbiAgICAgICAgZS5jbGllbnRYIDw9IHRoaXMuZW5kWCAmJlxyXG4gICAgICAgIGUuY2xpZW50WSA+PSB0aGlzLnN0YXJ0WSAmJlxyXG4gICAgICAgIGUuY2xpZW50WSA8PSB0aGlzLmVuZFkpIHtcclxuICAgICAgICAgIHRoaXMuZHJhd1JlY3QoJ3JnYigyMDAsIDIwMCwgMCknKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xyXG4iXSwibmFtZXMiOlsiUmVjdGFuZ2xlIiwiY3R4IiwieCIsInkiLCJzdGFydFgiLCJzdGFydFkiLCJlbmRYIiwiZW5kWSIsImNvbG9yIiwiZHJhd1JlY3QiLCJjaGFuZ2VDb2xvciIsImJpbmQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImUiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50WCIsImNsaWVudFkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/rectangle.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXNfYXBpLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;