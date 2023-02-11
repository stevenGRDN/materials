const allBtn = document.querySelectorAll('.mat-scroll-radio');

allBtn.forEach(btn => {
    if (btn.checked == true){
      btn.closest('.mat-btn').style.backgroundColor = '#000';
    }
  btn.addEventListener('click', () => {
    allBtn.forEach(btn => {
      btn.closest('.mat-btn').style.backgroundColor = '#fff';
    });

    if (btn.checked == true){
      btn.closest('.mat-btn').style.backgroundColor = '#000';
    }
    if (btn.checked != true){
      console.log("bruh");
      btn.closest('.mat-btn').style.backgroundColor = '#fff';
    }

  })
})

let brickScroll = document.querySelector('.all-mat-div-brick');
brickScroll.addEventListener('scroll', () => {
  let bScrollTop = brickScroll.scrollTop;
  // console.log(bScrollTop);
  let bScrollHeight = brickScroll.scrollHeight;
  // console.log(bScrollHeight);
  let percent = 0.5 + ((bScrollTop / bScrollHeight * 100.7) + 0.5) / (100 / (brickScroll.children.length + 1));
  // let percent = (bScrollTop / bScrollHeight) / 0.15;
  // let percent = bScrollTop / (bScrollHeight - (document.documentElement.clientHeight * 0.8253)) * 100;
  // let percent = bScrollTop / (bScrollHeight / 1) * 100;
  // percent = Math.trunc(percent);
  // console.log(bScrollTop);

  // console.log(percent);

  addFocusedDiv(Math.trunc(percent));
})

window.addEventListener("DOMContentLoaded", () => {

})

function addFocusedDiv(divNum) {


  // console.log(divNum + 2);
  // console.log(brickScroll.children[parseInt(divNum)]);
  let brickDiv = brickScroll.children[parseInt(divNum)];

  const brickChildren = Array.from(brickScroll.children);
  // brickChildren.filter(item => {
  //   let i = 0;
  //   // console.log(item == brickChildren[divNum]);
  //   if(item != brickChildren[divNum]){
  //     i++;
  //     console.log(i);
  //     if(i >= 4){
  //       // console.log("i == 4");
  //     }
  //   }
  // });

  // brickChildren.filter(item => item == brickChildren[divNum]);
  // brickChildren.forEach(item => {
  //   item.classList.remove('div-focused');
  // })

  brickChildren.forEach(item =>{
    // if (item != brickScroll.children[divNum]){
    //   item.classList.remove('div-focused');
    // }
    item.classList.remove('div-focused');

  })

  brickDiv.classList.add('div-focused');

  // console.log(brickChildren.length);
  // brickChildren.forEach(item =>{
  //   if(item != brickScroll.children[parseInt(divNum)] && !item.classList.contains('.div-focused')){
  //     // console.log(item.classList.contains('.div-focused'));
  //     item.classList.remove('div-focused');
  //   }
  //   else{
  //     // console.log(brickScroll.children[parseInt(divNum)]);
  //     // console.log(brickScroll.children[parseInt(divNum)]);
  //   }
  // })


  // console.log(brickDiv);

  // let brickDivs = Array.from(brickScroll.children);
  // console.log()
  // brickDivs = brickDivs.filter(item => console.log(item));
  // brickDivs = brickDivs.filter(item => Array.from(brickScroll.children[parseInt(divNum)]) == item);
  // console.log(brickDivs.length);
  // console.log(brickDivs);
  // brickDivs.classList.add = 'focused';
}

// console.log(brickScroll.children.length);

  const imgSlider = document.querySelector('.material-image-slider');
  // console.log(imgSlider.children.length);
  // console.log(imgSliderWidth);


  let imgSliderWidth = imgSlider.offsetWidth;
  let imgSliderTotalWidth = imgSliderWidth * (imgSlider.children.length - 1);
  let imgSliderDots = document.querySelector('.image-slider-dots');

  window.addEventListener('resize', () =>{
    imgSliderWidth = imgSlider.offsetWidth;
    imgSliderTotalWidth = imgSliderWidth * (imgSlider.children.length - 1);
    console.log(imgSliderTotalWidth);
  })

  imgSlider.scrollTo((imgSliderWidth *3), 0);

  imgSlider.addEventListener('scroll', () =>{
    // console.log(imgSlider.scrollLeft / imgSlider.offsetWidth);
    let focusedDotParameter = (imgSlider.scrollLeft / imgSlider.offsetWidth) + 0.5;
    if(focusedDotParameter => 3) focusedDotParameter = focusedDotParameter - 3;
    if(focusedDotParameter <= 0) focusedDotParameter = focusedDotParameter + 3;
    focusedDotParameter = Math.trunc(focusedDotParameter);
    // console.log(focusedDotParameter);

    if (imgSlider.scrollLeft >= imgSliderTotalWidth){
      imgSlider.scrollTo((imgSliderWidth), 0);
    }
    else if (imgSlider.scrollLeft <= 10){
      imgSlider.scrollTo((imgSliderWidth * 3), 0);
    }

    for(let i = 0; i <= 2; i++){
      imgSliderDots.children[i].style.height = "5px";
      imgSliderDots.children[i].style.opacity = "0.3";
    }


    imgSliderDots.children[focusedDotParameter].style.height = "9px";
    imgSliderDots.children[focusedDotParameter].style.opacity = "1";

    // console.log(imgSlider)


    // Array.from(imgSliderDots.children).forEach(item => {
    //   console.log(item);
    //   item.style.height = "10px !important";
    //   item.style.opacity = "3 !important";
    // })

  })

const allPropCbox = document.querySelectorAll('.mat-prop-cbox');
allPropCbox.forEach(item => {
  item.addEventListener('click', () =>{
    let i = 0;
    allPropCbox.forEach(item => {
      if(item.checked) {
        i++;
      }

      if(i > 0){
        item.closest('.material-properties').style.width = "100%";
        item.closest('.material-properties').style.translate = "-50% 0";
      }
      else{
        item.closest('.material-properties').style.width = "80%";
        item.closest('.material-properties').style.translate = "-50% 0";
      }
    });

  })
})

const allSliderF = document.querySelectorAll('.range-slider-front');
allSliderF.forEach(item =>{
  item.style.width = (100 * item.nextElementSibling.value / (item.nextElementSibling.max - item.nextElementSibling.min)) + "%";
  item.nextElementSibling.addEventListener('input', () =>{
    item.style.width = (100 * item.nextElementSibling.value / (item.nextElementSibling.max - item.nextElementSibling.min)) + "%";
  })
})

const allSliderB = document.querySelectorAll('.range-slider-back');
allSliderB.forEach(item =>{
  item.style.width = 100 - (100 * item.nextElementSibling.nextElementSibling.value / (item.nextElementSibling.nextElementSibling.max - item.nextElementSibling.nextElementSibling.min)) + "%";
  item.nextElementSibling.nextElementSibling.addEventListener('input', () =>{
    item.style.width = 100 - (100 * item.nextElementSibling.nextElementSibling.value / (item.nextElementSibling.nextElementSibling.max - item.nextElementSibling.nextElementSibling.min)) + "%";
  })
})

const allRangeValue = document.querySelectorAll('.mat-val-range-value');
allRangeValue.forEach(item => {
  const innerTextVal = item.innerText;
  item.innerText = item.previousElementSibling.children[2].value + innerTextVal;
  item.previousElementSibling.children[2].addEventListener('input', () =>{
    item.innerText = item.previousElementSibling.children[2].value + innerTextVal;
  })
})

// -------- All range & image filters --------

// const sliderColHue = document.querySelector('.mat-prop-col-hue');
// const sliderColSat = document.querySelector('.mat-prop-col-sat');
// const sliderColDiversity = document.querySelector('.mat-prop-col-diversity');
const imgTop1 = document.querySelectorAll('.img-top-1');
const imgTop2 = document.querySelectorAll('.img-top-2');
const imgTop3 = document.querySelectorAll('.img-top-3');
const imgTop4 = document.querySelectorAll('.img-top-4');
const imgTop5 = document.querySelectorAll('.img-top-5');
const imgTop6 = document.querySelectorAll('.img-top-6');
const imgTop7 = document.querySelectorAll('.img-top-7');

// imgTop4.style.filter = 'bright(0.5)';

const allSlider = document.querySelectorAll('.mat-val-range');
console.log(imgTop4.dataset);
console.log(allSlider);
allSlider.forEach(slider => {
  slider.addEventListener('input', () => {

    // console.log(slider.classList[1]);
    if(slider.classList[1] == 'mat-prop-col-hue') {
      // console.log(slider.value);
      imgTop4.forEach(image => image.dataset.hue = "hue-rotate("+ (slider.value - 22.3) +"deg)");
      imgTop4.forEach(image => image.style.filter = image.dataset.hue + image.dataset.saturation);
    }
    
    if(slider.classList[1] == 'mat-prop-col-sat') {
      
      imgTop4.forEach(image => {
        if(slider.value > 50){
          image.dataset.saturation = "saturate("+ ((slider.value/ 50) * (slider.value/ 50) * (slider.value/ 50))+")"
        }
        else{
          image.dataset.saturation = "saturate("+ (slider.value/ 50)+")";
        }
      });
      imgTop4.forEach(image => image.style.filter = image.dataset.hue + image.dataset.saturation);
    }

    if(slider.classList[1] == 'mat-prop-col-diversity') {
      imgTop3.forEach(image => image.style.filter = "opacity("+ slider.value / 100+")");
    }

    if(slider.classList[1] == 'mat-prop-gloss-roughness') {
      console.log(slider.value);
      if(slider.value < 50){
        imgTop7.forEach(image => image.style.filter = "opacity("+((50 - slider.value) * 2) / 100+")");
        imgTop6.forEach(image => image.style.filter = "opacity(0)");
      }
      else if(slider.value > 50){
        imgTop7.forEach(image => image.style.filter = "opacity(0)");
        imgTop6.forEach(image => image.style.filter = "opacity("+ ((slider.value - 50) * 2) / 100);
      }
    }

    if(slider.classList[1] == 'mat-prop-bump-strength') {
      // console.log("strength");
      if(slider.value > 50){
        imgTop2.forEach(image => image.style.filter = "brightness("+(1.2 - (slider.value * 0.004))+") contrast("+(1 + (slider.value - 50) * 0.02)+")");
      }
      else if(slider.value < 50){
        imgTop2.forEach(image => image.style.filter = "brightness("+(1.2 - (slider.value * 0.004))+") contrast(1)");
      }
     }
  })
})



// -------------

const propertyDesc = document.querySelector('.material-prop-desc');
const imgContainer = document.querySelector('.material-image-container');
const propertyDescHeight = propertyDesc.offsetHeight;


let tutorialNum = 0;
const lArrow = document.querySelector('.mat-desc-arr-l');
const rArrow = document.querySelector('.mat-desc-arr-r');
const descTexts = document.querySelectorAll('.mat-desc-text');
const descImgs = document.querySelectorAll('.mat-desc-img');
const matImg1 = document.querySelectorAll('.img-1');
const matImg2 = document.querySelectorAll('.img-2');
const matImgDef = document.querySelectorAll('.img-def');

matImg1.forEach(item => item.style.opacity = "0");
matImg2.forEach(item => item.style.opacity = "0");

descImgs.forEach(item => item.style.display = "none");
descImgs[tutorialNum].style.display = "block";

descTexts.forEach(item => item.style.display = "none");
descTexts[tutorialNum].style.display = "block";

scrollTutorial();
function scrollTutorial(){
  console.log(descTexts.length);
  lArrow.style.opacity = "0.3";


  lArrow.addEventListener('click', () =>{
    if(tutorialNum > 0){
      tutorialNum--;
      // console.log(tutorialNum);
      descImgs.forEach(item => item.style.display = "none");
      descImgs[tutorialNum].style.display = "block";

      descTexts.forEach(item => item.style.display = "none");
      descTexts[tutorialNum].style.display = "block";
    }

    if(tutorialNum <= 0){
      lArrow.style.opacity = "0.3";
    }
    else if(tutorialNum > 0){
      lArrow.style.opacity = "1";
    }
    
    if(tutorialNum != descTexts.length - 1){
      rArrow.style.opacity = "1";
    }
  })

  rArrow.addEventListener('click', () =>{
    if(tutorialNum < descTexts.length - 1){
      tutorialNum++;
      // console.log(tutorialNum);
      rArrow.style.opacity = "1";
      descImgs.forEach(item => item.style.display = "none");
      descImgs[tutorialNum].style.display = "block";

      descTexts.forEach(item => item.style.display = "none");
      descTexts[tutorialNum].style.display = "block";
    }

    if(tutorialNum > 0){
      lArrow.style.opacity = "1";
    }

    if(tutorialNum == descTexts.length - 1){
      rArrow.style.opacity = "0.3";
    }
    else if(tutorialNum != descTexts.length - 1){
      rArrow.style.opacity = "1";
    }
  })
  // console.log("tutorial num" + tutorialNum);
}

function scrollTutorialIMG(){
  matImgDef.forEach(item => item.style.opacity = "0");
  matImg1.forEach(item => item.style.opacity = "0");
  matImg2.forEach(item => item.style.opacity = "0");
  matImg1[tutorialNum].style.opacity = "1";
  matImg2[tutorialNum].style.opacity = "1";

  lArrow.addEventListener('click', () =>{
      matImg1.forEach(item => item.style.opacity = "0");
      matImg2.forEach(item => item.style.opacity = "0");

      matImg1[tutorialNum].style.opacity = "1";
      matImg2[tutorialNum].style.opacity = "1";
  })

  rArrow.addEventListener('click', () =>{
      matImg1.forEach(item => item.style.opacity = "0");
      matImg2.forEach(item => item.style.opacity = "0");

      matImg1[tutorialNum].style.opacity = "1";
      matImg2[tutorialNum].style.opacity = "1";
  })
}

let timer = null;
let prevScroll = 0;
let matProperties = document.querySelector('.material-properties');
let matDescription = document.querySelector('.material-description');
let headerRedBlue = [
  document.querySelector('.header-logo-blue'),
  document.querySelector('.header-logo-red'),
  document.querySelector('.header-profile-blue'),
  document.querySelector('.header-profile-red'),
  document.querySelector('.header-menu-blue'),
  document.querySelector('.header-menu-red')
];

let headerRedBlueTop = [
  document.querySelector('.header-logo-blue-top'),
  document.querySelector('.header-logo-red-top'),
  document.querySelector('.header-profile-blue-top'),
  document.querySelector('.header-profile-red-top'),
  document.querySelector('.header-menu-blue-top'),
  document.querySelector('.header-menu-red-top')
];

let headerRedBlueBot = [
  document.querySelector('.header-logo-blue-bot'),
  document.querySelector('.header-logo-red-bot'),
  document.querySelector('.header-profile-blue-bot'),
  document.querySelector('.header-profile-red-bot'),
  document.querySelector('.header-menu-blue-bot'),
  document.querySelector('.header-menu-red-bot')
];

// console.log(Math.floor(Math.random() * 30) + " " + Math.floor(Math.random() * 30));


// headerRedBlue.forEach(item => {
//   // console.log(Math.trunc(Math.random() * 30));
//   // console.log(Math.floor(Math.random() * 30));
//   item.style.translate = (Math.floor(Math.random() * 31) - 15) + "% " + (Math.floor(Math.random() * 31) - 65) + "%";
//   // console.log(Math.floor(Math.random() * 30) + "% " + Math.floor(Math.random() * 30) + "%");
//   // item.style.translate = "20% 20%";
// });

// console.log(headerRedBlue);

propertyDesc.addEventListener('scroll', () => {
  // console.log((propertyDesc.offsetHeight - propertyDesc.scrollTop) / propertyDesc.offsetHeight);
  // console.log(propertyDesc.scrollTop / propertyDesc.offsetHeight);
  // console.log("scroll");

  if(timer !== null){
    let propertyDescTop = propertyDesc.scrollTop;

    headerRedBlue.forEach(item => {
      // console.log(Math.trunc(Math.random() * 30));

      
      setTimeout(function() {
        // console.log("change");
        item.style.translate = (Math.floor(Math.random() * 81) + (-40)) + "% " + (Math.floor(Math.random() * 151) - 120) + "%";
      }, 100);
      // console.log(Math.floor(Math.random() * 30) + "% " + Math.floor(Math.random() * 30) + "%");
      // item.style.translate = "20% 20%";
    });

    if (propertyDescTop > prevScroll){
      // console.log("scrolling up");
      matProperties.style.setProperty('--matPropAfter', '0 8vh');
      matProperties.style.setProperty('--matPropBefore', '0 3vh');
    }
    else{
      // console.log("scrolling down");
      matProperties.style.setProperty('--matPropAfter', '0 -8vh');
      matProperties.style.setProperty('--matPropBefore', '0 -3vh');

      matDescription.style.setProperty('--matDescAfter', '0 -10vh');
      matDescription.style.setProperty('--matDescBefore', '0 -4vh');
    }

    prevScroll = propertyDescTop;
  }

  timer = setTimeout(function() {
    // box.style.setProperty('--boxAfterTop', '-0%');
    // box.style.setProperty('--boxBeforeTop', '-0%');
    matProperties.style.setProperty('--matPropAfter', '0 0vh');
    matProperties.style.setProperty('--matPropBefore', '0 0vh');

    matDescription.style.setProperty('--matDescAfter', '0 0vh');
    matDescription.style.setProperty('--matDescBefore', '0 0vh');

    headerRedBlue.forEach(item => {
      setTimeout(function() {
        item.style.translate = "0 -50%";
      }, 250);
    });
  }, 100)

  setTimeout(() => {
    if((propertyDesc.offsetHeight - propertyDesc.scrollTop) / propertyDesc.offsetHeight >= 0.35){
      imgContainer.style.height = "29.5vh";
      propertyDesc.style.height = "45.5vh";
      matImgDef.forEach(item => item.style.opacity = "1");
      matImg1.forEach(item => item.style.opacity = "0");
      matImg2.forEach(item => item.style.opacity = "0");
    }
    else if((propertyDesc.offsetHeight - propertyDesc.scrollTop) / propertyDesc.offsetHeight <= 0.35){
      scrollTutorialIMG()

      imgContainer.style.height = "29.5vh";
      propertyDesc.style.height = "45.5vh";
        //
        //a BROOO

    }
  }, 500)

});

let brickDivScroll = document.querySelector('.all-mat-div');

brickDivScroll.addEventListener('scroll', () => {
  // console.log("YEYE");
  if(timer !== null){
    let propertyDescTop = propertyDesc.scrollTop;

    headerRedBlueTop.forEach(item => {
      // console.log(Math.trunc(Math.random() * 30));

      
      setTimeout(function() {
        // console.log("change");
        item.style.translate = (Math.floor(Math.random() * 81) + (-40)) + "% " + (Math.floor(Math.random() * 151) - 120) + "%";
      }, 100);
      // console.log(Math.floor(Math.random() * 30) + "% " + Math.floor(Math.random() * 30) + "%");
      // item.style.translate = "20% 20%";
    });
  }

  timer = setTimeout(function() {
    headerRedBlueTop.forEach(item => {
      setTimeout(function() {
        item.style.translate = "0 -50%";
      }, 250);
    });
  }, 100)
  
})

let homeScreenContainer = document.querySelector('.home-screen-content-container');

homeScreenContainer.addEventListener('scroll', () => {
  // console.log("YEYE");
  if(timer !== null){
    let propertyDescTop = propertyDesc.scrollTop;

    headerRedBlueBot.forEach(item => {
      setTimeout(function() {
        item.style.translate = (Math.floor(Math.random() * 81) + (-40)) + "% " + (Math.floor(Math.random() * 151) - 120) + "%";
      }, 100);

    });
  }

  timer = setTimeout(function() {
    headerRedBlueBot.forEach(item => {
      setTimeout(function() {
        item.style.translate = "0 -50%";
      }, 250);
    });
  }, 100)
  
})

// let arrowB = document.querySelector('.mat-dl-arrow-b');
// console.log(arrowB.style.backgroundColor);

let matDL = document.querySelector('.material-download');
let matDLNO = document.querySelector('.mat-dl-decision-no');
let matDLYES = document.querySelector('.mat-dl-decision-yes');
let matDLDecision = document.querySelector('.material-dl-decision');
let matDLAnim = document.querySelector('.material-dl-downloading');
let matDLPopup = document.querySelector('.material-dl-popup');
let matArrR = document.querySelector('.mat-dl-arrow-r');
let matArrB = document.querySelector('.mat-dl-arrow-b');


matDL.addEventListener('click', () =>{
  if(matDLAnim.classList[1] == 'display-none-property'){
    // console.log(matDLAnim.classList[1] == 'display-none-property');
    matDLDecision.classList.toggle('display-none-property');
    matDLPopup.classList.remove('display-none-property');
  }
});

matDLNO.addEventListener('click', () =>{
  matDLDecision.classList.toggle('display-none-property');
});

matDLYES.addEventListener('click', () =>{
  matDLAnim.classList.toggle('display-none-property');
  matDLDecision.classList.toggle('display-none-property');

  // let i = 1;
  // while(i < 15){
  //   (function(i){
  //     setTimeout(() => {
  //       console.log("It is downloading");
  //     }, 500 * i);
  
  //   })(i++);
  // }
  
  // let i = 0
  // setInterval(() =>{
  //   console.log("It is downloading");
  //   console.log(i);
  //   if(i++ == 15) clearInterval();
  // }, 500)

  setTimeout(() => {
    for(let i = 0; i<= 30; i++){
      setTimeout(() => {
        // console.log("It is downloading");
        matArrB.style.translate = (Math.floor(Math.random() * 21) -10) + "% " + (Math.floor(Math.random() * 21) - 10) + "%";
        matArrR.style.translate = (Math.floor(Math.random() * 21) -10) + "% " + (Math.floor(Math.random() * 21) - 10) + "%";
      }, 150 * i);
    }
  }, 2500);
  


  setTimeout(function(){
    matDLPopup.classList.toggle('display-none');
    setTimeout(function(){
      matDLPopup.classList.toggle('display-none-property');
      matDLAnim.classList.toggle('display-none-property');
      matDLPopup.classList.toggle('display-none');
    }, 1000)
  }, 12000)
});

// --------------------

let monkeDIV = document.querySelector('.monke-tutorial');
let monkeText = document.querySelector('.monke-text');
let monkeTextAnim = document.querySelector('.monke-text-container');


let objectForAmount = {
  colour: 0,
  gloss: 0,
  bump: 0
}

let colourCBOX = document.querySelector('.mpc-1');
let glossCBOX = document.querySelector('.mpc-2');
let bumpCBOX = document.querySelector('.mpc-3');

// let btnArrayCboxMAP = new Map([
//   []
// ]);

colourCBOX.addEventListener('click', ()=>{
  monkeDIV.classList.remove('monke-text-animation');
  monkeDIV.style.animationDuration = '8s';
  if(objectForAmount.colour == 0){
    monkeText.innerText = "Hue changes the pure colour. Saturation changes the vibrancy. Diversity changes how mixed the brick material is.";
    monkeDIV.classList.add('monke-text-animation');
    objectForAmount.colour = 1;
  }
});

glossCBOX.addEventListener('click', ()=>{
  monkeDIV.style.animationDuration = '4s';
  monkeDIV.classList.remove('monke-text-animation');
  if(objectForAmount.gloss == 0){
    monkeText.innerText = "Roughness changes the material's shine amount.";
    monkeDIV.classList.add('monke-text-animation');
    objectForAmount.gloss = 1;
  }
});

bumpCBOX.addEventListener('click', ()=>{
  monkeDIV.classList.remove('monke-text-animation');
  monkeDIV.style.animationDuration = '4s';
  if(objectForAmount.bump == 0){
    monkeText.innerText = "The bump strength changes the contrast of the brick's cracks.";
    monkeDIV.classList.add('monke-text-animation');
    objectForAmount.bump = 1;
  }
});


// let xvar = 0;
// xvar.addEventListener('change', ()=>{
//   while(xvar == 0){
//     xvar = 1;
//     setTimeout(() => {
//       console.log(xvar);
//       xvar = 0;
//       console.log(xvar);
//     }, 1000);
//   }
// });


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
},10000);


// console.log(bruh1);

let headerMenuReds = [
  document.querySelector('.header-menu-red'),
  document.querySelector('.header-menu-red-bot'),
  document.querySelector('.header-menu-red-top')
];

let hamTextsAndCloseBTN = [
  ...document.querySelectorAll('.ham-text'),
  document.querySelector('.ham-close')
]

let hamScreen = document.querySelector('.hamburger-screen');
// let hamClose = document.querySelector('.ham-close');

headerMenuReds.forEach(item => {
  item.addEventListener('click', () =>{
    // console.log("WTF");
    hamScreen.classList.add('hamburger-screen-target');
  })
});

hamTextsAndCloseBTN.forEach(item => {
  item.addEventListener('click', () =>{
    // console.log("WTF");
    hamScreen.classList.remove('hamburger-screen-target');
  })
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