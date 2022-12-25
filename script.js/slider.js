const slider = document.querySelectorAll(".slider");
const balls = document.querySelectorAll("#slideB");
const btnPrev = document.querySelector("#prev-button");
const btnNext = document.querySelector("#next-button");
const ballsClick = document.querySelector('.balls-click');
const navigation = document.querySelector('.conect-ball');

let currentSlider = 0;
let lenBalls = balls.length;


function returIdx(){
    for(let i = 0; i < lenBalls; i++){
        if(balls[i].checked){
            hideSlider();
            currentSlider = i;
            showSlider();
        }
    }    
}

function checkedBalls(){
    balls[currentSlider].checked = true;
}

function hideSlider(){
    slider.forEach(item => item.classList.remove("on"));
}

function showSlider(){
    slider[currentSlider].classList.add("on");
}

function attSlideNext(){
    if(currentSlider === slider.length - 1){
        currentSlider = 0;
    } else {
        currentSlider++;
    }
    checkedBalls();
}

function nextSlider(){
    hideSlider();
    attSlideNext();
    showSlider();
}

function attSlidePrev(){
    if(currentSlider === 0){
        currentSlider = slider.length - 1;
    } else {
        currentSlider--;
    }
    checkedBalls();
}

function prevSlider(){
    hideSlider();
    attSlidePrev();
    showSlider();
}

setInterval(nextSlider, 5000);

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
ballsClick.addEventListener('click', returIdx)