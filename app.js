const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if(entry.isIntersecting){
    document.querySelectorAll(".car")[0].classList.add("fadeInLeft");
    document.querySelectorAll(".car")[1].classList.add("fadeInTop");
    document.querySelectorAll(".car")[2].classList.add("fadeInTop");
    document.querySelectorAll(".car")[3].classList.add("fadeInRight");
  }
})
})

observer.observe(document.querySelector(".cards"));

const skills = new IntersectionObserver(motions => {
  motions.forEach(motion => {
    if(motion.isIntersecting){
      document.querySelectorAll(".skill-img")[0].classList.add("fadeInLeft");
      document.querySelectorAll(".skill-img")[1].classList.add("fadeInLeft");
      document.querySelectorAll(".skill-img")[2].classList.add("fadeInTop");
      document.querySelectorAll(".skill-img")[3].classList.add("fadeInRight");
      document.querySelectorAll(".skill-img")[4].classList.add("fadeInRight");
      document.querySelectorAll(".skill-img")[5].classList.add("fadeInTop");
    }
  })
  })
  
  skills.observe(document.querySelector(".container"));