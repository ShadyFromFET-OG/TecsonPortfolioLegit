window.initSiteScripts = function () {

// MOBILE MENU
const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
openBtn.onclick = () => menu.classList.add('active');
closeBtn.onclick = () => menu.classList.remove('active');
document.querySelectorAll('.mobile-link').forEach(l => l.onclick = () => menu.classList.remove('active'));

// CAROUSEL
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;
function updateCarousel() {
	const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
nextBtn.onclick = () => { currentIndex = (currentIndex + 1) % slides.length; updateCarousel(); };
prevBtn.onclick = () => { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateCarousel(); };
window.onresize = updateCarousel;

// LIGHTBOX
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');

document.querySelectorAll('.interactive-work').forEach(work=>{
work.onclick=function(){

const img=this.querySelector('img')||this;
const src=img.getAttribute('src');

this.classList.remove('squish-active');
void this.offsetWidth;
this.classList.add('squish-active');

setTimeout(()=>{
lightboxImg.src=src;
lightbox.classList.add('active');
document.body.style.overflow='hidden';
setTimeout(()=>lightboxImg.style.transform="scale(1)",10);
},200);

};
});

lightbox.onclick=()=>{
lightboxImg.style.transform="scale(.9)";
lightbox.classList.remove('active');

setTimeout(()=>{
document.body.style.overflow='';
},300);
};

};