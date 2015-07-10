<?php
//error_reporting(0);
// Открываем сессию
session_start();
require_once 'config.php';
$page = $_GET['page'];

$page=strtolower($page);
if(empty($page)){
	if(!isset($_SESSION['lang'])){
		$lang='eng';
		$_SESSION['lang']=$lang;
	}else{
		$lang=$_SESSION['lang'];
	}
} else if($page=='rus'){
	$lang="rus";
	$_SESSION['lang']=$lang;
} else if($page=='eng'){
	$lang="eng";
	$_SESSION['lang']=$lang;
} else {
	$lang="rus";
	$_SESSION['lang']=$lang;
}
$data = array(
	"title" => array("rus" => "титул","eng"=>"title"),
	"lang" => array("rus" => "Русский язык","eng"=>"English"),
	"generator" => array("rus" => "Генератор водяных знаков","eng"=>"Watermark generator"),
 	"settings" => array("rus" => "Настройки","eng"=>"Settings"),
	"original_image" => array("rus" => "Исходное изображение","eng"=>"Original image"),
	"watermark" => array("rus" => "Водяной знак","eng"=>"Watermark"),
	"position" => array("rus" => "Положение","eng"=>"Position"),
	"opacity" => array("rus" => "Прозрачность","eng"=>"Opacity"),

	); 


//echo $data['lang'][$lang];
require_once 'templates/index.php';
?>
