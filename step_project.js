let tabs = document.querySelectorAll(".tabs .tabs-title");
tabs.forEach((element) => {
    element.addEventListener("click", () => {
    const char = element.dataset.id;
    const textLi = document.querySelectorAll(".tabs-content li");

    const removeActive = document.querySelectorAll(".tabs-title")
    removeActive.forEach((i) => {i.classList.remove("active")})

    element.classList.add("active")

    textLi.forEach((e) => {
        if (char === e.dataset.content) {
            e.classList.add("show-text")
        } else {
        e.classList.remove("show-text")
        }
    })
  });
});
let loadBtn = document.querySelector(".load-more-btn")
let imgTabs = document.querySelectorAll(".img-tabs .tab-img-title");
imgTabs.forEach((element) => {
    element.addEventListener("click", () => {
      
    const imgId = element.dataset.id;
    const imgLi = document.querySelectorAll(".tabs-image");
    let counter = document.querySelector(".load-more-btn").dataset.counter
    const removeActive = document.querySelectorAll(".tab-img-title")
    removeActive.forEach((i) => {i.classList.remove("active")})

    element.classList.add("active")
    console.log(imgLi)
    imgLi.forEach((e, keynumber) => {
console.log(counter)
        if (imgId === "all") {
          counter < 3?loadBtn.style.display = "block":"none"
          e.classList.add("none-img")
            if (keynumber < 12*counter) {
            e.classList.remove("none-img")}
        }
        else if (imgId !== e.dataset.content) {
          loadBtn.style.display="none"
            e.classList.add("none-img")
        } else {
        e.classList.remove("none-img")
        }
    })
  });
});

let currentItem = 12;

loadBtn.addEventListener("click", () =>{
  loadBtn.dataset.counter = +loadBtn.dataset.counter +1
let boxImg = document.querySelectorAll(".div-img .tabs-image")
for (let i = currentItem; i < currentItem + 12; i++) {
boxImg[i].classList.remove("none-img")
}
currentItem += 12
if (currentItem === 36) {
  loadBtn.style.display = "none"
}
})


let counter = 1;

let tabsPerson = document.querySelectorAll(".person-tabs .tab-person");
tabsPerson.forEach((element) => {
  element.addEventListener("click", () => {
    const person = element.dataset.id;
    const personLi = document.querySelectorAll(".person-content li");

    const removeActiveSlide = document.querySelectorAll(".slider .slide");
    removeActiveSlide.forEach((i) => {
      i.classList.remove("show-opinion");
    });

    const removeActive = document.querySelectorAll(".tab-person");
    removeActive.forEach((i) => {
      i.classList.remove("active");
    });

    element.classList.add("active");

    personLi.forEach((e) => {
      if (person === e.dataset.content) {
        e.classList.add("show-opinion");
      } else {
        e.classList.remove("show-opinion");
      }
      if (person === "person-1") {
        counter = 1;
        let currentSlide = document.getElementById(`slide-${counter}`);
        currentSlide.classList.add("show-opinion");
      } else if (person === "person-2") {
        counter = 2;
        let currentSlide = document.getElementById(`slide-${counter}`);
        currentSlide.classList.add("show-opinion");
      } else if (person === "person-3") {
        counter = 3;
        let currentSlide = document.getElementById(`slide-${counter}`);
        currentSlide.classList.add("show-opinion");
      } else if (person === "person-4") {
        counter = 4;
        let currentSlide = document.getElementById(`slide-${counter}`);
        currentSlide.classList.add("show-opinion");
      }
    });
  });
});

document.querySelector(".slider-next").addEventListener("click", function () {
  counter++;
  if (counter === 5) {
    counter = 1;
  }
  const removeActiveSlide = document.querySelectorAll(".slider .slide");
  removeActiveSlide.forEach((i) => {
    i.classList.remove("show-opinion");
  });
  let currentSlide = document.getElementById(`slide-${counter}`);
  currentSlide.classList.add("show-opinion");
  let tabsPerson = document.querySelectorAll(".person-tabs .tab-person");
  const personLi = document.querySelectorAll(".person-content li");
  personLi.forEach((e) => {
    if (counter === 1 && e.dataset.content === "person-1") {
      e.classList.add("show-opinion");
    } else if (counter === 2 && e.dataset.content === "person-2") {
      e.classList.add("show-opinion");
    } else if (counter === 3 && e.dataset.content === "person-3") {
      e.classList.add("show-opinion");
    } else if (counter === 4 && e.dataset.content === "person-4") {
      e.classList.add("show-opinion");
    } else {
      e.classList.remove("show-opinion");
    }
  });

  tabsPerson.forEach((element) => {
    const removeActive = document.querySelectorAll(".tab-person");
    removeActive.forEach((i) => {
      i.classList.remove("active");
    if (counter === 1 && i.dataset.id === "person-1") {
      i.classList.add("active");
    } else if (counter == 2 && i.dataset.id == "person-2") {
      i.classList.add("active");
    } else if (counter == 3 && i.dataset.id == "person-3") {
      i.classList.add("active");
    } else if (counter == 4 && i.dataset.id == "person-4") {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
  });

});

document.querySelector(".slider-prev").addEventListener("click", function () {
  counter--;
  if (counter === 0) {
    counter = 4;
  }
  const removeActiveSlide = document.querySelectorAll(".slider .slide");
  removeActiveSlide.forEach((i) => {
    i.classList.remove("show-opinion");
  });
  let currentSlide = document.getElementById(`slide-${counter}`);
  currentSlide.classList.add("show-opinion");
  let tabsPerson = document.querySelectorAll(".person-tabs .tab-person");
  const personLi = document.querySelectorAll(".person-content li");
  personLi.forEach((e) => {
    if (counter === 1 && e.dataset.content === "person-1") {
      e.classList.add("show-opinion");
    } else if (counter === 2 && e.dataset.content === "person-2") {
      e.classList.add("show-opinion");
    } else if (counter === 3 && e.dataset.content === "person-3") {
      e.classList.add("show-opinion");
    } else if (counter === 4 && e.dataset.content === "person-4") {
      e.classList.add("show-opinion");
    } else {
      e.classList.remove("show-opinion");
    }
  });

  tabsPerson.forEach((element) => {
    const removeActive = document.querySelectorAll(".tab-person");
    removeActive.forEach((i) => {
      i.classList.remove("active");
    if (counter === 1 && i.dataset.id === "person-1") {
      i.classList.add("active");
    } else if (counter == 2 && i.dataset.id == "person-2") {
      i.classList.add("active");
    } else if (counter == 3 && i.dataset.id == "person-3") {
      i.classList.add("active");
    } else if (counter == 4 && i.dataset.id == "person-4") {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
  });
  
});
