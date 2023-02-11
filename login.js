let monkeyEarL = document.querySelector('.monkey-ear-l');
let monkeyEarR = document.querySelector('.monkey-ear-r');
let monkeyLogo = document.querySelector('.logo-monkey');
let monkeyCap = document.querySelector('.logo-cap');
let monkeyMat = document.querySelector('.logo-material');
let homeScreen = document.querySelector('.home-screen-anim');


window.setInterval(()=>{
  homeScreen.classList.remove('home-screen-anim-frames');
  monkeyMat.classList.remove('logo-material-frames');
  monkeyCap.classList.remove('logo-cap-frames');
  monkeyLogo.classList.remove('logo-monkey-frames');
  monkeyEarR.classList.remove('monkey-ear-r-frames');
  monkeyEarL.classList.remove('monkey-ear-l-frames');
  
  setTimeout(() => {
    homeScreen.classList.add('home-screen-anim-frames');
    monkeyMat.classList.add('logo-material-frames');
    monkeyCap.classList.add('logo-cap-frames');
    monkeyLogo.classList.add('logo-monkey-frames');
    monkeyEarR.classList.add('monkey-ear-r-frames');
    monkeyEarL.classList.add('monkey-ear-l-frames');
  }, 2);
},10020);


// console.log(bruh1);

let headerMenuReds = [
  // document.querySelector('.header-menu-red'),
  document.querySelector('.header-menu-red-bot'),
  // document.querySelector('.header-menu-red-top')
];

let hamScreen = document.querySelector('.hamburger-screen');
let hamClose = document.querySelector('.ham-close');

headerMenuReds.forEach(item => {
  if(item != false){
    item.addEventListener('click', () =>{
      console.log("WTF");
      hamScreen.classList.add('hamburger-screen-target');
    })
  }
});

hamClose.addEventListener('click', () =>{
  // console.log("WTF");
  hamScreen.classList.remove('hamburger-screen-target');
})

// let bruh1 = document.querySelector('.header-menu-red-bot');
// let bruh2 = document.querySelector('.header-menu-blue-bot');
// let bruh3 = document.querySelector('.header-menu');
// let okWTF = document.querySelector('.header-menu-red-bot');

// // bruh1.addEventListener('hover', console.log("WTF"))
// // bruh2.addEventListener('hover', console.log("WTF"))
// // bruh3.addEventListener('hover', console.log("WTF"))
// okWTF.addEventListener('click', () =>{
//   console.log("WTF");
// });
