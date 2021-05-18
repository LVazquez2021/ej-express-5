const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('mouseover', function() {
    btn2.classList.toggle('boton');
    btn1.style.opacity = 0.5;
    btn2.style.opacity = 1;
});


btn1.addEventListener('mouseover', function() {
    btn1.classList.toggle('boton');
    btn2.style.opacity = 0.5;
    btn1.style.opacity = 1;
});
//console.log(btn2);