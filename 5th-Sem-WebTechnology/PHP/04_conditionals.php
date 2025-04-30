<?php

// If-else + comparison operators
/* 
==
===
!= or <>
!==
<
<=
>
>=
*/

$age = 10;
if ($age <= 12) {
    echo "Just a kid, enjoy";
} else if ($age <= 15) {
    echo "Start Exploring";
} else {
    echo "You should study well";
}

//Logical Operators
// &&, ||, !
$age = 24;
$studying = false;

if ($age >= 15 && !$studying) {
    echo "\nYou MUST study!";
}

//Switch 
$day = 3;

switch($day){
    case 1:
        echo "Sunday";
        break;
    case 3: 
        echo "Tuesday";
        break;
    default:
        echo "invalid";

}