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
        <?php foreach ($contacts as $contact): ?>
            <li>
                <img src="<?php echo $contact['image']; ?>" height="50" alt="image">
                <?php echo "{$contac['name']} - {$contact['email']}-{$contact['phone']}" ?>
                <a href="delete.php?name=<?php echo "{$contac['name']}" ?>">Delete</a>
            </li>
        <?php endforeach; ?>
    </ul>


</body>

</html>