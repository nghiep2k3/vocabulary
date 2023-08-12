const Do_Quiz = document.querySelector('.Do_Quiz')
const Add = document.querySelector('.Add')
const modal_Quiz = document.querySelector('#container_Quizz')
const modal_Add = document.querySelector('#container_Add')
const Close_Quiz = document.querySelector('.close_Quiz')
const Close_Add = document.querySelector('.close_Add')
const Input = document.querySelector('input[name="Add_word"]')
const Button_Add = document.querySelector('.button_Add')
const Array_word = [];

Do_Quiz.addEventListener('click', ()=>{
    modal_Quiz.style.display = 'flex'
})

Close_Quiz.addEventListener('click', ()=>{
    modal_Quiz.style.display = 'none'
})

Add.addEventListener('click', ()=>{
    modal_Add.style.display = 'flex'
})

Close_Add.addEventListener('click', ()=>{
    modal_Add.style.display = 'none'
})

Button_Add.addEventListener('click', ()=>{
    Array_word.push(Input.value.trim());
    console.log(Input.value);
    console.log(111, Array_word);
    var arrayString = JSON.stringify(Array_word); // convert json before upload local
    localStorage.setItem('ArrayWord', arrayString);
})




