let accordion = document.querySelector(".accordion__title");
let close = document.querySelector(".form__close");
accordion.onclick = function() {
  this.classList.toggle("active");
  let body = this.nextElementSibling;
    if (body.style.maxHeight){
      body.style.maxHeight = null;
      body.style.overflow = "hidden";
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
      body.style.overflow = "visible";
    }
}
close.onclick = function() {
  let body = accordion.nextElementSibling;
  if (body.style.maxHeight){
    body.style.maxHeight = null;
    body.style.overflow = "hidden";
    accordion.classList.remove("active");
  }
}
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}