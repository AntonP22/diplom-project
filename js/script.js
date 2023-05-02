//Модальное окно в портфолио
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalPrev = document.querySelector(".modal-prev");
const modalNext = document.querySelector(".modal-next");
const images = document.querySelectorAll(".portfolio-img img");
let currentImageIndex;

document.addEventListener("DOMContentLoaded", () => {
  modal.style.display = "none";
});

images.forEach((img, index) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    currentImageIndex = index;
  });
});

window.addEventListener("click", (event) => {
  if (event.target === modal || event.target === modalImg) {
    modal.style.display = "none";
  }
});

modalPrev.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentImageIndex].src;
});

modalNext.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImg.src = images[currentImageIndex].src;
});




//анимация текста
var typed = new Typed(".typing", {
  strings: ["автор текстов", "копирайтер", "рерайтер"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
var typed2 = new Typed(".typing2", {
  strings: ["автор текстов", "копирайтер", "рерайтер"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/*боковое меню*/
const nav = document.querySelector(".nav"),
  navList = document.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
let lastOpenedTab = null;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    lastOpenedTab = this.getAttribute("href").split("#")[1];
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function addBackSection(num) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  let target;
  if (element) {
    target = element.getAttribute("href").split("#")[1];
    lastOpenedTab = target;
  } else {
    target = lastOpenedTab;
  }
  document.querySelector("#" + target).classList.add("active");
  updateNav(element);
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}



/*бутерброд*/

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}


/*разное*/
function openMailClient() {
  const mailtoLink = "mailto:" + encodeURIComponent("info@email.ru");
  window.open(mailtoLink);
}

//проверка на отправку сообщения и вывод на экран
const form = document.querySelector('#contact-form');
  const info = document.querySelector('#info');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('/php/send.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        info.textContent = 'Сообщение отправлено успешно';
      } else {
        info.textContent = 'Ошибка отправки сообщения';
      }
    })
    .catch(error => {
      info.textContent = 'Произошла ошибка: ' + error.message;
    });
  });