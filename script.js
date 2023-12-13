const filterButtons = document.querySelector('.filter');
const buttons = document.querySelectorAll('.filter-button')

buttons.forEach(function (elem) {
    elem.addEventListener('click', e => {
        elem.classList.contains('active') ? elem.classList.remove('active') : elem.classList.add('active');
        const targetId = e.target.id;
        const checkboxClass = `checkbox-${targetId}`

        console.log(document.querySelector(`.${checkboxClass}`))
        const checkbox = document.querySelector(`.${checkboxClass}`)
        checkbox.classList.contains('checkbox-none') ? checkbox.classList.remove('checkbox-none') : checkbox.classList.add('checkbox-none');
    })
});

//галлерея
let activePhoto = document.querySelector('.active-photo')
let previewList = document.querySelectorAll('.slider-photos a')
function sliderTouch() {
    for (let activeImage of previewList) {
        activeImage.onclick = function (evt) {
            activePhoto.src = activeImage.href
            evt.preventDefault()
        }
    }
}
sliderTouch()
let buttonLeft = document.querySelector('.left')
let buttonRight = document.querySelector('.right')
const sliderImages = document.querySelectorAll('.slider_img');
const ImgActive = document.querySelector('.slider-active')
//панагинация для первого
const one = document.querySelector('.one')
let images = one.querySelectorAll('.slider_img')
let countSlider = document.querySelector('.countSlider')
let dot = document.querySelector('.static')
countSlider.textContent = images.length

function panaginationRight (){
    const count = 3;
    let newCount = count+1
    let newText = `0${newCount}`
     dot.textContent=newText

}

buttonRight.addEventListener('click',panaginationRight)
// buttonLeft.addEventListener('click',panaginationLeft)
//VIVUS
