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
	"lang" => array("rus" => "Русский язык","eng"=>"English")
	); 


echo $data['lang'][$lang];
?>
<br />
<a href="">На главную</a><br />
<a href="eng">Перейти на английский</a><br />
<a href="rus">Перейти на русский</a><br />
