import data from "./data.js";
const stories = document.querySelector(".stories");
const cardsBody = document.querySelector(".body");

let storyClutter = "";
let postClutter = "";
data.forEach((item, index) => {
  storyClutter += `<div class="story">
  <img
    id=${index}
    src=${item.dp}
    alt=""
  />
</div>`;
  postClutter += `
<div class="card">
            <div class="card-header">
              <img src=${item.dp}  class="card-dp" alt="" />
              <h6>${item.name}</h6>
              <i class='bx bx-dots-vertical-rounded'></i>
            </div>
            <div class="image-container">
              <i class='bx bxs-heart'></i>
              <img src=${item.post} alt="">
            </div>
            <div class="card-footer">
              <i class='bx bxs-heart'></i>
              <p>Follow+</p>
            </div>
          </div>
`;
});

stories.innerHTML = storyClutter;
cardsBody.innerHTML = postClutter;

stories.addEventListener("click", (e) => {
  var storyImage = data[e?.target?.id].story;
  document.querySelector(".storyPanel").style.display = "block";
  document.querySelector(
    ".storyPanel"
  ).style.backgroundImage = `url(${storyImage})`;

  setTimeout(() => {
    document.querySelector(".storyPanel").style.display = "none";
  }, 3000);
});

const followtext = document.querySelectorAll(".card-footer p");
const smallHeart = document.querySelectorAll(".card-footer .bxs-heart");
const images = document.querySelectorAll(".image-container");

const popHeart = (centerHeart) => {
  centerHeart.style.transform = "translate(-50%,-50%) scale(2)";
  centerHeart.style.opacity = "0.8";

  setTimeout(() => {
    centerHeart.style.transform = "translate(-50%,-50%) scale(0)";
    centerHeart.style.opacity = "0";
  }, 1000);
};

const makeHeartRed = (oneSmallHeart) => {
  if (oneSmallHeart.classList.value.includes("liked")) {
    oneSmallHeart.classList.remove("liked");
    oneSmallHeart.style.color = "#bbb";
  } else {
    oneSmallHeart.classList.add("liked");
    oneSmallHeart.style.color = "red";
  }
};

followtext.forEach((oneFollowText) => {
  oneFollowText.addEventListener("click", (e) => {
    e.target.innerHTML === "Follow+"
      ? (e.target.innerHTML = "Following")
      : (e.target.innerHTML = "Follow+");
  });
});

smallHeart.forEach((oneSmallHeart) => {
  oneSmallHeart.addEventListener("click", (e) => {
    const centerHeartElement =
      e.target.parentNode.parentNode.children[1].children[0];
    popHeart(centerHeartElement);
    makeHeartRed(e.target);
  });
});

images.forEach((image) => {
  image.addEventListener("dblclick", () => {
    const centerHeartElement = image.children[0];
    const smallHeartElement = image.parentNode.children[2].children[0];
    popHeart(centerHeartElement);
    makeHeartRed(smallHeartElement);
  });
});
