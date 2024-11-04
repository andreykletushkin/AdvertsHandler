(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _logon_logon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logon/logon.component */ "./src/app/logon/logon.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _quates_quates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quates/quates.component */ "./src/app/quates/quates.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile-details/profile-details.component */ "./src/app/profile-details/profile-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var fusioncharts_fusioncharts_timeseries__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! fusioncharts/fusioncharts.timeseries */ "./node_modules/fusioncharts/fusioncharts.timeseries.js");
/* harmony import */ var fusioncharts_fusioncharts_timeseries__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_timeseries__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _service_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/auth-http-interceptor.service */ "./src/app/service/auth-http-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// Load FusionCharts

// Load Charts module

// Load themes



// Add dependencies to FusionChartsModule
angular_fusioncharts__WEBPACK_IMPORTED_MODULE_18__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_19__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_20__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_21__, fusioncharts_fusioncharts_timeseries__WEBPACK_IMPORTED_MODULE_22__);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _logon_logon_component__WEBPACK_IMPORTED_MODULE_3__["LogonComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _quates_quates_component__WEBPACK_IMPORTED_MODULE_14__["QuatesComponent"],
                _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_16__["ProfileDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                angular_fusioncharts__WEBPACK_IMPORTED_MODULE_18__["FusionChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"], useClass: _service_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["AuthHttpInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/logon/logon.component.css":
/*!*******************************************!*\
  !*** ./src/app/logon/logon.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logon/logon.component.html":
/*!********************************************!*\
  !*** ./src/app/logon/logon.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"checkoutForm\" (ngSubmit)=\"testSubmit()\">\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>User name</mat-label>\n    <input matInput placeholder=\"User name\" formControlName=\"login\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Password</mat-label>\n    <input matInput placeholder=\"Password\" formControlName=\"password\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n  </mat-form-field>\n</p>\n  <button mat-button color=\"accent\" class=\"button\" type=\"submit\">Login</button>\n</form>\n"

/***/ }),

/***/ "./src/app/logon/logon.component.ts":
/*!******************************************!*\
  !*** ./src/app/logon/logon.component.ts ***!
  \******************************************/
/*! exports provided: LogonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonComponent", function() { return LogonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogonComponent = /** @class */ (function () {
    function LogonComponent(formBuilder, route, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.checkoutForm = this.formBuilder.group({
            login: '',
            password: ''
        });
    }
    LogonComponent.prototype.testSubmit = function () {
        var _this = this;
        var val = this.checkoutForm.value;
        this.authService.authenticate(val.login, val.password).subscribe(function () { return _this.route.navigate(['/profile/' + val.login]); });
    };
    LogonComponent.prototype.ngOnInit = function () {
    };
    LogonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logon',
            template: __webpack_require__(/*! ./logon.component.html */ "./src/app/logon/logon.component.html"),
            styles: [__webpack_require__(/*! ./logon.component.css */ "./src/app/logon/logon.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LogonComponent);
    return LogonComponent;
}());



/***/ }),

/***/ "./src/app/profile-details/profile-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile-details/profile-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-title>Hello, {{name}}</mat-card-title>\n  <mat-card-subtitle>Profile details</mat-card-subtitle>\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"save()\">\n    <mat-form-field appearance=\"standard\">\n      <mat-label>First Name</mat-label>\n      <input matInput placeholder=\"User name\" formControlName=\"firstName\">\n    </mat-form-field>\n    <p>\n      <mat-form-field appearance=\"standard\">\n        <mat-label>Second Name</mat-label>\n        <input matInput placeholder=\"Second Name\" formControlName=\"secondName\">\n      </mat-form-field>\n    <p>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Birthday\" formControlName=\"birthday\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    <p>\n      <mat-form-field appearance=\"standard\">\n        <mat-label>Country of origin</mat-label>\n        <mat-select matInput formControlName=\"country\">\n          <mat-option *ngFor=\"let option of countryOption\" [value]=\"option\">\n            {{ option }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    <p>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Short profile description\" formControlName=\"description\"></textarea>\n      </mat-form-field>\n    <p>\n      <button mat-button color=\"accent\" class=\"button\" type=\"submit\">Submit profile</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/profile-details/profile-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile-details/profile-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailsComponent", function() { return ProfileDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileDetailsComponent = /** @class */ (function () {
    function ProfileDetailsComponent(formBuilder, httpClient, router, route) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.router = router;
        this.route = route;
        this.name = 'Andrey';
        this.countryOption = ['USA', 'Ukraine', 'Russia'];
        this.profileForm = formBuilder.group({
            id: ' ',
            firstName: ' ',
            secondName: ' ',
            birthday: ' ',
            country: ' ',
            description: ' '
        });
    }
    ProfileDetailsComponent.prototype.save = function () {
        this.httpClient.put('http://localhost:8080/api/profile', this.profileForm.value).subscribe(function (response) {
            console.log('Profile sumbitted succesfuly');
        });
    };
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.httpClient.get('http://localhost:8080/api/' + params.id).subscribe(function (userDetails) {
                console.log(userDetails['id']);
                var t = new Date(userDetails['birthday']);
                var date = new Date(t.getFullYear(), t.getMonth(), t.getDate());
                _this.profileForm.patchValue({ id: userDetails['id'], firstName: userDetails['firstName'],
                    secondName: userDetails['secondName'],
                    birthday: date,
                    country: userDetails['country'],
                    description: userDetails['description']
                });
            });
        });
    };
    ProfileDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-details',
            template: __webpack_require__(/*! ./profile-details.component.html */ "./src/app/profile-details/profile-details.component.html"),
            styles: [__webpack_require__(/*! ./profile-details.component.css */ "./src/app/profile-details/profile-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  postextition: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: black;\n}\n\nmat-sidenav-container {\n  text-align:center;\n  height:100%\n}\n\n.mat-list-item {\n  border:5px;\n  font-size: 22px;\n}\n\nmat-grid-tile {\n  background-color: gray;\n}\n\n/*.example-card {*/\n\n/*  max-width: 30%;*/\n\n/*}*/\n\n/*mat-sidenav {*/\n\n/*  background-color: rgba(191, 179, 34, 0.6);*/\n\n/*}*/\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <button mat-icon-button>\n      <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n    </button>\n    <span>Simple Trader</span>\n    <button  mat-button color=\"accent\" class=\"button\"  (click)=\"logout()\">\n   <span>Logout</span>\n    </button>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span style=\"font-size:14px\">Simple Trading for everyone!</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav>\n    <mat-nav-list>\n      <a mat-list-item [routerLink]=\"['/profile/',username]\">\n        <mat-icon>account_box</mat-icon>\n        <span class=\"nav-caption\">Profile</span>\n      </a>\n      <mat-divider></mat-divider>\n      <a mat-list-item [routerLink]=\"['/quotes/',username]\">\n        <mat-icon>list_alt</mat-icon>\n        <span class=\"nav-caption\">WatchList</span>\n      </a>\n      <mat-divider></mat-divider>\n      <a mat-list-item routerLink=\"#\">\n        <mat-icon>account_balance</mat-icon>\n        <span class=\"nav-caption\">Positions</span>\n      </a>\n      <mat-divider></mat-divider>\n      <a mat-list-item routerLink=\"#\">\n        <mat-icon>today</mat-icon>\n        <span class=\"nav-caption\">News</span>\n      </a>\n      <mat-divider></mat-divider>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n<router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, formBuilder, route, httpClient) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.httpClient = httpClient;
        this.name = 'Andrey';
        this.countryOption = ['USA', 'Ukraine', 'Russia'];
    }
    ProfileComponent.prototype.onActivate = function (componentRefence) {
        var token = sessionStorage.getItem('token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': token });
    };
    ProfileComponent.prototype.logout = function () {
        sessionStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.username = this.route.snapshot.params['id'];
        console.log(this.username);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/quates/quates.component.css":
/*!*********************************************!*\
  !*** ./src/app/quates/quates.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n  display:flex;\n  flex-wrap:wrap;\n\n}\n.flex-container > fusioncharts {\n  margin:20px;\n  padding:10px;\n}\n"

/***/ }),

/***/ "./src/app/quates/quates.component.html":
/*!**********************************************!*\
  !*** ./src/app/quates/quates.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Choose a symbol to watch:</h3>\n  <mat-form-field>\n    <input type=\"text\" placeholder=\"Please choose symbol\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete   #auto=\"matAutocomplete\">\n    <mat-option  *ngFor=\"let symbol of filteredOption | async\" [value] = \"symbol\">\n      {{symbol}}\n    </mat-option>\n  </mat-autocomplete>\n  </mat-form-field>\n<button (click)=\"ok()\"  mat-button color=\"primary\" class=\"button\" type=\"submit\">Add chart</button>\n<div class=\"flex-container\">\n  <fusioncharts *ngFor=\"let dataSource of dataArray\"\n    [type]=\"type\"\n    [width]=\"width\"\n    [height]=\"height\"\n    [dataSource]=\"dataSource\"></fusioncharts>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/quates/quates.component.ts":
/*!********************************************!*\
  !*** ./src/app/quates/quates.component.ts ***!
  \********************************************/
/*! exports provided: QuatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuatesComponent", function() { return QuatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {RSocketClient, JsonSerializer, IdentitySerializer} from 'rsocket-core';
// import RSocketWebSocketClient from 'rsocket-websocket-client';
// tslint:disable-next-line:import-blacklist
var QuatesComponent = /** @class */ (function () {
    function QuatesComponent(httpClient, route) {
        var _this = this;
        this.httpClient = httpClient;
        this.route = route;
        this.restApi = 'http://localhost:8080/stock';
        this.symbols = [{ symbol: 'AAA' }, { symbol: 'BBB' }];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.dataArray = [];
        this.filteredOption = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
        this.type = 'column2d';
        this.width = '25%';
        this.height = '400';
    }
    QuatesComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.symbols.map(function (sym) { return sym.symbol; }).filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    QuatesComponent.prototype.updateChart = function (dataSource) {
        var source = new EventSource('http://localhost:8080/stocks');
        // @ts-ignore
        source.addEventListener('message', function (aString) { return console.log(aString.data); }, false);
        // dataSource.data.push({value: 300});
        return 'ok';
    };
    QuatesComponent.prototype.ok = function () {
        var dataSource = {
            data: null,
            caption: {
                text: this.myControl.value
            },
            yAxis: {
                plot: {
                    value: 'Open',
                    type: 'candlestick'
                },
                title: 'Value'
            }
        };
        this.dataArray.push(dataSource);
        this.fetchData(dataSource);
        this.updateChart(dataSource);
        // this.subscription = timer(0, 10000).pipe(
        //   switchMap(() => this.updateChart(dataSource))
        // ).subscribe(result => this.statusText = result);
        // console.log(this.myControl);
    };
    QuatesComponent.prototype.fetchData = function (dataSource) {
        var jsonify = function (res) { return res.json(); };
        var dataFetch = fetch('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/candlestick-chart-data.json').then(jsonify);
        var schemaFetch = fetch('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/candlestick-chart-schema.json').then(jsonify);
        dataSource.data = [
            { value: 500 },
            { value: 600 },
            { value: 700 }
        ];
        Promise.all([dataFetch, schemaFetch]).then(function (res) {
            var data = res[0];
            var schema = res[1];
            // First we are creating a DataStore
            var fusionDataStore = new fusioncharts__WEBPACK_IMPORTED_MODULE_4__["DataStore"]();
            // After that we are creating a DataTable by passing our data and schema as arguments
            var fusionTable = fusionDataStore.createDataTable(data, schema);
            // Afet that we simply mutated our timeseries datasource by attaching the above
            // DataTable into its data property.
            // dataSource.data = fusionTable;
        });
    };
    QuatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(this.restApi)
            .subscribe(function (data) {
            console.log(data);
            _this.symbols = data;
        });
    };
    QuatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quates',
            template: __webpack_require__(/*! ./quates.component.html */ "./src/app/quates/quates.component.html"),
            styles: [__webpack_require__(/*! ./quates.component.css */ "./src/app/quates/quates.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], QuatesComponent);
    return QuatesComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logon_logon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logon/logon.component */ "./src/app/logon/logon.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _quates_quates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quates/quates.component */ "./src/app/quates/quates.component.ts");
/* harmony import */ var _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile-details/profile-details.component */ "./src/app/profile-details/profile-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{ path: '', component: _logon_logon_component__WEBPACK_IMPORTED_MODULE_3__["LogonComponent"] },
                    {
                        path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                        children: [{ path: '', component: _profile_details_profile_details_component__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailsComponent"] }]
                    },
                    {
                        path: 'quotes/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                        children: [{ path: '', component: _quates_quates_component__WEBPACK_IMPORTED_MODULE_5__["QuatesComponent"] }]
                    }
                ]),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/service/auth-http-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/auth-http-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHttpInterceptor", function() { return AuthHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthHttpInterceptor = /** @class */ (function () {
    function AuthHttpInterceptor() {
    }
    AuthHttpInterceptor.prototype.intercept = function (req, next) {
        console.log(req);
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            var cloned = req.clone({
                headers: req.headers.set('authorization', 'Bearer ' + sessionStorage.getItem('token'))
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    };
    AuthHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthHttpInterceptor);
    return AuthHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        return this.httpClient.post('http://localhost:8080/auth/signin', { username: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userData) {
            console.log(userData);
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('token', userData.token);
            return userData;
        }));
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrey/demoapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map