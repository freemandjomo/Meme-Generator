$(document).ready(function () {
  let imageUploaded = false;

  // Bild hochladen
  $('#input').change(function (event) {
    const files = event.target.files;
    if (files && files.length) {
      const fr = new FileReader();
      fr.onload = function () {
        $('#img').attr('src', fr.result).on('load', function() {
          // Bild geladen, Text kann gesetzt werden
          $('#text-top').text($('#upper').val());
          $('#text-bottom').text($('#lower').val());
        });
        $('#hint').hide();
        imageUploaded = true;
      };
      fr.readAsDataURL(files[0]);
    }
  });

  // Live-Text anzeigen
  $('#upper').on('input', function() {
    $('#text-top').text($(this).val());
    fitText($('#text-top'), $('#meme').width(), 40);
  });

  $('#lower').on('input', function() {
    $('#text-bottom').text($(this).val());
    fitText($('#text-bottom'), $('#meme').width(), 40);
  });

  // Funktion: Text automatisch anpassen
  function fitText($element, maxWidth, maxFontSize) {
    let fontSize = maxFontSize;
    $element.css('font-size', fontSize + 'px');
    while ($element.width() > maxWidth && fontSize > 10) {
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

    html2canvas(document.querySelector('#meme'), { useCORS: true }).then(function(canvas) {
      const imageData = canvas.toDataURL('image/png');
      $('#downloads').attr('href', imageData).attr('download', 'meme.png').show();
    });
  });

  // Refresh / Reset
  $('#refresh').on('click', function() {
    $('#img').attr('src', '');
    $('#upper').val('');
    $('#lower').val('');
    $('#text-top').text('');
    $('#text-bottom').text('');
    $('#hint').show();
    $('#downloads').hide();
    imageUploaded = false;
  });
});
