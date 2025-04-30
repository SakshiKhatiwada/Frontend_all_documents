<?php

// Indexed Array
$fruits = ['Apple', 'Banana', 'Cherry'];
echo $fruits[0] . "\n";
$fruits[3] = "Dragon Fruit";

echo "<pre>"; # prints like that in page source
var_dump($fruits);
echo "</pre>";

// Mixed Array
$mixedArr = ['apple', 15, false];
echo "<pre>"; # prints like that in page source
var_dump($mixedArr);
echo "</pre>";

// Associative Array
$user = [
    'name' => "Sakshi",
    "age" => 29,
    'hobbies' => ['Coding', "Singing"]
];
// "=>" correspondence

echo $user['name'] . "\n";
echo "<pre>";
var_dump($user);
echo "</pre>";