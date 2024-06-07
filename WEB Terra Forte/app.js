'use strict'
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active');
});

const grande = document.querySelector('.grande')
const punto = document.querySelector('.punto')

punto.forEach( (cadaPunto , i)=>{
   punto[i].addEventListener('click',()=>{
      let posicion = i
      let operacion = posicion * -50

      grande.style.transform = `translateX(${ operacion}%)`

      punto.forEach((cadaPunto, i)=>{
         punto[i].classList.remove('activo')
      })
      punto[i].classList.add('activo')
   })
})