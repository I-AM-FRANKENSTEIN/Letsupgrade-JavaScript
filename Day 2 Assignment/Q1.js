console.log("Question 1:-")
console.log(1 + "2" + "2");     //122-> Addition of integers and strings returns a string.
console.log(1 + +"2" + "2");    //32-> "2" is casted into int. 1+2=3, with 3 a string(2) is concatenated. 
console.log(1 + -"1" + "2");    //02-> "1" is casted into int. 1-1=0, with 0 a string(2) is concatenated.
console.log(+"1" + "1" + "2");  //112-> "1", "1" & "2" are strings. Strings are concatenated.
console.log( "A" - "B" + "2");  //NaN2-> "A" & "B" are strings. Therefore subtraction operation can't be executed.
console.log( "A" - "B" + 2);    //NaN-> "A" & "B" are strings. Therefore subtraction operation can't be executed. And 2(int) can't be added with NaN.