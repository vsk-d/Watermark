<?php
require_once('../vendor/autoload.php');
$url="../img/upload/";
/*$imagine = new Imagine\Gd\Imagine();
echo "fsgfdgfdg";
$image=$imagine->open('vova.jpg');
$image->rotate(45)
   ->save('new_vova.jpg');*/
 /*  $degrees = 33;
   $mainLayer = PHPImageWorkshop\ImageWorkshop::initFromPath('ban.png');
   $mainLayer->rotate($degrees);
   $mainLayer->save('test', 'ban2.png', true, null, 100);


   $imagePath = 'ban'; // путь до папки с исходными изображениями и шрифтами
	$quality   = 100;               // качество изображения создаваемого коллажа
*/
	// Создание базового слоя с фоном
	if(isset($_POST)){
		$name_of_new_file='result.jpg';
		$mainLayer = PHPImageWorkshop\ImageWorkshop::initFromPath($url.$_POST['genImg']);
		
		$width = $mainLayer->getWidth();
		$height = $mainLayer->getHeight();

	    if(($width > $primary_width)or($heiht>$primary_height)){
	        if($width>=$height){
	            $mainLayer->resizeInPixel($primary_width, null, true);

	        } else {
	            $mainLayer->resizeInPixel(null, $primary_height, true);
	        }  
	    }

		// Создание слоя с первым изображением
		$imageLayer1 = PHPImageWorkshop\ImageWorkshop::initFromPath($url.$_POST['waterImg']);
		$imageLayer1->opacity($_POST['opacity']);
		$mainLayer->addLayerOnTop($imageLayer1,$_POST['axis-x'], $_POST['axis-y'], "LT");
	    $mainLayer->save($url, 'result_'.$_POST['genImg'], true, null, 100);
		$image = $mainLayer->getResult();
	}


		$data['name']='result_'.$_POST['genImg'];
		echo json_encode($data);
	/*header('Content-type: image/jpeg');
	header('Content-Disposition: filename="collage.jpg"');
	imagejpeg($image, null, 100);*/
/*	$file=$url.$name_of_new_file;
	if (file_exists($file)) {
		header('X-SendFile: ' . realpath($url));
		header('Content-Type: application/octet-stream');
		header('Content-Disposition: attachment; filename=' . basename($name_of_new_file));

		exit;
*/
	/*	$filename = $file;
		$file_info = pathinfo($filename);
		header('Content-Disposition: attachment; filename="' . $file_info['basename'] . '"');
		readfile($filename);*/

	//}
?>