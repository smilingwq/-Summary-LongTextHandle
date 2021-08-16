// Import stylesheets
import './style.scss';
var inputs = document.querySelectorAll('input[type="text"]');

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('blur', checkValue);
}

function checkValue(e) {
  var elem = e.target;

  if (elem.value != '') {
    elem.classList.add('js-input-filled');
  } else {
    elem.classList.remove('js-input-filled');
  }
}
