<?php
require_once '../config.php';
require_once('../vendor/autoload.php');
// устанавливаем путь к папке для загрузки
$uploadDir = "../img/upload/";
$file = $_FILES['files'];
$filename = translit(basename($file['name'][0]));
$data = array();

$createFolders = true;
$backgroundColor = null; // transparent, only for PNG (otherwise it will be white if set null)
$imageQuality = 100; // useless for GIF, usefull for PNG and JPEG (0 to 100%)

$mainLayer = PHPImageWorkshop\ImageWorkshop::initFromPath($file['tmp_name'][0]);  
$width = $mainLayer->getWidth();
$height = $mainLayer->getHeight();
if($_POST['type']=='main-image'){
    $data['koeff']=0;
    if($width>=$height){
        $mainLayer->resizeInPixel(651, null, true);
        $data['koeff'] =$width/651;

    } else {
        $mainLayer->resizeInPixel(null, 534, true);
        $data['koeff']=$height/534;
    }  
} else {
    if(isset($_POST['basicName'])){
        $basicLayer = PHPImageWorkshop\ImageWorkshop::initFromPath($uploadDir.$_POST['basicName']); 
        $basic_width = $mainLayer->getWidth();
        $basic_height = $mainLayer->getHeight();
    }
    $mainLayer->resizeInPixel(($width/$_POST['koeff']), ($height/$_POST['koeff']), false);

}

$mainLayer->save($uploadDir, $filename, $createFolders, $backgroundColor, $imageQuality);


$data['message'] = "ОК";
$data['url'] = $filename;
$data['name'] = $filename;
if(isset($_POST)){
    $count=1;
    foreach($_POST as $key => $value){
        if($key=="type"){
           $data['type']=$value;       
        }
    }
   
}
echo json_encode($data);
exit;

/*
$types = array("image/gif", "image/png", "image/jpeg", "image/pjpeg", "image/x-png");
// Устанавливаем максимальный размер файла
$file_size = 2097152; // 2МБ
// Получаем данные из глобального массива
$file = $_FILES['files'];
// Массив с результатами отработки скрипта
$data = array();

// Если размер файла больше максимально допустимого
if($file['size'][0] > $file_size){
    echo "Файл слишком большой. Загружать можно только изображения (gif|png|jpg|jpeg) размером до 2МБ";
    exit;
    $data['message'] = "Файл слишком большой. Загружать можно только изображения (gif|png|jpg|jpeg) размером до 2МБ";
    $data['url'] = '';
}

// если MYME-type файла не соответствует допустимому
else if(!in_array($file['type'][0], $types)){
    echo "Загружать можно только изображения (gif|png|jpg|jpeg) размером до 2МБ";
    exit;
    $data['message'] = "Загружать можно только изображения (gif|png|jpg|jpeg) размером до 2МБ";
    $data['url'] = '';
}

// Если ошибок нет
else if($file['error'][0] == 0){


    // получаем имя файла
    $filename = basename($file['name'][0]);
    // получаем расширение файла
    $extension = pathinfo($file['name'][0], PATHINFO_EXTENSION);
    // перемещаем файл из временной папки в  нужную
     // $data['name']=$file['tmp_name'][0].' '. $uploadDir.$filename;
    
    if(move_uploaded_file($file['tmp_name'][0], $uploadDir.translit($filename))){
            $data['message'] = "ОК";
            $data['url'] = translit($filename);
            $data['name'] = translit($filename);
    }
    // ошибка при перемещении файла
    else {
        echo "Возникла неизвестная ошибка при загрузке файла";
        exit;
        $data['message'] = "Возникла неизвестная ошибка при загрузке файла";
        $data['url'] = '';
    }
      
}
if(isset($_POST)){
    $count=1;
    foreach($_POST as $key => $value){
        if($key=="type"){
           $data['type']=$value;       
        }
    }
   
}
// Выводим результат в JSON и заверщаем в скрипт
echo json_encode($data);
exit;
*/