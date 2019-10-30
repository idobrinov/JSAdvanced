
//let pickNumber = Number(prompt("Enter the bumber"));
//alert("Your number is: " + pickNumber);

function myFirstFunc() {
    console.log("my first function");
    function mySecindFunc() {
        console.log("my second function");
    };
    return mySecindFunc;
};

let firstFunc = myFirstFunc();
firstFunc();

module.exports = firstFunc();