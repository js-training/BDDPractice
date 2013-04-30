describe("Navigation", function() {
    describe("When 'goToPage' is called", function() {
        var link = "http://google.com";

        it("page should navigate to the link", function() {
            spyOn(navigation, "doRedirect");
            navigation.goToPage(link);
            expect(navigation.doRedirect).toHaveBeenCalledWith(link);
        });
    });
});

