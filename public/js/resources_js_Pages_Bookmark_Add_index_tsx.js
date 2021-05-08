(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Bookmark_Add_index_tsx"],{

/***/ "./resources/js/Pages/Bookmark/Add/index.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Bookmark/Add/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var BookmarkAddPage = function BookmarkAddPage() {
  var _a = react_1.useState({
    link: "",
    title: "some hardcoded title"
  }),
      state = _a[0],
      setstate = _a[1];

  var handleChange = function handleChange(event) {
    var _a;

    setstate(__assign(__assign({}, state), (_a = {}, _a[event.currentTarget.name] = event.currentTarget.value, _a)));
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    inertia_1.Inertia.post("/bookmark/preview", state);
  };

  return react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-sm-8 mx-auto"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement("div", {
    className: "form-group"
  }, react_1["default"].createElement("label", {
    htmlFor: "link"
  }, "Link"), react_1["default"].createElement("input", {
    type: "text",
    className: "form-control",
    name: "link",
    onChange: handleChange
  })))));
};

exports.default = BookmarkAddPage;

/***/ })

}]);