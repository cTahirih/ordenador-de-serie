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


let formGetNumbers = document.getElementById('js_main__form');
let formInputGetNumbers = document.getElementById('js_main__form--input');

let longArray;
formGetNumbers.addEventListener('submit', (evt) => {
  evt.preventDefault();
  longArray = formInputGetNumbers.value;
  formInputGetNumbers.value = '';
  console.log(longArray);
});












