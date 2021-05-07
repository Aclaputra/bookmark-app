(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Bookmark_Add_index_tsx"],{

/***/ "./resources/js/Pages/Bookmark/Add/index.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Bookmark/Add/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var BookmarkAddPage = function BookmarkAddPage() {
  return react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-sm-8 mx-auto"
  }, react_1["default"].createElement("form", {
    action: ""
  }, react_1["default"].createElement("div", {
    className: "form-group"
  }, react_1["default"].createElement("label", {
    htmlFor: "Link"
  }), react_1["default"].createElement("input", {
    type: "text",
    className: "form-control",
    name: "link"
  })))));
};

exports.default = BookmarkAddPage;

/***/ })

}]);