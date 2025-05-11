
const bgheader = () => {
  const navbg = document.querySelector('.navbg')
  if (window.scrollY > 50) {
    navbg.classList.add("bgheader")


  } else {
    navbg.classList.remove("bgheader")
  }

  // window.scrollY >= 200 ? header.classList.add("bgheader")
  // : header.remove("bgheader")
}

window.addEventListener("scroll", bgheader)


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const scrolUp = () => {
  const scrolUp = document.querySelector('.scrol-up')
  if (window.scrollY / 3 > 1000) {
    scrolUp.classList.add("show-scroll")
  } else {
    scrolUp.classList.remove("show-scroll")
  }
}

window.addEventListener("scroll", scrolUp)



