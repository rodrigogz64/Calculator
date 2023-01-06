'use strict';
const display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (val) =>{
    display.value += val;
}

const equal = () => {
    if(display.value === ''){
        display.value = 'enter a number';
    }else{
        let answer = eval(display.value);
        display.value = answer;
    }
}

