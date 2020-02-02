webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ "./src/hocs/withAnalytics.js");
/* harmony import */ var _src_styles_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/global */ "./src/styles/global.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Content = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "detail__Content",
  componentId: "dcbjmh-0"
})(["padding:10px 15px;display:flex;flex-direction:column;h1{padding:5px 0;font-size:40px;border-bottom:1px solid rgba(0,0,0,0.2);}img{margin-top:20px;max-width:200px;}nav{margin-top:40px;text-decoration:underline;}button{width:200px;font-size:20px;margin-top:20px;}"]);

var Detail = function Detail(_ref) {
  var user = _ref.user;
  return __jsx(_src_styles_global__WEBPACK_IMPORTED_MODULE_7__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "Users - ", user.login)), __jsx("img", {
    src: "/images/glasses.jpg"
  }), __jsx(Content, null, __jsx("h1", null, user.login), __jsx("img", {
    src: user.avatar_url,
    width: "200"
  }), __jsx("a", {
    href: user.html_url
  }, __jsx("button", {
    type: "button"
  }, "Visit GitHub Profile")), __jsx("nav", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/users"
  }, __jsx("a", null, "Voltar")))), __jsx(_src_styles_global__WEBPACK_IMPORTED_MODULE_7__["GlobalStyle"], null));
};

Detail.getInitialProps = function _callee(_ref2) {
  var query, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.github.com/users/".concat(query.user)));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", {
            user: response.data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_6__["default"])()(Detail));

/***/ })

})
//# sourceMappingURL=detail.js.ff3485d37db41774b6c9.hot-update.js.map