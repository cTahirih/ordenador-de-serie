let changePosition = (array, firstElm, secondElm) => {
  let temp = array[firstElm];
  array[firstElm] = array[secondElm];
  array[secondElm] = temp;
}

let sortNumbers = (array) => {
  let len = array.length,
            i , 
            j, 
            stop;

  for (i = 0; i < len; i++){        
    for( j = 0, stop = len - i; j < stop; j++) {
      (array[j] > array[j+1]) ? changePosition(array, j, j+1) : null;
    }    
  }

  return array;
}


let sorting = sortNumbers([ 8 ,3, 2, 2, 345]);

let result = sorting.reduce((nwArray, current) => {

  let len = nwArray.length;
  if(len == 0 || nwArray[len - 1] != current) nwArray.push(current)
 
  return nwArray;
},[])

console.log(result);


const formGetTotal = document.getElementById('js_main__formOne');
const formGetNumbers = document.getElementById('js_main__formTwo');
const formInputGetNumbersLenght = document.getElementById('js_main__form--input');
const formInputGetNumbers = document.getElementById('js_main__form--inputTwo');
const firstBoxText = document.getElementById('js-first_box');
const secondBoxText = document.getElementById('js-second_box');

let longArray;
let arrayOfNumbersEnterByUSer = [];

onload = function(){ 
  var ele = document.querySelectorAll('.validanumericos')[0];
  ele.onkeypress = function(e) {
     if(isNaN(this.value+String.fromCharCode(e.charCode)))
        return false;
  }
  ele.onpaste = function(e){
     e.preventDefault();
  }
}


formGetTotal.addEventListener('submit', (evt) => {
  evt.preventDefault();
  longArray = formInputGetNumbersLenght.value;

  formInputGetNumbersLenght.value = '';
  firstBoxText.style.display = 'none';
  formGetTotal.style.display = 'none';
  secondBoxText.style.display = 'block';
  formGetNumbers.style.display = 'block';
  console.log(longArray);

  formGetNumbers.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(longArray);
    let i = 0;
    if(i <= longArray) {
      arrayOfNumbersEnterByUSer.push(formInputGetNumbers.value);
      formInputGetNumbers.value = '';
    } else {
      formInputGetNumbers.style.display = 'none';
    }
    console.log(arrayOfNumbersEnterByUSer);
  })

});














