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
c = 0;
d = 2;
e = 12;
f = -23;
g = -89;
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

/*function count (){
    var currentCount = 0;
    for (var i=1; i<1000; i++) {
    if (i % 3 === 0)
    {
       currentCount = currentCount + 1;
    }
    }
    console.log(currentCount);
}
*/
//Problem 7
function pattern () {
    var x,y,chr;
    for(x=1; x <=6; x++)
        {
            for (y=1; y<x; y++)
                {
                    chr=chr + ("1");
                }

            console.log(chr);
            chr='';
        }
}

function system () {
    for (int i=1; i<=5;i++){
        for(int j=1;j<=5-i;j++){

    System.out.print(" ");
    }

    for(int k=1;k<=i;k++){

    System.out.print(k);
    }

    for(int l=1;l<i;l++){

    System.out.print(i-l);
    }
System.out.println();
    }
}
