// Task 1:

// ____________________________ Chapter 1 --> Tasks ____________________________

// Task 1: Write a script to greet your website visitor using JS alert box.
alert('Welcome to our webpage');

// Task 2. Write a script to display following message on your web page.
alert('Error! Please enter a valid password.');

// Task 3. Write a script to display following message on your web page: (Hint : Use line break)
alert('Welcome to JS Land....\nHappy Coding!');


// Task 4. Write a script to display following messages in sequence.
alert('Welcome to JS Land....');


// Task 5. Generate the following message through browser’s developer console:
console.log("Hello... I can run JS through my web browser's console");

// ____________________________ Chapter 2 --> Tasks ______________________________
// Task 1: Declare a variable called username.
var username;

// Task 2: Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Muhammad Ahmed";

// Task 3: Write script to
// a) Declare a JS variable, titled message.
var message;

// b) Assign “Hello World” to variable message
message = "Hello World";

// c) Display the message in alert box.
alert(message)

// Task 4: Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "Ahmed";
var studentAge = "19";
var studentCourseName = "Certified Mobile Application Developement";

alert(studentName);
alert(studentAge);
alert(studentCourseName);

// Task 5: Write a script to display the following alert using one JS variable:
// Pizza
// Pizz
// Piz
// Pi
// P
alert('Pizza\nPizz\nPiz\nPi\nP');

// Task 6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "akdevelopers_123@email.com";
alert('My email address is ' + email);

// Task 7: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert(book);

// Task 8: Write a script to display this in browser through JS (Yeh! I can write HTML content through Javascript.)
document.write("Yeh! I can write HTML content through Javascript.");

document.body.innerHTML = "Yah! I can write HTML content through JavaScript"

// Task 8:  Store following string in a variable and show in alert and browser through JS
var stylingstring = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(stylingstring);


// ____________________________ Chapter 3 --> Tasks ____________________________

// Task 1: Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 16
alert('My age is '+ age);

// Task 2: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
alert('You have visited this site 14 times');

// Task 3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser.
var birthYear = 2000;
document.write('My birth year is ' + birthYear + '<br>' );
document.write(' Data type of my declared variable is ' + typeof(birthYear));

// Task 4: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
// a. Visitor’s name
var visitorName = "Jhone";

// b. Product title
var orderqantity = 5;

// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var productname = " T-Shirt(s)"
var storeName = "ww.xyzclothing.comi"
document.write(visitorName + ' ordered ' + orderqantity + productname + ' from ' + storeName );

// ____________________________ Chapter 4 --> Tasks ____________________________

// Task 1: Declare 3 variables in one statement.
var name = "Ahmed" , age = 19 , course = "software developer"
// Task 2: Declare 5 legal & 5 illegal variable names.
// legal variable
var userName = "Ahmed";
var _name = "Khan";
var $price = 500;
var student1 = "AK";
var myVariable = "Hello AK";
console.log(userName + " " + _name + " " + $price + " " + student1 + " " + myVariable)

// illegal variable
// var 1name = "Maaz";
// var my-name = "Ali";
// var var = "Hello";
// var my name = "Ahmed";
// var @price = 500;


// Task 3: Display this in your browser
// a) A heading stating “Rules for naming JS variables”
document.write('<h1>Rules for naming JS variables</h1>');

// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
document.write('<p>Variable names can only contain _ (underscore), $ (dollar), numbers, capital letters and small letters. For example $my_1stVariable.</p>');

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
document.write('<p>Variables must begin with a $, _ or any name. For example $name, _name or name.</p>');

// d) Variable names are case _________
document.write('<p>Variable names are case sensitive.</p>');

// e) Variable names should not be JS _________
document.write('<p>Variable names should not be JS keywords</p>');


// ____________________________ Chapter 5 --> Tasks ____________________________

// Task 1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = 12 , num2 = 3 , addition_of_num1_and_num2 = num1 + num2 ;
document.write( "The sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + addition_of_num1_and_num2);

// Task 2: Repeat task1 for subtraction, multiplication, division & modulus.
// for subtraction
var subtraction_of_num1_and_num2 = num1 - num2 ;
document.write( "The subtraction of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + subtraction_of_num1_and_num2);

// for multiplication
var multiplication_of_num1_and_num2 = num1 * num2 ;
document.write( "The multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + multiplication_of_num1_and_num2);

// for division
var division_of_num1_and_num2 = num1 / num2 ;
document.write( "The division of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + division_of_num1_and_num2);

// for modulus
var modulus_of_num1_and_num2 = num1 % num2 ;
document.write( "The modulus of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + modulus_of_num1_and_num2);

// Task 3:  Do the following using JS Mathematic Expressions
// a. Declare a variable.
var new_variable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write('Value after variable declaration is: ?? <br>');

// c. Initialize the variable with some number.
new_variable = 22;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write('Initial value: ' + new_variable + '<br>');

// e. Increment the variable.
new_variable++

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write('Value after increment is: ' + new_variable + '<br>');

// g. Add 7 to the variable.
var after_ading_num = new_variable + 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write('Value after addition is: ' + after_ading_num + '<br>');

// i. Decrement the variable.
after_ading_num--

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write('Value after decrement is: ' + after_ading_num + '<br>');

// k. Show the remainder after dividing the variable’s value by 3.
var divide_by_3 = after_ading_num / 3;

// l. Output : “The remainder is : 0”.
document.write('Output : The remainder is = ' + divide_by_3 + '<br>');

// Task 4:  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var Num_of_buying_tickets = 5;
var totalTicketCost = ticketPrice * Num_of_buying_tickets;
document.write('One ticket cost is 600 and the total cost of five tickets is: ' + totalTicketCost);

// Task 5: Write a script to display multiplication table of any number in your browser. E.g
document.write('Table of 4 <br>');
var table_of_4 = 4;
document.write(
    '4x1  = ' + table_of_4 + '<br>' + 
    '4x2  = ' + table_of_4*2 + '<br>' + 
    '4x3  = ' + table_of_4*3 + '<br>' + 
    '4x4  = ' + table_of_4*4 + '<br>' + 
    '4x5  = ' + table_of_4*5 + '<br>' + 
    '4x6  = ' + table_of_4*6 + '<br>' + 
    '4x7  = ' + table_of_4*7 + '<br>' + 
    '4x8  = ' + table_of_4*8 + '<br>' + 
    '4x9  = ' + table_of_4*9 + '<br>' + 
    '4x10 = ' + table_of_4*10 + '<br>'
)


// Task 6: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var temp_in_celcius = 27;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var temp_in_F_scale = ((temp_in_celcius * (9/5)) + 32);
document.write(temp_in_celcius + 'C is ' + temp_in_F_scale + 'F' + '<br>')

// c. Now store a Fahrenheit temperature into a variable.
var temp2_in_F_scale = 24;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var tem2_in_C_scale = temp2_in_F_scale - 32 * 5/9 
document.write(temp2_in_F_scale + ' F is ' + tem2_in_C_scale + 'C');

// Task 7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
document.write('<h1>Shopping Cart</h1> <br> <br> <br>')

// a. Price of item 1
var price_of_1st_item = 240
document.write( price_of_1st_item + '<br>')

// b. Price of item 2
var price_of_2nd_item = 370
document.write( price_of_2nd_item + '<br>')

// c. Ordered quantity of item 1
var ordered_quantity_of_item_1 = 12
document.write( ordered_quantity_of_item_1 + '<br>')

// d. Ordered Quantity of item 2
var ordered_quantity_of_item_2 = 25
document.write( ordered_quantity_of_item_2 + '<br>')

// e. Shipping charges
var shipping_charges = 120
document.write( shipping_charges + '<br>')

// Compute the total cost & show the receipt in your browser
var Total = price_of_1st_item * ordered_quantity_of_item_1 + price_of_2nd_item * ordered_quantity_of_item_2 + shipping_charges
document.write('Total cost of your order is ' + Total)

// Task 8:  Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var total_marks = 550;
document.write('Total marks = ' + total_marks + '<br>');

var obtained_marks = 428;
document.write('Obtained marks = ' + obtained_marks + '<br>');

document.write('<strong>Percentage</strong> = ' + obtained_marks / total_marks * 100 + '<br>');

// Task 9:  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 288.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var amount_in_dollar = 10 , amount_in_riyals = 25 , dollar_to_pkr = 288.80 , riyal_in_pkr = 28;
document.write(amount_in_dollar + '$ in PKR is ' + amount_in_dollar * dollar_to_pkr + '<br>' + amount_in_riyals + ' Saudi riyal in PKR is ' + amount_in_riyals * riyal_in_pkr + '<br>');


// Task 10:  Write a program to initialize a variable with some number and do arithmetic in following sequence:
var random_number = Math.random()
document.write(random_number)

var num10 = 23
// a. Add 5
var num11 = num10 + 5

// b. Multiply by 10
var num12 = num11 * 10

// c. Divide the result by 2 Perform all calculations in a single expression
var num13 = num12 / 2
document.write(num13)

// Task 11:  The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
var currentYear = 2026;

// b. Store their birth year in a variable.
var birthYear = 1992;

// c. Calculate their 2 possible ages based on the stored values.
var age = currentYear - birthYear

// Output them to the screen like so: “They are either NN or NN years old”.
document.write(age + '<br>')

// Task 12:  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
var radius = 12
var circumference_of_a_circle = 2 * 3.142 * radius;

// Task 13: Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write('The circumference of a circle is ' + circumference_of_a_circle + '<br>');
var area_of_the_circle = 3.142 * (radius * radius);
document.write('The area of the circle is ' + area_of_the_circle + '<br>')

// Task 14: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable.
var fav_snack = "Lays"
document.write('Favourite Snack : ' + fav_snack + '<br>')

// b. Store your current age into a variable.
var current_age = 22;
document.write('Current age : ' + current_age + '<br>')

// c. Store a maximum age into a variable.
var approx_age = 70;
document.write('Approx age : ' + approx_age + '<br>')

// d. Store an estimated amount per day (as a number).
var estimated_amount_per_day = 50;
document.write('Estimated amount : ' + estimated_amount_per_day + '<br>')

// e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var approx_rest_life_time = approx_age - current_age;
var rest_age_in_days = approx_rest_life_time*12*30
var ammount_required_for_sncak = rest_age_in_days*estimated_amount_per_day

document.write('You will need ' + ammount_required_for_sncak + ' pkr for everyday snack consumption ' + '<br>')

// ____________________________ Chapter 6 - 9 --> Tasks ____________________________

// Task 1: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = 10;
document.write('Result :' + '<br>' + 'The value of a is: ' + a + '<br>' + '...............................' + '<br><br><br>');
// pre increment a by 1
document.write('The value of ++a is :' + ++a + '<br>' + 'Now the Value of a is: ' + a  + '<br><br><br>');
// post increment a by 1
document.write('Now the value of a++ is: '+ a++ + '<br>' + 'Now the Value of a is: ' + a  + '<br><br><br>');

// pre decrement a by 1
document.write('Now the value of a++ is: '+ --a + '<br>' + 'Now the Value of a is: ' + a  + '<br><br><br>');

// post deccrement a by 1
document.write('Now the value of a++ is: '+ a-- + '<br>' + 'Now the Value of a is: ' + a  + '<br><br><br>');



// Task 2: What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
var a = 2 , b = 1 ;

// var result = --a - --b + ++b + b--;
// result = a-1 - b-1 + b+1 + b--(here b returns its last updated value to the expression then it decrease its value by 1 and store it for new line of code operations)
// result = 2-1 - 1-1 + 0+1 + 1
var result = --a - --b + ++b + b--;
document.write(result);

// Explain the output at each stage:
// --a; (fist pre decrement apply on a value like pehly wo a main subtruct kary ga 1 phir a show karae ga)
// - --b; (pehly ye b main se 1 minus kary ga then a ki new after 1 minus value se subtruct kary ga)
// + ++b; (ab ye pehly b main ek plus kary or upper k operation k baad jo value bach gae thi us main add kary ga b ki new value ka)
// + b--; (ab jo new value ayw  hogi upper k operations se us main b ki new latest value add kary ga then phir b main se 1 minus karyga)

// Task 3: Write a program that takes input a name from user & greet the user.
var userName = prompt('Hello! what\'s your name...')
alert('Hello! ' + userName + ', Welcome to our website...')

// Task 4: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var user_table_num_input = prompt('Enter table number that u want to see ', 4);

if (user_table_num_input == 4) {
   document.write(
    '4x1  = ' + table_of_4 + '<br>' + 
    '4x2  = ' + table_of_4*2 + '<br>' + 
    '4x3  = ' + table_of_4*3 + '<br>' + 
    '4x4  = ' + table_of_4*4 + '<br>' + 
    '4x5  = ' + table_of_4*5 + '<br>' + 
    '4x6  = ' + table_of_4*6 + '<br>' + 
    '4x7  = ' + table_of_4*7 + '<br>' + 
    '4x8  = ' + table_of_4*8 + '<br>' + 
    '4x9  = ' + table_of_4*9 + '<br>' + 
    '4x10 = ' + table_of_4*10 + '<br>'
)
 
} else {
    var table_of_5 = 5;
    document.write(
    '5x1  = ' + table_of_5 + '<br>' + 
    '5x2  = ' + table_of_5*2 + '<br>' + 
    '5x3  = ' + table_of_5*3 + '<br>' + 
    '5x4  = ' + table_of_5*4 + '<br>' + 
    '5x5  = ' + table_of_5*5 + '<br>' + 
    '5x6  = ' + table_of_5*6 + '<br>' + 
    '5x7  = ' + table_of_5*7 + '<br>' + 
    '5x8  = ' + table_of_5*8 + '<br>' + 
    '5x9  = ' + table_of_5*9 + '<br>' + 
    '5x10 = ' + table_of_5*10 + '<br>'
    )
}

// Task 5: Take
// a) Take three subjects name from user and store them in 3 different variables.
var sub1 = prompt('Enter your 1st subject Name', 'Maths')
var sub2 = prompt('Enter your 2nd subject Name', 'English')
var sub3 = prompt('Enter your 3rd subject Name', 'Physics')


// b) Total marks for each subject is 100, store it in another variable.
var total_marks_of_each_sub = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
var sub1_marks = prompt('Enter your ' + sub1 + ' marks')

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var sub2_marks = prompt('Enter your ' + sub2 + ' marks')
var sub3_marks = prompt('Enter your ' + sub3 + ' marks')

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var total_obtained_marks = sub1_marks + sub2_marks + sub3_marks
document.write('Total Obtained marks: ' + total_obtained_marks + '<br><br>')

var total_marks_of_all_sub = 300;
document.write('Total marks: ' + total_marks_of_all_sub + '<br><br>')

var obtained_percentage = total_obtained_marks / total_marks_of_all_sub * 100;
document.write('Your percentage is: ' + obtained_percentage + '%' + '<br><br>')


// making table of this student report
// Table heading
document.write('<strong>Subjects &nbsp; &nbsp; &nbsp; &nbsp; Total Marks &nbsp; &nbsp; &nbsp; &nbsp; Obtained Marks</strong> <br><br>');
// Table row 1
document.write(sub1 + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + total_marks_of_each_sub + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + sub1_marks + '<br>');
// Table row 2
document.write(sub2 + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + total_marks_of_each_sub + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + sub2_marks + '<br>');
// Table row 3
document.write(sub3 + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + total_marks_of_each_sub + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + sub3_marks + '<br><br>');


document.write('Total Marks' + '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + total_marks_of_all_sub + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + total_obtained_marks + '<br>');

document.write('Percentage' + '&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + '100%' + ' &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + obtained_percentage + '%<br>');


// ____________________________ Chapter 9 - 11 --> Tasks ____________________________

// Task 1: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city_name_from_user = prompt('Enter your city name...', 'Karachi');

if (city_name_from_user == 'Karachi') {
    alert('Welcome to city of light')
} else {
    prompt('You are in the right place...\nPlease enter your right place', 'Karachi')
}
Task 2: Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var user_gender = prompt('Enter your gender');
if (user_gender == 'male') {
    alert('Good Morning Sir!')    
} else {
    alert('Good Morning Ma\'am')    
}

// Task 3: Write a program to take input color of road traffic signal from the user & show the message according to this table:


// Task 4: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// Task 5: Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Task 6: . Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// Task 7: 
// Task 8: 
// Task 9: 
// Task 10: 
// Task 11: 
// Task 12: 

