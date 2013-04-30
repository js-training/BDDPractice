/**
 * zdom - facade on top of W3C DOM API
 */

/**
 * Factory for znode objects
 * @param {String} selectorOrMarkup
 * @param {Object} attributes
 * @returns {ZNode} ZNode object
 */

zdom = (function () {


    /**
     * Create ZNode object,
     * all methods of znode object should be chainable
     * @param {String} selectorOrMarkup
     * @param {Object} attributes
     * @constructor
     */

    var ZNode = function (selectorOrMarkup, attributes) {

    };

    /**
     * Set attribute for dom node
     * @param {String} name
     * @param {String} value
     * @returns {ZNode}
     */

    ZNode.prototype.attr = function (name, value) {

    };

    /**
     * Set attribute for dom node
     * @param {String} name
     * @returns {ZNode}
     */

    ZNode.prototype.removeAttr = function (name) {

    };


    /**
     * Hide given element  from UI
     * @param {Number} delay - in milliseconds, 0 by default
     */

    ZNode.prototype.hide = function (delay) {

    };


    /**
     * Show given element on UI
     * @param {Number} delay - in milliseconds, 0 by default
     */

    ZNode.prototype.show = function (delay) {

    };

    /**
     * Create ZNode objects,
     * @param {String} selectorOrMarkup
     * @param {Object} attributes
     */

    var factory = function (selectorOrMarkup, attributes) {

    };

    factory.ZNode = ZNode;

    return factory

})();
 