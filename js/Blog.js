const slider = document.querySelector('.wrapper_list');
const sliderItem = document.querySelector('#list_slider');
const item = document.querySelectorAll('.item_blog_list');
const prevBtn = document.querySelector('.fa-solid fa-chevron-left fa-xl');
const nextBtn = document.querySelector('.fa-solid fa-chevron-right fa-xl');

let currentItems = 0;
const itemWidth = item[0].clientWidth;
const visibleItém = Math.floor(slider.clientWidth / itemWidth);
const maxItems = item.length - visibleItém;
const moveSize = itemWidth * visibleItém;

function moveRight() {
    if (currentItem < maxItems) {
      currentItem += 1;
      sliderItems.style.transform = `translateX(-${currentItem * moveSize}px)`;
    }
  }
  
  function moveLeft() {
    if (currentItem > 0) {
      currentItem -= 1;
      sliderItems.style.transform = `translateX(-${currentItem * moveSize}px)`;
    }
  }
  
  prevBtn.addEventListener('click', moveLeft);
  nextBtn.addEventListener('click', moveRight); 

function showSlides() {
  let i;
  let slides = document.getElementById("list_slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}