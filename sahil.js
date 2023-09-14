function stringpalindrome(str) {
    const checkval = str === str.split("").reverse("").join("")
    if (checkval === true) {
        return ("string is palindrome");
    }
    else {
        return ("string is not palindrome");
    }
}
  console.log(stringpalindrome("sahiill"));



// function checkpal(number){
//     const palin = number.toString()
//      const drone= number.split("").reverse().join("")
//     if(number===drone)
//     {
//         console.log("string is pal");
//     }
//     else{
//         console.log("string is not pal");
//     }
// }
// checkpal(121