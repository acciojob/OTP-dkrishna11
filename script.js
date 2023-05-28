//your JS code here. If required.
const codes = document.getElementsByClassName('code');

    for (let i = 0; i < codes.length; i++) {
      codes[i].addEventListener('input', function() {
        if (this.value.length === this.maxLength) {
          if (i < codes.length - 1) {
            codes[i + 1].focus();
          }
        }
      });

      codes[i].addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && this.value.length === 0) {
          if (i > 0) {
            codes[i - 1].focus();
          }
        }
      });
    }
