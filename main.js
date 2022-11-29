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

propertyDesc.addEventListener('scroll', () => {
  console.log((propertyDesc.offsetHeight - propertyDesc.scrollTop) / propertyDesc.offsetHeight);
  // console.log(propertyDesc.scrollTop / propertyDesc.offsetHeight);
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
