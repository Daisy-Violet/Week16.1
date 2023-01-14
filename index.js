const inputAdd = document.querySelector('.input-add');
const addBtn = document.querySelector('.add')
const endBtn = document.querySelector('.end')
const sortResult = document.querySelector('.sort-result');
const sumResult = document.querySelector('.sum-result');
let arr = [];


addBtn.addEventListener('click', () => {
    if (!inputAdd.value == '') {
        arr.push(inputAdd.value);
    }
    else {
        alert("Введите значение");
    }
    inputAdd.value = '';

});

endBtn.addEventListener('click', () => {
    arr.sort((a, b) => {
        return a - b;
    });
    sortResult.innerHTML = arr;
    sumResult.innerHTML = arr.reduce((a, b) => {
        return + a + + b;
    });
    arr = [];
});