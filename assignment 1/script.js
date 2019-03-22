//Task 1
function myFunction(firstArray) {
    var mergedArray = firstArray.concat(firstArray);
    console.log(mergedArray);
}
console.log(myFunction([1, 2, 3]))

//Task 2
function objCompare(user1, user2) {
    if (JSON.stringify(user1) === JSON.stringify(user2)) {
        console.log("user1 and user2 are equal");
    } else {
        console.log("user1 and user2 are not equal");
    }

}
console.log(objCompare({ name: "JavaScript", type: "Basic" }, { name: "JavaScript", type: "Basic" }));

//Task 3
function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome("level"));


//Task 4
function calculateDay(dateString) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    console.log("dayName", dayName);
    var lastSunday = new Date(d.setDate(d.getDate() - d.getDay()));
    console.log("lastSunday", lastSunday);
}
calculateDay("August 9,2018");

