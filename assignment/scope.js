function thePizzeria() {
    var theNumber = 1;

    var michelangelo = function (value) {
        value = (value * 2);
        return value;
    };

    var donatello = function (value, anotherValue) {
        value = anotherValue + value;
        anotherValue = value * anotherValue;
        return anotherValue;
    };

    var leonardo = function (value) {
        var anotherValue = value;
        value *= 4;
        theNumber = value / 2;
        return (value + anotherValue);
    };

    var raphael = function (value, anotherValue, yetAnotherValue) {
        value = value * anotherValue + yetAnotherValue;
        return yetAnotherValue;
    };

    console.log(michelangelo(theNumber) + leonardo(theNumber));
    // ^ Before running the script, what number would you expect the line above to evaluate to?
    console.log('My guess: 7');


    theNumber = theNumber * 2;

    console.log(donatello(theNumber, 2) - raphael(3, 2, theNumber));
    // ^ Before running the script, what number would you expect the line above to evaluate to?
    console.log('My guess: originally 6 but realised I missed the line "theNumber = theNumber *2"');
    console.log('Redid calculations and got 8');

}
thePizzeria();
