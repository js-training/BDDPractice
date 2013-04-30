var navigation = {

    /**
     * Reload page by provided url
     * @param {String} url
     */
    goToPage: function(url){
        this.doRedirect(url);
    },

    doRedirect: function(url){
        window.location = url;
    }
};