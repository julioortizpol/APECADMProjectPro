(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/attachfiledialog/attachfiledialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attachfiledialog/attachfiledialog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog>\n        <mdc-dialog-container>\n            <mdc-dialog-surface>\n                <mdc-dialog-title>Agregar un archivo</mdc-dialog-title>\n                <mdc-dialog-content>\n                    <form [formGroup]=\"addfileForm\" id=\"addfileForm\" style=\"margin-top: 5%;\">\n                        <mdc-form-field fluid>\n                            <mdc-text-field outlined label=\"Nombre de archivo\" \n                            required [helperText]=\"standardHelper\" formControlName = \"filename\"></mdc-text-field>\n                            <mdc-helper-text #standardHelper validation persistent>Por favor introduzca el nombre del archivo\n                            </mdc-helper-text>\n                        </mdc-form-field>\n                        <input type=\"file\" formControlName = \"file\">\n                    </form>\n                </mdc-dialog-content>\n                <mdc-dialog-actions>\n                    <button mdcDialogButton mdcDialogAction=\"close\">Cancel</button>\n                    <button mdcDialogButton [disabled]=\"addfileForm.invalid || addfileForm.prestine\"  (click)=\"submit()\">Send</button>\n                </mdc-dialog-actions>\n            </mdc-dialog-surface>\n        </mdc-dialog-container>\n    </mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/creartarea/creartarea.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/creartarea/creartarea.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog class=\"dialogcreatenewuser\">\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Crear nueva tarea</mdc-dialog-title>\n            <mdc-dialog-content>\n                <form id=\"createnewtask\" style=\"margin-top: 5%; margin-right: 3%;\">\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"Nombre de la tarea\" required [helperText]=\"standardHelper\"\n                            formControlName=\"name\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca el nombre de la tarea\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-text-field type=\"date\" outlined label=\"Fecha de inicio\">\n                            <mdc-icon mdcTextFieldIcon trailing clickable>event</mdc-icon>\n                        </mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca la fecha de inicio\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-text-field type=\"date\" outlined label=\"Fecha de fin\">\n                            <mdc-icon mdcTextFieldIcon trailing clickable>event</mdc-icon>\n                        </mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca la fecha de fin\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-textarea label=\"Descripción\" rows=\"8\" cols=\"40\">\n                        </mdc-textarea>\n                    </mdc-form-field>\n                </form>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Canelar</button>\n                <button mdcDialogButton (click)=\"submit()\">Crear tarea</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog class=\"dialogadmselectiontoproyect\">\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Asignar Admnistradores de proyectos</mdc-dialog-title>\n            <mdc-dialog-content>\n                <form id=\"newProyectFrom\" style=\"margin-top: 5%;\">\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"Buscar Empleado\"></mdc-text-field>\n                    </mdc-form-field>\n                </form>\n                <mdc-list *ngFor=\"let user of usersData\" disableRipple avatar twoLine>\n                    <mdc-list-item *ngIf=\"user.validate\">\n                            <mdc-icon mdcListItemGraphic>person</mdc-icon>\n                            <mdc-list-item-text [secondaryText]=\"user.Dni\">{{user.name}} {{user.lastName}}\n                            </mdc-list-item-text>\n                            <mdc-checkbox mdcListItemMeta></mdc-checkbox>\n                    </mdc-list-item>\n                </mdc-list>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Cancelar</button>\n                <button mdcDialogButton mdcDialogAction=\"close\">Agregar</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-proyect/create-proyect.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-proyect/create-proyect.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog>\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Nuevo Proyecto</mdc-dialog-title>\n            <mdc-dialog-content>\n                <form [formGroup]=\"newProyectFrom\" id=\"newProyectFrom\" style=\"margin-top: 5%;\">\n                    <mdc-form-field fluid style=\"margin-bottom: 0.5%;\">\n                        <mdc-text-field outlined label=\"Nombre del plan\" required [helperText]=\"standardHelper\"\n                            formControlName=\"planName\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor coloque un nombre para su plan\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid style=\"margin-bottom: 0.5%;\">\n                        <mdc-text-field type=\"date\" outlined label=\"Fecha de inicio\">\n                            <mdc-icon mdcTextFieldIcon trailing clickable>event</mdc-icon>\n                        </mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca la fecha de inicio\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid style=\"margin-bottom: 0.5%;\">\n                        <mdc-text-field type=\"date\" outlined label=\"Fecha de fin\">\n                            <mdc-icon mdcTextFieldIcon trailing clickable>event</mdc-icon>\n                        </mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca la fecha de fin\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                </form>\n                <a (click)=\"openasignadmsproyectDialog()\" mdc-button style=\"font-size: 0.8em;\">\n                    Agregar administradores de proyecto\n                </a>\n                <mdc-list style=\"font-size: 0.8em;\">\n                    <mdc-list-item>\n                        <mdc-radio name=\"demo-radio-set\"></mdc-radio>\n                        Privado: solo los miembros que agregue podrán ver el contenido del plan\n                    </mdc-list-item>\n                    <mdc-list-item>\n                        <mdc-radio name=\"demo-radio-set\"></mdc-radio>\n                        Público: cualquier miembro de la organización puede ver el contenido de plan\n                    </mdc-list-item>\n                </mdc-list>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Cancelar</button>\n                <button type=\"submit\" mdcDialogButton (click)=\"submit()\">Crear plan</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createnewuserdialog/createnewuserdialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createnewuserdialog/createnewuserdialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog class=\"dialogcreatenewuser\">\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Crear un nuevo usuario</mdc-dialog-title>\n            <mdc-dialog-content>\n                <form id=\"createNewUser\" style=\"margin-top: 5%; margin-right: 3%;\">\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"Nombre Completo\" \n                        required [helperText]=\"standardHelper\" formControlName = \"name\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca el nombre del empleado\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"DNI\" \n                        required [helperText]=\"standardHelper\" formControlName = \"name\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor Introduzca el DNI del empleado\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"Teléfono\" \n                        required [helperText]=\"standardHelper\" formControlName = \"name\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca el telefono del empleado\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"Correo electrónico\" \n                        required [helperText]=\"standardHelper\" formControlName = \"name\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca el Correo del empleado\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"Fecha de contratación\" \n                        required [helperText]=\"standardHelper\" formControlName = \"name\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation>Por favor introduzca la fecha de contratacion del usuario\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                </form>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Canelar</button>\n                <button mdcDialogButton (click)=\"submit()\">Crear usuario</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filehistorydialog/filehistorydialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filehistorydialog/filehistorydialog.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog>\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Versiones del documento</mdc-dialog-title>\n            <mdc-dialog-content>\n                <mdc-list avatar twoLine>\n                    <mdc-list-item>\n                        <mdc-icon mdcListItemGraphic>folder</mdc-icon>\n                        <mdc-list-item-text secondaryText=\"18/5/2019\">Detalles de Competencias del puesto </mdc-list-item-text>\n                        <mdc-checkbox mdcListItemMeta></mdc-checkbox>\n                    </mdc-list-item>\n                    <mdc-list-item>\n                        <mdc-icon mdcListItemGraphic>folder</mdc-icon>\n                        <mdc-list-item-text secondaryText=\"17/5/2019\">Detalles de Competencias del puesto </mdc-list-item-text>\n                        <mdc-checkbox mdcListItemMeta></mdc-checkbox>\n                    </mdc-list-item>\n                    <mdc-list-item>\n                        <mdc-icon mdcListItemGraphic>folder</mdc-icon>\n                        <mdc-list-item-text secondaryText=\"16/5/2019\">Detalles de Competencias del puesto </mdc-list-item-text>\n                        <mdc-checkbox mdcListItemMeta></mdc-checkbox>\n                    </mdc-list-item>\n                </mdc-list>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Cerrar</button>\n               <button mdcDialogButton mdcDialogAction=\"close\">Descargar</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-top-app-bar class=\"demo-top-app-bar-with-tabs\" fixed [scrollTarget]=\"fixedContent\">\n    <mdc-top-app-bar-row>\n        <mdc-top-app-bar-section align=\"start\" title=\"EasyProjectManagment\">\n            <button mdcTopAppBarNavIcon [routerLink]=\"['/mainpage/proyectos']\">\n                <mdc-icon>home</mdc-icon>\n            </button>\n        </mdc-top-app-bar-section>\n        <mdc-top-app-bar-section align=\"end\">\n            <mdc-icon (click)=\"opencreateProyectComponent()\" mdcTopAppBarActionItem>add</mdc-icon>\n            <mdc-icon (click)=\"notificationsdrawer.open = !notificationsdrawer.open\" mdcTopAppBarActionItem>\n                notifications</mdc-icon>\n            <mdc-icon (click)=\"helpdrawer.open = !helpdrawer.open\" mdcTopAppBarActionItem>help</mdc-icon>\n            <mdc-icon (click)=\"userdrawer.open = !userdrawer.open\" mdcTopAppBarActionItem>account_circle</mdc-icon>\n        </mdc-top-app-bar-section>\n    </mdc-top-app-bar-row>\n    <mdc-top-app-bar-row>\n        <mdc-top-app-bar-section>\n            <mdc-tab-bar [activeTabIndex]=\"activatedtab\">\n                <mdc-tab-scroller>\n                    <mdc-tab *ngFor=\"let tab of tabs\" [label]=\"tab.label\" [icon]='tab.icon'\n                        [routerLink]=\"['/mainpage',tab.path]\"></mdc-tab>\n                </mdc-tab-scroller>\n            </mdc-tab-bar>\n        </mdc-top-app-bar-section>\n    </mdc-top-app-bar-row>\n</mdc-top-app-bar>\n\n<!--User Drawer-->\n<mdc-drawer drawer=\"modal\" dir=\"rtl\" #userdrawer>\n    <h2 mdcDrawerTitle class=\"drawertitle\">Cuenta</h2>\n    <mdc-list-divider></mdc-list-divider>\n    <mdc-drawer-header>\n        <h3 mdcDrawerTitle>Ortiz Pol, Julio Antonio</h3>\n        <h6 mdcDrawerSubtitle>Empleado: 20190536</h6>\n        <h6 mdcDrawerSubtitle>Desarrollador WEB</h6>\n        <h6 mdcDrawerSubtitle>j.ortiz@joptech.com</h6>\n    </mdc-drawer-header>\n    <mdc-list-divider></mdc-list-divider>\n    <mdc-drawer-content dir=\"rtl\">\n        <mdc-list>\n            <mdc-list-item (click)=\"logout()\" *ngFor=\"let item of userDrawerActions\" [activated]=\"item.activated\">\n                <mdc-icon mdcListItemGraphic *ngIf=\"item.icon\">{{item.icon}}</mdc-icon>{{item.label}}\n            </mdc-list-item>\n        </mdc-list>\n    </mdc-drawer-content>\n</mdc-drawer>\n\n<!--Notifications Drawer-->\n<mdc-drawer drawer=\"modal\" dir=\"rtl\" #notificationsdrawer>\n    <mdc-drawer-header>\n        <h3 mdcDrawerTitle class=\"drawertitle\">Notificaciones</h3>\n    </mdc-drawer-header>\n    <mdc-drawer-content dir=\"rtl\">\n        <mdc-list>\n            <mdc-list-item>\n\n            </mdc-list-item>\n        </mdc-list>\n    </mdc-drawer-content>\n</mdc-drawer>\n\n<!--Help Drawer-->\n<mdc-drawer drawer=\"modal\" dir=\"rtl\" #helpdrawer>\n    <mdc-drawer-header>\n        <h3 mdcDrawerTitle class=\"drawertitle\">Ayuda</h3>\n    </mdc-drawer-header>\n    <mdc-drawer-content dir=\"rtl\">\n        <mdc-list >\n            <mdc-list-item *ngFor=\"let item of helpDrawerActions\" [activated]=\"item.activated\">\n                {{item.label}}\n            </mdc-list-item>\n        </mdc-list>\n    </mdc-drawer-content>\n</mdc-drawer>\n\n<div #fixedContent style=\"padding-top: 135px;\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/humanresource/humanresource.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/humanresource/humanresource.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"elementVisible\">\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <button (click)=\"openAddUserDialog()\" style=\"margin-top: 2%;\" class=\"primarycolorFAB\" mdc-fab extended icon=\"add\"\n        label=\"Agregar usuario\">\n    </button>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <h2>Lista de empleados</h2>\n</div>\n</ng-template>\n<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <mdc-data-table fxFlex=\"60\">\n        <table mdcDataTableTable>\n            <thead>\n                <tr mdcDataTableHeaderRow>\n                    <th mdcDataTableHeaderCell></th>\n                    <th mdcDataTableHeaderCell>Nombre</th>\n                    <th mdcDataTableHeaderCell numeric>Apellido</th>\n                    <th mdcDataTableHeaderCell numeric>Correo</th>\n                    <th mdcDataTableHeaderCell numeric>Dni</th>\n                    <th mdcDataTableHeaderCell>Fecha de contratacion</th>\n                </tr>\n            </thead>\n            <tbody mdcDataTableContent>\n                <tr mdcDataTableRow *ngFor=\"let user of users\">\n                    <td>\n                        <button mdc-icon-button icon=\"remove_red_eye\" (click)=\"openUserDetailDialog()\"></button>\n                    </td>\n                    <td mdcDataTableCell>{{user.name}}</td>\n                    <td mdcDataTableCell numeric>{{user.lastName}}</td>\n                    <td mdcDataTableCell numeric>{{user.mail}}</td>\n                    <td mdcDataTableCell numeric>{{user.Dni}}</td>\n                    <td mdcDataTableCell>{{user.hiringDate}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </mdc-data-table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/humanresource/usersdetail/usersdetail.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/humanresource/usersdetail/usersdetail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog>\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Julio Antonio Ortiz Pol</mdc-dialog-title>\n            <mdc-dialog-content>\n                <mdc-data-table>\n                    <table mdcDataTableTable>\n                        <thead>\n                            <tr mdcDataTableHeaderRow>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive = \"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"j.ortiz@joptech.com\">Correo\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive = \"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"8299058805\">Teléfono\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                            </tr>\n                            <tr mdcDataTableHeaderRow>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive = \"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"40227551682\">DNI</mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive = \"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"10/5/2011\">Fecha de contratación\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                            </tr>\n                            <tr>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive = \"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"Secondary text\">Dirección\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                            </tr>\n                        </thead>\n                    </table>\n                </mdc-data-table>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Cerrar</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password-dialog/forgot-password-dialog.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password-dialog/forgot-password-dialog.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog>\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Forgot your Pasword?</mdc-dialog-title>\n            <mdc-dialog-content>\n                <form [formGroup]=\"forgotPaswordForm\" id=\"forgotPaswordForm\" style=\"margin-top: 5%;\">\n                    <mdc-form-field fluid>\n                        <mdc-text-field outlined label=\"User\" \n                        required [helperText]=\"standardHelper\" formControlName = \"user\"></mdc-text-field>\n                        <mdc-helper-text #standardHelper validation persistent>Please type your user account\n                        </mdc-helper-text>\n                    </mdc-form-field>\n                </form>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Cancel</button>\n                <button mdcDialogButton (click)=\"submit()\">Send</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayoutAlign=\"center\">\n    <img src=\"assets/joptechlogo.png\" height=\"150px\" width=\"150px\">\n</div>\n<div>\n  <h2 mdcHeadline6 style=\"text-align: center; color: black;\">Easy Project Management</h2>\n</div>\n<!--Login form-->\n<div fxLayoutAlign=\"center\" style=\"margin-top: 0px; margin-bottom: 0px;\">\n    <mdc-card class=\"demo-card\">\n        <div class=\"demo-card__primary\">\n          <div fxLayoutAlign=\"center\" >\n              <img  src=\"assets/userlog.png\" height=\"80px\" width=\"80px\">\n          </div>\n        </div>\n        <form [formGroup]='loginForm' id=\"loginForm\" (ngSubmit)= \"onSubmit()\" >\n            <div class=\"spacediv\" >\n                <mdc-form-field>\n                  <mdc-text-field outlined \n                  formControlName = \"user\"\n                  required type = \"text\" label=\"User\" \n                  [(ngModel)] = \"user.user\" style=\"width: 94%; margin-left: 3%;\">\n                  </mdc-text-field>\n                </mdc-form-field>\n              </div>\n              <div class=\"spacediv\">\n                <mdc-form-field>\n                  <mdc-text-field outlined \n                  required type = \"password\" \n                  [(ngModel)] = \"user.Pasword\" \n                  formControlName = \"userPasword\"\n                  label=\"Pasword\" style=\"margin-left: 3%; width: 94%\">\n                  </mdc-text-field>\n                </mdc-form-field>\n              </div> \n      <mdc-card-actions>\n        <mdc-card-action-buttons>\n          <button mdc-button type = \"submit\" mdcCardAction=\"button\" >Login</button>\n          <button mdc-button mdcCardAction=\"button\" (click)=\"openForgotPaswordDialog()\">Forget Pasword</button>\n        </mdc-card-action-buttons>\n      </mdc-card-actions>\n    </form>\n    </mdc-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mytask/mytask.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mytask/mytask.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template [ngIf]=\"elementVisible\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n        <h2>Lista de tareas</h2>\n    </div>\n</ng-template>\n<ng-template [ngIf]=\"!elementVisible\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n        <button (click)=\"openCreateTaskDialog()\" style=\"margin-top: 2%; margin-bottom: 2%;\" class=\"primarycolorFAB\" mdc-fab extended\n            icon=\"add\" label=\"Crear tarea\">\n        </button>\n    </div>\n</ng-template>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <mdc-data-table fxFlex=\"80\">\n        <table mdcDataTableTable>\n            <thead>\n                <tr mdcDataTableHeaderRow>\n                    <th mdcDataTableHeaderCell>Tarea</th>\n                    <th mdcDataTableHeaderCell numeric>Fecha de inicio</th>\n                    <th mdcDataTableHeaderCell numeric>Duración estimada</th>\n                    <th mdcDataTableHeaderCell>Progreso</th>\n                    <th mdcDataTableHeaderCell>Proyecto</th>\n                </tr>\n            </thead>\n            <tbody mdcDataTableContent>\n                <tr (click)=\"openTaskDetailDialog()\" mdcDataTableRow *ngFor=\"let task of tasks\">\n                    <td mdcDataTableCell>{{task.name}}</td>\n                    <td mdcDataTableCell numeric>{{task.startDate}}</td>\n                    <td mdcDataTableCell numeric>{{task.duration}}</td>\n                    <td mdcDataTableCell numeric>{{task.progres}}</td>\n                    <td mdcDataTableCell>{{task.proyect}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </mdc-data-table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proyectdetailinfo/proyectdetailinfo.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proyectdetailinfo/proyectdetailinfo.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <mdc-data-table fxLayoutAlign=\"center\">\n        <table mdcDataTableTable>\n            <thead>\n                <tr mdcDataTableHeaderRow>\n                    <th mdcDataTableHeaderCell>\n                        <mdc-list twoLine interactive=\"false\">\n                            <mdc-list-item>\n                                <mdc-list-item-text secondaryText=\"Alta\">Prioridad\n                                </mdc-list-item-text>\n                            </mdc-list-item>\n                        </mdc-list>\n                    </th>\n                    <th mdcDataTableHeaderCell>\n                        <mdc-list twoLine interactive=\"false\">\n                            <mdc-list-item>\n                                <mdc-list-item-text secondaryText=\"11/5/2019\">Fecha de inicio\n                                </mdc-list-item-text>\n                            </mdc-list-item>\n                        </mdc-list>\n                    </th>\n                    <th mdcDataTableHeaderCell>\n                        <mdc-list twoLine interactive=\"false\">\n                            <mdc-list-item>\n                                <mdc-list-item-text secondaryText=\"3/5/2020\">Fecha de finalización\n                                </mdc-list-item-text>\n                            </mdc-list-item>\n                        </mdc-list>\n                    </th>\n                    <th mdcDataTableHeaderCell>\n                        <mdc-list twoLine interactive=\"false\">\n                            <mdc-list-item>\n                                <mdc-list-item-text secondaryText=\"En progreso\">Estado Actual\n                                </mdc-list-item-text>\n                            </mdc-list-item>\n                        </mdc-list>\n                    </th>\n                </tr>\n            </thead>\n        </table>\n    </mdc-data-table>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <h2>Calendario</h2>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <iframe\n        src=\"https://calendar.google.com/calendar/embed?src=mt6bh5f59hjhlseb94lurt30j4%40group.calendar.google.com&ctz=America%2FSanto_Domingo\"\n        style=\"border: 0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proyectdetails/proyectdetails.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proyectdetails/proyectdetails.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <h1>Creación de departamento de calidad</h1>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <h2>90%</h2>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\" style=\"margin-bottom: 2%;\">\n    <mdc-linear-progress fxFlex=\"60\" determinate [progress]=\"0.9\" secondary></mdc-linear-progress>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mdc-tab-bar [activeTabIndex]=\"0\">\n        <mdc-tab-scroller>\n            <mdc-tab label=\"Tareas\" [routerLink]=\"['/mainpage/detalleproyecto/tareas']\"></mdc-tab>\n            <mdc-tab label=\"Detalles\" [routerLink]=\"['/mainpage/detalleproyecto/detalles']\"></mdc-tab>\n            <mdc-tab label=\"Participantes\" [routerLink]=\"['/mainpage/detalleproyecto/personal']\"></mdc-tab>\n        </mdc-tab-scroller>\n    </mdc-tab-bar>\n</div>\n\n<div style=\"margin-top: 1%;\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proyects/proyects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proyects/proyects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <button (click)=\"opencreateProyectComponent()\" style=\"margin-top: 2%;\" class=\"primarycolorFAB\" mdc-fab extended icon=\"add\"\n        label=\"Crear proyecto\">\n    </button>\n</div>\n<div fxLayoutAlign=\"space-between center\">\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action [routerLink]=\"['/mainpage/detalleproyecto']\">\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Creacion de departamento de calidad</h3>\n                        <div mdcBody2>En progreso</div>\n                        <div mdcBody2>Fecha de inicio: 10/22/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0.9\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Remodelación area de tecnologia</h3>\n                        <div mdcBody2>Cacelado</div>\n                        <div mdcBody2>Fecha de inicio: 10/20/2019</div>\n                        <div mdcBody2>Fecha de Finalizacion: 11/22/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Desarrollo aplicacion bancaria</h3>\n                        <div mdcBody2>En progreso</div>\n                        <div mdcBody2>Fecha de inicio: 10/10/2018</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0.2\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n</div>\n<div fxLayoutAlign=\"space-between center\">\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Capacitacion personal de desarrollo</h3>\n                        <div mdcBody2>Completada</div>\n                        <div mdcBody2>Fecha de inicio: 10/1/2019</div>\n                        <div mdcBody2>Fecha de Finalizacion: 11/5/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"1\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Reporte de perdidas de 2018</h3>\n                        <div mdcBody2>Finalizado</div>\n                        <div mdcBody2>Fecha de inicio: 1/1/2019</div>\n                        <div mdcBody2>Fecha de Finalizacion: 2/3/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"1\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Crear pruebas automatizadas</h3>\n                        <div mdcBody2>Sin tareas</div>\n                        <div mdcBody2>Fecha de inicio: 11/23/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n</div>\n<div fxLayoutAlign=\"space-between center\">\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Creacion de departamento de calidad</h3>\n                        <div mdcBody2>En progreso</div>\n                        <div mdcBody2>Fecha de inicio: 10/22/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0.9\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Remodelación area de tecnologia</h3>\n                        <div mdcBody2>Cacelado</div>\n                        <div mdcBody2>Fecha de inicio: 10/20/2019</div>\n                        <div mdcBody2>Fecha de Finalizacion: 11/22/2019</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n    <div>\n        <mdc-card class=\"demo-card demo-card--music\">\n            <mdc-card-primary-action>\n                <div class=\"demo-card__music-row\">\n                    <mdc-card-media square class=\"demo-card__media demo-card__media--music\"></mdc-card-media>\n                    <div class=\"demo-card__music-info\">\n                        <h3 style=\"margin-bottom: 2%; margin-top: 2%;\">Desarrollo aplicacion bancaria</h3>\n                        <div mdcBody2>En progreso</div>\n                        <div mdcBody2>Fecha de inicio: 10/10/2018</div>\n                    </div>\n                </div>\n            </mdc-card-primary-action>\n            <mdc-list-divider></mdc-list-divider>\n            <mdc-card-actions>\n                <mdc-card-action-buttons class=\"demo-card__action-buttons--text-only\">Estado</mdc-card-action-buttons>\n                <mdc-card-action-icons>\n                    <mdc-linear-progress determinate [progress]=\"0.2\" secondary></mdc-linear-progress>\n                </mdc-card-action-icons>\n            </mdc-card-actions>\n        </mdc-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskdetaildialog/taskdetaildialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskdetaildialog/taskdetaildialog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdc-dialog>\n    <mdc-dialog-container>\n        <mdc-dialog-surface>\n            <mdc-dialog-title>Contratar especialistas</mdc-dialog-title>\n            <mdc-dialog-content>\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-bottom: 2%;\">\n                    <h4 style=\"margin-top:2%; margin-bottom: 2%; margin-right: 2%;\">Progreso </h4>\n                    <form [formGroup]=\"progresstate\">\n                        <mdc-select formControlName=\"selectprogresstate\">\n                            <mdc-menu>\n                                <mdc-list>\n                                    <mdc-list-item selected value=\"No iniciada\">No iniciada</mdc-list-item>\n                                    <mdc-list-item value=\"En curso\">En curso</mdc-list-item>\n                                    <mdc-list-item value=\"Completada\">Completada</mdc-list-item>\n                                </mdc-list>\n                            </mdc-menu>\n                        </mdc-select>\n                    </form>\n                </div>\n                <mdc-data-table fxLayoutAlign=\"center\">\n                    <table mdcDataTableTable>\n                        <thead>\n                            <tr mdcDataTableHeaderRow>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive=\"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"Media\">Prioridad\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive=\"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"11/5/2019\">Fecha de inicio\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                                <th mdcDataTableHeaderCell>\n                                    <mdc-list twoLine interactive=\"false\">\n                                        <mdc-list-item>\n                                            <mdc-list-item-text secondaryText=\"20 días\">Duración\n                                            </mdc-list-item-text>\n                                        </mdc-list-item>\n                                    </mdc-list>\n                                </th>\n                            </tr>\n                        </thead>\n                    </table>\n                </mdc-data-table>\n                <div>\n                    <h4 style=\"margin-top:2%; margin-bottom: 2%;\">Descripción</h4>\n                    Participar en le proceso de contratacion de los especialistas para el area de calidad\n                    ayudando al area de recursos humanos en todo el proceso de depuracion de candidatos al puesto\n                </div>\n                <div style=\"margin-top: 2%;\">\n                    <mdc-tab-bar (activated)=\"logTab($event)\" [activeTabIndex]=\"0\" useAutomaticActivation>\n                        <mdc-tab-scroller>\n                            <mdc-tab *ngFor=\"let tab of tabs\" [label]=\"tab.label\" [icon]=\"tab.icon\"></mdc-tab>\n                        </mdc-tab-scroller>\n                    </mdc-tab-bar>\n                </div>\n\n                <ng-template [ngIf]=\"tabcontentflag\">\n                    <div style=\"margin-top: 2%;\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n                        <button mdc-button>\n                            <span mdcButtonLabel>Agregar participante</span>\n                            <mdc-icon>person_add</mdc-icon>\n                        </button>\n                    </div>\n                    <mdc-list *ngFor=\"let user of usersData\" disableRipple avatar twoLine>\n                        <mdc-list-item *ngIf=\"user.validate\">\n                            <mdc-icon mdcListItemGraphic>person</mdc-icon>\n                            <mdc-list-item-text [secondaryText]=\"user.Dni\">{{user.name}} {{user.lastName}}\n                            </mdc-list-item-text>\n                        </mdc-list-item>\n                    </mdc-list>\n                </ng-template>\n\n                <ng-template [ngIf]=\"!tabcontentflag\">\n                    <div style=\"margin-top: 2%;\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n                        <button mdc-button (click)=\"openattachfiledialog()\">\n                            <span mdcButtonLabel>Agregar documento</span>\n                            <mdc-icon>attach_file</mdc-icon>\n                        </button>\n                    </div>\n                    <mdc-list twoLine>\n                        <mdc-list-item (click)=\"openfilehistorydialog()\">\n                            <mdc-icon mdcListItemGraphic>insert_drive_file</mdc-icon>\n                            <mdc-list-item-text secondaryText=\"20/5/2019\">\n                                Curriculim Fernando Rojas\n                            </mdc-list-item-text>\n                        </mdc-list-item>\n                        <mdc-list-item (click)=\"openfilehistorydialog()\">\n                            <mdc-icon mdcListItemGraphic>insert_drive_file</mdc-icon>\n                            <mdc-list-item-text secondaryText=\"18/5/2019\">\n                                Detalles de Competencias del puesto\n                            </mdc-list-item-text>\n                        </mdc-list-item>\n                        <mdc-list-item (click)=\"openfilehistorydialog()\">\n                            <mdc-icon mdcListItemGraphic>insert_drive_file</mdc-icon>\n                            <mdc-list-item-text secondaryText=\"15/5/2019\">\n                                Licitación herramientas del area\n                            </mdc-list-item-text>\n                        </mdc-list-item>\n                    </mdc-list>\n                </ng-template>\n            </mdc-dialog-content>\n            <mdc-dialog-actions>\n                <button mdcDialogButton mdcDialogAction=\"close\">Cancel</button>\n                <button mdcDialogButton mdcDialogAction=\"close\">Aceptar</button>\n            </mdc-dialog-actions>\n        </mdc-dialog-surface>\n    </mdc-dialog-container>\n</mdc-dialog>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proyects/proyects.component */ "./src/app/proyects/proyects.component.ts");
/* harmony import */ var _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytask/mytask.component */ "./src/app/mytask/mytask.component.ts");
/* harmony import */ var _humanresource_humanresource_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./humanresource/humanresource.component */ "./src/app/humanresource/humanresource.component.ts");
/* harmony import */ var _proyectdetails_proyectdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proyectdetails/proyectdetails.component */ "./src/app/proyectdetails/proyectdetails.component.ts");
/* harmony import */ var _proyectdetailinfo_proyectdetailinfo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proyectdetailinfo/proyectdetailinfo.component */ "./src/app/proyectdetailinfo/proyectdetailinfo.component.ts");










const routes = [
    {
        path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'mainpage', component: _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        children: [
            {
                path: 'proyectos', component: _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_5__["ProyectsComponent"]
            },
            {
                path: 'tareas', component: _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_6__["MytaskComponent"]
            },
            {
                path: 'personal', component: _humanresource_humanresource_component__WEBPACK_IMPORTED_MODULE_7__["HumanresourceComponent"]
            },
            {
                path: 'detalleproyecto', component: _proyectdetails_proyectdetails_component__WEBPACK_IMPORTED_MODULE_8__["ProyectdetailsComponent"],
                children: [
                    {
                        path: 'tareas', component: _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_6__["MytaskComponent"]
                    },
                    {
                        path: 'personal', component: _humanresource_humanresource_component__WEBPACK_IMPORTED_MODULE_7__["HumanresourceComponent"]
                    },
                    {
                        path: 'detalles', component: _proyectdetailinfo_proyectdetailinfo_component__WEBPACK_IMPORTED_MODULE_9__["ProyectdetailinfoComponent"]
                    }
                ]
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'projectAdm';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/forgot-password-dialog/forgot-password-dialog.component */ "./src/app/login/forgot-password-dialog/forgot-password-dialog.component.ts");
/* harmony import */ var _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./proyects/proyects.component */ "./src/app/proyects/proyects.component.ts");
/* harmony import */ var _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mytask/mytask.component */ "./src/app/mytask/mytask.component.ts");
/* harmony import */ var _humanresource_humanresource_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./humanresource/humanresource.component */ "./src/app/humanresource/humanresource.component.ts");
/* harmony import */ var _create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create-proyect/create-proyect.component */ "./src/app/create-proyect/create-proyect.component.ts");
/* harmony import */ var _create_proyect_asign_adms_proyect_dialog_asign_adms_proyect_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component */ "./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.ts");
/* harmony import */ var _createnewuserdialog_createnewuserdialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./createnewuserdialog/createnewuserdialog.component */ "./src/app/createnewuserdialog/createnewuserdialog.component.ts");
/* harmony import */ var _humanresource_usersdetail_usersdetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./humanresource/usersdetail/usersdetail.component */ "./src/app/humanresource/usersdetail/usersdetail.component.ts");
/* harmony import */ var _taskdetaildialog_taskdetaildialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./taskdetaildialog/taskdetaildialog.component */ "./src/app/taskdetaildialog/taskdetaildialog.component.ts");
/* harmony import */ var _attachfiledialog_attachfiledialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./attachfiledialog/attachfiledialog.component */ "./src/app/attachfiledialog/attachfiledialog.component.ts");
/* harmony import */ var _filehistorydialog_filehistorydialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./filehistorydialog/filehistorydialog.component */ "./src/app/filehistorydialog/filehistorydialog.component.ts");
/* harmony import */ var _proyectdetails_proyectdetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./proyectdetails/proyectdetails.component */ "./src/app/proyectdetails/proyectdetails.component.ts");
/* harmony import */ var _proyectdetailinfo_proyectdetailinfo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./proyectdetailinfo/proyectdetailinfo.component */ "./src/app/proyectdetailinfo/proyectdetailinfo.component.ts");
/* harmony import */ var _creartarea_creartarea_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./creartarea/creartarea.component */ "./src/app/creartarea/creartarea.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _login_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordDialogComponent"],
            _proyects_proyects_component__WEBPACK_IMPORTED_MODULE_11__["ProyectsComponent"],
            _mytask_mytask_component__WEBPACK_IMPORTED_MODULE_12__["MytaskComponent"],
            _humanresource_humanresource_component__WEBPACK_IMPORTED_MODULE_13__["HumanresourceComponent"],
            _create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_14__["CreateProyectComponent"],
            _create_proyect_asign_adms_proyect_dialog_asign_adms_proyect_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AsignAdmsProyectDialogComponent"],
            _createnewuserdialog_createnewuserdialog_component__WEBPACK_IMPORTED_MODULE_16__["CreatenewuserdialogComponent"],
            _humanresource_usersdetail_usersdetail_component__WEBPACK_IMPORTED_MODULE_17__["UsersdetailComponent"],
            _taskdetaildialog_taskdetaildialog_component__WEBPACK_IMPORTED_MODULE_18__["TaskdetaildialogComponent"],
            _attachfiledialog_attachfiledialog_component__WEBPACK_IMPORTED_MODULE_19__["AttachfiledialogComponent"],
            _filehistorydialog_filehistorydialog_component__WEBPACK_IMPORTED_MODULE_20__["FilehistorydialogComponent"],
            _proyectdetails_proyectdetails_component__WEBPACK_IMPORTED_MODULE_21__["ProyectdetailsComponent"],
            _proyectdetailinfo_proyectdetailinfo_component__WEBPACK_IMPORTED_MODULE_22__["ProyectdetailinfoComponent"],
            _creartarea_creartarea_component__WEBPACK_IMPORTED_MODULE_23__["CreartareaComponent"],
        ],
        entryComponents: [
            _login_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordDialogComponent"],
            _create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_14__["CreateProyectComponent"],
            _create_proyect_asign_adms_proyect_dialog_asign_adms_proyect_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AsignAdmsProyectDialogComponent"],
            _createnewuserdialog_createnewuserdialog_component__WEBPACK_IMPORTED_MODULE_16__["CreatenewuserdialogComponent"],
            _humanresource_usersdetail_usersdetail_component__WEBPACK_IMPORTED_MODULE_17__["UsersdetailComponent"],
            _taskdetaildialog_taskdetaildialog_component__WEBPACK_IMPORTED_MODULE_18__["TaskdetaildialogComponent"],
            _attachfiledialog_attachfiledialog_component__WEBPACK_IMPORTED_MODULE_19__["AttachfiledialogComponent"],
            _filehistorydialog_filehistorydialog_component__WEBPACK_IMPORTED_MODULE_20__["FilehistorydialogComponent"],
            _creartarea_creartarea_component__WEBPACK_IMPORTED_MODULE_23__["CreartareaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcFabModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcIconModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcMenuModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcButtonModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTopAppBarModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcCardModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcListModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcDrawerModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTextFieldModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcCheckboxModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcIconButtonModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcDialogModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcSnackbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcTabBarModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcRippleModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcRadioModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MDCDataTableModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcLinearProgressModule"],
            _angular_mdc_web__WEBPACK_IMPORTED_MODULE_7__["MdcSelectModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/attachfiledialog/attachfiledialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/attachfiledialog/attachfiledialog.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGFjaGZpbGVkaWFsb2cvYXR0YWNoZmlsZWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/attachfiledialog/attachfiledialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/attachfiledialog/attachfiledialog.component.ts ***!
  \****************************************************************/
/*! exports provided: AttachfiledialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachfiledialogComponent", function() { return AttachfiledialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");




let AttachfiledialogComponent = class AttachfiledialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.addfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            filename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    submit() {
        if (this.addfileForm.invalid) {
            return;
        }
        this.dialogRef.close();
    }
};
AttachfiledialogComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcDialogRef"] }
];
AttachfiledialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attachfiledialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./attachfiledialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/attachfiledialog/attachfiledialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./attachfiledialog.component.scss */ "./src/app/attachfiledialog/attachfiledialog.component.scss")).default]
    })
], AttachfiledialogComponent);



/***/ }),

/***/ "./src/app/creartarea/creartarea.component.scss":
/*!******************************************************!*\
  !*** ./src/app/creartarea/creartarea.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWFydGFyZWEvY3JlYXJ0YXJlYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/creartarea/creartarea.component.ts":
/*!****************************************************!*\
  !*** ./src/app/creartarea/creartarea.component.ts ***!
  \****************************************************/
/*! exports provided: CreartareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreartareaComponent", function() { return CreartareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreartareaComponent = class CreartareaComponent {
    constructor() { }
    ngOnInit() {
    }
};
CreartareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creartarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creartarea.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/creartarea/creartarea.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creartarea.component.scss */ "./src/app/creartarea/creartarea.component.scss")).default]
    })
], CreartareaComponent);



/***/ }),

/***/ "./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wcm95ZWN0L2FzaWduLWFkbXMtcHJveWVjdC1kaWFsb2cvYXNpZ24tYWRtcy1wcm95ZWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AsignAdmsProyectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignAdmsProyectDialogComponent", function() { return AsignAdmsProyectDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _staticData_userData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../staticData/userData */ "./src/app/staticData/userData.ts");




let AsignAdmsProyectDialogComponent = class AsignAdmsProyectDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.condition = false;
        this.usersData = [];
    }
    ngOnInit() {
        this.usersData = _staticData_userData__WEBPACK_IMPORTED_MODULE_3__["userdata"];
        for (let i = 0; i < this.usersData.length; i++) {
            this.usersData[i].validate = false;
            if (this.usersData[i].role == "ADM") {
                this.usersData[i].validate = true;
            }
        }
    }
};
AsignAdmsProyectDialogComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialogRef"] }
];
AsignAdmsProyectDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asign-adms-proyect-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asign-adms-proyect-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asign-adms-proyect-dialog.component.scss */ "./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.scss")).default]
    })
], AsignAdmsProyectDialogComponent);



/***/ }),

/***/ "./src/app/create-proyect/create-proyect.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/create-proyect/create-proyect.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wcm95ZWN0L2NyZWF0ZS1wcm95ZWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/create-proyect/create-proyect.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-proyect/create-proyect.component.ts ***!
  \************************************************************/
/*! exports provided: CreateProyectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProyectComponent", function() { return CreateProyectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _create_proyect_asign_adms_proyect_dialog_asign_adms_proyect_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component */ "./src/app/create-proyect/asign-adms-proyect-dialog/asign-adms-proyect-dialog.component.ts");






let CreateProyectComponent = class CreateProyectComponent {
    constructor(dialogRef, asignadmsproyectDialog) {
        this.dialogRef = dialogRef;
        this.asignadmsproyectDialog = asignadmsproyectDialog;
        this.newProyectFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            planName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    submit() {
        if (this.newProyectFrom.invalid) {
            return;
        }
        this.dialogRef.close();
    }
    openasignadmsproyectDialog() {
        const dialogRef = this.asignadmsproyectDialog.open(_create_proyect_asign_adms_proyect_dialog_asign_adms_proyect_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AsignAdmsProyectDialogComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
};
CreateProyectComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialogRef"] },
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialog"] }
];
CreateProyectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-proyect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-proyect.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-proyect/create-proyect.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-proyect.component.scss */ "./src/app/create-proyect/create-proyect.component.scss")).default]
    })
], CreateProyectComponent);



/***/ }),

/***/ "./src/app/createnewuserdialog/createnewuserdialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/createnewuserdialog/createnewuserdialog.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZW5ld3VzZXJkaWFsb2cvY3JlYXRlbmV3dXNlcmRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/createnewuserdialog/createnewuserdialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/createnewuserdialog/createnewuserdialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatenewuserdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatenewuserdialogComponent", function() { return CreatenewuserdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreatenewuserdialogComponent = class CreatenewuserdialogComponent {
    constructor() { }
};
CreatenewuserdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createnewuserdialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createnewuserdialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createnewuserdialog/createnewuserdialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createnewuserdialog.component.scss */ "./src/app/createnewuserdialog/createnewuserdialog.component.scss")).default]
    })
], CreatenewuserdialogComponent);



/***/ }),

/***/ "./src/app/filehistorydialog/filehistorydialog.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/filehistorydialog/filehistorydialog.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVoaXN0b3J5ZGlhbG9nL2ZpbGVoaXN0b3J5ZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/filehistorydialog/filehistorydialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/filehistorydialog/filehistorydialog.component.ts ***!
  \******************************************************************/
/*! exports provided: FilehistorydialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilehistorydialogComponent", function() { return FilehistorydialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilehistorydialogComponent = class FilehistorydialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
FilehistorydialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filehistorydialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filehistorydialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filehistorydialog/filehistorydialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filehistorydialog.component.scss */ "./src/app/filehistorydialog/filehistorydialog.component.scss")).default]
    })
], FilehistorydialogComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-drawer-app-content {\n  overflow: hidden;\n  position: relative;\n}\n\n.drawertitle {\n  margin-left: 2%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcanVsaW9cXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxXRUJcXFRhcmVhc1VuaXZlcnNpZGFkXFxQcm95ZWN0b0ZpbmFsXFxwcm9qZWN0QWRtL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWRyYXdlci1hcHAtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbi5kcmF3ZXJ0aXRsZXtcclxuICBtYXJnaW4tbGVmdDogMiU7IFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iLCIuZGVtby1kcmF3ZXItYXBwLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcmF3ZXJ0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-proyect/create-proyect.component */ "./src/app/create-proyect/create-proyect.component.ts");
/* harmony import */ var _staticData_mainpageHeaderData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staticData/mainpageHeaderData */ "./src/app/staticData/mainpageHeaderData.ts");






let HeaderComponent = class HeaderComponent {
    constructor(router, createProyectComponent) {
        this.router = router;
        this.createProyectComponent = createProyectComponent;
        this.tabs = [];
        this.userDrawerActions = [];
        this.helpDrawerActions = [];
        this.activatedtab = '1';
        router.events.subscribe((val) => {
            this.setFocusTabWithTheUrl();
        });
    }
    ngOnInit() {
        this.setFocusTabWithTheUrl();
        this.tabs = _staticData_mainpageHeaderData__WEBPACK_IMPORTED_MODULE_5__["headerData"].tabs;
        this.helpDrawerActions = _staticData_mainpageHeaderData__WEBPACK_IMPORTED_MODULE_5__["headerData"].helpDrawerActions;
        this.userDrawerActions = _staticData_mainpageHeaderData__WEBPACK_IMPORTED_MODULE_5__["headerData"].userDrawerActions;
    }
    opencreateProyectComponent() {
        const dialogRef = this.createProyectComponent.open(_create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_4__["CreateProyectComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
    logout() {
        this.router.navigate(['/']);
    }
    setFocusTabWithTheUrl() {
        switch (this.router.url) {
            case '/mainpage/personal':
                this.activatedtab = '2';
                break;
            case '/mainpage/proyectos':
                this.activatedtab = '0';
                break;
            case '/mainpage/tareas':
                this.activatedtab = '1';
                break;
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcDialog"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/humanresource/humanresource.component.scss":
/*!************************************************************!*\
  !*** ./src/app/humanresource/humanresource.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h1bWFucmVzb3VyY2UvaHVtYW5yZXNvdXJjZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/humanresource/humanresource.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/humanresource/humanresource.component.ts ***!
  \**********************************************************/
/*! exports provided: HumanresourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HumanresourceComponent", function() { return HumanresourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _staticData_userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staticData/userData */ "./src/app/staticData/userData.ts");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _createnewuserdialog_createnewuserdialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createnewuserdialog/createnewuserdialog.component */ "./src/app/createnewuserdialog/createnewuserdialog.component.ts");
/* harmony import */ var _humanresource_usersdetail_usersdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../humanresource/usersdetail/usersdetail.component */ "./src/app/humanresource/usersdetail/usersdetail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HumanresourceComponent = class HumanresourceComponent {
    constructor(HumanresourceDialog, userDetailDialog, router) {
        this.HumanresourceDialog = HumanresourceDialog;
        this.userDetailDialog = userDetailDialog;
        this.router = router;
        this.users = [];
        this.elementVisible = false;
    }
    ngOnInit() {
        if (this.router.url == "/mainpage/personal") {
            this.elementVisible = true;
        }
        this.users = _staticData_userData__WEBPACK_IMPORTED_MODULE_2__["userdata"];
    }
    openAddUserDialog() {
        const dialogRef = this.HumanresourceDialog.open(_createnewuserdialog_createnewuserdialog_component__WEBPACK_IMPORTED_MODULE_4__["CreatenewuserdialogComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
    openUserDetailDialog() {
        const dialogRef = this.userDetailDialog.open(_humanresource_usersdetail_usersdetail_component__WEBPACK_IMPORTED_MODULE_5__["UsersdetailComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
};
HumanresourceComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcDialog"] },
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
HumanresourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-humanresource',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./humanresource.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/humanresource/humanresource.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./humanresource.component.scss */ "./src/app/humanresource/humanresource.component.scss")).default]
    })
], HumanresourceComponent);



/***/ }),

/***/ "./src/app/humanresource/usersdetail/usersdetail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/humanresource/usersdetail/usersdetail.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h1bWFucmVzb3VyY2UvdXNlcnNkZXRhaWwvdXNlcnNkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/humanresource/usersdetail/usersdetail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/humanresource/usersdetail/usersdetail.component.ts ***!
  \********************************************************************/
/*! exports provided: UsersdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersdetailComponent", function() { return UsersdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsersdetailComponent = class UsersdetailComponent {
    constructor() { }
};
UsersdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usersdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usersdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/humanresource/usersdetail/usersdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usersdetail.component.scss */ "./src/app/humanresource/usersdetail/usersdetail.component.scss")).default]
    })
], UsersdetailComponent);



/***/ }),

/***/ "./src/app/login/forgot-password-dialog/forgot-password-dialog.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/login/forgot-password-dialog/forgot-password-dialog.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2ZvcmdvdC1wYXNzd29yZC1kaWFsb2cvZm9yZ290LXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/forgot-password-dialog/forgot-password-dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/login/forgot-password-dialog/forgot-password-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ForgotPasswordDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordDialogComponent", function() { return ForgotPasswordDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ForgotPasswordDialogComponent = class ForgotPasswordDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.forgotPaswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    submit() {
        if (this.forgotPaswordForm.invalid) {
            return;
        }
        this.dialogRef.close();
    }
};
ForgotPasswordDialogComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialogRef"] }
];
ForgotPasswordDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/forgot-password-dialog/forgot-password-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password-dialog.component.scss */ "./src/app/login/forgot-password-dialog/forgot-password-dialog.component.scss")).default]
    })
], ForgotPasswordDialogComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-card {\n  width: 370px;\n  background-color: #f0f0f0;\n}\n\n.demo-card__primary {\n  padding: 1rem;\n}\n\n.demo-card__title {\n  margin: 0;\n}\n\n.spacediv {\n  margin-top: 20px;\n}\n\n.demo-card__media--16-9 {\n  background-image: url(\"/assets/img/certificate.png\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdWxpb1xcT25lRHJpdmVcXEVzY3JpdG9yaW9cXFdFQlxcVGFyZWFzVW5pdmVyc2lkYWRcXFByb3llY3RvRmluYWxcXHByb2plY3RBZG0vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FER0U7RUFDRSxvREFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jYXJkIHtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZW1vLWNhcmRfX3ByaW1hcnkge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmRlbW8tY2FyZF9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuc3BhY2VkaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZGVtby1jYXJkX19tZWRpYS0tMTYtOSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9jZXJ0aWZpY2F0ZS5wbmdcIik7XHJcbiAgfSIsIi5kZW1vLWNhcmQge1xuICB3aWR0aDogMzcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5kZW1vLWNhcmRfX3ByaW1hcnkge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZGVtby1jYXJkX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlZGl2IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRlbW8tY2FyZF9fbWVkaWEtLTE2LTkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9jZXJ0aWZpY2F0ZS5wbmdcIik7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password-dialog/forgot-password-dialog.component */ "./src/app/login/forgot-password-dialog/forgot-password-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginComponent = class LoginComponent {
    constructor(forgotPasworrdDialogC, stateOfSendRequest, router) {
        this.forgotPasworrdDialogC = forgotPasworrdDialogC;
        this.stateOfSendRequest = stateOfSendRequest;
        this.router = router;
        this.user = {
            id: null,
            username: "",
            password: "",
            mail: "",
            role: ""
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userPasword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        else if (this.loginForm.value.user == "Admin" && this.loginForm.value.userPasword == "Admin") {
            this.router.navigate(['mainpage/proyectos']);
        }
    }
    openForgotPaswordDialog() {
        const dialogRef = this.forgotPasworrdDialogC.open(_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordDialogComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
            if (reason != "close") {
                this.simple();
            }
        });
    }
    simple() {
        const snackbarRef = this.stateOfSendRequest.open('Your going to recive and Mail with the next steps');
        snackbarRef.afterDismiss().subscribe(reason => {
            console.log(reason);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialog"] },
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/mytask/mytask.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mytask/mytask.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215dGFzay9teXRhc2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/mytask/mytask.component.ts":
/*!********************************************!*\
  !*** ./src/app/mytask/mytask.component.ts ***!
  \********************************************/
/*! exports provided: MytaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytaskComponent", function() { return MytaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");
/* harmony import */ var _taskdetaildialog_taskdetaildialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../taskdetaildialog/taskdetaildialog.component */ "./src/app/taskdetaildialog/taskdetaildialog.component.ts");
/* harmony import */ var _creartarea_creartarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creartarea/creartarea.component */ "./src/app/creartarea/creartarea.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let MytaskComponent = class MytaskComponent {
    constructor(taskDetailDialog, router, createtaskDialog) {
        this.taskDetailDialog = taskDetailDialog;
        this.router = router;
        this.createtaskDialog = createtaskDialog;
        this.tasks = [
            {
                name: "Contratar especialistas",
                startDate: "11/5/2019",
                duration: "20 días",
                progres: "No iniciada",
                proyect: "Creacion de departamento de calidad"
            },
            {
                name: "Contratar especialistas",
                startDate: "11/5/2019",
                duration: "20 días",
                progres: "No iniciada",
                proyect: "Creacion de departamento de calidad"
            },
            {
                name: "Contratar especialistas",
                startDate: "11/5/2019",
                duration: "20 días",
                progres: "No iniciada",
                proyect: "Creacion de departamento de calidad"
            },
            {
                name: "Contratar especialistas",
                startDate: "11/5/2019",
                duration: "20 días",
                progres: "No iniciada",
                proyect: "Creacion de departamento de calidad"
            },
            {
                name: "Contratar especialistas",
                startDate: "11/5/2019",
                duration: "20 días",
                progres: "No iniciada",
                proyect: "Creacion de departamento de calidad"
            },
        ];
        this.elementVisible = false;
    }
    ngOnInit() {
        if (this.router.url == "/mainpage/tareas") {
            this.elementVisible = true;
        }
    }
    openTaskDetailDialog() {
        const dialogRef = this.taskDetailDialog.open(_taskdetaildialog_taskdetaildialog_component__WEBPACK_IMPORTED_MODULE_3__["TaskdetaildialogComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
    openCreateTaskDialog() {
        this.createtaskDialog.open(_creartarea_creartarea_component__WEBPACK_IMPORTED_MODULE_4__["CreartareaComponent"]);
    }
};
MytaskComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialog"] }
];
MytaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytask',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mytask.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mytask/mytask.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mytask.component.scss */ "./src/app/mytask/mytask.component.scss")).default]
    })
], MytaskComponent);



/***/ }),

/***/ "./src/app/proyectdetailinfo/proyectdetailinfo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/proyectdetailinfo/proyectdetailinfo.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RkZXRhaWxpbmZvL3Byb3llY3RkZXRhaWxpbmZvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/proyectdetailinfo/proyectdetailinfo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/proyectdetailinfo/proyectdetailinfo.component.ts ***!
  \******************************************************************/
/*! exports provided: ProyectdetailinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectdetailinfoComponent", function() { return ProyectdetailinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProyectdetailinfoComponent = class ProyectdetailinfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProyectdetailinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proyectdetailinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proyectdetailinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proyectdetailinfo/proyectdetailinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proyectdetailinfo.component.scss */ "./src/app/proyectdetailinfo/proyectdetailinfo.component.scss")).default]
    })
], ProyectdetailinfoComponent);



/***/ }),

/***/ "./src/app/proyectdetails/proyectdetails.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/proyectdetails/proyectdetails.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3RkZXRhaWxzL3Byb3llY3RkZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/proyectdetails/proyectdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/proyectdetails/proyectdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProyectdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectdetailsComponent", function() { return ProyectdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProyectdetailsComponent = class ProyectdetailsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.navigate(['/mainpage/detalleproyecto/tareas']);
    }
};
ProyectdetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProyectdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proyectdetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proyectdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proyectdetails/proyectdetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proyectdetails.component.scss */ "./src/app/proyectdetails/proyectdetails.component.scss")).default]
    })
], ProyectdetailsComponent);



/***/ }),

/***/ "./src/app/proyects/proyects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/proyects/proyects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-card {\n  width: 350px;\n  margin: 28px;\n}\n\n.demo-card__music-info {\n  display: flex;\n  flex-direction: column;\n  padding: 8px 16px;\n}\n\n.demo-card__action-buttons--text-only {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdHMvQzpcXFVzZXJzXFxqdWxpb1xcT25lRHJpdmVcXEVzY3JpdG9yaW9cXFdFQlxcVGFyZWFzVW5pdmVyc2lkYWRcXFByb3llY3RvRmluYWxcXHByb2plY3RBZG0vc3JjXFxhcHBcXHByb3llY3RzXFxwcm95ZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJveWVjdHMvcHJveWVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm95ZWN0cy9wcm95ZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNhcmQge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAuZGVtby1jYXJkX19tdXNpYy1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZW1vLWNhcmRfX2FjdGlvbi1idXR0b25zLS10ZXh0LW9ubHkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9IiwiLmRlbW8tY2FyZCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAyOHB4O1xufVxuXG4uZGVtby1jYXJkX19tdXNpYy1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5kZW1vLWNhcmRfX2FjdGlvbi1idXR0b25zLS10ZXh0LW9ubHkge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/proyects/proyects.component.ts":
/*!************************************************!*\
  !*** ./src/app/proyects/proyects.component.ts ***!
  \************************************************/
/*! exports provided: ProyectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectsComponent", function() { return ProyectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-proyect/create-proyect.component */ "./src/app/create-proyect/create-proyect.component.ts");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");




let ProyectsComponent = class ProyectsComponent {
    constructor(createProyectComponent) {
        this.createProyectComponent = createProyectComponent;
    }
    ngOnInit() {
    }
    opencreateProyectComponent() {
        const dialogRef = this.createProyectComponent.open(_create_proyect_create_proyect_component__WEBPACK_IMPORTED_MODULE_2__["CreateProyectComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
};
ProyectsComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcDialog"] }
];
ProyectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proyects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proyects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proyects/proyects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proyects.component.scss */ "./src/app/proyects/proyects.component.scss")).default]
    })
], ProyectsComponent);



/***/ }),

/***/ "./src/app/staticData/mainpageHeaderData.ts":
/*!**************************************************!*\
  !*** ./src/app/staticData/mainpageHeaderData.ts ***!
  \**************************************************/
/*! exports provided: headerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerData", function() { return headerData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var headerData = {
    tabs: [
        { label: 'Proyectos', icon: 'folder', path: "proyectos" },
        { label: 'Mis tareas', icon: 'list_alt', path: "tareas" },
        { label: 'Recursos Humanos', icon: 'folder_shared', path: "personal" },
    ],
    helpDrawerActions: [
        {
            label: 'Administrar las notificaciones',
            activated: false
        },
        {
            label: 'Eliminar una tarea o un plan',
            activated: false
        },
        {
            label: 'Crear un plan',
            activated: false
        },
        {
            label: 'Vídeo: Planear un evento',
            activated: false
        },
        {
            label: 'Vídeo: Administrar personal',
            activated: false
        },
        {
            label: 'Vídeo: Tutorial EasyADM',
            activated: false
        }
    ],
    userDrawerActions: [
        { label: 'Cerrar sección', activated: false },
    ],
};


/***/ }),

/***/ "./src/app/staticData/userData.ts":
/*!****************************************!*\
  !*** ./src/app/staticData/userData.ts ***!
  \****************************************/
/*! exports provided: admindata, userdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admindata", function() { return admindata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userdata", function() { return userdata; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var admindata = {
    id: 0,
    username: "Admin",
    password: "Admin",
    mail: "Admin@joptech.com",
    role: "ADM",
};
var userdata = [
    {
        id: 1,
        username: "thendren0",
        password: "12345",
        mail: "thendren0@tuttocitta.it",
        role: "ADM",
        Dni: "252.247.215.56",
        name: "Trevar",
        lastName: "Hendren",
        phone: "252.247.215.56",
        hiringDate: "10/11/2019",
    },
    {
        id: 2,
        username: "rbright1",
        password: "12345",
        mail: "rbright1@npr.org",
        role: "ADM",
        Dni: "210.63.158.110",
        name: "Jason",
        lastName: "Demout",
        phone: "210.63.158.110",
        hiringDate: "19/9/2019",
    },
    {
        id: 3,
        username: "j.ortiz",
        password: "12345",
        mail: "rbright1@npr.org",
        role: "ADM",
        Dni: "210.63.158.110",
        name: "Julio",
        lastName: "Ortiz",
        phone: "210.63.158.110",
        hiringDate: "19/9/2019",
    },
    {
        id: 4,
        username: "p.perez",
        password: "12345",
        mail: "hgrundlee@craigslist.org",
        role: "Normal",
        Dni: "210.63.158.110",
        name: "Pedro",
        lastName: "Perez",
        phone: "210.63.158.110",
        hiringDate: "10/9/2019",
    },
    {
        id: 5,
        username: "L.lora",
        password: "12345",
        mail: "hgrundlee@craigslist.org",
        role: "Normal",
        Dni: "210.63.158.110",
        name: "Leslie",
        lastName: "Lora",
        phone: "210.63.158.110",
        hiringDate: "10/9/2019",
    },
    {
        id: 6,
        username: "hgrundlee",
        password: "12345",
        mail: "hgrundlee@craigslist.org",
        role: "Normal",
        Dni: "210.63.158.110",
        name: "Harp",
        lastName: "Grundle",
        phone: "210.63.158.110",
        hiringDate: "10/9/2019",
    },
    {
        id: 7,
        username: "hgrundlee",
        password: "12345",
        mail: "hgrundlee@craigslist.org",
        role: "Normal",
        Dni: "210.63.158.110",
        name: "Harp",
        lastName: "Grundle",
        phone: "210.63.158.110",
        hiringDate: "10/9/2019",
    },
    {
        id: 8,
        username: "hgrundlee",
        password: "12345",
        mail: "hgrundlee@craigslist.org",
        role: "Normal",
        Dni: "210.63.158.110",
        name: "Harp",
        lastName: "Grundle",
        phone: "210.63.158.110",
        hiringDate: "10/9/2019",
    },
    {
        id: 9,
        username: "hgrundlee",
        password: "12345",
        mail: "hgrundlee@craigslist.org",
        role: "Normal",
        Dni: "210.63.158.110",
        name: "Harp",
        lastName: "Grundle",
        phone: "210.63.158.110",
        hiringDate: "10/9/2019",
    },
];


/***/ }),

/***/ "./src/app/taskdetaildialog/taskdetaildialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/taskdetaildialog/taskdetaildialog.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tkZXRhaWxkaWFsb2cvdGFza2RldGFpbGRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/taskdetaildialog/taskdetaildialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/taskdetaildialog/taskdetaildialog.component.ts ***!
  \****************************************************************/
/*! exports provided: TaskdetaildialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskdetaildialogComponent", function() { return TaskdetaildialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _staticData_userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staticData/userData */ "./src/app/staticData/userData.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _attachfiledialog_attachfiledialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attachfiledialog/attachfiledialog.component */ "./src/app/attachfiledialog/attachfiledialog.component.ts");
/* harmony import */ var _filehistorydialog_filehistorydialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filehistorydialog/filehistorydialog.component */ "./src/app/filehistorydialog/filehistorydialog.component.ts");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm2015/web.js");







let TaskdetaildialogComponent = class TaskdetaildialogComponent {
    constructor(attachfiledialog, doclife) {
        this.attachfiledialog = attachfiledialog;
        this.doclife = doclife;
        this.tabs = [
            { label: 'Documentos', icon: 'insert_drive_file' },
            { label: 'Participantes', icon: 'people' }
        ];
        this.tabcontentflag = true;
        this.condition = false;
        this.usersData = [];
        this.progresstate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            selectprogresstate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('No iniciada')
        });
    }
    ngOnInit() {
        this.usersData = _staticData_userData__WEBPACK_IMPORTED_MODULE_2__["userdata"];
        for (let i = 0; i < this.usersData.length; i++) {
            this.usersData[i].validate = false;
            if (this.usersData[i].role == "ADM") {
                this.usersData[i].validate = true;
            }
        }
    }
    logTab(event) {
        if (event.index == 0) {
            this.tabcontentflag = false;
        }
        else {
            this.tabcontentflag = true;
        }
    }
    openattachfiledialog() {
        const dialogRef = this.attachfiledialog.open(_attachfiledialog_attachfiledialog_component__WEBPACK_IMPORTED_MODULE_4__["AttachfiledialogComponent"]);
        dialogRef.afterClosed().subscribe(reason => {
        });
    }
    openfilehistorydialog() {
        this.doclife.open(_filehistorydialog_filehistorydialog_component__WEBPACK_IMPORTED_MODULE_5__["FilehistorydialogComponent"]);
    }
};
TaskdetaildialogComponent.ctorParameters = () => [
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_6__["MdcDialog"] },
    { type: _angular_mdc_web__WEBPACK_IMPORTED_MODULE_6__["MdcDialog"] }
];
TaskdetaildialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-taskdetaildialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taskdetaildialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskdetaildialog/taskdetaildialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taskdetaildialog.component.scss */ "./src/app/taskdetaildialog/taskdetaildialog.component.scss")).default]
    })
], TaskdetaildialogComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\julio\OneDrive\Escritorio\WEB\TareasUniversidad\ProyectoFinal\projectAdm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map