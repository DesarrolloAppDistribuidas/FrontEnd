"use strict";
(self["webpackChunkappDesarrollo"] = self["webpackChunkappDesarrollo"] || []).push([["common"],{

/***/ 6156:
/*!***********************************************************!*\
  !*** ./src/app/app/core/services/reservation.services.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationServices": () => (/* binding */ ReservationServices)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ReservationServices {
    constructor(http) {
        this.http = http;
        this.URL_API = 'https://dad-g3-hotel.herokuapp.com/api/reservations';
        this.reservationSelected = {};
    }
    createReservation(reserv) {
        return this.http.post(this.URL_API, reserv);
    }
}
ReservationServices.ɵfac = function ReservationServices_Factory(t) { return new (t || ReservationServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ReservationServices.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservationServices, factory: ReservationServices.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map