let share = document.querySelector(".share");
let profile = document.querySelector(".profile");
let btn = document.querySelector(".btn");

function shareshow() {
  profile.classList.add("hidden");
  profile.classList.add("md:flex");
  share.style.display = "flex";
gsap.set(".share", { opacity: 0, y: 20 });
  gsap.to(".share", {
    opacity: 1,
    y: 0,
    duration: 0.8,
  });
  if (window.innerWidth > 768) {
    btn.removeAttribute("onclick");

    btn.setAttribute("onclick", "sharehide()");
  }
}

function sharehide() {
  
  gsap.to(".share", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    onComplete: () => {
      profile.classList.remove("hidden");
      profile.classList.remove("md:flex");
      share.style.display = "none";
    },
  });
  if (window.innerWidth > 768) {
    btn.removeAttribute("onclick");
    btn.setAttribute("onclick", "shareshow()");
  }
}
