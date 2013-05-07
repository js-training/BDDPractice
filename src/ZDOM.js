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
        this.node = document.createElement(selectorOrMarkup);

        if (attributes) {
            for (name in attributes){
                this.attr(name, attributes[name]);
            }
        }
    };

    /**
     * Set attribute for dom node
     * @param {String} name
     * @param {String} value
     * @returns {ZNode}
     */

    ZNode.prototype.attr = function (name, value) {
        var attr = document.createAttribute(name);
        attr.nodeValue = value;
        this.node.setAttributeNode(attr);
    };

    /**
     * Set attribute for dom node
     * @param {String} name
     * @returns {ZNode}
     */

    ZNode.prototype.removeAttr = function (name) {
        this.node.removeAttribute(name);
    };


    /**
     * Hide given element  from UI
     * @param {Number} delay - in milliseconds, 0 by default
     */

    ZNode.prototype.hide = function (delay) {
        var node = this;
        hideThis = function(){
            node.removeAttr("visibility");
            node.attr("visibility", "hidden");
        } ;

        (delay)? setTimeout(hideThis,delay): hideThis();
    };


    /**
     * Return current element
     */

    ZNode.prototype.node;

    /**
     * Show given element on UI
     * @param {Number} delay - in milliseconds, 0 by default
     */

    ZNode.prototype.show = function (delay) {
        var node = this;
        showThis = function(){
            node.removeAttr("visibility");
            node.attr("visibility", "visible");
        } ;

        (delay)? setTimeout(showThis,delay): showThis();
    };

    /**
     * Create ZNode objects,
     * @param {String} selectorOrMarkup
     * @param {Object} attributes
     */

    var factory = function (selectorOrMarkup, attributes) {
        this.ZNode = new ZNode(selectorOrMarkup, attributes);
    };

    factory.ZNode = ZNode;

    return factory

})();

function forEachIn(object, action) {
    for (var property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            action(property, object[property]);
        }
    }
}

function getObjectSize(obj) {
    var size = 0, key; // get the size data
    for (key in obj) { // check the okeys in the object
        if (obj.hasOwnProperty(key)) size++; // increase the size
    }
    return size; // return the size of the object
}