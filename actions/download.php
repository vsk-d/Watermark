<?php
session_start();
require_once '../config.php';
    $name_of_new_file=$_SESSION['result'];
    $filename=$uploadDir.$name_of_new_file;
        $file_info = pathinfo($filename);
        header('Content-Disposition: attachment; filename="watermark.' . $file_info['extension'] . '"');
        readfile($filename);

