<?php
//comments can only be inside after opening php tag

//Variables and Types
/*
string, 
integer
boolean
float or double
null or NULL
array
Object
Resource
*/
$name = "Sakshi";
$age = 20;
$isFemale = true;
$money = 29.99;
$salary = null;
$numstr="123";

// echo "Hello " . $name . "!<br>";
// echo "I am {$age} years old" . "<br>"; // doesn't recognize var in single quotes
// echo $isFemale . "<br>"; # boolean is printed as 1 if printed as string (empty string if 0) or nothing 
// echo $money . "<br>";
// echo $salary . "<br>"; # also empty string

# GET TYPE  
// echo gettype($name) . "<br>";
// echo gettype($age) . "<br>";
// echo gettype($isFemale) . "<br>";
// echo gettype($money) . "<br>";
// echo gettype($salaray) . "<br>";


# PRINTING the whole variable
// print_r($name); # used for arrays too
// echo '<br>';
// var_dump($name); # gives detail about the variable
// echo "<br>";

# CHANGE the value and print the type
$name = 32; # dynamic variable type
echo gettype($name);
echo "<br>";

# Variables checking function
var_dump(is_string($name));
echo "<br>";
var_dump(is_numeric($numstr)); # Determines if the given variable is a number or a numeric string.
echo "<br>";
var_dump(is_int($age));
echo "<br>";
var_dump(is_bool($isFemale));
echo "<br>";
var_dump(is_null($salary));
echo "<br>";
var_dump(is_float($money));
echo "<br>";
var_dump(is_double($money));
echo "<br>";

// if the file ends in php code, closing tag is not mandatory
?>