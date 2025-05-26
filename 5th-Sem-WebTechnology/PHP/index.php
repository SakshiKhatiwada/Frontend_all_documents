<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body>
  <!-- <h1>php practice</h1> -->

  <?php
  $hi = "s";
  echo "Hello php! <br/>";
  echo "Hello php!<br/>";
  echo "Hello" . 'PHP' .
    'hihi'; // concatenation
  print "hi";
  echo "<br>$hi bye";
  $muld = array(
    "breakfast" => ["Walnut", "Roti"],
    "lunch" => ["pulau", "puri"],
    "dinner" => ["roti", "vegetable"],
  );
  print ($muld);
  echo "<br>";
  print_r($muld);
  ?>
  <!-- NOTE php can be written above the html, below, or inside, anywhere -->
  <!-- PHP engine process these and send processed HTML to the browser -->


</body>

</html>