webpackHotUpdate_N_E("pages/index-3",{

/***/ "./components/slider-three.js":
/*!************************************!*\
  !*** ./components/slider-three.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_orion_dev_personal_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data */ "./data/index.js");
/* harmony import */ var assets_images_home_1_pexels_startup_stock_photos_7367_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/home_1/pexels-startup-stock-photos-7367.jpg */ "./assets/images/home_1/pexels-startup-stock-photos-7367.jpg");
/* harmony import */ var assets_images_home_1_pexels_startup_stock_photos_7367_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_home_1_pexels_startup_stock_photos_7367_jpg__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\orion\\dev\\personal-site\\components\\slider-three.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_orion_dev_personal_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["EffectFade"]]);

var SliderThree = function SliderThree() {
  var mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev"
    },
    autoplay: {
      delay: 5000
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "main-slider",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], _objectSpread(_objectSpread({}, mainSlideOptions), {}, {
      children: [_data__WEBPACK_IMPORTED_MODULE_7__["SliderThreeData"].map(function (_ref, index) {
        var image = _ref.image,
            subTitle = _ref.subTitle,
            title = _ref.title,
            button = _ref.button;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_4__["SwiperSlide"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "image-layer",
            style: {
              backgroundImage: "url(".concat(image, ")")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 12,
                className: "text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  className: "main-slider__title",
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: button.url,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: "common_btn",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      children: button.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "swiper-button-prev",
        id: "main-slider-prev",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: "fa fa-angle-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "swiper-button-next",
        id: "main-slider-next",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: "fa fa-angle-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_c = SliderThree;
/* harmony default export */ __webpack_exports__["default"] = (SliderThree);

var _c;

$RefreshReg$(_c, "SliderThree");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXItdGhyZWUuanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIkVmZmVjdEZhZGUiLCJTbGlkZXJUaHJlZSIsIm1haW5TbGlkZU9wdGlvbnMiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsImVmZmVjdCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJhdXRvcGxheSIsImRlbGF5IiwiU2xpZGVyVGhyZWVEYXRhIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsInN1YlRpdGxlIiwidGl0bGUiLCJidXR0b24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmwiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQywrQ0FBRCxFQUFXQyxpREFBWCxFQUF1QkMsaURBQXZCLENBQWY7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsaUJBQWEsRUFBRSxDQURRO0FBRXZCQyxRQUFJLEVBQUUsSUFGaUI7QUFHdkJDLFVBQU0sRUFBRSxNQUhlO0FBSXZCQyxjQUFVLEVBQUU7QUFDVkMsWUFBTSxFQUFFLG1CQURFO0FBRVZDLFlBQU0sRUFBRTtBQUZFLEtBSlc7QUFRdkJDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUU7QUFEQztBQVJhLEdBQXpCO0FBWUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsYUFBbkI7QUFBQSwyQkFDRSxxRUFBQyxtREFBRCxrQ0FBWVIsZ0JBQVo7QUFBQSxpQkFDR1MscURBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0IsZ0JBQXFDQyxLQUFyQztBQUFBLFlBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVDLFFBQVYsUUFBVUEsUUFBVjtBQUFBLFlBQW9CQyxLQUFwQixRQUFvQkEsS0FBcEI7QUFBQSxZQUEyQkMsTUFBM0IsUUFBMkJBLE1BQTNCO0FBQUEsNEJBQ2pCLHFFQUFDLHdEQUFEO0FBQUEsa0NBQ0U7QUFDSSxxQkFBUyxFQUFDLGFBRGQ7QUFFSSxpQkFBSyxFQUFFO0FBQUVDLDZCQUFlLGdCQUFTSixLQUFUO0FBQWpCO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLHlEQUFEO0FBQUEsbUNBQ0UscUVBQUMsbURBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxtREFBRDtBQUFLLGtCQUFFLEVBQUUsRUFBVDtBQUFhLHlCQUFTLEVBQUMsYUFBdkI7QUFBQSx3Q0FDRTtBQUFJLDJCQUFTLEVBQUMsb0JBQWQ7QUFBQSw0QkFBb0NFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLHNCQUFJLEVBQUVDLE1BQU0sQ0FBQ0UsR0FBbkI7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLGNBQVo7QUFBQSwyQ0FDRTtBQUFBLGdDQUFPRixNQUFNLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FBa0JQLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBcEIsQ0FESCxlQXFCRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBb0MsVUFBRSxFQUFDLGtCQUF2QztBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLGVBd0JFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFvQyxVQUFFLEVBQUMsa0JBQXZDO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkRELENBMUVEOztLQUFNWixXO0FBNEVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC0zLjJhYWI3YjRhYzYwMzRkOGUzMmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IFN3aXBlckNvcmUsIHsgQXV0b3BsYXksIE5hdmlnYXRpb24sIEVmZmVjdEZhZGUgfSBmcm9tIFwic3dpcGVyXCI7XG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgU2xpZGVyVGhyZWVEYXRhIH0gZnJvbSBcIkAvZGF0YVwiO1xuaW1wb3J0IGltYWdlMSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9ob21lXzEvcGV4ZWxzLXN0YXJ0dXAtc3RvY2stcGhvdG9zLTczNjcuanBnXCI7XG5Td2lwZXJDb3JlLnVzZShbQXV0b3BsYXksIE5hdmlnYXRpb24sIEVmZmVjdEZhZGVdKTtcblxuY29uc3QgU2xpZGVyVGhyZWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TbGlkZU9wdGlvbnMgPSB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBsb29wOiB0cnVlLFxuICAgIGVmZmVjdDogXCJmYWRlXCIsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIiNtYWluLXNsaWRlci1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiI21haW4tc2xpZGVyLXByZXZcIlxuICAgIH0sXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiA1MDAwXG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyXCI+XG4gICAgICA8U3dpcGVyIHsuLi5tYWluU2xpZGVPcHRpb25zfT5cbiAgICAgICAge1NsaWRlclRocmVlRGF0YS5tYXAoKHsgaW1hZ2UsIHN1YlRpdGxlLCB0aXRsZSwgYnV0dG9uIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWxheWVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYWluLXNsaWRlcl9fdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YnV0dG9uLnVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgY29tbW9uX2J0bmB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2J1dHRvbi5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLXByZXZcIiBpZD1cIm1haW4tc2xpZGVyLXByZXZcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIiBpZD1cIm1haW4tc2xpZGVyLW5leHRcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N3aXBlcj5cbiAgICAgIHsvKjxTd2lwZXIgey4uLm1haW5TbGlkZU9wdGlvbnN9PiovfVxuICAgICAgey8qICB7U2xpZGVyVGhyZWVEYXRhLm1hcCgoeyBpbWFnZSwgc3ViVGl0bGUsIHRpdGxlLCBidXR0b24gfSwgaW5kZXgpID0+ICgqL31cbiAgICAgIHsvKiAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+Ki99XG4gICAgICB7LyogICAgICA8ZGl2Ki99XG4gICAgICB7LyogICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWxheWVyXCIqL31cbiAgICAgIHsvKiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX0qL31cbiAgICAgIHsvKiAgICAgID48L2Rpdj4qL31cbiAgICAgIHsvKiAgICAgIDxDb250YWluZXI+Ki99XG4gICAgICB7LyogICAgICAgIDxSb3c+Ki99XG4gICAgICB7LyogICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Ki99XG4gICAgICB7LyogICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLXNsaWRlcl9fc3VidGV4dFwiPntzdWJUaXRsZX08L3A+Ki99XG4gICAgICB7LyogICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWFpbi1zbGlkZXJfX3RpdGxlXCI+e3RpdGxlfTwvaDM+Ki99XG4gICAgICB7LyogICAgICAgICAgICA8TGluayBocmVmPXtidXR0b24udXJsfT4qL31cbiAgICAgIHsvKiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgY29tbW9uX2J0bmB9PiovfVxuICAgICAgey8qICAgICAgICAgICAgICAgIDxzcGFuPntidXR0b24ubGFiZWx9PC9zcGFuPiovfVxuICAgICAgey8qICAgICAgICAgICAgICA8L2E+Ki99XG4gICAgICB7LyogICAgICAgICAgICA8L0xpbms+Ki99XG4gICAgICB7LyogICAgICAgICAgPC9Db2w+Ki99XG4gICAgICB7LyogICAgICAgIDwvUm93PiovfVxuICAgICAgey8qICAgICAgPC9Db250YWluZXI+Ki99XG4gICAgICB7LyogICAgPC9Td2lwZXJTbGlkZT4qL31cbiAgICAgIHsvKiAgKSl9Ki99XG4gICAgICB7LyogIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCIgaWQ9XCJtYWluLXNsaWRlci1wcmV2XCI+Ki99XG4gICAgICB7LyogICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT4qL31cbiAgICAgIHsvKiAgPC9kaXY+Ki99XG4gICAgICB7LyogIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgaWQ9XCJtYWluLXNsaWRlci1uZXh0XCI+Ki99XG4gICAgICB7LyogICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+Ki99XG4gICAgICB7LyogIDwvZGl2PiovfVxuICAgICAgey8qPC9Td2lwZXI+Ki99XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyVGhyZWU7XG4iXSwic291cmNlUm9vdCI6IiJ9