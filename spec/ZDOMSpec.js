describe("ZDom", function() {
    describe("ZNode Constructor", function() {
        describe("When 'ZNode' is called without attributes", function() {
            var node = new zdom("div", null);
        it("new node without attributes is created", function() {
                expect(node.ZNode.node.nodeName.toLowerCase()).toBe("div");
                expect(node.ZNode.node.hasAttributes()).toBe(false);
            });
        });
        describe("When 'ZNode' is called with one attribute", function() {
            var attributes = {id: "test_id"};
            var node = new zdom("div", {id: "test_id"});
            it("new node with attribute is created", function() {
                expect(node.ZNode.node.nodeName.toLowerCase()).toBe("div");
                expect(node.ZNode.node.hasAttributes()).toBe(true);
                expect(node.ZNode.node.attributes.length).toEqual(1);
            });
            it("attribute is the same as in the constructor", function() {
                expect(node.ZNode.node.getAttribute("id")).toBe(attributes["id"]);
            });
        });
        describe("When 'ZNode' is called with few attribute", function() {
            var attributes =   {id: "test_id", class: "test_class", some_attribute: "some_value"};
            var node = new zdom("div", attributes);
            it("new node with same amount of attributes is created", function() {
                expect(node.ZNode.node.nodeName.toLowerCase()).toBe("div");
                expect(node.ZNode.node.hasAttributes()).toBe(true);
                expect(node.ZNode.node.attributes.length).toEqual(3);
            });
            it("attributes are the same as in the constructor", function() {
                expect(node.ZNode.node.getAttribute("id")).toBe(attributes["id"]);
                expect(node.ZNode.node.getAttribute("class")).toBe(attributes["class"]);
                expect(node.ZNode.node.getAttribute("some_attribute")).toBe(attributes["some_attribute"]);
            });
        });
    });


    describe("ZNode.attr", function() {
        describe("When 'ZNode.attr' is called for the element that doesn`t have preset attributes", function() {
            var node = new zdom("img", null);
            var attributes = {src: "image.jpg"};
            node.ZNode.attr("src", "image.jpg");

            it("attribute is set for the node", function() {
                expect(node.ZNode.node.hasAttributes()).toBe(true);
                expect(node.ZNode.node.attributes.length).toEqual(1);
                expect(node.ZNode.node.getAttribute("src")).toBe("image.jpg");
            });
        });
        describe("When 'ZNode.attr'is called for the element that already have preset attributes", function() {
            var attributes = {src: "image.jpg"};
            var node =  new zdom("img", attributes);
            node.ZNode.attr("width", "100px");

            it("attribute is set for the node. Node has one more attribute", function() {
                expect(node.ZNode.node.hasAttributes()).toBe(true);
                expect(node.ZNode.node.attributes.length).toEqual(2);
                expect(node.ZNode.node.getAttribute("src")).toBe("image.jpg");
                expect(node.ZNode.node.getAttribute("width")).toBe("100px");
            });
        });
    });

    describe("ZNode.removeAttr", function() {
        describe("When 'ZNode.removeAttr' is called for the element that doesn`t have preset attributes", function() {
            var node = new zdom("img", null);
            node.ZNode.removeAttr("src", "image.jpg");

            it("nothing happens: node still hasn`t attributes", function() {
                expect(node.ZNode.node.hasAttributes()).toBe(false);
            });
        });

        describe("When 'ZNode.removeAttr' is called for the element that has preset attributes", function() {
            var attributes =   {id: "test_id", class: "test_class", some_attribute: "some_value"};
            var node =  new zdom("div", attributes);
            node.ZNode.removeAttr("id");

            it("only the current attribute is removed", function() {
                expect(node.ZNode.node.hasAttributes()).toBe(true);
                expect(node.ZNode.node.attributes.length).toEqual(2);
                expect(node.ZNode.node.getAttribute("id")).toBeNull();
            });
        });

        describe("When 'ZNode.removeAttr' is called for the element that has only one attribute", function() {
            var attributes =   {id: "test_id"};
            var node =  new zdom("div", attributes);
            node.ZNode.removeAttr("id");

            it("node doesn`t have attributes any more", function() {
                expect(node.ZNode.node.hasAttributes()).toBe(false);
            });
        });
    });

    describe("ZNode.hide", function() {
        describe("When 'ZNode.hide' is called without parameters", function() {
            var node = new zdom("img", null);
            it("element is hidden without delay", function() {
                node.ZNode.hide();
                expect(node.ZNode.node.getAttribute("visibility")).toBe("hidden");
            });
        });

        describe("When 'ZNode.hide' is called with delay parameter", function() {
            var node = new zdom("img", null);
            it("element is hidden after delay", function() {
                jasmine.Clock.useMock();
                node.ZNode.hide(50);
                expect(node.ZNode.node.getAttribute("visibility")).toBeNull();

                jasmine.Clock.tick(51);
                expect(node.ZNode.node.getAttribute("visibility")).toBe("hidden");

            });
        });
    });

    describe("ZNode.show", function() {
        describe("When 'ZNode.show' is called without parameters", function() {
            var node = new zdom("img", null);
            it("element is shown without delay", function() {
                node.ZNode.show();
                expect(node.ZNode.node.getAttribute("visibility")).toBe("visible");
            });
        });

        describe("When 'ZNode.show' is called with delay parameter", function() {
            var node = new zdom("img", null);
            it("element is shown after delay", function() {
                jasmine.Clock.useMock();
                node.ZNode.show(50);
                expect(node.ZNode.node.getAttribute("visibility")).toBeNull();

                jasmine.Clock.tick(51);
                expect(node.ZNode.node.getAttribute("visibility")).toBe("visible");

            });
        });
    });
});

