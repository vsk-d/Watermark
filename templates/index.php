<!DOCTYPE html>
<html lang="ru-Ru">
  <head>
    <title>Генератор водяных знаков</title>
    <meta charset="UTF-8"/>
    <!--SEO-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <!-- build:css css/vendor.min.css -->
    <!-- bower:css-->
    <!-- endbower -->
    <!-- endbuild -->
    
    <!-- build:css fonts/fonts.min.css -->
    <!-- endbuild -->
    <!-- build:css css/main.min.css-->
    <link rel="stylesheet" href="css/main.css"/>
    <!-- endbuild -->
    <!-- build:js js/modernizr.min.js -->
    <!-- endbuild -->
  </head>
  <body>
    <div class="wrapper">
      <main class="main-content">
        <div class="result">
          <h1 class="result__title"><?php echo $data['generator'][$lang]; ?></h1>
          <div class="result__window"></div>
        </div>
        <div class="setting-block">
          <h2 class="setting-block__title"><?php echo $data['settings'][$lang]; ?></h2>
          <form action="" encode="multipart/form-data" class="settings">
            <div class="settings__wrapper">
              <div class="settings__upload">
                <label class="settings__title"><?php echo $data['original_image'][$lang]; ?>
                  <label for="upload-img" class="upload__wrapper">Image.jpg
                    <input type="file" id="upload-img" name="files[]" size="30" data-type="main-image" class="fileupload upload__input upload__input_image hide"/>
                    <input type="hidden" name="fileurl"/>
                  </label>
                </label>
                <label class="settings__title"><?php echo $data['watermark'][$lang]; ?>
                  <label for="upload-water" class="upload__wrapper">Image.png
                    <input type="file" id="upload-water" name="files[]" size="30" data-type="water-image" class="fileupload upload__input upload__input_water-image hide"/>
                    <input type="hidden" name="fileurl"/>
                  </label>
                </label>
              </div>
            </div>

            <div class="settings__wrapper">

              <div class="settings__title"><?php echo $data['position'][$lang]; ?></div>
              <div class="settings__position">
                <div class="settings__field">
                  <div class="field__row">
                    <input type="radio" name="field__part" id="left-up" class="hide"/>
                    <label for="left-up" class="field__cell"></label>
                    <input type="radio" name="field__part" id="middle-up" class="hide"/>
                    <label for="middle-up" class="field__cell"></label>
                    <input type="radio" name="field__part" id="right-up" class="hide"/>
                    <label for="right-up" class="field__cell"></label>
                  </div>
                  <div class="field__row">
                    <input type="radio" name="field__part" id="middle-left" class="hide"/>
                    <label for="middle-left" class="field__cell"></label>
                    <input type="radio" name="field__part" id="middle-middle" class="hide"/>
                    <label for="middle-middle" class="field__cell"></label>
                    <input type="radio" name="field__part" id="middle-right" class="hide"/>
                    <label for="middle-right" class="field__cell"></label>
                  </div>
                  <div class="field__row">
                    <input type="radio" name="field__part" id="down-left" class="hide"/>
                    <label for="down-left" class="field__cell"></label>
                    <input type="radio" name="field__part" id="down-middle" class="hide"/>
                    <label for="down-middle" class="field__cell"></label>
                    <input type="radio" name="field__part" id="down-right" class="hide"/>
                    <label for="down-right" class="field__cell"></label>
                  </div>
                </div>
                <div class="settings__axis">
                  <div class="axis__wrapper">
                    <div class="axis__name">X</div>
                    <input type="text" value="0" data-validation="axis-x" class="axis__input"/>
                    <div class="axis__control">
                      <button name="axis__button_up-x" class="axis__button axis__button_up"></button>
                      <button name="axis__button_down-x" class="axis__button axis__button_down"></button>
                    </div>
                  </div>
                  <div class="axis__wrapper">
                    <div class="axis__name">Y</div>
                    <input type="text" value="0" data-validation="axis-y" class="axis__input"/>
                    <div class="axis__control">
                      <button name="axis__button_up-y" class="axis__button axis__button_up"></button>
                      <button name="axis__button_down-y" class="axis__button axis__button_down"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
            <div class="settings__wrapper">
              <div class="settings__opacity">
                <div class="settings__title"><?php echo $data['opacity'][$lang]; ?></div>
                <input type="range" data-validation="slider" class="settings__slider"/>
              </div>
            </div>
            <div class="btn-wrap">
              <input type="reset" value="Сброс" class="settings__btn settings__btn_reset"/>
              <input type="button" value="Скачать" class="settings__btn settings__btn_download"/>
            </div>
          </form>
        </div>
      </main>
      <aside>
        <ul class="language">
          <li class="language__item"> <a href="rus" class="language__link">РУС</a></li>
          <li class="language__item"> <a href="eng" class="language__link">ENG</a></li>
        </ul><a href="" class="socials__link socials__link_lk"></a>
        <ul class="socials">
          <li class="socials__item"><a href="#" class="socials__link socials__link_fb"><span class="hide">facebook</span></a></li>
          <li class="socials__item"><a href="#" class="socials__link socials__link_tw"><span class="hide">twitter</span></a></li>
          <li class="socials__item"><a href="#" class="socials__link socials__link_vk"><span class="hide">вконтакте</span></a></li>
        </ul>
      </aside>
    </div>
    <footer class="page-footer">
      <p class="page-footer__text">&copy Это мой сайт, пожалуйста, не копируйте и не воруйте его</p>

    </footer>
    <!-- build:js js/vendor.js -->
    <!-- bower:js-->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/jquery-ui/jquery-ui.js"></script>
    <script src="bower_components/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
    <script src="bower_components/jquery-file-upload/js/jquery.iframe-transport.js"></script>
    <script src="bower_components/jquery-file-upload/js/jquery.fileupload.js"></script>
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:js js/main.js -->
    <script src="js/main.js"></script>
    <script src="js/upload.js"></script>
    <!-- endbuild -->
  </body>
</html>