<?php
require_once('vendor/autoload.php');
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
	$mainLayer = PHPImageWorkshop\ImageWorkshop::initFromPath('ban.png');

	// Создание слоя с первым изображением
	$imageLayer1 = PHPImageWorkshop\ImageWorkshop::initFromPath('st.png');
	// Ресайз картинки на первом слое
	$imageLayer1->resizeInPixel(180, null, true);
	// Поворот картинки на первом слое
	$imageLayer1->rotate(-15);
	$imageLayer1->opacity(30);
	// Добавление первого слоя поверх основного слоя с фоном
	$mainLayer->addLayerOnTop($imageLayer1, 105, 145, "LT");
    $mainLayer->save('test', 'ban3.png', true, null, 100);
	$image = $mainLayer->getResult();
	header('Content-type: image/jpeg');
	header('Content-Disposition: filename="collage.jpg"');
	imagejpeg($image, null, 100);
	exit;
?>
