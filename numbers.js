//Display the largest number
var a = function (num1, num2){

    if (num1 > num2) {
    return (num1);
       } else { (num1 < num2)
    return (num2);

              } }
//Sort out the the 3 numbers and list them in order

var b = function (num1, num2, num3){
    if (num1 > num2 && num1 > num3)
        {
            if (num2 > num3)
            {
                alert(num1 + ", " + num2 + ", " + num3);
            }
            else
            {
                alert(num1 + ", " + num3 + ", " + num2);
            }
        }
    else if (num2 > num1 && num2 > num3)
    {
        if (num1 > num3)
        {
            alert(num2 + ", " + num1 + ", " + num3);
        }
        else
        {
            alert(num2 + ", " + num3 + ", " + num1);
        }
    }
    else if (num3 > num1 && num3 > num2)
    {
        if (num1 > num2)
        {
            alert(num3 + ", " + num1 + ", " + num2);
        }
        else
        {
            alert(num3 + ", " + num2 + ", " + num1);
        }

        }
}

//Find the largest of 5 numbers
var c = 0;
var d = 2;
var e = 12;
var f = -23;
var g = -89;
if (c>d && c>e && c>f && c>g)
{
    alert(c);
}
else if (d>c && d>e && d>f && d>g)
{
    alert(d);
}
else if (e>c && e>d && e>f && e>g)
{
    alert(e);
}
else if (f>c && f>d && f>e && f> g)
{
    alert(f)
}
else
{
    alert (g)
}

//Problem 4

for (var x=0; x<=15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}

//Problem 5

for (var i=1; i<=100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0))
    {
        console.log(i + " Fizz Buzz");
    }
    else if (i % 3 === 0)
    {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0)
    {
        console.log(i + " Buzz");
    }
    else
    {
        console.log(i);
    }
}

//Problem 6

function count (){
    var currentCount = 0;
    for (var i=1; i<1000; i++) {
    if (i % 3 === 0)
    {
       currentCount = currentCount + 1;
    }
    }
    console.log(currentCount);
}

//Problem 8
(function () {
    "use strict";


    var problem8 = function () {
        var numLines, i, j, currentLine;
        numLines = 5;
        //Step 1 : Get Something out on the console!
        //window.console.log(numLines);

        //Step 2 : Get the correct "lines" on the console:
//        for (i = 1; i <= numLines; i = i + 1) {
//            window.console.log(i);
//        }

        //Step 3 : use a nested loop to count up to "i" on each line
//        for (i = 1; i <= numLines; i = i + 1) {
//            currentLine = "";
//            for (j = 1; j <= i; j = j+ 1) {
//                currentLine = currentLine + j;
//            }
//            window.console.log(currentLine);
//        }

        //Step 4 : use a second nested loop to add space to the front of the line
//        for (i = 1; i <= numLines; i = i + 1) {
//
//            currentLine = "";
//            for (j = 1; j <= (numLines - i); j = j + 1) {
//                currentLine = currentLine + " ";
//            }
//
//
//            for (j = 1; j <= i; j = j + 1) {
//                currentLine = currentLine + j;
//            }
//            window.console.log(currentLine);
//        }

        //Step 5: Counting back down to 0;

        for (i = 1; i <= numLines; i = i + 1) {

            currentLine = "";
//            for (j = 1; j <= (numLines - i); j = j + 1) {
//                currentLine = currentLine + " ";
//            }

            //I can use the padStart helper to replace that first string:
            currentLine = currentLine.padStart(numLines - i, " ");


            for (j = 1; j <= i; j = j + 1) {
                currentLine = currentLine + j;
            }

            for (j = i - 1; j > 0; j = j - 1) {
                currentLine = currentLine + j;
            }

            window.console.log(currentLine);
        }
    };

    problem8();
}());

(function () {
    "use strict";
    var problem8 = function (numLines) {
        if(!numLines){
            numLines = 5;
        }
        var i, j, currentLine;
        for (i = 1; i <= numLines; i++) {
            currentLine = "";
            currentLine = currentLine.padStart(numLines - i, " ");
            for (j = 1; j <= i; j++) {
                currentLine += j;
            }
            for (j = i - 1; j > 0; j--) {
                currentLine += j;
            }
            window.console.log(currentLine);
        }
    };

    problem8(8);
}());

//Problem 9
(function () {
    "use strict";
    var problem9 = function (numLines) {
        if(!numLines){
            numLines = 5;
        }
        var i, j, currentLine;
        for (i = 1; i <= numLines; i++) {
            currentLine = "";
            currentLine = currentLine.padStart(numLines - i, " ");
            for (j = 1; j <= i; j++) {
                currentLine += j;
            }
            for (j = i - 1; j > 0; j--) {
                currentLine += j;
            }
            window.console.log(currentLine);
        }
        for (i = numLines - 1; i > 0; i--) {
            currentLine = "";
            currentLine = currentLine.padStart(numLines - i, " ");
            for (j = 1; j <= i; j++) {
                currentLine += j;
            }
            for (j = i - 1; j > 0; j--) {
                currentLine += j;
            }
            window.console.log(currentLine);
        }
    };

    problem9(9);
}());
