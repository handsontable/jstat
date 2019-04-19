(function (window, factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define('jstat', factory);
    } else if(typeof exports === 'object') {
        exports['jstat'] = factory();
    } else {
        window['jstat'] = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
