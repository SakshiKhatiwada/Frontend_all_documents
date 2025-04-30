<?php

// Simple Function

function sayHello()
{
    echo "Hello World <br>";
}
sayHello();

// With Parameter
function greet($name)
{
    echo "hello {$name} <br>";
}

greet("Sakshi");

// Parameter Default Value
function greeting($name = "Guest")
{
    echo "hello {$name} <br>";
}
greeting();
greeting("Sakshi");

// Return from function
function multiply($a, $b)
{
    return $a * $b;
}

$product = multiply(3,4);
echo "product: $product";