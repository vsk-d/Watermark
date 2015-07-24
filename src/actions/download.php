<?php
session_start();
require_once '../config.php';
if(isset($_GET)){
  $url="../img/upload/";
    $name_of_new_file=$_SESSION['result'];
    $filename=$url.$name_of_new_file;
        $file_info = pathinfo($filename);
        header('Content-Disposition: attachment; filename="' . $file_info['basename'] . '"');
        readfile($filename);

  }
