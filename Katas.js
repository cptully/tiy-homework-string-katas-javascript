/**
 * Created by chris on 8/10/16.
 */
/**
 * Created by chris on 8/8/16.
 */


function compareToGauss(number, lowerLimit, upperLimit)
{
    // compares number to a gaussian distribution across a range (2 element array)

    var range = upperLimit - lowerLimit

    if (number < (lowerLimit + ((1.0 - 0.99) * range))) {
        console.log("Your number is more than three standard deviations below the mean")
    } else if (number < (lowerLimit + ((1.0 - 0.95) * range))) {
        console.log("Your number is more than two standard deviations below the mean")
    } else if (number < (lowerLimit + ((1.0 - 0.70) * range))) {
        console.log("Your number is more than one standard deviation below the mean")
    } else if (number > (lowerLimit + (0.70 * range))) {
        console.log("Your number is more than one standard deviation above the mean")
    } else if (number > (lowerLimit + (0.95 * range))) {
        console.log("Your number is more than one standard deviation above the mean")
    } else if (number > (lowerLimit + (0.99 * range))) {
        console.log("Your number is more than one standard deviation above the mean")
    } else {
        console.log("Your number is with in one standard deviation of the mean")
    }
}
//function Katas() {

    /* The parameter weekday is true if it is a weekday, and the parameter vacation is
     true if we are on vacation. We sleep in if it is not a weekday or we're on
     vacation. Return true if we sleep in. */
    function sleepIn(weekday, vacation)
    {
        return !weekday || vacation
    }

    /* We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
     each is smiling. We are in trouble if they are both smiling or if neither of
     them is smiling. Return true if we are in trouble. */
    function monkeyTrouble(aSmile, bSmile)
    {
        return (aSmile && bSmile) || (!aSmile && !bSmile)
    }

    /* Given two int values, return their sum. Unless the two values are the
     same, then return double their sum.*/
    function sumDouble(a, b)
    {
        if (a == b) {
            return 2 * (a + b)
        } else {
            return a + b
        }
    }

    /* Given an n, return the absolute difference between n and 21, except
     return double the absolute difference if n is over 21. */
    function diff21(n)
    {
        if (n > 21) {
            return 2 * Math.abs(21 - n)
        } else {
            return Math.abs(21 - n)
        }
    }

    /* We have a loud talking parrot. The "hour" parameter is the current hour
     time in the range 0..23. We are in trouble if the parrot is talking
     and the hour is before 7 or after 20. Return true if we are in trouble.*/
    function parrotTrouble(talking, hour)
    {
        return talking && ((hour < 7) || (hour > 20))
    }

    /* Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10. */
    function makes10(a, b)
    {
        return (a == 10) || (b == 10) || ((a + b) == 10)
    }

    /* Given an n, return true if it is within 10 of 100 or 200.
     Note: Math.abs(num) computes the absolute value of a number.*/
    function nearHundred(n)
    {
        if ((Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10)) {
            return true
        } else {
            return false
        }
    }

    /* Given 2 int values, return true if one is negative and one is positive. Except
     if the parameter "negative" is true, then return true only if both are negative.*/
    function posNeg(a, b, negative)
    {
        if (!negative && (((a < 0) && (b > 0)) || ((a > 0) && (b < 0)))) {
            return true
        } else return negative && ((a < 0) && (b < 0))
    }

    /* Given a string, return a new string where "not " has been added to the front.
     However, if the string already begins with "not", return the string unchanged.
     Note: use .equals() to compare 2 strings. */
    function notString(str)
    {
        if ((str.length >= 3) && (str.substring(0, 3) =="not")) {
            return str
        } else {
            return "not " + str
        }
    }

    function missingChar(str, n)
    {
        if (str.length < n) {
            return "error!"
        } else {
            if (n == 0) {
                return str.substring(n + 1)
            } else if (n == (str.length - 1)) {
                return str.substring(0, n + 1)
            } else {
                return str.substring(0, n) + str.substring(n + 1)
            }
        }
    }

    /* Given a string, return a new string where the first and last chars have been exchanged. */
    function frontBack(str)
    {
        if (str.length <= 1)  return str
        return str.charAt(str.length - 1) + str.substring(1, str.length - 1) + str.charAt(0)
    }

    /* Given a string, we'll say that the front is the first 3 chars of the string. If the
     string length is less than 3, the front is whatever is there. Return a new string
     which is 3 copies of the front. */
    function front3(str)
    {
        if (str.length < 3) {
            return str + str + str
        } else {
            var first3 = str.substring(0, 3)
            return first3 + first3 + first3
        }
    }

    /* Given a string, take the last char and return a new string with the last char added
     at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.*/
    function backAround(str)
    {
        var last = str.charAt(str.length - 1)
        return last + str + last
    }

    /* Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
     Use the % "mod" operator */
    function or35(n)
    {
        return ((n % 3) == 0) || ((n % 5) == 0)
    }

    /* Given a string, take the first 2 chars and return the string with the 2 chars added
     at both the front and back, so "kitten" yields"kikittenki". If the string length is
     less than 2, use whatever chars are there.*/
    function front22(str)
    {
        if (str.length <= 2) {
            return str + str + str
        } else {
            return str.substring(0, 2) + str + str.substring(0, 2)
        }
    }

    /* Given a string, return true if the string starts with "hi" and false otherwise. */
    function startHi(str)
    {
        if (str.length < 2) return false

        if (str.substring(0, 2) == "hi") {
            return true
        } else {
            return false
        }
    }

    /* Given two temperatures, return true if one is less than 0 and the other is greater than 100.*/
    function icyHot(temp1, temp2)
    {
        return (((temp1 > 100) && (temp2 < 0)) || ((temp1 < 0) && (temp2 > 100)))
    }

    /* Given 2 int values, return true if either of them is in the range 10..20 inclusive. */
    function in1020(a, b)
    {
        return ((a < 21) && (a > 9)) || ((b > 9) && (b < 21))
    }

    /* We'll say that a number is "teen" if it is in the range 13..19 inclusive.
     Given 3 int values, return true if 1 or more of them are teen. */
    function hasTeen(a, b, c)
    {
        return ((a >= 13) && (a <= 19)) ||
            ((b >= 13) && (b <= 19)) ||
            ((c >= 13) && (c <= 19))
    }

    /* We'll say that a number is "teen" if it is in the range 13..19 inclusive.
     Given 2 int values, return true if one or the other is teen, but not both.*/
    function loneTeen(a, b)
    {
        return (((a >= 13) && (a <= 19)) || ((b >= 13) && (b <= 19))) &&
            (!(((a >= 13) && (a <= 19)) && ((b >= 13) && (b <= 19))))
    }

    /* Given a string, if the string "del" appears starting at index 1,
     return a string where that "del" has been deleted. Otherwise, return the
     string unchanged. */
    function delDel(str)
    {
        if ((str.length > 3) && (str.substring(1, 4) == "del")) return str.substring(0, 1) + str.substring(4)
        else return str
    }

    /* Return true if the given string begins with "mix", except the 'm'
     can be anything, so "pix", "9ix" .. all count. */
    function mixStart(str)
    {
        return str.length >= 3 && str.substring(1, 3) =="ix"
    }

    /* Given a string, return a string made of the first 2 chars (if present),
     however include first char only if it is 'o' and include the second only
     if it is 'z', so "ozymandias" yields "oz".*/
    function startOz(str)
    {
        var o
        var z
        if (str.length == 1) {
            o = str.substring(0, 1) == "o" ? "o" : ""
            return o
        }
        if (str.length >= 2) {
            o = str.substring(0, 1) == "o" ? "o" : ""
            z = str.substring(1, 2) == "z" ? "z" : ""
            return o + z
        }
        return ""
    }

    /* Given three int values, a b c, return the largest.*/
    function intMax(a, b, c)
    {
        var maximum = a
        maximum = (maximum > b) ? maximum : b
        maximum = (maximum > c) ? maximum : c
        return maximum
    }

    /* Given 2 int values, return whichever value is nearest to the value 10,
     or return 0 in the event of a tie. Note that Math.abs(n) returns the
     absolute value of a number.*/
    function close10(a, b)
    {
        if (Math.abs(10 - a) == Math.abs(10 - b)) {
            return 0
        } else if (Math.abs(10 - a) > Math.abs(10 - b)) {
            return b
        } else {
            return a
        }
    }

    /* Given 2 int values, return true if they are both in the range 30..40
     inclusive, or they are both in the range 40..50 inclusive.*/
    function in3050(a, b)
    {
        return (((a >= 30) && (a <= 40)) && ((b >= 30) && (b <= 40))) ||
            (((a >= 40) && (a <= 50)) && ((b >= 40) && (b <= 50)))
    }

    /* Given 2 positive int values, return the larger value that is in the
     range 10..20 inclusive, or return 0 if neither is in that range. */
    function max1020(a, b)
    {
        if (((a >= 10) && (a <= 20)) && ((b >= 10) && (b <= 20))) {
            if (a > b) {
                return a
            } else {
                return b
            }
        } else if ((a >= 10) && (a <= 20)) {
            return a
        } else if ((b >= 10) && (b <= 20)) {
            return b
        } else {
            return 0
        }
    }

    /* Return true if the given string contains between 1 and 3 'e' chars.*/
    function stringE(str)
    {
        if (str.indexOf("e") != -1) {
            var count = 0
            var i = 0

            while (count < 4) {
                if ("e" == str.substring(i, i + 1)) {
                    count++
                }
                if (++i >= str.length) {
                    break
                }
            }

            if (count <= 3) return true
        }
        return false
    }

    /* Given two non-negative int values, return true if they have the same last
     digit, such as with 27 and 57. Note that the % "mod" operator computes
     remainders, so 17 % 10 is 7.*/
    function lastDigit(a, b)
    {
        return (a % 10) == (b % 10)
    }

    /* Given a string, return a new string where the last 3 chars are now in upper
     case. If the string has less than 3 chars, uppercase whatever is there. Note
     that str.toUpperCase() returns the uppercase version of a string.*/
    function endUp(str)
    {
        if (str.length < 4) {
            return str.toUpperCase()
        } else {
            String
            last3 = str.substring(str.length - 3)
            return str.substring(0, str.length - 3) + last3.toUpperCase()
        }
    }

    /* Given a non-empty string and an int N, return the string made starting with
     char 0, and then every Nth char of the string. So if N is 3, use char 0, 3,
     6, ... and so on. N is 1 or more. */
    function everyNth(str, n)
    {
        var i = 0
        var newStr = ""
        while (i <= str.length - 1) {
            newStr = newStr + str.substring(i, i + 1)
            i += n
        }
        return newStr
    }

    /* Given a string and a non-negative n, return a larger string that is
     n copies of the original string. */
    function stringTimes(str, n)
    {
        var newStr = ""
        for (var index = 1; index < n; index++) {
            newStr = newStr + str
        }
        return newStr
    }

    function explode(str)
    {
        if (str.length < 2) {
            return str
        } else {
            var buffer = ""
            for (var i = 0; i < str.length; i++) {
                buffer = buffer + str.substring(i, i + 1) + " "
            }
            return buffer
        }
    }

    function frontThree(str){
        if (str.length < 2) {
            return str + str + str
        } else {
            var first3
            first3 = str.substring(0, 3)
            return first3 + first3 + first3
        }
    }

//}



//var kata= new Katas();

// test compareToGauss
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.compareToGauss()")
console.log("compareToGauss(66, 155, 66): ")
compareToGauss(66, 155, 66)

// test sleepIn
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.compareToGauss()")
console.log("sleepIn(false, false)? " + sleepIn(false, false)) // → true
console.log("sleepIn(true, false)? " + sleepIn(true, false)) // → false
console.log("sleepIn(false, true)? " + sleepIn(false, true)) // → true
console.log("sleepIn(true, true)? " + sleepIn(true, true)) // → true

// test monkeyTrouble
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.monkeyTrouble()")
console.log("monkeyTrouble(true, true)): " +   monkeyTrouble(true, true))  // → true	true	OK
console.log("monkeyTrouble(false, false)): " + monkeyTrouble(false, false))  // → true	true	OK
console.log("monkeyTrouble(true, false)): " +  monkeyTrouble(true, false)) // → false	true	X
console.log("monkeyTrouble(false, true)): " +  monkeyTrouble(false, true))  // → false	true	X

// test sumDouble
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.sumDouble()")
console.log("Sum double (1,2)" + sumDouble(1, 2))  // → 3	3	OK
console.log("Sum double (3,2)" + sumDouble(3, 2))  // → 5	5	OK
console.log("Sum double (2,2)" + sumDouble(2, 2))  // → 8	8	OK
console.log("Sum double (-1,0)" + sumDouble(-1, 0))  // → -1	-1	OK
console.log("Sum double (3,3)" + sumDouble(3, 3))  // → 12	12	OK
console.log("Sum double (0,0)" + sumDouble(0, 0))  // → 0	0	OK
console.log("Sum double (0,1)" + sumDouble(0, 1))  // → 1	1	OK
console.log("Sum double (3,4)" + sumDouble(3, 4))  // → 7	7	OK

// test diff21
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.diff21()")
console.log("diff21(19)" + diff21(19))  // → 2	2	OK
console.log("diff21(10)" + diff21(10))  // → 11	11	OK
console.log("diff21(21)" + diff21(21))  // → 0	0	OK
console.log("diff21(22)" + diff21(22))  // → 2	2	OK
console.log("diff21(25)" + diff21(25))  // → 8	8	OK
console.log("diff21(30)" + diff21(30))  // → 18	18	OK
console.log("diff21(0)" + diff21(0))  // → 21	21	OK
console.log("diff21(1)" + diff21(1))  // → 20	20	OK
console.log("diff21(2)" + diff21(2))  // → 19	19	OK
console.log("diff21(-1)" + diff21(-1))  // → 22	22	OK
console.log("diff21(-2)" + diff21(-2))  // → 23	23	OK
console.log("diff21(50)" + diff21(50))  // → 58	58	OK

//test parrotTrouble
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.parrotTrouble()")
console.log("Parrot Trouble (true, 6): " + parrotTrouble(true, 6))  // → true	true	OK
console.log("Parrot Trouble (true, 7): " + parrotTrouble(true, 7))  // → false	false	OK
console.log("Parrot Trouble (false, 6): " + parrotTrouble(false, 6))  // → false	false	OK
console.log("Parrot Trouble (true, 21): " + parrotTrouble(true, 21))  // → true	true	OK
console.log("Parrot Trouble (false, 21): " + parrotTrouble(false, 21))  // → false	false	OK
console.log("Parrot Trouble (false, 20): " + parrotTrouble(false, 20))  // → false	false	OK
console.log("Parrot Trouble (true, 23): " + parrotTrouble(true, 23))  // → true	true	OK
console.log("Parrot Trouble (false, 23): " + parrotTrouble(false, 23))  // → false	false	OK
console.log("Parrot Trouble (true, 20): " + parrotTrouble(true, 20))  // → false	false	OK
console.log("Parrot Trouble (false, 12): " + parrotTrouble(false, 12))  // → false	false	OK

//test makes10
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.makes10()")
console.log("makes 10 (9,10): " + makes10(9, 10))  // → true	true	OK
console.log("makes 10 (9,9): " + makes10(9, 9))  // → false	false	OK
console.log("makes 10 (1,10): " + makes10(1, 9))  // → true	true	OK
console.log("makes 10 (10,1): " + makes10(10, 1))  // → true	true	OK
console.log("makes 10 (10,10): " + makes10(10, 10))  // → true	true	OK
console.log("makes 10 (8,2): " + makes10(8, 2))  // → true	true	OK
console.log("makes 10 (8,3): " + makes10(8, 3))  // → false	false	OK
console.log("makes 10 (10,42): " + makes10(10, 42))  // → true	true	OK
console.log("makes 10 (12,-2): " + makes10(12, -2))  // → true	true	OK

// test nearHundred
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.nearHundred()")
console.log("nearHundred(93): " + nearHundred(93))  // → true	true	OK
console.log("nearHundred(90): " + nearHundred(90))  // → true	true	OK
console.log("nearHundred(89): " + nearHundred(89))  // → false	true	X
console.log("nearHundred(110): " + nearHundred(110))  // → true	true	OK
console.log("nearHundred(111): " + nearHundred(111))  // → false	true	X
console.log("nearHundred(121): " + nearHundred(121))  // → false	true	X
console.log("nearHundred(0): " + nearHundred(0))  // → false	true	X
console.log("nearHundred(5): " + nearHundred(5))  // → false	true	X
console.log("nearHundred(191): " + nearHundred(191))  // → true	true	OK
console.log("nearHundred(189): " + nearHundred(189))  // → false	true	X
console.log("nearHundred(190): " + nearHundred(190))  // → true	true	OK
console.log("nearHundred(200): " + nearHundred(200))  // → true	true	OK
console.log("nearHundred(210): " + nearHundred(210))  // → true	true	OK
console.log("nearHundred(221): " + nearHundred(211))  // → false	true	X
console.log("nearHundred(290): " + nearHundred(290))  // → false	true	X

// test nearHundred
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.posNeg()")
console.log("posNeg(1, -1, false): " + posNeg(1, -1, false))  // → true	true	OK
console.log("posNeg(-1, 1, false): " + posNeg(-1, 1, false))  // → true	true	OK
console.log("posNeg(-4, -5, true): " + posNeg(-4, -5, true))  // → true	true	OK
console.log("posNeg(-4, -5, false): " + posNeg(-4, -5, false))  // → false	true	X
console.log("posNeg(-4, 5, false): " + posNeg(-4, 5, false))  // → true	true	OK
console.log("posNeg(-4, 5, true): " + posNeg(-4, 5, true))  // → false	false	OK
console.log("posNeg(1, 1, false): " + posNeg(1, 1, false))  // → false	false	OK
console.log("posNeg(-1, -1, false): " + posNeg(-1, -1, false))  // → false	true	X
console.log("posNeg(1, -1, true): " + posNeg(1, -1, true))  // → false	false	OK
console.log("posNeg(-1, 1, true): " + posNeg(-1, 1, true))  // → false	false	OK
console.log("posNeg(1, 1, true): " + posNeg(1, 1, true))  // → false	false	OK
console.log("posNeg(-1, -1, true): " + posNeg(-1, -1, true))  // → true	true	OK
console.log("posNeg(5, -5, false): " + posNeg(5, -5, false))  // → true	true	OK
console.log("posNeg(-6, 6, false): " + posNeg(-6, 6, false))  // → true	true	OK
console.log("posNeg(-5, -6, false): " + posNeg(-5, -6, false))  // → false	true	X
console.log("posNeg(-2, -1, false): " + posNeg(-2, -1, false))  // → false	true	X
console.log("posNeg(1, 2, false): " + posNeg(1, 2, false))  // → false	false	OK
console.log("posNeg(-5, 6, true): " + posNeg(-5, 6, true))  // → false	false	OK
console.log("posNeg(-5, -5, true): " + posNeg(-5, -5, true))  // → true

// test nearHundred
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.notString()")
console.log("notString(\"not candy\"): " + notString("candy"))  // → "not candy"	"not candy"	OK
console.log("notString(\"X\"): " + notString("x"))  // → "not x"	"not x"	OK
console.log("notString(\"not bad\"): " + notString("not bad"))  // → "not bad"	"not not bad"	X
console.log("notString(\"bad\"): " + notString("bad"))  // → "not bad"	"not bad"	OK
console.log("notString(\"not\"): " + notString("not"))  // → "not"	"not not"	X
console.log("notString(\"is not\"): " + notString("is not"))  // → "not is not"	"not is not"	OK
console.log("notString(\"no\"): " + notString("no"))  // → "not no"	"not no"

// test nearHundred
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.missingChar()")
console.log("notString(\"kitten\", 1): " + missingChar("kitten", 1))  // → "ktten"	"ktten"	OK
console.log("notString(\"kitten\", 0): " + missingChar("kitten", 0))  // → "itten"	"itten"	OK
console.log("notString(\"kitten\", 4): " + missingChar("kitten", 4))  // → "kittn"	"kittn"	OK
console.log("notString(\"Hi\", 0): " + missingChar("Hi", 0))  // → "i"	"i"	OK
console.log("notString\"Hi\", 1): " + missingChar("Hi", 1))  // → "H"	""	X
console.log("notString(\"code\", 0): " + missingChar("code", 0))  // → "ode"	"ode"	OK
console.log("notString(\"code\", 1): " + missingChar("code", 1))  // → "cde"	"cde"	OK
console.log("notString(\"code\", 2): " + missingChar("code", 2))  // → "coe"	"coe"	OK
console.log("notString(\"code\", 3): " + missingChar("code", 3))  // → "cod"	"co"	X
console.log("notString(\"chocolate\", 8): " + missingChar("chocolate", 8))  // → "chocolat"	"chocola"	X

// test nearHundred
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.frontBack()")
console.log("frontBack(\"code\"): " + frontBack("code"))  // → "eodc"	"eodc"	OK
console.log("frontBack(\"a\"): " + frontBack("a"))  // → "a"	"a"	OK
console.log("frontBack(\"ab\"): " + frontBack("ab"))  // → "ba"	"ba"	OK
console.log("frontBack(\"abc\"): " + frontBack("abc"))  // → "cba"	"cba"	OK
console.log("frontBack(\"\"): " + frontBack(""))  // → ""	""	OK
console.log("frontBack(\"Chocolate\"): " + frontBack("Chocolate"))  // → "ehocolatC"	"ehocolatC"	OK
console.log("frontBack(\"aavJ\"): " + frontBack("aavJ"))  // → "Java"	"Java"	OK
console.log("frontBack(\"hello\"): " + frontBack("hello"))  // → "oellh"	"oellh"	OK

// test nearHundred
console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.front3()")
console.log("front3(\"Java\"): " + front3("Java"))  // → "JavJavJav"	"Java"	X
console.log("front3(\"Chocolate\"): " + front3("Chocolate"))  // → "ChoChoCho"	"Chocolate"	X
console.log("front3(\"abc\"): " + front3("abc"))  // → "abcabcabc"	"abcabcabc"	OK
console.log("front3(\"abcXYZ\"): " + front3("abcXYZ"))  // → "abcabcabc"	"abcXYZ"	X
console.log("front3(\"ab\"): " + front3("ab"))  // → "ababab"	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 3 (line number:5)	X
console.log("front3(\"a\"): " + front3("a"))  // → "aaa"	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 3 (line number:5)	X
console.log("front3(\"\"): " + front3(""))  // → ""	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 3 (line number:5)	X

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.backAround()")
console.log("backAround(\"cat\"): " + backAround("cat"))  // → "tcatt"	"tcatt"	OK
console.log("backAround(\"Hello\"): " + backAround("Hello"))  // → "oHelloo"	"oHelloo"	OK
console.log("backAround(\"a\"): " + backAround("a"))  // → "aaa"	"aaa"	OK
console.log("backAround(\"abc\"): " + backAround("abc"))  // → "cabcc"	"cabcc"	OK
console.log("backAround(\"read\"): " + backAround("read"))  // → "dreadd"	"dreadd"	OK
console.log("backAround(\"boo\"): " + backAround("boo"))  // → "obooo"	"obooo"	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.or35()")
console.log("or35(3): " + or35(3))  // → true	true	OK
console.log("or35(10): " + or35(10))  // → true	true	OK
console.log("or35(8): " + or35(8))  // → false	false	OK
console.log("or35(15): " + or35(15))  // → true	true	OK
console.log("or35(5): " + or35(5))  // → true	true	OK
console.log("or35(9): " + or35(9))  // → true	true	OK
console.log("or35(4): " + or35(4))  // → false	false	OK
console.log("or35(7): " + or35(7))  // → false	false	OK
console.log("or35(6): " + or35(6))  // → true	true	OK
console.log("or35(17): " + or35(17))  // → false	false	OK
console.log("or35(18): " + or35(18))  // → true	true	OK
console.log("or35(29): " + or35(29))  // → false	false	OK
console.log("or35(209): " + or35(20))  // → true	true	OK
console.log("or35(21): " + or35(21))  // → true	true	OK
console.log("or35(22): " + or35(22))  // → false	false	OK
console.log("or35(45): " + or35(45))  // → true	true	OK
console.log("or35(99): " + or35(99))  // → true	true	OK
console.log("or35(100): " + or35(100))  // → true	true	OK
console.log("or35(101): " + or35(101))  // → false	false	OK
console.log("or35(121): " + or35(121))  // → false	false	OK
console.log("or35(122): " + or35(122))  // → false	false	OK
console.log("or35(123): " + or35(123))  // → true	true	OK


console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.front22()")
console.log("front22(\"kitten\"): " + front22("kitten"))  // → "kikittenki"	"kikittenki"	OK
console.log("front22(\"Ha\"): " + front22("Ha"))  // → "HaHaHa"	"HaHaHa"	OK
console.log("front22(\"abc\"): " + front22("abc"))  // → "ababcab"	"ababcab"	OK
console.log("front22(\"ab\"): " + front22("ab"))  // → "ababab"	"ababab"	OK
console.log("front22(\"a\"): " + front22("a"))  // → "aaa"	"aaa"	OK
console.log("front22(\"\"): " + front22(""))  // → ""	""	OK
console.log("front22(\"Logic\"): " + front22("Logic"))  // → "LoLogicLo"	"LoLogicLo"	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.startHi()")
console.log("startHi(\"hi there\"): " + startHi("hi there"))  // → true	false	X
console.log("startHi(\"hi\"): " + startHi("hi"))  // → true	true	OK
console.log("startHi(\"hello hi\"): " + startHi("hello hi"))  // → false	false	OK
console.log("startHi(\"he\"): " + startHi("he"))  // → false	false	OK
console.log("startHi(\"h\"): " + startHi("h"))  // → false	false	OK
console.log("startHi(\"\"): " + startHi(""))  // → false	false	OK
console.log("startHi(\"ho hi\"): " + startHi("ho hi"))  // → false	false	OK
console.log("startHi(\"hi ho\"): " + startHi("hi ho"))  // → true	false	X

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.icyHot()")
console.log("icyHot(120, -1): " + icyHot(120, -1))  // → true	true	OK
console.log("icyHot(-1, 120): " + icyHot(-1, 120))  // → true	true	OK
console.log("icyHot(2, 120): " + icyHot(2, 120))  // → false	false	OK
console.log("icyHot(-1, 100): " + icyHot(-1, 100))  // → false	false	OK
console.log("icyHot(-2, -2): " + icyHot(-2, -2))  // → false	false	OK
console.log("icyHot(120, 120): " + icyHot(120, 120))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.in1020()")
console.log("in1020(12, 99): " + in1020(12, 99))  // → true	true	OK
console.log("in1020(21, 12): " + in1020(21, 12))  // → true	true	OK
console.log("in1020(8, 99): " + in1020(8, 99))  // → false	false	OK
console.log("in1020(99, 10): " + in1020(99, 10))  // → true	true	OK
console.log("in1020(20, 20): " + in1020(20, 20))  // → true	true	OK
console.log("in1020(21, 21): " + in1020(21, 21))  // → false	false	OK
console.log("in1020(9, 9): " + in1020(9, 9))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.hasTeen()")
console.log("in1020(13, 20, 10): " + hasTeen(13, 20, 10))  // → true	true	OK
console.log("in1020(20, 19, 10): " + hasTeen(20, 19, 10))  // → true	true	OK
console.log("in1020(20, 10, 13): " + hasTeen(20, 10, 13))  // → true	true	OK
console.log("in1020(1, 20, 12): " + hasTeen(1, 20, 12))  // → false	false	OK
console.log("in1020(19, 20, 12): " + hasTeen(19, 20, 12))  // → true	true	OK
console.log("in1020(12, 20, 19): " + hasTeen(12, 20, 19))  // → true	true	OK
console.log("in1020(12, 9, 20): " + hasTeen(12, 9, 20))  // → false	false	OK
console.log("in1020(12, 18, 20): " + hasTeen(12, 18, 20))  // → true	true	OK
console.log("in1020(14, 2, 20): " + hasTeen(14, 2, 20))  // → true	true	OK
console.log("in1020(4, 2, 20): " + hasTeen(4, 2, 20))  // → false	false	OK
console.log("in1020(11, 22, 22): " + hasTeen(11, 22, 22))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.loneTeen()")
console.log("loneTeen(13, 99): " + loneTeen(13, 99))  // → true	true	OK
console.log("loneTeen(21, 19): " + loneTeen(21, 19))  // → true	true	OK
console.log("loneTeen(13, 13): " + loneTeen(13, 13))  // → false	false	OK
console.log("loneTeen(14, 20): " + loneTeen(14, 20))  // → true	true	OK
console.log("loneTeen(20, 15): " + loneTeen(20, 15))  // → true	true	OK
console.log("loneTeen(16, 17): " + loneTeen(16, 17))  // → false	false	OK
console.log("loneTeen(16, 9): " + loneTeen(16, 9))  // → true	true	OK
console.log("loneTeen(16, 18): " + loneTeen(16, 18))  // → false	false	OK
console.log("loneTeen(13, 19): " + loneTeen(13, 19))  // → false	false	OK
console.log("loneTeen(13, 20): " + loneTeen(13, 20))  // → true	true	OK
console.log("loneTeen(6, 18): " + loneTeen(6, 18))  // → true	true	OK
console.log("loneTeen(99, 13): " + loneTeen(99, 13))  // → true	true	OK
console.log("loneTeen(99, 99): " + loneTeen(99, 99))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.delDel()")
console.log("delDel(\"adelbc\")): " + delDel("adelbc"))  // → "abc"	"adelbc"	X
console.log("delDel(\"adelHello\")): " + delDel("adelHello"))  // → "aHello"	"adelHello"	X
console.log("delDel(\"adedbc\")): " + delDel("adedbc"))  // → "adedbc"	"adedbc"	OK
console.log("delDel(\"abcdel\")): " + delDel("abcdel"))  // → "abcdel"	"abcdel"	OK
console.log("delDel(\"add\")): " + delDel("add"))  // → "add"	"add"	OK
console.log("delDel(\"ad\")): " + delDel("ad"))  // → "ad"	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 3 (line number:2)	X
console.log("delDel(\"a\")): " + delDel("a"))  // → "a"	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 3 (line number:2)	X
console.log("delDel(\"\")): " + delDel(""))  // → ""	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 3 (line number:2)	X
console.log("delDel(\"del\")): " + delDel("del"))  // → "del"	"del"	OK
console.log("delDel(\"adel\")): " + delDel("adel"))  // → "a"	"adel"	X
console.log("delDel(\"aadelbb\")): " + delDel("aadelbb"))  // → "aadelbb"	"aadelbb"	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.mixStart()")
console.log("mixStart(\"mix snacks\")): " + mixStart("mix snacks"))  // → true	false	X
console.log("mixStart(\"pix snacks\")): " + mixStart("pix snacks"))  // → true	false	X
console.log("mixStart(\"piz snacks\")): " + mixStart("piz snacks"))  // → false	false	OK
console.log("mixStart(\"nix\")): " + mixStart("nix"))  // → true	true	OK
console.log("mixStart(\"8ix\")): " + mixStart("8ix"))  // → true	true	OK
console.log("mixStart(\"ni\")): " + mixStart("ni"))  // → false	false	OK
console.log("mixStart(\"n\")): " + mixStart("n"))  // → false	false	OK
console.log("mixStart(\"\")): " + mixStart(""))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.startOz()")
console.log("startOz(\"ozymandias\")): " + startOz("ozymandias"))  // → "oz"	"o"	X
console.log("startOz(\"bzoo\")): " + startOz("bzoo"))  // → "z"	""	X
console.log("startOz(\"oxx\")): " + startOz("oxx"))  // → "o"	"o"	OK
console.log("startOz(\"oz\")): " + startOz("oz"))  // → "oz"	"o"	X
console.log("startOz(\"ounce\")): " + startOz("ounce"))  // → "o"	"o"	OK
console.log("startOz(\"o\")): " + startOz("o"))  // → "o"	"o"	OK
console.log("startOz(\"abc\")): " + startOz("abc"))  // → ""	""	OK
console.log("startOz(\"\")): " + startOz(""))  // → ""	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 1 (line number:2)	X
console.log("startOz(\"zoo\")): " + startOz("zoo"))  // → ""	""	OK
console.log("startOz(\"aztec\")): " + startOz("aztec"))  // → "z"	""	X
console.log("startOz(\"zzzz\")): " + startOz("zzzz"))  // → "z"	""	X
console.log("startOz(\"oznic\")): " + startOz("oznic"))  // → "oz"	"o"	X

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.intMax()")
console.log("intMax(1, 2, 3)): " + intMax(1, 2, 3))  // → 3	3	OK
console.log("intMax(1, 3, 2)): " + intMax(1, 3, 2))  // → 3	3	OK
console.log("intMax(3, 2, 1)): " + intMax(3, 2, 1))  // → 3	3	OK
console.log("intMax(9, 3, 3)): " + intMax(9, 3, 3))  // → 9	9	OK
console.log("intMax(3, 9, 3)): " + intMax(3, 9, 3))  // → 9	9	OK
console.log("intMax(3, 3, 9)): " + intMax(3, 3, 9))  // → 9	9	OK
console.log("intMax(8, 2, 3)): " + intMax(8, 2, 3))  // → 8	8	OK
console.log("intMax(-3, -1, -2)): " + intMax(-3, -1, -2))  // → -1	-1	OK
console.log("intMax(6, 2, 5)): " + intMax(6, 2, 5))  // → 6	6	OK
console.log("intMax(5, 6, 2)): " + intMax(5, 6, 2))  // → 6	6	OK
console.log("intMax(5, 2, 6)): " + intMax(5, 2, 6))  // → 6	6	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.close10()")
console.log("close10(8, 13)): " + close10(8, 13))  // → 8	8	OK
console.log("close10(13, 8)): " + close10(13, 8))  // → 8	8	OK
console.log("close10(13, 7)): " + close10(13, 7))  // → 0	0	OK
console.log("close10(7, 13)): " + close10(7, 13))  // → 0	0	OK
console.log("close10(9, 13)): " + close10(9, 13))  // → 9	9	OK
console.log("close10(13, 8)): " + close10(13, 8))  // → 8	8	OK
console.log("close10(10, 12)): " + close10(10, 12))  // → 10	10	OK
console.log("close10(11, 10)): " + close10(11, 10))  // → 10	10	OK
console.log("close10(5, 21)): " + close10(5, 21))  // → 5	5	OK
console.log("close10(0, 20)): " + close10(0, 20))  // → 0	0	OK
console.log("close10(10, 10)): " + close10(10, 10))  // → 0	0	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.in3050()")
console.log("in3050(30, 31)): " + in3050(30, 31))  // → true	true	OK
console.log("in3050(30, 41)): " + in3050(30, 41))  // → false	false	OK
console.log("in3050(40, 50)): " + in3050(40, 50))  // → true	true	OK
console.log("in3050(40, 51)): " + in3050(40, 51))  // → false	false	OK
console.log("in3050(39, 50)): " + in3050(39, 50))  // → false	false	OK
console.log("in3050(50, 39)): " + in3050(50, 39))  // → false	false	OK
console.log("in3050(40, 39)): " + in3050(40, 39))  // → true	true	OK
console.log("in3050(49, 48)): " + in3050(49, 48))  // → true	true	OK
console.log("in3050(50, 40)): " + in3050(50, 40))  // → true	true	OK
console.log("in3050(50, 51)): " + in3050(50, 51))  // → false	false	OK
console.log("in3050(35, 36)): " + in3050(35, 36))  // → true	true	OK
console.log("in3050(35, 45)): " + in3050(35, 45))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.max1020()")
console.log("max1020(11, 19)): " + max1020(11, 19))  // → 19	19	OK
console.log("max1020(19, 11)): " + max1020(19, 11))  // → 19	19	OK
console.log("max1020(11,  9)): " + max1020(11,  9))  // → 11	11	OK
console.log("max1020(9,  21)): " + max1020(9,  21))  // → 0	0	OK
console.log("max1020(10, 21)): " + max1020(10, 21))  // → 10	10	OK
console.log("max1020(21, 10)): " + max1020(21, 10))  // → 10	10	OK
console.log("max1020(9,  11)): " + max1020(9,  11))  // → 11	11	OK
console.log("max1020(23, 10)): " + max1020(23, 10))  // → 10	10	OK
console.log("max1020(20, 10)): " + max1020(20, 10))  // → 20	20	OK
console.log("max1020(7,  20)): " + max1020(7,  20))  // → 20	20	OK
console.log("max1020(17, 16)): " + max1020(17, 16))  // → 17	17	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.stringE()")
console.log("stringE(\"Hello\")): " + stringE("Hello"))  // → true	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 5 (line number:7)	X
console.log("stringE(\"Heelle\")): " + stringE("Heelle"))  // → true	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 6 (line number:7)	X
console.log("stringE(\"Heelele\")): " + stringE("Heelele"))  // → false	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 7 (line number:7)	X
console.log("stringE(\"Hll\")): " + stringE("Hll"))  // → false	false	OK
console.log("stringE(\"e\")): " + stringE("e"))  // → true	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: 1 (line number:7)	X
console.log("stringE(\"\")): " + stringE(""))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.stringE()")
console.log("stringE(7,    17)): " + lastDigit(7,    17))  // → true	true	OK
console.log("stringE(6,    17)): " + lastDigit(6,    17))  // → false	false	OK
console.log("stringE(3,   113)): " + lastDigit(3,   113))  // → true	true	OK
console.log("stringE(114, 113)): " + lastDigit(114, 113))  // → false	false	OK
console.log("stringE(114,   4)): " + lastDigit(114,   4))  // → true	true	OK
console.log("stringE(10,    0)): " + lastDigit(10,    0))  // → true	true	OK
console.log("stringE(11,    0)): " + lastDigit(11,    0))  // → false	false	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.endUp()")
console.log("endUp(\"Hello\")): " + endUp("Hello"))  // → "HeLLO"	"HELLO"	X
console.log("endUp(\"hi there\")): " + endUp("hi there"))  // → "hi thERE"	"HI THERE"	X
console.log("endUp(\"hi\")): " + endUp("hi"))  // → "HI"	"HI"	OK
console.log("endUp(\"woo hoo\")): " + endUp("woo hoo"))  // → "woo HOO"	"WOO HOO"	X
console.log("endUp(\"xyz12\")): " + endUp("xyz12"))  // → "xyZ12"	"XYZ12"	X
console.log("endUp(\"x\")): " + endUp("x"))  // → "X"	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: -1 (line number:5)	X
console.log("endUp(\"\")): " + endUp(""))  // → ""	Exception:java.lang.StringIndexOutOfBoundsException: String index out of range: -2 (line number:5)	X

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing Kata.endUp()")
console.log("endUp(\"Miracle\",      2)): " + everyNth("Miracle", 2))  // → "Mrce"	"Mrc"	X
console.log("endUp(\"abcdefg\",      2)): " + everyNth("abcdefg", 2))  // → "aceg"	"ace"	X
console.log("endUp(\"abcdefg\",      3)): " + everyNth("abcdefg", 3))  // → "adg"	"ad"	X
console.log("endUp(\"Chocolate\",    3)): " + everyNth("Chocolate", 3))  // → "Cca"	"Cca"	OK
console.log("endUp(\"Chocolates\",   3)): " + everyNth("Chocolates", 3))  // → "Ccas"	"Cca"	X
console.log("endUp(\"Chocolates\",   4)): " + everyNth("Chocolates", 4))  // → "Coe"	"Coe"	OK
console.log("endUp(\"Chocolates\", 100)): " + everyNth("Chocolates", 100))  // → "C"	"C"	OK

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing explode()")
console.log("explode(\"example\") " + explode("example"))
console.log("explode(\"cat\") " + explode("cat"))
console.log("explode(\"c\") " + explode("c"))
console.log("explode(\"\") " + explode(""))
console.log("explode(\"craft\") " + explode("craft"))
console.log("explode(\"Capital\") " + explode("Capital"))
console.log("explode(\"home time\") " + explode("home time"))

console.log()
console.log("++++++++++++++++++++++++++++++++++++")
console.log("testing frontThree()")
console.log("explode(\"JavaScript\") " + frontThree("JavaScript"))
console.log("explode(\"Chocolate\") " + frontThree("Chocolate"))
console.log("explode(\"abc\") " + frontThree("abc"))
console.log("explode(\"a\") " + frontThree("a"))
console.log("explode(\"\") " + frontThree(""))
console.log("explode(\"Fun Times\") " + frontThree("Fun Times"))
