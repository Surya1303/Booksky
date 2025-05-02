var overlayscrn = document.querySelector(".overlay");
var popupboxscrn = document.querySelector(".popupbox");
var addpopupscrn = document.getElementById("add-popup");

addpopupscrn.addEventListener("click", function () {
  overlayscrn.style.display = "block";
  popupboxscrn.style.display = "block";
});

var addbook = document.getElementById("addbook");
var cancelbook = document.getElementById("cancelpopup");

cancelbook.addEventListener("click", function (event) {
  event.preventDefault();
  overlayscrn.style.display = "none";
  popupboxscrn.style.display = "none";
});

var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var booktitleinput = document.getElementById("Book-title-input");
var bookauthorinput = document.getElementById("Book-Author-input");
var booktdescriptioninput = document.getElementById("Book-Description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <P>${booktdescriptioninput.value}</P>
    <button onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  overlayscrn.style.display = "none";
  popupboxscrn.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}