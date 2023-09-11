// --------------------USER INPUT & CONDITIONAL STATEMENT---------------------

// ---------------Q1------------

// var city = prompt("where are you from?");

// if(city ="Karachi"){

//     alert("“Welcome to city of lights”");
// }

// --------------Q2-----------

// var gender = prompt("Enter your gender");

// if(gender ==="male"){

//     alert("Good Morning Sir");
// }

// if(gender ==="female"){

//     alert("Good Morning Ma’am");
// }

// --------------Q3-------------

// var  trafficSignal = prompt("Traffic signal color details");

// if(trafficSignal === "red"){
//     alert("Must Stop");
// }

// if(trafficSignal === "yellow"){
//     alert("Ready to move");
// }

// if(trafficSignal === "green"){
//     alert("Move now");
// }

// --------------Q4------------

// var fuel = prompt("how much remainning fuel left in your car?");

// if(fuel <= "0.25litres"){

//     alert("“Please refill the fuel in your car”");
// }

// --------------Q5------

//   var a = 4;

//  if (++a === 5){
//   alert("given condition for variable a is true");
//   }

//  // a. true

//   var b = 82;
//   if (b++ === 83){
//   alert("given condition for variable b is true");
//   }

//  //  b. false

//  var c = 12;
//   if (c++ === 13){
//   alert("condition 1 is true");
//  }

//  // c. false

//   if (c === 13){
//  alert("condition 2 is true");
//   }

// //  c. true

// if (++c < 14){
//  alert("condition 3 is true");
//  }

// //  c. false

//  if(c === 14){
// alert("condition 4 is true");
//  }

// // c. true

//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
//  }

// // // d. true

//    if (true){
//  alert("True");
//   }

//  //  e. true

//   if (false){
//   alert("False");
//   }

//  // e. false

//   if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// //    f. true 

// -------------Q6-------------

//  var totalMarks = 300;

// var marksObtained = +prompt("Enter your marks obtained in three subjects");

//  var percentage = (marksObtained / totalMarks) * 100;

//   var grade ="";

// var remarks = "";

//  if (percentage >=80 && percentage <=100){
//     alert( grade = "A-one",
//     remarks= "Excellent");
//  }

//  if (percentage >=70 && percentage <=80){
//     alert( grade = "A",
//         remarks= "Good");
//  }

//  if (percentage >=60 && percentage <=70){
//     alert( grade = "B",
//         remarks= "You need to improve");
// }

//  if (percentage < 60){
//     alert( grade = "Fail",
//         remarks= "Sorry");
//  }

//  document.write("<h1>" + "Marks Sheet" + "</h1>");

//  document.write("Total Marks : " + totalMarks + "<br>");

//  document.write("Marks Obtained : " + marksObtained + "<br>");

//  document.write("Percentage : " + percentage + " %" + "<br>");

//  document.write("Grade :" + grade + "<br>");

//  document.write("Remarks :" + remarks);


// --------------Q7-------------

// var secret_number = 1;

// user_guess = +prompt("Guess the secret number (between 1 and 10)");

// if (user_guess === secret_number){
//     alert("Bingo! Correct answer");
// }

//  if (user_guess === secret_number + 1){
//      alert("Close enough to the correct answer");
//  }

// else{
//     alert("Sorry, that's not the correct answer. The secret number was", secret_number);
// }

// ------------Q8--------- 

//  var check_number = +prompt("Enter a number");

//   if(check_number % 3 === 0){
  
//       alert("Correct Answer! This number is divisible by 3");
//   }

//   else{
//     alert ("This number is not divisible by 3");
//   }

//-------------Q9---------------

// var number = +prompt("Enter a number");

// if(number % 2 === 0){

//     alert ("This is even number");
// }

// else{
//     alert ("This is odd number");
// }

// -------------Q10-----------

// var temperature = +prompt("Enter a temperature");

// if (temperature >=40 && temperature <=60){
//     alert("“It is too hot outside.”");
// }

// if (temperature >=30 && temperature <=39){
//     alert("“The Weather today is Normal.”");
// }

// if (temperature >=20 && temperature <=29){
//     alert("“Today’s Weather is cool.”");
// }

// if (temperature >=10 && temperature <=19){
//     alert("“OMG! Today’s weather is so Cool.”");
// }

// ------------Q11------------ 

  // var num_1 = +prompt("Enter your first number");

  // var num_2 = +prompt("Enter your second number");

  // var operation = prompt("Enter your operation (+, -, *, /, % )");

  //  var result;
 
  // if (operation === "+"){

  //    alert(result = num_1 + num_2);
  // }

//   if (operation === "-") {
    
//      alert(result = num_1 - num_2);
//   }

//  if (operation === "*") {

//    document.write(result = num_1 * num_2);
//    } 
   
//  if (operation === "/") {

//   if (num_2 === 0) {
//          alert(result = "Error: Division by zero is not allowed.");
//      }
//    else {
//          alert(result = num_1 / num_2);
//      }
// }

//  if (operation === "%") {

//   if (num_2 === 0) {
//        alert(result = "Error: Modulus by zero is not allowed.");
//    } 
//   else {
//         alert(result = num_1 % num_2);
//      }
//  } 


// ---------------------------MATH EXPRESSIONS-----------------

// ---------------Q1-------------

// var a = 10;

// document.write("Result: " + "<br>" + "The value of a is: " + a + "<br>" + "<br>" + "..............................." + "<br>"+ "<br>");

// var result = ++a;

// document.write("The value of ++a is: " + a + "<br>" + "Now the value of a is:" + result + "<br>" + "<br>"+ "<br>");

// var result = a++;

// document.write("The value of a++ is: " + result + "<br>" + "Now the value of a is:" + a + "<br>" + "<br>"+ "<br>");

// var result = --a;

// document.write("The value of --a is: " + result + "<br>" + "Now the value of a is:" + a + "<br>" + "<br>"+ "<br>");

// var result = a--;

// document.write("The value of a-- is: " + result + "<br>" + "Now the value of a is:" + a + "<br>" + "<br>"+ "<br>");

//----------------Q2-------------

// var a = 2, b = 1;

//  var result = --a; 
 // ----------------- (a = 1)------Ans

//  var result = --a - --b;
// //---------------(1)------Ans

//  var result = --a - --b + ++b;
// //---------------(2)------Ans

//  var result = --a - --b + ++b + b--;

//-------------(3)------Ans

// console.log(result);

//  document.write("a = " + a + "<br>" + "b = " + b + "<br>" + "result = " + result);

// ------------------Q3------------

// var fullName = prompt("Enter your name");

// document.write( "Hello! " + fullName + " Welcome to this page.");

// -----------------Q4-------------(Not Available)

//-----------------Q5--------------

//  var num = +prompt("Enter your number" , "5");

// document.write(num + " x 1 = " + num + "<br>");

//  document.write(num + " x 2 = " + num *2 + "<br>");

//  document.write(num + " x 3 = " + num *3 + "<br>");

//  document.write(num + " x 4 = " + num *4 + "<br>");

//  document.write(num + " x 5 = " + num *5 + "<br>");

//  document.write(num + " x 6 = " + num *6 + "<br>");

//  document.write(num + " x 7 = " + num *7 + "<br>");

//  document.write(num + " x 8 = " + num *8 + "<br>");

//  document.write(num + " x 9 = " + num *9 + "<br>");

//  document.write(num + " x 10 = " + num *10 + "<br>");

// -----------------Q6--------------

//   var subject_1 =prompt("Enter your First subject");

// var subject_2 =prompt("Enter your Second subject");

// var subject_3 =prompt("Enter your Third subject");

//  var totalMarksEach = 100;

//  var obtainedMarks_1 = +prompt("Enter your First subject obtained marks");

// var obtainedMarks_2 = +prompt("Enter your Second subject obtained marks");

// var obtainedMarks_3 = +prompt("Enter your Third subject obtained marks");

//  var result_1  = (obtainedMarks_1 / totalMarksEach ) * 100;

// var result_2  = (obtainedMarks_2 / totalMarksEach ) * 100;

// var result_3  = (obtainedMarks_3 / totalMarksEach ) * 100;

// document.write("<td>" + "Subject " + " Total marks " + "Marks obtained " + " Percentage" + "</td>" + "<br>");

//  document.write("<tr>" + subject_1 + "  " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;" + totalMarksEach + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtainedMarks_1 + "  " + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +  result_1 + "%" + "<tr>" + "<br>");

//  document.write("<tr>" + subject_2 + "  " + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;" + totalMarksEach + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +  obtainedMarks_2 + "  " + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + result_2 + "%" + "<tr>" + "<br>");

//  document.write("<tr>" + subject_3 + "  " + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalMarksEach + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtainedMarks_3 + "  " + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + result_3 + "%" + "<tr>" + "<br>");

// var totalMarks = 300;

// var totalObtainedMarks = obtainedMarks_1 + obtainedMarks_2 + obtainedMarks_3;

// var result = (totalObtainedMarks / totalMarks) * 100;

// document.write("<tr>" + " " + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "  " +  totalMarks + "  " + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "  " + totalObtainedMarks + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + " &nbsp;&nbsp;&nbsp;&nbsp;" + result + "%");