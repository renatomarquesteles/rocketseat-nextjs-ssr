webpackHotUpdate("static/development/pages/users.js",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ "./src/hocs/withAnalytics.js");
/* harmony import */ var _src_styles_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/styles/global */ "./src/styles/global.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 10px 15px;\n  font-size: 20px;\n\n  h1 {\n    padding: 5px 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n\n  ul {\n    margin-top: 15px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  nav {\n    margin-top: 40px;\n    text-decoration: underline;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Content = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());

var User = function User(_ref) {
  var users = _ref.users;
  return __jsx(_src_styles_global__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "Users")), __jsx("img", {
    src: "/images/glasses.jpg"
  }), __jsx(Content, null, __jsx("h1", null, "Users"), __jsx("ul", null, users.map(function (user) {
    return __jsx("li", {
      key: user.id
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/users/".concat(user.login)
    }, __jsx("a", null, user.login)));
  })), __jsx("nav", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/"
  }, __jsx("a", null, "Voltar")))), __jsx(_src_styles_global__WEBPACK_IMPORTED_MODULE_8__["GlobalStyle"], null));
};

User.getInitialProps = function _callee() {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.github.com/orgs/facebook/members'));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            users: response.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_7__["default"])()(User));

/***/ })

})
//# sourceMappingURL=users.js.c62df3879410ecfecbfc.hot-update.js.map