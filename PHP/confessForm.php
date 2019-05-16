<?php
    require('connect.php');

    $temp =  isset($_POST['content']) ? $_POST['content'] : null;
    $hastag =  isset($_POST['cfhastag']) ? $_POST['cfhastag'] : null;

   
    $qr = "INSERT INTO `confess`(`id`, `confess`, `hastag`, `user`) VALUES ('','{$temp}','{$hastag}','admin');";
   
    mysqli_query($connect, $qr);

    //ROW DATA
     //$qr = "SELECT * FROM `confess` ORDER BY confess";
     //$result = mysqli_query($connect, $qr);
    //$row = mysqli_fetch_row($result);
    //echo $row[2];

    echo("DONE");
?>