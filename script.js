/**
 * Initializing the input variable with the input element
 */
let input = document.getElementById("Name");

/** 
 * Displaying function using For statement
 * @param {*} e 
 */
let myFunction = function (e) {

    let numbers = [];

    let n = input.value;

    if (!isNaN(n)) {

        if (n <= 0) {
            alert("Please enter a possitive number")
        }
        else {
            for (let i = 1; i <= n; i++) {

                let text = "";

                if (i % 2 === 0 && i % 3 === 0) {
                    text = "foobar";
                } else if (i % 2 === 0) {
                    text = "foo";
                } else {
                    text = (i % 3 === 0 ? "bar" : i);
                }
                numbers.push(text);
            }
            /*Changing the foo div into the array list */
            document.getElementById("foo").appendChild(makeUL(numbers));
        }
    }
    else {
        alert("Please enter a number");
    }
}
/**
 * Displaying function using While
 * @param {*} e 
 */
let myFunctionWithWhile = function (e) {

    let numbers = [];

    let n = input.value;

    let i = 1;
    if (!isNaN(n)) {

        if (n <= 0) {
            alert("Please enter a possitive number")
        }
        else {
            while (i <= n) {

                let text = "";

                if (i % 2 === 0 && i % 3 === 0) {
                    text = "foobar";
                } else if (i % 2 === 0) {
                    text = "foo";
                } else {
                    text = (i % 3 === 0 ? "bar" : i);
                }

                numbers.push(text);

                i++;
            }
            document.getElementById("foo").appendChild(makeUL(numbers));
        }
    }
    else {
        alert("Please enter a number");
    }

}
let myFunctionWithArrays = function (e) {

    let numbers = [];

    let n = input.value;

    if (!isNaN(n)) {

        if (n <= 0) {
            alert("Please enter a possitive number")
        }
        else {
            for (let i = 1; i <= n; i++) {

                if (i % 2 === 0 && i % 3 === 0) {
                    numbers.push("foo bar");
                } else if (i % 2 === 0) {
                    numbers.push("foo");
                } else if(i % 3 === 0) {
                    numbers.push("bar");
                } else{
                    numbers.push(i);
                }
            }
            /*Changing the foo div into the array list */
            document.getElementById("foo").appendChild(makeUL(numbers));
        }
    }
    else {
        alert("Please enter a number");
    }
}

let myFunctionRecursive = function (e) {

    let numbers = [];

    let n = input.value;

    let i = 1;
    if (!isNaN(n)) {

        if (n <= 0) {
            alert("Please enter a possitive number")
        }
        else {
            //numbers.push(printNumbers(n, numbers));
            document.getElementById("foo").appendChild(makeUL(printNumbers(n)));

        }
    }
    else {
        alert("Please enter a number");
    }

}

/**
 * Function that creates an unordered list with the elements in the array
 * @param {*} array 
 * @returns 
 */
function makeUL(array) {
    let list = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        let item = document.createElement("li");
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }

    return list;
}

function printNumbers(n){
    let result = [];
    if(n === 1)
        result.push(1);
    else
        result.push(printNumbers(n-1) + n);
    return Array.from(result);
    }
    
function checkFoo(i) {
    if (i % 2 === 0 && i % 3 === 0) {
        return "foo bar";
    } else if (i % 2 === 0) {
        return "foo";
    } else if(i % 3 === 0) {
        return "bar";
    } else{
        return i;
    }
}