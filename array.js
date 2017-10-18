//JavaScript Objects and Arrays
//Problem 1
function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

console.log(formatDate(new Date()));

//Problem 2
year = window.prompt("Input a Year: ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
alert(x);

//Problem 3
function fiveInARow(array) {

  return function _five(array, prev, n) {
    if (n >= 5)        return true;
    if (!array.length) return false;

    var next = array.shift();
    return _five(array, next, next === prev ? n : next >= prev ? n+1 : 0);
  }(array, -999999, 5);

}
//Problem 4
var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); // You can define the comparing function here.
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);

//Problem 5
first = function(array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    return array.slice(0, n)
};
//Problem 6
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
//Problem 7
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m;
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
//Problem 9
function find_duplicate_in_array(arra1) {
  var i,
  len=arra1.length,
  result = [],
  obj = {};
  for (i=0; i<len; i++)
  {
  obj[arra1[i]]=0;
  }
  for (i in obj) {
  result.push(i);
  }
  return result;
  }
var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
console.log(find_duplicate_in_array(arr));
//Problem 10
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

reverseString("hello");
//Problem 11
// Write a JavaScript function that checks whether a passed string is palindrome or not?

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
// Check whether the string is empty or not
	if(cstr==="") {
		alert("Nothing found!");
		return false;
	}
// Check if the length of the string is even or odd
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
// If the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			alert("Entry is a palindrome.");
			return true;
		} else {
// If the length of the string is odd ignore middle character
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			alert("Entry is not a palindrome.");
			return false;
		}
	}
	alert("The entry is a palindrome.");
	return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');
//Problem 12
//Write a JavaScript function that generates all combinations of a string.
function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++)
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");
//Problem 13
function alphabet_order(str)
    {
        return str.split('').sort().join('');
    }
console.log(alphabet_order("nice"))
//Problem 14
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];

  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
//Problem 15
var str = "Thequickbrownfoxjumpsoverthelazydog";
str.split("").filter(function(x, n, s) { return s.indexOf(x) == n }).join("");

//JavaScript Recursion
//Problem 1
function factorial(x)
{
    if (x === 0)
    {
        return 1;
    }
        return x * factorial(x-1);
}
console.log(factorial(5));
//Problem 2
var range = function(start_num, end_num)
{
    if (end_num - start_num === 2)
        {
            return [start_num - 1];
        }
    else
        {
            var list = range(start_num, end_num - 1);
            list.push(end_num - 1);
            return list;
        }
};

console.log(range(2,50));
//Problem 3
var exponent = function(a, n)
{
   if (n === 0)
   {
    return 1;
    }
  else
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(8, 2));
//Problem 4
function merge_sort(left_part, right_part)
{
    var i = 0;
    var j = 0;
    var results = [];

    while (i < left_part.length || j < right_part.length) {
        if (i === left_part.length) {
            // j is the only index left_part
            results.push(right_part[j]);
            j++;
        }
        else if (j === right_part.length || left_part[i] <= right_part[j]) {
            results.push(left_part[i]);
            i++;
        } else {
            results.push(right_part[j]);
            j++;
        }
    }
    return results;
}

console.log(merge_sort([1,3,4], [3,7,9]));
