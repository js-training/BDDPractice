describe("When 'sort' was called", function() {
    var inputArray = [1,6,8,9,2,4,7,10];

    it("array should be sorted by provided rule in comparator function", function() {
        var expectedArray = [1,2,4,6,7,8,9,10];
        var comparator = function(a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
            // a must be equal to b
            return 0;
        }
        expect(utils.sort(inputArray, comparator)).toBe(expectedArray);
    });
});

describe("When 'capitalize' was called", function() {
    var firstLetterIsInLowerCase = "jasmine is a behavior-driven development framework for testing JavaScript code";
    var firstLetterIsInUpperCase = "Jasmine is a behavior-driven development framework for testing JavaScript code";
    var firstCharacterIsNotALetter = "1. jasmine is a behavior-driven development framework for testing JavaScript code";

    it("first letter of given string should became upper case", function() {
        var expectedStringStartedWithLetter = "Jasmine is a behavior-driven development framework for testing JavaScript code";
        var expectedStringStartedWithNumber = "1. jasmine is a behavior-driven development framework for testing JavaScript code";

        expect(utils.capitalize(firstLetterIsInLowerCase)).toBe(expectedStringStartedWithLetter);
        expect(utils.capitalize(firstLetterIsInUpperCase)).toBe(expectedStringStartedWithLetter);
        expect(utils.capitalize(firstCharacterIsNotALetter)).toBe(expectedStringStartedWithNumber);
    });
});

describe("When 'camelize' was called", function() {
    var ordinarString = "Jasmine is a behavior driven development framework for testing javascript code";

    it("all spaces in the string whould be removed and string converted to UpperCamelCase", function() {
        var camelCaseString = "JasmineIsABehaviorDrivenDevelopmentFrameworkForTestingJavascriptCode";
        expect(utils.trim(ordinarString)).toBe(camelCaseString);
    });
});


describe("When 'trim' was called", function() {
    var stringWithSpacesAtTheEndAndBeginning = "     Jasmine is a behavior-driven development framework for testing javascript code    ";

    it("cut of any count of spaces from the beginning and from the end of the string", function() {
        var expectedString = "Jasmine is a behavior-driven development framework for testing javascript code";
        expect(utils.trim(stringWithSpacesAtTheEndAndBeginning)).toBe(expectedString);
    });
});


describe("When 'map' was called", function() {
    var inputList = ["first element", "second element", "third element"];

    it("change each list's element by applying handler", function() {
        var expectedList = ["new first element", "new second element", "new third element"];
        var addNewFunction = function(element) {
            return ("new " + element);
        }
        expect(utils.map(inputList, addNewFunction)).toBe(expectedList);
    });
});


describe("When 'groupBy' was called", function() {
    var inputList = [1, "String 1", 2, true, "String 2", false];

    it("object of group id properties which point to arrays of element from input sequence should be returned", function() {
        var expecteObject = {"Number" : [1, 2], "String": ["String 1", "String 2"], "Boolean" : [true, false]};
        var groupByFunction = function(element) {
            return typeof element;
        }
        expect(utils.groupBy(inputList, groupByFunction)).toBe(expecteObject);
    });
});


