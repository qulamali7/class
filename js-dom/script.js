// const btn = document.querySelector(".btn");
// let style = btn.style;
// style.color = "white";
// style.backgroundColor = "black";
// style.border = "none";
// style.padding = "20px";
// style.borderRadius = "20px";
// style.fontSize = "24px";
// style.fontWeight = "600";
// let bodystyle = document.body.style;
// bodystyle.height = "500px";
// bodystyle.width="200px"
// bodystyle.display = "flex";
// bodystyle.flexWrap="wrap"
// bodystyle.alignItems = "center";
// bodystyle.justifyContent = "center";
// bodystyle.flexDirection = "column";
// bodystyle.boxSizing="border-box"

// task1
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => alert("HELLO"));

// task2
// btn.addEventListener("click", () => alert(`${btn.textContent}`));

// task3
// const div = document.createElement("div");
// document.body.append(div);
// div.style.marginTop = "50px";
// div.style.boxSizing = "border-box";
// div.style.overflow = "hidden";
// div.style.height = "200px";
// div.style.width = "200px";
// div.style.border = "2px solid blue";
// btn.addEventListener("click", () => div.append(btn.textContent));

// task4
// const ul = document.querySelectorAll("ul li");
// for (let i = 0; i < ul.length; i++) {
//     ul[i].addEventListener("click", () => console.log(ul[i].textContent));
// }

// ul.forEach((x) => {
//   x.addEventListener("click", () => console.log(x.textContent));
// });

// task5
// const ul = document.querySelectorAll("ul li");
// for (let i = 0; i < ul.length; i++) {
//   ul[i].addEventListener("click", () => {
//     ul[i].classList.toggle("style");
//   });
// }

// task6
// const ul = document.querySelectorAll("ul li");
// for (let i = 0; i < ul.length; i++) {
//   ul[i].addEventListener("click", () => {
//     ul[i].remove();
//   });
// }

// task7
const button = document.querySelector(".btn");
const input = document.querySelector(".stylecolor");
const int = document.querySelector(".stylewidth");
const div = document.querySelector("div");
button.addEventListener("click", () => {
  div.style.backgroundColor = input.value;
  div.style.width = int.value;
});
