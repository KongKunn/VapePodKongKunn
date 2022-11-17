// let items = document.querySelectorAll("a");
// items.forEach((a) => {
//   a.addEventListener("click", function (e) {
//     document.getElementById("active").style.left = e.target.offsetLeft + "px";
//   });
// });

let items = document.querySelectorAll("li");
items.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.getElementById("action").style.left = e.target.offsetLeft + "px";
    items.forEach((li_hide) => {
      li_hide.classList.remove("active");
    });
    this.classList.add("active");
  });
});
