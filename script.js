var btn = document.getElementById("more-btn")
var ul = document.getElementsByClassName("respon")[0]
var sideBar = document.getElementById("side-bar-menu")
var closeBar = document.getElementById("close-bar")
console.log(btn);
btn.addEventListener("click", function () {
  ul.classList.toggle("active")
  if (ul.classList.contains("active")) {
    document.getElementById("more-i").classList.add("active")
  } else {
    document.getElementById("more-i").classList.remove('active')
  }
})
window.onscroll = function () { scrolfunc() };
header = document.getElementsByClassName('header')[0]
function scrolfunc() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.position = "sticky"
    header.style.top = '0'
    header.style.background = 'white'
  } else {
    header.style.position = 'static'
  }
}

sideBar.addEventListener("click", () => {
  console.log(document.getElementsByClassName("pwr-burger")[0]);
  document.getElementsByClassName("pwr-burger")[0].style.right = '0'
})

closeBar.addEventListener("click", () => {
  document.getElementsByClassName("pwr-burger")[0].style.right = '-400px'
})
// FAQs
const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");
console.log(acc_btns);

acc_btns.forEach(function (bton) {
  bton.addEventListener("click", function (e) {

    acc_contents.forEach(function (acc) {
      if (

        acc.classList.contains("active") &&
        e.target.nextElementSibling !== acc

      ) {
        acc.classList.remove("active");
        acc_btns.forEach(function (button) { button.classList.remove("active") });
      }
    });

    const panel = bton.nextElementSibling;
    console.log(panel, "panel");
    panel.classList.toggle("active");
    bton.classList.toggle("active");

  });
});

window.onclick = function (e) {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach(function (btn) { btn.classList.remove("active") });
    acc_contents.forEach(function (acc) { acc.classList.remove("active") });
  }
};

document.getElementById('current-lang').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('.language-selector').classList.toggle('show');
});

window.addEventListener('click', function (event) {
  if (!event.target.matches('#current-lang') && !event.target.closest('.language-selector')) {
    document.querySelector('.language-selector').classList.remove('show');
  }
});
// translate
