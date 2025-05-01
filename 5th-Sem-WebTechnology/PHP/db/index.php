<!-- Creating Connection Using Procedural Approach -->
<?php

$servername = 'localhost';
$username = 'root';
$password = ''; # no password because we are using localhost

// creating connection
$conn = mysqli_connect($servername, $username, $password);

// checking connection
if (!$conn) {
    echo ("connection failed: " . mysqli_connect_error()); # shows type of error
    // die("connection failed: " . mysqli_connect_error()); # shows type of error
    # die -> stops the porgram after this line
}
echo "Connected Successfully";



# <!-- Creating Database using Procedural Approach -->
// others same as above
$dbname = "php";

$sql_query = "CREATE DATABASE $dbname";   # recall sql query crate database db_name
if (mysqli_query($conn, $sql_query)) {
    echo "Database created successfully";
} else {
    echo "Error Creating Database: " . mysqli_error($conn);
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    helllo
    <h1>hi</h1>
</body>
</html>