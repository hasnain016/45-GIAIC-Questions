//  13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var FavTranspt = ["HaviBaike", "HondaCivic", "bicycle", "Train"];
for (var idx = 0; idx < FavTranspt.length; idx++) {
    console.log("I whould Like to own a ".concat(FavTranspt[idx], " "));
}
