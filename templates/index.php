<!DOCTYPE html>
<html lang="ru-Ru">
  <head>
    <title>Генератор водяных знаков</title>
    <meta charset="UTF-8"/>
    <!--SEO-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="icon" href="img/favicon.ico"/>
    <!-- build:css css/vendor.min.css -->
    <!-- bower:css-->
    <!-- endbower -->
    <!-- endbuild -->
    
    <!-- build:css fonts/fonts.min.css -->
    <!-- endbuild -->
    <!-- build:css css/main.min.css-->
    <link rel="stylesheet" href="bower_components/jquery-ui/themes/base/jquery-ui.css"/>
    <link rel="stylesheet" href="css/main.css"/>
    <!-- endbuild -->
    <!-- build:js js/modernizr.min.js -->
    <!-- endbuild -->
  </head>
  <body>
    <div class="wrapper">
      <main class="main-content">
        <div class="result">
          <h1 class="result__title"><? echo $data['generator'][$lang]; ?></h1>
          <div class="result__window">
            <div class="result__wrap">
              <div class="result__wrap-water"></div>
            </div>
          </div>
        </div>
        <div class="setting-block">
          <h2 class="setting-block__title"><? echo $data['settings'][$lang]; ?></h2>
          <form action="actions/img.php" encode="multipart/form-data" class="settings">
            <div class="settings__wrapper">
              <div class="settings__upload">
                <label class="settings__title"><? echo $data['original_image'][$lang]; ?>
                  <label for="upload-img" class="upload__wrapper"><span>Image.jpg</span>
                    <input type="file" id="upload-img" name="files[]" size="30" data-form-data="{&quot;type&quot;: &quot;main-image&quot;}" class="fileupload upload__input upload__input_image hide"/>
                    <input type="hidden" name="genImg"/>
                  </label>
                </label>
                <label class="settings__title"><? echo $data['watermark'][$lang]; ?>
                  <label for="upload-water" class="upload__wrapper disabled"><span>Image.png</span>
                    <input type="file" id="upload-water" name="files[]" size="30" data-form-data="{&quot;type&quot;: &quot;water-image&quot;}" disabled="disabled" class="fileupload upload__input upload__input_water-image hide"/>
                    <input type="hidden" name="waterImg"/>
                  </label>
                </label>
              </div>
            </div>
            <div class="settings__wrapper">
              <div class="settings__position tabs">
                <div class="settings__title"><? echo $data['position'][$lang]; ?></div>
                <ul class="tabs__control">
                  <li class="tabs-control__item single active"><a href="#" class="tabs-control__link tabs-control__link_single off"><span class="hide">Одиночный</span></a></li>
                  <li class="tabs-control__item multy enabled"><a href="#" class="tabs-control__link tabs-control__link_tile off"><span class="hide">Замостить</span></a></li>
                </ul>
                <ul class="tabs__list">
                  <li class="tabs__item active">
                    <div class="settings__field">
                      <div class="field__row">
                        <input type="radio" name="field__part" id="left-up" data-position="left top" class="hide positioningBtn"/>
                        <label for="left-up" class="field__cell"></label>
                        <input type="radio" name="field__part" id="middle-up" data-position="center top" class="hide positioningBtn"/>
                        <label for="middle-up" class="field__cell"></label>
                        <input type="radio" name="field__part" id="right-up" data-position="right top" class="hide positioningBtn"/>
                        <label for="right-up" class="field__cell"></label>
                      </div>
                      <div class="field__row">
                        <input type="radio" name="field__part" id="middle-left" data-position="left center" class="hide positioningBtn"/>
                        <label for="middle-left" class="field__cell"></label>
                        <input type="radio" name="field__part" id="middle-middle" data-position="center center" class="hide positioningBtn"/>
                        <label for="middle-middle" class="field__cell"></label>
                        <input type="radio" name="field__part" id="middle-right" data-position="right center" class="hide positioningBtn"/>
                        <label for="middle-right" class="field__cell"></label>
                      </div>
                      <div class="field__row">
                        <input type="radio" name="field__part" id="down-left" data-position="left bottom" class="hide positioningBtn"/>
                        <label for="down-left" class="field__cell"></label>
                        <input type="radio" name="field__part" id="down-middle" data-position="center bottom" class="hide positioningBtn"/>
                        <label for="down-middle" class="field__cell"></label>
                        <input type="radio" name="field__part" id="down-right" data-position="right bottom" class="hide positioningBtn"/>
                        <label for="down-right" class="field__cell"></label>
                      </div>
                    </div>
                    <div class="settings__axis">
                      <div class="axis__wrapper">
                        <div class="axis__name">X</div>
                        <input type="text" value="0" id="control-x" name="axis-x" class="axis__input"/>
                        <div class="axis__control axis__control-x"><a href="#" class="axis__button axis__button_up singleBtn"></a><a href="#" class="axis__button axis__button_down singleBtn"></a></div>
                      </div>
                      <div class="axis__wrapper">
                        <div class="axis__name">Y</div>
                        <input type="text" value="0" id="control-y" name="axis-y" class="axis__input"/>
                        <div class="axis__control axis__control-y"><a href="#" class="axis__button axis__button_up singleBtn"></a><a href="#" class="axis__button axis__button_down singleBtn"></a></div>
                      </div>
                    </div>
                  </li>
                  <li class="tabs__item tabs__item_tile">
                    <div class="settings__field">
                      <div class="indicator_width"></div>
                      <div class="indicator_height"></div>
                    </div>
                    <div class="settings__axis">
                      <div class="axis__wrapper">
                        <div class="axis__name axis__name_height"></div>
                        <input type="text" value="0" name="axis-height" class="axis__input"/>
                        <div class="axis__control axis__control_height"><a href="#" class="axis__button axis__button_heigt_up MultiBtn"></a><a href="#" class="axis__button axis__button_heigt_down MultiBtn"></a></div>
                      </div>
                      <div class="axis__wrapper">
                        <div class="axis__name axis__name_width"></div>
                        <input type="text" value="0" name="axis-width" class="axis__input"/>
                        <div class="axis__control axis__control_width"><a href="#" class="axis__button axis__button_width_up MultiBtn"></a><a href="#" class="axis__button axis__button_width_down MultiBtn"></a></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="settings__wrapper">
              <div class="settings__opacity">
                <div class="settings__title"><? echo $data['opacity'][$lang]; ?></div>
                <div class="slider">
                  <div id="slider-range-min">
                    <input type="text" value="100" data-validation="opacity" name="opacity" class="opacity__input"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-wrap">
              <input type="reset" value="<? echo $data['cancel'][$lang]; ?>" name="reset" class="settings__btn settings__btn_reset"/>
              <input type="submit" value="<? echo $data['download'][$lang]; ?>" name="download" disabled="disabled" class="settings__btn settings__btn_download"/>
            </div>
            <input type="hidden" name="single-mod" id="modIndef" value="1"/>
          </form>
        </div>
      </main>
      <aside>
        <ul class="language">
          <li class="language__item"> <a href="rus" class="language__link">РУС</a></li>
          <li class="language__item"> <a href="eng" class="language__link">ENG</a></li>
        </ul><a href="" class="socials__link socials__link_lk"></a>
        <ul class="socials">
          <li class="socials__item"><a href="http://www.facebook.com/sharer.php?u=http://watermarkgen.ru" target="_about" class="socials__link socials__link_fb"><span class="hide">facebook</span></a></li>
          <li class="socials__item"><a href="http://twitter.com/home?status=http://watermarkgen.ru" target="_about" class="socials__link socials__link_tw"><span class="hide">twitter</span></a></li>
          <li class="socials__item"><a href="http://vk.com/share.php?url=http://watermarkgen.ru" target="_about" class="socials__link socials__link_vk"><span class="hide">вконтакте</span></a></li>
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
    <script src="bower_components/jquery-ui/ui/slider.js"></script>
    <script src="bower_components/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
    <script src="bower_components/jquery-file-upload/js/jquery.iframe-transport.js"></script>
    <script src="bower_components/jquery-file-upload/js/jquery.fileupload.js"></script>
    <!-- endbower -->
    <!-- endbuild -->
    <!-- build:js js/main.js -->
    <script src="js/upload.js"></script>
    <script src="js/form.js"></script>
    <script src="js/position.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/mods.js"></script>
    <script src="js/reset.js"></script>
    <script src="js/socials.js"></script>
    <!-- endbuild -->
  </body>
</html>