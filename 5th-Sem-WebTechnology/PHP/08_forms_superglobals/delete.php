<?php

if (isset($_GET['id'])) {
    $contactsFile = 'contacts.json';
    $contacts = file_exists($contactsFile) ? json_decode(file_get_contents($contactsFile), true) : []; # json_decode's second parameter to true means the returned object will be converted into an associative array instead of a stdClass object

    // Remove the contact by name
    $contacts = array_filter($contacts, fn($c) => $c['id'] !== (int) $_GET['id']);

    file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT));
    echo "contact deleted";
}