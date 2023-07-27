"use strict";
let toggle = document.getElementById("toggle-nav");
let burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  toggle.classList.toggle("open");
  let isOpen = toggle.classList.contains("open");
  burger.classList = isOpen
    ? "fa-solid fa-xmark burger"
    : "fa-solid fa-bars burger";
});

let scrollToTop = document.getElementById("top");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let divContainer = document.getElementById("div-nft");

function ajax(url, callback) {
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.status !== 200) {
        throw "error";
      }
      return response.json();
    })
    .then((responseData) => {
      callback(responseData);
    })
    .catch((error) => console.log(error));
}

ajax("http://localhost:3000/data", function (data) {
  data.forEach((element) => {
    create(element);
  });
});

function create(x) {
  let diVWraper = document.createElement("div");
  diVWraper.classList.add("nft-item");

  let pic = document.createElement("img");
  pic.src = x.thumbnailUrl;
  pic.classList.add("picture");
  let h2tag = document.createElement("h2");
  h2tag.innerHTML = x.title;
  h2tag.classList.add("h2-tag");
  diVWraper.appendChild(h2tag);
  diVWraper.appendChild(pic);
  divContainer.appendChild(diVWraper);
}


let cookieBox = document.querySelector(".cookies");

let accaptBtn
accaptBtn = cookieBox.querySelector(".div-buttons button");

accaptBtn.onclick = () => {
  document.cookie = "cookieBy=alex;" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookieBox.classList.add("close1");
  } else {
    alert("cookies can not be set");
  }
};
