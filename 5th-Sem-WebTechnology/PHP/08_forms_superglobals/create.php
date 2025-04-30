<?php
// superglobal variables
// echo "<pre>";
// var_dump($_SERVER,$_GET, $_POST);
// echo "</pre>"

# superglobals
// echo "<pre>";
// var_dump($_FILES);
// echo "</pre>";'

$uploadDir = 'uploads/';
$contactsFile = 'contacts.json';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, "phone", FILTER_SANITIZE_NUMBER_INT);
}

if ($name && $email && $phone && isset($_FILES['image'])) {
    // isset($_FILES['image']): Purpose: Checks if a file has been uploaded through a form with the name "image", Prevents errors. Without isset(), accessing $_FILES['image'] directly when nothing is uploaded will trigger a warning.

    // Ensure the uploads directory exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true); # making directory with full permision: Directory permission 0777 in Unix-based systems grants full read, write, and execute permissions to the user, group, and others.
        // mkdir(directory: $uploadDir, permissions: 0777,recursive: true);
    }

    $imageName = time() . "_" . basename($_FILES['image']['name']); # only gives basename, not the weird entire path
    $imagePath = $uploadDir . $imageName;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $imagePath)) {

        $contacts = file_exists($contactsFile) ? json_decode(file_get_contents($contactsFile)) : [];

        //json_decode converts the contents into associative array

        $contacts[] = [
            "name" => $name,
            "email" => $email,
            "phone" => $phone,
            "image" => $imagePath
        ];

        file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT));
        //JSON_PRETTY_PRINT is optional

        echo "Contact Added: $name ($email, $phone)";
    }else{
        echo "Image upload failed";
    }

} else {
    echo "Invalid Input!";
}
// third parameter is important to prevent any kind of hacking
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>

    <form action="" method="POST" enctype="multipart/form-data">
        <!-- # enctype for file support -->

        <label>Name:</label>
        <input type="text" , name="name">
        <br>
        <label>Phone:</label>
        <input type="text" , name="phone">
        <br>
        <label>email:</label>
        <input type="email" , name="email">
        <br>
        <label>Contact Image:</label>
        <input type="file" , name="image" ,accept="image/*" , required>
        <br>
        <button type="submit">Add Contact</button>

    </form>
</body>

</html>