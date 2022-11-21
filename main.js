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
