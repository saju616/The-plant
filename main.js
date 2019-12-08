var count = 1;
var countMax = 4;

function switchVisible() {
  if(count >= countMax)
    return;
  document.getElementById('pl-' + count + '' ).style.display = 'none';
  count++;
  document.getElementById('pl-' + count + '').style.display = 'block';
  document.getElementById('water').style.display ='block';

}

