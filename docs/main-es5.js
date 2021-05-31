(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/bvK":
    /*!***************************************************!*\
      !*** ./src/app/layout/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function bvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! events */
      "+qE3");
      /* harmony import */


      var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _assets_json_menu_menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/json/menu/menu.json */
      "oJL5");

      var _assets_json_menu_menu_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../assets/json/menu/menu.json */
      "oJL5", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavbarComponent_li_21_div_3_ul_1_div_4_ul_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_21_div_3_ul_1_div_4_ul_1_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var rmenu_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);

            return ctx_r8.onMenuSelection(rmenu_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rmenu_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](rmenu_r7.name);
        }
      }

      function NavbarComponent_li_21_div_3_ul_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_li_21_div_3_ul_1_div_4_ul_1_Template, 4, 1, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cmenu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", cmenu_r4.childrenList);
        }
      }

      function NavbarComponent_li_21_div_3_ul_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_21_div_3_ul_1_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var cmenu_r4 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

            return ctx_r11.onMenuSelection(cmenu_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NavbarComponent_li_21_div_3_ul_1_div_4_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cmenu_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cmenu_r4.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cmenu_r4.childrenList && cmenu_r4.childrenList.length > 0);
        }
      }

      function NavbarComponent_li_21_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_li_21_div_3_ul_1_Template, 5, 2, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", menu_r1.childrenList);
        }
      }

      function NavbarComponent_li_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_li_21_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var menu_r1 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.onMenuSelection(menu_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavbarComponent_li_21_div_3_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.childrenList && menu_r1.childrenList.length > 0);
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(_router) {
          _classCallCheck(this, NavbarComponent);

          this._router = _router;
          this.sidenavToggle = new events__WEBPACK_IMPORTED_MODULE_0__();
          this.menuList = _assets_json_menu_menu_json__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onMenuSelection",
          value: function onMenuSelection(menu) {
            if (menu && menu['childrenList'].length == 0) {
              this._router.navigate([menu['route']]);
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        outputs: {
          sidenavToggle: "sidenavToggle"
        },
        decls: 22,
        vars: 1,
        consts: [[1, "mat-elevation-z6", "sv-nav-top-cont"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-12", "sv-web-topbar-lang-cont"], ["id", "google_translate_element", 1, "sv-web-topbar-gt-cont"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "sv-nav-top-rt-cont"], [1, "sv-nav-top-soicon", "instagram"], [1, "fab", "fa-instagram"], [1, "sv-nav-top-soicon", "facebook"], [1, "fab", "fa-facebook-square"], [1, "sv-nav-top-soicon", "youtube"], [1, "fab", "fa-youtube"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "sticky-top", "sv-nav-cont"], ["href", "/", 1, "navbar-brand"], ["src", "assets/logo-vasai.png", 1, "sv-nav-logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggler", "aria-expanded", "false", 1, "navbar-toggler", "collapsed"], [1, "navbar-toggler-icon"], ["id", "navbarToggler", 1, "navbar-collapse", "collapse", "sv-web-nav-menu-cont"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item dropdown dropdown-parentmenu", 4, "ngFor", "ngForOf"], [1, "nav-item", "dropdown", "dropdown-parentmenu"], ["role", "button", "data-toggle", "dropdown", 1, "nav-link", 3, "click"], ["class", "dropdown-menu multi-level", 4, "ngIf"], [1, "dropdown-menu", "multi-level"], ["class", "navbar-nav sv-menu-dropdown-ul", 4, "ngFor", "ngForOf"], [1, "navbar-nav", "sv-menu-dropdown-ul"], [1, "dropdown-submenu"], ["data-toggle", "dropdown", 1, "dropdown-item", 3, "click"], ["class", "dropdown-menu", 4, "ngIf"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Language : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nav", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ul", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, NavbarComponent_li_21_Template, 4, 2, "li", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.sv-nav-logo[_ngcontent-%COMP%] {\r\n  height: 4rem;\r\n  width: 4.3rem;\r\n}\r\n\r\n.sv-nav-cont[_ngcontent-%COMP%] {\r\n  background-color: #021a24;\r\n  padding: 0.1rem 4rem;\r\n}\r\n\r\n.sv-nav-top-soicon[_ngcontent-%COMP%] {\r\n  margin: 0 0.5rem;\r\n  font-size: 16px;\r\n}\r\n\r\n.sv-nav-top-rt-cont[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-top: 8px;\r\n}\r\n\r\n.dropdown-submenu[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-parentmenu[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown-submenu[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.dropdown-submenu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 100%;\r\n  margin-top: -6px;\r\n  margin-left: 20px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.dropdown-submenu[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n  display: none;\r\n  content: \" \";\r\n  float: right;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #ccc;\r\n  margin-top: 5px;\r\n  margin-right: -10px;\r\n}\r\n\r\n.dropdown-submenu[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]:after {\r\n  border-left-color: #fff;\r\n}\r\n\r\n.sv-menu-dropdown-ul[_ngcontent-%COMP%] {\r\n  padding: 5px 0;\r\n}\r\n\r\n.sv-menu-dropdown-ul[_ngcontent-%COMP%]:hover, .sv-menu-dropdown-ul[_ngcontent-%COMP%]:active {\r\n  border-left: 2px solid black;\r\n}\r\n\r\n.sv-menu-dropdown-ul[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active, .sv-menu-dropdown-ul[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n  color: black;\r\n}\r\n\r\n.dropdown-parentmenu[_ngcontent-%COMP%] {\r\n  margin-right: 0.7rem;\r\n}\r\n\r\n.sv-web-nav-menu-cont[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.sv-nav-top-cont[_ngcontent-%COMP%] {\r\n  padding: 0.1rem 4rem;\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n.sv-nav-top-cont[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.sv-web-topbar-lang-cont[_ngcontent-%COMP%] {\r\n  padding: 3px;\r\n}\r\n\r\n.sv-web-topbar-gt-cont[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.sv-menu-dropdown-ul[_ngcontent-%COMP%]:hover {\r\n  background-color: #e8e8e8;\r\n}\r\n\r\n.sv-web-nav-menu-cont[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBR2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5zdi1uYXYtbG9nbyB7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIHdpZHRoOiA0LjNyZW07XHJcbn1cclxuXHJcbi5zdi1uYXYtY29udCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMWEyNDtcclxuICBwYWRkaW5nOiAwLjFyZW0gNHJlbTtcclxufVxyXG5cclxuLnN2LW5hdi10b3Atc29pY29uIHtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnN2LW5hdi10b3AtcnQtY29udCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLXBhcmVudG1lbnU6aG92ZXIgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXIgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1zdWJtZW51ID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tc3VibWVudSA+IGE6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tc3VibWVudTpob3ZlciA+IGE6YWZ0ZXIge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3YtbWVudS1kcm9wZG93bi11bCB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbi5zdi1tZW51LWRyb3Bkb3duLXVsOmhvdmVyLFxyXG4uc3YtbWVudS1kcm9wZG93bi11bDphY3RpdmUge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5zdi1tZW51LWRyb3Bkb3duLXVsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSxcclxuLnN2LW1lbnUtZHJvcGRvd24tdWwgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duLXBhcmVudG1lbnUge1xyXG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLW5hdi1tZW51LWNvbnQgYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3YtbmF2LXRvcC1jb250IHtcclxuICBwYWRkaW5nOiAwLjFyZW0gNHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG59XHJcblxyXG4uc3YtbmF2LXRvcC1jb250IC5yb3cge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN2LXdlYi10b3BiYXItbGFuZy1jb250IHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5zdi13ZWItdG9wYmFyLWd0LWNvbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnN2LW1lbnUtZHJvcGRvd24tdWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbn1cclxuXHJcbi5zdi13ZWItbmF2LW1lbnUtY29udCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\dolton\study\svp-website\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1FVX":
    /*!***************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/organization/spirit-society/spirit-society.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: SpiritSocietyComponent */

    /***/
    function FVX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpiritSocietyComponent", function () {
        return SpiritSocietyComponent;
      });
      /* harmony import */


      var _assets_json_pages_organization_spirit_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../assets/json/pages/organization/spirit.json */
      "cDgg");

      var _assets_json_pages_organization_spirit_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../../assets/json/pages/organization/spirit.json */
      "cDgg", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");

      function SpiritSocietyComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-phototext-leftphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-phototext-rightphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-photo-text-landing-page", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;
          var parentIdx_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", parentIdx_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);
        }
      }

      var SpiritSocietyComponent = /*#__PURE__*/function () {
        function SpiritSocietyComponent(_sanitizer) {
          _classCallCheck(this, SpiritSocietyComponent);

          this._sanitizer = _sanitizer;
          this.jsonData = _assets_json_pages_organization_spirit_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(SpiritSocietyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preparePageData();
          }
        }, {
          key: "preparePageData",
          value: function preparePageData() {
            this.sectionList = this.jsonData['data'];
            this.attachmentObj = this.jsonData['attachmentData'];
          }
        }]);

        return SpiritSocietyComponent;
      }();

      SpiritSocietyComponent.ɵfac = function SpiritSocietyComponent_Factory(t) {
        return new (t || SpiritSocietyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      SpiritSocietyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SpiritSocietyComponent,
        selectors: [["app-spirit-society"]],
        decls: 2,
        vars: 1,
        consts: [[1, "sv-website-bd"], [3, "odd", 4, "ngFor", "ngForOf"], [3, "section", "attachmentObj"]],
        template: function SpiritSocietyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpiritSocietyComponent_section_1_Template, 4, 8, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sectionList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__["PhototextRightphotoComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["PhotoTextLandingPageComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlyaXQtc29jaWV0eS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "2/6w":
    /*!*********************************************************!*\
      !*** ./src/assets/json/pages/organization/founder.json ***!
      \*********************************************************/

    /*! exports provided: data, attachmentData, default */

    /***/
    function w(module) {
      module.exports = JSON.parse("{\"data\":[{\"name\":\"Founder\",\"text\":null,\"postList\":[{\"id\":1001,\"name\":\"\",\"desc\":null,\"text\":null,\"buttonText\":null,\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-landingPage\"}}},{\"name\":\"About Founder\",\"text\":null,\"postList\":[{\"id\":1002,\"name\":\"Frederic Ozanam\",\"desc\":\"Frederic Ozanam was born on April 1813 in Milan, to Jean and Marie Ozanam. He was the fifth child of 14 Children, one of only three to reach adulthood. His family, which was of Jewish origin, had been settled in the region around Lyon, France for many centuries. An ancestor Frederic, Jacques Ozanam (1640 – 1717) was a noted mathematician. \",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"Founder - In his youth\",\"text\":null,\"postList\":[{\"id\":1003,\"name\":\"In his youth\",\"desc\":\"In his youth he experienced a period of doubt regarding the Catholic faith, during which he was strongly influenced by one of his teachers at the College de Lyon, the priest Abbe Noirot. While still a student, Frédéric took up journalism and contributed considerably to Bailly's Tribune catholique, which became L'Univers, a French Catholic daily newspaper that adopted a strongly ultramontane position.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}},{\"name\":\"Founder - Education\",\"text\":null,\"postList\":[{\"id\":1004,\"name\":\"Education\",\"desc\":\"Ozanam received the degrees of Bachelor of Laws in 1934, Bachelor of Arts in 1835 and Doctor of Laws in 1836. His father, who had wanted him to study law, died on May12, 1837. Although he preferred literature, Frederic worked in the legal profession in order to support his mother, and was admitted to the Bar in Lyon in 1837. Still, he also pursued his personal interest, and in 1839 he obtained the degree of Doctor of Letters\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"Founder -How he started\",\"text\":null,\"postList\":[{\"id\":1005,\"name\":\"How he started\",\"desc\":\"Ozanam and his friends revived a discussion group called a \\\"Society of Good Studies\\\" and their attentions turned frequently to the social teachings of the Gospel. One voice issued the challenge, \\\"What is your church doing now? What is she doing for the poor of Paris? Show us your works and we will believe you!\\\". As a consequence, in May 1833 Frédéric and a group of other young men founded the charitable Society of Saint Vincent de Paul.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}}],\"attachmentData\":{\"1001\":{\"path\":\"../../../../assets/images/organization/founder/founder.jpg\"},\"1002\":{\"path\":\"../../../../assets/images/organization/founder/frederic-ozanam.jpg\"},\"1003\":{\"path\":\"../../../../assets/images/organization/founder/in-his-youth.jpg\"},\"1004\":{\"path\":\"../../../../assets/images/organization/founder/education.jpg\"},\"1005\":{\"path\":\"../../../../assets/images/organization/founder/how-he-started.jpg\"}}}");
      /***/
    },

    /***/
    "281W":
    /*!******************************************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/photo-text-landing-page/photo-text-landing-page.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: PhotoTextLandingPageComponent */

    /***/
    function W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoTextLandingPageComponent", function () {
        return PhotoTextLandingPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function PhotoTextLandingPageComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.attachmentObj[post_r2.id] && ctx_r1.attachmentObj[post_r2.id].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2["desc"]);
        }
      }

      function PhotoTextLandingPageComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoTextLandingPageComponent_div_0_div_1_Template, 11, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var PhotoTextLandingPageComponent = /*#__PURE__*/function () {
        function PhotoTextLandingPageComponent() {
          _classCallCheck(this, PhotoTextLandingPageComponent);

          this.section = new Object();
        }

        _createClass(PhotoTextLandingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PhotoTextLandingPageComponent;
      }();

      PhotoTextLandingPageComponent.ɵfac = function PhotoTextLandingPageComponent_Factory(t) {
        return new (t || PhotoTextLandingPageComponent)();
      };

      PhotoTextLandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhotoTextLandingPageComponent,
        selectors: [["app-photo-text-landing-page"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-website-sec", 4, "ngIf"], [1, "sv-website-sec"], [4, "ngFor", "ngForOf"], ["cols", "1", "rowHeight", "40rem"], [1, "sv-wb-pto-img", 3, "src"], ["color", "#FFF", 1, "sv-wb-ptlp-card"], ["wmAnimate", "bounceIn", "aos", "", 1, "sv-wb-ptlp-title"], [1, "sv-wb-ptlp-text"]],
        template: function PhotoTextLandingPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoTextLandingPageComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "photoText-landingPage");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
        styles: [".sv-website-sec[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n}\r\n\r\n.sv-wb-pto-img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.sv-wb-ptlp-card[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  float: right;\r\n  margin: -15rem 4rem 0 0;\r\n  padding: 2rem;\r\n  color: white;\r\n  background: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\n.sv-wb-ptlp-title[_ngcontent-%COMP%] {\r\n  font-family: \"Great Vibes\", cursive;\r\n  font-size: 4.625rem;\r\n}\r\n\r\n.sv-wb-ptlp-text[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n  letter-spacing: 0.7px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .sv-website-sec[_ngcontent-%COMP%] {\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .sv-wb-ptlp-title[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .sv-wb-ptlp-card[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    margin: -27rem 0 0 0;\r\n    padding: 0rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLXRleHQtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InBob3RvLXRleHQtbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Ytd2Vic2l0ZS1zZWMge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc3Ytd2ItcHRvLWltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3Ytd2ItcHRscC1jYXJkIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IC0xNXJlbSA0cmVtIDAgMDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc3Ytd2ItcHRscC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR3JlYXQgVmliZXNcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDQuNjI1cmVtO1xyXG59XHJcblxyXG4uc3Ytd2ItcHRscC10ZXh0IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zdi13ZWJzaXRlLXNlYyB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuXHJcbiAgLnN2LXdiLXB0bHAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnN2LXdiLXB0bHAtY2FyZCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgbWFyZ2luOiAtMjdyZW0gMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "32AM":
    /*!**********************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/article/article.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ArticleComponent */

    /***/
    function AM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
        return ArticleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-quill */
      "CzEO");

      function ArticleComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "quill-view-html", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", post_r2["text"]);
        }
      }

      function ArticleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleComponent_div_0_div_1_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var ArticleComponent = /*#__PURE__*/function () {
        function ArticleComponent(_router) {
          _classCallCheck(this, ArticleComponent);

          this._router = _router;
          this.section = new Object();
        }

        _createClass(ArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ArticleComponent;
      }();

      ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
        return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticleComponent,
        selectors: [["app-article"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-web-sec", 4, "ngIf"], [1, "sv-web-sec"], ["class", "row sv-row sv-wb-wid-art-cont", 4, "ngFor", "ngForOf"], [1, "row", "sv-row", "sv-wb-wid-art-cont"], ["theme", "snow", 3, "content"]],
        template: function ArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticleComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "article");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillViewHTMLComponent"]],
        styles: [".sv-wb-wid-art-cont[_ngcontent-%COMP%] {\r\n  padding: 7rem 10rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Ytd2Itd2lkLWFydC1jb250IHtcclxuICBwYWRkaW5nOiA3cmVtIDEwcmVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "53W2":
    /*!**************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/quotetext/quotetext.component.ts ***!
      \**************************************************************************/

    /*! exports provided: QuotetextComponent */

    /***/
    function W2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuotetextComponent", function () {
        return QuotetextComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QuotetextComponent = /*#__PURE__*/function () {
        function QuotetextComponent() {
          _classCallCheck(this, QuotetextComponent);

          this.section = new Object();
        }

        _createClass(QuotetextComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QuotetextComponent;
      }();

      QuotetextComponent.ɵfac = function QuotetextComponent_Factory(t) {
        return new (t || QuotetextComponent)();
      };

      QuotetextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuotetextComponent,
        selectors: [["app-quotetext"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 2,
        vars: 0,
        template: function QuotetextComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quotetext works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90ZXRleHQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "6OFg":
    /*!****************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/catalogue/catalogue.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CatalogueComponent */

    /***/
    function OFg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogueComponent", function () {
        return CatalogueComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CatalogueComponent = /*#__PURE__*/function () {
        function CatalogueComponent() {
          _classCallCheck(this, CatalogueComponent);
        }

        _createClass(CatalogueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CatalogueComponent;
      }();

      CatalogueComponent.ɵfac = function CatalogueComponent_Factory(t) {
        return new (t || CatalogueComponent)();
      };

      CatalogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CatalogueComponent,
        selectors: [["app-catalogue"]],
        decls: 2,
        vars: 0,
        template: function CatalogueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "catalogue works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9ndWUuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "6rPC":
    /*!************************************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/phototext-rightphoto/phototext-rightphoto.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: PhototextRightphotoComponent */

    /***/
    function rPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhototextRightphotoComponent", function () {
        return PhototextRightphotoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function PhototextRightphotoComponent_div_0_div_1_mat_card_actions_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2["buttonText"]);
        }
      }

      function PhototextRightphotoComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PhototextRightphotoComponent_div_0_div_1_mat_card_actions_11_Template, 3, 1, "mat-card-actions", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2["desc"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r2["buttonText"] != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.attachmentObj[post_r2.id] && ctx_r1.attachmentObj[post_r2.id].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PhototextRightphotoComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhototextRightphotoComponent_div_0_div_1_Template, 15, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var PhototextRightphotoComponent = /*#__PURE__*/function () {
        function PhototextRightphotoComponent(_router) {
          _classCallCheck(this, PhototextRightphotoComponent);

          this._router = _router;
          this.section = new Object();
        }

        _createClass(PhototextRightphotoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PhototextRightphotoComponent;
      }();

      PhototextRightphotoComponent.ɵfac = function PhototextRightphotoComponent_Factory(t) {
        return new (t || PhototextRightphotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      PhototextRightphotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhototextRightphotoComponent,
        selectors: [["app-phototext-rightphoto"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-website-sec", 4, "ngIf"], [1, "sv-website-sec"], ["class", "sv-post-pt-rp-cont", 4, "ngFor", "ngForOf"], [1, "sv-post-pt-rp-cont"], [1, "row"], [1, "sv-col", "col-lg-7", "col-md-7", "col-sm-12"], ["data-aos", "zoom-in-right", "data-aos-duration", "1000", 1, "sv-post-pt-textcont"], ["class", "sv-post-pt-buttoncont", 4, "ngIf"], [1, "sv-col", "col-lg-5", "col-md-5", "col-sm-12"], ["data-aos", "zoom-in-left", "data-aos-duration", "1000", 1, "sv-post-pt-img-cont"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], [1, "sv-post-pt-buttoncont"], [1, "sv-pt-lp-wid-act-btn"]],
        template: function PhototextRightphotoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhototextRightphotoComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "photoText-rightPhoto");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"]],
        styles: [".sv-website-sec[_ngcontent-%COMP%] {\r\n  padding: 7rem 5rem;\r\n}\r\n\r\n.sv-post-pt-rp-cont[_ngcontent-%COMP%]   .sv-col[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.sv-post-pt-rp-cont[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n.sv-post-pt-textcont[_ngcontent-%COMP%] {\r\n  padding: 3rem;\r\n}\r\n\r\n.sv-post-pt-textcont[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.sv-post-pt-textcont[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  margin: 1rem;\r\n  line-height: 1.8rem;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.sv-pt-lp-wid-act-btn[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  margin-left: 1.5rem;\r\n  font-size: 16px;\r\n}\r\n\r\n.sv-pt-lp-wid-act-btn[_ngcontent-%COMP%]:hover {\r\n  color: #0056b3;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .sv-website-sec[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvdGV4dC1yaWdodHBob3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoicGhvdG90ZXh0LXJpZ2h0cGhvdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdi13ZWJzaXRlLXNlYyB7XHJcbiAgcGFkZGluZzogN3JlbSA1cmVtO1xyXG59XHJcblxyXG4uc3YtcG9zdC1wdC1ycC1jb250IC5zdi1jb2wge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zdi1wb3N0LXB0LXJwLWNvbnQgLm1hdC1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc3YtcG9zdC1wdC10ZXh0Y29udCB7XHJcbiAgcGFkZGluZzogM3JlbTtcclxufVxyXG5cclxuLnN2LXBvc3QtcHQtdGV4dGNvbnQgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uc3YtcG9zdC1wdC10ZXh0Y29udCAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnN2LXB0LWxwLXdpZC1hY3QtYnRuIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnN2LXB0LWxwLXdpZC1hY3QtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzAwNTZiMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc3Ytd2Vic2l0ZS1zZWMge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "7gmU":
    /*!*****************************************************!*\
      !*** ./src/app/layout/content/content.component.ts ***!
      \*****************************************************/

    /*! exports provided: ContentComponent */

    /***/
    function gmU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
        return ContentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ContentComponent = /*#__PURE__*/function () {
        function ContentComponent() {
          _classCallCheck(this, ContentComponent);
        }

        _createClass(ContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContentComponent;
      }();

      ContentComponent.ɵfac = function ContentComponent_Factory(t) {
        return new (t || ContentComponent)();
      };

      ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentComponent,
        selectors: [["app-content"]],
        decls: 1,
        vars: 0,
        template: function ContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "7tRi":
    /*!******************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/news-events/national-council/national-council.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: NationalCouncilComponent */

    /***/
    function tRi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NationalCouncilComponent", function () {
        return NationalCouncilComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NationalCouncilComponent = /*#__PURE__*/function () {
        function NationalCouncilComponent() {
          _classCallCheck(this, NationalCouncilComponent);
        }

        _createClass(NationalCouncilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NationalCouncilComponent;
      }();

      NationalCouncilComponent.ɵfac = function NationalCouncilComponent_Factory(t) {
        return new (t || NationalCouncilComponent)();
      };

      NationalCouncilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NationalCouncilComponent,
        selectors: [["app-national-council"]],
        decls: 2,
        vars: 0,
        template: function NationalCouncilComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "national-council works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXRpb25hbC1jb3VuY2lsLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AT17":
    /*!**********************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/conferences/conferences.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ConferencesComponent */

    /***/
    function AT17(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConferencesComponent", function () {
        return ConferencesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConferencesComponent = /*#__PURE__*/function () {
        function ConferencesComponent() {
          _classCallCheck(this, ConferencesComponent);
        }

        _createClass(ConferencesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConferencesComponent;
      }();

      ConferencesComponent.ɵfac = function ConferencesComponent_Factory(t) {
        return new (t || ConferencesComponent)();
      };

      ConferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConferencesComponent,
        selectors: [["app-conferences"]],
        decls: 2,
        vars: 0,
        template: function ConferencesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "conferences works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25mZXJlbmNlcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "C4Ke":
    /*!**************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/news-events/reachout/reachout.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ReachoutComponent */

    /***/
    function C4Ke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReachoutComponent", function () {
        return ReachoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReachoutComponent = /*#__PURE__*/function () {
        function ReachoutComponent() {
          _classCallCheck(this, ReachoutComponent);
        }

        _createClass(ReachoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReachoutComponent;
      }();

      ReachoutComponent.ɵfac = function ReachoutComponent_Factory(t) {
        return new (t || ReachoutComponent)();
      };

      ReachoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReachoutComponent,
        selectors: [["app-reachout"]],
        decls: 2,
        vars: 0,
        template: function ReachoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reachout works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFjaG91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "G2xd":
    /*!************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/area-council/area-council.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: AreaCouncilComponent */

    /***/
    function G2xd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaCouncilComponent", function () {
        return AreaCouncilComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AreaCouncilComponent = /*#__PURE__*/function () {
        function AreaCouncilComponent() {
          _classCallCheck(this, AreaCouncilComponent);
        }

        _createClass(AreaCouncilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AreaCouncilComponent;
      }();

      AreaCouncilComponent.ɵfac = function AreaCouncilComponent_Factory(t) {
        return new (t || AreaCouncilComponent)();
      };

      AreaCouncilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AreaCouncilComponent,
        selectors: [["app-area-council"]],
        decls: 2,
        vars: 0,
        template: function AreaCouncilComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "area-council works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLWNvdW5jaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "GO9B":
    /*!**********************************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/phototext-leftphoto/phototext-leftphoto.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: PhototextLeftphotoComponent */

    /***/
    function GO9B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhototextLeftphotoComponent", function () {
        return PhototextLeftphotoComponent;
      });
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! aos */
      "9a8T");
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function PhototextLeftphotoComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.attachmentObj[post_r2.id] && ctx_r1.attachmentObj[post_r2.id].path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r2["desc"], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r2["buttonText"]);
        }
      }

      function PhototextLeftphotoComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PhototextLeftphotoComponent_div_0_div_1_Template, 17, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var PhototextLeftphotoComponent = /*#__PURE__*/function () {
        function PhototextLeftphotoComponent(_router) {
          _classCallCheck(this, PhototextLeftphotoComponent);

          this._router = _router;
          this.section = new Object();
        }

        _createClass(PhototextLeftphotoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
          }
        }]);

        return PhototextLeftphotoComponent;
      }();

      PhototextLeftphotoComponent.ɵfac = function PhototextLeftphotoComponent_Factory(t) {
        return new (t || PhototextLeftphotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      PhototextLeftphotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PhototextLeftphotoComponent,
        selectors: [["app-phototext-leftphoto"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-website-sec", 4, "ngIf"], [1, "sv-website-sec"], ["class", "sv-post-pt-lp-cont", 4, "ngFor", "ngForOf"], [1, "sv-post-pt-lp-cont"], [1, "row", "justify-content-center"], [1, "sv-col", "col-lg-5", "col-md-5"], ["data-aos", "zoom-in-right", "data-aos-duration", "1000", 1, "sv-post-pt-img-cont"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], [1, "sv-col", "col-lg-7", "col-md-7"], ["data-aos", "zoom-in-left", "data-aos-duration", "1000", 1, "sv-post-pt-textcont"], [1, "sv-pt-lp-wid-act-btn"]],
        template: function PhototextLeftphotoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PhototextLeftphotoComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.section && ctx.section["widget"] && ctx.section["widget"].type.itemValue == "photoText-leftPhoto");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"]],
        styles: [".sv-website-sec[_ngcontent-%COMP%] {\r\n  padding: 7rem 5rem;\r\n}\r\n\r\n.sv-post-pt-lp-cont[_ngcontent-%COMP%]   .sv-col[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.sv-post-pt-lp-cont[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n.sv-post-pt-textcont[_ngcontent-%COMP%] {\r\n  padding: 3rem;\r\n}\r\n\r\n.sv-post-pt-textcont[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%], .sv-post-pt-textcont[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.sv-post-pt-textcont[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  margin: 1rem;\r\n  line-height: 1.8rem;\r\n}\r\n\r\n.mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .sv-website-sec[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n}\r\n\r\n.sv-pt-lp-wid-act-btn[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  font-size: 16px;\r\n}\r\n\r\n.sv-pt-lp-wid-act-btn[_ngcontent-%COMP%]:hover {\r\n  color: #0056b3;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvdGV4dC1sZWZ0cGhvdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJwaG90b3RleHQtbGVmdHBob3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Ytd2Vic2l0ZS1zZWMge1xyXG4gIHBhZGRpbmc6IDdyZW0gNXJlbTtcclxufVxyXG5cclxuLnN2LXBvc3QtcHQtbHAtY29udCAuc3YtY29sIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3YtcG9zdC1wdC1scC1jb250IC5tYXQtY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN2LXBvc3QtcHQtdGV4dGNvbnQge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuXHJcbi5zdi1wb3N0LXB0LXRleHRjb250IC5tYXQtY2FyZC1jb250ZW50LFxyXG4uc3YtcG9zdC1wdC10ZXh0Y29udCAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zdi1wb3N0LXB0LXRleHRjb250IC5tYXQtY2FyZC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnN2LXdlYnNpdGUtc2VjIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc3YtcHQtbHAtd2lkLWFjdC1idG4ge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnN2LXB0LWxwLXdpZC1hY3QtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogIzAwNTZiMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "GOkW":
    /*!**********************************************!*\
      !*** ./src/assets/json/pages/home/home.json ***!
      \**********************************************/

    /*! exports provided: data, attachmentData, default */

    /***/
    function GOkW(module) {
      module.exports = JSON.parse("{\"data\":[{\"name\":\"home-landing-page\",\"postList\":[{\"id\":1001}],\"widget\":{\"type\":{\"itemValue\":\"photoText-landingPage\"},\"properties\":null}},{\"name\":\"who we are\",\"postList\":[{\"id\":1002,\"name\":\"Who we are\",\"desc\":\"Vincentians are a branch of the Society of St. Vincent de Paul which is an international Christian lay voluntary organization dedicated to tackling poverty and disadvantage by providing practical assistance to those in need – irrespective of ideology, faith, ethnicity, age or gender.\",\"text\":null,\"buttonText\":\"\",\"buttonRoute\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"what we do\",\"postList\":[{\"id\":1003,\"name\":\"What we do\",\"desc\":\"We offer friendship and practical help to all we visit, without regard to faith, ethnicity, status or sexual orientation. Motivated by our faith, we seek  those in need and offer them all the assistance. We visit them in their homes, in hospital and in care homes on a regular basis and offer additional practical support such as food, furniture or financial help where needed.\",\"text\":null,\"buttonText\":\"\",\"buttonRoute\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}},{\"name\":\"What we aim\",\"postList\":[{\"id\":1004,\"name\":\"What we aim\",\"desc\":\"Our aim is to tackle poverty in all its forms through the provision of practical assistance to those in need. The concept of need is broader than financial hardship, so visiting people who are sick, lonely, in prison, or suffering from addiction is also a significant proportion of our work. The essence of our work is person-to-person contact and spending time with people is our greatest gift.\",\"text\":null,\"buttonText\":\"\",\"buttonRoute\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"Project for self independence\",\"text\":\"A recent project for a needy family. It will help them earn their daily bread.\",\"postList\":[{\"id\":1005,\"name\":\"photo-grid-photo-01\",\"desc\":null,\"text\":null,\"buttonText\":\"\",\"buttonRoute\":\"\",\"buttonUrl\":null},{\"id\":1006,\"name\":\"photo-grid-photo-02\",\"desc\":null,\"text\":null,\"buttonText\":\"\",\"buttonRoute\":\"\",\"buttonUrl\":null},{\"id\":1007,\"name\":\"photo-grid-photo-03\",\"desc\":null,\"text\":null,\"buttonText\":\"\",\"buttonRoute\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoGrid\"}}}],\"attachmentData\":{\"1001\":{\"path\":\"../../../../assets/images/home/landing-praying-hands.jpg\"},\"1002\":{\"path\":\"../../../../assets/images/home/who-we-are.jpg\"},\"1003\":{\"path\":\"../../../../assets/images/home/what-we-do.jpg\"},\"1004\":{\"path\":\"../../../../assets/images/home/what-we-aim.jpg\"},\"1005\":{\"path\":\"../../../../assets/images/home/bhuigaon-shop-01.jpg\"},\"1006\":{\"path\":\"../../../../assets/images/home/bhuigaon-shop-02.jpg\"},\"1007\":{\"path\":\"../../../../assets/images/home/bhuigaon-shop-03.jpg\"}}}");
      /***/
    },

    /***/
    "LCJa":
    /*!******************************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/phototext-overlap/phototext-overlap.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: PhototextOverlapComponent */

    /***/
    function LCJa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhototextOverlapComponent", function () {
        return PhototextOverlapComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");

      function PhototextOverlapComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.attachmentObj[post_r2.id] && ctx_r1.attachmentObj[post_r2.id].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PhototextOverlapComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhototextOverlapComponent_div_0_div_1_Template, 5, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var PhototextOverlapComponent = /*#__PURE__*/function () {
        function PhototextOverlapComponent() {
          _classCallCheck(this, PhototextOverlapComponent);

          this.section = new Object();
        }

        _createClass(PhototextOverlapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PhototextOverlapComponent;
      }();

      PhototextOverlapComponent.ɵfac = function PhototextOverlapComponent_Factory(t) {
        return new (t || PhototextOverlapComponent)();
      };

      PhototextOverlapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhototextOverlapComponent,
        selectors: [["app-phototext-overlap"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-website-sec", 4, "ngIf"], [1, "sv-website-sec"], [4, "ngFor", "ngForOf"], ["cols", "1", "rowHeight", "40rem"], ["alt", "Photo of a Shiba Inu", 1, "sv-wb-pto-img", 3, "src"]],
        template: function PhototextOverlapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhototextOverlapComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "photoTextOverlap");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]],
        styles: [".sv-wb-pto-img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  \r\n  .sv-wb-pto-img[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n    width: 90%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvdGV4dC1vdmVybGFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InBob3RvdGV4dC1vdmVybGFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Ytd2ItcHRvLWltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgXHJcbiAgLnN2LXdiLXB0by1pbWcge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "LF2P":
    /*!*************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/activities/twinning/twinning.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: TwinningComponent */

    /***/
    function LF2P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwinningComponent", function () {
        return TwinningComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TwinningComponent = /*#__PURE__*/function () {
        function TwinningComponent() {
          _classCallCheck(this, TwinningComponent);
        }

        _createClass(TwinningComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TwinningComponent;
      }();

      TwinningComponent.ɵfac = function TwinningComponent_Factory(t) {
        return new (t || TwinningComponent)();
      };

      TwinningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwinningComponent,
        selectors: [["app-twinning"]],
        decls: 2,
        vars: 0,
        template: function TwinningComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "twinning works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0d2lubmluZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "LWkk":
    /*!**************************************************************!*\
      !*** ./src/assets/json/pages/organization/get-involved.json ***!
      \**************************************************************/

    /*! exports provided: data, attachmentData, default */

    /***/
    function LWkk(module) {
      module.exports = JSON.parse("{\"data\":[{\"name\":\"get-involved-landing\",\"text\":null,\"postList\":[{\"id\":1001,\"name\":\"Get Involved\",\"desc\":null,\"text\":null,\"buttonText\":null,\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-landingPage\"}}},{\"name\":\"give-time-or-skills\",\"text\":null,\"postList\":[{\"id\":1002,\"name\":\"Give you time or skills\",\"desc\":\"We're committed to helping combat poverty and tackling isolation, giving those in need in society a chance at living a happier life. There are many ways you can get involved by giving your time or skills. You can become a member of the society. Your local SVP group will identify opportunities in your local area to help you get the most out of your experience. You can also volunteer with the SVP. We have a wide number of opportunities for voluntary work and welcome your time, skills and enthusiasm.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"become-a-member\",\"text\":null,\"postList\":[{\"id\":1003,\"name\":\"Become a member\",\"desc\":\"The SVP relies on the support of its volunteers. More members are needed to ensure that its work continues to grow and flourish. Giving your time not only benefits those that the SVP supports, but will also bring you great joy. By becoming an SVP member you can make a real difference to the lives of those near you who are suffering. Membership is open to anyone. We need volunteers who are, above all, caring and compassionate, who are good listeners, able to keep confidences, and who are respectful and non-judgemental of others. Every member works as part of a team so they don’t have to cope on their own or deal with anything they can’t manage.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}},{\"name\":\"involve-young-people\",\"text\":null,\"postList\":[{\"id\":1004,\"name\":\"Involve young people\",\"desc\":\"We believe that young people can use their voices to make a difference in their communities. It might sound like a cliché, but being involved with the SVP really makes you realise how much you have to be happy about in your own life. By engaging in charity, young members use their abilities and ideas to get involved in causes they care about and make a positive change in their parishes. Through voluntary work, Youth SVP members not only make a positive difference, but learn new skills, build lasting friendships and develop their faith which is why we encourage young people to join and experience the work of the society.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"involve-your-parish\",\"text\":null,\"postList\":[{\"id\":1005,\"name\":\"Involve your parish\",\"desc\":\"Is there an SVP group in your parish? If there isn't, maybe you could discuss starting one with us. We'll be happy to work with you to set everything up, attract members and guide and train them. Perhaps if you live in a prosperous area you might feel there isn't work for the Society to do locally. However, even in well-to-do places, there can be hidden poverty, unseen behind closed doors. There may also be lonely and isolated people who can go for weeks without talking to another living soul. And if there are any hospitals or care homes locally, there will be numerous people who currently have no visitors.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}}],\"attachmentData\":{\"1001\":{\"path\":\"../../../../assets/images/organization/spirit/sea-man-spirit.jpg\"},\"1002\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-united.jpg\"},\"1003\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-united.jpg\"},\"1004\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-united.jpg\"},\"1005\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-united.jpg\"}}}");
      /***/
    },

    /***/
    "Lm3q":
    /*!******************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/activities/activities.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ActivitiesComponent */

    /***/
    function Lm3q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function () {
        return ActivitiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ActivitiesComponent = /*#__PURE__*/function () {
        function ActivitiesComponent() {
          _classCallCheck(this, ActivitiesComponent);
        }

        _createClass(ActivitiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ActivitiesComponent;
      }();

      ActivitiesComponent.ɵfac = function ActivitiesComponent_Factory(t) {
        return new (t || ActivitiesComponent)();
      };

      ActivitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActivitiesComponent,
        selectors: [["app-activities"]],
        decls: 2,
        vars: 0,
        template: function ActivitiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "activities works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Mp+q":
    /*!***************************************************!*\
      !*** ./src/app/website-mod/website-mod.module.ts ***!
      \***************************************************/

    /*! exports provided: WebsiteModModule */

    /***/
    function MpQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsiteModModule", function () {
        return WebsiteModModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _material_mod_material_mod_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../material-mod/material-mod.module */
      "nt8i");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-quill */
      "CzEO");
      /* harmony import */


      var ng_image_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-image-slider */
      "yf9x");
      /* harmony import */


      var _website_website_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./website/website.component */
      "WPIf");
      /* harmony import */


      var _web_widgets_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./web-widgets/carousal/carousal.component */
      "wLeR");
      /* harmony import */


      var _web_widgets_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./web-widgets/cards/cards.component */
      "knDI");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_phototext_overlap_phototext_overlap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./web-widgets/phototext-overlap/phototext-overlap.component */
      "LCJa");
      /* harmony import */


      var _web_widgets_notice_notice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./web-widgets/notice/notice.component */
      "xASk");
      /* harmony import */


      var _web_widgets_quotetext_quotetext_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./web-widgets/quotetext/quotetext.component */
      "53W2");
      /* harmony import */


      var _web_widgets_textblog_textblog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./web-widgets/textblog/textblog.component */
      "aE08");
      /* harmony import */


      var _web_widgets_photogrid_photogrid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./web-widgets/photogrid/photogrid.component */
      "ea8r");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");
      /* harmony import */


      var _web_widgets_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./web-widgets/blog-article/blog-article.component */
      "lbIu");
      /* harmony import */


      var _web_widgets_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./web-widgets/timeline/timeline.component */
      "mdvw");
      /* harmony import */


      var _web_widgets_documents_listing_documents_listing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./web-widgets/documents-listing/documents-listing.component */
      "hlps");
      /* harmony import */


      var _web_widgets_article_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./web-widgets/article/article.component */
      "32AM");
      /* harmony import */


      var _website_routing__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./website.routing */
      "PKHz");
      /* harmony import */


      var _website_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./website/pages/home/home.component */
      "kH0S");
      /* harmony import */


      var _website_pages_organization_organization_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./website/pages/organization/organization.component */
      "fMb4");
      /* harmony import */


      var _website_pages_organization_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./website/pages/organization/about-us/about-us.component */
      "p975");
      /* harmony import */


      var _website_pages_organization_founder_founder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./website/pages/organization/founder/founder.component */
      "PXnD");
      /* harmony import */


      var _website_pages_organization_patron_patron_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./website/pages/organization/patron/patron.component */
      "Ylpi");
      /* harmony import */


      var _website_pages_organization_spirit_society_spirit_society_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./website/pages/organization/spirit-society/spirit-society.component */
      "1FVX");
      /* harmony import */


      var _website_pages_activities_activities_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./website/pages/activities/activities.component */
      "Lm3q");
      /* harmony import */


      var _website_pages_activities_twinning_twinning_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./website/pages/activities/twinning/twinning.component */
      "LF2P");
      /* harmony import */


      var _website_pages_activities_scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./website/pages/activities/scholarship/scholarship.component */
      "Q6UA");
      /* harmony import */


      var _website_pages_activities_projects_projects_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./website/pages/activities/projects/projects.component */
      "QIRC");
      /* harmony import */


      var _website_pages_councils_info_councils_info_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./website/pages/councils-info/councils-info.component */
      "T1UQ");
      /* harmony import */


      var _website_pages_councils_info_central_council_central_council_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./website/pages/councils-info/central-council/central-council.component */
      "j5kb");
      /* harmony import */


      var _website_pages_councils_info_area_council_area_council_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./website/pages/councils-info/area-council/area-council.component */
      "G2xd");
      /* harmony import */


      var _website_pages_councils_info_conferences_conferences_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/conferences.component */
      "AT17");
      /* harmony import */


      var _website_pages_councils_info_conferences_north_vasai_north_vasai_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/north-vasai/north-vasai.component */
      "WPAq");
      /* harmony import */


      var _website_pages_councils_info_conferences_south_vasai_south_vasai_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/south-vasai/south-vasai.component */
      "XW0T");
      /* harmony import */


      var _website_pages_councils_info_conferences_east_vasai_east_vasai_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/east-vasai/east-vasai.component */
      "xUap");
      /* harmony import */


      var _website_pages_councils_info_conferences_mission_vasai_mission_vasai_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/mission-vasai/mission-vasai.component */
      "bPxz");
      /* harmony import */


      var _website_pages_news_events_news_events_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./website/pages/news-events/news-events.component */
      "g2Jg");
      /* harmony import */


      var _website_pages_news_events_central_council_news_central_council_news_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./website/pages/news-events/central-council-news/central-council-news.component */
      "skT8");
      /* harmony import */


      var _website_pages_news_events_national_council_national_council_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./website/pages/news-events/national-council/national-council.component */
      "7tRi");
      /* harmony import */


      var _website_pages_news_events_international_council_international_council_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./website/pages/news-events/international-council/international-council.component */
      "S7Kd");
      /* harmony import */


      var _website_pages_news_events_reachout_reachout_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./website/pages/news-events/reachout/reachout.component */
      "C4Ke");
      /* harmony import */


      var _website_pages_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./website/pages/catalogue/catalogue.component */
      "6OFg");
      /* harmony import */


      var _website_pages_catalogue_forms_forms_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./website/pages/catalogue/forms/forms.component */
      "karr");
      /* harmony import */


      var _website_pages_catalogue_reports_reports_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./website/pages/catalogue/reports/reports.component */
      "VsM5");
      /* harmony import */


      var _website_pages_organization_get_involved_get_involved_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./website/pages/organization/get-involved/get-involved.component */
      "qtgP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var WebsiteModModule = function WebsiteModModule() {
        _classCallCheck(this, WebsiteModModule);
      };

      WebsiteModModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineNgModule"]({
        type: WebsiteModModule
      });
      WebsiteModModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineInjector"]({
        factory: function WebsiteModModule_Factory(t) {
          return new (t || WebsiteModModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_mod_material_mod_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_2__["QuillModule"].forRoot(), ng_image_slider__WEBPACK_IMPORTED_MODULE_3__["NgImageSliderModule"], _website_routing__WEBPACK_IMPORTED_MODULE_19__["WebsiteRouting"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵsetNgModuleScope"](WebsiteModModule, {
          declarations: [_website_website_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteComponent"], _web_widgets_carousal_carousal_component__WEBPACK_IMPORTED_MODULE_5__["CarousalComponent"], _web_widgets_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_7__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_8__["PhototextRightphotoComponent"], _web_widgets_phototext_overlap_phototext_overlap_component__WEBPACK_IMPORTED_MODULE_9__["PhototextOverlapComponent"], _web_widgets_notice_notice_component__WEBPACK_IMPORTED_MODULE_10__["NoticeComponent"], _web_widgets_quotetext_quotetext_component__WEBPACK_IMPORTED_MODULE_11__["QuotetextComponent"], _web_widgets_textblog_textblog_component__WEBPACK_IMPORTED_MODULE_12__["TextblogComponent"], _web_widgets_photogrid_photogrid_component__WEBPACK_IMPORTED_MODULE_13__["PhotogridComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_14__["PhotoTextLandingPageComponent"], _web_widgets_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_15__["BlogArticleComponent"], _web_widgets_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_16__["TimelineComponent"], _web_widgets_documents_listing_documents_listing_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsListingComponent"], _web_widgets_article_article_component__WEBPACK_IMPORTED_MODULE_18__["ArticleComponent"], _website_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _website_pages_organization_organization_component__WEBPACK_IMPORTED_MODULE_21__["OrganizationComponent"], _website_pages_organization_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_22__["AboutUsComponent"], _website_pages_organization_founder_founder_component__WEBPACK_IMPORTED_MODULE_23__["FounderComponent"], _website_pages_organization_patron_patron_component__WEBPACK_IMPORTED_MODULE_24__["PatronComponent"], _website_pages_organization_spirit_society_spirit_society_component__WEBPACK_IMPORTED_MODULE_25__["SpiritSocietyComponent"], _website_pages_activities_activities_component__WEBPACK_IMPORTED_MODULE_26__["ActivitiesComponent"], _website_pages_activities_twinning_twinning_component__WEBPACK_IMPORTED_MODULE_27__["TwinningComponent"], _website_pages_activities_scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_28__["ScholarshipComponent"], _website_pages_activities_projects_projects_component__WEBPACK_IMPORTED_MODULE_29__["ProjectsComponent"], _website_pages_councils_info_councils_info_component__WEBPACK_IMPORTED_MODULE_30__["CouncilsInfoComponent"], _website_pages_councils_info_central_council_central_council_component__WEBPACK_IMPORTED_MODULE_31__["CentralCouncilComponent"], _website_pages_councils_info_area_council_area_council_component__WEBPACK_IMPORTED_MODULE_32__["AreaCouncilComponent"], _website_pages_councils_info_conferences_conferences_component__WEBPACK_IMPORTED_MODULE_33__["ConferencesComponent"], _website_pages_councils_info_conferences_north_vasai_north_vasai_component__WEBPACK_IMPORTED_MODULE_34__["NorthVasaiComponent"], _website_pages_councils_info_conferences_south_vasai_south_vasai_component__WEBPACK_IMPORTED_MODULE_35__["SouthVasaiComponent"], _website_pages_councils_info_conferences_east_vasai_east_vasai_component__WEBPACK_IMPORTED_MODULE_36__["EastVasaiComponent"], _website_pages_councils_info_conferences_mission_vasai_mission_vasai_component__WEBPACK_IMPORTED_MODULE_37__["MissionVasaiComponent"], _website_pages_news_events_news_events_component__WEBPACK_IMPORTED_MODULE_38__["NewsEventsComponent"], _website_pages_news_events_central_council_news_central_council_news_component__WEBPACK_IMPORTED_MODULE_39__["CentralCouncilNewsComponent"], _website_pages_news_events_national_council_national_council_component__WEBPACK_IMPORTED_MODULE_40__["NationalCouncilComponent"], _website_pages_news_events_international_council_international_council_component__WEBPACK_IMPORTED_MODULE_41__["InternationalCouncilComponent"], _website_pages_news_events_reachout_reachout_component__WEBPACK_IMPORTED_MODULE_42__["ReachoutComponent"], _website_pages_catalogue_catalogue_component__WEBPACK_IMPORTED_MODULE_43__["CatalogueComponent"], _website_pages_catalogue_forms_forms_component__WEBPACK_IMPORTED_MODULE_44__["FormsComponent"], _website_pages_catalogue_reports_reports_component__WEBPACK_IMPORTED_MODULE_45__["ReportsComponent"], _website_pages_organization_get_involved_get_involved_component__WEBPACK_IMPORTED_MODULE_46__["GetInvolvedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _material_mod_material_mod_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_2__["QuillModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_3__["NgImageSliderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_48__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "OahZ":
    /*!*******************************************************!*\
      !*** ./src/assets/json/pages/organization/about.json ***!
      \*******************************************************/

    /*! exports provided: data, attachmentData, default */

    /***/
    function OahZ(module) {
      module.exports = JSON.parse("{\"data\":[{\"name\":\"About Us\",\"text\":null,\"postList\":[{\"id\":1001,\"name\":\"\",\"desc\":null,\"text\":null,\"buttonText\":null,\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-landingPage\"}}},{\"name\":\"Where we started\",\"text\":null,\"postList\":[{\"id\":1002,\"name\":\"Where we started\",\"desc\":\"We started in a small neighborhood in the parish of Manikpur and slowly spread across the vast lands on Bassien. While spreading its roots across the lands, the society faced various challenges which we overcame with the help of people from varied backgrounds.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"Who we are\",\"text\":null,\"postList\":[{\"id\":1003,\"name\":\"Who we are\",\"desc\":\"We the Vincentians are a branch of the Society of St. Vincent de Paul which is an international Christian lay voluntary organization dedicated to tackling poverty and disadvantage by providing practical assistance to those in need – irrespective of ideology, faith, ethnicity, age or gender.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}},{\"name\":\"What we do\",\"text\":null,\"postList\":[{\"id\":1004,\"name\":\"What we do\",\"desc\":\"We offer friendship and practical help to all we visit, without regard to faith, ethnicity, status or sexual orientation. Motivated by our faith, we seek  those in need and offer them all the assistance. We visit them in their homes, in hospital and in care homes on a regular basis and offer additional practical support such as food, furniture or financial help where needed.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"What we aim\",\"text\":null,\"postList\":[{\"id\":1005,\"name\":\"What we aim\",\"desc\":\"Our aim is to tackle poverty in all its forms through the provision of practical assistance to those in need. The concept of need is broader than financial hardship, so visiting people who are sick, lonely, in prison, or suffering from addiction is also a significant proportion of our work. The essence of our work is person-to-person contact and spending time with people is our greatest gift.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}}],\"attachmentData\":{\"1001\":{\"path\":\"../../../../assets/images/organization/about/about-us-lp.jpg\"},\"1002\":{\"path\":\"../../../../assets/images/organization/about/vasai-fort.jpg\"},\"1003\":{\"path\":\"../../../../assets/images/home/who-we-are.jpg\"},\"1004\":{\"path\":\"../../../../assets/images/home/what-we-do.jpg\"},\"1005\":{\"path\":\"../../../../assets/images/home/what-we-aim.jpg\"}}}");
      /***/
    },

    /***/
    "PKHz":
    /*!************************************************!*\
      !*** ./src/app/website-mod/website.routing.ts ***!
      \************************************************/

    /*! exports provided: routes, WebsiteRouting */

    /***/
    function PKHz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsiteRouting", function () {
        return WebsiteRouting;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _website_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./website/pages/home/home.component */
      "kH0S");
      /* harmony import */


      var _website_pages_organization_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./website/pages/organization/about-us/about-us.component */
      "p975");
      /* harmony import */


      var _website_pages_organization_founder_founder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./website/pages/organization/founder/founder.component */
      "PXnD");
      /* harmony import */


      var _website_pages_organization_patron_patron_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./website/pages/organization/patron/patron.component */
      "Ylpi");
      /* harmony import */


      var _website_pages_organization_spirit_society_spirit_society_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./website/pages/organization/spirit-society/spirit-society.component */
      "1FVX");
      /* harmony import */


      var _website_pages_activities_twinning_twinning_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./website/pages/activities/twinning/twinning.component */
      "LF2P");
      /* harmony import */


      var _website_pages_activities_scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./website/pages/activities/scholarship/scholarship.component */
      "Q6UA");
      /* harmony import */


      var _website_pages_activities_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./website/pages/activities/projects/projects.component */
      "QIRC");
      /* harmony import */


      var _website_pages_councils_info_central_council_central_council_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./website/pages/councils-info/central-council/central-council.component */
      "j5kb");
      /* harmony import */


      var _website_pages_councils_info_area_council_area_council_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./website/pages/councils-info/area-council/area-council.component */
      "G2xd");
      /* harmony import */


      var _website_pages_councils_info_conferences_north_vasai_north_vasai_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/north-vasai/north-vasai.component */
      "WPAq");
      /* harmony import */


      var _website_pages_councils_info_conferences_south_vasai_south_vasai_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/south-vasai/south-vasai.component */
      "XW0T");
      /* harmony import */


      var _website_pages_councils_info_conferences_east_vasai_east_vasai_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/east-vasai/east-vasai.component */
      "xUap");
      /* harmony import */


      var _website_pages_councils_info_conferences_mission_vasai_mission_vasai_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./website/pages/councils-info/conferences/mission-vasai/mission-vasai.component */
      "bPxz");
      /* harmony import */


      var _website_pages_news_events_central_council_news_central_council_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./website/pages/news-events/central-council-news/central-council-news.component */
      "skT8");
      /* harmony import */


      var _website_pages_news_events_national_council_national_council_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./website/pages/news-events/national-council/national-council.component */
      "7tRi");
      /* harmony import */


      var _website_pages_news_events_international_council_international_council_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./website/pages/news-events/international-council/international-council.component */
      "S7Kd");
      /* harmony import */


      var _website_pages_news_events_reachout_reachout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./website/pages/news-events/reachout/reachout.component */
      "C4Ke");
      /* harmony import */


      var _website_pages_catalogue_forms_forms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./website/pages/catalogue/forms/forms.component */
      "karr");
      /* harmony import */


      var _website_pages_catalogue_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./website/pages/catalogue/reports/reports.component */
      "VsM5");
      /* harmony import */


      var _website_pages_organization_get_involved_get_involved_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./website/pages/organization/get-involved/get-involved.component */
      "qtgP");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _website_pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: 'org/about',
        component: _website_pages_organization_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]
      }, {
        path: 'org/founder',
        component: _website_pages_organization_founder_founder_component__WEBPACK_IMPORTED_MODULE_3__["FounderComponent"]
      }, {
        path: 'org/patron',
        component: _website_pages_organization_patron_patron_component__WEBPACK_IMPORTED_MODULE_4__["PatronComponent"]
      }, {
        path: 'org/spirit',
        component: _website_pages_organization_spirit_society_spirit_society_component__WEBPACK_IMPORTED_MODULE_5__["SpiritSocietyComponent"]
      }, {
        path: 'org/get-involved',
        component: _website_pages_organization_get_involved_get_involved_component__WEBPACK_IMPORTED_MODULE_21__["GetInvolvedComponent"]
      }, {
        path: 'act/twinning',
        component: _website_pages_activities_twinning_twinning_component__WEBPACK_IMPORTED_MODULE_6__["TwinningComponent"]
      }, {
        path: 'act/scholarship',
        component: _website_pages_activities_scholarship_scholarship_component__WEBPACK_IMPORTED_MODULE_7__["ScholarshipComponent"]
      }, {
        path: 'act/projects',
        component: _website_pages_activities_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
      }, {
        path: 'council/central',
        component: _website_pages_councils_info_central_council_central_council_component__WEBPACK_IMPORTED_MODULE_9__["CentralCouncilComponent"]
      }, {
        path: 'council/area',
        component: _website_pages_councils_info_area_council_area_council_component__WEBPACK_IMPORTED_MODULE_10__["AreaCouncilComponent"]
      }, {
        path: 'council/conf/north',
        component: _website_pages_councils_info_conferences_north_vasai_north_vasai_component__WEBPACK_IMPORTED_MODULE_11__["NorthVasaiComponent"]
      }, {
        path: 'council/conf/south',
        component: _website_pages_councils_info_conferences_south_vasai_south_vasai_component__WEBPACK_IMPORTED_MODULE_12__["SouthVasaiComponent"]
      }, {
        path: 'council/conf/east',
        component: _website_pages_councils_info_conferences_east_vasai_east_vasai_component__WEBPACK_IMPORTED_MODULE_13__["EastVasaiComponent"]
      }, {
        path: 'council/conf/mission',
        component: _website_pages_councils_info_conferences_mission_vasai_mission_vasai_component__WEBPACK_IMPORTED_MODULE_14__["MissionVasaiComponent"]
      }, {
        path: 'news/central',
        component: _website_pages_news_events_central_council_news_central_council_news_component__WEBPACK_IMPORTED_MODULE_15__["CentralCouncilNewsComponent"]
      }, {
        path: 'news/national',
        component: _website_pages_news_events_national_council_national_council_component__WEBPACK_IMPORTED_MODULE_16__["NationalCouncilComponent"]
      }, {
        path: 'news/international',
        component: _website_pages_news_events_international_council_international_council_component__WEBPACK_IMPORTED_MODULE_17__["InternationalCouncilComponent"]
      }, {
        path: 'news/reachout',
        component: _website_pages_news_events_reachout_reachout_component__WEBPACK_IMPORTED_MODULE_18__["ReachoutComponent"]
      }, {
        path: 'catalogue/forms',
        component: _website_pages_catalogue_forms_forms_component__WEBPACK_IMPORTED_MODULE_19__["FormsComponent"]
      }, {
        path: 'catalogue/reports',
        component: _website_pages_catalogue_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__["ReportsComponent"]
      }];

      var WebsiteRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
      /***/

    },

    /***/
    "PXnD":
    /*!*************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/organization/founder/founder.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: FounderComponent */

    /***/
    function PXnD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FounderComponent", function () {
        return FounderComponent;
      });
      /* harmony import */


      var _assets_json_pages_organization_founder_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../assets/json/pages/organization/founder.json */
      "2/6w");

      var _assets_json_pages_organization_founder_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../../assets/json/pages/organization/founder.json */
      "2/6w", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");
      /* harmony import */


      var _web_widgets_photogrid_photogrid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../web-widgets/photogrid/photogrid.component */
      "ea8r");

      function FounderComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-phototext-leftphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-phototext-rightphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-photo-text-landing-page", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-photogrid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;
          var parentIdx_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", parentIdx_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);
        }
      }

      var FounderComponent = /*#__PURE__*/function () {
        function FounderComponent(_sanitizer) {
          _classCallCheck(this, FounderComponent);

          this._sanitizer = _sanitizer;
          this.jsonData = _assets_json_pages_organization_founder_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(FounderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preparePageData();
          }
        }, {
          key: "preparePageData",
          value: function preparePageData() {
            this.sectionList = this.jsonData['data'];
            this.attachmentObj = this.jsonData['attachmentData'];
          }
        }]);

        return FounderComponent;
      }();

      FounderComponent.ɵfac = function FounderComponent_Factory(t) {
        return new (t || FounderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      FounderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FounderComponent,
        selectors: [["app-founder"]],
        decls: 2,
        vars: 1,
        consts: [[1, "sv-website-bd"], [3, "odd", 4, "ngFor", "ngForOf"], [3, "section", "attachmentObj"]],
        template: function FounderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FounderComponent_section_1_Template, 5, 10, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sectionList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__["PhototextRightphotoComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["PhotoTextLandingPageComponent"], _web_widgets_photogrid_photogrid_component__WEBPACK_IMPORTED_MODULE_7__["PhotogridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3VuZGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Q6UA":
    /*!*******************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/activities/scholarship/scholarship.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ScholarshipComponent */

    /***/
    function Q6UA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScholarshipComponent", function () {
        return ScholarshipComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ScholarshipComponent = /*#__PURE__*/function () {
        function ScholarshipComponent() {
          _classCallCheck(this, ScholarshipComponent);
        }

        _createClass(ScholarshipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ScholarshipComponent;
      }();

      ScholarshipComponent.ɵfac = function ScholarshipComponent_Factory(t) {
        return new (t || ScholarshipComponent)();
      };

      ScholarshipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScholarshipComponent,
        selectors: [["app-scholarship"]],
        decls: 2,
        vars: 0,
        template: function ScholarshipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "scholarship works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2hvbGFyc2hpcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "QIRC":
    /*!*************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/activities/projects/projects.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function QIRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent() {
          _classCallCheck(this, ProjectsComponent);
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)();
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 2,
        vars: 0,
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "S7Kd":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/news-events/international-council/international-council.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: InternationalCouncilComponent */

    /***/
    function S7Kd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InternationalCouncilComponent", function () {
        return InternationalCouncilComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InternationalCouncilComponent = /*#__PURE__*/function () {
        function InternationalCouncilComponent() {
          _classCallCheck(this, InternationalCouncilComponent);
        }

        _createClass(InternationalCouncilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InternationalCouncilComponent;
      }();

      InternationalCouncilComponent.ɵfac = function InternationalCouncilComponent_Factory(t) {
        return new (t || InternationalCouncilComponent)();
      };

      InternationalCouncilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InternationalCouncilComponent,
        selectors: [["app-international-council"]],
        decls: 2,
        vars: 0,
        template: function InternationalCouncilComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "international-council works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm5hdGlvbmFsLWNvdW5jaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout/layout.component */
      "uswQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'svp-website';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "T1UQ":
    /*!************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/councils-info.component.ts ***!
      \************************************************************************************/

    /*! exports provided: CouncilsInfoComponent */

    /***/
    function T1UQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouncilsInfoComponent", function () {
        return CouncilsInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CouncilsInfoComponent = /*#__PURE__*/function () {
        function CouncilsInfoComponent() {
          _classCallCheck(this, CouncilsInfoComponent);
        }

        _createClass(CouncilsInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CouncilsInfoComponent;
      }();

      CouncilsInfoComponent.ɵfac = function CouncilsInfoComponent_Factory(t) {
        return new (t || CouncilsInfoComponent)();
      };

      CouncilsInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CouncilsInfoComponent,
        selectors: [["app-councils-info"]],
        decls: 2,
        vars: 0,
        template: function CouncilsInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "councils-info works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VuY2lscy1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "VsM5":
    /*!**********************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/catalogue/reports/reports.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function VsM5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent() {
          _classCallCheck(this, ReportsComponent);
        }

        _createClass(ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportsComponent;
      }();

      ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
        return new (t || ReportsComponent)();
      };

      ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportsComponent,
        selectors: [["app-reports"]],
        decls: 2,
        vars: 0,
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reports works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "WPAq":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/conferences/north-vasai/north-vasai.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: NorthVasaiComponent */

    /***/
    function WPAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NorthVasaiComponent", function () {
        return NorthVasaiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NorthVasaiComponent = /*#__PURE__*/function () {
        function NorthVasaiComponent() {
          _classCallCheck(this, NorthVasaiComponent);
        }

        _createClass(NorthVasaiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NorthVasaiComponent;
      }();

      NorthVasaiComponent.ɵfac = function NorthVasaiComponent_Factory(t) {
        return new (t || NorthVasaiComponent)();
      };

      NorthVasaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NorthVasaiComponent,
        selectors: [["app-north-vasai"]],
        decls: 2,
        vars: 0,
        template: function NorthVasaiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "north-vasai works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3J0aC12YXNhaS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "WPIf":
    /*!**********************************************************!*\
      !*** ./src/app/website-mod/website/website.component.ts ***!
      \**********************************************************/

    /*! exports provided: WebsiteComponent */

    /***/
    function WPIf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function () {
        return WebsiteComponent;
      });
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! aos */
      "9a8T");
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WebsiteComponent = /*#__PURE__*/function () {
        function WebsiteComponent() {
          _classCallCheck(this, WebsiteComponent);
        }

        _createClass(WebsiteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
          }
        }]);

        return WebsiteComponent;
      }();

      WebsiteComponent.ɵfac = function WebsiteComponent_Factory(t) {
        return new (t || WebsiteComponent)();
      };

      WebsiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WebsiteComponent,
        selectors: [["app-website"]],
        decls: 0,
        vars: 0,
        template: function WebsiteComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWJzaXRlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "XW0T":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/conferences/south-vasai/south-vasai.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: SouthVasaiComponent */

    /***/
    function XW0T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SouthVasaiComponent", function () {
        return SouthVasaiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SouthVasaiComponent = /*#__PURE__*/function () {
        function SouthVasaiComponent() {
          _classCallCheck(this, SouthVasaiComponent);
        }

        _createClass(SouthVasaiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SouthVasaiComponent;
      }();

      SouthVasaiComponent.ɵfac = function SouthVasaiComponent_Factory(t) {
        return new (t || SouthVasaiComponent)();
      };

      SouthVasaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SouthVasaiComponent,
        selectors: [["app-south-vasai"]],
        decls: 2,
        vars: 0,
        template: function SouthVasaiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "south-vasai works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3V0aC12YXNhaS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "Ylpi":
    /*!***********************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/organization/patron/patron.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: PatronComponent */

    /***/
    function Ylpi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatronComponent", function () {
        return PatronComponent;
      });
      /* harmony import */


      var _assets_json_pages_organization_patron_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../assets/json/pages/organization/patron.json */
      "mmn1");

      var _assets_json_pages_organization_patron_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../../assets/json/pages/organization/patron.json */
      "mmn1", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");

      function PatronComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-phototext-leftphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-phototext-rightphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-photo-text-landing-page", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;
          var parentIdx_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", parentIdx_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);
        }
      }

      var PatronComponent = /*#__PURE__*/function () {
        function PatronComponent(_sanitizer) {
          _classCallCheck(this, PatronComponent);

          this._sanitizer = _sanitizer;
          this.jsonData = _assets_json_pages_organization_patron_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(PatronComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preparePageData();
          }
        }, {
          key: "preparePageData",
          value: function preparePageData() {
            this.sectionList = this.jsonData['data'];
            this.attachmentObj = this.jsonData['attachmentData'];
          }
        }]);

        return PatronComponent;
      }();

      PatronComponent.ɵfac = function PatronComponent_Factory(t) {
        return new (t || PatronComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      PatronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PatronComponent,
        selectors: [["app-patron"]],
        decls: 2,
        vars: 1,
        consts: [[1, "sv-website-bd"], [3, "odd", 4, "ngFor", "ngForOf"], [3, "section", "attachmentObj"]],
        template: function PatronComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PatronComponent_section_1_Template, 4, 8, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sectionList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__["PhototextRightphotoComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["PhotoTextLandingPageComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRyb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _material_mod_material_mod_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./material-mod/material-mod.module */
      "nt8i");
      /* harmony import */


      var _website_mod_website_mod_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./website-mod/website-mod.module */
      "Mp+q");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./layout/layout.component */
      "uswQ");
      /* harmony import */


      var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./layout/navbar/navbar.component */
      "/bvK");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./layout/footer/footer.component */
      "kVkw");
      /* harmony import */


      var _layout_content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout/content/content.component */
      "7gmU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _material_mod_material_mod_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModModule"], _website_mod_website_mod_module__WEBPACK_IMPORTED_MODULE_5__["WebsiteModModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _layout_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _material_mod_material_mod_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModModule"], _website_mod_website_mod_module__WEBPACK_IMPORTED_MODULE_5__["WebsiteModModule"]]
        });
      })();
      /***/

    },

    /***/
    "aE08":
    /*!************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/textblog/textblog.component.ts ***!
      \************************************************************************/

    /*! exports provided: TextblogComponent */

    /***/
    function aE08(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextblogComponent", function () {
        return TextblogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TextblogComponent = /*#__PURE__*/function () {
        function TextblogComponent() {
          _classCallCheck(this, TextblogComponent);
        }

        _createClass(TextblogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextblogComponent;
      }();

      TextblogComponent.ɵfac = function TextblogComponent_Factory(t) {
        return new (t || TextblogComponent)();
      };

      TextblogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextblogComponent,
        selectors: [["app-textblog"]],
        decls: 2,
        vars: 0,
        template: function TextblogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "textblog works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YmxvZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "bPxz":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/conferences/mission-vasai/mission-vasai.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: MissionVasaiComponent */

    /***/
    function bPxz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MissionVasaiComponent", function () {
        return MissionVasaiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MissionVasaiComponent = /*#__PURE__*/function () {
        function MissionVasaiComponent() {
          _classCallCheck(this, MissionVasaiComponent);
        }

        _createClass(MissionVasaiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MissionVasaiComponent;
      }();

      MissionVasaiComponent.ɵfac = function MissionVasaiComponent_Factory(t) {
        return new (t || MissionVasaiComponent)();
      };

      MissionVasaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MissionVasaiComponent,
        selectors: [["app-mission-vasai"]],
        decls: 2,
        vars: 0,
        template: function MissionVasaiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mission-vasai works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW9uLXZhc2FpLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "cDgg":
    /*!********************************************************!*\
      !*** ./src/assets/json/pages/organization/spirit.json ***!
      \********************************************************/

    /*! exports provided: data, attachmentData, default */

    /***/
    function cDgg(module) {
      module.exports = JSON.parse("{\"data\":[{\"name\":\"spirit-society-landing\",\"text\":null,\"postList\":[{\"id\":1001,\"name\":\"Spirit of the society\",\"desc\":null,\"text\":null,\"buttonText\":null,\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-landingPage\"}}},{\"name\":\"we-are-united\",\"text\":null,\"postList\":[{\"id\":1002,\"name\":\"We are united\",\"desc\":\"We the vincentians are united in an international society of charity by their spirit of poverty, humility and sharing. Inspired by Gospel values, the society of St. Vincent de Paul, a Catholic Lay organization, leads women and men to join together to grow spiritually by offering person to person service to those who are needy and suffering in the tradition of its founder, blessed Frederic Ozanam and patron St. Vincent de Paul.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"we-are-a-family\",\"text\":null,\"postList\":[{\"id\":1003,\"name\":\"We are a family\",\"desc\":\"We the vincentians are a reflection of the whole family of God, members, who are drawn from every ethnic and cultural background, age group, and economic level. Vincentians are united in an international society of charity by their spirit of poverty, humility and sharing, which is nourished by prayer and reflection, mutually supportive gatherings and adherence to a basic Rule.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}},{\"name\":\"we-are-everywhere\",\"text\":null,\"postList\":[{\"id\":1004,\"name\":\"We are everywhere\",\"desc\":\"We the vincentians reach the length and breadth of the globe and try to bring light the the life of those in darkness and in need. Vincentians witness God’s love by embracing all works of charity and justice. The society collaborates with other people of good will in relieving need and addressing its causes, making no distinction in those served because, in them, Vincentians see the face of Christ.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}}],\"attachmentData\":{\"1001\":{\"path\":\"../../../../assets/images/organization/spirit/sea-man-spirit.jpg\"},\"1002\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-united.jpg\"},\"1003\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-family.jpg\"},\"1004\":{\"path\":\"../../../../assets/images/organization/spirit/we-are-everywhere.jpg\"}}}");
      /***/
    },

    /***/
    "ea8r":
    /*!**************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/photogrid/photogrid.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PhotogridComponent */

    /***/
    function ea8r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotogridComponent", function () {
        return PhotogridComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function PhotogridComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.attachmentObj[post_r2.id] && ctx_r1.attachmentObj[post_r2.id].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PhotogridComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PhotogridComponent_div_0_div_9_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.section["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.section["text"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var PhotogridComponent = /*#__PURE__*/function () {
        function PhotogridComponent() {
          _classCallCheck(this, PhotogridComponent);

          this.section = new Object();
        }

        _createClass(PhotogridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PhotogridComponent;
      }();

      PhotogridComponent.ɵfac = function PhotogridComponent_Factory(t) {
        return new (t || PhotogridComponent)();
      };

      PhotogridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhotogridComponent,
        selectors: [["app-photogrid"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-web-sec", 4, "ngIf"], [1, "sv-web-sec"], [1, "row"], [1, "sv-card-no-border"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "fade-left", "data-aos-duration", "1000"], ["wmAnimate", "bounceIn", 1, "row", "sv-row", "sv-web-phg-wid-phcont-row"], ["class", "col-lg-4 col-md-4 col-sm-12 sv-web-phg-wid-phcont", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-4", "col-sm-12", "sv-web-phg-wid-phcont"], ["data-aos", "flip-up", "data-aos-duration", "1000"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"]],
        template: function PhotogridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotogridComponent_div_0_Template, 10, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "photoGrid");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"]],
        styles: [".sv-web-phg-wid-phcont[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 1.2rem;\r\n}\r\n\r\n.sv-web-sec[_ngcontent-%COMP%] {\r\n  margin: 3rem 1rem;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%] {\r\n  border: none;\r\n  box-shadow: none;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin-bottom: 1.3rem;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\n\r\n.sv-web-phg-wid-phcont[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.sv-web-phg-wid-phcont[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n}\r\n\r\n.sv-web-phg-wid-phcont-row[_ngcontent-%COMP%] {\r\n  padding: 1rem 8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoicGhvdG9ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Ytd2ViLXBoZy13aWQtcGhjb250IHtcclxuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLXNlYyB7XHJcbiAgbWFyZ2luOiAzcmVtIDFyZW07XHJcbn1cclxuXHJcbi5zdi1jYXJkLW5vLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN2LWNhcmQtbm8tYm9yZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuM3JlbTtcclxufVxyXG5cclxuLnN2LWNhcmQtbm8tYm9yZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uc3Ytd2ViLXBoZy13aWQtcGhjb250IC5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnN2LXdlYi1waGctd2lkLXBoY29udCAucm93IHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5zdi13ZWItcGhnLXdpZC1waGNvbnQtcm93IHtcclxuICBwYWRkaW5nOiAxcmVtIDhyZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "fMb4":
    /*!**********************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/organization/organization.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: OrganizationComponent */

    /***/
    function fMb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function () {
        return OrganizationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrganizationComponent = /*#__PURE__*/function () {
        function OrganizationComponent() {
          _classCallCheck(this, OrganizationComponent);
        }

        _createClass(OrganizationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrganizationComponent;
      }();

      OrganizationComponent.ɵfac = function OrganizationComponent_Factory(t) {
        return new (t || OrganizationComponent)();
      };

      OrganizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrganizationComponent,
        selectors: [["app-organization"]],
        decls: 2,
        vars: 0,
        template: function OrganizationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "organization works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "g2Jg":
    /*!********************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/news-events/news-events.component.ts ***!
      \********************************************************************************/

    /*! exports provided: NewsEventsComponent */

    /***/
    function g2Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsEventsComponent", function () {
        return NewsEventsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewsEventsComponent = /*#__PURE__*/function () {
        function NewsEventsComponent() {
          _classCallCheck(this, NewsEventsComponent);
        }

        _createClass(NewsEventsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NewsEventsComponent;
      }();

      NewsEventsComponent.ɵfac = function NewsEventsComponent_Factory(t) {
        return new (t || NewsEventsComponent)();
      };

      NewsEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewsEventsComponent,
        selectors: [["app-news-events"]],
        decls: 2,
        vars: 0,
        template: function NewsEventsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "news-events works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWV2ZW50cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "hlps":
    /*!******************************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/documents-listing/documents-listing.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: DocumentsListingComponent */

    /***/
    function hlps(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsListingComponent", function () {
        return DocumentsListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function DocumentsListingComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentsListingComponent_div_0_div_9_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var post_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.downloadDocument(post_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2["name"], " ");
        }
      }

      function DocumentsListingComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DocumentsListingComponent_div_0_div_9_Template, 7, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.section["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var DocumentsListingComponent = /*#__PURE__*/function () {
        function DocumentsListingComponent() {
          _classCallCheck(this, DocumentsListingComponent);

          this.section = new Object();
        }

        _createClass(DocumentsListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadDocument",
          value: function downloadDocument(_post) {
            var attData = this.attachmentObj[_post['id']];
            attData = attData.unsanitizedData.split(',')[1];

            if (_post['name'].indexOf('.pdf') > 0) {
              var file = new Blob([attData.trim()], {
                type: 'application/pdf'
              });
              var url = window.URL.createObjectURL(file);
              var openWindow = window.open(url);
            }
          }
        }]);

        return DocumentsListingComponent;
      }();

      DocumentsListingComponent.ɵfac = function DocumentsListingComponent_Factory(t) {
        return new (t || DocumentsListingComponent)();
      };

      DocumentsListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocumentsListingComponent,
        selectors: [["app-documents-listing"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-web-sec", 4, "ngIf"], [1, "sv-web-sec"], [1, "row"], [1, "sv-card-no-border", "mat-elevation-z4"], [1, "row", "sv-row"], [1, "col-lg-12"], ["class", "row sv-row", 4, "ngFor", "ngForOf"], [1, "col-lg-10", "col-md-10", "col-sm-10"], [1, "col-lg-2", "col-md-2", "col-sm-2"], ["mat-button", "", "color", "primary", 3, "click"]],
        template: function DocumentsListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocumentsListingComponent_div_0_Template, 10, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "document-listing");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: [".sv-web-sec[_ngcontent-%COMP%] {\r\n  margin: 4rem;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 3rem 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImRvY3VtZW50cy1saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Ytd2ViLXNlYyB7XHJcbiAgbWFyZ2luOiA0cmVtO1xyXG59XHJcblxyXG4uc3YtY2FyZC1uby1ib3JkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "j5kb":
    /*!******************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/central-council/central-council.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: CentralCouncilComponent */

    /***/
    function j5kb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CentralCouncilComponent", function () {
        return CentralCouncilComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CentralCouncilComponent = /*#__PURE__*/function () {
        function CentralCouncilComponent() {
          _classCallCheck(this, CentralCouncilComponent);
        }

        _createClass(CentralCouncilComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CentralCouncilComponent;
      }();

      CentralCouncilComponent.ɵfac = function CentralCouncilComponent_Factory(t) {
        return new (t || CentralCouncilComponent)();
      };

      CentralCouncilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CentralCouncilComponent,
        selectors: [["app-central-council"]],
        decls: 2,
        vars: 0,
        template: function CentralCouncilComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "central-council works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW50cmFsLWNvdW5jaWwuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "kH0S":
    /*!******************************************************************!*\
      !*** ./src/app/website-mod/website/pages/home/home.component.ts ***!
      \******************************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function kH0S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _assets_json_pages_home_home_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../assets/json/pages/home/home.json */
      "GOkW");

      var _assets_json_pages_home_home_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../assets/json/pages/home/home.json */
      "GOkW", 1);
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! aos */
      "9a8T");
      /* harmony import */


      var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");
      /* harmony import */


      var _web_widgets_photogrid_photogrid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../web-widgets/photogrid/photogrid.component */
      "ea8r");

      function HomeComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-phototext-leftphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-phototext-rightphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-photo-text-landing-page", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-photogrid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;
          var parentIdx_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("odd", parentIdx_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(_sanitizer) {
          _classCallCheck(this, HomeComponent);

          this._sanitizer = _sanitizer;
          this.jsonData = _assets_json_pages_home_home_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preparePageData();
            aos__WEBPACK_IMPORTED_MODULE_1___default.a.init();
          }
        }, {
          key: "preparePageData",
          value: function preparePageData() {
            this.sectionList = this.jsonData['data'];
            this.attachmentObj = this.jsonData['attachmentData'];
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 2,
        vars: 1,
        consts: [[1, "sv-website-bd"], [3, "odd", 4, "ngFor", "ngForOf"], [3, "section", "attachmentObj"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_section_1_Template, 5, 10, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sectionList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_5__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_6__["PhototextRightphotoComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["PhotoTextLandingPageComponent"], _web_widgets_photogrid_photogrid_component__WEBPACK_IMPORTED_MODULE_8__["PhotogridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "kVkw":
    /*!***************************************************!*\
      !*** ./src/app/layout/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function kVkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 69,
        vars: 0,
        consts: [[1, "sv-web-footer"], [1, "row", "sv-row", "sv-web-footer-det-cont"], [1, "col=lg-4", "col-md-4", "sv-col"], ["src", "assets/logo-youth.png", 1, "sv-footer-logo"], [1, "sv-web-ft-copyw"], [1, "far", "fa-copyright"], ["href", "www.instagram.com", 1, "sv-web-ft-soicon", "instagram"], [1, "fab", "fa-instagram"], ["href", "www.facebook.com", 1, "sv-web-ft-soicon", "facebook"], [1, "fab", "fa-facebook-square"], ["href", "www.youtube.com", 1, "sv-web-ft-soicon", "youtube"], [1, "fab", "fa-youtube"], [1, "col=lg-3", "col-md-3", "sv-col"], ["href", "#", 1, "sv-web-anc-btn"], [1, "col=lg-2", "col-md-2", "sv-col"], ["routerLink", "/org/about", 1, "sv-web-anc-btn"], ["routerLink", "/org/get-involved", 1, "sv-web-anc-btn"], ["href", "/request-help", 1, "sv-web-anc-btn"], ["mat-flat-button", "", "color", "warn"], [1, "row", "sv-row", "sv-web-ft-btmbar"], [1, "col"], [1, "fas", "fa-heart", "icon"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 2020, Society of St. Vincent de Paul, Vasai ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SVP Vasai Central Council Office");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Society of St. Vincent de Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remedy Church School");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Near Milagre Cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Remedy, Vasai West");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "401201");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Get in touch with us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Safeguarding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Community projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Members and Staff");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Media Enquiries");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Activities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "What we do");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Get involved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Request help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Donate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " for the welfare of our society");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: [".sv-footer-logo[_ngcontent-%COMP%] {\r\n  height: 10rem;\r\n  width: 52%;\r\n}\r\n\r\n.sv-web-footer-det-cont[_ngcontent-%COMP%] {\r\n  background-color: #f9f9f9;\r\n  padding: 4rem;\r\n}\r\n\r\n.sv-web-ft-copyw[_ngcontent-%COMP%] {\r\n  color: #666;\r\n  font-size: 0.775rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.sv-web-ft-soicon[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.sv-web-ft-btmbar[_ngcontent-%COMP%] {\r\n  background-color: #e8e8e8;\r\n}\r\n\r\n.sv-web-ft-btmbar[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.sv-web-ft-btmbar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  color: red;\r\n  font-size: 1.2rem;\r\n  margin: 0.8rem 0.5rem;\r\n}\r\n\r\n.sv-web-footer[_ngcontent-%COMP%]   .sv-col[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3YtZm9vdGVyLWxvZ28ge1xyXG4gIGhlaWdodDogMTByZW07XHJcbiAgd2lkdGg6IDUyJTtcclxufVxyXG5cclxuLnN2LXdlYi1mb290ZXItZGV0LWNvbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgcGFkZGluZzogNHJlbTtcclxufVxyXG5cclxuLnN2LXdlYi1mdC1jb3B5dyB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAwLjc3NXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLWZ0LXNvaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLWZ0LWJ0bWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxufVxyXG5cclxuLnN2LXdlYi1mdC1idG1iYXIgLmNvbCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN2LXdlYi1mdC1idG1iYXIgLmljb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luOiAwLjhyZW0gMC41cmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLWZvb3RlciAuc3YtY29sIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "karr":
    /*!******************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/catalogue/forms/forms.component.ts ***!
      \******************************************************************************/

    /*! exports provided: FormsComponent */

    /***/
    function karr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
        return FormsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormsComponent = /*#__PURE__*/function () {
        function FormsComponent() {
          _classCallCheck(this, FormsComponent);
        }

        _createClass(FormsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormsComponent;
      }();

      FormsComponent.ɵfac = function FormsComponent_Factory(t) {
        return new (t || FormsComponent)();
      };

      FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormsComponent,
        selectors: [["app-forms"]],
        decls: 2,
        vars: 0,
        template: function FormsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forms works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jtcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "knDI":
    /*!******************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/cards/cards.component.ts ***!
      \******************************************************************/

    /*! exports provided: CardsComponent */

    /***/
    function knDI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
        return CardsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function CardsComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.attachmentObj[post_r2.id] && ctx_r1.attachmentObj[post_r2.id].path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r2.desc, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r2["buttonText"]);
        }
      }

      function CardsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardsComponent_div_0_div_9_Template, 11, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.section["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.section["text"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.section["postList"]);
        }
      }

      var CardsComponent = /*#__PURE__*/function () {
        function CardsComponent(_router) {
          _classCallCheck(this, CardsComponent);

          this._router = _router;
          this.section = new Object();
        }

        _createClass(CardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardsComponent;
      }();

      CardsComponent.ɵfac = function CardsComponent_Factory(t) {
        return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardsComponent,
        selectors: [["app-cards"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-web-sec", 4, "ngIf"], [1, "sv-web-sec"], [1, "row"], [1, "sv-card-no-border"], [1, "row", "sv-cardswid-cardscont"], ["class", "col-lg-4 col-md-4 col-sm-12 sv-cardswid-card", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-4", "col-sm-12", "sv-cardswid-card"], ["mat-card-image", "", 3, "src"], [1, "sv-cardswid-act-btn"]],
        template: function CardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardsComponent_div_0_Template, 10, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section["widget"].type.itemValue == "cards");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"]],
        styles: [".sv-cardswid-cardscont[_ngcontent-%COMP%] {\r\n  padding: 1rem 4rem;\r\n}\r\n\r\n.sv-cardswid-card[_ngcontent-%COMP%] {\r\n  padding: 1rem 2rem;\r\n}\r\n\r\n.sv-web-sec[_ngcontent-%COMP%] {\r\n  margin: 3rem 1rem;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%] {\r\n  border: none;\r\n  box-shadow: none;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin-bottom: 1.3rem;\r\n}\r\n\r\n.sv-card-no-border[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\n\r\n.sv-cardswid-act-btn[_ngcontent-%COMP%] {\r\n  color: #007bff;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.sv-cardswid-act-btn[_ngcontent-%COMP%]:hover {\r\n  color: #0056b3;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2LWNhcmRzd2lkLWNhcmRzY29udCB7XHJcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG59XHJcblxyXG4uc3YtY2FyZHN3aWQtY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLXNlYyB7XHJcbiAgbWFyZ2luOiAzcmVtIDFyZW07XHJcbn1cclxuXHJcbi5zdi1jYXJkLW5vLWJvcmRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN2LWNhcmQtbm8tYm9yZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEuM3JlbTtcclxufVxyXG5cclxuLnN2LWNhcmQtbm8tYm9yZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uc3YtY2FyZHN3aWQtYWN0LWJ0biB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnN2LWNhcmRzd2lkLWFjdC1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA1NmIzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "lbIu":
    /*!********************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/blog-article/blog-article.component.ts ***!
      \********************************************************************************/

    /*! exports provided: BlogArticleComponent */

    /***/
    function lbIu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogArticleComponent", function () {
        return BlogArticleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-quill */
      "CzEO");

      var BlogArticleComponent = /*#__PURE__*/function () {
        function BlogArticleComponent() {
          _classCallCheck(this, BlogArticleComponent);

          this.post = {};
          this.attachment = {};
        }

        _createClass(BlogArticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlogArticleComponent;
      }();

      BlogArticleComponent.ɵfac = function BlogArticleComponent_Factory(t) {
        return new (t || BlogArticleComponent)();
      };

      BlogArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlogArticleComponent,
        selectors: [["app-blog-article"]],
        decls: 14,
        vars: 4,
        consts: [[1, "sv-website-bd"], [1, "sv-web-sec", "sv-web-article-sec-cont"], [1, "row", "sv-row", "sv-web-article-hdcont"], [1, "row", "sv-row"], ["mat-card-image", "", 1, "sv-web-article-img", 3, "src"], [1, "row", "sv-row", "sv-web-article-textcont"], ["theme", "snow", 3, "content"]],
        template: function BlogArticleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "quill-view-html", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post && ctx.post["name"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post && ctx.post["desc"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.attachment && ctx.attachment["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.post["text"]);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], ngx_quill__WEBPACK_IMPORTED_MODULE_2__["QuillViewHTMLComponent"]],
        styles: [".sv-web-article-sec-cont[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  padding: 3rem 1rem;\r\n  width: 70%;\r\n}\r\n\r\n.sv-web-article-sec-cont[_ngcontent-%COMP%]   .sv-web-article-img[_ngcontent-%COMP%] {\r\n  height: 20rem;\r\n}\r\n\r\n.sv-web-article-sec-cont[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n  margin: auto;\r\n  padding: 0;\r\n}\r\n\r\n.sv-web-article-sec-cont[_ngcontent-%COMP%]   .sv-web-article-textcont[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  line-height: 1.7rem;\r\n  text-align: justify;\r\n}\r\n\r\n.sv-web-article-hdcont[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctYXJ0aWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJibG9nLWFydGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdi13ZWItYXJ0aWNsZS1zZWMtY29udCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uc3Ytd2ViLWFydGljbGUtc2VjLWNvbnQgLnN2LXdlYi1hcnRpY2xlLWltZyB7XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxufVxyXG5cclxuLnN2LXdlYi1hcnRpY2xlLXNlYy1jb250IC5tYXQtY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnN2LXdlYi1hcnRpY2xlLXNlYy1jb250IC5zdi13ZWItYXJ0aWNsZS10ZXh0Y29udCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnN2LXdlYi1hcnRpY2xlLWhkY29udCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "mdvw":
    /*!************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/timeline/timeline.component.ts ***!
      \************************************************************************/

    /*! exports provided: TimelineComponent */

    /***/
    function mdvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
        return TimelineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TimelineComponent = /*#__PURE__*/function () {
        function TimelineComponent() {
          _classCallCheck(this, TimelineComponent);
        }

        _createClass(TimelineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TimelineComponent;
      }();

      TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
        return new (t || TimelineComponent)();
      };

      TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimelineComponent,
        selectors: [["app-timeline"]],
        decls: 0,
        vars: 0,
        template: function TimelineComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "mmn1":
    /*!********************************************************!*\
      !*** ./src/assets/json/pages/organization/patron.json ***!
      \********************************************************/

    /*! exports provided: data, attachmentData, default */

    /***/
    function mmn1(module) {
      module.exports = JSON.parse("{\"data\":[{\"name\":\"Our Patron\",\"text\":null,\"postList\":[{\"id\":1001,\"name\":\"\"}],\"widget\":{\"type\":{\"itemValue\":\"photoText-landingPage\"}}},{\"name\":\"vincent person info\",\"text\":null,\"postList\":[{\"id\":1002,\"name\":\"St. Vincent de Paul\",\"desc\":\"Vincent de paul was born in the small southern French town of Pouy (later renamed St. Vincent De Paul in his honour) on 24th April 1581 and ordained as a priest in 1600 at the age of 19. As a young man he ministered to the wealthy and powerful. However an appointment as chaplain to a poor parish, and to galley prisoners, inspired him to a vocation of working with those most marginalised and powerless.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-leftPhoto\"}}},{\"name\":\"About his life\",\"text\":null,\"postList\":[{\"id\":1003,\"name\":\"About his life\",\"desc\":\"Vincent urged his followers to bring God’s justice and love to people who were unable to live a full human life. Deal with the most urgent needs. Organize charity so that it is more efficient, teach reading and writing, educate with the aim of giving each the means of self support. Vincent de Paul died in Paris on 27th September 1660 at the age of 79 and was canonised on 16th June 1737 and, in 1883, the church designated him as the special patron of all charitable associations.\",\"text\":null,\"buttonText\":\"\",\"buttonUrl\":null}],\"widget\":{\"type\":{\"itemValue\":\"photoText-rightPhoto\"}}}],\"attachmentData\":{\"1001\":{\"path\":\"../../../../assets/images/organization/patron/patron-lp.jpg\"},\"1002\":{\"path\":\"../../../../assets/images/organization/patron/vincent-depaul.jpg\"},\"1003\":{\"path\":\"../../../../assets/images/organization/patron/about-vincent.jpg\"}}}");
      /***/
    },

    /***/
    "nt8i":
    /*!*****************************************************!*\
      !*** ./src/app/material-mod/material-mod.module.ts ***!
      \*****************************************************/

    /*! exports provided: MaterialModModule */

    /***/
    function nt8i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModModule", function () {
        return MaterialModModule;
      });
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]];

      var MaterialModModule = function MaterialModModule() {
        _classCallCheck(this, MaterialModModule);
      };

      MaterialModModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
        type: MaterialModModule
      });
      MaterialModModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
        factory: function MaterialModModule_Factory(t) {
          return new (t || MaterialModModule)();
        },
        imports: [[material], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](MaterialModModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"]]
        });
      })();
      /***/

    },

    /***/
    "oJL5":
    /*!****************************************!*\
      !*** ./src/assets/json/menu/menu.json ***!
      \****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, default */

    /***/
    function oJL5(module) {
      module.exports = JSON.parse("[{\"name\":\"Home\",\"route\":\"home\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Organization\",\"route\":null,\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[{\"name\":\"About\",\"route\":\"org/about\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Founder\",\"route\":\"org/founder\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Patron\",\"route\":\"org/patron\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Spirit of the Society\",\"route\":\"org/spirit\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Get Involved\",\"route\":\"org/get-involved\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]}]},{\"name\":\"Activities\",\"route\":null,\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[{\"name\":\"Twinning\",\"route\":\"act/twinning\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Scholarship\",\"route\":\"act/scholarship\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Projects\",\"route\":\"act/projects\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]}]},{\"name\":\"Council\",\"route\":null,\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[{\"name\":\"Central Council\",\"route\":\"council/central\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Area Councils\",\"route\":\"council/area\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Conferences\",\"route\":null,\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[{\"name\":\"North Vasai\",\"route\":\"council/conf/north\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"East Vasai\",\"route\":\"council/conf/east\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"South Vasai\",\"route\":\"council/conf/south\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Mission Vasai\",\"route\":\"council/conf/mission\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]}]}]},{\"name\":\"News and Events\",\"route\":null,\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[{\"name\":\"Central Council\",\"route\":\"news/central\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"National Council\",\"route\":\"news/national\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"International\",\"route\":\"news/international\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Reach Out\",\"route\":\"news/reachout\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]}]},{\"name\":\"Catalogue\",\"route\":null,\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[{\"name\":\"Forms\",\"route\":\"catalogue/forms\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]},{\"name\":\"Reports\",\"route\":\"catalogue/reports\",\"currentState\":\"Active\",\"icon\":null,\"childrenList\":[]}]}]");
      /***/
    },

    /***/
    "p975":
    /*!***************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/organization/about-us/about-us.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function p975(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
      });
      /* harmony import */


      var _assets_json_pages_organization_about_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../assets/json/pages/organization/about.json */
      "OahZ");

      var _assets_json_pages_organization_about_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../../assets/json/pages/organization/about.json */
      "OahZ", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");

      function AboutUsComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-phototext-leftphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-phototext-rightphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-photo-text-landing-page", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;
          var parentIdx_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", parentIdx_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);
        }
      }

      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent(_sanitizer) {
          _classCallCheck(this, AboutUsComponent);

          this._sanitizer = _sanitizer;
          this.jsonData = _assets_json_pages_organization_about_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preparePageData();
          }
        }, {
          key: "preparePageData",
          value: function preparePageData() {
            this.sectionList = this.jsonData['data'];
            this.attachmentObj = this.jsonData['attachmentData'];
          }
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
        return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AboutUsComponent,
        selectors: [["app-about-us"]],
        decls: 2,
        vars: 1,
        consts: [[1, "sv-website-bd"], [3, "odd", 4, "ngFor", "ngForOf"], [3, "section", "attachmentObj"]],
        template: function AboutUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutUsComponent_section_1_Template, 4, 8, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sectionList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_4__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_5__["PhototextRightphotoComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["PhotoTextLandingPageComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "qtgP":
    /*!***********************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/organization/get-involved/get-involved.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: GetInvolvedComponent */

    /***/
    function qtgP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetInvolvedComponent", function () {
        return GetInvolvedComponent;
      });
      /* harmony import */


      var _assets_json_pages_organization_get_involved_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../assets/json/pages/organization/get-involved.json */
      "LWkk");

      var _assets_json_pages_organization_get_involved_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../../../../../assets/json/pages/organization/get-involved.json */
      "LWkk", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-leftphoto/phototext-leftphoto.component */
      "GO9B");
      /* harmony import */


      var _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../web-widgets/phototext-rightphoto/phototext-rightphoto.component */
      "6rPC");
      /* harmony import */


      var _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../web-widgets/photo-text-landing-page/photo-text-landing-page.component */
      "281W");

      function GetInvolvedComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-phototext-leftphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-phototext-rightphoto", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-photo-text-landing-page", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var section_r1 = ctx.$implicit;
          var parentIdx_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("odd", parentIdx_r2 % 2 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("section", section_r1)("attachmentObj", ctx_r0.attachmentObj);
        }
      }

      var GetInvolvedComponent = /*#__PURE__*/function () {
        function GetInvolvedComponent() {
          _classCallCheck(this, GetInvolvedComponent);

          this.jsonData = _assets_json_pages_organization_get_involved_json__WEBPACK_IMPORTED_MODULE_0__;
        }

        _createClass(GetInvolvedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.preparePageData();
          }
        }, {
          key: "preparePageData",
          value: function preparePageData() {
            this.sectionList = this.jsonData['data'];
            this.attachmentObj = this.jsonData['attachmentData'];
          }
        }]);

        return GetInvolvedComponent;
      }();

      GetInvolvedComponent.ɵfac = function GetInvolvedComponent_Factory(t) {
        return new (t || GetInvolvedComponent)();
      };

      GetInvolvedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GetInvolvedComponent,
        selectors: [["app-get-involved"]],
        decls: 2,
        vars: 1,
        consts: [[1, "sv-website-bd"], [3, "odd", 4, "ngFor", "ngForOf"], [3, "section", "attachmentObj"]],
        template: function GetInvolvedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GetInvolvedComponent_section_1_Template, 4, 8, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sectionList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _web_widgets_phototext_leftphoto_phototext_leftphoto_component__WEBPACK_IMPORTED_MODULE_3__["PhototextLeftphotoComponent"], _web_widgets_phototext_rightphoto_phototext_rightphoto_component__WEBPACK_IMPORTED_MODULE_4__["PhototextRightphotoComponent"], _web_widgets_photo_text_landing_page_photo_text_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["PhotoTextLandingPageComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXQtaW52b2x2ZWQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "skT8":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/news-events/central-council-news/central-council-news.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CentralCouncilNewsComponent */

    /***/
    function skT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CentralCouncilNewsComponent", function () {
        return CentralCouncilNewsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CentralCouncilNewsComponent = /*#__PURE__*/function () {
        function CentralCouncilNewsComponent() {
          _classCallCheck(this, CentralCouncilNewsComponent);
        }

        _createClass(CentralCouncilNewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CentralCouncilNewsComponent;
      }();

      CentralCouncilNewsComponent.ɵfac = function CentralCouncilNewsComponent_Factory(t) {
        return new (t || CentralCouncilNewsComponent)();
      };

      CentralCouncilNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CentralCouncilNewsComponent,
        selectors: [["app-central-council-news"]],
        decls: 2,
        vars: 0,
        template: function CentralCouncilNewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "central-council-news works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW50cmFsLWNvdW5jaWwtbmV3cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "uswQ":
    /*!********************************************!*\
      !*** ./src/app/layout/layout.component.ts ***!
      \********************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function uswQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "/bvK");
      /* harmony import */


      var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./content/content.component */
      "7gmU");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "kVkw");

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent() {
          _classCallCheck(this, LayoutComponent);
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)();
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        decls: 3,
        vars: 0,
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        loadChildren: './website-mod/website-mod.module.ts#WebsiteModModule'
      }];

      var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
      /***/

    },

    /***/
    "wLeR":
    /*!************************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/carousal/carousal.component.ts ***!
      \************************************************************************/

    /*! exports provided: CarousalComponent */

    /***/
    function wLeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarousalComponent", function () {
        return CarousalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_image_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-image-slider */
      "yf9x");

      var _c0 = function _c0() {
        return {
          width: "100%",
          height: "90%"
        };
      };

      function CarousalComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ng-image-slider", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r0.imageObject)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("animationSpeed", 5)("slideImage", 1);
        }
      }

      var CarousalComponent = /*#__PURE__*/function () {
        function CarousalComponent() {
          _classCallCheck(this, CarousalComponent);

          this.imageObject = [];
          this.section = new Object();
        }

        _createClass(CarousalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.section['widget'].type.itemValue == 'carousal') {
              this.prepareImageData();
            }
          }
        }, {
          key: "prepareImageData",
          value: function prepareImageData() {
            var _this = this;

            if (this.imageObject && this.imageObject.length == 0) {
              this.section['postList'].forEach(function (post) {
                var imageObj = new Object();
                imageObj['image'] = _this.attachmentObj[post.id].path;
                imageObj['thumbImage'] = _this.attachmentObj[post.id].path;
                imageObj['alt'] = 'alt of image';
                imageObj['title'] = post.name;

                _this.imageObject.push(imageObj);
              });
            }
          }
        }]);

        return CarousalComponent;
      }();

      CarousalComponent.ɵfac = function CarousalComponent_Factory(t) {
        return new (t || CarousalComponent)();
      };

      CarousalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarousalComponent,
        selectors: [["app-carousal"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "images", "imageSize", "animationSpeed", "slideImage"], ["nav", ""]],
        template: function CarousalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarousalComponent_div_0_Template, 3, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.section && ctx.section["widget"] && ctx.section["widget"].type && ctx.section["widget"].type.itemValue == "carousal");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderComponent"]],
        styles: [".sv-web-sec[_ngcontent-%COMP%] {\r\n  margin: 3rem 1rem;\r\n}\r\n\r\n.sv-web-sectitle[_ngcontent-%COMP%], .sv-web-secdesc[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  padding: 0;\r\n}\r\n\r\n.sv-web-sectitle[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid rgb(4, 4, 4);\r\n  min-width: 160px;\r\n  padding: 0 24px;\r\n  opacity: 0.6;\r\n}\r\n\r\n.sv-web-secdesc[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.ng-image-slider[_ngcontent-%COMP%]   .ng-image-slider-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .main-inner[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n  bottom: 5rem;\r\n  left: 4rem;\r\n  height: 70%;\r\n  width: 30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7OztFQU1FLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWiIsImZpbGUiOiJjYXJvdXNhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2LXdlYi1zZWMge1xyXG4gIG1hcmdpbjogM3JlbSAxcmVtO1xyXG59XHJcblxyXG4uc3Ytd2ViLXNlY3RpdGxlLFxyXG4uc3Ytd2ViLXNlY2Rlc2Mge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3Ytd2ViLXNlY3RpdGxlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDQsIDQsIDQpO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgcGFkZGluZzogMCAyNHB4O1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnN2LXdlYi1zZWNkZXNjIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5uZy1pbWFnZS1zbGlkZXJcclxuICAubmctaW1hZ2Utc2xpZGVyLWNvbnRhaW5lclxyXG4gIC5tYWluXHJcbiAgLm1haW4taW5uZXJcclxuICAuaW1nLWRpdlxyXG4gIC5jYXB0aW9uIHtcclxuICBib3R0b206IDVyZW07XHJcbiAgbGVmdDogNHJlbTtcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "xASk":
    /*!********************************************************************!*\
      !*** ./src/app/website-mod/web-widgets/notice/notice.component.ts ***!
      \********************************************************************/

    /*! exports provided: NoticeComponent */

    /***/
    function xASk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeComponent", function () {
        return NoticeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function NoticeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var post_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1["name"] + " " + post_r1["desc"], " ");
        }
      }

      var NoticeComponent = /*#__PURE__*/function () {
        function NoticeComponent() {
          _classCallCheck(this, NoticeComponent);

          this.section = new Object();
        }

        _createClass(NoticeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NoticeComponent;
      }();

      NoticeComponent.ɵfac = function NoticeComponent_Factory(t) {
        return new (t || NoticeComponent)();
      };

      NoticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NoticeComponent,
        selectors: [["app-notice"]],
        inputs: {
          section: "section",
          attachmentObj: "attachmentObj"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sv-web-sec-notice-cont", 4, "ngFor", "ngForOf"], [1, "sv-web-sec-notice-cont"], ["role", "list"], ["role", "listitem"], ["matLine", ""], [1, "fas", "fa-exclamation-circle"]],
        template: function NoticeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NoticeComponent_div_0_Template, 7, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.section["postList"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"]],
        styles: [".sv-web-sec-notice-cont[_ngcontent-%COMP%] {\r\n  background-color: #e8e8e8;\r\n  text-align: center;\r\n}\r\n\r\n.sv-web-sec-notice-cont[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJub3RpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdi13ZWItc2VjLW5vdGljZS1jb250IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN2LXdlYi1zZWMtbm90aWNlLWNvbnQgLm1hdC1saXN0LXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "xUap":
    /*!********************************************************************************************************!*\
      !*** ./src/app/website-mod/website/pages/councils-info/conferences/east-vasai/east-vasai.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: EastVasaiComponent */

    /***/
    function xUap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EastVasaiComponent", function () {
        return EastVasaiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EastVasaiComponent = /*#__PURE__*/function () {
        function EastVasaiComponent() {
          _classCallCheck(this, EastVasaiComponent);
        }

        _createClass(EastVasaiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EastVasaiComponent;
      }();

      EastVasaiComponent.ɵfac = function EastVasaiComponent_Factory(t) {
        return new (t || EastVasaiComponent)();
      };

      EastVasaiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EastVasaiComponent,
        selectors: [["app-east-vasai"]],
        decls: 2,
        vars: 0,
        template: function EastVasaiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "east-vasai works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlYXN0LXZhc2FpLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map