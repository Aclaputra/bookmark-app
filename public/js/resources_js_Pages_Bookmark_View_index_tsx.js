(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Bookmark_View_index_tsx"],{

/***/ "./resources/js/Pages/Bookmark/View/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/View/index.tsx ***!
  \****************************************************/
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

var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var BookmarkViewPage = function BookmarkViewPage(_a) {
  var bookmark = _a.bookmark;

  var handleSave = function handleSave(event) {
    event.preventDefault();
    inertia_1.Inertia.post("/bookmark/make-active", {
      id: bookmark.id
    });
  };

  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-md-6"
  }, bookmark.title && react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header"
  }, bookmark.title), react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("p", null, bookmark.description), react_1["default"].createElement("div", {
    className: "mb-3"
  }, react_1["default"].createElement("img", {
    src: bookmark.img_url,
    alt: bookmark.title,
    width: "100%"
  })), react_1["default"].createElement("button", {
    className: "btn btn-primary",
    onClick: handleSave
  }, "Save"))))));
};

exports.default = BookmarkViewPage;

/***/ }),

/***/ "./resources/js/components/common/layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/layout/index.tsx ***!
  \*********************************************************/
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

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement("div", {
    className: "container"
  }, children);
};

exports.default = Layout;

/***/ })

}]);