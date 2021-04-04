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
              backgroundImage: "url(".concat(assets_images_home_1_pexels_startup_stock_photos_7367_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, ")")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXItdGhyZWUuanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIkVmZmVjdEZhZGUiLCJTbGlkZXJUaHJlZSIsIm1haW5TbGlkZU9wdGlvbnMiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsImVmZmVjdCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJhdXRvcGxheSIsImRlbGF5IiwiU2xpZGVyVGhyZWVEYXRhIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsInN1YlRpdGxlIiwidGl0bGUiLCJidXR0b24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZTEiLCJ1cmwiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDhDQUFVLENBQUNDLEdBQVgsQ0FBZSxDQUFDQywrQ0FBRCxFQUFXQyxpREFBWCxFQUF1QkMsaURBQXZCLENBQWY7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxnQkFBZ0IsR0FBRztBQUN2QkMsaUJBQWEsRUFBRSxDQURRO0FBRXZCQyxRQUFJLEVBQUUsSUFGaUI7QUFHdkJDLFVBQU0sRUFBRSxNQUhlO0FBSXZCQyxjQUFVLEVBQUU7QUFDVkMsWUFBTSxFQUFFLG1CQURFO0FBRVZDLFlBQU0sRUFBRTtBQUZFLEtBSlc7QUFRdkJDLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUU7QUFEQztBQVJhLEdBQXpCO0FBWUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsYUFBbkI7QUFBQSwyQkFDRSxxRUFBQyxtREFBRCxrQ0FBWVIsZ0JBQVo7QUFBQSxpQkFDR1MscURBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0IsZ0JBQXFDQyxLQUFyQztBQUFBLFlBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFlBQVVDLFFBQVYsUUFBVUEsUUFBVjtBQUFBLFlBQW9CQyxLQUFwQixRQUFvQkEsS0FBcEI7QUFBQSxZQUEyQkMsTUFBM0IsUUFBMkJBLE1BQTNCO0FBQUEsNEJBQ2pCLHFFQUFDLHdEQUFEO0FBQUEsa0NBQ0U7QUFDSSxxQkFBUyxFQUFDLGFBRGQ7QUFFSSxpQkFBSyxFQUFFO0FBQUVDLDZCQUFlLGdCQUFTQyxnR0FBVDtBQUFqQjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSxxRUFBQyx5REFBRDtBQUFBLG1DQUNFLHFFQUFDLG1EQUFEO0FBQUEscUNBQ0UscUVBQUMsbURBQUQ7QUFBSyxrQkFBRSxFQUFFLEVBQVQ7QUFBYSx5QkFBUyxFQUFDLGFBQXZCO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLG9CQUFkO0FBQUEsNEJBQW9DSDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFFQyxNQUFNLENBQUNHLEdBQW5CO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxjQUFaO0FBQUEsMkNBQ0U7QUFBQSxnQ0FBT0gsTUFBTSxDQUFDSTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQWtCUixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQXBCLENBREgsZUFxQkU7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQW9DLFVBQUUsRUFBQyxrQkFBdkM7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRixlQXdCRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBb0MsVUFBRSxFQUFDLGtCQUF2QztBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZERCxDQTFFRDs7S0FBTVosVztBQTRFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgtMy41OWQ0ZmI2NDA1NDAyOGU4NzViMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEF1dG9wbGF5LCBOYXZpZ2F0aW9uLCBFZmZlY3RGYWRlIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IFNsaWRlclRocmVlRGF0YSB9IGZyb20gXCJAL2RhdGFcIjtcbmltcG9ydCBpbWFnZTEgZnJvbSBcImFzc2V0cy9pbWFnZXMvaG9tZV8xL3BleGVscy1zdGFydHVwLXN0b2NrLXBob3Rvcy03MzY3LmpwZ1wiO1xuU3dpcGVyQ29yZS51c2UoW0F1dG9wbGF5LCBOYXZpZ2F0aW9uLCBFZmZlY3RGYWRlXSk7XG5cbmNvbnN0IFNsaWRlclRocmVlID0gKCkgPT4ge1xuICBjb25zdCBtYWluU2xpZGVPcHRpb25zID0ge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIjbWFpbi1zbGlkZXItbmV4dFwiLFxuICAgICAgcHJldkVsOiBcIiNtYWluLXNsaWRlci1wcmV2XCJcbiAgICB9LFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogNTAwMFxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluLXNsaWRlclwiPlxuICAgICAgPFN3aXBlciB7Li4ubWFpblNsaWRlT3B0aW9uc30+XG4gICAgICAgIHtTbGlkZXJUaHJlZURhdGEubWFwKCh7IGltYWdlLCBzdWJUaXRsZSwgdGl0bGUsIGJ1dHRvbiB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1sYXllclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZTF9KWAgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyX190aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtidXR0b24udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Bjb21tb25fYnRuYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YnV0dG9uLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldlwiIGlkPVwibWFpbi1zbGlkZXItcHJldlwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dFwiIGlkPVwibWFpbi1zbGlkZXItbmV4dFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3dpcGVyPlxuICAgICAgey8qPFN3aXBlciB7Li4ubWFpblNsaWRlT3B0aW9uc30+Ki99XG4gICAgICB7LyogIHtTbGlkZXJUaHJlZURhdGEubWFwKCh7IGltYWdlLCBzdWJUaXRsZSwgdGl0bGUsIGJ1dHRvbiB9LCBpbmRleCkgPT4gKCovfVxuICAgICAgey8qICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT4qL31cbiAgICAgIHsvKiAgICAgIDxkaXYqL31cbiAgICAgIHsvKiAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtbGF5ZXJcIiovfVxuICAgICAgey8qICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCB9fSovfVxuICAgICAgey8qICAgICAgPjwvZGl2PiovfVxuICAgICAgey8qICAgICAgPENvbnRhaW5lcj4qL31cbiAgICAgIHsvKiAgICAgICAgPFJvdz4qL31cbiAgICAgIHsvKiAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyX19zdWJ0ZXh0XCI+e3N1YlRpdGxlfTwvcD4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYWluLXNsaWRlcl9fdGl0bGVcIj57dGl0bGV9PC9oMz4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2J1dHRvbi51cmx9PiovfVxuICAgICAgey8qICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Bjb21tb25fYnRuYH0+Ki99XG4gICAgICB7LyogICAgICAgICAgICAgICAgPHNwYW4+e2J1dHRvbi5sYWJlbH08L3NwYW4+Ki99XG4gICAgICB7LyogICAgICAgICAgICAgIDwvYT4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDwvTGluaz4qL31cbiAgICAgIHsvKiAgICAgICAgICA8L0NvbD4qL31cbiAgICAgIHsvKiAgICAgICAgPC9Sb3c+Ki99XG4gICAgICB7LyogICAgICA8L0NvbnRhaW5lcj4qL31cbiAgICAgIHsvKiAgICA8L1N3aXBlclNsaWRlPiovfVxuICAgICAgey8qICApKX0qL31cbiAgICAgIHsvKiAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLXByZXZcIiBpZD1cIm1haW4tc2xpZGVyLXByZXZcIj4qL31cbiAgICAgIHsvKiAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPiovfVxuICAgICAgey8qICA8L2Rpdj4qL31cbiAgICAgIHsvKiAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIiBpZD1cIm1haW4tc2xpZGVyLW5leHRcIj4qL31cbiAgICAgIHsvKiAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT4qL31cbiAgICAgIHsvKiAgPC9kaXY+Ki99XG4gICAgICB7Lyo8L1N3aXBlcj4qL31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJUaHJlZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=