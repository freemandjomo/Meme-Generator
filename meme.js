$(document).ready(function () {
  // Konstanten
  const DEFAULT_MAX_FONT_SIZE = 40;
  const MIN_FONT_SIZE = 10;
  const MEME_FILE_NAME = 'meme.png';
  const IMAGE_FORMAT = 'image/png';

  // DOM-Elemente cachen
  const $img = $('#img');
  const $upperInput = $('#upper');
  const $lowerInput = $('#lower');
  const $textTop = $('#text-top');
  const $textBottom = $('#text-bottom');
  const $hint = $('#hint');
  const $meme = $('#meme');
  const $downloads = $('#downloads');
  const $memeContainer = $('#meme');

  let imageUploaded = false;
  let currentSettings = {
    textColor: '#ffffff',
    strokeColor: '#000000',
    fontSize: DEFAULT_MAX_FONT_SIZE,
    textShadow: true
  };

  // Drag & Drop Funktionalität
  $memeContainer.on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('drag-over');
  });

  $memeContainer.on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('drag-over');
  });

  $memeContainer.on('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('drag-over');
    
    const files = e.originalEvent.dataTransfer.files;
    if (files && files.length && files[0].type.startsWith('image/')) {
      loadImage(files[0]);
    }
  });

  // Bild hochladen
  $('#input').change(function (event) {
    const files = event.target.files;
    if (files && files.length) {
      loadImage(files[0]);
    }
  });

  // Hilfsfunktion: Bild laden
  function loadImage(file) {
    const fr = new FileReader();
    fr.onload = function () {
      $img.attr('src', fr.result).on('load', function() {
        updateText();
      });
      $hint.hide();
      imageUploaded = true;
    };
    fr.readAsDataURL(file);
  }

  // Hilfsfunktion: Text aktualisieren
  function updateText() {
    const memeWidth = $meme.width();
    $textTop.text($upperInput.val());
    $textBottom.text($lowerInput.val());
    applyTextStyles($textTop);
    applyTextStyles($textBottom);
    fitText($textTop, memeWidth, currentSettings.fontSize);
    fitText($textBottom, memeWidth, currentSettings.fontSize);
  }

  // Hilfsfunktion: Text-Styling anwenden
  function applyTextStyles($element) {
    $element.css({
      'color': currentSettings.textColor,
      '-webkit-text-stroke-color': currentSettings.strokeColor,
      'text-shadow': currentSettings.textShadow ? '2px 2px 4px rgba(0,0,0,0.8)' : 'none'
    });
  }

  // Live-Text anzeigen
  $upperInput.on('input', function() {
    $textTop.text($(this).val());
    applyTextStyles($textTop);
    fitText($textTop, $meme.width(), currentSettings.fontSize);
  });

  $lowerInput.on('input', function() {
    $textBottom.text($(this).val());
    applyTextStyles($textBottom);
    fitText($textBottom, $meme.width(), currentSettings.fontSize);
  });

  // Textfarbe ändern
  $('#text-color').on('input', function() {
    currentSettings.textColor = $(this).val();
    applyTextStyles($textTop);
    applyTextStyles($textBottom);
  });

  // Umrandungsfarbe ändern
  $('#stroke-color').on('input', function() {
    currentSettings.strokeColor = $(this).val();
    applyTextStyles($textTop);
    applyTextStyles($textBottom);
  });

  // Schriftgröße ändern
  $('#font-size').on('input', function() {
    currentSettings.fontSize = parseInt($(this).val());
    $('#font-size-value').text($(this).val());
    fitText($textTop, $meme.width(), currentSettings.fontSize);
    fitText($textBottom, $meme.width(), currentSettings.fontSize);
  });

  // Schatten ein/aus
  $('#text-shadow').on('change', function() {
    currentSettings.textShadow = $(this).is(':checked');
    applyTextStyles($textTop);
    applyTextStyles($textBottom);
  });

  // Funktion: Text automatisch anpassen
  function fitText($element, maxWidth, maxFontSize) {
    let fontSize = maxFontSize;
    $element.css('font-size', fontSize + 'px');
    while ($element.width() > maxWidth && fontSize > MIN_FONT_SIZE) {
      fontSize -= 1;
      $element.css('font-size', fontSize + 'px');
    }
  }

  // Meme generieren
  $('#btn-generate').on('click', function() {
    if (!imageUploaded) {
      alert("Bitte zuerst ein Bild hochladen!");
      return;
    }

    html2canvas(document.querySelector('#meme'), { 
      useCORS: true,
      backgroundColor: null,
      logging: false
    }).then(function(canvas) {
      const imageData = canvas.toDataURL(IMAGE_FORMAT);
      $downloads
        .attr('href', imageData)
        .attr('download', MEME_FILE_NAME)
        .show();
    }).catch(function(error) {
      console.error('Fehler beim Generieren des Memes:', error);
      alert('Fehler beim Generieren des Memes. Bitte versuche es erneut.');
    });
  });

  // Refresh / Reset
  $('#refresh').on('click', function() {
    $img.attr('src', '');
    $upperInput.val('');
    $lowerInput.val('');
    $textTop.text('').css('font-size', DEFAULT_MAX_FONT_SIZE + 'px');
    $textBottom.text('').css('font-size', DEFAULT_MAX_FONT_SIZE + 'px');
    $hint.show();
    $downloads.hide();
    $('#input').val('');
    
    // Einstellungen zurücksetzen
    currentSettings = {
      textColor: '#ffffff',
      strokeColor: '#000000',
      fontSize: DEFAULT_MAX_FONT_SIZE,
      textShadow: true
    };
    $('#text-color').val('#ffffff');
    $('#stroke-color').val('#000000');
    $('#font-size').val(DEFAULT_MAX_FONT_SIZE);
    $('#font-size-value').text(DEFAULT_MAX_FONT_SIZE);
    $('#text-shadow').prop('checked', true);
    
    applyTextStyles($textTop);
    applyTextStyles($textBottom);
    imageUploaded = false;
  });
});
