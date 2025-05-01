<?php
$contactsFile = 'contacts.json';
$contacts = file_exists($contactsFile) ? json_decode(file_get_contents($contactsFile),true) : [];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>

    <a href="create.php">create a contact</a>

    <ul>

        <!-- common to write for loops in HTML templates -->
        <?php 
        // var_dump($contacts); 
        ?>
        <?php foreach ($contacts as $contact): ?>
            <li>
                <img src="<?php echo $contact['image']; ?>" height="50" alt="image">
                <?php echo "{$contact['name']} - {$contact['email']}-{$contact['phone']}"; ?>
                <a href="delete.php?id=<?php echo "{$contact['id']}"; ?>">Delete</a>
            </li>
        <?php endforeach; ?>
    </ul>


</body>

</html>