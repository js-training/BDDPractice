var utils = {
    /**
     * Sort given array by provided rule in comparator function
     * @param {Array} list
     * @param {Function} comparator
     */

    sort:function (list, comparator) {
        return list.sort(comparator);
    },

    /**
     * Make first letter of given string upper case
     * @param {String} string
     * @return {String} capitalized string
     */

    capitalize:function (string) {
        return string[0].toUpperCase() + string.substr(1, string.length);
    },

    /**
     * Camelize given string
     * @param {String} string
     * @return {String} in camelCase
     */

    camelize:function (string) {
        var temp = new Array();
        var result = "";
        temp = string.split(" ");
        for (var i = 0; i < temp.length; i ++){
            result += this.capitalize(this.trim(temp[i]));
        }
        return result;
    },

    /**
     * Cut of any count of spaces from the beginning and from the end of the string
     * @param {String} str
     * @return {String}
     */

    trim:function (str) {
        var start = 0;
        while (str[start] == " "){
            start++;
        }
        var end = str.length-1;
        while (str[end] == " "){
            end--;
        }
        return str.slice(start, end+1);
    },

    /**
     *  Change each list's element by applying handler
     *  @params {Array|Object} list - input sequence
     *  @params {Function} iterator  - some rule which changes each element
     *  @return {Array} new list with changes elements
     */

    map:function (list, iterator) {
        for (var i = 0; i < list.length; i++){
            list[i] =  iterator(list[i]);
        }
        return list;
    },

    /**
     * Group some input sequence of element by some rule
     * @param {Array} list - input sequence
     * @param {Function} iterator -  provide group id for each element
     * @return {Object} object of group id properties which point to arrays of element from input sequence
     */

    groupBy:function (list, iterator) {
        var result = {};
        for (var i = 0; i < list.length; i++){
           var type = typeof list[i];
            result[type] =  (result[type] === undefined) ? [] : result[type];
            result[type].push(list[i]);
        }
        return result;
    }
};