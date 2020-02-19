(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: serverip, default */
/***/ (function(module) {

module.exports = {"serverip":"http://164.52.197.194:3001"};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-table/vendor-table.component */ "./src/app/vendor-table/vendor-table.component.ts");
/* harmony import */ var _vendor_info_vendor_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor-info/vendor-info.component */ "./src/app/vendor-info/vendor-info.component.ts");
/* harmony import */ var _vendor_table_employee_vendor_table_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor-table-employee/vendor-table-employee.component */ "./src/app/vendor-table-employee/vendor-table-employee.component.ts");
/* harmony import */ var _vendor_table_goods_vendor_table_goods_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor-table-goods/vendor-table-goods.component */ "./src/app/vendor-table-goods/vendor-table-goods.component.ts");
/* harmony import */ var _vendor_table_orders_vendor_table_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor-table-orders/vendor-table-orders.component */ "./src/app/vendor-table-orders/vendor-table-orders.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _vendor_customer_vendor_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendor-customer/vendor-customer.component */ "./src/app/vendor-customer/vendor-customer.component.ts");
/* harmony import */ var _customer_organization_customer_organization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-organization/customer-organization.component */ "./src/app/customer-organization/customer-organization.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-table/customer-table.component */ "./src/app/customer-table/customer-table.component.ts");
/* harmony import */ var _customer_table_employee_customer_table_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer-table-employee/customer-table-employee.component */ "./src/app/customer-table-employee/customer-table-employee.component.ts");
/* harmony import */ var _customer_table_goods_customer_table_goods_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-table-goods/customer-table-goods.component */ "./src/app/customer-table-goods/customer-table-goods.component.ts");
/* harmony import */ var _customer_table_orders_customer_table_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer-table-orders/customer-table-orders.component */ "./src/app/customer-table-orders/customer-table-orders.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer-info/customer-info.component */ "./src/app/customer-info/customer-info.component.ts");
/* harmony import */ var _vendor_organization_vendor_organization_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vendor-organization/vendor-organization.component */ "./src/app/vendor-organization/vendor-organization.component.ts");
/* harmony import */ var _vendor_employee_vendor_employee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vendor-employee/vendor-employee.component */ "./src/app/vendor-employee/vendor-employee.component.ts");
/* harmony import */ var _vendor_employee_goods_vendor_employee_goods_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vendor-employee-goods/vendor-employee-goods.component */ "./src/app/vendor-employee-goods/vendor-employee-goods.component.ts");
/* harmony import */ var _vendor_employee_orders_vendor_employee_orders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vendor-employee-orders/vendor-employee-orders.component */ "./src/app/vendor-employee-orders/vendor-employee-orders.component.ts");
/* harmony import */ var _customer_employee_customer_employee_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customer-employee/customer-employee.component */ "./src/app/customer-employee/customer-employee.component.ts");
/* harmony import */ var _customer_employee_goods_customer_employee_goods_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer-employee-goods/customer-employee-goods.component */ "./src/app/customer-employee-goods/customer-employee-goods.component.ts");
/* harmony import */ var _customer_employee_order_customer_employee_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer-employee-order/customer-employee-order.component */ "./src/app/customer-employee-order/customer-employee-order.component.ts");
/* harmony import */ var _customer_employee_info_customer_employee_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customer-employee-info/customer-employee-info.component */ "./src/app/customer-employee-info/customer-employee-info.component.ts");
/* harmony import */ var _vendor_employee_info_vendor_employee_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./vendor-employee-info/vendor-employee-info.component */ "./src/app/vendor-employee-info/vendor-employee-info.component.ts");





























var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'vendorEmployee', component: _vendor_employee_vendor_employee_component__WEBPACK_IMPORTED_MODULE_21__["VendorEmployeeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], children: [
            {
                path: 'info', component: _vendor_employee_info_vendor_employee_info_component__WEBPACK_IMPORTED_MODULE_28__["VendorEmployeeInfoComponent"],
            },
            {
                path: 'goods', component: _vendor_employee_goods_vendor_employee_goods_component__WEBPACK_IMPORTED_MODULE_22__["VendorEmployeeGoodsComponent"],
            },
            {
                path: 'orders', component: _vendor_employee_orders_vendor_employee_orders_component__WEBPACK_IMPORTED_MODULE_23__["VendorEmployeeOrdersComponent"],
            },
        ]
    },
    {
        path: 'customerEmployee', component: _customer_employee_customer_employee_component__WEBPACK_IMPORTED_MODULE_24__["CustomerEmployeeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], children: [
            {
                path: 'info', component: _customer_employee_info_customer_employee_info_component__WEBPACK_IMPORTED_MODULE_27__["CustomerEmployeeInfoComponent"],
            },
            {
                path: 'goods', component: _customer_employee_goods_customer_employee_goods_component__WEBPACK_IMPORTED_MODULE_25__["CustomerEmployeeGoodsComponent"],
            },
            {
                path: 'orders', component: _customer_employee_order_customer_employee_order_component__WEBPACK_IMPORTED_MODULE_26__["CustomerEmployeeOrderComponent"],
            },
        ]
    },
    {
        path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_18__["CustomerComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], children: [
            {
                path: 'table', component: _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_14__["CustomerTableComponent"], children: [
                    {
                        path: 'goods', component: _customer_table_goods_customer_table_goods_component__WEBPACK_IMPORTED_MODULE_16__["CustomerTableGoodsComponent"]
                    },
                    {
                        path: 'orders', component: _customer_table_orders_customer_table_orders_component__WEBPACK_IMPORTED_MODULE_17__["CustomerTableOrdersComponent"]
                    }
                ]
            },
            {
                path: 'employee', component: _customer_table_employee_customer_table_employee_component__WEBPACK_IMPORTED_MODULE_15__["CustomerTableEmployeeComponent"]
            },
            {
                path: 'info', component: _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_19__["CustomerInfoComponent"]
            },
            {
                path: 'customer', component: _vendor_customer_vendor_customer_component__WEBPACK_IMPORTED_MODULE_11__["VendorCustomerComponent"], children: [
                    {
                        path: 'organization', component: _vendor_customer_vendor_customer_component__WEBPACK_IMPORTED_MODULE_11__["VendorCustomerComponent"], children: [
                            {
                                path: 'orglist', component: _customer_organization_customer_organization_component__WEBPACK_IMPORTED_MODULE_12__["CustomerOrganizationComponent"]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        path: 'vendor', component: _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_3__["VendorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]], children: [
            {
                path: 'table', component: _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_5__["VendorTableComponent"], children: [
                    {
                        path: 'goods', component: _vendor_table_goods_vendor_table_goods_component__WEBPACK_IMPORTED_MODULE_8__["VendorTableGoodsComponent"]
                    },
                    {
                        path: 'customer', component: _vendor_customer_vendor_customer_component__WEBPACK_IMPORTED_MODULE_11__["VendorCustomerComponent"], children: [
                            {
                                path: 'organization', component: _vendor_organization_vendor_organization_component__WEBPACK_IMPORTED_MODULE_20__["VendorOrganizationComponent"],
                            },
                        ]
                    }
                ]
            },
            {
                path: 'info', component: _vendor_info_vendor_info_component__WEBPACK_IMPORTED_MODULE_6__["VendorInfoComponent"]
            },
            {
                path: 'employee', component: _vendor_table_employee_vendor_table_employee_component__WEBPACK_IMPORTED_MODULE_7__["VendorTableEmployeeComponent"]
            },
            {
                path: 'orders', component: _vendor_table_orders_vendor_table_orders_component__WEBPACK_IMPORTED_MODULE_9__["VendorTableOrdersComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"], _vendor_vendor_component__WEBPACK_IMPORTED_MODULE_3__["VendorComponent"], _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_5__["VendorTableComponent"], _vendor_info_vendor_info_component__WEBPACK_IMPORTED_MODULE_6__["VendorInfoComponent"], _vendor_table_employee_vendor_table_employee_component__WEBPACK_IMPORTED_MODULE_7__["VendorTableEmployeeComponent"], _vendor_table_goods_vendor_table_goods_component__WEBPACK_IMPORTED_MODULE_8__["VendorTableGoodsComponent"], _vendor_table_orders_vendor_table_orders_component__WEBPACK_IMPORTED_MODULE_9__["VendorTableOrdersComponent"], _vendor_customer_vendor_customer_component__WEBPACK_IMPORTED_MODULE_11__["VendorCustomerComponent"], _customer_organization_customer_organization_component__WEBPACK_IMPORTED_MODULE_12__["CustomerOrganizationComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_18__["CustomerComponent"], _vendor_organization_vendor_organization_component__WEBPACK_IMPORTED_MODULE_20__["VendorOrganizationComponent"], _vendor_employee_vendor_employee_component__WEBPACK_IMPORTED_MODULE_21__["VendorEmployeeComponent"], _vendor_employee_goods_vendor_employee_goods_component__WEBPACK_IMPORTED_MODULE_22__["VendorEmployeeGoodsComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-light bg-light\" >\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\n\n    </a>\n\n            <div class=\"nav navbar-nav navbar-right\" style=\"display:inline;\">\n\n              <div>\n                  <button type=\"button\" name=\"button\" onclick=\"setlogout()\">Logout</button>\n              </div>\n\n\n            </div>\n\n  </nav>\n\n<br> -->\n<!-- <app-header></app-header> -->\n<router-outlet></router-outlet>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n        <a href=\"/\"> EY India LLP. </a>\n    </div>\n    <!-- Copyright -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(Auth, router) {
        this.Auth = Auth;
        this.router = router;
        this.title = 'VendorApp';
    }
    AppComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-info/customer-info.component */ "./src/app/customer-info/customer-info.component.ts");
/* harmony import */ var _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-table/customer-table.component */ "./src/app/customer-table/customer-table.component.ts");
/* harmony import */ var _customer_table_employee_customer_table_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-table-employee/customer-table-employee.component */ "./src/app/customer-table-employee/customer-table-employee.component.ts");
/* harmony import */ var _customer_table_goods_customer_table_goods_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer-table-goods/customer-table-goods.component */ "./src/app/customer-table-goods/customer-table-goods.component.ts");
/* harmony import */ var _customer_table_orders_customer_table_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-table-orders/customer-table-orders.component */ "./src/app/customer-table-orders/customer-table-orders.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customer_vendor_customer_vendor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer-vendor/customer-vendor.component */ "./src/app/customer-vendor/customer-vendor.component.ts");
/* harmony import */ var _vendor_organization_vendor_organization_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vendor-organization/vendor-organization.component */ "./src/app/vendor-organization/vendor-organization.component.ts");
/* harmony import */ var _vendor_employee_vendor_employee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vendor-employee/vendor-employee.component */ "./src/app/vendor-employee/vendor-employee.component.ts");
/* harmony import */ var _vendor_employee_goods_vendor_employee_goods_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vendor-employee-goods/vendor-employee-goods.component */ "./src/app/vendor-employee-goods/vendor-employee-goods.component.ts");
/* harmony import */ var _vendor_employee_orders_vendor_employee_orders_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vendor-employee-orders/vendor-employee-orders.component */ "./src/app/vendor-employee-orders/vendor-employee-orders.component.ts");
/* harmony import */ var _customer_employee_customer_employee_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customer-employee/customer-employee.component */ "./src/app/customer-employee/customer-employee.component.ts");
/* harmony import */ var _customer_employee_goods_customer_employee_goods_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customer-employee-goods/customer-employee-goods.component */ "./src/app/customer-employee-goods/customer-employee-goods.component.ts");
/* harmony import */ var _customer_employee_order_customer_employee_order_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer-employee-order/customer-employee-order.component */ "./src/app/customer-employee-order/customer-employee-order.component.ts");
/* harmony import */ var _customer_employee_info_customer_employee_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer-employee-info/customer-employee-info.component */ "./src/app/customer-employee-info/customer-employee-info.component.ts");
/* harmony import */ var _vendor_employee_info_vendor_employee_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./vendor-employee-info/vendor-employee-info.component */ "./src/app/vendor-employee-info/vendor-employee-info.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_9__["CustomerInfoComponent"],
                _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_10__["CustomerTableComponent"],
                _customer_table_employee_customer_table_employee_component__WEBPACK_IMPORTED_MODULE_11__["CustomerTableEmployeeComponent"],
                _customer_table_goods_customer_table_goods_component__WEBPACK_IMPORTED_MODULE_12__["CustomerTableGoodsComponent"],
                _customer_table_orders_customer_table_orders_component__WEBPACK_IMPORTED_MODULE_13__["CustomerTableOrdersComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"],
                _customer_vendor_customer_vendor_component__WEBPACK_IMPORTED_MODULE_18__["CustomerVendorComponent"],
                _vendor_organization_vendor_organization_component__WEBPACK_IMPORTED_MODULE_19__["VendorOrganizationComponent"],
                _vendor_employee_vendor_employee_component__WEBPACK_IMPORTED_MODULE_20__["VendorEmployeeComponent"],
                _vendor_employee_goods_vendor_employee_goods_component__WEBPACK_IMPORTED_MODULE_21__["VendorEmployeeGoodsComponent"],
                _vendor_employee_orders_vendor_employee_orders_component__WEBPACK_IMPORTED_MODULE_22__["VendorEmployeeOrdersComponent"],
                _customer_employee_customer_employee_component__WEBPACK_IMPORTED_MODULE_23__["CustomerEmployeeComponent"],
                _customer_employee_goods_customer_employee_goods_component__WEBPACK_IMPORTED_MODULE_24__["CustomerEmployeeGoodsComponent"],
                _customer_employee_order_customer_employee_order_component__WEBPACK_IMPORTED_MODULE_25__["CustomerEmployeeOrderComponent"],
                _customer_employee_info_customer_employee_info_component__WEBPACK_IMPORTED_MODULE_26__["CustomerEmployeeInfoComponent"],
                _vendor_employee_info_vendor_employee_info_component__WEBPACK_IMPORTED_MODULE_27__["VendorEmployeeInfoComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_16__["AppMaterialModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn) {
            return true;
        }
        else {
            window.alert('nah!');
            //return this.auth.isLoggedIn;
            this.router.navigate(['/home']);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    }
    AuthService.prototype.setLoggedIn = function (value, publicKey, privatekey, userID) {
        // this.setLoggedIn()
        this.loggedInStatus = value;
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('public', publicKey);
        localStorage.setItem('private', privatekey);
        localStorage.setItem('userID', userID);
    };
    AuthService.prototype.setuserid = function (uid) {
        localStorage.setItem('useridstore', uid);
    };
    AuthService.prototype.setLogout = function () {
        this.loggedInStatus = false;
        //localStorage.setItem('loggedIn', 'false')
        // localStorage.clear()
        // this.loggedInStatus = value
        localStorage.setItem('loggedIn', 'false');
        localStorage.removeItem('publicKey');
        localStorage.removeItem('privateKey');
        localStorage.removeItem('userID');
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('name');
        localStorage.removeItem('private');
        localStorage.removeItem('public');
        localStorage.clear();
        // window.alert("logout1")
    };
    AuthService.prototype.username = function () {
        console.log(localStorage);
    };
    // get isLoggedOut(){
    //   return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
    // }
    // get 
    AuthService.prototype.isLoggedIn = function () {
        return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
    };
    AuthService.prototype.getUserDetails = function (username, password) {
        return this.http.post('/api/auth.php', {
            username: username,
            password: password
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/blockchain.service.ts":
/*!***************************************!*\
  !*** ./src/app/blockchain.service.ts ***!
  \***************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config.json */ "./config.json", 1);




var BlockchainService = /** @class */ (function () {
    function BlockchainService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.url = _config_json__WEBPACK_IMPORTED_MODULE_3__["serverip"]; //"http://52.187.53.56:3000"
        this.getIDDetails = function (userID) {
            return _this.httpClient.get(_this.url + '/id/' + userID);
        };
        this.getEntity = function (entity) {
            return _this.httpClient.get(_this.url + '/entity/' + entity);
        };
        this.genratePubPriv = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.url + '/generateKey').toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getUserName = function (query) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var httpOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            "db": "users",
                            "query": {
                                "selector": {
                                    "owner": query.pubKey
                                },
                                "fields": [
                                    "name"
                                ]
                            }
                        };
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        return [4 /*yield*/, this.httpClient.post(this.url + "/find", query, httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getallNamePub = function (query) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var couchQuery, httpOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        couchQuery = {
                            "db": "users",
                            "query": {
                                "selector": query,
                                "fields": [
                                    "name",
                                    "owner"
                                ]
                            }
                        };
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        return [4 /*yield*/, this.httpClient.post(this.url + "/find", couchQuery, httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.getUserNameByID = function (query) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var httpOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            "db": "users",
                            "query": {
                                "selector": {
                                    "_id": query.ID
                                },
                                "fields": [
                                    "name"
                                ]
                            }
                        };
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        return [4 /*yield*/, this.httpClient.post(this.url + "/find", query, httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.createVendor = function (payload) {
            var blockchainPayload = {
                "action": 'createVendor',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.registerEmployee = function (payload) {
            var blockchainPayload = {
                "action": 'registerEmployee',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            console.log(blockchainPayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.registerEmployeeDB = function (payload) {
            var couchpayload = {
                "db": 'users',
                "id": payload['id'],
                "data": payload['data']
            };
            console.log(payload, couchpayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url + "/insert", couchpayload, httpOptions);
        };
        this.registerCustomerDB = function (payload) {
            var couchpayload = {
                "db": 'users',
                "id": payload['id'],
                "data": payload['data']
            };
            console.log(payload, couchpayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url + "/insert", couchpayload, httpOptions);
        };
        this.getUserDataDB = function (payload) {
            var couchpayload = {
                "db": 'users',
                "query": {
                    "selector": {
                        "owner": payload.publicKey
                    }
                }
            };
            console.log(payload, couchpayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url + "/find", couchpayload, httpOptions);
        };
        this.registerCustomerOrg = function (payload) {
            var blockchainPayload = {
                "action": 'registerCustomerOrg',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            console.log(blockchainPayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.registerCustomerOrgEmployee = function (payload) {
            var blockchainPayload = {
                "action": 'registerCustomerOrgEmployee',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            console.log(blockchainPayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.createGoods = function (payload) {
            var blockchainPayload = {
                "action": 'createGoods',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            console.log(blockchainPayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        // getrevgoods = async (query) => {
        //    query = {
        //      "db": "orders", //db: order
        //      "query": {
        //        "selector": {
        //          "owner": query.id
        //        },
        //        "fields": [
        //          "_rev" //get : '_rev'
        //        ]
        //      }
        //    }
        //    const httpOptions = {
        //      headers: new HttpHeaders({
        //        'Content-Type': 'application/json'
        //      })
        //    };
        //    return await this.httpClient.post(this.url + "/find", query, httpOptions).toPromise()
        //  }
        this.createOrder = function (payload) {
            // this.getrevgoods(payload)
            var blockchainPayload = {
                "action": 'createOrder',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            console.log(blockchainPayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.orderStatus = function (payload) {
            var blockchainPayload = {
                "action": 'orderStatus',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            console.log(blockchainPayload);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.acceptOrder = function (payload) {
            var blockchainPayload = {
                "action": 'acceptOrder',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.orderPayment = function (payload) {
            var blockchainPayload = {
                "action": 'orderPayment',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.orderPaymentStatus = function (payload) {
            var blockchainPayload = {
                "action": 'orderPaymentStatus',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.transferOwnership = function (payload) {
            var blockchainPayload = {
                "action": 'transferOwnership',
                "public": localStorage.getItem('public'),
                "private": localStorage.getItem('private'),
                "payloaddata": payload
            };
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            return _this.httpClient.post(_this.url, blockchainPayload, httpOptions);
        };
        this.bulkUpload = function (payload) {
            console.log(payload);
            var formData = new FormData();
            console.log(payload.action);
            console.log(localStorage.getItem('private'));
            console.log(payload.file);
            formData.append('action', payload.action);
            formData.append('private', localStorage.getItem('private'));
            formData.append('avatar', payload.file);
            console.log(formData);
            window['formData'] = formData;
            // var blockchainPayload = {
            //   "action": 'transferOwnership',
            //   "public": localStorage.getItem('public'),
            //   "private": localStorage.getItem('private'),
            //   "payloaddata": payload
            // }
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'multipart/form-data'
                })
            };
            return _this.httpClient.post(_this.url + '/csv/', formData);
        };
    }
    BlockchainService.prototype.generateKey = function () {
        return this.httpClient.get(this.url + '/generateKey');
    };
    BlockchainService.prototype.generatePublicKey = function (PvtKey) {
        return this.httpClient.get(this.url + '/recoverPublickey/' + PvtKey);
    };
    BlockchainService.prototype.getBatchStatus = function (id) {
        return this.httpClient.get(this.url + '/api/batch_statuses?id=' + id + '&wait');
    };
    BlockchainService.prototype.registerGoodsnServiceDB = function (payload) {
        var couchpayload = {
            "db": 'goodsnservices',
            "id": payload['id'],
            "data": payload['data']
        };
        console.log(payload, couchpayload);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post(this.url + "/insert", couchpayload, httpOptions);
    };
    BlockchainService.prototype.registerOrders = function (payload) {
        var couchpayload = {
            "db": 'orders',
            "id": payload['id'],
            "data": payload['data']
        };
        console.log(payload, couchpayload);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post(this.url + "/insert", couchpayload, httpOptions);
    };
    BlockchainService.prototype.getOrderRev = function (payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var query, httpOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            "db": "orders",
                            "query": {
                                "selector": {
                                    "_id": payload
                                },
                                "fields": [
                                    "_rev"
                                ]
                            }
                        };
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        return [4 /*yield*/, this.httpClient.post(this.url + "/find", query, httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BlockchainService.prototype.updateOrders = function (payload) {
        var _this = this;
        var that = this;
        return this.getIDDetails(payload['id']).subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var orderRev, couchpayload, httpOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!val) return [3 /*break*/, 3];
                        return [4 /*yield*/, that.getOrderRev(payload['id'])];
                    case 1:
                        orderRev = _a.sent();
                        console.log(orderRev, payload);
                        if (!orderRev['docs'][0].hasOwnProperty('_rev')) return [3 /*break*/, 3];
                        payload['data']['_rev'] = orderRev['docs'][0]['_rev'];
                        couchpayload = {
                            "db": 'orders',
                            "id": payload['id'],
                            "data": payload['data']
                        };
                        console.log(payload, couchpayload);
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        return [4 /*yield*/, this.httpClient.post(this.url + "/insert", couchpayload, httpOptions)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "./src/app/customer-employee-goods/customer-employee-goods.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/customer-employee-goods/customer-employee-goods.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n  mat-checkbox {\n    color: white;\n\n}\n  .tab_model{\n  /* padding:5px; */\n  word-break: break-word;\n  border-radius: 7px;\n  width: 100%;\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: left;\n margin-top: 15px;\n}\n  /* .mat-checkbox-background {\n  background-color: white;\n} */\n  .tab_body{\n  width:50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZW1wbG95ZWUtZ29vZHMvY3VzdG9tZXItZW1wbG95ZWUtZ29vZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7O0FBRWhCO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0NBQ1osNEVBQTRFO0NBQzVFLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7RUFDQTs7R0FFRztFQUNIO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItZW1wbG95ZWUtZ29vZHMvY3VzdG9tZXItZW1wbG95ZWUtZ29vZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWF0LWNoZWNrYm94IHtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbi50YWJfbW9kZWx7XG4gIC8qIHBhZGRpbmc6NXB4OyAqL1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gdGV4dC1hbGlnbjogbGVmdDtcbiBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLyogLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59ICovXG4udGFiX2JvZHl7XG4gIHdpZHRoOjUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/customer-employee-goods/customer-employee-goods.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/customer-employee-goods/customer-employee-goods.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header \">\n            <!-- <h4 class=\"card-title \">Goods/Services</h4> -->\n            <button class=\"button\" style=\"float:right; padding: 5px;\" data-toggle=\"modal\" *ngIf=\"role==2\" data-target=\"#customer\" [disabled]=\"!placeable\" (click)=\"goodsSelect()\">Place Order</button>\n            <button class=\"button\" style=\"float:right; padding: 5px;\" data-toggle=\"modal\" *ngIf=\"role==2\" data-target=\"#bulk\">Place Bulk Order</button>\n            <!-- <p class=\"card-category\"> Goods/Service Details</p> -->\n        </div>\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"table-responsive\">\n                            <ng-container matColumnDef=\"select\">\n                                <th mat-header-cell *matHeaderCellDef>\n                                    <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                                        &nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(element) : null\" [checked]=\"selection.isSelected(element)\" [aria-label]=\"checkboxLabel(element)\">\n                                        &nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\n                                </td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"id\">\n                                <th mat-header-cell *matHeaderCellDef>Goods/Services ID&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\" > {{element.id}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"unit\">\n                                <th mat-header-cell *matHeaderCellDef> Unit&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.unit}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"creator\">\n                                <th mat-header-cell *matHeaderCellDef>Creator&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.creator}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"vname\">\n                                <th mat-header-cell *matHeaderCellDef>Vendor Name&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.vname}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" #customer id=\"customer\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content \">\n            <!--Header-->\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Place Order</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"goodsEmpty()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"orderDetails\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                            <div class=\"row\" style=\"position: relative;width: 100%;padding-right: 15px;padding-left: 15px;\">\n                                <div>\n                                    <label for=\"goodsService1\">Goods&Services</label>\n                                    <table class=\"tab_model\" style=\"width:100%;word-break: break-word;padding: 5px\">\n                                        <tr style=\"font-weight: 300;\">\n                                            <td style=\"padding: 5px\">Name</td>\n                                            <td>Quantity</td>\n                                            <td>Rate</td>\n                                        </tr>\n                                        <tr *ngFor=\"let g of selectedOrder;let i=index\">\n                                            <td style=\"padding: 5px\"> {{g.name}} </td>\n                                            <!-- <td> <input type=\"number\" class=\"form-control\" (keyup.enter)=\" getquantity($event,i)\" (blur)=\" getquantity($event,i)\" placeholder=\"Quantity\" value=\"{{g.quantity}}\" /> </td> -->\n                                            <td> <input type=\"number\" class=\"form-control\" (keyup.enter)=\" getquantity($event,i)\" (blur)=\" getquantity($event,i)\" placeholder=\"Quantity\" value=\"{{g.quantity}}\" /> </td>\n                                            <td> <input type=\"number\" (keyup.enter)=\" getrate($event,i)\" (blur)=\" getrate($event,i)\" class=\"form-control\" placeholder=\"Rate\" value=\"{{g.rate}}\"></td>\n                                        </tr>\n                                    </table>\n                                </div>\n                            </div>\n                            <hr>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"orderNumber1\">Order Number</label>\n                                <input type=\"text\" formControlName=\"orderNumber\" class=\"form-control\" id=\"orderNumber1\" placeholder=\"Enter Order Number\">\n                            </div>\n                            <div formGroupName=\"customer\">\n                                <div class=\"form-group\">\n                                    <label for=\"addressShipping1\">Shipping Address</label>\n                                    <input type=\"text\" id=\"addressShipping1\" formControlName=\"addressShipping\" class=\"form-control\" placeholder=\"Enter Shipping Address\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"addressBilling1\">Billing Address</label>\n                                    <input type=\"text\" id=\"addressBilling1\" formControlName=\"addressBilling\" class=\"form-control\" placeholder=\"Enter Billing Address\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"GSTNumber1\">GST Number</label>\n                                    <input type=\"text\" id=\"GSTNumber1\" disabled formControlName=\"GSTNumber\" class=\"form-control\" placeholder=\"Enter GST Number\" value=\"{{gstNo}}\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"PO_Number1\">Purchase Order Number</label>\n                                <input type=\"text\" formControlName=\"PO_Number\" class=\"form-control\" id=\"PO_Number1\" placeholder=\"Enter Purchase Order Number\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"PO_Date1\">Purchase Order Date</label>\n                                <input type=\"date\" formControlName=\"PO_Date\" class=\"form-control\" id=\"PO_Date\" placeholder=\"Enter Purchase Order Date\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"orderDate1\">Order Date</label>\n                                <input type=\"date\" formControlName=\"orderDate\" class=\"form-control\" id=\"orderDate1\" placeholder=\"Enter Order Date\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"orderAmount1\">Order Amount</label>\n                                <input type=\"text\" formControlName=\"orderAmount\" disabled class=\"form-control\" id=\"orderAmount1\" placeholder=\"Enter Order Amount\" value=\"{{good_total}}\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"comment1\">Comment</label>\n                                <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter Comment\">\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"row\" style=\"margin-right:10px;\">\n                    \n                    <div class=\"col-sm-4\" style=\"margin-bottom:10px; margin-top: 10px;\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                    <div class=\"col-sm-6 col-md-8\" style=\"margin-bottom:10px;margin-top: 10px;\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"placeOrder()\" [disabled]=\"!orderDetails.valid || good_total==0\">Place Order</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"bulk\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Place Bulk Order</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <!-- <p for=\"input\" style=\"float:left;\">Bulk Registration</p> -->\n                        <input type=\"file\" class=\"upload \" (change)=\"updateFileData($event.target.files)\" accept=\".csv\">\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"bulkRegister()\" [disabled]=\"!bulkUploadAction\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/customer-employee-goods/customer-employee-goods.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer-employee-goods/customer-employee-goods.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerEmployeeGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEmployeeGoodsComponent", function() { return CustomerEmployeeGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");









var CustomerEmployeeGoodsComponent = /** @class */ (function () {
    function CustomerEmployeeGoodsComponent(data, httpClient, blockchainService, fb, modalService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.fb = fb;
        this.modalService = modalService;
        this.name1 = [];
        this.rate = [];
        this.quantity = [];
        this.package_list = [];
        this.selectedOrder = [];
        this.goods = [];
        this.placeable = false;
        this.good_total = 0;
        this.bulkFile = '';
        this.bulkUploadAction = null;
        this.bulkupload = false;
        this.bulkupload1 = false;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.displayedColumns = [
            'select',
            // 'id',
            'name',
            // 'unit',
            'creator',
            'vname',
        ];
        this.username = "";
        this.orderDetails = this.fb.group({
            orderNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            customer: this.fb.group({
                addressShipping: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                addressBilling: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                GSTNumber: [this.gstNo],
            }),
            PO_Number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            PO_Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            orderDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            orderAmount: [this.good_total],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.username = localStorage.getItem('userID');
        this.name = localStorage.getItem('name');
        this.orgName = localStorage.getItem('customerName');
        this.role = localStorage.getItem('role');
        this.getUserDetails();
    }
    CustomerEmployeeGoodsComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('goods').subscribe(function (val) {
            if (val) {
                console.log(val['entity'][0]);
                for (var i = 0; i < val['entity'].length; i++) {
                    // console.log(val['entity'][i]);
                    {
                        console.log(val['entity'][i]);
                        var payload = {
                            'id': val['entity'][i]['goods']['ID'],
                            'name': val['entity'][i]['goods']['name'],
                            'unit': val['entity'][i]['goods']['unit'],
                            'creator': val['entity'][i]['vendor']['creator'],
                            'vname': val['entity'][i]['vendor']['name'],
                        };
                        that.package_list.push(payload);
                        //that.package_list.push(val['entity'][i]['vendor'].creator)
                        //creator to be added
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
                var initialSelection = [];
                var allowMultiSelect = true;
                _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](allowMultiSelect, initialSelection);
            }
        });
    };
    CustomerEmployeeGoodsComponent.prototype.place = function () {
        console.log(this.selection);
    };
    CustomerEmployeeGoodsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
        console.log(numSelected);
        console.log(this.selection);
    };
    CustomerEmployeeGoodsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        console.log(this.dataSource.data.forEach(function (row) { return _this.selection.select(row); }));
        // console.log(this.selection);
    };
    CustomerEmployeeGoodsComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        if (this.selection['selected'].length > 0) {
            this.placeable = true;
        }
        else {
            this.placeable = false;
        }
    };
    CustomerEmployeeGoodsComponent.prototype.goodsSelect = function () {
        this.gstNo = localStorage.GSTNumber;
        console.log(this.gstNo);
        console.log(this.selection);
        var x = [];
        var data = {};
        data['name'] = this.selection['selected'][0]['name'];
        data['quantity'] = this.selection['selected'][0]['unit'];
        data['rate'] = 0;
        this.vname = this.selection['selected'][0]['vname'];
        x.push(data);
        for (var i = 1; i < this.selection['selected'].length; i++) {
            var ddata = {};
            ddata['name'] = this.selection['selected'][i]['name'];
            ddata['quantity'] = this.selection['selected'][i]['unit'];
            ddata['rate'] = 0;
            x.push(ddata);
        }
        this.selectedOrder = x; //JSON.stringify(x, null, '\t')
        console.log(this.selectedOrder);
        for (var i_1 = 0; i_1 < this.selectedOrder.length; i_1++) {
            if (!this.selectedOrder[i_1].quantity) {
                this.selectedOrder[i_1].quantity = 1;
            }
            console.log("hello");
            this.goods.push({
                name: this.selectedOrder[i_1].name,
                quantity: this.selectedOrder[i_1].quantity,
                rate: this.selectedOrder[i_1].rate
            });
            this.good_total += (this.selectedOrder[i_1].quantity * this.selectedOrder[i_1].rate);
            // }
            // else {
            //   this.goods.push({
            //     name: this.selectedOrder[i].name,
            //     quantity: this.selectedOrder[i].quantity,
            //     rate: this.selectedOrder[i].rate
            //   });
            //   this.good_total += (0 * this.selectedOrder[i].rate);
            // }
        }
        console.log(this.good_total);
        console.log(this.goods);
    };
    Object.defineProperty(CustomerEmployeeGoodsComponent.prototype, "goodsServicesFA", {
        get: function () {
            return this.orderDetails.get('goodsServices');
        },
        enumerable: true,
        configurable: true
    });
    CustomerEmployeeGoodsComponent.prototype.goodsEmpty = function () {
        this.goods = [];
        this.good_total = 0;
    };
    CustomerEmployeeGoodsComponent.prototype.placeOrder = function (f) {
        var _this = this;
        var validGoodsData = [];
        for (var i = 0; i < this.goods.length; i++) {
            if (!(this.goods[i].rate == 0) && !(this.goods[i].quantity == 0)) {
                validGoodsData.push(this.goods[i]);
            }
        }
        this.log = JSON.stringify(this.goods, null, '\t');
        console.log(this.log);
        console.log(f);
        console.log(this.orderDetails.value);
        var payload = this.orderDetails.value;
        payload['customer']['GSTNumber'] = this.gstNo;
        payload['orderAmount'] = this.good_total;
        payload['goodsService'] = validGoodsData;
        payload['orderStatus'] = 1;
        payload['vendor'] = {};
        payload['vendor']['name'] = this.vname;
        payload['customer']['employeeName'] = this.name;
        this.goods = [];
        this.good_total = 0;
        console.log(payload);
        this.blockchainService.createOrder(payload).subscribe(function (val) {
            if (val) {
                if (JSON.parse(val['response']['body']).data[0].status == 'COMMITTED') {
                    // window.alert("Order Creation Successfull  \n OrderID:" + val['userid']);
                    var couchdbPayload = {
                        "id": val['userid'],
                        "data": payload
                    };
                    _this.blockchainService.registerOrders(couchdbPayload).subscribe(function (couchData) {
                        console.log(couchData);
                    }, function (err) {
                        console.log("Error on Registration in DB: ", err);
                    });
                    window.alert("Order Creation Successfull  \n OrderID:" + val['userid']);
                }
                else {
                    window.alert("Order Creation Failed \n Status:" + JSON.parse(val['response']['body']).data[0].status + "\n Error Message: " + JSON.parse(val['response']['body']).data[0]['invalid_transactions'][0].message);
                }
            }
            else {
                console.log("Error");
            }
        }, function (err) {
            console.log("Error on Creation :", err);
        });
    };
    CustomerEmployeeGoodsComponent.prototype.bulkRegister = function () {
        var _this = this;
        console.log(this.bulkFile);
        var that = this;
        var blockchainPayload = {};
        blockchainPayload['action'] = 'createOrder';
        console.log("Action name ", blockchainPayload['action']);
        if (this.uploadFile) {
            console.log("Entering here");
            blockchainPayload['file'] = this.uploadFile;
            console.log("Now here", this.uploadFile);
            this.blockchainService.bulkUpload(blockchainPayload).subscribe(function (val) {
                if (val) {
                    console.log(val);
                    var allResponseData = {};
                    allResponseData['COMMITTED'] = [];
                    allResponseData['INVALID'] = [];
                    var Registered = {};
                    Registered['newEmployee'] = [];
                    Registered['AlreadyOnNetwork'] = [];
                    val['response'].forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var couchpayload;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(element);
                                    if (!(element['response'].status == 'COMMITTED')) return [3 /*break*/, 2];
                                    couchpayload = {};
                                    couchpayload['data'] = {};
                                    couchpayload['data'] = element['request'];
                                    couchpayload['id'] = element['response']['UserID'];
                                    couchpayload['data']['userType'] = 4;
                                    couchpayload['data']['publicKey'] = element['request']['publicKey'];
                                    couchpayload['data']['owner'] = element['request']['publicKey'];
                                    delete couchpayload['data']['employeeAddress'];
                                    console.log(couchpayload);
                                    allResponseData['COMMITTED'].push({
                                        data: element['request'],
                                        UserID: element['response']['UserID']
                                    });
                                    return [4 /*yield*/, that.blockchainService.registerEmployeeDB(couchpayload).subscribe(function (val) {
                                            if (val['ok']) {
                                                console.log(val);
                                                Registered['newEmployee'].push(val);
                                                // this.userid = val['userid']
                                                // this.Auth.setuserid(this.userid);
                                            }
                                        }, function (err) {
                                            // console.log(err)
                                            Registered['AlreadyOnNetwork'].push(couchpayload['id']);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    allResponseData['INVALID'].push({
                                        data: element['request'],
                                        UserID: element['response']['invalid_transactions']
                                    });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log(allResponseData);
                    console.log(Registered);
                }
            }, function (err) {
                console.log(err.message);
            });
        }
    };
    CustomerEmployeeGoodsComponent.prototype.getname = function (event, j) {
        console.log(event);
        this.goods[j].name = event.target.value;
        console.log(this.goods);
    };
    CustomerEmployeeGoodsComponent.prototype.getquantity = function (event, j) {
        // if (parseInt(event.target.value, 10) <= this.selectedOrder[j].quantity && parseInt(event.target.value, 10) > -1) {
        console.log("hello");
        console.log(event);
        this.good_total = this.good_total - (this.goods[j].rate * this.goods[j].quantity);
        this.goods[j].quantity = event.target.value;
        this.good_total = this.good_total + (this.goods[j].rate * this.goods[j].quantity);
        console.log(this.goods);
        // }
        // else {
        //   console.log("bye");
        //   window.alert("quantity sholud be less than" + this.goods[j].quantity + "and grater than 0");
        // }
    };
    CustomerEmployeeGoodsComponent.prototype.getrate = function (event, j) {
        if (parseInt(event.target.value, 10) >= 0) {
            console.log(event);
            this.good_total = this.good_total - (this.goods[j].rate * this.goods[j].quantity);
            this.goods[j].rate = event.target.value;
            this.good_total = this.good_total + (this.goods[j].rate * this.goods[j].quantity);
            console.log(this.goods);
        }
        else {
            window.alert("rate should be greater than zero");
        }
    };
    CustomerEmployeeGoodsComponent.prototype.updateFileData = function (files) {
        var that = this;
        console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            this.uploadFile = file;
            this.bulkUploadAction = true;
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            // if (file.type == "text/csv") {
            //   let reader: FileReader = new FileReader();
            //   reader.readAsText(file);
            //   reader.onload = (e) => {
            //     let csv: string = reader.result as string;
            //     console.log(csv);
            //   }
            // }
        }
    };
    CustomerEmployeeGoodsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomerEmployeeGoodsComponent.prototype, "customer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CustomerEmployeeGoodsComponent.prototype, "paginator", void 0);
    CustomerEmployeeGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-employee-goods',
            template: __webpack_require__(/*! ./customer-employee-goods.component.html */ "./src/app/customer-employee-goods/customer-employee-goods.component.html"),
            styles: [__webpack_require__(/*! ./customer-employee-goods.component.css */ "./src/app/customer-employee-goods/customer-employee-goods.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], CustomerEmployeeGoodsComponent);
    return CustomerEmployeeGoodsComponent;
}());



/***/ }),

/***/ "./src/app/customer-employee-info/customer-employee-info.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/customer-employee-info/customer-employee-info.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n  input[type=text] {\n      border: none;\n      border-bottom: 2px solid #007bff; \n  }\n  .tab_header{\n    padding:5px;\n    border-radius: 7px;\n    width: 400px;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: center;\n  }\n  .cont{\n    margin-left:2%;\n    margin-left: auto;\n    margin-right:auto;\n    width:90%;\n    \n  }\n  .info{\n  text-align: left;\n  margin-left: 5%;\n  word-break: break-word;\n  font-weight: 350;\n}\n  .tab_body{\n  padding:5px;\n  border-radius: 7px; \n  width:97%;\n  margin-left: auto;\n  margin-right: auto;\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: left;\n}\n  /* .tab_bar{\n\n  border-radius: 7px;\n\n  margin-left:auto;\n  margin-right:auto;\n\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: left; \n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZW1wbG95ZWUtaW5mby9jdXN0b21lci1lbXBsb3llZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0VBQ0E7TUFDSSxZQUFZO01BQ1osZ0NBQWdDO0VBQ3BDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7R0FDYiw0RUFBNEU7R0FDNUUsa0JBQWtCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixTQUFTOztFQUVYO0VBQ0Y7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkIsNEVBQTRFO0NBQzVFLGdCQUFnQjtBQUNqQjtFQUNBOzs7Ozs7Ozs7R0FTRyIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWVtcGxveWVlLWluZm8vY3VzdG9tZXItZW1wbG95ZWUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3YmZmOyBcbiAgfVxuICAudGFiX2hlYWRlcntcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY29udHtcbiAgICBtYXJnaW4tbGVmdDoyJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgICB3aWR0aDo5MCU7XG4gICAgXG4gIH1cbi5pbmZve1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtd2VpZ2h0OiAzNTA7XG59XG4udGFiX2JvZHl7XG4gIHBhZGRpbmc6NXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7IFxuICB3aWR0aDo5NyU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLyogLnRhYl9iYXJ7XG5cbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gIG1hcmdpbi1sZWZ0OmF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuXG4gYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiB0ZXh0LWFsaWduOiBsZWZ0OyBcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/customer-employee-info/customer-employee-info.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/customer-employee-info/customer-employee-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vendor\">\n    <div>\n        <h5 style=\"text-align: center;\">Welcome Customer Employee</h5>\n    </div><br>\n    <div style=\"text-align:center;height:150px;\">\n        <img src=\"/assets/profile.png\">\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Full Name</span>\n                </div>\n                <div class=\"field-info\">{{name | uppercase}}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Email</span>\n                </div>\n                <div class=\"field-info\">{{email}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Contact No.</span>\n                </div>\n                <div class=\"field-info\">{{contactNumber}}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Role</span>\n                </div>\n                <div class=\"field-info\">{{role}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Public Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(1)\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                            aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                            </path>\n                        </svg>\n                    </span>\n                </div>\n                <div class=\"field-info\">{{publicKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Private Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(2)\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                            aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                            </path>\n                        </svg>\n                    </span>\n                    <span class=\"mx-3\" (click)=\"download()\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\n                            class=\"octicon octicon-cloud-download\" aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\">\n                            </path>\n                        </svg>\n                    </span>\n                </div>\n                <div class=\"field-info\">{{privateKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <br><br>"

/***/ }),

/***/ "./src/app/customer-employee-info/customer-employee-info.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customer-employee-info/customer-employee-info.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerEmployeeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEmployeeInfoComponent", function() { return CustomerEmployeeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CustomerEmployeeInfoComponent = /** @class */ (function () {
    function CustomerEmployeeInfoComponent(data, http, httpClient, blockchainService, fb) {
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.fb = fb;
        this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.Roles = { 1: "Employee", 2: "Admin" };
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    CustomerEmployeeInfoComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['employee'].name);
                that.id = (val[_this.username][0]['employee'].ID);
                that.email = (val[_this.username][0]['employee'].email);
                that.contactNumber = (val[_this.username][0]['employee'].contactNumber);
                that.role = "Customer-Org-" + that.Roles[(val[_this.username][0]['employee'].role)];
                that.publicKey = (val[_this.username][0]['employee'].PublicKey);
                that.GSTNumber = (val[_this.username][0]['customer'].GSTNumber);
                localStorage.setItem('GSTNumber', that.GSTNumber);
                localStorage.setItem('role', val[_this.username][0]['employee'].role);
                that.privateKey = localStorage.getItem('private');
                console.log(that.name, that.id, that.publicKey, that.email);
            }
        });
    };
    CustomerEmployeeInfoComponent.prototype.showKey = function (PubPvt) {
        if (PubPvt == 1) {
            if (this.publicKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.publicKeyHide = this.publicKey;
            }
            else {
                this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
        else if (PubPvt == 2) {
            if (this.privateKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.privateKeyHide = this.privateKey;
            }
            else {
                this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
    };
    CustomerEmployeeInfoComponent.prototype.download = function () {
        var data = JSON.stringify({
            "PublicKey": this.publicKey,
            "PrivateKey": this.privateKey
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', this.name + ".priv");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    CustomerEmployeeInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerEmployeeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-employee-info',
            template: __webpack_require__(/*! ./customer-employee-info.component.html */ "./src/app/customer-employee-info/customer-employee-info.component.html"),
            styles: [__webpack_require__(/*! ./customer-employee-info.component.css */ "./src/app/customer-employee-info/customer-employee-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomerEmployeeInfoComponent);
    return CustomerEmployeeInfoComponent;
}());



/***/ }),

/***/ "./src/app/customer-employee-order/customer-employee-order.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/customer-employee-order/customer-employee-order.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n  background-color: #007bff;\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\nmat-cell{\r\n  position: relative;\r\n}\r\n.tab_model{\r\n  /* padding:5px; */\r\n  word-break: break-word;\r\n  border-radius: 7px;\r\n  width: 100%;\r\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n text-align: left;\r\n margin-top: 15px;\r\n}\r\n.tab_body{\r\n padding:5px;\r\n border-radius: 7px;  \r\n width:97%;\r\n margin-left: auto;\r\n margin-right: auto;\r\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\ntext-align: left;\r\n}\r\n.info{\r\n text-align: left;\r\n margin-left: 5%;\r\n word-break: break-word;\r\n font-weight: 350;\r\n}\r\n.cont{\r\n margin: 5px 1.5% 5px 1.5%;\r\n}\r\n.pp .row{\r\n  margin-left: 1%;\r\n}\r\n/*****\r\nModal\r\n*****/\r\n.modal-full {\r\n  min-width: 88%;\r\n  margin-left:110px;\r\n  margin-right:20px;\r\n  padding:10px;\r\n}\r\n.modal-full .modal-content {\r\n  min-height: 80vh;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZW1wbG95ZWUtb3JkZXIvY3VzdG9tZXItZW1wbG95ZWUtb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztDQUNaLDRFQUE0RTtDQUM1RSxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CLDRFQUE0RTtBQUM1RSxnQkFBZ0I7QUFDaEI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBR0E7O0tBRUs7QUFDTDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItZW1wbG95ZWUtb3JkZXIvY3VzdG9tZXItZW1wbG95ZWUtb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA2cHggN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbm1hdC1jZWxse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGFiX21vZGVse1xyXG4gIC8qIHBhZGRpbmc6NXB4OyAqL1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udGFiX2JvZHl7XHJcbiBwYWRkaW5nOjVweDtcclxuIGJvcmRlci1yYWRpdXM6IDdweDsgIFxyXG4gd2lkdGg6OTclO1xyXG4gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmluZm97XHJcbiB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gbWFyZ2luLWxlZnQ6IDUlO1xyXG4gd29yZC1icmVhazogYnJlYWstd29yZDtcclxuIGZvbnQtd2VpZ2h0OiAzNTA7XHJcbn1cclxuLmNvbnR7XHJcbiBtYXJnaW46IDVweCAxLjUlIDVweCAxLjUlO1xyXG59XHJcbi5wcCAucm93e1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufSBcclxuXHJcblxyXG4vKioqKipcclxuTW9kYWxcclxuKioqKiovXHJcbi5tb2RhbC1mdWxsIHtcclxuICBtaW4td2lkdGg6IDg4JTtcclxuICBtYXJnaW4tbGVmdDoxMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6MjBweDtcclxuICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1mdWxsIC5tb2RhbC1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer-employee-order/customer-employee-order.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/customer-employee-order/customer-employee-order.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n        <!-- <div class=\"card-header card-header-danger\">\r\n            <h4 class=\"card-title \">Orders</h4>\r\n            <p class=\"card-category\"> Order Details</p>\r\n        </div> -->\r\n        <div class=\"card-body\">\r\n            <ng-container>\r\n                <div class=\"mat-elevation-z8 \">\r\n                    <div class=\"table-specification\">\r\n                        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-responsive\">\r\n                            <!-- <ng-container matColumnDef=\"id\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID &nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.ID}}</a>&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container> -->\r\n                            <!-- <ng-container matColumnDef=\"select\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n                                    </mat-checkbox>\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(element) : null ; selectionData()\" [checked]=\"selection.isSelected(element)\" [aria-label]=\"checkboxLabel(element)\">\r\n                                    </mat-checkbox>\r\n                                </td>\r\n                            </ng-container> -->\r\n                            <ng-container matColumnDef=\"orderNumber\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Number&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <!-- <td mat-cell *matCellDef=\"let element\"> {{element.orderNumber}}&nbsp;&nbsp;&nbsp;&nbsp;</td>localStorage.customerOrgID==element.customer.employeeID-->\r\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.orderNumber}}\r\n                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"PO_Date\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Date&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\">{{element.PO_Date}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"PO_Number\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Number&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </th>\r\n\r\n                                <td mat-cell *matCellDef=\"let element\">{{element.PO_Number}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderAmount\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Amount&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderAmount}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderDate\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Date&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderDate}} &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderHandler\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Handler&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderHandler}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"owner\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.owner}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"globalStatus\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Status&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    {{element.globalStatus}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"register\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-full\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\" *ngIf=\"orderStatus!='3'\">\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Order Details</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body p-4\">\r\n                <div class=\"row\" style=\"margin-left:10px;margin-top:20px;margin-bottom:20px;\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"orderStatus=='4' || orderStatus=='1'\"><a\r\n                                data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#award\">Award</a></button>&nbsp;\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"(orderStatus=='1' || orderStatus=='4') && orderStatus!='3'\"><a data-dismiss=\"modal\"\r\n                                data-toggle=\"modal\" data-target=\"#discard\">Discard</a> </button>&nbsp;\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"orderStatus=='5' \"><a data-toggle=\"modal\"\r\n                                data-dismiss=\"modal\" data-target=\"#delivered\">Delivered</a> </button>&nbsp;\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"orderStatusPayment=='1'\"><a\r\n                                data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#paymentdone\">PaymentDone</a>\r\n                        </button>&nbsp;\r\n                    </div>\r\n                <div class=\"col-sm-8\">\r\n                    <label><b>Update Delegator's Public Key</b></label>\r\n                    <input type=\"text\" name=\"Enter Comment\" (keyup)=\"search()\" id=\"userNameSearch\" style=\"margin-bottom:5px;width:37%;margin-left:20px;\" placeholder=\"Enter Delegator's Name\">\r\n                    <input type=\"text\" *ngIf=\"isDelegatorSelected\" [(ngModel)]=\"newOwnerPublicKey\">\r\n                </div>\r\n                <div class=\"col-sm-4\" style=\"padding-top:20px;\">\r\n                    <button class=\"button\" (click)=\"transferOwnerShip(orderNumber,newOwnerPublicKey)\">Update\r\n                        Handler</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 col-xl-6\">\r\n\r\n                    <table class=\"table table-hover tab_model\" style=\"width:100%;word-break: break-word;margin-left:36px;\">\r\n                        <tbody>\r\n                            <tr *ngIf=\"pp?.orderNumber\">\r\n                                <td>Order Number</td>\r\n                                <td>\r\n                                    <p>{{pp?.orderNumber}}</p>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.PO_Number\">\r\n\r\n                                <td>PO Number</td>\r\n                                <td>{{pp?.PO_Number}}</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.PO_Date\">\r\n                                <td>PO Date</td>\r\n                                <td>{{pp?.PO_Date}}</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.orderAmount\">\r\n                                <td>Order Amount</td>\r\n                                <td>{{pp?.orderAmount}}</td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.orderDate\">\r\n                                <td>Order Date</td>\r\n                                <td>\r\n                                    <p>{{pp?.orderDate}}</p>\r\n                                </td>\r\n                            </tr>\r\n\r\n                            <tr *ngIf=\"pp?.orderHandler\">\r\n                                <td>Order Handler</td>\r\n                                <td>\r\n                                    <p>{{pp?.orderHandler}}</p>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.salesServiceTaxAmount\">\r\n                                <td>Sales Service TaxAmount</td>\r\n                                <td>\r\n                                    <p>{{pp?.salesServiceTaxAmount}}</p>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.owner\">\r\n                                <td>Owner</td>\r\n                                <td>\r\n                                    <p>{{pp?.owner}}</p>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"pp?.vendor?.name\">\r\n                                <td>Vendor Name</td>\r\n                                <td>\r\n                                    <p>{{pp?.vendor?.name}}</p>\r\n                                </td>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                    <table class=\"table table-hover tab_model\" *ngIf=\"pp?.goodsService.length\" style=\"width:100%;word-break: break-word; margin-left:34px;margin-bottom:40px;\">\r\n                        <tr>\r\n                            <td>Goods</td>\r\n                            <td>\r\n                                <table>\r\n                                    <tr style=\"font-weight: 300;\">\r\n                                        <td>Name</td>\r\n                                        <td>Quantity</td>\r\n                                        <td>Rate</td>\r\n                                        <td>Discount</td>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let g of pp?.goodsService\">\r\n                                        <td>{{g.name}}</td>\r\n                                        <td>{{g.quantity}}</td>\r\n                                        <td>{{g.rate}}</td>\r\n                                        <td>{{g.discount}}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </div>\r\n                <div class=\"col-sm-7 col-xl-5\" style=\"margin-left:30px;\">\r\n\r\n                    <div *ngIf=\"pp?.orderStatus?.comment || pp?.orderStatus?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\r\n                        <div class=\"col-lg-3\" style=\"margin-top:10px;\">\r\n                            <p>Order Status</p>\r\n                        </div>\r\n                        <div class=\"col-lg-9\" style=\"margin-top:10px;\">\r\n                            <div *ngIf=\"pp?.orderStatus?.comment\" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Comment:</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderStatus?.comment}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div *ngIf=\"pp?.orderStatus?.employeeID\" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Employee Id :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderStatus?.employeeID}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div *ngIf=\"pp?.customer?.ID || pp?.customer?.addressBilling || pp?.customer?.addressShipping || pp?.customer?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\r\n                        <div class=\"col-lg-3\">\r\n                            <p>Customer</p>\r\n                        </div>\r\n                        <div class=\"col-lg-9\">\r\n                            <div class=\"row\" *ngIf=\"pp?.customer?.ID\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>ID :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.customer?.ID}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\" *ngIf=\"pp?.customer?.addressBilling\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Address Billing :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.customer?.addressBilling}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\" *ngIf=\"pp?.customer?.addressShipping\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Address Shipping :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.customer?.addressShipping}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div class=\"row\" *ngIf=\"pp?.customer?.employeeID\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Employee ID :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.customer?.employeeID}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row tab_model\" *ngIf=\"pp?.orderPayment?.invoiceAmount || pp?.orderPayment?.invoiceDate ||pp?.orderPayment?.invoiceNumber|| pp?.orderPayment?.status?.comment||pp?.orderPayment?.status?.updater\" style=\"margin-left:auto;margin-right: auto;\">\r\n                        <div class=\"col-lg-3\">\r\n                            <p>Order Payment</p>\r\n                        </div>\r\n                        <div class=\"col-lg-9\">\r\n                            <div *ngIf=\"pp?.orderPayment?.invoiceAmount\" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Invoice Amount :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderPayment?.invoiceAmount}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div *ngIf=\" pp?.orderPayment?.invoiceDate \" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Invoice Date :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderPayment?.invoiceDate}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div *ngIf=\"pp?.orderPayment?.invoiceNumber\" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Invoice Number :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderPayment?.invoiceNumber}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div *ngIf=\"pp?.orderPayment?.status?.comment\" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Status Comment :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderPayment?.status?.comment}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <hr>\r\n                            <div *ngIf=\"pp?.orderPayment?.status?.updater\" class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <p>Status updater :</p>\r\n                                </div>\r\n                                <div class=\"col-lg-8\">\r\n                                    <p>{{pp?.orderPayment?.status?.updater}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<!-- Modal: modalCart -->\r\n\r\n\r\n\r\n<!-- <div class=\"modal fade\" id=\"customer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Accept Order</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <table class=\"table table-hover\">\r\n                    <tbody>\r\n\r\n                        <tr>\r\n\r\n                            <td>Comment</td>\r\n                            <td><input type=\"text\" name=\"Enter Comment\" [(ngModel)]=\"statusComment\"></td>\r\n                            <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Sales Service TaxAmount</td>\r\n                            <td><input type=\"text\" name=\"Enter Employee Name\" [(ngModel)]=\"salesServiceTaxAmountUpdate\">\r\n                            </td>\r\n                            <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Discount</td>\r\n                            <td><input type=\"textarea\" name=\"Goods&Services Discount\" [(ngModel)]=\"goodsServicesDiscount\" style=\"width: 100%;height: 100px;\"></td>\r\n                            <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>\r\n                <button class=\"btn btn-primary\" (click)=\"updateOrderStatus($event,orderNumber,'accept') \"> Place\r\n                    Order</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"invoicegenrate\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Invoice Details</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"invoiceData\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"invoiceNumber1\">Invoice Number</label>\r\n                        <input type=\"email\" formControlName=\"invoiceNumber\" class=\"form-control\" id=\"invoiceNumber1\" aria-describedby=\"nameHelp\" placeholder=\"Enter Invoice Number\">\r\n                        <!-- <small id=\"nameHelp\" class=\"form-text text-muted\">Name must be under 16 char.</small> -->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"invoiceDate1\">Invoice Date</label>\r\n                        <input type=\"text\" formControlName=\"invoiceDate\" class=\"form-control\" id=\"invoiceDate1\" aria-describedby=\"ethHelp\" placeholder=\"Enter Invoice Date\">\r\n                        <!-- <small id=\"ethHelp\" class=\"form-text text-muted\">Please provide user valid public key.</small> -->\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"invoiceAmount1\">Invoice Amount</label>\r\n                        <input type=\"Number\" formControlName=\"invoiceAmount\" class=\"form-control\" id=\"invoiceAmount1\" placeholder=\"Enter Invoice Amount\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"comment1\">Comment</label>\r\n                        <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter comment for invoice\">\r\n                    </div>\r\n\r\n                    <!-- <button type=\"submit\" [disabled]=\"!registerUser.valid\" class=\"btn btn-primary\">Submit</button> -->\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"invoiceDataUpload()\" [disabled]=\"!invoiceData.valid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- modal for award -->\r\n<div class=\"modal fade\" id=\"award\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Award</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"statusUpdate\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"comment1\">Comment</label>\r\n                        <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter comment for Award Order\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"statusUpdateMethod(2)\" [disabled]=\"!statusUpdate.valid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- modal ends for award -->\r\n\r\n<!-- modal for discard -->\r\n\r\n<div class=\"modal fade\" id=\"discard\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Order Discard</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"statusUpdate\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"comment1\">Comment</label>\r\n                        <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter comment for Discard Order\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"statusUpdateMethod(3)\" [disabled]=\"!statusUpdate.valid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- discard modal ends -->\r\n\r\n\r\n<!-- modal for dilevered -->\r\n<div class=\"modal fade\" id=\"delivered\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Order dilevered</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"statusUpdate\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"comment1\">Comment</label>\r\n                        <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter comment for Delivery\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"statusUpdateMethod(6)\" [disabled]=\"!statusUpdate.valid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- modal ends for dilevered -->\r\n\r\n\r\n<div class=\"modal fade\" id=\"paymentdone\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Payment Done</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"statusUpdate\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"comment1\">Comment</label>\r\n                        <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter comment for Payment\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"paymentStatusUpdateMethod(2)\" [disabled]=\"!statusUpdate.valid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer-employee-order/customer-employee-order.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer-employee-order/customer-employee-order.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerEmployeeOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEmployeeOrderComponent", function() { return CustomerEmployeeOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CustomerEmployeeOrderComponent = /** @class */ (function () {
    function CustomerEmployeeOrderComponent(data, fb, httpClient, blockchainService) {
        this.data = data;
        this.fb = fb;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.sortedlist = [];
        this.orderId = "";
        this.vendorName = "";
        this.employeeName = "";
        this.shippingAddress = "";
        this.billingAddress = "";
        this.gstNo = "";
        this.poNumber = "";
        this.poDate = "";
        this.isDelegatorSelected = false;
        this.orderDate = "";
        this.statusComment = "";
        this.orderStatus = "";
        this.orderAmount = "";
        this.orderNumber = "";
        this.employeeKey = "";
        this.salesServiceTaxAmountUpdate = "";
        this.goodsServiceDiscount = "";
        this.goodsServicesDiscount = "";
        this.newOwnerPublicKey = "";
        this.orderStatusPayment = "0";
        this.displayedColumns = [
            // 'select', // 'id', 
            'orderNumber',
            'PO_Date',
            'PO_Number',
            'orderAmount',
            'orderDate',
            'orderHandler',
            'owner',
            'globalStatus',
        ];
        this.OrderStatus = ["", "Created", "Awarded", "Discarted", "Returned", "Accepted", "Delivered", "Invoice Genrated", "Invoice Paid"];
        this.invoiceData = this.fb.group({
            invoiceNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            invoiceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            invoiceAmount: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            comment: [''],
        });
        this.statusUpdate = this.fb.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.name = localStorage.getItem('userName');
        this.getOrderDetails();
        console.log("helli");
    }
    CustomerEmployeeOrderComponent.prototype.getOrderDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('order').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var from, to, dataAtATime, ownerIDName, i, waitResponseOH, waitResponseOw, waitResponseCI, waitResponseCE, orderData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!val) return [3 /*break*/, 18];
                        from = 0;
                        to = val['entity'].length;
                        dataAtATime = 2;
                        ownerIDName = {};
                        i = from;
                        _a.label = 1;
                    case 1:
                        if (!(i < to)) return [3 /*break*/, 18];
                        console.log(val['entity'][i]);
                        if (!(val['entity'][i].hasOwnProperty('vendor') && val['entity'][i].hasOwnProperty('customer') && val['entity'][i]['customer']['employeeID'] == localStorage.getItem('userID'))) return [3 /*break*/, 17];
                        orderData = val['entity'][i];
                        if (!ownerIDName.hasOwnProperty(orderData['orderHandler'])) return [3 /*break*/, 2];
                        orderData['orderHandler'] = ownerIDName[orderData['orderHandler']];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderHandler'] })];
                    case 3:
                        waitResponseOH = _a.sent();
                        orderData['orderHandler'] = waitResponseOH['docs'][0].name;
                        ownerIDName[orderData['orderHandler']] = waitResponseOH['docs'][0].name;
                        _a.label = 4;
                    case 4:
                        if (!ownerIDName.hasOwnProperty(orderData['owner'])) return [3 /*break*/, 5];
                        orderData['owner'] = ownerIDName[orderData['owner']];
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['owner'] })];
                    case 6:
                        waitResponseOw = _a.sent();
                        orderData['owner'] = waitResponseOw['docs'][0].name;
                        ownerIDName[orderData['owner']] = waitResponseOw['docs'][0].name;
                        _a.label = 7;
                    case 7:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['ID'])) return [3 /*break*/, 8];
                        orderData['customer']['ID'] = ownerIDName[orderData['customer']['ID']];
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['ID'] })];
                    case 9:
                        waitResponseCI = _a.sent();
                        orderData['customer']['ID'] = waitResponseCI['docs'][0].name;
                        ownerIDName[orderData['customer']['ID']] = waitResponseCI['docs'][0].name;
                        _a.label = 10;
                    case 10:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['employeeID'])) return [3 /*break*/, 11];
                        orderData['customer']['employeeID'] = ownerIDName[orderData['customer']['employeeID']];
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['employeeID'] })];
                    case 12:
                        waitResponseCE = _a.sent();
                        orderData['customer']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['customer']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 13;
                    case 13:
                        if (!(orderData['orderStatus']['employeeID'] !== "")) return [3 /*break*/, 16];
                        if (!ownerIDName.hasOwnProperty(orderData['orderStatus']['employeeID'])) return [3 /*break*/, 14];
                        orderData['orderStatus']['employeeID'] = ownerIDName[orderData['orderStatus']['employeeID']];
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderStatus']['employeeID'] })];
                    case 15:
                        waitResponseCE = _a.sent();
                        console.log(orderData['orderStatus']['employeeID']);
                        orderData['orderStatus']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['orderStatus']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 16;
                    case 16:
                        if (orderData.hasOwnProperty('orderPayment')) {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderPayment'].status.paymentStatus) + 6];
                        }
                        else {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderStatus'].status)];
                        }
                        that.sortedlist.push(orderData);
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](that.sortedlist);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        _a.label = 17;
                    case 17:
                        i++;
                        return [3 /*break*/, 1];
                    case 18: return [2 /*return*/];
                }
            });
        }); });
        this.local = localStorage;
    };
    CustomerEmployeeOrderComponent.prototype.search = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var queryVendor, names, that, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isDelegatorSelected = false;
                        queryVendor = {
                            "userType": 2,
                            "vendorName": localStorage.getItem('name'),
                            "name": {
                                "$regex": "(?i)" + document.getElementById("userNameSearch").value
                            }
                        };
                        names = [];
                        // console.log(queryVendor)
                        console.log(queryVendor);
                        that = this;
                        return [4 /*yield*/, this.blockchainService.getallNamePub(queryVendor)];
                    case 1:
                        data = _a.sent();
                        console.log(data['docs']);
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerEmployeeOrderComponent.prototype.getGSTNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var that;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.blockchainService.getIDDetails(localStorage.getItem('customerOrgID')).subscribe(function (val) {
                                if (val) {
                                    console.log(val);
                                    that.gstNo = (val[localStorage.getItem('customerOrgID')][0]['customer'].GSTNumber);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerEmployeeOrderComponent.prototype.getdata = function (event) {
        console.log(event);
        this.getGSTNumber();
        this.pp = event;
        // this.pp=  JSON.stringify(event,null,'\t');
        // console.log(this.pp)
        this.orderNumber = event.orderNumber;
        this.orderId = event.ID;
        this.vendorName = event.vendor.name;
        this.employeeName = event.customer.name;
        this.shippingAddress = event.customer.addressShipping;
        this.billingAddress = event.customer.addressBilling;
        // this.gstNo = "";
        this.poNumber = event.PO_Number;
        this.poDate = event.PO_Date;
        this.orderDate = event.orderDate;
        this.statusComment = event.orderStatus.comment;
        this.orderStatus = event.orderStatus.status;
        this.orderAmount = event.orderAmount;
        if (this.orderStatus == '6') {
            this.orderStatusPayment = event.orderPayment.status.paymentStatus;
        }
        else {
            this.orderStatusPayment = "0";
        }
        this.goodsServiceDiscount = event.goodsService[0].discount;
        console.log(event.goodsService[0].discount);
        var x = {};
        for (var i = 0; i < event.goodsService.length; i++) {
            // var tempdata = {};
            x[event.goodsService[0].name] = event.goodsService[0].discount;
            // x += tempdata;
            // x.push({ 'name':event.goodsService[0].name, 'discount': event.goodsService[0].discount })
        }
        // x += '}'
        this.goodsServicesDiscount = JSON.stringify(x, undefined, 2);
        console.log(this.goodsServicesDiscount);
        // }
    };
    CustomerEmployeeOrderComponent.prototype.transferOwnerShip = function (orderNumber, newOwnerPublicKey) {
        if (orderNumber === void 0) { orderNumber = this.orderNumber; }
        if (newOwnerPublicKey === void 0) { newOwnerPublicKey = this.newOwnerPublicKey; }
        var that = this;
        console.log("transferOwnerShip", orderNumber, newOwnerPublicKey);
        var payload = {
            "orderNumber": orderNumber,
            "newOwnerPublicKey": newOwnerPublicKey
        };
        alert('transfered');
        this.blockchainService.transferOwnership(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                that.goodsServicesDiscount = "";
            }
        });
    };
    CustomerEmployeeOrderComponent.prototype.invoiceDataUpload = function () {
        var that = this;
        console.log(this.invoiceData.value);
        var payload = this.invoiceData.value;
        payload['paymentStatus'] = '1';
        payload['orderNumber'] = this.orderNumber;
        payload['vendor'] = {};
        payload.vendor['employeeName'] = this.name;
        console.log(payload);
        this.blockchainService.orderPayment(payload).subscribe(function (val) {
            console.log(payload);
            console.log(event);
            if (val) {
                console.log("acceptOrder", val);
                // that.invoiceData['value'={}
            }
        });
    };
    CustomerEmployeeOrderComponent.prototype.statusUpdateMethod = function (status) {
        var that = this;
        console.log(this.statusUpdate.value);
        var payload = this.statusUpdate.value;
        payload['orderNumber'] = this.orderNumber;
        payload['orderStatus'] = status;
        payload['vendor'] = {};
        payload['vendor']['employeeName'] = this.name;
        console.log(payload);
        this.blockchainService.orderStatus(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                console.log("payload data", payload);
                // if (JSON.parse(val['response']['body']).data[0].status == 'COMMITTED') {
                //   that.goodsServicesDiscount = ""
                var ud = that.blockchainService.updateOrders({ 'id': val['userid'] });
                console.log(ud);
                window['ud'] = ud;
                //   window.alert("Order Status Update Successfull  \n OrderID:" + val['userid']);
                // } else {
                //   window.alert("Order Status Updation Failed  \n Status:" + JSON.parse(val['response']['body']).data[0].status + "\n Error Message: " + JSON.parse(val['response']['body']).data[0]['invalid_transactions'][0].message)
                // }
            }
        });
    };
    CustomerEmployeeOrderComponent.prototype.paymentStatusUpdateMethod = function (status) {
        var that = this;
        console.log(this.statusUpdate.value);
        var payload = this.statusUpdate.value;
        payload['orderNumber'] = this.orderNumber;
        payload['paymentStatus'] = status;
        console.log(payload);
        this.blockchainService.orderPaymentStatus(payload).subscribe(function (val) {
            if (val) {
                console.log("paymentStatus", val);
            }
        });
    };
    CustomerEmployeeOrderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CustomerEmployeeOrderComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], CustomerEmployeeOrderComponent.prototype, "sort", void 0);
    CustomerEmployeeOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-employee-order',
            template: __webpack_require__(/*! ./customer-employee-order.component.html */ "./src/app/customer-employee-order/customer-employee-order.component.html"),
            styles: [__webpack_require__(/*! ./customer-employee-order.component.css */ "./src/app/customer-employee-order/customer-employee-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], CustomerEmployeeOrderComponent);
    return CustomerEmployeeOrderComponent;
}());



/***/ }),

/***/ "./src/app/customer-employee/customer-employee.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/customer-employee/customer-employee.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\n  color: #007bff;\n  cursor: pointer;\n    }\n    #nav:hover{\n      color:black;\n    }\n    .tab_header{\n     padding:5px;\n     border-radius: 7px;\n     width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n   }\n    .tab_body{\n    padding:5px;\n    border-radius: 7px; \n    width:97%;\n    margin-left: auto;\n    margin-right: auto;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: center;\n  }\n    .cont{\n    margin:5px 1.5% 5px 1.5%; \n  }\n    .tab_body{\n    padding:5px;\n    border-radius: 7px; \n    width:97%;\n    margin-left: auto;\n    margin-right: auto;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: left;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItZW1wbG95ZWUvY3VzdG9tZXItZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0lBQ2I7SUFDQTtNQUNFLFdBQVc7SUFDYjtJQUNEO0tBQ0UsV0FBVztLQUNYLGtCQUFrQjtLQUNsQixXQUFXO0lBQ1osNEVBQTRFO0lBQzVFLGtCQUFrQjtHQUNuQjtJQUVBO0lBQ0MsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQiw0RUFBNEU7R0FDNUUsa0JBQWtCO0VBQ25CO0lBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7SUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7R0FDbkIsNEVBQTRFO0dBQzVFLGdCQUFnQjtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWVtcGxveWVlL2N1c3RvbWVyLWVtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2e1xuICBjb2xvcjogIzAwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAjbmF2OmhvdmVye1xuICAgICAgY29sb3I6YmxhY2s7XG4gICAgfVxuICAgLnRhYl9oZWFkZXJ7XG4gICAgIHBhZGRpbmc6NXB4O1xuICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuIFxuICAgLnRhYl9ib2R5e1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDsgXG4gICAgd2lkdGg6OTclO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNvbnR7XG4gICAgbWFyZ2luOjVweCAxLjUlIDVweCAxLjUlOyBcbiAgfVxuICAudGFiX2JvZHl7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4OyBcbiAgICB3aWR0aDo5NyU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/customer-employee/customer-employee.component.html":
/*!********************************************************************!*\
  !*** ./src/app/customer-employee/customer-employee.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\r\n\r\n    </a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right\" style=\"display:inline;\">\r\n\r\n\r\n        <div style=\"display: inline-block\">\r\n            <div style=\"display: inline-block\">\r\n                {{name}}\r\n            </div>\r\n            &nbsp;\r\n            <div style=\"display: inline-block\">\r\n                <a class=\"nav-link\" (click)=\"setlogout()\">\r\n                    <i class=\"fa fa-sign-out fa-lg\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</nav>\r\n<br>\r\n<div class=\"cont\">\r\n    <div class=\"tab_header \">\r\n        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" data-toggle=\"pill\" (click)=\"employee()\" style=\"cursor:pointer;\">\r\n                    <h6>About</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendortable()\" style=\"cursor:pointer;\">\r\n                    <h6>Goods/Services</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendorinfo()\" style=\"cursor:pointer;\">\r\n                    <h6>Order</h6>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"tab_body\">\r\n    <br><br>\r\n    <router-outlet></router-outlet>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "./src/app/customer-employee/customer-employee.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/customer-employee/customer-employee.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEmployeeComponent", function() { return CustomerEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var CustomerEmployeeComponent = /** @class */ (function () {
    function CustomerEmployeeComponent(data, http, httpClient, route, router, Auth, blockchainService) {
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.Auth = Auth;
        this.blockchainService = blockchainService;
        this.message = "Loading...";
        this.username = "";
        this.name = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    CustomerEmployeeComponent.prototype.ngOnInit = function () {
        // this.user.getSomeData().subscribe(data => {
        //   this.message = data.message
        //   if(!data.success){
        //     localStorage.removeItem('loggedIn')
        //   }
        // })
        this.employee();
    };
    CustomerEmployeeComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    CustomerEmployeeComponent.prototype.vendortable = function () {
        this.router.navigate(['goods'], { relativeTo: this.route });
    };
    CustomerEmployeeComponent.prototype.employee = function () {
        this.router.navigate(['info'], { relativeTo: this.route });
    };
    CustomerEmployeeComponent.prototype.vendorinfo = function () {
        this.router.navigate(['orders'], { relativeTo: this.route });
    };
    CustomerEmployeeComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['employee'].name);
            }
        });
    };
    CustomerEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-employee',
            template: __webpack_require__(/*! ./customer-employee.component.html */ "./src/app/customer-employee/customer-employee.component.html"),
            styles: [__webpack_require__(/*! ./customer-employee.component.css */ "./src/app/customer-employee/customer-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"]])
    ], CustomerEmployeeComponent);
    return CustomerEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/customer-info/customer-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-info/customer-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n\n.tab_header {\n    padding: 5px;\n    border-radius: 7px;\n    width: 400px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n}\n\n.cont {\n    margin-left: 2%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n}\n\n.info {\n    text-align: left;\n    margin-left: 3%;\n    word-break: break-word;\n    font-weight: 200;\n}\n\n.tab_body {\n    padding: 5px;\n    border-radius: 7px;\n    width: 97%;\n    margin-left: auto;\n    margin-right: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: left;\n}\n\n.field-info {\n    padding-left: 10px;\n}\n\n/* .tab_bar {\n    border-radius: 7px;\n    margin-left: auto;\n    margin-right: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: left;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItaW5mby9jdXN0b21lci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEVBQTRFO0lBQzVFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFHQTs7Ozs7O0dBTUciLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci1pbmZvL2N1c3RvbWVyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJfaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmluZm8ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnRhYl9ib2R5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHdpZHRoOiA5NyU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZpZWxkLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG4vKiAudGFiX2JhciB7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/customer-info/customer-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-info/customer-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vendor\">\n    <div>\n        <h5 style=\"text-align: center;\">Welcome Customer</h5>\n    </div><br>\n    <div style=\"text-align:center;height:150px;\">\n        <img src=\"/assets/profile.png\">\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Full Name</span>\n                </div>\n                <div class=\"field-info\">{{name | uppercase}}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Email</span>\n                </div>\n                <div class=\"field-info\">{{email}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Contact No.</span>\n                </div>\n                <div class=\"field-info\">{{contactNumber}}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">GST No.</span>\n                </div>\n                <div class=\"field-info\">{{GSTNumber}}</div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Address</span>\n                </div>\n                <div id=\"fullAddress\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Public Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(1)\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                            aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                            </path>\n                        </svg>\n                    </span>\n                </div>\n                <div class=\"field-info\">{{publicKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Private Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(2)\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                            aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                            </path>\n                        </svg>\n                    </span>\n                    <span class=\"mx-3\" (click)=\"download()\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\n                            class=\"octicon octicon-cloud-download\" aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\">\n                            </path>\n                        </svg>\n                    </span>\n                </div>\n                <div class=\"field-info\">{{privateKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <br><br>\n\n    <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-2\">\n            <button class=\"button button-lg\" data-toggle=\"modal\" data-target=\"#customer\">Add Employee</button>\n        </div>\n        <div class=\"col-sm-2\">\n\n            <button class=\"button\" data-toggle=\"modal\" data-target=\"#bulk\">Bulk Registration</button>\n        </div>\n        <div class=\"col-sm-4\">\n\n        </div>\n\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"bulk\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Bulk Registration</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n            </div>\n            <div class=\"modal-body\"> \n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <!-- <p for=\"input\" style=\"float:left;\">Bulk Registration</p> -->\n                        <input type=\"file\" class=\"upload \" (change)=\"updateFileData($event.target.files)\" accept=\".csv\">\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"bulkRegister()\" [disabled]=\"!bulkUploadAction\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"customer\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <!--Header-->\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Register Employee</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"registerEmployee\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                        <label for=\"email1\">Address</label>\n                        <input type=\"email\" formControlName=\"address\" class=\"form-control\" id=\"address1\" placeholder=\"Enter Address\">\n                    </div> -->\n                    <div class=\"form-group\">\n                        <label for=\"contact1\">Email</label>\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email1\" placeholder=\"Enter Valid Email ID\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"contact1\">Contact No.</label>\n                        <input type=\"text\" formControlName=\"contactNumber\" class=\"form-control\" id=\"contact1\" placeholder=\"Enter Contact Number\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"role1\">Select Role</label>\n                        <select class=\"form-control\" formControlName=\"role\" id=\"role1\">\n                            <option *ngFor=\"let rr of Roles\" [value]=\"rr.value\">{{rr.role}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"publicKey1\">Public Key</label>\n                        <input type=\"text\" formControlName=\"publicKey\" class=\"form-control\" id=\"publicKey1\" placeholder=\"Enter Employee's Public Key\">\n                    </div>\n                    <!-- <button type=\"submit\" [disabled]=\"!registerUser.valid\" class=\"btn btn-primary\">Submit</button> -->\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"row\">\n               \n                    <div class=\"col-lg-6 col-sm-6\" style=\"margin-bottom:10px;margin-top:10px;\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                    <div class=\"col-lg-6 col-sm-6\" style=\"margin-bottom:10px;margin-top:10px;\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"registerCustomerOrgEmployee()\" [disabled]=\"!registerEmployee.valid\">Add</button>\n                    </div>  \n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Modal -->"

/***/ }),

/***/ "./src/app/customer-info/customer-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-info/customer-info.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function() { return CustomerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CustomerInfoComponent = /** @class */ (function () {
    function CustomerInfoComponent(data, http, httpClient, blockchainService, fb) {
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.fb = fb;
        this.bulkupload = false;
        this.bulkupload1 = false;
        this.bulkFile = '';
        this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.registerEmployee = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            publicKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            role: ['1'],
            contactNumber: ['']
        });
        this.Roles = [
            { role: "Employee", value: 1 },
            { role: "Admin", value: 2 }
        ];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    CustomerInfoComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['customer'].name);
                that.id = (val[_this.username][0]['customer'].ID);
                that.address = JSON.parse((val[_this.username][0]['customer'].address).replace(/'/g, "\""));
                that.email = (val[_this.username][0]['customer'].email);
                that.GSTNumber = (val[_this.username][0]['customer'].GSTNumber);
                that.contactNumber = (val[_this.username][0]['customer'].contactNumber);
                that.publicKey = (val[_this.username][0]['customer'].publicKey);
                that.privateKey = localStorage.getItem('private');
                console.log(that.name, that.id, that.address, that.email);
                _this.showAddress();
            }
        });
    };
    CustomerInfoComponent.prototype.showAddress = function () {
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        var y = "";
        var flag = true;
        var duplicates = "";
        for (var key in this.address) {
            if (flag) {
                flag = false;
                duplicates = this.address[key];
                continue;
            }
            if (duplicates == this.address[key]) {
                continue;
            }
            duplicates = this.address[key];
            var x = "<div class='field-header'>";
            if (col.indexOf(key) === -1) {
                col.push(key);
                // x += "<span class='h5 mr-3' >" + key.toUpperCase() + "</span>";
                // x += "</div>";
                x += "<div class='field-info' style='padding-left:10px;'>" + this.address[key] + "</div>";
            }
            x += "</div>";
            y += x;
        }
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("fullAddress");
        divContainer.innerHTML = y;
        // divContainer.append(y);
    };
    CustomerInfoComponent.prototype.updateFileData = function (files) {
        var that = this;
        console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            this.uploadFile = file;
            this.bulkupload = true;
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            // if (file.type == "text/csv") {
            //   let reader: FileReader = new FileReader();
            //   reader.readAsText(file);
            //   reader.onload = (e) => {
            //     let csv: string = reader.result as string;
            //     console.log(csv);
            //   }
            // }
        }
    };
    CustomerInfoComponent.prototype.registerCustomerOrgEmployee = function () {
        console.log(this.registerEmployee.value);
        var that = this;
        var payload = this.registerEmployee.value;
        payload['orgName'] = this.name;
        console.log(payload);
        this.blockchainService.registerCustomerOrgEmployee(payload).subscribe(function (val) {
            if (val) {
                console.log(val);
                if (JSON.parse(val['response']['body']).data[0].status == 'COMMITTED') {
                    window.alert("Employee Registration Successfull \n UserID:" + val['userid']);
                    var couchpayload = {};
                    couchpayload['data'] = {};
                    couchpayload['data'] = payload;
                    couchpayload['id'] = val['userid'];
                    couchpayload['data']['userType'] = 4;
                    couchpayload['data']['customerID'] = localStorage.getItem('userID');
                    couchpayload['data']['customerName'] = localStorage.getItem('name');
                    couchpayload['data']['GSTNumber'] = localStorage.getItem('GSTNumber');
                    // couchpayload['data']['publicKey'] = payload['employeeAddress'];
                    couchpayload['data']['owner'] = payload['publicKey'];
                    // delete couchpayload['data']['employeeAddress']
                    that.blockchainService.registerEmployeeDB(couchpayload).subscribe(function (val) {
                        if (val) {
                            console.log(val);
                            // this.userid = val['userid']
                            // this.Auth.setuserid(this.userid);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    window.alert("Employee Registration Error: \n " + JSON.parse(val['response']['body']).data[0].status);
                }
            }
        });
    };
    CustomerInfoComponent.prototype.showKey = function (PubPvt) {
        if (PubPvt == 1) {
            if (this.publicKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.publicKeyHide = this.publicKey;
            }
            else {
                this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
        else if (PubPvt == 2) {
            if (this.privateKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.privateKeyHide = this.privateKey;
            }
            else {
                this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
    };
    CustomerInfoComponent.prototype.download = function () {
        var data = JSON.stringify({
            "PublicKey": this.publicKey,
            "PrivateKey": this.privateKey
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', this.name + ".priv");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    CustomerInfoComponent.prototype.changeListener = function (files) {
        var that = this;
        console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            this.uploadFile = file;
            this.bulkupload = true;
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            // if (file.type == "text/csv") {
            //   let reader: FileReader = new FileReader();
            //   reader.readAsText(file);
            //   reader.onload = (e) => {
            //     let csv: string = reader.result as string;
            //     console.log(csv);
            //   }
            // }
        }
    };
    CustomerInfoComponent.prototype.bulkRegister = function () {
        var _this = this;
        console.log(this.bulkFile);
        var that = this;
        var blockchainPayload = {};
        blockchainPayload['action'] = this.bulkFile;
        console.log("Action name ", blockchainPayload['action']);
        if (this.uploadFile) {
            console.log("Entering here");
            blockchainPayload['file'] = this.uploadFile;
            console.log("Now here", this.uploadFile);
            this.blockchainService.bulkUpload(blockchainPayload).subscribe(function (val) {
                if (val) {
                    console.log(val);
                    var allResponseData = {};
                    allResponseData['COMMITTED'] = [];
                    allResponseData['INVALID'] = [];
                    var Registered = {};
                    Registered['newEmployee'] = [];
                    Registered['AlreadyOnNetwork'] = [];
                    val['response'].forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var couchpayload;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(element);
                                    if (!(element['response'].status == 'COMMITTED')) return [3 /*break*/, 2];
                                    couchpayload = {};
                                    couchpayload['data'] = {};
                                    couchpayload['data'] = element['request'];
                                    couchpayload['id'] = element['response']['UserID'];
                                    couchpayload['data']['userType'] = 4;
                                    couchpayload['data']['publicKey'] = element['request']['publicKey'];
                                    couchpayload['data']['owner'] = element['request']['publicKey'];
                                    delete couchpayload['data']['employeeAddress'];
                                    console.log(couchpayload);
                                    allResponseData['COMMITTED'].push({
                                        data: element['request'],
                                        UserID: element['response']['UserID']
                                    });
                                    return [4 /*yield*/, that.blockchainService.registerEmployeeDB(couchpayload).subscribe(function (val) {
                                            if (val['ok']) {
                                                console.log(val);
                                                Registered['newEmployee'].push(val);
                                                // this.userid = val['userid']
                                                // this.Auth.setuserid(this.userid);
                                            }
                                        }, function (err) {
                                            // console.log(err)
                                            Registered['AlreadyOnNetwork'].push(couchpayload['id']);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    allResponseData['INVALID'].push({
                                        data: element['request'],
                                        UserID: element['response']['invalid_transactions']
                                    });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log(allResponseData);
                    console.log(Registered);
                }
            }, function (err) {
                console.log(err.message);
            });
        }
    };
    CustomerInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-info',
            template: __webpack_require__(/*! ./customer-info.component.html */ "./src/app/customer-info/customer-info.component.html"),
            styles: [__webpack_require__(/*! ./customer-info.component.css */ "./src/app/customer-info/customer-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
}());



/***/ }),

/***/ "./src/app/customer-organization/customer-organization.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/customer-organization/customer-organization.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLW9yZ2FuaXphdGlvbi9jdXN0b21lci1vcmdhbml6YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customer-organization/customer-organization.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customer-organization/customer-organization.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Works!</p>\n"

/***/ }),

/***/ "./src/app/customer-organization/customer-organization.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer-organization/customer-organization.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrganizationComponent", function() { return CustomerOrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerOrganizationComponent = /** @class */ (function () {
    function CustomerOrganizationComponent() {
    }
    CustomerOrganizationComponent.prototype.ngOnInit = function () {
    };
    CustomerOrganizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-organization',
            template: __webpack_require__(/*! ./customer-organization.component.html */ "./src/app/customer-organization/customer-organization.component.html"),
            styles: [__webpack_require__(/*! ./customer-organization.component.css */ "./src/app/customer-organization/customer-organization.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerOrganizationComponent);
    return CustomerOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/customer-table-employee/customer-table-employee.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/customer-table-employee/customer-table-employee.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLXRhYmxlLWVtcGxveWVlL2N1c3RvbWVyLXRhYmxlLWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer-table-employee/customer-table-employee.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/customer-table-employee/customer-table-employee.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"col-md-12\">\n    <div class=\"card\" style=\"  overflow: auto;\">\n        <!-- <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title \">Employee</h4>\n            <p class=\"card-category\"> Employee Details</p>\n        </div> -->\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"table-responsive\">\n                            <!-- <ng-container matColumnDef=\"id\" >\n                                                    <th mat-header-cell *matHeaderCellDef> Employee ID </th>\n                                                    <td mat-cell *matCellDef=\"let element\" > {{element.ID}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                                    </td>\n                                                </ng-container> -->\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"email\">\n                                <th mat-header-cell *matHeaderCellDef> Email </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.email}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"contact\">\n                                <th mat-header-cell *matHeaderCellDef> Contact </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    {{element.contactNumber}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"publicKey\">\n                                <th mat-header-cell *matHeaderCellDef> Public Key </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.PublicKey}}&nbsp;&nbsp;&nbsp;&nbsp; </td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"role\">\n                                <th mat-header-cell *matHeaderCellDef> Role </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <p *ngIf=\"element.role=='1';\" style=\"position: absolute;\">Employee</p>\n                                    <p *ngIf=\"element.role=='2';\" style=\"position: absolute;\">Admin</p>\n                                    &nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n\n    </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/customer-table-employee/customer-table-employee.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer-table-employee/customer-table-employee.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerTableEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableEmployeeComponent", function() { return CustomerTableEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var CustomerTableEmployeeComponent = /** @class */ (function () {
    function CustomerTableEmployeeComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.displayedColumns = [
            // 'id',
            'name',
            'email',
            'contact',
            // 'publicKey',
            'role'
        ];
        this.Roles = ["Employee", "Admin"];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    CustomerTableEmployeeComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('customerEmployee').subscribe(function (val) {
            if (val) {
                console.log(val);
                for (var i = 0; i < val['entity'].length; i++) {
                    // console.log(val['entity'][i]);
                    if (val['entity'][i].hasOwnProperty('customer') && val['entity'][i].hasOwnProperty('employee') && val['entity'][i]['customer'].ID == that.username) {
                        console.log(val['entity'][i]);
                        that.package_list.push(val['entity'][i]['employee']);
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    CustomerTableEmployeeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CustomerTableEmployeeComponent.prototype, "paginator", void 0);
    CustomerTableEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-table-employee',
            template: __webpack_require__(/*! ./customer-table-employee.component.html */ "./src/app/customer-table-employee/customer-table-employee.component.html"),
            styles: [__webpack_require__(/*! ./customer-table-employee.component.css */ "./src/app/customer-table-employee/customer-table-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], CustomerTableEmployeeComponent);
    return CustomerTableEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/customer-table-goods/customer-table-goods.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/customer-table-goods/customer-table-goods.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n  mat-checkbox {\n    color: white;\n \n   \n\n \n}\n  .tab_header{\n  padding:5px;\n  border-radius: 7px;\n  width: 400px;\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: center;\n}\n  .cont{\n  margin-left:2%;\n  margin-left: auto;\n  margin-right:auto;\n  width:90%;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItdGFibGUtZ29vZHMvY3VzdG9tZXItdGFibGUtZ29vZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7Ozs7O0FBS2hCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYiw0RUFBNEU7Q0FDNUUsa0JBQWtCO0FBQ25CO0VBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixTQUFTOztBQUVYIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItdGFibGUtZ29vZHMvY3VzdG9tZXItdGFibGUtZ29vZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgbWF0LWNoZWNrYm94IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gXG4gICBcblxuIFxufVxuLnRhYl9oZWFkZXJ7XG4gIHBhZGRpbmc6NXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdpZHRoOiA0MDBweDtcbiBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250e1xuICBtYXJnaW4tbGVmdDoyJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICB3aWR0aDo5MCU7XG4gIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer-table-goods/customer-table-goods.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/customer-table-goods/customer-table-goods.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <!-- <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title \">Goods/Services</h4>\n            <p class=\"card-category\"> Goods/Service Details</p>\n        </div> -->\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"table-responsive\">\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"creator\">\n                                <th mat-header-cell *matHeaderCellDef> Creator </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.creator}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"vname\">\n                                <th mat-header-cell *matHeaderCellDef> Vendor Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.vname}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/customer-table-goods/customer-table-goods.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/customer-table-goods/customer-table-goods.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerTableGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableGoodsComponent", function() { return CustomerTableGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");







var CustomerTableGoodsComponent = /** @class */ (function () {
    function CustomerTableGoodsComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.displayedColumns = [
            // 'id',
            'name',
            // 'unit',
            'creator',
            'vname',
        ];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    CustomerTableGoodsComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('goods').subscribe(function (val) {
            if (val) {
                console.log(val['entity'][0]);
                for (var i = 0; i < val['entity'].length; i++) {
                    // console.log(val['entity'][i]);
                    {
                        console.log(val['entity'][i]);
                        var payload = {
                            'id': val['entity'][i]['goods']['ID'],
                            'name': val['entity'][i]['goods']['name'],
                            'unit': val['entity'][i]['goods']['unit'],
                            'creator': val['entity'][i]['vendor']['creator'],
                            'vname': val['entity'][i]['vendor']['name'],
                        };
                        that.package_list.push(payload);
                        //that.package_list.push(val['entity'][i]['vendor'].creator)
                        //creator to be added
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
                var initialSelection = [];
                var allowMultiSelect = true;
                _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](allowMultiSelect, initialSelection);
            }
        });
    };
    CustomerTableGoodsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
        console.log(numSelected);
        console.log(this.selection);
    };
    CustomerTableGoodsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        console.log(this.dataSource.data.forEach(function (row) { return _this.selection.select(row); }));
    };
    CustomerTableGoodsComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
    };
    CustomerTableGoodsComponent.prototype.placeOrder = function () {
        console.log(this.selection);
        var x = [];
        // window["ss"]=this.selection;
        x.push(this.selection['selected']);
        this.selectedOrder = JSON.stringify(x);
        // console.log(this.selectedOrder)
        //     for(var i=0;i<event.goodsService.length;i++){
        // x.push({'name':event.goodsService[0].name,'discount':event.goodsService[0].discount})
        //     }
        //     console.log(this.goodsServicesDiscount);
    };
    CustomerTableGoodsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CustomerTableGoodsComponent.prototype, "paginator", void 0);
    CustomerTableGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-table-goods',
            template: __webpack_require__(/*! ./customer-table-goods.component.html */ "./src/app/customer-table-goods/customer-table-goods.component.html"),
            styles: [__webpack_require__(/*! ./customer-table-goods.component.css */ "./src/app/customer-table-goods/customer-table-goods.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], CustomerTableGoodsComponent);
    return CustomerTableGoodsComponent;
}());



/***/ }),

/***/ "./src/app/customer-table-orders/customer-table-orders.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/customer-table-orders/customer-table-orders.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n  background-color: #007bff;\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\nmat-cell{\r\n  position: relative;\r\n}\r\n.tab_model{\r\n  /* padding:5px; */\r\n  word-break: break-word;\r\n  border-radius: 7px;\r\n  width: 100%;\r\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n text-align: left;\r\n margin-top: 15px;\r\n}\r\n.tab_body{\r\n padding:5px;\r\n border-radius: 7px;  \r\n width:97%;\r\n margin-left: auto;\r\n margin-right: auto;\r\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\ntext-align: left;\r\n}\r\n.info{\r\n text-align: left;\r\n margin-left: 5%;\r\n word-break: break-word;\r\n font-weight: 350;\r\n}\r\n.cont{\r\n margin: 5px 1.5% 5px 1.5%;\r\n}\r\n.div_model{\r\n margin-left:auto;\r\n margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItdGFibGUtb3JkZXJzL2N1c3RvbWVyLXRhYmxlLW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0NBQ1osNEVBQTRFO0NBQzVFLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkIsNEVBQTRFO0FBQzVFLGdCQUFnQjtBQUNoQjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci10YWJsZS1vcmRlcnMvY3VzdG9tZXItdGFibGUtb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNnB4IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5tYXQtY2VsbHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRhYl9tb2RlbHtcclxuICAvKiBwYWRkaW5nOjVweDsgKi9cclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB3aWR0aDogMTAwJTtcclxuIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRhYl9ib2R5e1xyXG4gcGFkZGluZzo1cHg7XHJcbiBib3JkZXItcmFkaXVzOiA3cHg7ICBcclxuIHdpZHRoOjk3JTtcclxuIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5pbmZve1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxuIG1hcmdpbi1sZWZ0OiA1JTtcclxuIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiBmb250LXdlaWdodDogMzUwO1xyXG59XHJcbi5jb250e1xyXG4gbWFyZ2luOiA1cHggMS41JSA1cHggMS41JTtcclxufVxyXG4uZGl2X21vZGVse1xyXG4gbWFyZ2luLWxlZnQ6YXV0bztcclxuIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer-table-orders/customer-table-orders.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customer-table-orders/customer-table-orders.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n        <!-- <div class=\"card-header card-header-danger\">\r\n            <h4 class=\"card-title \">Orders</h4>\r\n            <p class=\"card-category\"> Order Details</p>\r\n        </div> -->\r\n        <div class=\"card-body\">\r\n            <ng-container>\r\n                <div class=\"mat-elevation-z8 \">\r\n                    <div class=\"table-specification\">\r\n                        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-responsive\">\r\n                        \r\n                            <ng-container matColumnDef=\"orderNumber\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Number&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <!-- <td mat-cell *matCellDef=\"let element\"> {{element.orderNumber}}&nbsp;&nbsp;&nbsp;&nbsp;</td>localStorage.customerOrgID==element.customer.employeeID-->\r\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.orderNumber}}\r\n                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"PO_Date\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Date&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\">{{element.PO_Date}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"PO_Number\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Number&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </th>\r\n\r\n                                <td mat-cell *matCellDef=\"let element\">{{element.PO_Number}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderAmount\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Amount&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderAmount}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderDate\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Date&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderDate}} &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderHandler\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Handler&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderHandler}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"owner\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.owner}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"globalStatus\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                                    Order Status&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    {{element.globalStatus}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"register\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-xl\">\r\n        <div class=\"modal-content\">\r\n            <!--Header-->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Order Details</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n         \r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"row tab_model\" *ngIf=\"orderStatusPayment!='2' && orderStatus!='3'\" style=\"margin-left:auto;margin-right: auto;\">\r\n                    <div class=\"col-sm-8\">\r\n\r\n                        <label>Update Delegator's Public Key</label>\r\n                        <input type=\"text\" name=\"Enter Comment\" (keyup)=\"search()\" id=\"userNameSearch\" style=\"margin-bottom:5px;width:100%\" placeholder=\"Enter Delegator's Name\">\r\n                        <input type=\"text\" *ngIf=\"isDelegatorSelected\" [(ngModel)]=\"newOwnerPublicKey\">\r\n                    </div>\r\n                    <div class=\"col-sm-4\" style=\"padding-top:20px;\">\r\n\r\n\r\n                        <button class=\"button\" (click)=\"transferOwnerShip()\">Update\r\n\r\n                            Handler</button>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n   <div class=\"row\">\r\n        <div class=\"col-sm-6 col-xl-6\"> \r\n                <table class=\"table table-hover tab_model\" style=\"width:100%;word-break: break-word;\">\r\n\r\n                    <tbody>\r\n                        <!-- <tr>\r\n                                        <td>Order No.</td>\r\n                                        <td>\r\n                                            <p>{{pp?.ID}}</p>\r\n                                        </td>\r\n    \r\n                                    </tr> -->\r\n                        <tr *ngIf=\"pp?.orderNumber\">\r\n                            <td>Order Number</td>\r\n                            <td>\r\n                                <p>{{pp?.orderNumber}}</p>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.PO_Number\">\r\n\r\n                            <td>PO Number</td>\r\n                            <td>{{pp?.PO_Number}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.PO_Date\">\r\n                            <td>PO Date</td>\r\n                            <td>{{pp?.PO_Date}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.orderAmount\">\r\n                            <td>Order Amount</td>\r\n                            <td>{{pp?.orderAmount}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.orderDate\">\r\n                            <td>Order Date</td>\r\n                            <td>\r\n                                <p>{{pp?.orderDate}}</p>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr *ngIf=\"pp?.orderHandler\">\r\n                            <td>Order Handler</td>\r\n                            <td>\r\n                                <p>{{pp?.orderHandler}}</p>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.salesServiceTaxAmount\">\r\n                            <td>Sales Service TaxAmount</td>\r\n                            <td>\r\n                                <p>{{pp?.salesServiceTaxAmount}}</p>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.owner\">\r\n                            <td>Owner</td>\r\n                            <td>\r\n                                <p>{{pp?.owner}}</p>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"pp?.vendor?.name\">\r\n                            <td>Vendor Name</td>\r\n                            <td>\r\n                                <p>{{pp?.vendor?.name}}</p>\r\n                            </td>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n                <table class=\"table table-hover tab_model\" *ngIf=\"pp?.goodsService.length\" style=\"width:100%;word-break: break-word;\">\r\n                    <tr>\r\n                        <td>Goods</td>\r\n                        <td>\r\n                            <table>\r\n                                <tr style=\"font-weight: 300;\">\r\n                                    <td>Name</td>\r\n                                    <td>Quantity</td>\r\n                                    <td>Rate</td>\r\n                                    <td>Discount</td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let g of pp?.goodsService\">\r\n                                    <td>{{g.name}}</td>\r\n                                    <td>{{g.quantity}}</td>\r\n                                    <td>{{g.rate}}</td>\r\n                                    <td>{{g.discount}}</td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n\r\n            </div>\r\n            <div class=\"col-sm-6 col-xl-6\">\r\n\r\n                <div *ngIf=\"pp?.orderStatus?.comment || pp?.orderStatus?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\r\n                    <div class=\"col-lg-3\">\r\n                        <p>Order Status</p>\r\n                    </div>\r\n                    <div class=\"col-lg-9\">\r\n                        <div *ngIf=\"pp?.orderStatus?.comment\" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Comment:</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderStatus?.comment}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"pp?.orderStatus?.employeeID\" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Employee Id :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderStatus?.employeeID}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div *ngIf=\"pp?.customer?.ID || pp?.customer?.addressBilling || pp?.customer?.addressShipping || pp?.customer?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\r\n                    <div class=\"col-lg-3\">\r\n                        <p>Customer</p>\r\n                    </div>\r\n                    <div class=\"col-lg-9\">\r\n                        <div class=\"row\" *ngIf=\"pp?.customer?.ID\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>ID :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.customer?.ID}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row\" *ngIf=\"pp?.customer?.addressBilling\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Address Billing :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.customer?.addressBilling}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row\" *ngIf=\"pp?.customer?.addressShipping\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Address Shipping :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.customer?.addressShipping}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"row\" *ngIf=\"pp?.customer?.employeeID\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Employee ID :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.customer?.employeeID}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row tab_model\" *ngIf=\"pp?.orderPayment?.invoiceAmount || pp?.orderPayment?.invoiceDate ||pp?.orderPayment?.invoiceNumber|| pp?.orderPayment?.status?.comment||pp?.orderPayment?.status?.updater\" style=\"margin-left:auto;margin-right: auto;\">\r\n                    <div class=\"col-lg-3\">\r\n                        <p>Order Payment</p>\r\n                    </div>\r\n                    <div class=\"col-lg-9\">\r\n                        <div *ngIf=\"pp?.orderPayment?.invoiceAmount\" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Invoice Amount :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderPayment?.invoiceAmount}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\" pp?.orderPayment?.invoiceDate \" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Invoice Date :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderPayment?.invoiceDate}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"pp?.orderPayment?.invoiceNumber\" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Invoice Number :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderPayment?.invoiceNumber}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"pp?.orderPayment?.status?.comment\" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Status Comment :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderPayment?.status?.comment}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        <div *ngIf=\"pp?.orderPayment?.status?.updater\" class=\"row\">\r\n                            <div class=\"col-lg-4\">\r\n                                <p>Status updater :</p>\r\n                            </div>\r\n                            <div class=\"col-lg-8\">\r\n                                <p>{{pp?.orderPayment?.status?.updater}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer-table-orders/customer-table-orders.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer-table-orders/customer-table-orders.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerTableOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableOrdersComponent", function() { return CustomerTableOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var CustomerTableOrdersComponent = /** @class */ (function () {
    function CustomerTableOrdersComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.sortedlist = [];
        this.orderId = "";
        this.orderNumber = "";
        this.vendorName = "";
        this.employeeName = "";
        this.shippingAddress = "";
        this.billingAddress = "";
        this.gstNo = "";
        this.poNumber = "";
        this.poDate = "";
        this.orderDate = "";
        this.statusComment = "";
        this.orderStatus = "";
        this.employeeKey = "";
        this.orderAmount = "";
        this.newOwnerPublicKey = "";
        this.goodsServicesDiscount = "";
        this.orderStatusPayment = "";
        this.displayedColumns = [
            // 'id',
            'orderNumber',
            'PO_Date',
            'PO_Number',
            'orderAmount',
            'orderDate',
            'orderHandler',
            'owner',
            'globalStatus',
        ];
        this.OrderStatus = ["", "Created", "Awarded", "Discarted", "Returned", "Accepted", "Delivered", "Invoice Genrated", "Invoice Paid"];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
        console.log("helli");
    }
    CustomerTableOrdersComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('order').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var from, to, dataAtATime, ownerIDName, i, waitResponseOH, waitResponseOw, waitResponseCI, waitResponseCE, orderData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!val) return [3 /*break*/, 18];
                        from = 0;
                        to = val['entity'].length;
                        dataAtATime = 2;
                        ownerIDName = {};
                        i = from;
                        _a.label = 1;
                    case 1:
                        if (!(i < to)) return [3 /*break*/, 18];
                        if (!(val['entity'][i].hasOwnProperty('customer') && val['entity'][i]['customer']['ID'] == localStorage.getItem('userID'))) return [3 /*break*/, 17];
                        console.log(val['entity'][i]);
                        orderData = val['entity'][i];
                        if (!ownerIDName.hasOwnProperty(orderData['orderHandler'])) return [3 /*break*/, 2];
                        orderData['orderHandler'] = ownerIDName[orderData['orderHandler']];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderHandler'] })];
                    case 3:
                        waitResponseOH = _a.sent();
                        orderData['orderHandler'] = waitResponseOH['docs'][0].name;
                        ownerIDName[orderData['orderHandler']] = waitResponseOH['docs'][0].name;
                        _a.label = 4;
                    case 4:
                        if (!ownerIDName.hasOwnProperty(orderData['owner'])) return [3 /*break*/, 5];
                        orderData['owner'] = ownerIDName[orderData['owner']];
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['owner'] })];
                    case 6:
                        waitResponseOw = _a.sent();
                        orderData['owner'] = waitResponseOw['docs'][0].name;
                        ownerIDName[orderData['owner']] = waitResponseOw['docs'][0].name;
                        _a.label = 7;
                    case 7:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['ID'])) return [3 /*break*/, 8];
                        orderData['customer']['ID'] = ownerIDName[orderData['customer']['ID']];
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['ID'] })];
                    case 9:
                        waitResponseCI = _a.sent();
                        orderData['customer']['ID'] = waitResponseCI['docs'][0].name;
                        ownerIDName[orderData['customer']['ID']] = waitResponseCI['docs'][0].name;
                        _a.label = 10;
                    case 10:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['employeeID'])) return [3 /*break*/, 11];
                        orderData['customer']['employeeID'] = ownerIDName[orderData['customer']['employeeID']];
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['employeeID'] })];
                    case 12:
                        waitResponseCE = _a.sent();
                        orderData['customer']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['customer']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 13;
                    case 13:
                        if (!(orderData['orderStatus']['employeeID'] !== "")) return [3 /*break*/, 16];
                        if (!ownerIDName.hasOwnProperty(orderData['orderStatus']['employeeID'])) return [3 /*break*/, 14];
                        orderData['orderStatus']['employeeID'] = ownerIDName[orderData['orderStatus']['employeeID']];
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderStatus']['employeeID'] })];
                    case 15:
                        waitResponseCE = _a.sent();
                        console.log(orderData['orderStatus']['employeeID']);
                        orderData['orderStatus']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['orderStatus']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 16;
                    case 16:
                        if (orderData.hasOwnProperty('orderPayment')) {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderPayment'].status.paymentStatus) + 6];
                        }
                        else {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderStatus'].status)];
                        }
                        that.sortedlist.push(orderData);
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.sortedlist);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        _a.label = 17;
                    case 17:
                        i++;
                        return [3 /*break*/, 1];
                    case 18: return [2 /*return*/];
                }
            });
        }); });
    };
    CustomerTableOrdersComponent.prototype.getdata = function (event) {
        this.pp = event;
        console.log(this.pp);
        this.orderId = event.ID;
        this.orderNumber = event.orderNumber;
        this.vendorName = event.vendor.name;
        this.employeeName = event.customer.name;
        this.shippingAddress = event.customer.addressShipping;
        this.billingAddress = event.customer.addressBilling;
        this.poNumber = event.PO_Number;
        this.poDate = event.PO_Date;
        this.orderDate = event.orderDate;
        this.statusComment = event.orderStatus.comment;
        this.orderStatus = event.orderStatus.status;
        this.orderAmount = event.orderAmount;
        if (this.orderStatus == '6') {
            this.orderStatusPayment = event.orderPayment.status.paymentStatus;
        }
        else {
            this.orderStatusPayment = "0";
        }
    };
    CustomerTableOrdersComponent.prototype.transferOwnerShip = function (orderNumber, newOwnerPublicKey) {
        if (orderNumber === void 0) { orderNumber = this.orderNumber; }
        if (newOwnerPublicKey === void 0) { newOwnerPublicKey = this.newOwnerPublicKey; }
        var that = this;
        console.log("transferOwnerShip", orderNumber, newOwnerPublicKey);
        var payload = {
            "orderNumber": orderNumber,
            "newOwnerPublicKey": newOwnerPublicKey
        };
        alert('transfered');
        this.blockchainService.transferOwnership(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                that.goodsServicesDiscount = "";
            }
        });
    };
    CustomerTableOrdersComponent.prototype.search = function () {
        console.log('working');
    };
    CustomerTableOrdersComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CustomerTableOrdersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], CustomerTableOrdersComponent.prototype, "sort", void 0);
    CustomerTableOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-table-orders',
            template: __webpack_require__(/*! ./customer-table-orders.component.html */ "./src/app/customer-table-orders/customer-table-orders.component.html"),
            styles: [__webpack_require__(/*! ./customer-table-orders.component.css */ "./src/app/customer-table-orders/customer-table-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], CustomerTableOrdersComponent);
    return CustomerTableOrdersComponent;
}());



/***/ }),

/***/ "./src/app/customer-table/customer-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/customer-table/customer-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\n    color: #007bff;\n    cursor: pointer;\n      }\n      #nav:hover{\n        color:black;\n      }\n      .tab_header1{\n      padding:5px;\n      border-radius: 7px;\n    width:97%;\n    margin-left: auto;\n    margin-right:auto;\n     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n     text-align: center;\n    }\n      .cont{\n      /* margin-left:5%; */\n      margin-left: auto;\n      margin-right:auto;\n      width:90%;\n      \n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItdGFibGUvY3VzdG9tZXItdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO01BQ2I7TUFDQTtRQUNFLFdBQVc7TUFDYjtNQUNGO01BQ0UsV0FBVztNQUNYLGtCQUFrQjtJQUNwQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtLQUNoQiw0RUFBNEU7S0FDNUUsa0JBQWtCO0lBQ25CO01BQ0E7TUFDRSxvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixTQUFTOztJQUVYIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItdGFibGUvY3VzdG9tZXItdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZ7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgI25hdjpob3ZlcntcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICB9XG4gICAgLnRhYl9oZWFkZXIxe1xuICAgICAgcGFkZGluZzo1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgd2lkdGg6OTclO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250e1xuICAgICAgLyogbWFyZ2luLWxlZnQ6NSU7ICovXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICAgd2lkdGg6OTAlO1xuICAgICAgXG4gICAgfVxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/customer-table/customer-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/customer-table/customer-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"pill\" (click)=\"orders()\">\n            <h5>Orders</h5>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"goods()\">\n            <h5>Goods/Service</h5>\n        </a>\n    </li>\n</ul>\n<br>\n<router-outlet></router-outlet>\n<br>"

/***/ }),

/***/ "./src/app/customer-table/customer-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customer-table/customer-table.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableComponent", function() { return CustomerTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CustomerTableComponent = /** @class */ (function () {
    function CustomerTableComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    CustomerTableComponent.prototype.ngOnInit = function () {
        this.orders();
    };
    // employee(){
    //   this.router.navigate(['employee'], {relativeTo: this.route});
    // }
    CustomerTableComponent.prototype.goods = function () {
        this.router.navigate(['goods'], { relativeTo: this.route });
    };
    CustomerTableComponent.prototype.orders = function () {
        this.router.navigate(['orders'], { relativeTo: this.route });
    };
    CustomerTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-table',
            template: __webpack_require__(/*! ./customer-table.component.html */ "./src/app/customer-table/customer-table.component.html"),
            styles: [__webpack_require__(/*! ./customer-table.component.css */ "./src/app/customer-table/customer-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerTableComponent);
    return CustomerTableComponent;
}());



/***/ }),

/***/ "./src/app/customer-vendor/customer-vendor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/customer-vendor/customer-vendor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLXZlbmRvci9jdXN0b21lci12ZW5kb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customer-vendor/customer-vendor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/customer-vendor/customer-vendor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"card\">\n      <div class=\"card-header card-header-danger\">\n          <h4 class=\"card-title \">Orders</h4>\n          <button class=\"button\" data-toggle=\"modal\" data-target=\"#customer\" style=\"float:right;\">Place Order</button>\n          <p class=\"card-category\"> Order Details</p>\n      </div>\n      <div class=\"card-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-hover\">\n                  <thead class=\"text-primary\">\n                      <th>\n                          Order No.\n                      </th>\n                      <th>\n                          Vendor Name\n                      </th>\n                      <th>\n                          Employee Name\n                      </th>\n                      <th>\n                          Shipping Address\n                      </th>\n                      <th>\n                          Billing Address\n                      </th>\n                      <th>\n                          GST NO.\n                      </th>\n                  </thead>\n                  <tbody id=\"employeeList\">\n                    <tr>\n                      <td><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\"   >o0101</a></td>\n                      <td>celebal</td>\n                      <td>EYAdmin1</td>\n                      <td>Jaipur</td>\n                      <td>Jaipur</td>\n                      <td>GST1010</td>\n                    </tr>\n                  </tbody>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- <div class=\"col-sm-4\">\n<button class=\"button\" data-toggle=\"modal\" data-target=\"#customer\">Add Costumer</button>\n</div> -->\n\n\n<!-- Modal -->\n<!-- Modal: modalCart -->\n<div class=\"modal fade\" id=\"customer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n<div class=\"modal-content\">\n  <!--Header-->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Create Order</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <!--Body-->\n  <div class=\"modal-body\">\n\n    <table class=\"table table-hover\">\n\n      <tbody>\n    \n        <tr>\n\n          <td>Vendor Name</td>\n          <td><input type=\"text\" name=\"Enter Vendor Name\"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Employee Name</td>\n          <td><input type=\"text\" name=\"Enter Employee Name\"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Shipping Address</td>\n          <td><input type=\"text\" name=\"Enter Shipping Address\"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Billing Address</td>\n          <td><input type=\"text\" name=\"Enter Billing Address \"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>GST NO.</td>\n          <td><input type=\"text\" name=\"Enter GST NO.\"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>PO Number</td>\n          <td><input type=\"text\" name=\"Enter PO Number\"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>      \n        <tr>\n          <td>Order Amount</td>\n          <td><input type=\"text\" name=\"Enter Order amount\"></td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n      \n      \n        <!-- <tr class=\"total\">\n          <td>Role</td>\n          <td><input type=\"text\" name=\"role\"></td>\n          <td></td>\n        </tr>\n        <tr class=\"total\">\n          <td>Employee Address</td>\n          <td><input type=\"text\" name=\"Role\"></td>\n          <td></td>\n        </tr> -->\n      </tbody>\n    </table>\n\n  </div>\n  <!--Footer-->\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>\n    <button class=\"btn btn-primary\">Place Order</button>\n  </div>\n</div>\n</div>\n</div>\n<!-- customer Model -->\n\n<!-- Modal -->\n<!-- Modal: modalCart -->\n<div class=\"modal fade\" id=\"register\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\naria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n<div class=\"modal-content\">\n  <!--Header-->\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Order Details</h4>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n  </div>\n  <!--Body-->\n  <div class=\"modal-body\">\n\n    <table class=\"table table-hover\">\n\n      <tbody>\n        <tr>\n          <td>Order No.</td>\n          <td>o0101</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n\n          <td>Vendor Name</td>\n          <td>celebal</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Employee Name</td>\n          <td>EYAdmin1</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Shipping Address</td>\n          <td>jaipur</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Billing Address</td>\n          <td>jaipur</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>GST NO.</td>\n          <td>GST1010</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>PO Number</td>\n          <td>PO10110</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>PO Date</td>\n          <td>23/01/2019</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Order Date</td>\n          <td>23/01/2019</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Order Amount</td>\n          <td>300000</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Order Status</td>\n          <td>1</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <tr>\n          <td>Comment</td>\n          <td>Order Placed</td>\n          <td><a><i class=\"fas fa-times\"></i></a></td>\n        </tr>\n        <!-- <tr class=\"total\">\n          <td>Role</td>\n          <td><input type=\"text\" name=\"role\"></td>\n          <td></td>\n        </tr>\n        <tr class=\"total\">\n          <td>Employee Address</td>\n          <td><input type=\"text\" name=\"Role\"></td>\n          <td></td>\n        </tr> -->\n      </tbody>\n    </table>\n\n  </div>\n  <!--Footer-->\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>\n    <button class=\"btn btn-primary\">Register</button> -->\n  </div>\n</div>\n</div>\n</div>\n\n\n\n<br><br>\n<div class=\"row\">\n<div class=\"col-sm-2\">\n    <div class=\"dropdown\">\n        <button class=\"button dropdown-toggle\"   type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Action\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n           \n          <a class=\"dropdown-item\" href=\"#\">Normal Order</a>\n          <a class=\"dropdown-item\" href=\"#\">Order Status</a>\n          <a class=\"dropdown-item\" href=\"#\">Accept Order</a>\n          <a class=\"dropdown-item\" href=\"#\">Order Payment</a>\n          <a class=\"dropdown-item\" href=\"#\">Payment Staus</a>\n        </div>\n      </div>\n</div>\n<div class=\"col-sm-4\">\n  <button class=\"button\">Transfer Ownership</button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/customer-vendor/customer-vendor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-vendor/customer-vendor.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerVendorComponent", function() { return CustomerVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerVendorComponent = /** @class */ (function () {
    function CustomerVendorComponent() {
    }
    CustomerVendorComponent.prototype.ngOnInit = function () {
    };
    CustomerVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-vendor',
            template: __webpack_require__(/*! ./customer-vendor.component.html */ "./src/app/customer-vendor/customer-vendor.component.html"),
            styles: [__webpack_require__(/*! ./customer-vendor.component.css */ "./src/app/customer-vendor/customer-vendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerVendorComponent);
    return CustomerVendorComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    #nav{\n    color: #007bff;\n    cursor: pointer;\n      }\n      #nav:hover{\n        color:black;\n      }\n      .tab_header{\n         padding:5px;\n         border-radius: 7px;\n         width: 100%;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        text-align: center;\n       }\n      .tab_body{\n      padding:5px;\n      border-radius: 7px;  \n      width:97%;\n      margin-left: auto;\n      margin-right: auto;\n     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n     text-align: left;\n    }\n      .info{\n      text-align: left;\n      margin-left: 5%;\n      word-break: break-word;\n      font-weight: 350;\n    }\n      .cont{\n      margin: 5px 1.5% 5px 1.5%;\n    }\n\n\n\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtJQUNBLGNBQWM7SUFDZCxlQUFlO01BQ2I7TUFDQTtRQUNFLFdBQVc7TUFDYjtNQUNDO1NBQ0UsV0FBVztTQUNYLGtCQUFrQjtTQUNsQixXQUFXO1FBQ1osNEVBQTRFO1FBQzVFLGtCQUFrQjtPQUNuQjtNQUNGO01BQ0MsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLGtCQUFrQjtLQUNuQiw0RUFBNEU7S0FDNUUsZ0JBQWdCO0lBQ2pCO01BQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixnQkFBZ0I7SUFDbEI7TUFDQTtNQUNFLHlCQUF5QjtJQUMzQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgI25hdntcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAjbmF2OmhvdmVye1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgIH1cbiAgICAgICAudGFiX2hlYWRlcntcbiAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICB9XG4gICAgIC50YWJfYm9keXtcbiAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4OyAgXG4gICAgICB3aWR0aDo5NyU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLmluZm97XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgfVxuICAgIC5jb250e1xuICAgICAgbWFyZ2luOiA1cHggMS41JSA1cHggMS41JTtcbiAgICB9XG5cblxuXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\r\n\r\n    </a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right\" style=\"display:inline;\">\r\n\r\n        <div style=\"display: inline-block\">\r\n            <div style=\"display: inline-block\">\r\n                {{name}}\r\n                        </div>\r\n                        &nbsp;\r\n                        <div style=\"display: inline-block\">\r\n                            <a class=\"nav-link\" (click)=\"setlogout()\">\r\n                                <i class=\"fa fa-sign-out fa-lg\" aria-hidden=\"true\"></i>\r\n                            </a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</nav>\r\n<br>\r\n<div class=\"cont\">\r\n    <div class=\"tab_header \">\r\n        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" data-toggle=\"pill\" (click)=\"vendorinfo()\" style=\"cursor: pointer;\">\r\n                    <h6>About</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"  employee()\" style=\"cursor:hover\">\r\n                    <h6>Employee</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendortable()\" style=\"cursor:hover\">\r\n                    <h6>Orders</h6>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"tab_body\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(route, router, data, http, httpClient, Auth, blockchainService) {
        this.route = route;
        this.router = router;
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.Auth = Auth;
        this.blockchainService = blockchainService;
        this.message = "Loading...";
        this.username = "";
        this.name = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
        this.vendorinfo();
    }
    CustomerComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    CustomerComponent.prototype.ngOnInit = function () {
        console.log("hello");
    };
    CustomerComponent.prototype.vendortable = function () {
        this.router.navigate(['table'], { relativeTo: this.route });
    };
    CustomerComponent.prototype.vendorinfo = function () {
        this.router.navigate(['info'], { relativeTo: this.route });
    };
    // vendorcustomer() {
    //   this.router.navigate(['customer'], { relativeTo: this.route });
    // }
    CustomerComponent.prototype.employee = function () {
        this.router.navigate(['employee'], { relativeTo: this.route });
    };
    CustomerComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['customer'].name);
            }
        });
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\" style=\"background-color:#ebedef!important\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\n    </a>\n    <div class=\"nav navbar-nav navbar-right\" style=\"display:inline;\">\n        <div style=\"display: inline-block\" *ngIf=Auth.isLoggedIn()>\n            <div style=\"display: inline-block\">\n                {{name}}\n            </div>\n            <div style=\"display: inline-block\">\n                <a class=\"nav-link\" (click)=\"setlogout()\">\n                    <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n        </div>\n\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data, http, route, router, httpClient, blockchainService, Auth) {
        this.data = data;
        this.http = http;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.Auth = Auth;
        this.name = "";
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    HeaderComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['vendor'].name);
                console.log(that.name);
            }
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n    background-color: #56baed;\n}\n\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n}\n\na {\n    color: #92badd;\n    display: inline-block;\n    text-decoration: none;\n    font-weight: 400;\n}\n\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin: 40px 8px 10px 8px;\n    color: #cccccc;\n}\n\n.note {\n    padding-top: 10px;\n    margin-bottom: 0px;\n    color: #484105a1;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.note:hover {\n    opacity: 1\n}\n\n/* STRUCTURE */\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n}\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n    text-align: center;\n}\n\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n    color: #cccccc;\n}\n\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button],\ninput[type=submit],\ninput[type=reset] {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover,\ninput[type=submit]:hover,\ninput[type=reset]:hover {\n    background-color: #39ace7;\n}\n\ninput[type=button]:active,\ninput[type=submit]:active,\ninput[type=reset]:active {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n}\n\ninput[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder {\n    color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n    0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n@keyframes fadeInDown {\n    0% {\n        opacity: 0;\n        -webkit-transform: translate3d(0, -100%, 0);\n        transform: translate3d(0, -100%, 0);\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: none;\n        transform: none;\n    }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.fadeIn {\n    opacity: 0;\n    -webkit-animation: fadeIn ease-in 1;\n    animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n}\n\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n}\n\n.underlineHover:hover {\n    color: #0d0d0d;\n}\n\n.underlineHover:hover:after {\n    width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n    width: 60%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0EsY0FBYzs7QUFDZDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFFSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBRVosNENBQTRDO0lBQzVDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGtCQUFrQjtJQUVsQiw0QkFBNEI7QUFDaEM7O0FBR0EsU0FBUzs7QUFFVDtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUdBLG1CQUFtQjs7QUFFbkI7OztJQUdJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLGlEQUFpRDtJQUVqRCw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztBQUNwQzs7QUFFQTs7O0lBR0kseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFJSSw4QkFBOEI7SUFHOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLHlCQUF5QjtJQUt6QixnQ0FBZ0M7SUFFaEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBR0EsZUFBZTs7QUFHZix1Q0FBdUM7O0FBRXZDO0lBQ0ksa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViwyQ0FBMkM7UUFDM0MsbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsdUJBQXVCO1FBQ3ZCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJDQUEyQztRQUMzQyxtQ0FBbUM7SUFDdkM7SUFDQTtRQUNJLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsZUFBZTtJQUNuQjtBQUNKOztBQUdBLGtDQUFrQzs7QUFFbEM7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBV0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUNBQW1DO0lBRW5DLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFFckMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUU5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFFN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBRTdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUU3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFFM0IsbUJBQW1CO0FBQ3ZCOztBQUdBLGtDQUFrQzs7QUFFbEM7SUFDSSxjQUFjO0lBQ2QsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjOTJiYWRkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4O1xuICAgIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4ubm90ZSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOiAjNDg0MTA1YTE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxXG59XG4vKiBTVFJVQ1RVUkUgKi9cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNmb3JtQ29udGVudCB7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybUZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuXG4vKiBUQUJTICovXG5cbmgyLmluYWN0aXZlIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbn1cblxuaDIuYWN0aXZlIHtcbiAgICBjb2xvcjogIzBkMGQwZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5pbnB1dFt0eXBlPXJlc2V0XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwgMTg2LCAyMzMsIDAuNCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLFxuaW5wdXRbdHlwZT1yZXNldF06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsXG5pbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLFxuaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogODUlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXG5cbi5mYWRlSW5Eb3duIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbn1cblxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmZhZGVJbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cblxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTEwcHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG4gICAgY29sb3I6ICMwZDBkMGQ7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jaWNvbiB7XG4gICAgd2lkdGg6IDYwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\" data-toggle=\"collapse\">\n\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\n    </a>\n    <div class=\"collapse navbar-collapse navbar-right\" id=\"#myNavbar\" style=\"display:inline;\">\n        <div style=\"display: inline-block\" *ngIf=Auth.isLoggedIn()>\n            <div style=\"display: inline-block\">\n                {{name}}\n            </div>\n            <div style=\"display: inline-block\">\n                <a class=\"nav-link\" (click)=\"setlogout()\">Logout </a>\n            </div>\n        </div>\n\n    </div>\n</nav>\n<div class=\"container\">\n    <div style=\"text-align:center;margin-top:70px;\">\n        <h1>\n            EY Blockchain\n        </h1><br>\n        <div class=\"container\" id=\"heading\">\n            <h4>Supply-Chain </h4>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>\n<br><br>\n<div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\" style=\"padding-bottom: 5px\">\n        <!-- Tabs Titles -->\n        <!-- Icon -->\n        <div class=\"fadeIn first\">\n            <br><br>\n        </div>\n        <!-- Login Form -->\n        <form (submit)=\"loginUser($event)\">\n            <!-- <input type=\"text\" id=\"username\" class=\"fadeIn second\" name=\"login\" placeholder=\"Enter Username\" value=\"\"> -->\n            <input type=\"text\" id=\"PrivateKey\" class=\"fadeIn third\" name=\"login\" placeholder=\"Enter PrivateKey\" value=\"\" style=\"margin-bottom:20px;\">\n            <button class=\"btn btn-danger\" style=\"margin-bottom:20px;\">Login</button>\n            <!--[routerLink]=\"['/vendor']\"-->\n        </form>\n        <!-- <div>\n            <p class=\"note\" (click)=\"download()\">Generate Public-Private KeyPair</p>\n        </div> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");






var HomeComponent = /** @class */ (function () {
    // username: any;
    function HomeComponent(route, Auth, router, httpClient, blockchainService) {
        this.route = route;
        this.Auth = Auth;
        this.router = router;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.title = 'Blockchain';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registration = function () {
        this.router.navigate(['register'], { relativeTo: this.route });
    };
    HomeComponent.prototype.loginUser = function (event) {
        var _this = this;
        var that = this;
        event.preventDefault();
        var target = event.target;
        // const username = target.querySelector('#username').value
        var privateKey = target.querySelector('#PrivateKey').value;
        this.blockchainService.generatePublicKey(privateKey).subscribe(function (pubpvt) {
            if (pubpvt) {
                that.blockchainService.getUserDataDB({ publicKey: pubpvt['public'] }).subscribe(function (userInfo) {
                    if (userInfo) {
                        console.log(userInfo);
                        _this.Auth.setLoggedIn(true, pubpvt['public'], pubpvt['private'], userInfo['docs'][0]['_id']);
                        localStorage.setItem('name', userInfo['docs'][0]['name']);
                        if (userInfo['docs'][0]['userType'] === 1) {
                            console.log("vendor");
                            _this.router.navigate(['/vendor']);
                        }
                        else if (userInfo['docs'][0]['userType'] === 2) {
                            console.log("vendorEmployee");
                            localStorage.setItem('vendorName', userInfo['docs'][0]['vendorName']);
                            _this.router.navigate(['/vendorEmployee']);
                        }
                        else if (userInfo['docs'][0]['userType'] === 3) {
                            console.log("customer");
                            _this.router.navigate(['/customer']);
                        }
                        else if (userInfo['docs'][0]['userType'] === 4) {
                            console.log("customerEmployee");
                            localStorage.setItem('customerName', userInfo['docs'][0]['customerName']);
                            localStorage.setItem('customerOrgID', userInfo['docs'][0]['customerID']);
                            _this.router.navigate(['/customerEmployee']);
                        }
                    }
                    else {
                        console.log("Error: " + userInfo);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log("Error: " + pubpvt);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.download = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _a, _b, element;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).stringify;
                        return [4 /*yield*/, this.blockchainService.genratePubPriv()];
                    case 1:
                        data = _b.apply(_a, [_c.sent()]);
                        element = document.createElement('a');
                        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
                        element.setAttribute('download', "new.pubpriv");
                        element.style.display = 'none';
                        document.body.appendChild(element);
                        element.click();
                        document.body.removeChild(element);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider-text {\n    position: relative;\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n.divider-text span {\n    padding: 7px;\n    font-size: 12px;\n    position: relative;\n    z-index: 2;\n}\n.divider-text:after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    border-bottom: 1px solid #ddd;\n    top: 55%;\n    left: 0;\n    z-index: 1;\n}\n.btn-facebook {\n    background-color: #405D9D;\n    color: #fff;\n}\n.btn-twitter {\n    background-color: #42AEEC;\n    color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7QUFDZDtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmRpdmlkZXItdGV4dCBzcGFuIHtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuLmRpdmlkZXItdGV4dDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgdG9wOiA1NSU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1RDlEO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi10d2l0dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJBRUVDO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card bg-light\">\n<article class=\"card-body mx-auto\" style=\"max-width: 400px;\">\n\t<h4 class=\"card-title mt-3 text-center\">Create Account</h4>\n\t<p class=\"text-center\">Get started with your free account</p>\n\t<p class=\"divider-text\">\n        <span class=\"bg-light\">OR</span>\n    </p>\n\t<form>\n\t<div class=\"form-group input-group\">\n\t\t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n\t\t </div>\n        <input name=\"firstname\" #_firstname class=\"form-control\" placeholder=\"Full name\" type=\"text\">\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n\t\t </div>\n        <input name=\"lastname\" #_lastname class=\"form-control\" placeholder=\"Email address\" type=\"email\">\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n\t\t</div>\n\t\t<select class=\"custom-select\" style=\"max-width: 120px;\">\n\t\t    <option selected=\"\">+91</option>\n\t\t    <option value=\"1\">+92</option>\n\t\t    <option value=\"2\">+19</option>\n\t\t    <option value=\"3\">+70</option>\n\t\t</select>\n    \t<input name=\"\" class=\"form-control\" placeholder=\"Phone number\" type=\"text\">\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-building\"></i> </span>\n\t\t</div>\n\t\t<select class=\"form-control\">\n\t\t\t<option selected=\"\"> Select job type</option>\n\t\t\t<option>Vendor</option>\n\t\t\t<option>Customer</option>\n\t\t</select>\n\t</div> <!-- form-group end.// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t</div>\n        <input class=\"form-control\" placeholder=\"Create password\" type=\"password\">\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t</div>\n        <input class=\"form-control\" placeholder=\"Repeat password\" type=\"password\">\n    </div>\n\n    <div class=\"form-group input-group\">\n  \t\t<div class=\"input-group-prepend\">\n  \t\t    <span class=\"input-group-text\"> <button class=\"btn btn-primary\">Gen</button> </span>\n  \t\t </div>\n          <input name=\"\" class=\"form-control\" placeholder=\"Generate Key\" type=\"text\">\n      </div>\n\n     <!-- form-group// -->\n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\"> Create Account  </button>\n    </div> <!-- form-group// -->\n    <p class=\"text-center\">Have an account? <a href=\"\">Log In</a> </p>\n</form>\n</article>\n</div> <!-- card.// -->\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('./assets/info.json', { responseType: 'text' });
    };
    UserService.prototype.getemployee = function () {
        return this.http.get('./assets/employeedetails.json', { responseType: 'text' });
    };
    UserService.prototype.getSomeData = function () {
        return this.http.get('/api/database.php');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/vendor-customer/vendor-customer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/vendor-customer/vendor-customer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\ncolor: #007bff;\ncursor: pointer;\n  }\n  #nav:hover{\n    color:black;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWN1c3RvbWVyL3ZlbmRvci1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsY0FBYztBQUNkLGVBQWU7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLWN1c3RvbWVyL3ZlbmRvci1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcbmNvbG9yOiAjMDA3YmZmO1xuY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNuYXY6aG92ZXJ7XG4gICAgY29sb3I6YmxhY2s7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-customer/vendor-customer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vendor-customer/vendor-customer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vendor-customer/vendor-customer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendor-customer/vendor-customer.component.ts ***!
  \**************************************************************/
/*! exports provided: VendorCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorCustomerComponent", function() { return VendorCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VendorCustomerComponent = /** @class */ (function () {
    function VendorCustomerComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    VendorCustomerComponent.prototype.ngOnInit = function () {
        this.organization();
    };
    VendorCustomerComponent.prototype.organization = function () {
        console.log("hello");
        this.router.navigate(['organization'], { relativeTo: this.route });
    };
    VendorCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-customer',
            template: __webpack_require__(/*! ./vendor-customer.component.html */ "./src/app/vendor-customer/vendor-customer.component.html"),
            styles: [__webpack_require__(/*! ./vendor-customer.component.css */ "./src/app/vendor-customer/vendor-customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VendorCustomerComponent);
    return VendorCustomerComponent;
}());



/***/ }),

/***/ "./src/app/vendor-employee-goods/vendor-employee-goods.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/vendor-employee-goods/vendor-employee-goods.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWVtcGxveWVlLWdvb2RzL3ZlbmRvci1lbXBsb3llZS1nb29kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci1lbXBsb3llZS1nb29kcy92ZW5kb3ItZW1wbG95ZWUtZ29vZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/vendor-employee-goods/vendor-employee-goods.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/vendor-employee-goods/vendor-employee-goods.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <!-- <h4 class=\"card-title \">Goods/Services</h4> -->\n            <button class=\"button\" style=\"float:right; padding: 5px;\" *ngIf=\"role == 2 \" data-toggle=\"modal\" data-target=\"#bulk\">Add Multiple Services</button>\n            <button class=\"button\" data-toggle=\"modal\" data-target=\"#customer\" *ngIf=\"role == 2 \" style=\"float:right; padding: 5px\">Add\n                Services</button>\n\n            <!-- <p class=\"card-category\"> Goods/Service Details</p> -->\n        </div>\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"table-responsive\">\n\n                            <!-- <ng-container matColumnDef=\"id\">\n                                <th mat-header-cell *matHeaderCellDef> Goods ID </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.id}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"unit\">\n                                <th mat-header-cell *matHeaderCellDef> Unit </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.unit}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"creator\">\n                                <th mat-header-cell *matHeaderCellDef>Creator</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.creator}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"vname\">\n                                <th mat-header-cell *matHeaderCellDef>Vendor Name</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.vname}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container> -->\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"customer\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Create Goods/Service</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"registerGoods\">\n\n                    <div class=\"form-group\">\n                        <label for=\"ty\">Select Type</label>\n                        <select class=\"form-control\" formControlName=\"servicetype\" id=\"role1\">\n                            <option *ngFor=\"let rr of Roles\" [value]=\"rr.value\">{{rr.role}}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"publicKey1\">Goods/Service Name </label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"ename1\" aria-describedby=\"ethHelp\" value=\"\" placeholder=\"Enter Goods/ServiceName\">\n\n                    </div>\n                    <!-- <div class=\"form-group\">\n                        <label for=\"ship\">Goods/Service Unit</label>\n                        <input type=\"text\" formControlName=\"unit\" class=\"form-control\" id=\"ship1\" placeholder=\"Enter Goods/Serice Unit\">\n                    </div> -->\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <div class=\"row\">\n                    <!-- <div class=\"col-lg-7 col-sm-7\" style=\"margin-bottom:10px;\"> -->\n                        <!-- <label style=\"float:left\">Place Bulk Order</label>\n                        <input type=\"file\" class=\"upload \" (change)=\"changeListener($event.target.files)\" accept=\".csv\" style=\"float:left;\" /> -->\n                    <!-- </div> -->\n                    <div class=\"col-sm-5\" style=\"margin-bottom:10px; margin-top: 10px;\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                    <div class=\"col-sm-6\" style=\"margin-bottom:10px;margin-top: 10px;\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" if='!registerGoods.valid' [disabled]=\"!registerGoods.valid\" (click)=\"createGoods()\">Create</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"bulk\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Multiple Service Addition</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <!-- <p for=\"input\" style=\"float:left;\">Bulk Registration</p> -->\n                        <input type=\"file\" class=\"upload \" (change)=\"updateFileData($event.target.files)\" accept=\".csv\">\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"modal-footer\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"bulkRegister()\" [disabled]=\"!bulkUploadAction\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor-employee-goods/vendor-employee-goods.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/vendor-employee-goods/vendor-employee-goods.component.ts ***!
  \**************************************************************************/
/*! exports provided: VendorEmployeeGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEmployeeGoodsComponent", function() { return VendorEmployeeGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var VendorEmployeeGoodsComponent = /** @class */ (function () {
    function VendorEmployeeGoodsComponent(data, http, httpClient, blockchainService, fb) {
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.fb = fb;
        this.package_list = [];
        this.bulkUploadAction = false;
        this.bulkFile = '';
        this.bulkupload = false;
        this.displayedColumns = [
            // 'id',
            'name',
            // 'unit',
            'creator',
        ];
        this.username = "";
        this.Roles = [
            { role: "Goods", value: 2 },
            { role: "Service", value: 1 }
        ];
        this.registerGoods = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            servicetype: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.username = localStorage.getItem('userID');
        this.name = localStorage.getItem('name');
        this.vendorName = localStorage.getItem('vendorName');
        this.getUserDetails();
    }
    VendorEmployeeGoodsComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        console.log(localStorage);
        this.blockchainService.getEntity('goods').subscribe(function (val) {
            if (val) {
                console.log(val);
                console.log(val['entity'][0]);
                for (var i = 0; i < val['entity'].length; i++) {
                    {
                        console.log(val['entity'][i]);
                        var payload = {
                            'id': val['entity'][i]['goods']['ID'],
                            'name': val['entity'][i]['goods']['name'],
                            'unit': val['entity'][i]['goods']['unit'],
                            'creator': val['entity'][i]['vendor']['creator'],
                            'vname': val['entity'][i]['vendor']['name'],
                        };
                        that.package_list.push(payload);
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
            }
        });
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(localStorage);
                console.log(val);
                that.role = (val[_this.username][0]['employee'].role);
                console.log(that.role);
            }
        });
    };
    VendorEmployeeGoodsComponent.prototype.createGoods = function () {
        var _this = this;
        var that = this;
        var payload = {};
        payload['goods'] = this.registerGoods.value;
        payload['vendor'] = {};
        payload['vendor']['name'] = this.vendorName;
        payload['vendor']['employeeName'] = this.name;
        console.log(payload);
        this.blockchainService.createGoods(payload).subscribe(function (val) {
            if (val) {
                console.log(val);
                if (JSON.parse(val['response']['body']).data[0].status == 'COMMITTED') {
                    window.alert("Goods/Service Register Successfull \n ID:" + val['userid']);
                    var couchpayload = {};
                    couchpayload['data'] = {};
                    couchpayload['data']['name'] = payload["goods"]["name"];
                    couchpayload['data']['serviceType'] = payload["goods"]["servicetype"];
                    couchpayload['data']['unit'] = 0;
                    couchpayload['data']['vendorName'] = payload["vendor"]["name"];
                    couchpayload['data']['employeeName'] = payload["vendor"]["employeeName"];
                    couchpayload['id'] = val['userid'];
                    console.log(couchpayload);
                    that.blockchainService.registerGoodsnServiceDB(couchpayload).subscribe(function (val) {
                        if (val) {
                            console.log(val);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    _this.getUserDetails();
                    window.alert("Goods Registration Error: \n " + JSON.parse(val['response']['body']).data[0].status);
                }
            }
        });
    };
    VendorEmployeeGoodsComponent.prototype.bulkRegister = function () {
        var _this = this;
        console.log(this.bulkFile);
        var that = this;
        var blockchainPayload = {};
        blockchainPayload['action'] = this.bulkFile;
        console.log("Action name ", blockchainPayload['action']);
        if (this.uploadFile) {
            console.log("Entering here");
            blockchainPayload['file'] = this.uploadFile;
            console.log("Now here", this.uploadFile);
            this.blockchainService.bulkUpload(blockchainPayload).subscribe(function (val) {
                if (val) {
                    console.log(val);
                    var allResponseData = {};
                    allResponseData['COMMITTED'] = [];
                    allResponseData['INVALID'] = [];
                    var Registered = {};
                    Registered['newEmployee'] = [];
                    Registered['AlreadyOnNetwork'] = [];
                    val['response'].forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var couchpayload;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(element);
                                    if (!(element['response'].status == 'COMMITTED')) return [3 /*break*/, 2];
                                    couchpayload = {};
                                    couchpayload['data'] = {};
                                    couchpayload['data'] = element['request'];
                                    couchpayload['id'] = element['response']['UserID'];
                                    couchpayload['data']['userType'] = 4;
                                    couchpayload['data']['publicKey'] = element['request']['publicKey'];
                                    couchpayload['data']['owner'] = element['request']['publicKey'];
                                    delete couchpayload['data']['employeeAddress'];
                                    console.log(couchpayload);
                                    allResponseData['COMMITTED'].push({
                                        data: element['request'],
                                        UserID: element['response']['UserID']
                                    });
                                    return [4 /*yield*/, that.blockchainService.registerEmployeeDB(couchpayload).subscribe(function (val) {
                                            if (val['ok']) {
                                                console.log(val);
                                                Registered['newEmployee'].push(val);
                                                // this.userid = val['userid']
                                                // this.Auth.setuserid(this.userid);
                                            }
                                        }, function (err) {
                                            // console.log(err)
                                            Registered['AlreadyOnNetwork'].push(couchpayload['id']);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    allResponseData['INVALID'].push({
                                        data: element['request'],
                                        UserID: element['response']['invalid_transactions']
                                    });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log(allResponseData);
                    console.log(Registered);
                }
            }, function (err) {
                console.log(err.message);
            });
        }
    };
    VendorEmployeeGoodsComponent.prototype.updateFileData = function (files) {
        var that = this;
        console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            this.uploadFile = file;
            this.bulkUploadAction = true;
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            // if (file.type == "text/csv") {
            //   let reader: FileReader = new FileReader();
            //   reader.readAsText(file);
            //   reader.onload = (e) => {
            //     let csv: string = reader.result as string;
            //     console.log(csv);
            //   }
            // }
        }
    };
    VendorEmployeeGoodsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], VendorEmployeeGoodsComponent.prototype, "paginator", void 0);
    VendorEmployeeGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-employee-goods',
            template: __webpack_require__(/*! ./vendor-employee-goods.component.html */ "./src/app/vendor-employee-goods/vendor-employee-goods.component.html"),
            styles: [__webpack_require__(/*! ./vendor-employee-goods.component.css */ "./src/app/vendor-employee-goods/vendor-employee-goods.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], VendorEmployeeGoodsComponent);
    return VendorEmployeeGoodsComponent;
}());



/***/ }),

/***/ "./src/app/vendor-employee-info/vendor-employee-info.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/vendor-employee-info/vendor-employee-info.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n\n  .tab_header{\n    padding:5px;\n    border-radius: 7px;\n    width: 400px;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: center;\n  }\n\n  .cont{\n    margin-left:2%;\n    margin-left: auto;\n    margin-right:auto;\n    width:90%;\n    \n  }\n\n  .info{\n  text-align: left;\n  margin-left: 5%;\n  word-break: break-word;\n  font-weight: 350;\n}\n\n  .tab_body{\n  padding:5px;\n  border-radius: 7px; \n  width:97%;\n  margin-left: auto;\n  margin-right: auto;\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: left;\n}\n\n  /* .tab_bar{\n\n  border-radius: 7px;\n\n  margin-left:auto;\n  margin-right:auto;\n\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: left; \n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWVtcGxveWVlLWluZm8vdmVuZG9yLWVtcGxveWVlLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0dBQ2IsNEVBQTRFO0dBQzVFLGtCQUFrQjtFQUNuQjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFNBQVM7O0VBRVg7O0VBQ0Y7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CLDRFQUE0RTtDQUM1RSxnQkFBZ0I7QUFDakI7O0VBQ0E7Ozs7Ozs7OztHQVNHIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLWVtcGxveWVlLWluZm8vdmVuZG9yLWVtcGxveWVlLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC50YWJfaGVhZGVye1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250e1xuICAgIG1hcmdpbi1sZWZ0OjIlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIHdpZHRoOjkwJTtcbiAgICBcbiAgfVxuLmluZm97XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZm9udC13ZWlnaHQ6IDM1MDtcbn1cbi50YWJfYm9keXtcbiAgcGFkZGluZzo1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDsgXG4gIHdpZHRoOjk3JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuIHRleHQtYWxpZ246IGxlZnQ7XG59XG4vKiAudGFiX2JhcntcblxuICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG5cbiBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuIHRleHQtYWxpZ246IGxlZnQ7IFxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-employee-info/vendor-employee-info.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/vendor-employee-info/vendor-employee-info.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vendor\">\n    <div>\n        <h5 style=\"text-align: center;\">Welcome Customer Employee</h5>\n    </div><br>\n    <div style=\"text-align:center;height:150px;\">\n        <img src=\"/assets/profile.png\">\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Full Name</span>\n                </div>\n                <div class=\"field-info\">{{name | uppercase}}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Email</span>\n                </div>\n                <div class=\"field-info\">{{email}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Contact No.</span>\n                </div>\n                <div class=\"field-info\">{{contactNumber}}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Role</span>\n                </div>\n                <div class=\"field-info\">{{role}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Public Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(1)\">\n                            <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                                aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\"\n                                    d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                                </path>\n                            </svg>\n                        </span>\n                </div>\n                <div class=\"field-info\">{{publicKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Private Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(2)\">\n                            <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                                aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\"\n                                    d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                                </path>\n                            </svg>\n                        </span>\n                    <span class=\"mx-3\" (click)=\"download()\">\n                            <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\n                                class=\"octicon octicon-cloud-download\" aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\"\n                                    d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\">\n                                </path>\n                            </svg>\n                        </span>\n                </div>\n                <div class=\"field-info\">{{privateKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <br><br>"

/***/ }),

/***/ "./src/app/vendor-employee-info/vendor-employee-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/vendor-employee-info/vendor-employee-info.component.ts ***!
  \************************************************************************/
/*! exports provided: VendorEmployeeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEmployeeInfoComponent", function() { return VendorEmployeeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var VendorEmployeeInfoComponent = /** @class */ (function () {
    function VendorEmployeeInfoComponent(data, http, httpClient, blockchainService, fb) {
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.fb = fb;
        this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.Roles = { 1: "Employee", 2: "Admin" };
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    VendorEmployeeInfoComponent.prototype.ngOnInit = function () {
    };
    VendorEmployeeInfoComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(localStorage);
                console.log(val);
                that.ID = (val[_this.username][0]['employee'].ID);
                that.name = (val[_this.username][0]['employee'].name);
                that.contactNumber = (val[_this.username][0]['employee'].contactNumber);
                that.publicKey = (val[_this.username][0]['employee'].publicKey);
                that.role = "Vendor-Org-" + that.Roles[(val[_this.username][0]['employee'].role)];
                that.email = (val[_this.username][0]['employee'].email);
                that.vname = (val[_this.username][0]['vendor'].name);
                that.privateKey = localStorage.getItem('private');
                localStorage.setItem('userName', _this.name);
            }
        });
    };
    VendorEmployeeInfoComponent.prototype.showKey = function (PubPvt) {
        if (PubPvt == 1) {
            if (this.publicKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.publicKeyHide = this.publicKey;
            }
            else {
                this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
        else if (PubPvt == 2) {
            if (this.privateKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.privateKeyHide = this.privateKey;
            }
            else {
                this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
    };
    VendorEmployeeInfoComponent.prototype.download = function () {
        var data = JSON.stringify({
            "PublicKey": this.publicKey,
            "PrivateKey": this.privateKey
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', this.name + ".priv");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    VendorEmployeeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-employee-info',
            template: __webpack_require__(/*! ./vendor-employee-info.component.html */ "./src/app/vendor-employee-info/vendor-employee-info.component.html"),
            styles: [__webpack_require__(/*! ./vendor-employee-info.component.css */ "./src/app/vendor-employee-info/vendor-employee-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], VendorEmployeeInfoComponent);
    return VendorEmployeeInfoComponent;
}());



/***/ }),

/***/ "./src/app/vendor-employee-orders/vendor-employee-orders.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/vendor-employee-orders/vendor-employee-orders.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n  background-color: #007bff;\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin-bottom:5px;\r\n  cursor: pointer;\r\n}\r\nmat-cell{\r\n  position: relative;\r\n}\r\n.tab_model{\r\n  /* padding:5px; */\r\n  word-break: break-word;\r\n  border-radius: 7px;\r\n  width: 100%;\r\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n text-align: left;\r\n margin-top: 15px;\r\n}\r\n.tab_body{\r\n padding:5px;\r\n border-radius: 7px;  \r\n width:97%;\r\n margin-left: auto;\r\n margin-right: auto;\r\nbox-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\ntext-align: left;\r\n}\r\n.info{\r\n text-align: left;\r\n margin-left: 5%;\r\n word-break: break-word;\r\n font-weight: 350;\r\n}\r\n.cont{\r\n margin: 5px 1.5% 5px 1.5%;\r\n}\r\n.pp .row{\r\n  margin-left: 1%;\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWVtcGxveWVlLW9yZGVycy92ZW5kb3ItZW1wbG95ZWUtb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7Q0FDWiw0RUFBNEU7Q0FDNUUsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQiw0RUFBNEU7QUFDNUUsZ0JBQWdCO0FBQ2hCO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci1lbXBsb3llZS1vcmRlcnMvdmVuZG9yLWVtcGxveWVlLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCA3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5tYXQtY2VsbHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRhYl9tb2RlbHtcclxuICAvKiBwYWRkaW5nOjVweDsgKi9cclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICB3aWR0aDogMTAwJTtcclxuIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRhYl9ib2R5e1xyXG4gcGFkZGluZzo1cHg7XHJcbiBib3JkZXItcmFkaXVzOiA3cHg7ICBcclxuIHdpZHRoOjk3JTtcclxuIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5pbmZve1xyXG4gdGV4dC1hbGlnbjogbGVmdDtcclxuIG1hcmdpbi1sZWZ0OiA1JTtcclxuIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiBmb250LXdlaWdodDogMzUwO1xyXG59XHJcbi5jb250e1xyXG4gbWFyZ2luOiA1cHggMS41JSA1cHggMS41JTtcclxufVxyXG4ucHAgLnJvd3tcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn0gXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-employee-orders/vendor-employee-orders.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/vendor-employee-orders/vendor-employee-orders.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-danger\" *ngIf=\"globalFlag\">\r\n            <!-- <h4 class=\"card-title \">Orders</h4>\r\n            <p class=\"card-category\"> Order Details</p> -->\r\n            <div style=\"float:right;\">\r\n\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#customer11\">Accept </button>&nbsp;\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"updateMultipleOrderStatus(orderNumber,'return')\">Send Back </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ng-container>\r\n                <div class=\"mat-elevation-z8 \">\r\n                    <div class=\"table-specification\">\r\n                        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-responsive\">\r\n                            <!-- <ng-container matColumnDef=\"id\">\r\n                                <th mat-header-cell *matHeaderCellDef> ID &nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.ID}}</a>&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container> -->\r\n                            <ng-container matColumnDef=\"select\">\r\n                                <th mat-header-cell *matHeaderCellDef>\r\n                                    <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\r\n                                </th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(element) : null ; selectionData()\" [checked]=\"selection.isSelected(element)\" [aria-label]=\"checkboxLabel(element)\">\r\n                                  &nbsp;&nbsp;&nbsp;&nbsp;</mat-checkbox>\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderNumber\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.orderNumber}}</a>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                                <!-- <td mat-cell *matCellDef=\"let element\"> {{element.orderNumber}}&nbsp;&nbsp;&nbsp;&nbsp;</td> -->\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"PO_Date\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.PO_Date}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"PO_Number\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.PO_Number}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderAmount\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderAmount}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderDate\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderDate}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"orderHandler\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Handler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderHandler}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"owner\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.owner}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"globalStatus\">\r\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    {{element.globalStatus}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal fade\" id=\"register\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-xl\">\r\n                <div class=\"modal-content\">\r\n                    <!--Header-->\r\n                    <div class=\"modal-header\" *ngIf=\"orderStatus=='3'\" style=\"background-color: red\">\r\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Order Details</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-header\" *ngIf=\"orderStatus!='3'\">\r\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Order Details</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"row\" style=\"margin-left:10px;\">\r\n                        <!-- &nbsp;&nbsp;&nbsp;&nbsp; -->\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" data-toggle=\"modal\" *ngIf=\"orderStatus=='6' && orderStatusPayment!='2'\" data-target=\"#invoicegenrate\" data-dismiss=\"modal\">Generate Invoice</button>&nbsp;\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" data-toggle=\"modal\" *ngIf=\"orderStatus=='2' \" data-target=\"#customer\" data-dismiss=\"modal\">Accept</button>&nbsp;\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"orderStatus=='2' \" data-dismiss=\"modal\" (click)=\"updateOrderStatus(orderNumber,'return')\">Send Back </button>    \r\n                    </div>\r\n                    <!--Body-->\r\n<<<<<<< HEAD\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"row tab_model\" *ngIf=\"orderStatusPayment!='2'&& pp?.orderHandler==local.name && orderStatus!='3'\" style=\"width:60%;margin-left:2%;\">\r\n=======\r\n                    <!-- <div class=\"modal-body\">\r\n                        <div class=\"row tab_model\" *ngIf=\"orderStatusPayment!='2'\" style=\"width:60%;margin-left:2%;\">\r\n>>>>>>> 4d013310c38ff3841bc475e75a598c381002edbe\r\n                            <div class=\"col-sm-8\">\r\n\r\n                                <label>Update Delegator's Public Key</label>\r\n                                <input type=\"text\" name=\"Enter Comment\" (keyup)=\"search()\" id=\"userNameSearch\" style=\"margin-bottom:5px;width:100%\" placeholder=\"Enter Delegator's Name\">\r\n                                <input type=\"text\" *ngIf=\"isDelegatorSelected\" [(ngModel)]=\"newOwnerPublicKey\">\r\n                            </div> \r\n                            <div class=\"col-sm-4\" style=\"padding-top:20px;\">\r\n<<<<<<< HEAD\r\n\r\n                                <button class=\"button\" (click)=\"transferOwnerShip()\">Update\r\n                                            Handler</button>\r\n\r\n=======\r\n                                <button class=\"button\" (click)=\"transferOwnerShip(orderNumber,newOwnerPublicKey)\">Update\r\n                                    Handler</button>\r\n>>>>>>> origin/development\r\n                            </div>\r\n                        </div> -->\r\n                        <hr>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 col-xl-6\">\r\n                             \r\n                                <table class=\"table table-hover tab_model\" style=\"width:100%;word-break: break-word;\">\r\n\r\n                                    <tbody>\r\n                                        <tr *ngIf=\"pp?.orderNumber\">\r\n                                            <td>Order Number</td>\r\n                                            <td>\r\n                                                <p>{{pp?.orderNumber}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.PO_Number\">\r\n\r\n                                            <td>PO Number</td>\r\n                                            <td>{{pp?.PO_Number}}</td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.PO_Date\">\r\n                                            <td>PO Date</td>\r\n                                            <td>{{pp?.PO_Date}}</td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.orderAmount\">\r\n                                            <td>Order Amount</td>\r\n                                            <td>{{pp?.orderAmount}}</td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.orderDate\">\r\n                                            <td>Order Date</td>\r\n                                            <td>\r\n                                                <p>{{pp?.orderDate}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr *ngIf=\"pp?.orderHandler\">\r\n                                            <td>Order Handler</td>\r\n                                            <td>\r\n                                                <p>{{pp?.orderHandler}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.salesServiceTaxAmount\">\r\n                                            <td>Sales Service TaxAmount</td>\r\n                                            <td>\r\n                                                <p>{{pp?.salesServiceTaxAmount}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.owner\">\r\n                                            <td>Owner</td>\r\n                                            <td>\r\n                                                <p>{{pp?.owner}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"pp?.vendor?.name\">\r\n                                            <td>Vendor Name</td>\r\n                                            <td>\r\n                                                <p>{{pp?.vendor?.name}}</p>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                                <table class=\"table table-hover tab_model\" *ngIf=\"pp?.goodsService.length\" style=\"width:100%;word-break: break-word;\">\r\n                                    <tr>\r\n                                        <td>Goods</td>\r\n                                        <td>\r\n                                            <table>\r\n                                                <tr style=\"font-weight: 300;\">\r\n                                                    <td>Name</td>\r\n                                                    <td>Quantity</td>\r\n                                                    <td>Rate</td>\r\n                                                    <td>Discount</td>\r\n                                                </tr>\r\n                                                <tr *ngFor=\"let g of pp?.goodsService\">\r\n                                                    <td>{{g.name}}</td>\r\n                                                    <td>{{g.quantity}}</td>\r\n                                                    <td>{{g.rate}}</td>\r\n                                                    <td>{{g.discount}}</td>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-xl-6\">\r\n\r\n                                <div *ngIf=\"pp?.orderStatus?.comment || pp?.orderStatus?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\r\n                                    <div class=\"col-lg-3\">\r\n                                        <p>Order Status</p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <div *ngIf=\"pp?.orderStatus?.comment\" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Comment:</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderStatus?.comment}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div *ngIf=\"pp?.orderStatus?.employeeID\" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Employee Id :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderStatus?.employeeID}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div *ngIf=\"pp?.customer?.ID || pp?.customer?.addressBilling || pp?.customer?.addressShipping || pp?.customer?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\r\n                                    <div class=\"col-lg-3\">\r\n                                        <p>Customer</p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <div class=\"row\" *ngIf=\"pp?.customer?.ID\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>ID :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.customer?.ID}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div class=\"row\" *ngIf=\"pp?.customer?.addressBilling\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Address Billing :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.customer?.addressBilling}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div class=\"row\" *ngIf=\"pp?.customer?.addressShipping\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Address Shipping :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.customer?.addressShipping}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div class=\"row\" *ngIf=\"pp?.customer?.employeeID\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Employee ID :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.customer?.employeeID}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row tab_model\" *ngIf=\"pp?.orderPayment?.invoiceAmount || pp?.orderPayment?.invoiceDate ||pp?.orderPayment?.invoiceNumber|| pp?.orderPayment?.status?.comment||pp?.orderPayment?.status?.updater\" style=\"margin-left:auto;margin-right: auto;\">\r\n                                    <div class=\"col-lg-3\">\r\n                                        <p>Order Payment</p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-9\">\r\n                                        <div *ngIf=\"pp?.orderPayment?.invoiceAmount\" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Invoice Amount :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderPayment?.invoiceAmount}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div *ngIf=\" pp?.orderPayment?.invoiceDate \" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Invoice Date :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderPayment?.invoiceDate}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div *ngIf=\"pp?.orderPayment?.invoiceNumber\" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Invoice Number :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderPayment?.invoiceNumber}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div *ngIf=\"pp?.orderPayment?.status?.comment\" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Status Comment :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderPayment?.status?.comment}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <hr>\r\n                                        <div *ngIf=\"pp?.orderPayment?.status?.updater\" class=\"row\">\r\n                                            <div class=\"col-lg-4\">\r\n                                                <p>Status updater :</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8\">\r\n                                                <p>{{pp?.orderPayment?.status?.updater}}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- Modal -->\r\n        <!-- Modal: modalCart -->\r\n        <div class=\"modal fade\" id=\"customer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <!--Header-->\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Accept Order</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <!--Body-->\r\n                    <div class=\"modal-body\">\r\n\r\n                        <table class=\"table table-hover\">\r\n\r\n                            <tbody>\r\n\r\n                                <tr>\r\n\r\n                                    <td>Comment</td>\r\n                                    <td><input type=\"text\" name=\"Enter Comment\" [(ngModel)]=\"statusComment\"></td>\r\n                                    <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Sales Service TaxAmount</td>\r\n                                    <td><input type=\"text\" name=\"Enter Employee Name\" [(ngModel)]=\"salesServiceTaxAmountUpdate\"></td>\r\n                                    <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <td colspan=\"2\">\r\n                                        <table class=\"table table-hover \">\r\n                                            <tr style=\"font-weight: 300;\">\r\n                                                <td>Name</td>\r\n                                                <td>Discount</td>\r\n                                            </tr>\r\n                                            <tr *ngFor=\"let g of pp?.goodsService;let i=index\">\r\n                                                <td>{{g.name}}</td>\r\n                                                <td><input type=\"text\" value=\"{{g.discount}}\" placeholder=\"Input Discount\" (keyup.enter)=\" getquantity($event,i)\" (blur)=\" getquantity($event,i)\" /></td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                    <!--Footer-->\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>\r\n                        <button class=\"btn btn-primary\" (click)=\"updateOrderStatus($event,orderNumber,'accept') \" data-dismiss=\"modal\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"customer11\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <!--Header-->\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Accept Order</h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">×</span>\r\n                        </button>\r\n                    </div>\r\n                    <!--Body-->\r\n                    <div class=\"modal-body\">\r\n                        <table class=\"table table-hover\">\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>Comment</td>\r\n                                    <td><input type=\"text\" name=\"Enter Comment\" [(ngModel)]=\"statusComment1\"></td>\r\n                                    <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Sales Service TaxAmount</td>\r\n                                    <td><input type=\"text\" name=\"Enter Employee Name\" [(ngModel)]=\"salesServiceTaxAmountUpdate1\"></td>\r\n                                    <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Discount</td>\r\n                                    <td><input type=\"text\" name=\"Goods&Services Discount\" [(ngModel)]=\"goodsServicesDiscount1\"></td>\r\n                                    <td><a><i class=\"fas fa-times\"></i></a></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                    <!--Footer-->\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>\r\n                        <button class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"updateMultipleOrderStatus('accept') \"> Save</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Modal -->\r\n        <div class=\"modal fade\" id=\"invoicegenrate\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Invoice Details</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form [formGroup]=\"invoiceData\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"invoiceNumber1\">Invoice Number</label>\r\n                                <input type=\"email\" formControlName=\"invoiceNumber\" class=\"form-control\" id=\"invoiceNumber1\" aria-describedby=\"nameHelp\" placeholder=\"Enter Invoice Number\">\r\n                                <!-- <small id=\"nameHelp\" class=\"form-text text-muted\">Name must be under 16 char.</small> -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"invoiceDate1\">Invoice Date</label>\r\n                                <input type=\"date\" formControlName=\"invoiceDate\" class=\"form-control\" id=\"invoiceDate1\" aria-describedby=\"ethHelp\" placeholder=\"Enter Invoice Date\">\r\n                                <!-- <small id=\"ethHelp\" class=\"form-text text-muted\">Please provide user valid public key.</small> -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"invoiceAmount1\">Invoice Amount</label>\r\n                                <input type=\"Number\" formControlName=\"invoiceAmount\" class=\"form-control\" id=\"invoiceAmount1\" placeholder=\"Enter Invoice Amount\" value=\"{{orderAmount}}\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"comment1\">Comment</label>\r\n                                <input type=\"text\" formControlName=\"comment\" class=\"form-control\" id=\"comment1\" placeholder=\"Enter comment for invoice\">\r\n                            </div>\r\n\r\n                            <!-- <button type=\"submit\" [disabled]=\"!registerUser.valid\" class=\"btn btn-primary\">Submit</button> -->\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"invoiceDataUpload()\" [disabled]=\"!invoiceData.valid\">Save Changes</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "./src/app/vendor-employee-orders/vendor-employee-orders.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/vendor-employee-orders/vendor-employee-orders.component.ts ***!
  \****************************************************************************/
/*! exports provided: VendorEmployeeOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEmployeeOrdersComponent", function() { return VendorEmployeeOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");








var VendorEmployeeOrdersComponent = /** @class */ (function () {
    function VendorEmployeeOrdersComponent(data, fb, httpClient, blockchainService) {
        this.data = data;
        this.fb = fb;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.orderId = "";
        this.vendorName = "";
        this.employeeName = "";
        this.shippingAddress = "";
        this.billingAddress = "";
        this.gstNo = "";
        this.poNumber = "";
        this.poDate = "";
        this.orderDate = "";
        this.statusComment = "";
        this.orderStatus = "";
        this.orderPaymentStatus = null;
        this.orderAmount = "";
        this.orderNumber = "";
        this.isDelegatorSelected = false;
        this.salesServiceTaxAmountUpdate = "";
        this.goodsServiceDiscount = [];
        this.newOwnerPublicKey = "";
        this.productdiscount = [];
        this.productname = [];
        this.statusComment1 = "";
        this.salesServiceTaxAmountUpdate1 = "";
        this.orderStatusPayment = "";
        // productArray:any[]=[];
        this.displayedColumns = [
            'select',
            'orderNumber',
            'PO_Date',
            'PO_Number',
            'orderAmount',
            'orderDate',
            'orderHandler',
            'owner',
            'globalStatus',
        ];
        this.OrderStatus = ["", "Created", "Awarded", "Discarted", "Returned", "Accepted", "Delivered", "Invoice Genrated", "Invoice Paid"];
        this.invoiceData = this.fb.group({
            invoiceNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            invoiceDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            invoiceAmount: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            comment: [''],
        });
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
        this.username = "";
        this.globalFlag = false;
        this.username = localStorage.getItem('userID');
        this.name = localStorage.getItem('userName');
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.package_list);
        this.getOrderDetails();
        console.log("helli");
    }
    VendorEmployeeOrdersComponent.prototype.ngOnInit = function () {
    };
    VendorEmployeeOrdersComponent.prototype.getOrderDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('order').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var from, to, ownerIDName, i, waitResponseOH, waitResponseOw, waitResponseCI, waitResponseCE, orderData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!val) return [3 /*break*/, 18];
                        from = 0;
                        to = val['entity'].length;
                        ownerIDName = {};
                        i = from;
                        _a.label = 1;
                    case 1:
                        if (!(i < to)) return [3 /*break*/, 18];
                        if (!(val['entity'][i].hasOwnProperty('vendor') && val['entity'][i]['vendor']['name'] == localStorage.getItem('vendorName'))) return [3 /*break*/, 17];
                        console.log(val['entity'][i]);
                        orderData = val['entity'][i];
                        if (parseInt(orderData['orderStatus'].status) == 4 || parseInt(orderData['orderStatus'].status) == 1 || parseInt(orderData['orderStatus'].status) == 3) {
                            return [3 /*break*/, 17];
                        }
                        if (!ownerIDName.hasOwnProperty(orderData['orderHandler'])) return [3 /*break*/, 2];
                        orderData['orderHandler'] = ownerIDName[orderData['orderHandler']];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderHandler'] })];
                    case 3:
                        waitResponseOH = _a.sent();
                        orderData['orderHandler'] = waitResponseOH['docs'][0].name;
                        ownerIDName[orderData['orderHandler']] = waitResponseOH['docs'][0].name;
                        _a.label = 4;
                    case 4:
                        if (!ownerIDName.hasOwnProperty(orderData['owner'])) return [3 /*break*/, 5];
                        orderData['owner'] = ownerIDName[orderData['owner']];
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['owner'] })];
                    case 6:
                        waitResponseOw = _a.sent();
                        orderData['owner'] = waitResponseOw['docs'][0].name;
                        ownerIDName[orderData['owner']] = waitResponseOw['docs'][0].name;
                        _a.label = 7;
                    case 7:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['ID'])) return [3 /*break*/, 8];
                        orderData['customer']['ID'] = ownerIDName[orderData['customer']['ID']];
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['ID'] })];
                    case 9:
                        waitResponseCI = _a.sent();
                        orderData['customer']['ID'] = waitResponseCI['docs'][0].name;
                        ownerIDName[orderData['customer']['ID']] = waitResponseCI['docs'][0].name;
                        _a.label = 10;
                    case 10:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['employeeID'])) return [3 /*break*/, 11];
                        orderData['customer']['employeeID'] = ownerIDName[orderData['customer']['employeeID']];
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['employeeID'] })];
                    case 12:
                        waitResponseCE = _a.sent();
                        orderData['customer']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['customer']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 13;
                    case 13:
                        if (!(orderData['orderStatus']['employeeID'] !== "")) return [3 /*break*/, 16];
                        if (!ownerIDName.hasOwnProperty(orderData['orderStatus']['employeeID'])) return [3 /*break*/, 14];
                        orderData['orderStatus']['employeeID'] = ownerIDName[orderData['orderStatus']['employeeID']];
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderStatus']['employeeID'] })];
                    case 15:
                        waitResponseCE = _a.sent();
                        orderData['orderStatus']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['orderStatus']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 16;
                    case 16:
                        if (orderData.hasOwnProperty('orderPayment')) {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderPayment'].status.paymentStatus) + 6];
                        }
                        else {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderStatus'].status)];
                        }
                        that.package_list.push(orderData);
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        _a.label = 17;
                    case 17:
                        i++;
                        return [3 /*break*/, 1];
                    case 18: return [2 /*return*/];
                }
            });
        }); });
        console.log(localStorage);
        this.local = localStorage;
    };
    VendorEmployeeOrdersComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource['data'].length;
        return numSelected === numRows;
    };
    VendorEmployeeOrdersComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        for (var i = 0; i < this.selection.selected.length; i++) {
            if (this.selection.selected[i]['orderStatus'].status === 2) {
                this.globalFlag = true;
            }
            else {
                this.globalFlag = false;
                break;
            }
        }
        ;
    };
    VendorEmployeeOrdersComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
    };
    VendorEmployeeOrdersComponent.prototype.selectionData = function () {
        console.log(this.selection.selected);
        this.globalFlag = false;
        for (var i = 0; i < this.selection.selected.length; i++) {
            if (this.selection.selected[i]['orderStatus'].status === 2) {
                this.globalFlag = true;
            }
            else {
                this.globalFlag = false;
                break;
            }
        }
        ;
    };
    VendorEmployeeOrdersComponent.prototype.search = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var queryVendor, names, that, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isDelegatorSelected = false;
                        queryVendor = {
                            "userType": 2,
                            "vendorName": localStorage.getItem('name'),
                            "name": {
                                "$regex": "(?i)" + document.getElementById("userNameSearch").value
                            }
                        };
                        names = [];
                        // console.log(queryVendor)
                        console.log(queryVendor);
                        that = this;
                        return [4 /*yield*/, this.blockchainService.getallNamePub(queryVendor)];
                    case 1:
                        data = _a.sent();
                        console.log(data['docs']);
                        // console.log(data)
                        this.autocomplete(document.getElementById("userNameSearch"), data['docs']);
                        return [2 /*return*/];
                }
            });
        });
    };
    VendorEmployeeOrdersComponent.prototype.autocomplete = function (inp, arr) {
        var that = this;
        console.log("auto", inp, arr);
        window['inp'] = inp;
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            console.log("value", this.value);
            /*close any already open lists of autocompleted values*/
            closeAllLists(null);
            if (!val) {
                return false;
            }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].name.substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i].name + "'>";
                    b.innerHTML += "<p id=" + arr[i].owner + ">" + arr[i].owner + "</p>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        that.newOwnerPublicKey = this.getElementsByTagName("p")[0].innerHTML;
                        // window['ptag']=this.getElementsByTagName("p")[0]
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists(null);
                    });
                    a.appendChild(b);
                }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list")[0];
            var y;
            if (x)
                x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
            }
            else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            }
            else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x)
                        x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x)
                return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length)
                currentFocus = 0;
            if (currentFocus < 0)
                currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
            that.isDelegatorSelected = true;
            // that.newOwnerPublicKey=ar
        });
    };
    VendorEmployeeOrdersComponent.prototype.getdata = function (event) {
        this.productname = [];
        this.productdiscount = [];
        console.log("=====");
        console.log(event);
        this.pp = event;
        console.log(this.pp['ID']);
        console.log(event);
        this.orderNumber = event.orderNumber;
        this.orderId = event.ID;
        this.vendorName = event.vendor.name;
        this.employeeName = event.customer.name;
        this.shippingAddress = event.customer.addressShipping;
        this.billingAddress = event.customer.addressBilling;
        this.poNumber = event.PO_Number;
        this.poDate = event.PO_Date;
        this.orderDate = event.orderDate;
        this.statusComment = event.orderStatus.comment;
        this.orderStatus = event.orderStatus.status;
        this.orderAmount = event.orderAmount;
        this.goodsServiceDiscount = event.goodsService;
        if (this.orderStatus == '6') {
            this.orderStatusPayment = event.orderPayment.status.paymentStatus;
        }
        else {
            this.orderStatusPayment = "0";
        }
        var x = {};
        for (var i = 0; i < event.goodsService.length; i++) {
            this.productname.push(event.goodsService[i].name);
            if (event.goodsService[i].discount) {
                x[event.goodsService[i].name] = event.goodsService[i].discount;
            }
            else {
                x[event.goodsService[i].name] = "0";
            }
        }
        console.log(x);
        console.log(this.productname);
        this.goodsServicesDiscount = x;
        console.log(this.goodsServicesDiscount);
    };
    VendorEmployeeOrdersComponent.prototype.updateMultipleOrderStatus = function (action) {
        var that = this;
        for (var i = 0; i < this.selection.selected.length; i++) {
            var k = this.selection.selected[i].orderAmount;
            var z = this.salesServiceTaxAmountUpdate1;
            var t = (k * z) / 100;
            var goodsServiceDiscount2 = {};
            for (var j = 0; j < this.selection.selected[i]['goodsService'].length; j++) {
                goodsServiceDiscount2[this.selection.selected[i]['goodsService'][j].name] = this.goodsServicesDiscount1;
            }
            var status = 4;
            if (action == 'accept') {
                status = 5;
            }
            var payload = {
                "orderNumber": this.selection.selected[i].orderNumber,
                "vendor": {
                    "employeeName": this.name
                },
                "orderStatus": status,
                "comment": this.statusComment1,
                "salesServiceTaxAmount": t,
                "discount": goodsServiceDiscount2
            };
            console.log(payload);
            this.blockchainService.acceptOrder(payload).subscribe(function (val) {
                if (val) {
                    console.log("acceptOrder", val);
                    that.goodsServicesDiscount = "";
                }
            });
        }
    };
    VendorEmployeeOrdersComponent.prototype.updateOrderStatus = function (event, orderNumber, action) {
        var that = this;
        console.log("updateOrderStatus", event, orderNumber, action);
        var status = 4;
        if (action == 'accept') {
            status = 5;
        }
        // console.log(this.goodsServicesDiscount)
        var payload = {
            "orderNumber": orderNumber,
            "vendor": {
                "employeeName": this.name
            },
            "orderStatus": status,
            "comment": this.statusComment,
            "salesServiceTaxAmount": this.salesServiceTaxAmountUpdate,
            "discount": this.goodsServicesDiscount
        };
        console.log(payload);
        this.blockchainService.acceptOrder(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                that.goodsServicesDiscount = "";
            }
        });
    };
    VendorEmployeeOrdersComponent.prototype.transferOwnerShip = function (orderNumber, newOwnerPublicKey) {
        if (orderNumber === void 0) { orderNumber = this.orderNumber; }
        if (newOwnerPublicKey === void 0) { newOwnerPublicKey = this.newOwnerPublicKey; }
        var that = this;
        console.log("transferOwnerShip", orderNumber, newOwnerPublicKey);
        var payload = {
            "orderNumber": orderNumber,
            "newOwnerPublicKey": newOwnerPublicKey
        };
        alert('transfered');
        this.blockchainService.transferOwnership(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                that.goodsServicesDiscount = "";
            }
        });
    };
    VendorEmployeeOrdersComponent.prototype.getquantity = function (event, j) {
        if (parseInt(event.target.value, 10) <= 100 && parseInt(event.target.value, 10) > -1) {
            console.log("hello", j);
            console.log(this.productname);
            console.log(this.goodsServicesDiscount);
            console.log(this.goodsServicesDiscount[j]);
            console.log(event);
            console.log(this.productname[j]);
            this.goodsServicesDiscount[this.productname[j]] = event.target.value;
            console.log(this.goodsServicesDiscount);
        }
    };
    VendorEmployeeOrdersComponent.prototype.invoiceDataUpload = function () {
        var that = this;
        console.log(this.invoiceData.value);
        var payload = this.invoiceData.value;
        payload['paymentStatus'] = '1';
        payload['orderNumber'] = this.orderNumber;
        payload['vendor'] = {};
        payload.vendor['employeeName'] = this.name;
        console.log(payload);
        this.blockchainService.orderPayment(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                // that.invoiceData['value'={}
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], VendorEmployeeOrdersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], VendorEmployeeOrdersComponent.prototype, "sort", void 0);
    VendorEmployeeOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-employee-orders',
            template: __webpack_require__(/*! ./vendor-employee-orders.component.html */ "./src/app/vendor-employee-orders/vendor-employee-orders.component.html"),
            styles: [__webpack_require__(/*! ./vendor-employee-orders.component.css */ "./src/app/vendor-employee-orders/vendor-employee-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], VendorEmployeeOrdersComponent);
    return VendorEmployeeOrdersComponent;
}());



/***/ }),

/***/ "./src/app/vendor-employee/vendor-employee.component.css":
/*!***************************************************************!*\
  !*** ./src/app/vendor-employee/vendor-employee.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\n  color: #007bff;\n  cursor: pointer;\n    }\n    #nav:hover{\n      color:black;\n    }\n    .tab_header{\n     padding:5px;\n     border-radius: 7px;\n     width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n   }\n    .tab_body{\n    padding:5px;\n    border-radius: 7px; \n    width:97%;\n    margin-left: auto;\n    margin-right: auto;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: center;\n  }\n    .cont{\n    margin:5px 1.5% 5px 1.5%; \n  }\n    .tab_body{\n    padding:5px;\n    border-radius: 7px; \n    width:97%;\n    margin-left: auto;\n    margin-right: auto;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: left;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWVtcGxveWVlL3ZlbmRvci1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7SUFDYjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0Q7S0FDRSxXQUFXO0tBQ1gsa0JBQWtCO0tBQ2xCLFdBQVc7SUFDWiw0RUFBNEU7SUFDNUUsa0JBQWtCO0dBQ25CO0lBRUE7SUFDQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CLDRFQUE0RTtHQUM1RSxrQkFBa0I7RUFDbkI7SUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtJQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtHQUNuQiw0RUFBNEU7R0FDNUUsZ0JBQWdCO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLWVtcGxveWVlL3ZlbmRvci1lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgI25hdjpob3ZlcntcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cbiAgIC50YWJfaGVhZGVye1xuICAgICBwYWRkaW5nOjVweDtcbiAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbiBcbiAgIC50YWJfYm9keXtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7IFxuICAgIHdpZHRoOjk3JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jb250e1xuICAgIG1hcmdpbjo1cHggMS41JSA1cHggMS41JTsgXG4gIH1cbiAgLnRhYl9ib2R5e1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDsgXG4gICAgd2lkdGg6OTclO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-employee/vendor-employee.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vendor-employee/vendor-employee.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\r\n\r\n    </a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right\" style=\"display:inline;\">\r\n        <div style=\"display: inline-block\">\r\n            <div style=\"display: inline-block\">\r\n                {{name}}\r\n            </div>\r\n            &nbsp;\r\n            <div style=\"display: inline-block\">\r\n                <a class=\"nav-link\" (click)=\"setlogout()\">\r\n                    <i class=\"fa fa-sign-out fa-lg\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</nav>\r\n<br>\r\n<div class=\"cont\">\r\n    <div class=\"tab_header \">\r\n        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" data-toggle=\"pill\" (click)=\"employee()\" style=\"cursor:pointer;\">\r\n                    <h6>About</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendortable()\" style=\"cursor:pointer;\">\r\n                    <h6>Goods/Services</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendorinfo()\" style=\"cursor:pointer;\">\r\n                    <h6>Order</h6>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"tab_body\">\r\n    <br>\r\n    <router-outlet></router-outlet>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "./src/app/vendor-employee/vendor-employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendor-employee/vendor-employee.component.ts ***!
  \**************************************************************/
/*! exports provided: VendorEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEmployeeComponent", function() { return VendorEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var VendorEmployeeComponent = /** @class */ (function () {
    function VendorEmployeeComponent(data, http, httpClient, route, router, blockchainService, Auth) {
        this.data = data;
        this.http = http;
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.blockchainService = blockchainService;
        this.Auth = Auth;
        this.message = "Loading...";
        this.username = "";
        this.name = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    // setlogout(){
    // this.Auth.setLogout();
    // this.router.navigate(['/home']);
    // }
    VendorEmployeeComponent.prototype.ngOnInit = function () {
        // this.user.getSomeData().subscribe(data => {
        //   this.message = data.message
        //   if(!data.success){
        //     localStorage.removeItem('loggedIn')
        //   }
        // })
        this.employee();
    };
    VendorEmployeeComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    VendorEmployeeComponent.prototype.vendortable = function () {
        this.router.navigate(['goods'], { relativeTo: this.route });
    };
    VendorEmployeeComponent.prototype.vendorinfo = function () {
        this.router.navigate(['orders'], { relativeTo: this.route });
    };
    // vendorcustomer() {
    //   this.router.navigate(['customer'], { relativeTo: this.route });
    // }
    VendorEmployeeComponent.prototype.employee = function () {
        this.router.navigate(['info'], { relativeTo: this.route });
    };
    VendorEmployeeComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['employee'].name);
            }
        });
    };
    VendorEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-employee',
            template: __webpack_require__(/*! ./vendor-employee.component.html */ "./src/app/vendor-employee/vendor-employee.component.html"),
            styles: [__webpack_require__(/*! ./vendor-employee.component.css */ "./src/app/vendor-employee/vendor-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], VendorEmployeeComponent);
    return VendorEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/vendor-info/vendor-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/vendor-info/vendor-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n\n\n\n.tab_header {\n    padding: 5px;\n    border-radius: 7px;\n    width: 400px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n}\n\n\n\n.cont {\n    margin-left: 2%;\n    margin-left: auto;\n    margin-right: auto;\n    width: 90%;\n}\n\n\n\n.info {\n    text-align: left;\n    margin-left: 5%;\n    word-break: break-word;\n    font-weight: 350;\n}\n\n\n\n.tab_body {\n    padding: 5px;\n    border-radius: 7px;\n    width: 97%;\n    margin-left: auto;\n    margin-right: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: left;\n}\n\n\n\n/* .tab_bar{\n\n  border-radius: 7px;\n\n  margin-left:auto;\n  margin-right:auto;\n\n box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n text-align: left; \n} */\n\n\n\n.tagbutton {\n    cursor: pointer;\n    color: white;\n    background-color: #007bff;\n}\n\n\n\n.field-info {\n    padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWluZm8vdmVuZG9yLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSxrQkFBa0I7QUFDdEI7Ozs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDRFQUE0RTtJQUM1RSxnQkFBZ0I7QUFDcEI7Ozs7QUFHQTs7Ozs7Ozs7O0dBU0c7Ozs7QUFFSDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOzs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3ItaW5mby92ZW5kb3ItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi50YWJfaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmluZm8ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgZm9udC13ZWlnaHQ6IDM1MDtcbn1cblxuLnRhYl9ib2R5IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHdpZHRoOiA5NyU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG4vKiAudGFiX2JhcntcblxuICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG5cbiBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuIHRleHQtYWxpZ246IGxlZnQ7IFxufSAqL1xuXG4udGFnYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbi5maWVsZC1pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/vendor-info/vendor-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/vendor-info/vendor-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vendor\">\n    <div>\n        <h5 style=\"text-align: center;\">Welcome Vendor</h5>\n    </div><br>\n    <div style=\"text-align:center;height:150px;\">\n        <img src=\"/assets/profile.png\">\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Full Name</span>\n                </div>\n                <div class=\"field-info\">{{name | uppercase }}</div>\n            </div>\n        </div>\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Email</span>\n                </div>\n                <div class=\"field-info\">{{email}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Address</span>\n                </div>\n                <div id=\"fullAddress\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Public Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(1)\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                            aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                            </path>\n                        </svg>\n                    </span>\n                </div>\n                <div class=\"field-info\">{{publicKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row info\">\n        <div class=\"col-md\">\n            <div class=\"field-group mt-5\">\n                <div class=\"field-header\">\n                    <span class=\"h5 mr-3\">Private Key</span>\n                    <span class=\"mx-3\" (click)=\"showKey(2)\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-eye\"\n                            aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\">\n                            </path>\n                        </svg>\n                    </span>\n                    <span class=\"mx-3\" (click)=\"download()\">\n                        <svg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\n                            class=\"octicon octicon-cloud-download\" aria-hidden=\"true\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z\">\n                            </path>\n                        </svg>\n                    </span>\n                </div>\n                <div class=\"field-info\">{{privateKeyHide}}</div>\n            </div>\n        </div>\n    </div>\n    <br><br>\n    <div class=\"row\">\n        <!-- <div class=\"col-sm-3\" style=\"display:block;\">\n                <div style=\"padding-right: 0px;\">\n                    <p for=\"input\" style=\"float:left;\">Bulk Registration For Employee</p>\n                    <input type=\"file\" class=\"upload \" (change)=\"changeListener($event.target.files)\" accept=\".csv\">\n               </div>\n                </div> -->\n        <div class=\"col-sm-3\">\n        </div>\n        <div class=\"col-sm-2\">\n\n            <button class=\"button\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"clearModel($event)\">Register Employee</button>\n        </div>\n        <div class=\"col-sm-2\">\n\n            <button class=\"button\" data-toggle=\"modal\" data-target=\"#bulk\">Bulk Registration</button>\n        </div>\n        <!-- <div class=\"col-sm-3\" style=\"display:block;\">\n                <p for=\"input\" style=\"float:left;\">Bulk Registration For Customer</p>\n                <input type=\"file\" class=\"upload \" (change)=\"changeListener($event.target.files)\" accept=\".csv\">\n            </div> -->\n        <div class=\"col-sm-2\">\n            <button class=\"button\" data-toggle=\"modal\" data-target=\"#customer\" (click)=\"clearModel($event)\">Add Costumer</button>\n        </div>\n        <div class=\"col-sm-3\">\n        </div>\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"register\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Register Employee</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"registerUser\">\n                    <div class=\"form-group\">\n                        <label for=\"Name1\">Name</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"Name1\" aria-describedby=\"nameHelp\" placeholder=\"Enter Name\">\n                        <!-- <small id=\"nameHelp\" class=\"form-text text-muted\">Name must be under 16 char.</small> -->\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"publicKey1\">Public Key</label>\n                        <input type=\"text\" formControlName=\"employeeAddress\" class=\"form-control\" id=\"publicKey1\" aria-describedby=\"ethHelp\" placeholder=\"Enter Employee's Public Key\">\n                        <small id=\"ethHelp\" class=\"form-text text-muted\">Please provide user valid public key.</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email1\">Email</label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email1\" placeholder=\"Enter Email\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"contact1\">Contact</label>\n                        <input type=\"text\" formControlName=\"contactNumber\" class=\"form-control\" id=\"contact1\" placeholder=\"Enter Contact Number\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"role1\">Select Role</label>\n                        <select class=\"form-control\" formControlName=\"role\" id=\"role1\">\n                            <option *ngFor=\"let rr of Roles\" [value]=\"rr.value\">{{rr.role}}</option>\n                        </select>\n                    </div>\n                    <!-- <button type=\"submit\" [disabled]=\"!registerUser.valid\" class=\"btn btn-primary\">Submit</button> -->\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"registeremployee()\" [disabled]=\"!registerUser.valid\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- Modal: customer -->\n\n<div class=\"modal fade\" id=\"customer\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <!--Header-->\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Register Customer</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"addCustomer\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email1\">Email</label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email1\" placeholder=\"Enter Valid Email ID\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                        <label for=\"contact1\">Address</label>\n                        <input type=\"text\" formControlName=\"address\" class=\"form-control\" id=\"address1\" placeholder=\"Enter Address\">\n                    </div>\n                -->\n                    <div class=\"form-group\">\n                        <label style=\"margin-left:3%;\">Address:</label>\n                    </div>\n                    <div id=\"fullAddress\" style=\"margin-left: 10px;margin-right: 10px;\">\n                        <div class=\"form-group \">\n                            <div class=\"row form-group\">\n                                <label style=\"margin-left:0;font-size: 20px\">Line No. 1</label>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-11 col-md-11\" style=\"display:inline-block;\"><input style=\"width:100%;\" (keyup.enter)=\"getValueRg($event)\" (blur)=\"getValueRg($event)\" class=\"form-control\" placeholder=\"Enter Address\" id=\"firstAddressLine\" />\n                                </div>\n                                <!-- <div class=\"col-xs-1 col-md-1\" style=\"display:inline-block;\" ></div> -->\n                                <div class=\"col-xs-1 col-md-1\" style=\"display:inline-block;\"><button class=\"tagbutton\" (click)=\"addTag()\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button></div>\n                            </div>\n                        </div>\n                        <div class=\"form-group \" *ngFor=\"let h of tagarr;let i= index \">\n                            <div class=\"row form-group\">\n                                <label style=\"margin-left:3%;\"> Line No. {{i+2}}</label>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-11 col-md-11\" style=\"display:inline-block;\"><input style=\"width:100%;\" class=\"form-control\" (keyup.enter)=\"getValueRg($event)\" (blur)=\"getValueRg($event)\" placeholder=\"Enter Line No. {{i+1}}\" /></div>\n                                <div class=\"col-xs-1 col-md-1\" style=\"display:inline-block;\"><button class=\"tagbutton\" (click)=\"dltTags(i)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"city1\">City</label>\n                            <input type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"city1\" placeholder=\"Enter City Name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"state1\">State</label>\n                            <input type=\"text\" formControlName=\"state\" class=\"form-control\" id=\"state1\" placeholder=\"Enter State Name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"pincode1\">Pincode</label>\n                            <input type=\"text\" formControlName=\"pincode\" class=\"form-control\" id=\"pincode1\" placeholder=\"Enter Pincode\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"contact1\">Contact No.</label>\n                        <input type=\"text\" formControlName=\"contactNumber\" class=\"form-control\" id=\"contact1\" placeholder=\"Enter Contact Number\">\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <label for=\"GSTNumber\">GST Number</label>\n                        <input type=\"text\" formControlName=\"GSTNumber\" class=\"form-control\" id=\"gst1\" placeholder=\"Enter GST Number\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"publicKey\">Public Key</label>\n                        <input type=\"text\" formControlName=\"publicKey\" class=\"form-control\" id=\"publicKey1\" placeholder=\"Enter Customer's Public Key\">\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addcustomer()\" [disabled]=\"!addCustomer.valid\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"bulk\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"z-index:11;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Bulk Registration</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"form-control\">\n                <input (click)=\"addTags($event)\" ng-model=\"bulkUploadAction\" id=\"employeeRadio\" type=\"radio\" name=\"rgresult\" />Employee\n                <input (click)=\"addTags($event)\" ng-model=\"bulkUploadAction\" id=\"customerRadio\" type=\"radio\" name=\"rgresult\" />Customer\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <!-- <p for=\"input\" style=\"float:left;\">Bulk Registration</p> -->\n                        <input type=\"file\" class=\"upload \" (change)=\"updateFileData($event.target.files)\" accept=\".csv\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"bulkRegister()\" [disabled]=\"!bulkupload\">Add</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor-info/vendor-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/vendor-info/vendor-info.component.ts ***!
  \******************************************************/
/*! exports provided: VendorInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorInfoComponent", function() { return VendorInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");








// import * as $ from jquery';
var VendorInfoComponent = /** @class */ (function () {
    function VendorInfoComponent(data, http, Auth, router, httpClient, blockchainService, fb) {
        this.data = data;
        this.http = http;
        this.Auth = Auth;
        this.router = router;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.fb = fb;
        this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
        this.vmtagKey = [];
        this.rgtagValue = [];
        this.tagarr = [];
        this.bulkFile = '';
        this.rgTagCount = 0;
        this.bulkupload = false;
        this.bulkupload1 = false;
        this.addCustomer = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            // orgName: ['', [Validators.required, Validators.maxLength(16)]],
            publicKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            // role: ['1', Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            address: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pincode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            GSTNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contactNumber: ['']
        });
        this.Roles = [
            { role: "Employee", value: 1 },
            { role: "Admin", value: 2 }
        ];
        this.registerUser = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            employeeAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            role: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            contactNumber: [''],
        });
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    VendorInfoComponent.prototype.ngOnInit = function () {
    };
    VendorInfoComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    VendorInfoComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['vendor'].name);
                that.id = (val[_this.username][0]['vendor'].ID);
                that.address = JSON.parse((val[_this.username][0]['vendor'].address).replace(/'/g, "\""));
                that.email = (val[_this.username][0]['vendor'].email);
                that.publicKey = (val[_this.username][0]['owner']);
                that.privateKey = localStorage.getItem('private');
                console.log(that.name, that.id, that.address, that.email);
                window['aa'] = that.address;
                _this.showAddress();
            }
        });
    };
    VendorInfoComponent.prototype.showAddress = function () {
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        var y = "";
        for (var key in this.address) {
            var x = "<div class='field-header'>";
            if (col.indexOf(key) === -1) {
                col.push(key);
                // x += "<span class='h5 mr-3' >" + key.toUpperCase() + "</span>";
                // x += "</div>";
                x += "<div class='field-info' style='padding-left:10px;'>" + this.address[key] + "</div>";
            }
            x += "</div>";
            y += x;
        }
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("fullAddress");
        divContainer.innerHTML = y;
        // divContainer.append(y);
    };
    VendorInfoComponent.prototype.addTags = function (event) {
        console.log(event, event.value);
        window['ra'] = event;
        this.bulkFile = event.value;
        if (document.getElementById('employeeRadio').checked)
            this.bulkFile = "registerEmployee";
        if (document.getElementById('customerRadio').checked)
            this.bulkFile = "registerCustomerOrg";
        // console.log('radio check done', $("input[name='rgresult']:checked").val());
        // if ($("input[name='rgresult']:checked").val() == 'yes')
        //   // this.tagStatus = true;
        // else {
        // this.tagStatus = false;
        //   // this.tagarr = [];
        //   // this.rgTagCount = 0;
        //   // this.rgtagValue = [];
        //   // this.rgtagKey = [];
        // }
    };
    VendorInfoComponent.prototype.getValueRg = function (event) {
        console.log(event);
        this.rgtagValue.push(event.target.value);
        console.log(this.rgtagValue);
    };
    VendorInfoComponent.prototype.dltTags = function (i) {
        if (this.rgTagCount > 0) {
            console.log(i);
            this.rgTagCount--;
            console.log(this.rgTagCount);
            var tag_array = this.tagarr;
            console.log(tag_array);
            tag_array.splice(i, 1);
            this.rgtagValue.splice(i + 1, 1);
            console.log(this.rgtagValue);
        }
        else {
            this.rgtagValue.splice(0, 1);
        }
    };
    VendorInfoComponent.prototype.addTag = function () {
        var pp = /** @class */ (function () {
            function pp() {
            }
            return pp;
        }());
        if (this.rgTagCount < 3) {
            this.rgTagCount++;
            console.log(this.rgTagCount);
            var object = new pp();
            this.tagarr.push(object);
            // console.log();
            // this.tagStatusValue++;
            console.log(this.tagarr);
        }
    };
    VendorInfoComponent.prototype.showKey = function (PubPvt) {
        if (PubPvt == 1) {
            if (this.publicKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.publicKeyHide = this.publicKey;
            }
            else {
                this.publicKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
        else if (PubPvt == 2) {
            if (this.privateKeyHide == '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••') {
                this.privateKeyHide = this.privateKey;
            }
            else {
                this.privateKeyHide = '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••';
            }
        }
    };
    VendorInfoComponent.prototype.download = function () {
        var data = JSON.stringify({
            "PublicKey": this.publicKey,
            "PrivateKey": this.privateKey
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', this.name + ".priv");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    VendorInfoComponent.prototype.registeremployee = function () {
        var _this = this;
        console.log(this.registerUser.value);
        var that = this;
        var payload = this.registerUser.value;
        console.log('first', payload);
        this.registerUser = null;
        payload['vendorName'] = this.name;
        this.blockchainService.registerEmployee(payload).subscribe(function (val) {
            if (val) {
                console.log(val);
                if (JSON.parse(val['response']['body']).data[0].status == 'COMMITTED') {
                    window.alert("User Register Successfull \n UserID:" + val['userid']);
                    var couchpayload = {};
                    couchpayload['data'] = {};
                    couchpayload['data'] = payload;
                    couchpayload['id'] = val['userid'];
                    couchpayload['data']['userType'] = 2;
                    couchpayload['data']['publicKey'] = payload['employeeAddress'];
                    couchpayload['data']['owner'] = payload['employeeAddress'];
                    delete couchpayload['data']['employeeAddress'];
                    that.blockchainService.registerEmployeeDB(couchpayload).subscribe(function (val) {
                        if (val) {
                            console.log(val);
                            _this.userid = val['userid'];
                            _this.Auth.setuserid(_this.userid);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    window.alert("User Registration Failed \n Status:" + JSON.parse(val['response']['body']).data[0].status);
                }
            }
        });
    };
    VendorInfoComponent.prototype.updateFileData = function (files) {
        var that = this;
        console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            this.uploadFile = file;
            this.bulkupload = true;
            console.log(file.name);
            console.log(file.size);
            console.log(file.type);
            // if (file.type == "text/csv") {
            //   let reader: FileReader = new FileReader();
            //   reader.readAsText(file);
            //   reader.onload = (e) => {
            //     let csv: string = reader.result as string;
            //     console.log(csv);
            //   }
            // }
        }
    };
    VendorInfoComponent.prototype.bulkRegister = function () {
        var _this = this;
        console.log(this.bulkFile);
        var that = this;
        var blockchainPayload = {};
        blockchainPayload['action'] = this.bulkFile;
        console.log("Action name ", blockchainPayload['action']);
        if (this.uploadFile) {
            console.log("Entering here");
            blockchainPayload['file'] = this.uploadFile;
            console.log("Now here", this.uploadFile);
            this.blockchainService.bulkUpload(blockchainPayload).subscribe(function (val) {
                if (val) {
                    console.log(val);
                    var allResponseData = {};
                    allResponseData['COMMITTED'] = [];
                    allResponseData['INVALID'] = [];
                    var Registered = {};
                    Registered['newEmployee'] = [];
                    Registered['AlreadyOnNetwork'] = [];
                    val['response'].forEach(function (element) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var couchpayload;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(element);
                                    if (!(element['response'].status == 'COMMITTED')) return [3 /*break*/, 2];
                                    couchpayload = {};
                                    couchpayload['data'] = {};
                                    couchpayload['data'] = element['request'];
                                    couchpayload['id'] = element['response']['UserID'];
                                    couchpayload['data']['userType'] = 4;
                                    couchpayload['data']['publicKey'] = element['request']['publicKey'];
                                    couchpayload['data']['owner'] = element['request']['publicKey'];
                                    delete couchpayload['data']['employeeAddress'];
                                    console.log(couchpayload);
                                    allResponseData['COMMITTED'].push({
                                        data: element['request'],
                                        UserID: element['response']['UserID']
                                    });
                                    return [4 /*yield*/, that.blockchainService.registerEmployeeDB(couchpayload).subscribe(function (val) {
                                            if (val['ok']) {
                                                console.log(val);
                                                Registered['newEmployee'].push(val);
                                                // this.userid = val['userid']
                                                // this.Auth.setuserid(this.userid);
                                            }
                                        }, function (err) {
                                            // console.log(err)
                                            Registered['AlreadyOnNetwork'].push(couchpayload['id']);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    allResponseData['INVALID'].push({
                                        data: element['request'],
                                        UserID: element['response']['invalid_transactions']
                                    });
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log(allResponseData);
                    console.log(Registered);
                }
            }, function (err) {
                console.log(err.message);
            });
        }
    };
    VendorInfoComponent.prototype.addcustomer = function () {
        var _this = this;
        console.log(this.addCustomer.value);
        var that = this;
        var payload = this.addCustomer.value;
        payload.address = {};
        for (var i = 0; i < this.rgtagValue.length; i++) {
            payload.address['address' + i + 1] = this.rgtagValue[i];
        }
        payload.address['City'] = payload['city'];
        payload.address['State'] = payload['state'];
        payload.address['pincode'] = payload['pincode'];
        delete payload['city'];
        delete payload['state'];
        delete payload['pincode'];
        payload['vendor'] = {};
        payload['vendor']['name'] = this.name;
        payload.address = JSON.stringify(payload.address);
        console.log('second', payload);
        this.blockchainService.registerCustomerOrg(payload).subscribe(function (val) {
            if (val) {
                console.log(val);
                if (JSON.parse(val['response']['body']).data[0].status == 'COMMITTED') {
                    window.alert("User Register Successfull \n UserID:" + val['userid']);
                    var couchpayload = {};
                    couchpayload['data'] = {};
                    couchpayload['data'] = payload;
                    couchpayload['id'] = val['userid'];
                    couchpayload['data']['userType'] = 3;
                    couchpayload['data']['vendorName'] = payload['vendor']['name'];
                    couchpayload['data']['publicKey'] = payload['publicKey'];
                    couchpayload['data']['owner'] = payload['publicKey'];
                    couchpayload['data'].address = JSON.parse(payload.address);
                    delete couchpayload['data']['vendor'];
                    that.blockchainService.registerCustomerDB(couchpayload).subscribe(function (val) {
                        if (val) {
                            console.log(val);
                            _this.userid = val['userid'];
                            _this.Auth.setuserid(_this.userid);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                else {
                    window.alert("User Register Successfull \n UserID:" + JSON.parse(val['response']['body']).data[0].status);
                    _this.addCustomer.reset();
                }
                window['val'] = val;
            }
        });
    };
    VendorInfoComponent.prototype.clearModel = function (event) {
        this.addCustomer.reset();
        this.registerUser.reset();
        for (var i = 0; i < this.rgtagValue.length; i++) {
            this.dltTags(i);
        }
        document.getElementById("firstAddressLine").value = "";
    };
    VendorInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-info',
            template: __webpack_require__(/*! ./vendor-info.component.html */ "./src/app/vendor-info/vendor-info.component.html"),
            styles: [__webpack_require__(/*! ./vendor-info.component.css */ "./src/app/vendor-info/vendor-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], VendorInfoComponent);
    return VendorInfoComponent;
}());



/***/ }),

/***/ "./src/app/vendor-organization/vendor-organization.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/vendor-organization/vendor-organization.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci1vcmdhbml6YXRpb24vdmVuZG9yLW9yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor-organization/vendor-organization.component.html":
/*!************************************************************************!*\
  !*** ./src/app/vendor-organization/vendor-organization.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <!-- <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title \">Customer</h4>\n            <p class=\"card-category\"> Customer Details</p>\n        </div> -->\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"table-responsive\">\n                            <ng-container matColumnDef=\"id\">\n                                <th mat-header-cell *matHeaderCellDef> ID&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.ID}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"email\">\n                                <th mat-header-cell *matHeaderCellDef> Email&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.email}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"address\">\n                                <th mat-header-cell *matHeaderCellDef> Address&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\" id=\"{{element.name}}\" matTooltip=\"{{element.address?.address}}\" matTooltipPosition='after'>\n                                    <!-- <a title=\"ADDRESS\" data-toggle=\"popover\" data-content=\"Happy Hours\" data-trigger=\"hover\">{{element.address?.city}} </a> -->\n                                    {{element.address?.city}} &nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"contact\">\n                                <th mat-header-cell *matHeaderCellDef>Contact&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    {{element.contactNumber}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"gstNo\">\n                                <th mat-header-cell *matHeaderCellDef>GST No.&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.GSTNumber}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <!-- <ng-container matColumnDef=\"publicKey\">\n                                <th mat-header-cell *matHeaderCellDef>Public Key&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.publicKey}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container> -->\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor-organization/vendor-organization.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/vendor-organization/vendor-organization.component.ts ***!
  \**********************************************************************/
/*! exports provided: VendorOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorOrganizationComponent", function() { return VendorOrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var VendorOrganizationComponent = /** @class */ (function () {
    function VendorOrganizationComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.displayedColumns = [
            'name',
            'email',
            'address',
            'contact',
            'gstNo',
        ];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    VendorOrganizationComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('customerOrg').subscribe(function (val) {
            if (val) {
                console.log(val);
                for (var i = 0; i < val['entity'].length; i++) {
                    console.log(val['entity'][i]);
                    if (val['entity'][i].hasOwnProperty('customer')) {
                        try {
                            val['entity'][i]['customer'].address = _this.createPopOver(JSON.parse((val['entity'][i]['customer'].address).replace(/'/g, "\"")));
                            console.log(val['entity'][i]);
                            that.package_list.push(val['entity'][i]['customer']);
                        }
                        catch (err) {
                            console.log(err);
                        }
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    VendorOrganizationComponent.prototype.createPopOver = function (data) {
        try {
            // let jsonData = JSON.parse(data.replace(/'/g, "\""))
            var jsonData = data;
            var col = [];
            var fullAddress = "";
            for (var key in jsonData) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                    fullAddress += jsonData[key] + ", ";
                }
            }
            fullAddress = fullAddress.substr(0, fullAddress.length - 2);
            var newData = {
                city: data['City'],
                address: fullAddress
            };
            return newData;
        }
        catch (err) {
            console.log(err);
            newData = {
                city: 'city',
                address: JSON.stringify(data)
            };
            return newData;
        }
    };
    VendorOrganizationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], VendorOrganizationComponent.prototype, "paginator", void 0);
    VendorOrganizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-organization',
            template: __webpack_require__(/*! ./vendor-organization.component.html */ "./src/app/vendor-organization/vendor-organization.component.html"),
            styles: [__webpack_require__(/*! ./vendor-organization.component.css */ "./src/app/vendor-organization/vendor-organization.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], VendorOrganizationComponent);
    return VendorOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/vendor-table-employee/vendor-table-employee.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/vendor-table-employee/vendor-table-employee.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell{\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLXRhYmxlLWVtcGxveWVlL3ZlbmRvci10YWJsZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLXRhYmxlLWVtcGxveWVlL3ZlbmRvci10YWJsZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGx7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-table-employee/vendor-table-employee.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/vendor-table-employee/vendor-table-employee.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"col-md-12\">\n    <div class=\"card\" style=\"  overflow: auto;\">\n        <!-- <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title \">Employee</h4>\n            <p class=\"card-category\"> Employee Details</p>\n        </div> -->\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-responsive\">\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"email\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.email}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"contact\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.contactNumber}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"role\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> Role </th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <p *ngIf=\"element.role=='1';\" style=\"margin-bottom:0px; position: relative\">Employee</p>\n                                    <p *ngIf=\"element.role=='2';\" style=\"margin-bottom:0px;position: relative;\">Admin</p>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/vendor-table-employee/vendor-table-employee.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/vendor-table-employee/vendor-table-employee.component.ts ***!
  \**************************************************************************/
/*! exports provided: VendorTableEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTableEmployeeComponent", function() { return VendorTableEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var VendorTableEmployeeComponent = /** @class */ (function () {
    function VendorTableEmployeeComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.displayedColumns = [
            //  'id',
            'name',
            'email',
            'contact',
            // 'publicKey',
            'role'
        ];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    VendorTableEmployeeComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('employee').subscribe(function (val) {
            if (val) {
                console.log(val);
                for (var i = 0; i < val['entity'].length; i++) {
                    console.log(val['entity'][i]);
                    if (val['entity'][i].hasOwnProperty('vendor') && val['entity'][i].hasOwnProperty('employee')) {
                        console.log(val['entity'][i]);
                        that.package_list.push(val['entity'][i]['employee']);
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    VendorTableEmployeeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], VendorTableEmployeeComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], VendorTableEmployeeComponent.prototype, "sort", void 0);
    VendorTableEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-table-employee',
            template: __webpack_require__(/*! ./vendor-table-employee.component.html */ "./src/app/vendor-table-employee/vendor-table-employee.component.html"),
            styles: [__webpack_require__(/*! ./vendor-table-employee.component.css */ "./src/app/vendor-table-employee/vendor-table-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], VendorTableEmployeeComponent);
    return VendorTableEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/vendor-table-goods/vendor-table-goods.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/vendor-table-goods/vendor-table-goods.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 20px 26px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLXRhYmxlLWdvb2RzL3ZlbmRvci10YWJsZS1nb29kcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci10YWJsZS1nb29kcy92ZW5kb3ItdGFibGUtZ29vZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDI2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/vendor-table-goods/vendor-table-goods.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/vendor-table-goods/vendor-table-goods.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <!-- <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title \">Goods/Services</h4>\n            <p class=\"card-category\"> Goods/Service Details</p>\n        </div> -->\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"table-responsive\">\n\n                            <ng-container matColumnDef=\"name\">\n                                <th mat-header-cell *matHeaderCellDef> Name&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"creator\">\n                                <th mat-header-cell *matHeaderCellDef> Creator&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.creator}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor-table-goods/vendor-table-goods.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/vendor-table-goods/vendor-table-goods.component.ts ***!
  \********************************************************************/
/*! exports provided: VendorTableGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTableGoodsComponent", function() { return VendorTableGoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var VendorTableGoodsComponent = /** @class */ (function () {
    //
    // registerUser = this.fb.group({
    //   vname: ['', [Validators.required, Validators.maxLength(16)]],
    //   ename: ['', [Validators.required, Validators.maxLength(16)]],
    //   ship: ['', Validators.required],
    //   billaddr: ['', Validators.required],
    //   gstno: ['', Validators.required],
    //   pono: ['', Validators.required],
    //   ordramt: ['', Validators.required],
    // });
    function VendorTableGoodsComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.package_list = [];
        this.displayedColumns = [
            // 'id',
            'name',
            // 'unit',
            'creator',
        ];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    VendorTableGoodsComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('goods').subscribe(function (val) {
            if (val) {
                console.log(val['entity'][0]);
                for (var i = 0; i < val['entity'].length; i++) {
                    // console.log(val['entity'][i]);
                    {
                        console.log(val['entity'][i]);
                        if (val['entity'][i]['vendor']['name'] == localStorage.getItem('name')) {
                            var payload = {
                                'id': val['entity'][i]['goods']['ID'],
                                'name': val['entity'][i]['goods']['name'],
                                'unit': val['entity'][i]['goods']['unit'],
                                'creator': val['entity'][i]['vendor']['creator'],
                                'vname': val['entity'][i]['vendor']['name'],
                            };
                            that.package_list.push(payload);
                            //that.package_list.push(val['entity'][i]['vendor'].creator)
                            //creator to be added
                        }
                    }
                }
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    VendorTableGoodsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], VendorTableGoodsComponent.prototype, "paginator", void 0);
    VendorTableGoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-table-goods',
            template: __webpack_require__(/*! ./vendor-table-goods.component.html */ "./src/app/vendor-table-goods/vendor-table-goods.component.html"),
            styles: [__webpack_require__(/*! ./vendor-table-goods.component.css */ "./src/app/vendor-table-goods/vendor-table-goods.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], VendorTableGoodsComponent);
    return VendorTableGoodsComponent;
}());



/***/ }),

/***/ "./src/app/vendor-table-orders/vendor-table-orders.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/vendor-table-orders/vendor-table-orders.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color: #007bff;\n    border: none;\n    color: white;\n    padding: 6px 7px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n}\n\nmat-cell {\n    position: relative;\n}\n\n.tab_model {\n    /* padding:5px; */\n    word-break: break-word;\n    border-radius: 7px;\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: left;\n    margin-top: 15px;\n}\n\n.tab_body {\n    padding: 5px;\n    border-radius: 7px;\n    width: 97%;\n    margin-left: auto;\n    margin-right: auto;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: left;\n}\n\n.info {\n    text-align: left;\n    margin-left: 5%;\n    word-break: break-word;\n    font-weight: 350;\n}\n\n.cont {\n    margin: 5px 1.5% 5px 1.5%;\n}\n\n/*the container must be positioned relative:*/\n\n.autocomplete {\n    position: relative;\n    display: inline-block;\n}\n\ninput {\n    border: 1px solid transparent;\n    background-color: #f1f1f1;\n    padding: 10px;\n    font-size: 16px;\n}\n\ninput[type=text] {\n    background-color: #f1f1f1;\n    width: 100%;\n}\n\ninput[type=submit] {\n    background-color: DodgerBlue;\n    color: #fff;\n    cursor: pointer;\n}\n\n.autocomplete-items {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 99;\n    /*position the autocomplete items to be the same width as the container:*/\n    top: 100%;\n    left: 0;\n    right: 0;\n}\n\n.autocomplete-items div {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4;\n}\n\n/*when hovering an item:*/\n\n.autocomplete-items div:hover {\n    background-color: #e9e9e9;\n}\n\n/*when navigating through the items using the arrow keys:*/\n\n.autocomplete-active {\n    background-color: DodgerBlue !important;\n    color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLXRhYmxlLW9yZGVycy92ZW5kb3ItdGFibGUtb3JkZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDRFQUE0RTtJQUM1RSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0RUFBNEU7SUFDNUUsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLDZDQUE2Qzs7QUFFN0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlFQUF5RTtJQUN6RSxTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdDQUFnQztBQUNwQzs7QUFHQSx5QkFBeUI7O0FBRXpCO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLDBEQUEwRDs7QUFFMUQ7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci10YWJsZS1vcmRlcnMvdmVuZG9yLXRhYmxlLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDZweCA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1hdC1jZWxsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWJfbW9kZWwge1xuICAgIC8qIHBhZGRpbmc6NXB4OyAqL1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGFiX2JvZHkge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBmb250LXdlaWdodDogMzUwO1xufVxuXG4uY29udCB7XG4gICAgbWFyZ2luOiA1cHggMS41JSA1cHggMS41JTtcbn1cblxuXG4vKnRoZSBjb250YWluZXIgbXVzdCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlOiovXG5cbi5hdXRvY29tcGxldGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgei1pbmRleDogOTk7XG4gICAgLypwb3NpdGlvbiB0aGUgYXV0b2NvbXBsZXRlIGl0ZW1zIHRvIGJlIHRoZSBzYW1lIHdpZHRoIGFzIHRoZSBjb250YWluZXI6Ki9cbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXYge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG59XG5cblxuLyp3aGVuIGhvdmVyaW5nIGFuIGl0ZW06Ki9cblxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG59XG5cblxuLyp3aGVuIG5hdmlnYXRpbmcgdGhyb3VnaCB0aGUgaXRlbXMgdXNpbmcgdGhlIGFycm93IGtleXM6Ki9cblxuLmF1dG9jb21wbGV0ZS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor-table-orders/vendor-table-orders.component.html":
/*!************************************************************************!*\
  !*** ./src/app/vendor-table-orders/vendor-table-orders.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card\">\n        <!-- <div class=\"card-header card-header-danger\">\n            <div class=\"card-title \">\n                <h4>Orders</h4>\n            </div>\n            <p class=\"card-category\"> Order Details</p>\n            <div class=\"card-category\">\n    </div>\n</div> -->\n        <div class=\"card-body\">\n            <ng-container>\n                <div class=\"mat-elevation-z8 \">\n                    <div class=\"table-specification\">\n                        <table mat-table [dataSource]=\"dataSource\" matSort class=\"table-responsive\">\n                            <!-- <ng-container matColumnDef=\"id\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.ID}}</a>&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container> -->\n                            <ng-container matColumnDef=\"orderNumber\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                    Order Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <!-- <td mat-cell *matCellDef=\"let element\"> {{element.orderNumber}}&nbsp;&nbsp;&nbsp;&nbsp;</td> -->\n                                <td mat-cell *matCellDef=\"let element;let i=index\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#register\" (click)=\"getdata(element)\">{{element.orderNumber}}</a>&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"PO_Date\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.PO_Date}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"PO_Number\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header> PO Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.PO_Number}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"orderAmount\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                    Order Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderAmount}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"orderDate\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderDate}} &nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"orderHandler\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                    Order Handler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.orderHandler}}&nbsp;&nbsp;&nbsp;&nbsp;\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"owner\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                    Owner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.owner}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"globalStatus\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                                    Order Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    {{element.globalStatus}}&nbsp;&nbsp;&nbsp;&nbsp;</td>\n                            </ng-container>\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                        </table>\n                    </div>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- Modal: modalCart -->\n\n<div class=\"modal fade\" id=\"register\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xl\">\n        <div class=\"modal-content\">\n\n            <!--Header-->\n\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Order Details</h4>\n\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n\n            </div>\n\n            <!-- <div class=\"row\">\n                &nbsp;&nbsp;&nbsp;&nbsp;\n                <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"orderStatus=='2' \"><a data-toggle=\"modal\"\n            data-target=\"#customer\">accept</a> </button>&nbsp;\n                <button type=\"button\" class=\"btn btn-outline-primary\" *ngIf=\"orderStatus=='2' \" (click)=\"updateOrderStatus(orderNumber,'return')\">Return </button>\n            </div> -->\n            <!--Body-->\n\n            <div class=\"modal-body\">\n                <!-- <div class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\" *ngIf=\"orderStatusPayment!='2'\">\n                    <div class=\"col-sm-8\">\n                        <label>Update Delegator's Public Key</label>\n                        <input type=\"text\" name=\"Enter Comment\" (keyup)=\"search()\" id=\"userNameSearch\" style=\"margin-bottom:5px;width:100%\" placeholder=\"Enter Delegator's Name\">\n                        <input type=\"text\" *ngIf=\"isDelegatorSelected\" [(ngModel)]=\"newOwnerPublicKey\">\n                    </div>\n                    <div class=\"col-sm-4\" style=\"padding-top:20px;\">\n                        <button class=\"button\" (click)=\"transferOwnerShip()\">Update\n                            Handler</button>\n                    </div>\n                </div> -->\n                <hr> \n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-xl-6\">\n\n\n                        <table class=\"table table-hover tab_model\" style=\"width:100%;word-break: break-word;\">\n\n                            <tbody>\n                                <tr *ngIf=\"pp?.orderNumber\">\n                                    <td>Order Number</td>\n                                    <td>\n                                        <p>{{pp?.orderNumber}}</p>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"pp?.PO_Number\">\n\n                                    <td>PO Number</td>\n                                    <td>{{pp?.PO_Number}}</td>\n                                </tr>\n                                <tr *ngIf=\"pp?.PO_Date\">\n                                    <td>PO Date</td>\n                                    <td>{{pp?.PO_Date}}</td>\n                                </tr>\n                                <tr *ngIf=\"pp?.orderAmount\">\n                                    <td>Order Amount</td>\n                                    <td>{{pp?.orderAmount}}</td>\n                                </tr>\n                                <tr *ngIf=\"pp?.orderDate\">\n                                    <td>Order Date</td>\n                                    <td>\n                                        <p>{{pp?.orderDate}}</p>\n                                    </td>\n                                </tr>\n\n                                <tr *ngIf=\"pp?.orderHandler\">\n                                    <td>Order Handler</td>\n                                    <td>\n                                        <p>{{pp?.orderHandler}}</p>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"pp?.salesServiceTaxAmount\">\n                                    <td>Sales Service TaxAmount</td>\n                                    <td>\n                                        <p>{{pp?.salesServiceTaxAmount}}</p>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"pp?.owner\">\n                                    <td>Owner</td>\n                                    <td>\n                                        <p>{{pp?.owner}}</p>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"pp?.vendor?.name\">\n                                    <td>Vendor Name</td>\n                                    <td>\n                                        <p>{{pp?.vendor?.name}}</p>\n                                    </td>\n                                </tr>\n\n                            </tbody>\n                        </table>\n                        <table class=\"table table-hover tab_model\" *ngIf=\"pp?.goodsService.length\" style=\"width:100%;word-break: break-word;\">\n                            <tr>\n                                <td>Goods</td>\n                                <td>\n                                    <table>\n                                        <tr style=\"font-weight: 300;\">\n                                            <td>Name</td>\n                                            <td>Quantity</td>\n                                            <td>Rate</td>\n                                            <td>Discount</td>\n                                        </tr>\n                                        <tr *ngFor=\"let g of pp?.goodsService\">\n                                            <td>{{g.name}}</td>\n                                            <td>{{g.quantity}}</td>\n                                            <td>{{g.rate}}</td>\n                                            <td>{{g.discount}}</td>\n                                        </tr>\n                                    </table>\n                                </td>\n                            </tr>\n                        </table>\n\n                    </div>\n                    <div class=\"col-sm-6 col-xl-6\">\n\n                        <div *ngIf=\"pp?.orderStatus?.comment || pp?.orderStatus?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\n                            <div class=\"col-lg-3\">\n                                <p>Order Status</p>\n                            </div>\n                            <div class=\"col-lg-9\">\n                                <div *ngIf=\"pp?.orderStatus?.comment\" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Comment:</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderStatus?.comment}}</p>\n                                    </div>\n                                    <hr>\n\n                                </div>\n                                <div *ngIf=\"pp?.orderStatus?.employeeID\" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Employee Id :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderStatus?.employeeID}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div *ngIf=\"pp?.customer?.ID || pp?.customer?.addressBilling || pp?.customer?.addressShipping || pp?.customer?.employeeID\" class=\"row tab_model\" style=\"margin-left:auto;margin-right: auto;\">\n                            <div class=\"col-lg-3\">\n                                <p>Customer</p>\n                            </div>\n                            <div class=\"col-lg-9\">\n                                <div class=\"row\" *ngIf=\"pp?.customer?.ID\">\n                                    <div class=\"col-lg-4\">\n                                        <p>ID :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.customer?.ID}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div class=\"row\" *ngIf=\"pp?.customer?.addressBilling\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Address Billing :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.customer?.addressBilling}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div class=\"row\" *ngIf=\"pp?.customer?.addressShipping\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Address Shipping :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.customer?.addressShipping}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div class=\"row\" *ngIf=\"pp?.customer?.employeeID\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Employee ID :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.customer?.employeeID}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row tab_model\" *ngIf=\"pp?.orderPayment?.invoiceAmount || pp?.orderPayment?.invoiceDate ||pp?.orderPayment?.invoiceNumber|| pp?.orderPayment?.status?.comment||pp?.orderPayment?.status?.updater\" sstyle=\"margin-left:auto;margin-right: auto;\">\n                            <div class=\"col-lg-3\">\n                                <p>Order Payment</p>\n                            </div>\n                            <div class=\"col-lg-9\">\n                                <div *ngIf=\"pp?.orderPayment?.invoiceAmount\" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Invoice Amount :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderPayment?.invoiceAmount}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div *ngIf=\" pp?.orderPayment?.invoiceDate \" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Invoice Date :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderPayment?.invoiceDate}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div *ngIf=\"pp?.orderPayment?.invoiceNumber\" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Invoice Number :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderPayment?.invoiceNumber}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div *ngIf=\"pp?.orderPayment?.status?.comment\" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Status Comment :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderPayment?.status?.comment}}</p>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div *ngIf=\"pp?.orderPayment?.status?.updater\" class=\"row\">\n                                    <div class=\"col-lg-4\">\n                                        <p>Status updater :</p>\n                                    </div>\n                                    <div class=\"col-lg-8\">\n                                        <p>{{pp?.orderPayment?.status?.updater}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"customer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <!--Header-->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"myModalLabel\">Accept Order</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">×</span>\n                </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body\">\n                <table class=\"table table-hover\">\n                    <tbody>\n                        <tr>\n                            <td>Comment</td>\n                            <td><input type=\"text\" name=\"Enter Comment\" [(ngModel)]=\"statusComment\"></td>\n                            <td><a><i class=\"fas fa-times\"></i></a></td>\n                        </tr>\n                        <tr>\n                            <td>Sales Service TaxAmount</td>\n                            <td><input type=\"text\" name=\"Enter Employee Name\" [(ngModel)]=\"salesServiceTaxAmountUpdate\">\n                            </td>\n                            <td><a><i class=\"fas fa-times\"></i></a></td>\n                        </tr>\n                        <tr>\n                            <td>Discount</td>\n                            <td><input type=\"text\" name=\"\" [(ngModel)]=\"goodsServicesDiscount\"></td>\n                            <td><a><i class=\"fas fa-times\"></i></a></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <!--Footer-->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\">Close</button>\n                <button class=\"btn btn-primary\" (click)=\"updateOrderStatus($event,orderNumber,'accept') \"> Place\n                    Order</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor-table-orders/vendor-table-orders.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/vendor-table-orders/vendor-table-orders.component.ts ***!
  \**********************************************************************/
/*! exports provided: VendorTableOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTableOrdersComponent", function() { return VendorTableOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var VendorTableOrdersComponent = /** @class */ (function () {
    function VendorTableOrdersComponent(data, httpClient, blockchainService) {
        this.data = data;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.demo = [];
        this.package_list = [];
        this.orderId = "";
        this.vendorName = "";
        this.employeeName = "";
        this.shippingAddress = "";
        this.billingAddress = "";
        this.gstNo = "";
        this.poNumber = "";
        this.poDate = "";
        this.orderDate = "";
        this.statusComment = "";
        this.orderStatus = "";
        this.orderAmount = "";
        this.orderNumber = "";
        this.salesServiceTaxAmountUpdate = "";
        this.goodsServiceDiscount = "";
        this.goodsServicesDiscount = "";
        this.newOwnerPublicKey = "";
        this.orderStatusPayment = "";
        // isDelegatorSelected: boolean = false;
        this.displayedColumns = [
            // 'id',
            'orderNumber',
            'PO_Date',
            'PO_Number',
            'orderAmount',
            'orderDate',
            'orderHandler',
            'owner',
            'globalStatus',
        ];
        this.OrderStatus = ["", "Created", "Awarded", "Discarted", "Returned", "Accepted", "Delivered", "Invoice Genrated", "Invoice Paid"];
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getOrderDetails();
    }
    VendorTableOrdersComponent.prototype.ngOnInit = function () {
    };
    VendorTableOrdersComponent.prototype.getOrderDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getEntity('order').subscribe(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var from, to, dataAtATime, ownerIDName, i, waitResponseOH, waitResponseOw, waitResponseCI, waitResponseCE, orderData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!val) return [3 /*break*/, 18];
                        from = 0;
                        to = val['entity'].length;
                        dataAtATime = 2;
                        ownerIDName = {};
                        i = from;
                        _a.label = 1;
                    case 1:
                        if (!(i < to)) return [3 /*break*/, 18];
                        if (!(val['entity'][i].hasOwnProperty('vendor') && val['entity'][i]['vendor']['name'] == localStorage.getItem('name'))) return [3 /*break*/, 17];
                        console.log(val['entity'][i]);
                        orderData = val['entity'][i];
                        if (parseInt(orderData['orderStatus'].status) < 4) {
                            return [3 /*break*/, 17];
                        }
                        if (!ownerIDName.hasOwnProperty(orderData['orderHandler'])) return [3 /*break*/, 2];
                        orderData['orderHandler'] = ownerIDName[orderData['orderHandler']];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderHandler'] })];
                    case 3:
                        waitResponseOH = _a.sent();
                        orderData['orderHandler'] = waitResponseOH['docs'][0].name;
                        ownerIDName[orderData['orderHandler']] = waitResponseOH['docs'][0].name;
                        _a.label = 4;
                    case 4:
                        if (!ownerIDName.hasOwnProperty(orderData['owner'])) return [3 /*break*/, 5];
                        orderData['owner'] = ownerIDName[orderData['owner']];
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['owner'] })];
                    case 6:
                        waitResponseOw = _a.sent();
                        orderData['owner'] = waitResponseOw['docs'][0].name;
                        ownerIDName[orderData['owner']] = waitResponseOw['docs'][0].name;
                        _a.label = 7;
                    case 7:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['ID'])) return [3 /*break*/, 8];
                        orderData['customer']['ID'] = ownerIDName[orderData['customer']['ID']];
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['ID'] })];
                    case 9:
                        waitResponseCI = _a.sent();
                        orderData['customer']['ID'] = waitResponseCI['docs'][0].name;
                        ownerIDName[orderData['customer']['ID']] = waitResponseCI['docs'][0].name;
                        _a.label = 10;
                    case 10:
                        if (!ownerIDName.hasOwnProperty(orderData['customer']['employeeID'])) return [3 /*break*/, 11];
                        orderData['customer']['employeeID'] = ownerIDName[orderData['customer']['employeeID']];
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, that.blockchainService.getUserNameByID({ ID: orderData['customer']['employeeID'] })];
                    case 12:
                        waitResponseCE = _a.sent();
                        orderData['customer']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['customer']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 13;
                    case 13:
                        if (!(orderData['orderStatus']['employeeID'] !== "")) return [3 /*break*/, 16];
                        if (!ownerIDName.hasOwnProperty(orderData['orderStatus']['employeeID'])) return [3 /*break*/, 14];
                        orderData['orderStatus']['employeeID'] = ownerIDName[orderData['orderStatus']['employeeID']];
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, that.blockchainService.getUserName({ pubKey: orderData['orderStatus']['employeeID'] })];
                    case 15:
                        waitResponseCE = _a.sent();
                        console.log(orderData['orderStatus']['employeeID']);
                        orderData['orderStatus']['employeeID'] = waitResponseCE['docs'][0].name;
                        ownerIDName[orderData['orderStatus']['employeeID']] = waitResponseCE['docs'][0].name;
                        _a.label = 16;
                    case 16:
                        if (orderData.hasOwnProperty('orderPayment')) {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderPayment'].status.paymentStatus) + 6];
                        }
                        else {
                            orderData['globalStatus'] = this.OrderStatus[parseInt(orderData['orderStatus'].status)];
                        }
                        that.package_list.push(orderData);
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](that.package_list);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        _a.label = 17;
                    case 17:
                        i++;
                        return [3 /*break*/, 1];
                    case 18: return [2 /*return*/];
                }
            });
        }); });
    };
    VendorTableOrdersComponent.prototype.getdata = function (event) {
        this.pp = event;
        this.orderStatus = event.orderStatus.status;
        this.orderNumber = event['orderNumber'];
        if (this.orderStatus == '6') {
            this.orderStatusPayment = event.orderPayment.status.paymentStatus;
        }
        else {
            this.orderStatusPayment = "0";
        }
        console.log(this.pp['ID']);
    };
    VendorTableOrdersComponent.prototype.updateOrderStatus = function (event, orderNumber, action) {
        var that = this;
        console.log("updateOrderStatus", event, orderNumber, action);
        var status = 4;
        if (action == 'accept') {
            status = 5;
        }
        var payload = {
            "orderNumber": orderNumber,
            "vendor": {
                "employeeName": this.employeeName
            },
            "orderStatus": status,
            "comment": this.statusComment,
            "salesServiceTaxAmount": this.salesServiceTaxAmountUpdate,
            "discount": this.goodsServicesDiscount
        };
        this.blockchainService.acceptOrder(payload).subscribe(function (val) {
            if (val) {
                console.log("acceptOrder", val);
                that.goodsServicesDiscount = "";
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], VendorTableOrdersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], VendorTableOrdersComponent.prototype, "sort", void 0);
    VendorTableOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-table-orders',
            template: __webpack_require__(/*! ./vendor-table-orders.component.html */ "./src/app/vendor-table-orders/vendor-table-orders.component.html"),
            styles: [__webpack_require__(/*! ./vendor-table-orders.component.css */ "./src/app/vendor-table-orders/vendor-table-orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _blockchain_service__WEBPACK_IMPORTED_MODULE_4__["BlockchainService"]])
    ], VendorTableOrdersComponent);
    return VendorTableOrdersComponent;
}());



/***/ }),

/***/ "./src/app/vendor-table/vendor-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vendor-table/vendor-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\ncolor: #007bff;\ncursor: pointer;\n  }\n  #nav:hover{\n    color:black;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLXRhYmxlL3ZlbmRvci10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsY0FBYztBQUNkLGVBQWU7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLXRhYmxlL3ZlbmRvci10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcbmNvbG9yOiAjMDA3YmZmO1xuY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNuYXY6aG92ZXJ7XG4gICAgY29sb3I6YmxhY2s7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-table/vendor-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vendor-table/vendor-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" data-toggle=\"pill\" (click)=\"goods()\">\n            <h5>Goods/Service Master</h5>\n        </a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"customer()\">\n            <h5>Customer Master</h5>\n        </a>\n    </li>\n</ul>\n<br>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vendor-table/vendor-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vendor-table/vendor-table.component.ts ***!
  \********************************************************/
/*! exports provided: VendorTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTableComponent", function() { return VendorTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var VendorTableComponent = /** @class */ (function () {
    function VendorTableComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    VendorTableComponent.prototype.ngOnInit = function () {
        this.goods();
    };
    // employee(){
    //   this.router.navigate(['employee'], {relativeTo: this.route});
    // }
    VendorTableComponent.prototype.goods = function () {
        this.router.navigate(['goods'], { relativeTo: this.route });
    };
    VendorTableComponent.prototype.customer = function () {
        this.router.navigate(['customer'], { relativeTo: this.route });
    };
    VendorTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-table',
            template: __webpack_require__(/*! ./vendor-table.component.html */ "./src/app/vendor-table/vendor-table.component.html"),
            styles: [__webpack_require__(/*! ./vendor-table.component.css */ "./src/app/vendor-table/vendor-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VendorTableComponent);
    return VendorTableComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendor/vendor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav{\n  color: #007bff;\n  cursor: pointer;\n    }\n    #nav:hover{\n      color:black;\n    }\n    .tab_header{\n     padding:5px;\n     border-radius: 7px;\n     width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n   }\n    .tab_body{\n    padding:5px;\n    border-radius: 7px;  \n    width:97%;\n    margin-left: auto;\n    margin-right: auto;\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n   text-align: left;\n  }\n    .info{\n    text-align: left;\n    margin-left: 5%;\n    word-break: break-word;\n    font-weight: 350;\n  }\n    .cont{\n    margin: 5px 1.5% 5px 1.5%;\n  }\n    .nav-link {\n    display: block;\n    padding: .5rem .5rem;\n}\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7SUFDYjtJQUNBO01BQ0UsV0FBVztJQUNiO0lBQ0Q7S0FDRSxXQUFXO0tBQ1gsa0JBQWtCO0tBQ2xCLFdBQVc7SUFDWiw0RUFBNEU7SUFDNUUsa0JBQWtCO0dBQ25CO0lBRUE7SUFDQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CLDRFQUE0RTtHQUM1RSxnQkFBZ0I7RUFDakI7SUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjtJQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0lBQ0E7SUFDRSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgI25hdjpob3ZlcntcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cbiAgIC50YWJfaGVhZGVye1xuICAgICBwYWRkaW5nOjVweDtcbiAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbiBcbiAgIC50YWJfYm9keXtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7ICBcbiAgICB3aWR0aDo5NyU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmluZm97XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICBmb250LXdlaWdodDogMzUwO1xuICB9XG4gIC5jb250e1xuICAgIG1hcmdpbjogNXB4IDEuNSUgNXB4IDEuNSU7XG4gIH1cbiAgLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAuNXJlbSAuNXJlbTtcbn1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/vendor/vendor.component.html":
/*!**********************************************!*\
  !*** ./src/app/vendor/vendor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"assets/img/logo.png\" width=\"44\" height=\"44\" alt=\"\">\r\n\r\n    </a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right\" style=\"display:inline;\">\r\n        <div style=\"display: inline-block\">\r\n            <div style=\"display: inline-block\">\r\n                {{name}}\r\n            </div>\r\n            &nbsp;\r\n            <div style=\"display: inline-block\">\r\n                <a class=\"nav-link\" (click)=\"setlogout()\">\r\n                    <i class=\"fa fa-sign-out fa-lg\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n</nav>\r\n\r\n\r\n<br>\r\n<div class=\"cont\">\r\n    <div class=\"tab_header \">\r\n        <ul class=\"nav nav-pills\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" data-toggle=\"pill\" (click)=\"vendorinfo()\" style=\"cursor: pointer;\">\r\n                    <h6>About</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"employee()\">\r\n                    <h6>Employee</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendortable()\">\r\n                    <h6>Asset Master</h6>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" data-toggle=\"pill\" (click)=\"vendororder()\">\r\n                    <h6>Order</h6>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"tab_body\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/vendor/vendor.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendor/vendor.component.ts ***!
  \********************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blockchain_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blockchain.service */ "./src/app/blockchain.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







// import {
//     makeKeyPair,
//     getState,
//     submitUpdate,
//     getStateByEntityName,
//     getIDDetails} from '../shared/state.js';
var VendorComponent = /** @class */ (function () {
    function VendorComponent(data, http, route, router, httpClient, blockchainService, Auth) {
        this.data = data;
        this.http = http;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.blockchainService = blockchainService;
        this.Auth = Auth;
        this.message = "Loading...";
        this.name = "";
        this.username = "";
        this.username = localStorage.getItem('userID');
        this.getUserDetails();
    }
    VendorComponent.prototype.setlogout = function () {
        this.Auth.setLogout();
        this.router.navigate(['/home']);
    };
    VendorComponent.prototype.ngOnInit = function () {
        this.vendorinfo();
    };
    VendorComponent.prototype.vendortable = function () {
        this.router.navigate(['table'], { relativeTo: this.route });
    };
    VendorComponent.prototype.vendorinfo = function () {
        this.router.navigate(['info'], { relativeTo: this.route });
    };
    VendorComponent.prototype.vendororder = function () {
        this.router.navigate(['orders'], { relativeTo: this.route });
    };
    VendorComponent.prototype.employee = function () {
        this.router.navigate(['employee'], { relativeTo: this.route });
    };
    VendorComponent.prototype.getUserDetails = function () {
        var _this = this;
        var that = this;
        this.blockchainService.getIDDetails(localStorage.getItem('userID')).subscribe(function (val) {
            if (val) {
                console.log(val);
                that.name = (val[_this.username][0]['vendor'].name);
                console.log(that.name);
            }
        });
    };
    VendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! ./vendor.component.html */ "./src/app/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/vendor/vendor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _blockchain_service__WEBPACK_IMPORTED_MODULE_5__["BlockchainService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jatin\Documents\Amitabh EY\EY_Blockchain\EY_Blockchain\FrontEnd\vendorapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map