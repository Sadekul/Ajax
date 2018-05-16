<?php
    
    $conn = mysql_connect("localhost", "root", "");
    mysql_select_db('searchbox', $conn);

    $s= $_GET['usearch'];

    $sql = "SELECT * FROM name like '%$s%'";
?>