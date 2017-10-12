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

