const btn = document.querySelector("#btn");
const img = document.getElementById("img");

btn.addEventListener("click", () => {
  img.classList.toggle("show");
});

// *******************************

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
});

//************************************* */

const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme", "brightTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "bright":
        document.body.classList.add("brightTheme");
        break;
      default:
        null;
    }
  });
});
