var annually = ['199.99', '249.99', '399.99'];
var monthly = [19.99, 24.99, 39.99];

var toogleBtn = document.querySelector('.toogle-btn');
var toogle =  document.querySelector('#toogle');

var basic = document.querySelector('.basic');
var professional = document.querySelector('.professional');
var master = document.querySelector('.master');


toogleBtn.addEventListener('click', () => {
    
   if(!toogle.checked){
    basic.innerText = annually[0];
    professional.innerText = annually[1];
    master.innerText = annually[2];
   }
   else{
    basic.innerHTML = monthly[0];
    professional.innerHTML = monthly[1];
    master.innerHTML = monthly[2];
   }
})
